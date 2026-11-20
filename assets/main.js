{
document.documentElement.classList.add('js');
const pages=[["home","home"],["about","about"],["audio","audio"],["theatre","theatre"],["writing","writing"],["resume","résumé"]];
const nav=document.getElementById('nav');
nav.innerHTML=pages.map(([id,l],i)=>(i?'<span>|</span>':'')+`<a href="#${id}" data-p="${id}">${l}</a>`).join('');

const audio=[
  {when:"2026 – now",what:"The Bells I Hear & Threads of Voices",sub:"Podcast Producer, Mentor A Promise",tag:"podcast",pts:["Planning Season 2 of two shows: one on homelessness and solutions to the crisis, one on creative expression and identity.","Manage a team of editors and hosts producing 3 episodes a month; run timelines and guest outreach."]},
  {when:"2023 – now",what:"Audiobooks at Simon & Schuster",sub:"Associate Producer of Audio",tag:"audiobook",pts:["Produced 60+ titles, managing logistics with studios, engineers, authors, and actors.","Directed titles and author features in studio, including Root Therapy by Felicia Leatherwood and Issa Rae.","Edit and engineer raw audio in Pro Tools, designing mixes when the project allows.","Designed a new production schedule to support the team's work on 1,000+ titles a year."]},
  {when:"2024 – 2025",what:"Weak Creatures",sub:"Lead Producer",tag:"podcast",pts:["Designed, mixed, edited, and mastered all 15 episodes of a talk-show podcast.","Booked guests and guided recordings so artists felt comfortable and sounded their best."]},
  {when:"2024",what:"Sounds Funny Radio",sub:"Audio Producer, Mirrortone Studios",tag:"podcast",pts:["Post-production for a narrative podcast: design, mix, edit, master.","Assisted producer James Quesada with live recording and mixing of the cast."]},
  {when:"Fall 2020",what:"A Walk in My Neighborhood",sub:"Assistant Director & Associate Producer",tag:"audio play",pts:["An immersive guided audio walk through Atwater Village, Los Angeles, on history and people's relationship to land and community.","Edited copy and advised on the piece's storytelling and logistics."]}
];
const theatre=[
  {when:"2022",what:"Meat",sub:"Sound Designer, The Tank",tag:"sound design",pts:["Built the play's auditory world with the director: sourcing, mixing, and producing the sound."]},
  {when:"2022",what:"Don't Do This To Us",sub:"Co-Producer, The Tank",tag:"producing",pts:["Led a 20+ person team of technicians and actors through ~15 off-Broadway performances.","Hired staff, ran auditions and vendors, directed load-in and load-out, and shaped marketing on a $35K budget."]},
  {when:"2021 – 2023",what:"Manhattan Theatre Club",sub:"Assistant to the Executive Producer",tag:"producing",pts:["Managed a $65K budget for Tony and Lortel awards season with PR and marketing.","Helped read audience and attendance trends that informed whether to extend or close a run.","Led DEI work including the first staff-wide picnic and first internal culture survey."]},
  {when:"2021",what:"Primetime Theater Fest",sub:"Co-Producer & Resident Sound Designer",tag:"festival",pts:["Co-created a virtual festival during Covid built on collaborative writing: 6 new plays, 30 artists.","Raised $9K, designed sound for every play, and ran scheduling, video post, and the social campaign.","Kept 30 people working and 100+ audience members entertained under lockdown."]},
  {when:"2020",what:"Senior honors thesis, Dartmouth",sub:"Playwright & Producer",tag:"new play",pts:["Wrote and produced a workshop reading of an original play as a Mellon Mays Fellow."]}
];
const S='https://samawest.substack.com/p/';
const writing=[
  ["Nov 6, 2026","Four Weddings and a Cat Funeral","a tale of something old, something new, something borrowed, and something true","essay","four-weddings-and-a-cat-funeral"],
  ["Sep 17, 2026","Where Venus Sets","a poem for the end of the harvest","poem","where-venus-sets"],
  ["Jul 30, 2026","If there's gold","a poem for something enough","poem","if-theres-gold"],
  ["Feb 14, 2026","a kind of god","a poem for loving and believing","poem","sonnet-a"],
  ["Jan 20, 2026","Algiers","a poem for another west bank","poem","algiers"],
  ["Jan 3, 2026","Best of 2025","my endorsements for 2025, in no particular order","list","best-of-2025"],
  ["Dec 2, 2025","Sepia & Smog","a poem for leaving home","poem","sepia-and-smog"],
  ["Nov 15, 2025","Double Edged","a poem for endings","poem","double-edged"],
  ["Oct 24, 2025","The Ghosts","a poem for the spookies and scaries","poem","the-ghosts"],
  ["Oct 17, 2025","Autumn Wind","a little poem for fall","poem","autumn-wind"],
  ["Apr 13, 2025","seasons are shy in new york","a poem for spring","poem","seasons-are-shy-in-new-york"],
  ["Feb 16, 2025","Quasar","a poem for new lovers","poem","quasar"]
];
const esc=s=>s.replace(/&/g,'&amp;').replace(/</g,'&lt;');
const row=r=>`<details><summary><span class="when">${r.when}</span><span class="what">${esc(r.what)}<small>${esc(r.sub)}</small></span><span class="tag">${r.tag}</span></summary><ul>${r.pts.map(p=>`<li>${esc(p)}</li>`).join('')}</ul></details>`;
document.getElementById('audio-list').innerHTML=audio.map(row).join('');
document.getElementById('theatre-list').innerHTML=theatre.map(row).join('');
const wrow=([d,t,sub,tag,slug])=>`<a class="row" href="${S+slug}"><span class="when">${d}</span><span class="what">${esc(t)}<small>${esc(sub)}</small></span><span class="tag">${tag}</span></a>`;
document.getElementById('writing-list').innerHTML=writing.map(wrow).join('');
document.getElementById('recent').innerHTML=writing.slice(0,3).map(wrow).join('');
document.getElementById('now').innerHTML=[audio[1],audio[0]].map(row).join('');


// ticker
const q=[["All the world’s a stage, and all the men and women merely players.","William Shakespeare"],["If music be the food of love, play on.","William Shakespeare"]];
const once=q.map(([t,a])=>`<span>“${t}” — ${a}</span><b>✦</b>`).join('');
document.getElementById('track').innerHTML=once+once+once+once;

function show(){const id=(location.hash||'#home').slice(1);const p=pages.some(x=>x[0]===id)?id:'home';
  document.querySelectorAll('.view').forEach(v=>v.classList.toggle('on',v.id==='v-'+p));
  nav.querySelectorAll('a').forEach(a=>{if(a.dataset.p===p)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current')});
  window.scrollTo(0,0)}
addEventListener('hashchange',show);show();
// email assembled at runtime so address harvesters don't see it in the HTML
const ml=document.getElementById('mail');
if(ml){const a=[ml.dataset.u,ml.dataset.d].join(String.fromCharCode(64));ml.href='mai'+'lto:'+a;ml.textContent=a;}
}
