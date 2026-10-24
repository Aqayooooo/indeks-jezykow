'use strict';

const $=selector=>document.querySelector(selector);
const $$=selector=>[...document.querySelectorAll(selector)];
const format=value=>value.toLocaleString('pl-PL',{minimumFractionDigits:2,maximumFractionDigits:2});
const escapeText=value=>String(value).replace(/[&<>"']/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
const symbols={python:'Py',cpp:'C++',java:'J',javascript:'JS',php:'php',kotlin:'Kt'};
const descriptions={python:'Zastosowania: analiza danych, automatyzacja, uczenie maszynowe i aplikacje backendowe.',cpp:'Standard ISO/IEC 14882:2024. Zastosowania: oprogramowanie systemowe, silniki gier i obliczenia wymagające kontroli zasobów.',java:'Ekosystem JVM. Zastosowania: aplikacje backendowe, systemy biznesowe i infrastruktura serwerowa.',javascript:'Standard ECMAScript. Zastosowania: interfejsy w przeglądarce oraz aplikacje serwerowe, m.in. w Node.js.',php:'Zastosowania: dynamiczne witryny, systemy CMS i backend aplikacji internetowych.',kotlin:'Ekosystem JVM, Android i Kotlin Multiplatform. Wersja 2.4.21 zawiera poprawki linii 2.4.'};
const statuses={python:'Wydanie stabilne',cpp:'ISO/IEC 14882:2024',java:'Java 25: LTS',javascript:'ECMAScript · edycja 17',php:'8.6: Release Candidate',kotlin:'Poprawki linii 2.4'};
const years=[2005,2010,2015,2020,2025];
let highlighted='python';
let selected='python';

$('#ranking-body').innerHTML=languages.map(item=>`<tr><td class="position">${String(item.rank).padStart(2,'0')}</td><td><a class="language-link" href="#wersje/${item.id}" data-profile="${item.id}"><span class="language-mark" aria-hidden="true">${symbols[item.id]}</span><span class="language-name">${item.name}</span></a></td><td class="bar-cell"><div class="popularity-bar" aria-hidden="true"><span style="width:${item.score/20*100}%"></span></div></td><td class="numeric"><span class="score">${format(item.score)}<small>%</small></span></td><td class="numeric"><span class="change">${item.change===null?'—':`${item.change>0?'+':'−'}${format(Math.abs(item.change))} p.p.`}</span></td><td class="version-cell"><a class="version-link" href="#wersje/${item.id}" data-profile="${item.id}">${item.version}</a></td></tr>`).join('');

const historical=languages.filter(item=>item.history);
$('#history-filters').innerHTML=[{id:'all',name:'Wszystkie'},...historical].map(item=>`<button data-history="${item.id}" aria-pressed="${item.id===highlighted}">${item.id!=='all'?'<span class="filter-line" aria-hidden="true"></span>':''}${item.name}</button>`).join('');
function drawHistory(){
 const x=index=>70+index*200;
 const y=rank=>35+(rank-1)*23;
 let markup='<title id="chart-title">Historia pozycji w rankingu TIOBE</title><desc id="chart-description">Pozycje w latach 2005, 2010, 2015, 2020 i 2025. Wyżej oznacza lepszą pozycję. Tabela pod wykresem zawiera dokładne wartości.</desc>';
 [1,3,6,9,12].forEach(rank=>{markup+=`<line class="grid" x1="70" x2="882" y1="${y(rank)}" y2="${y(rank)}"/><text x="43" y="${y(rank)+4}" text-anchor="end">${rank}</text>`;});
 years.forEach((year,index)=>{markup+=`<text x="${x(index)}" y="324" text-anchor="middle">${year}</text>`;});
 const series=[...historical].sort((a,b)=>(a.id===highlighted?1:0)-(b.id===highlighted?1:0));
 const dashes={python:'',cpp:'7 4',java:'2 4',javascript:'12 4',php:'7 3 2 3'};
 const gray={python:'#454d56',cpp:'#707a85',java:'#9ba3ac',javascript:'#6e7882',php:'#a8afb7'};
 series.forEach(item=>{
  const active=highlighted===item.id;
  const showAll=highlighted==='all';
  const color=active?'#252d36':showAll?gray[item.id]:'#c4cbd2';
  const width=active?2.5:showAll?1.7:1.4;
  markup+=`<g><polyline class="history-line" points="${item.history.map((rank,index)=>`${x(index)},${y(rank)}`).join(' ')}" stroke="${color}" stroke-width="${width}" stroke-dasharray="${active?'':dashes[item.id]}"/>`;
  item.history.forEach((rank,index)=>{markup+=`<circle cx="${x(index)}" cy="${y(rank)}" r="${active?3.8:2.5}" fill="#f7f8f9" stroke="${color}" stroke-width="${active?2:1.4}"><title>${item.name}, ${years[index]}: miejsce ${rank}</title></circle>${active?`<text x="${x(index)}" y="${y(rank)-12}" text-anchor="middle" style="fill:#4d5865;font-weight:500">${rank}</text>`:''}`;});
  markup+=`<text class="end-label" x="899" y="${y(item.history[4])+4}" style="fill:${active?'#303943':showAll?gray[item.id]:'#aeb6bf'}">${item.name}</text></g>`;
 });
 $('#history-chart').innerHTML=markup;
 const item=historical.find(entry=>entry.id===highlighted);
 $('#history-summary').innerHTML=item?`<strong>${item.name}</strong>: ${item.history[0]}. miejsce (2005) → ${item.history[4]}. miejsce (2025).`:'Pozycje pięciu języków w latach 2005–2025.';
}
$$('[data-history]').forEach(button=>button.addEventListener('click',()=>{highlighted=button.dataset.history;$$('[data-history]').forEach(item=>item.setAttribute('aria-pressed',String(item===button)));drawHistory();}));
$('#history-body').innerHTML=historical.map(item=>`<tr><th scope="row">${item.name}</th>${item.history.map(rank=>`<td>${rank}</td>`).join('')}</tr>`).join('');
$('#toggle-history-table').addEventListener('click',()=>{const expanded=$('#toggle-history-table').getAttribute('aria-expanded')==='true';$('#toggle-history-table').setAttribute('aria-expanded',String(!expanded));$('#history-data').hidden=expanded;$('#toggle-history-table span').textContent=expanded?'+':'−';});
drawHistory();

$('#language-tabs').innerHTML=languages.map((item,index)=>`<button role="tab" id="tab-${item.id}" data-language="${item.id}" aria-controls="language-content" aria-selected="${index===0}" tabindex="${index===0?0:-1}">${item.name}</button>`).join('');
function renderLanguage(id,updateHash=false){
 const item=languages.find(entry=>entry.id===id);
 if(!item)return;
 selected=id;
 $$('[role=tab]').forEach(tab=>{const active=tab.dataset.language===id;tab.setAttribute('aria-selected',String(active));tab.tabIndex=active?0:-1;});
 const content=$('#language-content');
 content.setAttribute('aria-labelledby',`tab-${id}`);
 content.innerHTML=`<div class="language-profile"><div><div class="language-title"><h3>${item.name}</h3><span>${item.born}</span></div><p class="language-description">${escapeText(descriptions[item.id])}</p></div><div class="current-version"><span class="label">Wersja / standard</span><strong>${item.version}</strong><span class="status">${statuses[item.id]}</span></div></div><table class="release-table"><caption class="sr-only">Trzy istotne wydania języka ${item.name}</caption><thead><tr><th scope="col">Wydanie</th><th scope="col">Zmiany</th><th scope="col">Znaczenie</th></tr></thead><tbody>${item.releases.map(release=>`<tr><td><span class="release-number">${release[0]}</span><span class="release-year">${release[1]}</span></td><td><h4>${escapeText(item.id==='python' && release[0]==='3.13' ? 'Tryb bez GIL i eksperymentalny JIT' : release[2])}</h4>${release[4]?`<span class="release-warning">${escapeText(release[4])}</span>`:''}</td><td><p>${escapeText(release[3])}</p></td></tr>`).join('')}</tbody></table>${item.future?`<p class="future-note">${escapeText(item.future)}</p>`:''}<details class="code-details"><summary><span>Przykład kodu</span><span aria-hidden="true">+</span></summary><div class="code-toolbar"><span>${item.file}</span><button id="copy-code" class="copy-button">Kopiuj kod</button></div><pre><code>${escapeText(item.code)}</code></pre><p class="code-note">${escapeText(item.demoNote)}</p></details>`;
 $('#copy-code').addEventListener('click',async()=>{
  try{await navigator.clipboard.writeText(item.code);$('#copy-code').textContent='Skopiowano';}
  catch{const range=document.createRange();range.selectNodeContents($('#language-content code'));const selection=window.getSelection();selection.removeAllRanges();selection.addRange(range);$('#copy-code').textContent='Kod zaznaczony';}
 });
 if(updateHash)history.replaceState(null,'',`#wersje/${id}`);
}
$$('[role=tab]').forEach((tab,index)=>{
 tab.addEventListener('click',()=>renderLanguage(tab.dataset.language,true));
 tab.addEventListener('keydown',event=>{
  let target;
  if(event.key==='ArrowRight')target=(index+1)%languages.length;
  if(event.key==='ArrowLeft')target=(index+languages.length-1)%languages.length;
  if(event.key==='Home')target=0;
  if(event.key==='End')target=languages.length-1;
  if(target!==undefined){event.preventDefault();renderLanguage(languages[target].id,true);$(`#tab-${languages[target].id}`).focus();}
 });
});
$$('[data-profile]').forEach(link=>link.addEventListener('click',event=>{event.preventDefault();renderLanguage(link.dataset.profile,true);$('#wersje').scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});}));
function readHash(){const [section,id]=location.hash.slice(1).split('/');if(section==='wersje'&&languages.some(item=>item.id===id)){renderLanguage(id);$('#wersje').scrollIntoView();}}
window.addEventListener('hashchange',readHash);
renderLanguage(selected);
readHash();
