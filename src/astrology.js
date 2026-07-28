import { Body, GeoVector, Ecliptic, SiderealTime } from 'astronomy-engine';

const bodies = [
  ['Güneş', Body.Sun], ['Ay', Body.Moon], ['Merkür', Body.Mercury],
  ['Venüs', Body.Venus], ['Mars', Body.Mars], ['Jüpiter', Body.Jupiter],
  ['Satürn', Body.Saturn], ['Uranüs', Body.Uranus], ['Neptün', Body.Neptune],
  ['Plüton', Body.Pluto]
];
const signs=['Koç','Boğa','İkizler','Yengeç','Aslan','Başak','Terazi','Akrep','Yay','Oğlak','Kova','Balık'];
const signElement=['Ateş','Toprak','Hava','Su','Ateş','Toprak','Hava','Su','Ateş','Toprak','Hava','Su'];
const signMode=['Öncü','Sabit','Değişken','Öncü','Sabit','Değişken','Öncü','Sabit','Değişken','Öncü','Sabit','Değişken'];
const aspects=[
  {name:'Kavuşum',angle:0,orb:8}, {name:'Sekstil',angle:60,orb:5},
  {name:'Kare',angle:90,orb:7}, {name:'Üçgen',angle:120,orb:7},
  {name:'Karşıt',angle:180,orb:8}
];
const norm=n=>((n%360)+360)%360;
const rad=d=>d*Math.PI/180;
const deg=r=>r*180/Math.PI;
const placement=longitude=>{const l=norm(longitude),i=Math.floor(l/30);return{sign:signs[i],degree:Number((l-i*30).toFixed(2)),longitude:Number(l.toFixed(4)),element:signElement[i],mode:signMode[i]}};
const angularDistance=(a,b)=>{const d=Math.abs(norm(a)-norm(b));return d>180?360-d:d};

