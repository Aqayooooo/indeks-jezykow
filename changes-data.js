'use strict';

const popularityChanges={
  reviewedOn:'2026-10-24',
  index:'TIOBE',
  unit:'percentage points',
  archive:{label:'Nieoficjalne archiwum odczytów TIOBE',url:'https://github.com/toUpperCase78/tiobe-index-ratings/blob/master/Tiobe_Index_All_Ratings_October2026.csv'},
  notes:'Odczyty miesięczne, oddzielne od średnich 12-miesięcznych. Wartości zaokrąglono do dwóch miejsc; zmiany wyliczono z prezentowanych wartości. Komentarz autora indeksu i kontekst technologiczny nie są dowodem przyczynowości.',
  cases:[
    {
      id:'python-2024',language:'python',title:'Wzrost w drugiej połowie 2024 r.',
      from:{month:'2024-07',value:16.12},to:{month:'2024-12',value:23.84},
      evidence:'Kontekst trendu',
      explanation:'Rosło zapotrzebowanie na analizę danych i narzędzia AI, czyli dziedziny silnie związane z Pythonem. GitHub w Octoverse 2024 odnotował, że Python wyprzedził JavaScript pod względem łącznej aktywności, a użycie Jupyter Notebooks wzrosło o 92% rok do roku. To niezależne potwierdzenie kierunku trendu.',
      limit:'Octoverse mierzy aktywność na GitHubie, a nie TIOBE. Nie pozwala przypisać całych +7,72 p.p. jednej przyczynie.',
      sources:[
        {label:'Odczyt VII 2024',url:'https://github.com/toUpperCase78/tiobe-index-ratings/blob/master/Year2024/tiobe_index_july2024.csv'},
        {label:'Odczyt XII 2024',url:'https://github.com/toUpperCase78/tiobe-index-ratings/blob/master/Year2024/tiobe_index_december2024.csv'},
        {label:'GitHub Octoverse 2024',url:'https://github.blog/news-insights/octoverse/octoverse-2024/'}
      ]
    },
    {
      id:'python-may-2025',language:'python',title:'Skok o ponad 2 p.p. w miesiąc',
      from:{month:'2025-04',value:23.08},to:{month:'2025-05',value:25.35},
      evidence:'Komentarz TIOBE',
      explanation:'TIOBE w komentarzu z maja 2025 wskazywało rozszerzanie zastosowań Pythona na kolejne dziedziny. Badanie PSF i JetBrains za 2024 r. potwierdza szeroki zakres pracy z językiem: web, analiza danych i uczenie maszynowe. Jest to tło wzrostu, a nie dowód pojedynczego wydarzenia z kwietnia.',
      limit:'W sprawdzonym komentarzu nie wskazano premiery ani zmiany algorytmu, która samodzielnie tłumaczyłaby ten miesięczny skok.',
      sources:[
        {label:'Archiwum odczytów',url:'https://github.com/toUpperCase78/tiobe-index-ratings/blob/master/Tiobe_Index_All_Ratings_October2026.csv'},
        {label:'TIOBE V 2025 — zachowany komentarz',url:'https://github.com/toUpperCase78/tiobe-index-ratings#may-2025-python-rules-the-world'},
        {label:'PSF / JetBrains 2024',url:'https://lp.jetbrains.com/python-developers-survey-2024/'}
      ]
    },
    {
      id:'python-2025-2026',language:'python',title:'Spadek po szczycie z lipca 2025 r.',
      from:{month:'2025-07',value:26.98},to:{month:'2026-02',value:21.81},
      evidence:'Interpretacja TIOBE',
      explanation:'W lutym 2026 Paul Jansen wiązał spadek udziału Pythona z odzyskiwaniem zainteresowania przez bardziej wyspecjalizowane języki, szczególnie R i Perl. R konkuruje w statystyce i analizie danych, a Perl w skryptach. Wskaźnik jest względny: wzrost innych języków może zmniejszać udział lidera.',
      limit:'To interpretacja autora indeksu. Nie jest pomiarem migracji projektów z Pythona do R lub Perla.',
      sources:[
        {label:'Archiwum odczytów',url:'https://github.com/toUpperCase78/tiobe-index-ratings/blob/master/Tiobe_Index_All_Ratings_October2026.csv'},
        {label:'TIOBE II 2026 — zachowany komentarz',url:'https://github.com/toUpperCase78/tiobe-index-ratings#february-2026-domain-specific-languages-challenge-pythons-lead'}
      ]
    },
    {
      id:'cpp-2022',language:'cpp',title:'Największy roczny wzrost w 2022 r.',
      from:{month:'2022-01',value:8.29},to:{month:'2023-01',value:12.91},
      evidence:'Komentarz TIOBE',
      explanation:'TIOBE łączyło wzrost z wydajnością C++ oraz systematycznym rozwojem standardu. Wskazywało znaczenie modernizacji rozpoczętej przez C++11 i możliwości C++20. Język pozwala łączyć abstrakcje wysokiego poziomu z kontrolą zasobów w dużych systemach. Za największy przyrost w tym okresie otrzymał tytuł języka roku 2022.',
      limit:'Komentarz opisuje długoterminowe przewagi języka; nie mierzy, ile punktów dodała każda konkretna funkcja standardu.',
      sources:[
        {label:'Odczyt I 2022',url:'https://github.com/toUpperCase78/tiobe-index-ratings/blob/master/Year2022/tiobe_index_january2022.csv'},
        {label:'Odczyt I 2023',url:'https://github.com/toUpperCase78/tiobe-index-ratings/blob/master/Year2023/tiobe_index_january2023.csv'},
        {label:'Komentarz TIOBE przytoczony przez PVS-Studio',url:'https://pvs-studio.com/en/blog/posts/1026/'}
      ]
    },
    {
      id:'cpp-june-2024',language:'cpp',title:'Awans na drugie miejsce w czerwcu 2024 r.',
      from:{month:'2024-05',value:9.53,rank:3},to:{month:'2024-06',value:10.03,rank:2},
      evidence:'Zmiana układu rankingu',
      explanation:'Awans wynikał z dwóch równoczesnych ruchów: C++ zyskał 0,50 p.p., a C spadł z 9,98% do 9,23%. Dzięki temu C++ znalazł się przed C. Nie trzeba wzrostu o kilka punktów, aby zmieniła się kolejność, jeśli wyniki języków są zbliżone.',
      limit:'To wyjaśnienie arytmetyki awansu, nie dowód na nagły wzrost liczby użytkowników C++ w jednym miesiącu.',
      sources:[{label:'Odczyty C i C++ — V–VI 2024',url:'https://github.com/toUpperCase78/tiobe-index-ratings/blob/master/Tiobe_Index_All_Ratings_October2026.csv'}]
    },
    {
      id:'java-2016',language:'java',title:'Spadek w rocznym oknie 2016–2017',
      from:{month:'2016-01',value:21.47},to:{month:'2017-01',value:17.28},
      evidence:'Interpretacja trendu',
      explanation:'W 2017 r. autorzy TIOBE opisywali coraz większe rozdrobnienie rynku i rosnący udział aplikacji pisanych w kilku językach. Oznaczało to, że dawni liderzy dzielili zainteresowanie z większą liczbą technologii. Taki mechanizm jest zgodny ze spadkiem względnego udziału Javy.',
      limit:'Dla tego okresu dane pokazują około −4,19 p.p., a nie −10 p.p. Nie potwierdzają masowego porzucenia Javy w ciągu roku.',
      sources:[
        {label:'Archiwum odczytów I 2016 i I 2017',url:'https://github.com/toUpperCase78/tiobe-index-ratings/blob/master/Tiobe_Index_All_Ratings_October2026.csv'},
        {label:'Wypowiedzi Paula Jansena — IX 2017',url:'https://www.infoworld.com/article/2255789/why-python-and-c-cant-displace-java-c-or-c.html'}
      ]
    },
    {
      id:'java-august-2017',language:'java',title:'Ponad 6 p.p. mniej rok do roku',
      from:{month:'2016-08',value:19.01},to:{month:'2017-08',value:12.96,rank:1},
      evidence:'Wypowiedź autora indeksu',
      explanation:'W sierpniu 2017 spadki obejmowały również C. Wspólnym tłem było zwiększanie liczby języków konkurujących o uwagę programistów. Java nadal zajmowała pierwsze miejsce, mimo niższego wskaźnika — zmniejszenie przewagi procentowej nie musi oznaczać utraty pozycji.',
      limit:'Oryginalny odczyt z VIII 2017 wynosił 12,961%; w zestawieniu jest zaokrąglony do 12,96%.',
      sources:[
        {label:'Archiwum odczytów',url:'https://github.com/toUpperCase78/tiobe-index-ratings/blob/master/Tiobe_Index_All_Ratings_October2026.csv'},
        {label:'Raport i wypowiedź Paula Jansena — VIII 2017',url:'https://www.infoworld.com/article/2254773/java-and-c-hit-all-time-lows-in-tiobe-language-popularity-index.html'}
      ]
    },
    {
      id:'javascript-2014',language:'javascript',title:'Roczny wzrost i tytuł języka roku 2014',
      from:{month:'2014-01',value:1.57,rank:9},to:{month:'2015-01',value:3.27,rank:7},
      evidence:'Komentarz TIOBE',
      explanation:'TIOBE wskazywało sukces bibliotek i narzędzi takich jak jQuery, Bootstrap i Node.js. JavaScript miał zastosowanie w przeglądarce i rozszerzał zasięg na serwer. Autorzy indeksu zaznaczali też, że spadek Objective-C pomógł innym językom zwiększyć względne udziały.',
      limit:'Źródło podaje dokładnie 1,569% i 3,274%. Wyświetlane wartości oraz zmiana są zaokrąglone; to wzrost w rok, nie w miesiąc.',
      sources:[{label:'Wyniki i wypowiedzi TIOBE — I 2015',url:'https://www.infoworld.com/article/2239003/javascript-surges-past-swift-r-for-programming-language-of-the-year-honors.html'}]
    },
    {
      id:'javascript-december-2024',language:'javascript',title:'Miesięczny skok w grudniu 2024 r.',
      from:{month:'2024-11',value:3.71},to:{month:'2024-12',value:4.61},
      evidence:'Przyczyna nieustalona',
      explanation:'W badanych źródłach brak potwierdzenia, że tę zmianę spowodowała jedna premiera lub konkretne wydarzenie. GitHub w 2024 r. odnotował wzrost konsumpcji pakietów JavaScript z npm o 15% rok do roku. Potwierdza to aktywność ekosystemu, ale nie wyjaśnia samo w sobie skoku XI–XII.',
      limit:'Nie przypisujemy wzrostu nowej wersji ECMAScript ani pojedynczemu frameworkowi bez danych potwierdzających taki związek.',
      sources:[
        {label:'Odczyty XI–XII 2024',url:'https://github.com/toUpperCase78/tiobe-index-ratings/blob/master/Tiobe_Index_All_Ratings_October2026.csv'},
        {label:'GitHub Octoverse 2024 — npm',url:'https://github.blog/news-insights/octoverse/octoverse-2024/'}
      ]
    },
    {
      id:'php-2024',language:'php',title:'Spadek na początku 2024 r.',
      from:{month:'2024-01',value:1.79,rank:7},to:{month:'2024-04',value:1.09,rank:17},
      evidence:'Komentarz TIOBE',
      explanation:'Paul Jansen wiązał dłuższy spadek PHP z konkurencją ekosystemów webowych: Rails w Ruby, Django w Pythonie i rozwiązań opartych na JavaScripcie. Wskazywał też historyczne problemy bezpieczeństwa jako element tej ewolucji. Jednocześnie podkreślał dalszą rolę PHP w małych i średnich witrynach oraz WordPressie.',
      limit:'To ocena wieloletniego trendu. Nie dowodzi, że w pierwszym kwartale 2024 wystąpiła jedna awaria lub luka odpowiedzialna za cały spadek.',
      sources:[
        {label:'Odczyty I–IV 2024',url:'https://github.com/toUpperCase78/tiobe-index-ratings/blob/master/Tiobe_Index_All_Ratings_October2026.csv'},
        {label:'Wypowiedź Paula Jansena — IV 2024',url:'https://www.infoworld.com/article/2336734/php-sinks-in-tiobe-language-popularity-index.html'}
      ]
    },
    {
      id:'php-april-2024',language:'php',title:'Pięć miejsc niżej w jednym miesiącu',
      from:{month:'2024-03',value:1.32,rank:12},to:{month:'2024-04',value:1.09,rank:17},
      evidence:'Zmiana układu rankingu',
      explanation:'Spadek z miejsca 12. na 17. nastąpił przy zmianie wskaźnika o 0,23 p.p. W dolnej części pierwszej dwudziestki wiele języków miało zbliżone wartości. Dlatego niewielka różnica procentowa wystarczyła do wyprzedzenia PHP przez kilka technologii.',
      limit:'Utrata pięciu miejsc nie oznacza spadku wykorzystania PHP o 5% ani utraty pięciu punktów procentowych.',
      sources:[
        {label:'Tabela III 2024',url:'https://github.com/toUpperCase78/tiobe-index-ratings/blob/master/Year2024/tiobe_index_march2024.csv'},
        {label:'Tabela IV 2024',url:'https://github.com/toUpperCase78/tiobe-index-ratings/blob/master/Year2024/tiobe_index_april2024.csv'}
      ]
    },
    {
      id:'kotlin-android-2017',language:'kotlin',title:'Wzrost po ogłoszeniu wsparcia Androida',
      from:{month:'2017-05',value:0.12},to:{month:'2017-06',value:0.35},
      evidence:'Potwierdzone wydarzenie',
      explanation:'17 maja 2017 Google ogłosiło oficjalne wsparcie Kotlina na Androidzie. Android Studio 3.0 otrzymało obsługę języka, a Google i JetBrains zapowiedziały współpracę. Ogłoszenie dotyczyło dużego istniejącego ekosystemu i dawało programistom konkretny powód do sprawdzenia Kotlina.',
      limit:'Daty ogłoszenia i wzrostu są zgodne czasowo. Sam indeks nie wyodrębnia jednak wpływu komunikatu Google od innych czynników.',
      sources:[
        {label:'Archiwum odczytów V–VI 2017',url:'https://github.com/toUpperCase78/tiobe-index-ratings/blob/master/Tiobe_Index_All_Ratings_October2026.csv'},
        {label:'Google — ogłoszenie z 17 V 2017',url:'https://android-developers.googleblog.com/2017/05/android-announces-support-for-kotlin.html'},
        {label:'JetBrains — obsługa w Android Studio',url:'https://blog.jetbrains.com/kotlin/2017/05/kotlin-on-android-now-official/'}
      ]
    },
    {
      id:'kotlin-2023',language:'kotlin',title:'Powrót do pierwszej dwudziestki w 2023 r.',
      from:{month:'2023-04',value:0.25},to:{month:'2023-09',value:0.90,rank:20},
      evidence:'Kontekst potwierdzony przez Google',
      explanation:'W kwietniu 2023 Google opisało inwestycje w Android Studio, biblioteki, dokumentację i podejście Kotlin-first. Podawało, że Kotlin występował w ponad 95% z tysiąca najpopularniejszych aplikacji Androida. Daje to konkretny kontekst rosnącego zainteresowania: rozwinięty ekosystem i rzeczywiste wdrożenia.',
      limit:'Wskaźnik dotyczący aplikacji Androida nie jest odczytem TIOBE. Nie można z niego obliczyć, jaka część +0,65 p.p. wynikała z tych inwestycji.',
      sources:[
        {label:'Archiwum odczytów IV–IX 2023',url:'https://github.com/toUpperCase78/tiobe-index-ratings/blob/master/Tiobe_Index_All_Ratings_October2026.csv'},
        {label:'Google at KotlinConf 2023',url:'https://developers.googleblog.com/google-at-kotlinconf-23/'}
      ]
    },
    {
      id:'kotlin-2024-2025',language:'kotlin',title:'Spadek po wzroście z 2024 r.',
      from:{month:'2024-08',value:1.13},to:{month:'2025-04',value:0.74},
      evidence:'Interpretacja TIOBE',
      explanation:'W kwietniu 2025 TIOBE łączyło słabsze wyniki Kotlina i Swifta z silnym powiązaniem z pojedynczymi platformami mobilnymi oraz konkurencją rozwiązań wieloplatformowych. Była to interpretacja pozycji rynkowej obu języków, nie stwierdzenie braku możliwości wieloplatformowych w Kotlinie.',
      limit:'Spadek zainteresowania w indeksie nie jest pomiarem liczby aplikacji na Androida ani rezygnacji z Kotlin Multiplatform.',
      sources:[
        {label:'Archiwum odczytów VIII 2024–IV 2025',url:'https://github.com/toUpperCase78/tiobe-index-ratings/blob/master/Tiobe_Index_All_Ratings_October2026.csv'},
        {label:'TIOBE IV 2025 — zachowany komentarz',url:'https://github.com/toUpperCase78/tiobe-index-ratings#april-2025-former-top-20-players-kotlin-ruby-and-swift-have-a-hard-time'}
      ]
    }
  ]
};
