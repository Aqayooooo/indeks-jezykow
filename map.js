'use strict';

const palette = {python:'#efb76b',cpp:'#a8c6df',java:'#e99183',javascript:'#bfce91',php:'#bba7d6',kotlin:'#78c7b3'};
const symbols = {python:'Py',cpp:'C++',java:'J',javascript:'JS',php:'php',kotlin:'Kt'};
const tags = {python:['Analiza danych','Automatyzacja','AI'],cpp:['Silniki gier','Systemy','Obliczenia'],java:['Backend','Duże systemy','JVM'],javascript:['Przeglądarki','Node.js','Interfejsy'],php:['Backend','CMS','Aplikacje webowe'],kotlin:['Android','Multiplatform','JVM']};
const subtitles = {python:'Od skryptów do analizy danych i AI.',cpp:'Wydajność, która utrzymuje pozycję.',java:'Wielkie systemy. Długa perspektywa.',javascript:'Internet ma swój własny język.',php:'Długa historia dynamicznego webu.',kotlin:'Silna pozycja we własnym ekosystemie.'};
const yearNotes = {
 python:['Dziewiąte miejsce w archiwum. Czytelna składnia i automatyzacja poprzedzają późniejszy wzrost znaczenia analizy danych.','Siódma pozycja. Rozwija się ekosystem bibliotek naukowych i narzędzi do pracy z danymi.','Wciąż siódme miejsce. NumPy, pandas i Jupyter pomagają budować zaplecze dla dalszego wzrostu.','Trzecie miejsce. Uczenie maszynowe i głębokie uczenie poszerzają zakres zastosowań języka.','Pierwsze miejsce w zestawieniu. Droga od automatyzacji do AI przyniosła awans o osiem pozycji względem 2005.'],
 cpp:['Trzecie miejsce. Oprogramowanie systemowe, gry i aplikacje desktopowe należą do głównych zastosowań.','Czwarta pozycja. Kontrola zasobów pozostaje ważna w silnikach gier i systemach wymagających wydajności.','Czwarta pozycja. Modernizacja języka i rozwój bibliotek towarzyszą jego stabilnej obecności w czołówce.','Czwarta pozycja. C++17 i C++20 rozwijają narzędzia nowoczesnego programowania systemowego.','Drugie miejsce. Wysokie wymagania obliczeniowe nadal sprzyjają językowi dającemu kontrolę nad pamięcią.'],
 java:['Drugie miejsce. JVM i rozwiązania serwerowe tworzą mocne zaplecze zastosowań biznesowych.','Pierwsze miejsce. Systemy korporacyjne, bankowość i backend utrzymują bardzo wysokie zainteresowanie.','Drugie miejsce. Java pozostaje jednym z podstawowych narzędzi dużych aplikacji.','Pierwsze miejsce w średniej 12-miesięcznej. Ekosystem backendowy utrzymuje wysoką pozycję języka.','Trzecie miejsce. Mniejsza dominacja w indeksie nie przekreśla roli Javy w długowiecznych systemach.'],
 javascript:['Jedenaste miejsce. Głównym zastosowaniem jest interaktywność stron w przeglądarce.','Dziewiąte miejsce. AJAX, jQuery i Node.js rozszerzają możliwości języka.','Ósme miejsce. Rozwijają się aplikacje SPA i nowe frameworki interfejsów.','Siódme miejsce. JavaScript jest obecny zarówno w przeglądarkach, jak i na serwerze.','Szóste miejsce. Wynik TIOBE nie mierzy liczby witryn korzystających z JavaScriptu; TypeScript jest liczony osobno.'],
 php:['Piąte miejsce. Dynamiczne strony, sklepy i systemy zarządzania treścią napędzają rozwój języka.','Trzecie miejsce. To najlepsza pozycja PHP w pięciu punktach tego archiwum.','Szóste miejsce. Rosnąca liczba alternatyw backendowych rozkłada zainteresowanie między technologie.','Ósme miejsce. Niższa pozycja w indeksie współistnieje z rozległym ekosystemem stron i CMS-ów.','Dwunaste miejsce. Modernizacja PHP 8.x nie przywróciła dawnej pozycji w tym zestawieniu.']
};
const years=[2005,2010,2015,2020,2025];
const state={view:'historia',language:'python',year:4,focused:false,playing:false};
let playbackTimer=null;
const $=selector=>document.querySelector(selector);
const all=selector=>[...document.querySelectorAll(selector)];
const esc=value=>String(value).replace(/[&<>"']/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
const decimal=n=>n.toLocaleString('pl-PL',{minimumFractionDigits:2,maximumFractionDigits:2});
const language=()=>languages.find(item=>item.id===state.language);
const arrow=n=>n>0?'↑':n<0?'↓':'→';
const x=index=>125+index*175;
const y=rank=>45+(rank-1)*31;

function routePath(values){
 return values.reduce((path,rank,i)=>i===0?`M ${x(i)} ${y(rank)}`:`${path} C ${x(i-1)+80} ${y(values[i-1])} ${x(i)-80} ${y(rank)} ${x(i)} ${y(rank)}`,'');
}
function drawMap(){
 let svg='<title id="map-title">Historia pozycji w rankingu TIOBE, 2005–2025</title><desc id="map-description">Wyższy punkt oznacza lepszą pozycję. Wybierz punkt lub język z listy pod mapą. Dokładne wartości są dostępne w tabeli.</desc>';
 svg+=`<text class="year-watermark" x="460" y="300" text-anchor="middle">${years[state.year]}</text>`;
 [1,3,6,9,12].forEach(rank=>{svg+=`<line class="map-grid" x1="115" x2="840" y1="${y(rank)}" y2="${y(rank)}"/><text class="map-axis" x="25" y="${y(rank)+4}">${String(rank).padStart(2,'0')}</text>`;});
 svg+=`<line class="year-line" x1="${x(state.year)}" x2="${x(state.year)}" y1="22" y2="409"/>`;
 years.forEach((year,index)=>{svg+=`<text class="map-axis" x="${x(index)}" y="437" text-anchor="middle" style="${index===state.year?'fill:#efb76b':''}">${year}</text>`;});
 const series=languages.filter(item=>item.history).sort((a,b)=>(a.id===state.language?1:0)-(b.id===state.language?1:0));
 series.forEach(item=>{
  const active=item.id===state.language,dim=state.focused&&!active;
  const line=routePath(item.history),color=palette[item.id];
  svg+=`<g class="route-group" data-route="${item.id}"><path class="route-halo${dim?' dimmed':''}" d="${line}"/><path class="route-path${dim?' dimmed':''}" d="${line}" stroke="${color}" style="stroke-width:${active?6:4.5}"/><path class="route-hit" data-select="${item.id}" d="${line}" aria-hidden="true"/>`;
  svg+=`<text class="route-label" x="104" y="${y(item.history[0])+5}" text-anchor="end" fill="${color}" opacity="${dim?.35:1}">${symbols[item.id]}</text>`;
  svg+=`<text class="route-label" x="851" y="${y(item.history[4])+5}" fill="${color}" opacity="${dim?.35:1}">${item.name}<tspan class="map-axis" dx="9">${item.history[4]}</tspan></text>`;
  item.history.forEach((rank,index)=>{
   const current=index===state.year;
   svg+=`<g class="station" id="station-${item.id}-${index}" role="button" tabindex="0" data-language="${item.id}" data-year="${index}" aria-label="${item.name}, ${years[index]}, miejsce ${rank}" opacity="${dim?.3:1}"><circle class="station-ring${current&&active?' selected-ring':''}" cx="${x(index)}" cy="${y(rank)}" r="19" stroke="${color}"/><circle class="station-core" cx="${x(index)}" cy="${y(rank)}" r="${current?10:5}" stroke="${color}" style="${current?'fill:'+color:''}"/>${current?`<text class="station-label" x="${x(index)}" y="${y(rank)+4}" text-anchor="middle">${rank}</text>`:''}</g>`;
  });
  svg+='</g>';
 });
 $('#route-map').innerHTML=svg;
 all('.route-hit').forEach(path=>path.addEventListener('click',()=>selectLanguage(path.dataset.select,true)));
 all('.station').forEach(station=>{
  const activate=()=>{stopPlayback();state.year=Number(station.dataset.year);selectLanguage(station.dataset.language,true);};
  station.addEventListener('click',activate);
  station.addEventListener('keydown',event=>{if(event.key==='Enter'||event.key===' '){event.preventDefault();const id=station.id;activate();document.getElementById(id)?.focus();}});
 });
}
function inspectorHTML(item,current=false){
 const rank=current?item.rank:item.history?.[state.year];
 const year=years[state.year];
 const difference=item.history?item.history[0]-rank:null;
 const change=item.change===null?'brak porównania':`${item.change>0?'+':'−'}${decimal(Math.abs(item.change))} p.p.`;
 const heading=`<div class="inspector-head"><span class="language-symbol">${symbols[item.id]}</span><span>${current?'X / 2026':'ARCHIWUM / '+year}</span></div><h2>${item.name}</h2><p class="inspector-subtitle">${subtitles[item.id]}</p>`;
 if(!current&&!item.history)return `${heading}<div class="position-block"><span class="position-value">—</span><span class="position-meta">BRAK SERII<br>2005—2025</span></div><div class="inspector-trend"><span>X 2026: pozycja ${item.rank}</span></div><p class="inspector-context">Archiwum nie zawiera porównywalnych średnich dla Kotlina. Jego bieżący wynik i rozwój możesz zobaczyć w pozostałych widokach.</p><button class="inspector-link" data-release="${item.id}">Poznaj język <span>↗</span></button>`;
 const points=item.history?.map((value,i)=>`${5+i*45},${4+(value-1)*2}`).join(' ');
 return `${heading}<div class="position-block"><span class="position-value">${current?`${decimal(item.score)}<small>%</small>`:String(rank).padStart(2,'0')}</span><span class="position-meta">${current?'WSKAŹNIK<br>TIOBE':'MIEJSCE<br>W RANKINGU'}</span></div><div class="inspector-trend"><span>${current?'#'+item.rank+' w rankingu':`${arrow(difference)} ${Math.abs(difference)} ${Math.abs(difference)===1?'miejsce':'miejsc'}`}</span><span>${current?change:'od 2005 roku'}</span></div>${!current?`<svg class="inspector-spark" viewBox="0 0 190 33" aria-hidden="true"><polyline points="${points}"/></svg>`:''}<p class="inspector-context">${current?item.context:yearNotes[item.id][state.year]}</p><button class="inspector-link" data-release="${item.id}">Wydania i zastosowania <span>↗</span></button>`;
}
function renderInspectors(){
 const item=language();
 ['history-inspector','current-inspector'].forEach((id,index)=>{const node=document.getElementById(id);node.style.setProperty('--language',palette[item.id]);node.innerHTML=inspectorHTML(item,index===1);});
 all('[data-release]').forEach(button=>button.addEventListener('click',()=>setView('wydania')));
}
function renderDocks(){
 $('#history-dock').innerHTML=languages.map(item=>`<button class="dock-button" data-id="${item.id}" aria-pressed="${item.id===state.language}" style="--language:${palette[item.id]}"><span class="dock-symbol">${symbols[item.id]}</span><span><span class="dock-name">${item.name}</span><span class="dock-caption">${item.history?`${item.history[0]} → ${item.history[4]} / 20 LAT`:'BRAK SERII 2005–25'}</span></span></button>`).join('');
 all('.dock-button').forEach(button=>button.addEventListener('click',()=>selectLanguage(button.dataset.id,true)));
 $('#release-picker').innerHTML=languages.map(item=>`<button data-language="${item.id}" aria-pressed="${item.id===state.language}" style="--language:${palette[item.id]}"><span>${symbols[item.id]}</span>${item.name}</button>`).join('');
 all('#release-picker button').forEach(button=>button.addEventListener('click',()=>selectLanguage(button.dataset.language,false)));
}
function renderRanking(){
 $('#current-ranking').innerHTML=languages.map(item=>`<button class="ranking-row" data-id="${item.id}" aria-pressed="${item.id===state.language}" aria-label="${item.name}: miejsce ${item.rank}, ${decimal(item.score)} procent" style="--language:${palette[item.id]}"><span class="ranking-position">${String(item.rank).padStart(2,'0')}</span><span class="ranking-language">${item.name}</span><span class="ranking-track" aria-hidden="true"><span class="ranking-fill" style="--width:${item.score/20*100}%"></span></span><span class="ranking-score">${decimal(item.score)}<small>%</small></span><span class="ranking-change">${item.change===null?'—':`${item.change>0?'+':'−'}${decimal(Math.abs(item.change))}`}</span></button>`).join('');
 all('.ranking-row').forEach(button=>button.addEventListener('click',()=>selectLanguage(button.dataset.id,false)));
}
function renderReleases(){
 const item=language(),content=$('#release-content');content.style.setProperty('--language',palette[item.id]);
 content.innerHTML=`<div class="release-layout"><div class="release-profile"><div class="release-kicker"><span>PROFIL / ${symbols[item.id]}</span><span>POCZĄTEK: ${item.born}</span></div><h2 class="release-name">${item.name}</h2><p class="release-description">${item.description}</p><div class="release-version"><strong>${item.version}</strong><span>WERSJA / STANDARD</span></div><p class="release-status">${item.status}</p><p class="usage-label">OBSZARY ZASTOSOWAŃ</p><div class="usage-tags">${tags[item.id].map(tag=>`<span>${tag}</span>`).join('')}</div></div><div class="code-panel"><div class="code-heading"><span>${item.file}</span><button class="copy-code" id="copy-code">Kopiuj kod</button></div><pre><code>${esc(item.code)}</code></pre><p class="code-note">${item.demoNote}</p></div></div><div class="release-history">${item.releases.map(release=>`<article class="release-entry"><header><h3>${release[0]}</h3><span>${release[1]}</span></header><h4>${esc(release[2])}</h4><p>${esc(release[3])}</p>${release[4]?`<span class="release-caveat">${esc(release[4])}</span>`:''}</article>`).join('')}</div>${item.future?`<p class="future-note">${esc(item.future)}</p>`:''}`;
 $('#copy-code').addEventListener('click',async()=>{
  try{await navigator.clipboard.writeText(item.code);$('#copy-code').textContent='Skopiowano ✓';}
  catch{const range=document.createRange();range.selectNodeContents($('#release-content code'));const selection=window.getSelection();selection.removeAllRanges();selection.addRange(range);$('#copy-code').textContent='Kod zaznaczony';}
 });
}
function updateYears(){all('#year-buttons button').forEach(button=>button.setAttribute('aria-pressed',String(Number(button.dataset.year)===state.year)));}
function syncURL(){history.replaceState(null,'',`#${state.view}/${state.language}/${years[state.year]}`);}
function selectLanguage(id,focused){
 if(!languages.some(item=>item.id===id))return;
 state.language=id;state.focused=focused&&Boolean(language().history);
 drawMap();renderInspectors();renderDocks();renderRanking();renderReleases();updateYears();syncURL();
}
function stopPlayback(){state.playing=false;clearInterval(playbackTimer);playbackTimer=null;$('#play-timeline').setAttribute('aria-pressed','false');$('#play-timeline').setAttribute('aria-label','Odtwórz historię');$('#play-timeline span').textContent='▶';}
function setYear(index){state.year=index;drawMap();renderInspectors();updateYears();syncURL();}
function setView(view,scroll=true){
 if(!['historia','ranking','wydania'].includes(view))return;
 state.view=view;stopPlayback();
 all('.view').forEach(section=>section.hidden=section.id!==`view-${view}`);
 all('[data-view]').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.view===view)));
 const copy={historia:['Języki w ruchu','Dwadzieścia lat zmian pozycji.<br>Wybierz trasę i prześledź jej historię.'],ranking:['Sześć języków. Jeden odczyt','Wskaźnik TIOBE, październik 2026.<br>Wybierz język, aby zobaczyć kontekst wyniku.'],wydania:['Co nowego w kodzie','Wersje, zastosowania i przykłady.<br>Trzy ważne wydania każdego języka.']};
 $('#view-title').innerHTML=copy[view][0]+'<span>.</span>';$('#view-description').innerHTML=copy[view][1];syncURL();
 if(scroll)window.scrollTo({top:0,behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});
}
$('#year-buttons').innerHTML=years.map((year,index)=>`<button data-year="${index}" aria-pressed="${index===state.year}" aria-label="Rok ${year}">${year}</button>`).join('');
all('#year-buttons button').forEach(button=>button.addEventListener('click',()=>{stopPlayback();setYear(Number(button.dataset.year));}));
$('#play-timeline').addEventListener('click',()=>{
 if(state.playing){stopPlayback();return;}
 state.playing=true;$('#play-timeline').setAttribute('aria-pressed','true');$('#play-timeline').setAttribute('aria-label','Zatrzymaj historię');$('#play-timeline span').textContent='Ⅱ';
 if(state.year===4)setYear(0);
 playbackTimer=setInterval(()=>{if(state.year>=4){stopPlayback();return;}setYear(state.year+1);if(state.year===4)stopPlayback();},1600);
});
document.addEventListener('visibilitychange',()=>{if(document.hidden)stopPlayback();});
$('#reset-map').addEventListener('click',()=>{state.focused=false;drawMap();});
all('[data-view]').forEach(button=>button.addEventListener('click',()=>setView(button.dataset.view)));
all('[data-story]').forEach(button=>button.addEventListener('click',()=>{selectLanguage(button.dataset.story,false);setView('wydania');}));