async function geocode(place){
  const url=`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(place)}&count=1&language=tr&format=json`;
  const response=await fetch(url,{headers:{accept:'application/json'}});
  if(!response.ok)throw new Error('Doğum yeri bulunamadı.');
  const data=await response.json();
  const result=data.results?.[0];
  if(!result)throw new Error('Doğum yeri bulunamadı. Şehir ve ülke birlikte yazılmalı.');
  return{latitude:result.latitude,longitude:result.longitude,timezone:result.timezone,name:[result.name,result.admin1,result.country].filter(Boolean).join(', ')};
}
function zonedParts(date,timeZone){
  const parts=new Intl.DateTimeFormat('en-CA',{timeZone,year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',second:'2-digit',hourCycle:'h23'}).formatToParts(date);
  return Object.fromEntries(parts.filter(x=>x.type!=='literal').map(x=>[x.type,Number(x.value)]));
}
function localToUtc(dateText,timeText,timeZone){
  const [year,month,day]=dateText.split('-').map(Number);
  const [hour,minute]=String(timeText||'12:00').split(':').map(Number);
  const target=Date.UTC(year,month-1,day,hour,minute||0,0);
  let utc=target;
  for(let i=0;i<4;i++){
    const p=zonedParts(new Date(utc),timeZone);
    const represented=Date.UTC(p.year,p.month-1,p.day,p.hour,p.minute,p.second||0);
    utc+=target-represented;
  }
  return new Date(utc);
}
function ascendant(date,lat,lon){
  const theta=rad(norm(SiderealTime(date)*15+lon));
  const eps=rad(23.4392911);
  const phi=rad(lat);
  return norm(deg(Math.atan2(-Math.cos(theta),Math.sin(theta)*Math.cos(eps)+Math.tan(phi)*Math.sin(eps))));
}
function midheaven(date,lon){
  const theta=rad(norm(SiderealTime(date)*15+lon));
  const eps=rad(23.4392911);
  return norm(deg(Math.atan2(Math.sin(theta),Math.cos(theta)*Math.cos(eps))));
}
function houseFor(longitude,asc){return Math.floor(norm(longitude-asc)/30)+1}
function planetLongitude(body,date){
  const vector=GeoVector(body,date,true);
  return norm(Ecliptic(vector).elon);
}
function buildAspects(planets){
  const out=[];
  for(let i=0;i<planets.length;i++)for(let j=i+1;j<planets.length;j++){
    const distance=angularDistance(planets[i].longitude,planets[j].longitude);
    for(const aspect of aspects){
      const delta=Math.abs(distance-aspect.angle);
      if(delta<=aspect.orb){out.push({from:planets[i].name,to:planets[j].name,type:aspect.name,orb:Number(delta.toFixed(2)),angle:Number(distance.toFixed(2))});break}
    }
  }
  return out.sort((a,b)=>a.orb-b.orb);
}
const planetInterpretation=p=>`${p.name} ${p.sign} burcunda ${p.degree.toFixed(2)}° ve ${p.house}. evde. ${p.sign} vurgusu ${p.element.toLowerCase()} elementinin ${p.mode.toLowerCase()} doğasını taşır.`;
const json=(data,status=200)=>new Response(JSON.stringify(data),{status,headers:{'content-type':'application/json; charset=utf-8','cache-control':'no-store'}});

export async function calculateCurrentSky(){
  try{
    const instant=new Date();
    const planets=bodies.map(([name,body])=>({name,...placement(planetLongitude(body,instant))}));
    const currentAspects=buildAspects(planets).slice(0,8);
    const counts=planets.reduce((out,p)=>(out[p.element]=(out[p.element]||0)+1,out),{});
    const dominantElement=Object.entries(counts).sort((a,b)=>b[1]-a[1])[0]?.[0]||'Dengeli';
    const sun=planets.find(p=>p.name==='Güneş');
    const moon=planets.find(p=>p.name==='Ay');
    const mercury=planets.find(p=>p.name==='Merkür');
    const headline=`Güneş ${sun.sign}, Ay ${moon.sign}: ${dominantElement.toLowerCase()} elementi bugün daha görünür.`;
    const summary=`Günün ana zemini Güneş'in ${sun.sign} burcundaki ${sun.degree}° konumu ile Ay'ın ${moon.sign} burcundaki ${moon.degree}° hareketi arasında kuruluyor. Merkür ${mercury.sign} burcunda olduğu için düşünme ve iletişim biçiminde ${mercury.element.toLowerCase()} niteliği öne çıkabilir.`;
    return json({
      calculatedAt:instant.toISOString(),
      engine:{name:'Astronomy Engine',method:'gerçek zamanlı jeosantrik ekliptik boylam'},
      headline,summary,dominantElement,planets,aspects:currentAspects,
      note:'Bu ekran astronomik konumları gösterir; yorumlar kişisel doğum haritası yerine güncel gökyüzünün genel sembolik temasını açıklar.'
    });
  }catch(error){return json({error:error.message||'Güncel gökyüzü hesaplanamadı.'},500)}
}

export async function calculateNatalChart(request){
  let input;
  try{input=await request.json()}catch{return json({error:'Geçerli doğum bilgileri gönderilmedi.'},400)}
  const birthDate=String(input.birthDate||'');
  const birthTime=String(input.birthTime||'');
  const birthPlace=String(input.birthPlace||'').trim();
  const timeUnknown=Boolean(input.timeUnknown);
  if(!/^\d{4}-\d{2}-\d{2}$/.test(birthDate)||!birthPlace)return json({error:'Doğum tarihi ve doğum yeri zorunludur.'},400);
  if(!timeUnknown&&!/^\d{2}:\d{2}$/.test(birthTime))return json({error:'Doğum saati girilmeli veya “saatimi bilmiyorum” seçilmelidir.'},400);
  try{
    const location=await geocode(birthPlace);
    const usedTime=timeUnknown?'12:00':birthTime;
    const instant=localToUtc(birthDate,usedTime,location.timezone);
    if(Number.isNaN(instant.getTime()))throw new Error('Doğum zamanı hesaplanamadı.');
    const asc=timeUnknown?null:ascendant(instant,location.latitude,location.longitude);
    const mc=timeUnknown?null:midheaven(instant,location.longitude);
    const planets=bodies.map(([name,body])=>{
      const longitude=planetLongitude(body,instant);
      const p={name,...placement(longitude)};
      if(asc!==null)p.house=houseFor(longitude,asc);
      p.interpretation=asc===null?`${p.name} ${p.sign} burcunda ${p.degree.toFixed(2)}°.`:planetInterpretation(p);
      return p;
    });
    const houses=asc===null?[]:Array.from({length:12},(_,i)=>({house:i+1,cusp:placement(asc+i*30)}));
    const angles=asc===null?null:{ascendant:placement(asc),midheaven:placement(mc),descendant:placement(asc+180),imumCoeli:placement(mc+180),houseSystem:'Eşit Ev'};
    const sun=planets.find(x=>x.name==='Güneş'),moon=planets.find(x=>x.name==='Ay');
    const summary={sun:sun.sign,moon:moon.sign,rising:angles?.ascendant.sign||null,dominantElements:Object.entries(planets.reduce((a,p)=>(a[p.element]=(a[p.element]||0)+1,a),{})).sort((a,b)=>b[1]-a[1]).map(([element,count])=>({element,count}))};
    return json({
      engine:{name:'Astronomy Engine',accuracy:'yaklaşık ±1 yay-dakikası gezegen konumu',houseSystem:angles?'Eşit Ev':null},
      birth:{date:birthDate,time:timeUnknown?null:birthTime,timeUnknown,utc:instant.toISOString(),location},
      summary,angles,houses,planets,aspects:buildAspects(planets),
      note:timeUnknown?'Doğum saati bilinmediği için yükselen, MC ve evler hesaplanmadı. Gezegen burçları öğlen referansıyla gösterildi.':'Yükselen, MC ve evler girilen doğum saati, koordinat ve tarihsel zaman dilimiyle hesaplandı.'
    });
  }catch(error){return json({error:error.message||'Doğum haritası hesaplanamadı.'},422)}
}