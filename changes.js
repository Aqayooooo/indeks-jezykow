'use strict';

(()=>{
 const section=document.querySelector('#skoki');
 if(!section)return;
 const filters=section.querySelector('#change-filters');
 const content=section.querySelector('#change-content');
 const escape=value=>String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const number=value=>value.toLocaleString('pl-PL',{minimumFractionDigits:2,maximumFractionDigits:2});
 const month=value=>new Date(`${value}-01T12:00:00Z`).toLocaleDateString('pl-PL',{month:'long',year:'numeric',timeZone:'UTC'});
 const months=(from,to)=>{const [fy,fm]=from.split('-').map(Number),[ty,tm]=to.split('-').map(Number);return (ty-fy)*12+tm-fm;};
 const plural=(count,one,few,many)=>count===1?one:count%10>=2&&count%10<=4&&(count%100<12||count%100>14)?few:many;
 const period=count=>{const years=Math.floor(count/12),rest=count%12;return [years?years+' '+plural(years,'rok','lata','lat'):'',rest?rest+' '+plural(rest,'miesiąc','miesiące','miesięcy'):''].filter(Boolean).join(' i ');};
 filters.innerHTML=languages.map(item=>`<button data-change-language="${item.id}" aria-pressed="${item.id==='python'}">${item.name}</button>`).join('');
 function render(id,updateURL=false){
  if(!languages.some(item=>item.id===id))return;
  filters.querySelectorAll('button').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.changeLanguage===id)));
  content.innerHTML=popularityChanges.cases.filter(item=>item.language===id).map(item=>{
   const difference=Math.round((item.to.value-item.from.value)*100)/100;
   const relative=(item.to.value/item.from.value-1)*100;
   const duration=months(item.from.month,item.to.month);
   return `<article class="change-case" id="${item.id}"><div class="change-metrics"><p class="change-period">${month(item.from.month)} → ${month(item.to.month)}</p><p class="change-values">${number(item.from.value)}<small>%</small><span aria-hidden="true">→</span>${number(item.to.value)}<small>%</small></p><p class="change-delta">${difference>0?'+':'−'}${number(Math.abs(difference))} p.p.</p><p class="change-relative">${relative>0?'+':'−'}${Math.abs(relative).toLocaleString('pl-PL',{maximumFractionDigits:1})}% względem wartości początkowej<br>${period(duration)}${item.from.rank&&item.to.rank?` · miejsce ${item.from.rank} → ${item.to.rank}`:''}</p></div><div class="change-explanation"><div class="change-title-row"><h3>${escape(item.title)}</h3><span class="evidence-label">${escape(item.evidence)}</span></div><p>${escape(item.explanation)}</p><p class="change-limit">${escape(item.limit)}</p><div class="change-sources" aria-label="Źródła przypadku">${item.sources.map(source=>`<a href="${escape(source.url)}" target="_blank" rel="noopener noreferrer">${escape(source.label)} <span aria-hidden="true">↗</span></a>`).join('')}</div></div></article>`;
  }).join('');
  if(updateURL)history.replaceState(null,'',`#skoki/${id}`);
 }
 filters.querySelectorAll('button').forEach(button=>button.addEventListener('click',()=>render(button.dataset.changeLanguage,true)));
 function readHash(){const [target,id]=location.hash.slice(1).split('/');if(target==='skoki'&&id&&languages.some(item=>item.id===id)){render(id);section.scrollIntoView();}}
 render('python');
 window.addEventListener('hashchange',readHash);
 readHash();
})();
