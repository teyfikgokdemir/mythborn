import {premiumGuideRoutes} from './premium-guides.js';

export const PREMIUM_DISMISSAL_DAYS=7;
export const ALWAYS_PUBLIC_ROUTES=new Set([
  '/','/gunluk-kart','/tarot-kartlari','/giris','/kayit','/hesabim',
  '/gizlilik','/kvkk','/kullanim-kosullari','/cerezler','/uyelik-yakinda'
]);
export const PROTECTED_ROUTES=new Set();

const enabled=value=>String(value).toLowerCase()==='true';
export function premiumState(env={},now=new Date()){
  const premiumStartsAt=String(env.PREMIUM_STARTS_AT||'');
  const startsAtMs=Date.parse(premiumStartsAt);
  const requestTime=now instanceof Date?now:new Date(now);
  const isPremiumPeriodStarted=Number.isFinite(startsAtMs)&&requestTime.getTime()>=startsAtMs;
  const isPremiumGateEnabled=enabled(env.PREMIUM_GATE_ENABLED);
  return {
    premiumStartsAt,
    requestTime:requestTime.toISOString(),
    isPremiumPeriodStarted,
    isPremiumGateEnabled,
    isPremiumRequired:false,
    showEarlyAccessBanner:false,
    dismissalExpiresAt:new Date(requestTime.getTime()+PREMIUM_DISMISSAL_DAYS*86400000).toISOString()
  };
}

export const isProtectedRoute=path=>PROTECTED_ROUTES.has(path);
export const hasActivePremiumMembership=async()=>false;
export async function routeRequiresPremium(){return false;}

const text={
  tr:{
    banner:'Mythborn’daki tüm astroloji, Tarot ve farkındalık deneyimleri ücretsiz ve üyelik gerektirmeden kullanılabilir.',
    close:'Erken erişim bildirimini 7 gün kapat',
    title:'Bu özellik ücretli üyelik kapsamında',
    body:'Gelişmiş Mythborn analizlerine erişim için ücretli üyelik gerekecek. Üyelik sistemi yakında açılacak.',
    cta:'Üyelik yakında'
  },
  en:{
    banner:'All Mythborn astrology, Tarot and reflection experiences are free and available without membership.',
    close:'Dismiss the early-access notice for 7 days',
    title:'This feature is part of paid membership',
    body:'Access to advanced Mythborn analyses will require a paid membership. Membership will be available soon.',
    cta:'Membership coming soon'
  },
  el:{
    banner:'Όλες οι αστρολογικές, Ταρώ και αναστοχαστικές εμπειρίες του Mythborn είναι δωρεάν και δεν απαιτούν εγγραφή.',
    close:'Απόκρυψη της ενημέρωσης πρώιμης πρόσβασης για 7 ημέρες',
    title:'Αυτή η λειτουργία περιλαμβάνεται στη συνδρομή επί πληρωμή',
    body:'Η πρόσβαση στις προηγμένες αναλύσεις του Mythborn θα απαιτεί συνδρομή επί πληρωμή. Η δυνατότητα συνδρομής θα είναι σύντομα διαθέσιμη.',
    cta:'Η συνδρομή έρχεται σύντομα'
  }
};

export function earlyAccessBanner(locale,state){
  if(!state.showEarlyAccessBanner)return '';
  const t=text[locale];
  return `<aside class="early-access-banner" data-early-access data-dismiss-until="${state.dismissalExpiresAt}" aria-label="${t.banner}"><span aria-hidden="true">✦</span><p>${t.banner}</p><button type="button" data-early-access-close aria-label="${t.close}">×</button></aside>`;
}

export function paywallPage(locale,path){
  const t=text[locale],home=locale==='tr'?'/':locale==='en'?'/en':'/gr';
  return `<!doctype html><html lang="${locale==='el'?'el':locale}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex"><title>${t.title} — Mythborn</title><meta name="description" content="${t.body}"><link rel="stylesheet" href="/app.css"><link rel="stylesheet" href="/final.css"><link rel="stylesheet" href="/paywall.css"></head><body><main id="ana-icerik"><section class="section"><div class="paywall-scene"><div class="paywall-reveal"><p class="eyebrow">MYTHBORN</p><h1>${t.title}</h1><p class="lead left-lead">${t.body}</p></div><aside class="paywall-offer"><span aria-hidden="true">✦</span><h2>${t.cta}</h2><button class="btn btn-primary" type="button" disabled>${t.cta}</button><a class="paywall-exit" href="${home}">Mythborn</a></aside></div></section></main></body></html>`;
}