const dialog=$('#info-dialog');
function showDialog(html){stopPlayback();$('#dialog-content').innerHTML=html;dialog.showModal();}
$('#close-dialog').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',event=>{if(event.target===dialog){const rect=dialog.getBoundingClientRect();if(event.clientX<rect.left||event.clientX>rect.right||event.clientY<rect.top||event.clientY>rect.bottom)dialog.close();}});
$('#show-history-table').addEventListener('click',()=>showDialog(`<h2 id="dialog-title">Historia w liczbach.</h2><div class="dialog-table-wrap"><table><caption>Pozycje uśrednione w okresach 12-miesięcznych. Archiwalne zestawienie TIOBE z czerwca 2025.</caption><thead><tr><th scope="col">Język</th>${years.map(year=>`<th scope="col">${year}</th>`).join('')}</tr></thead><tbody>${languages.filter(item=>item.history).map(item=>`<tr><th scope="row">${item.name}</th>${item.history.map(rank=>`<td>${rank}</td>`).join('')}</tr>`).join('')}</tbody></table></div><p class="dialog-small">Brak porównywalnej serii dla Kotlina. Linie na mapie łączą pięć obserwacji — nie przedstawiają wszystkich rocznych wyników.</p>`));
$('#open-sources').addEventListener('click',()=>showDialog(`<h2 id="dialog-title">O danych i źródłach.</h2><p>Zestawienie przedstawia stan analizy na <strong>20 października 2026 r.</strong> Wartości i opisy wydań są zapisem archiwalnym, bez aktualizacji na żywo.</p><h3>Dwa różne pomiary</h3><p>Mapa pokazuje średnie 12-miesięczne z archiwalnego zestawienia TIOBE opublikowanego w czerwcu 2025. Widok rankingu przedstawia wartości miesięczne z października 2026. Tych dwóch serii nie należy łączyć w jeden ciąg.</p><p>TIOBE mierzy zainteresowanie językami według własnej metodologii; nie jest licznikiem ofert pracy, projektów ani programistów. Zmiana metodologii wskazana dla października 2026 ogranicza porównywalność procentów rok do roku. Opisy przyczyn trendów są interpretacją.</p><h3>Dokumentacja</h3><div class="source-list">${[['TIOBE Index','https://www.tiobe.com/tiobe-index/'],['Python','https://www.python.org/doc/versions/'],['PHP','https://www.php.net/'],['ECMAScript','https://262.ecma-international.org/'],['Java SE','https://docs.oracle.com/en/java/javase/'],['Kotlin','https://kotlinlang.org/docs/releases.html'],['C++ / ISO','https://www.iso.org/standard/83626.html']].map(([name,url])=>`<a href="${url}" target="_blank" rel="noopener noreferrer">${name}<span>↗</span></a>`).join('')}</div><p class="dialog-small">Standard języka i implementacja w danym środowisku to osobne kwestie. Funkcje eksperymentalne oraz Preview opisano przy wydaniach.</p><div class="dialog-downloads"><a href="data.json" download="indeks-dane-2026.json">Pobierz dane JSON ↓</a><a href="metodologia.md">Opis metodologii ↗</a></div>`));

function readHash(){const [view,id,year]=location.hash.slice(1).split('/');if(['historia','ranking','wydania'].includes(view))state.view=view;if(languages.some(item=>item.id===id))state.language=id;if(years.includes(Number(year)))state.year=years.indexOf(Number(year));selectLanguage(state.language,false);setView(state.view,false);}
$('#methodology-link').addEventListener('click',()=>$('#open-sources').click());
window.addEventListener('hashchange',readHash);
readHash();
