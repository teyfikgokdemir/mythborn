export const ASPECTS=[
  {key:'conjunction',angle:0,orb:8,priority:0},
  {key:'opposition',angle:180,orb:8,priority:1},
  {key:'square',angle:90,orb:7,priority:2},
  {key:'trine',angle:120,orb:7,priority:3},
  {key:'sextile',angle:60,orb:5,priority:4}
];

export const normalizeLongitude=value=>((Number(value)%360)+360)%360;
export const angularDistance=(a,b)=>{
  const difference=Math.abs(normalizeLongitude(a)-normalizeLongitude(b));
  return Math.min(difference,360-difference);
};

export function strongestAspect(planets=[]){
  const candidates=[];
  for(let first=0;first<planets.length;first+=1){
    for(let second=first+1;second<planets.length;second+=1){
      const distance=angularDistance(planets[first].longitude,planets[second].longitude);
      for(const aspect of ASPECTS){
        const exactOrb=Math.abs(distance-aspect.angle);
        if(exactOrb<=aspect.orb)candidates.push({
          ...aspect,
          from:planets[first],
          to:planets[second],
          exactOrb,
          normalizedOrb:exactOrb/aspect.orb
        });
      }
    }
  }
  return candidates.sort((a,b)=>
    a.normalizedOrb-b.normalizedOrb||
    a.priority-b.priority||
    a.exactOrb-b.exactOrb
  )[0]||null;
}

export const longitudePoint=(longitude,radius=100,centre=160)=>{
  const radians=(normalizeLongitude(longitude)-90)*Math.PI/180;
  return {
    x:Number((centre+Math.cos(radians)*radius).toFixed(3)),
    y:Number((centre+Math.sin(radians)*radius).toFixed(3))
  };
};

export function visualPlanetRadii(planets=[]){
  const sorted=planets.map((planet,index)=>({planet,index,longitude:normalizeLongitude(planet.longitude)}))
    .sort((a,b)=>a.longitude-b.longitude);
  const radii=Array(planets.length).fill(105);
  sorted.forEach((item,index)=>{
    const previous=sorted[(index-1+sorted.length)%sorted.length];
    const gap=angularDistance(item.longitude,previous.longitude);
    if(gap<8)radii[item.index]=index%2?90:118;
  });
  return radii;
}
