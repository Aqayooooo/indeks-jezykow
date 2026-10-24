'use strict';

const popularityChanges={
  "reviewedOn": "2026-10-24",
  "index": "TIOBE",
  "unit": "percentage points",
  "archive": {
    "label": "Nieoficjalne archiwum odczytów TIOBE",
    "url": "https://github.com/toUpperCase78/tiobe-index-ratings/blob/master/Tiobe_Index_All_Ratings_October2026.csv"
  },
  "notes": "Wybrane duże zmiany wskaźnika w okresach od miesiąca do kilkunastu lat; wszystkie pokazane różnice przekraczają 1 p.p. Starsze odczyty odtworzone z wykresów są przybliżone. Przyczyny rozróżniono na udokumentowane czynniki, oceny TIOBE i hipotezy.",
  "cases": [
    {
      "id": "python-2004",
      "language": "python",
      "title": "Z około 1% do 6,58% wiosną 2004 r.",
      "from": {
        "month": "2004-03",
        "value": 1.01
      },
      "to": {
        "month": "2004-05",
        "value": 6.58
      },
      "evidence": "Hipoteza: wpływ wyników Google",
      "explanation": "Ten skok przypada na zmianę wyników Google w kwietniu 2004. TIOBE wyjaśniało w swoim FAQ, że usuwanie sztucznie promowanych stron mocno obniżyło odczyty Javy i C++; później dołączono MSN i Yahoo, aby ograniczyć takie wahania. Przesunięcie względnych udziałów po tej zmianie jest wiarygodnym wyjaśnieniem części nagłego wzrostu Pythona.",
      "limit": "FAQ nie wylicza wpływu na Pythona. Odczyty wskazują rok 2004, nie 2003; Python 2.4 ukazał się dopiero w listopadzie 2004, więc jego premiera nie tłumaczy wiosennego skoku.",
      "sources": [
        {
          "label": "Archiwum odczytów miesięcznych",
          "url": "https://github.com/toUpperCase78/tiobe-index-ratings/blob/master/Tiobe_Index_All_Ratings_October2026.csv"
        },
        {
          "label": "FAQ TIOBE — kopia z II 2015, s. 5",
          "url": "https://stefanch.com/wp-content/uploads/2015/02/Tiobe-Index-2015-02-21.pdf#page=5"
        },
        {
          "label": "Python 2.4 — data wydania",
          "url": "https://www.python.org/download/releases/2.4/"
        }
      ]
    },
    {
      "id": "python-2024",
      "language": "python",
      "title": "Wzrost w drugiej połowie 2024 r.",
      "from": {
        "month": "2024-07",
        "value": 16.12
      },
      "to": {
        "month": "2024-12",
        "value": 23.84
      },
      "evidence": "Kontekst trendu",
      "explanation": "Rosło zapotrzebowanie na analizę danych i narzędzia AI, czyli dziedziny silnie związane z Pythonem. GitHub w Octoverse 2024 odnotował, że Python wyprzedził JavaScript pod względem łącznej aktywności, a użycie Jupyter Notebooks wzrosło o 92% rok do roku. To niezależne potwierdzenie kierunku trendu.",
      "limit": "Octoverse mierzy aktywność na GitHubie, a nie TIOBE. Nie pozwala przypisać całych +7,72 p.p. jednej przyczynie.",
      "sources": [
        {
          "label": "Odczyt VII 2024",
          "url": "https://github.com/toUpperCase78/tiobe-index-ratings/blob/master/Year2024/tiobe_index_july2024.csv"
        },
        {
          "label": "Odczyt XII 2024",
          "url": "https://github.com/toUpperCase78/tiobe-index-ratings/blob/master/Year2024/tiobe_index_december2024.csv"
        },
        {
          "label": "GitHub Octoverse 2024",
          "url": "https://github.blog/news-insights/octoverse/octoverse-2024/"
        }
      ]
    },
    {
      "id": "python-may-2025",
      "language": "python",
      "title": "Skok o ponad 2 p.p. w miesiąc",
      "from": {
        "month": "2025-04",
        "value": 23.08
      },
      "to": {
        "month": "2025-05",
        "value": 25.35
      },
      "evidence": "Komentarz TIOBE",
      "explanation": "TIOBE w komentarzu z maja 2025 wskazywało rozszerzanie zastosowań Pythona na kolejne dziedziny. Badanie PSF i JetBrains za 2024 r. potwierdza szeroki zakres pracy z językiem: web, analiza danych i uczenie maszynowe. Jest to tło wzrostu, a nie dowód pojedynczego wydarzenia z kwietnia.",
      "limit": "W sprawdzonym komentarzu nie wskazano premiery ani zmiany algorytmu, która samodzielnie tłumaczyłaby ten miesięczny skok.",
      "sources": [
        {
          "label": "Archiwum odczytów",
          "url": "https://github.com/toUpperCase78/tiobe-index-ratings/blob/master/Tiobe_Index_All_Ratings_October2026.csv"
        },
        {
          "label": "TIOBE V 2025 — zachowany komentarz",
          "url": "https://github.com/toUpperCase78/tiobe-index-ratings#may-2025-python-rules-the-world"
        },
        {
          "label": "PSF / JetBrains 2024",
          "url": "https://lp.jetbrains.com/python-developers-survey-2024/"
        }
      ]
    },
    {
      "id": "python-2025-2026",
      "language": "python",
      "title": "Spadek o ponad 9 p.p. od szczytu z lipca 2025 r.",
      "from": {
        "month": "2025-07",
        "value": 26.98
      },
      "to": {
        "month": "2026-09",
        "value": 17.76
      },
      "evidence": "Interpretacja TIOBE",
      "explanation": "Spadek trwał również po lutym 2026, dlatego porównanie obejmuje okres aż do września. W lutym Jansen wskazywał odzyskiwanie zainteresowania przez R w statystyce i analizie danych oraz przez Perl w skryptach. To konkretne obszary konkurencji dla Pythona; TIOBE traktowało je jako możliwe czynniki zmniejszania jego przewagi.",
      "limit": "Komentarz z lutego dotyczy wcześniejszej części spadku, nie wyjaśnia całych −9,22 p.p. Nie obejmujemy tu października 2026, dla którego wskazano zmianę metodologii.",
      "sources": [
        {
          "label": "Archiwum odczytów",
          "url": "https://github.com/toUpperCase78/tiobe-index-ratings/blob/master/Tiobe_Index_All_Ratings_October2026.csv"
        },
        {
          "label": "TIOBE II 2026 — zachowany komentarz",
          "url": "https://github.com/toUpperCase78/tiobe-index-ratings#february-2026-domain-specific-languages-challenge-pythons-lead"
        }
      ]
    },
    {
      "id": "cpp-2003-2007",
      "language": "cpp",
      "title": "Utrata ponad połowy wskaźnika w latach 2003–2007",
      "from": {
        "month": "2003-08",
        "value": 17.53
      },
      "to": {
        "month": "2007-12",
        "value": 7.87
      },
      "evidence": "Komentarz TIOBE i zmiana pomiaru",
      "explanation": "Na ten okres nakładają się dwa różne zjawiska. W kwietniu 2004 zmiana wyników Google obniżyła odczyty C++ — potwierdza to FAQ TIOBE. We wrześniu 2007 Paul Jansen wskazywał natomiast, że firmy pracujące w Visual Studio wybierają C# zamiast C++ do nowych projektów. C# upraszczał budowę aplikacji dzięki środowisku .NET i automatycznemu zarządzaniu pamięcią.",
      "limit": "Jansen opisywał swoją ocenę rynku, nie zmierzoną skalę migracji. Zmiana Google tłumaczy zaburzenie z 2004, a nie cały czteroletni spadek o 9,66 p.p.",
      "sources": [
        {
          "label": "Archiwum odczytów miesięcznych",
          "url": "https://github.com/toUpperCase78/tiobe-index-ratings/blob/master/Tiobe_Index_All_Ratings_October2026.csv"
        },
        {
          "label": "FAQ TIOBE — kopia z II 2015, s. 5",
          "url": "https://stefanch.com/wp-content/uploads/2015/02/Tiobe-Index-2015-02-21.pdf#page=5"
        },
        {
          "label": "Komentarz TIOBE IX 2007 — zachowana kopia",
          "url": "https://www.production.dijitalders.com/icerik/131/337/programlama_dili_istatistikleri.html"
        },
        {
          "label": "Badanie trendów w 2005 — autorzy ankiety",
          "url": "https://www.infoworld.com/article/2221907/2005-survey-spots-trends-in-software-development.html"
        }
      ]
    },
    {
      "id": "cpp-2014-2015",
      "language": "cpp",
      "title": "Odbicie o niemal 4 p.p. w dziesięć miesięcy",
      "from": {
        "month": "2014-09",
        "value": 4.67
      },
      "to": {
        "month": "2015-07",
        "value": 8.64
      },
      "evidence": "Hipoteza autorów TIOBE",
      "explanation": "W lipcu 2015 TIOBE wiązało odbicie przede wszystkim z upowszechnieniem C++11. Nowy standard wprowadził m.in. lambdy, semantykę przenoszenia i wygodniejsze narzędzia biblioteki standardowej. Modernizacja ułatwiała pisanie kodu bez rezygnowania z kontroli wydajności i zasobów — istotnej przewagi C++ w istniejących systemach.",
      "limit": "To wyjaśnienie zaproponowane przez TIOBE. Standard pochodzi z 2011 r.; wskazanym mechanizmem była jego późniejsza adopcja, a nie nowa premiera w 2015.",
      "sources": [
        {
          "label": "Archiwum odczytów miesięcznych",
          "url": "https://github.com/toUpperCase78/tiobe-index-ratings/blob/master/Tiobe_Index_All_Ratings_October2026.csv"
        },
        {
          "label": "TIOBE VII 2015 — oryginalny raport w kopii PDF",
          "url": "https://img.sauf.ca/pictures/2015-07-27/f109ffcf27985b226a4053d0f4cb716d.pdf"
        }
      ]
    },
    {
      "id": "cpp-2022",
      "language": "cpp",
      "title": "Największy roczny wzrost w 2022 r.",
      "from": {
        "month": "2022-01",
        "value": 8.29
      },
      "to": {
        "month": "2023-01",
        "value": 12.91
      },
      "evidence": "Komentarz TIOBE",
      "explanation": "TIOBE łączyło wzrost z wydajnością C++ oraz systematycznym rozwojem standardu. Wskazywało znaczenie modernizacji rozpoczętej przez C++11 i możliwości C++20. Język pozwala łączyć abstrakcje wysokiego poziomu z kontrolą zasobów w dużych systemach. Za największy przyrost w tym okresie otrzymał tytuł języka roku 2022.",
      "limit": "Komentarz opisuje długoterminowe przewagi języka; nie mierzy, ile punktów dodała każda konkretna funkcja standardu.",
      "sources": [
        {
          "label": "Odczyt I 2022",
          "url": "https://github.com/toUpperCase78/tiobe-index-ratings/blob/master/Year2022/tiobe_index_january2022.csv"
        },
        {
          "label": "Odczyt I 2023",
          "url": "https://github.com/toUpperCase78/tiobe-index-ratings/blob/master/Year2023/tiobe_index_january2023.csv"
        },
        {
          "label": "Komentarz TIOBE przytoczony przez PVS-Studio",
          "url": "https://pvs-studio.com/en/blog/posts/1026/"
        }
      ]
    },
    {
      "id": "java-2014-2016",
      "language": "java",
      "title": "Wzrost o niemal 8 p.p.: Android i Java 8",
      "from": {
        "month": "2014-10",
        "value": 13.51
      },
      "to": {
        "month": "2016-01",
        "value": 21.47
      },
      "evidence": "Wyjaśnienia autorów TIOBE",
      "explanation": "W kwietniu 2015 TIOBE wskazywało popyt na programowanie Androida jako główny czynnik odbicia Javy. Pod koniec roku Jansen wskazywał także adopcję Javy 8: lambdy i strumienie ułatwiały przetwarzanie danych i zbliżały język do stylu funkcyjnego. W podsumowaniu 2015 autorzy indeksu wymieniali Androida, backend biznesowy i nowe funkcje języka.",
      "limit": "Wzrost nie był przypisany jednej aktualizacji. Wczesne odbicie TIOBE łączyło z Androidem; znaczenie Javy 8 podkreślało w późniejszych komentarzach.",
      "sources": [
        {
          "label": "Archiwum odczytów miesięcznych",
          "url": "https://github.com/toUpperCase78/tiobe-index-ratings/blob/master/Tiobe_Index_All_Ratings_October2026.csv"
        },
        {
          "label": "Wypowiedź Jansena — IV 2015",
          "url": "https://www.infoworld.com/article/2237727/java-regains-spot-as-most-popular-language-in-developer-index.html"
        },
        {
          "label": "Wypowiedź Jansena — XI 2015",
          "url": "https://www.infoworld.com/article/2240935/java-shines-brightest-in-language-popularity.html"
        },
        {
          "label": "Komentarz TIOBE podsumowujący 2015",
          "url": "https://adtmag.com/blogs/watersworks/2016/01/java-2015.aspx?p=1"
        }
      ]
    },
    {
      "id": "java-2016-2017",
      "language": "java",
      "title": "Spadek o 8,51 p.p. po szczycie z 2016 r.",
      "from": {
        "month": "2016-01",
        "value": 21.47
      },
      "to": {
        "month": "2017-08",
        "value": 12.96
      },
      "evidence": "Hipoteza autora indeksu",
      "explanation": "Po wzroście związanym z Androidem i Javą 8 wynik Javy wyraźnie się cofnął. W 2017 Jansen tłumaczył osłabienie dominujących języków rosnącą liczbą technologii i aplikacji łączących kilka języków. To mogło odbierać Javie część udziału w zainteresowaniu programistów. Równoczesny spadek C wskazuje, że zjawisko nie dotyczyło wyłącznie Javy.",
      "limit": "Rozdrobnienie to hipoteza TIOBE; dostępne źródła nie identyfikują jednego wydarzenia odpowiedzialnego za pełne −8,51 p.p. Nie jest to pomiar liczby usuniętych aplikacji.",
      "sources": [
        {
          "label": "Archiwum odczytów miesięcznych",
          "url": "https://github.com/toUpperCase78/tiobe-index-ratings/blob/master/Tiobe_Index_All_Ratings_October2026.csv"
        },
        {
          "label": "Wypowiedź Jansena — IX 2017",
          "url": "https://www.infoworld.com/article/2255789/why-python-and-c-cant-displace-java-c-or-c.html"
        },
        {
          "label": "Odczyt i komentarz — VIII 2017",
          "url": "https://www.infoworld.com/article/2254773/java-and-c-hit-all-time-lows-in-tiobe-language-popularity-index.html"
        }
      ]
    },
    {
      "id": "javascript-2014",
      "language": "javascript",
      "title": "Roczny wzrost i tytuł języka roku 2014",
      "from": {
        "month": "2014-01",
        "value": 1.57,
        "rank": 9
      },
      "to": {
        "month": "2015-01",
        "value": 3.27,
        "rank": 7
      },
      "evidence": "Komentarz TIOBE",
      "explanation": "TIOBE wskazywało sukces bibliotek i narzędzi takich jak jQuery, Bootstrap i Node.js. JavaScript miał zastosowanie w przeglądarce i rozszerzał zasięg na serwer. Autorzy indeksu zaznaczali też, że spadek Objective-C pomógł innym językom zwiększyć względne udziały.",
      "limit": "Źródło podaje dokładnie 1,569% i 3,274%. Wyświetlane wartości oraz zmiana są zaokrąglone; to wzrost w rok, nie w miesiąc.",
      "sources": [
        {
          "label": "Wyniki i wypowiedzi TIOBE — I 2015",
          "url": "https://www.infoworld.com/article/2239003/javascript-surges-past-swift-r-for-programming-language-of-the-year-honors.html"
        }
      ]
    },
    {
      "id": "javascript-2024-2026",
      "language": "javascript",
      "title": "Spadek o około 43% względem końca 2024 r.",
      "from": {
        "month": "2024-12",
        "value": 4.61
      },
      "to": {
        "month": "2026-08",
        "value": 2.63
      },
      "evidence": "Hipoteza: przejście na TypeScript",
      "explanation": "Możliwym czynnikiem jest przenoszenie nowego kodu z JavaScriptu do TypeScriptu. GitHub opisał tę zmianę już w Octoverse 2024, a w sierpniu 2025 TypeScript został tam liderem pod względem liczby miesięcznych współtwórców. Typowanie i narzędzia do pracy nad dużymi projektami pomagają wyjaśnić tę zmianę preferencji; TypeScript nadal kompiluje się do JavaScriptu.",
      "limit": "To uzasadniona hipoteza, nie potwierdzona przyczyna całego spadku TIOBE. GitHub mierzy aktywność w repozytoriach; niższy wskaźnik JavaScriptu nie oznacza zaniku jego ekosystemu.",
      "sources": [
        {
          "label": "Archiwum odczytów miesięcznych",
          "url": "https://github.com/toUpperCase78/tiobe-index-ratings/blob/master/Tiobe_Index_All_Ratings_October2026.csv"
        },
        {
          "label": "GitHub Octoverse 2024 — przejście na TypeScript",
          "url": "https://github.blog/news-insights/octoverse/octoverse-2024/"
        },
        {
          "label": "GitHub Octoverse 2025",
          "url": "https://github.blog/news-insights/octoverse/octoverse-a-new-developer-joins-github-every-second-as-ai-leads-typescript-to-1/"
        }
      ]
    },
    {
      "id": "php-2003-2004",
      "language": "php",
      "title": "Wzrost z 4,49% do ponad 11% w latach 2003–2004",
      "from": {
        "month": "2003-01",
        "value": 4.49
      },
      "to": {
        "month": "2004-11",
        "value": 11.45
      },
      "evidence": "Kontekst: PHP 5 i rozwój webu",
      "explanation": "PHP rozwijało się jako język dynamicznych stron z prostym wdrożeniem na serwerze. W lipcu 2004 pojawiło się PHP 5 z Zend Engine 2 i nowym modelem obiektowym, co poszerzało możliwości budowy aplikacji. Zespół PHP potwierdził też nagrodę TIOBE za największy roczny wzrost w 2004. Są to konkretne elementy kontekstu ówczesnego zainteresowania.",
      "limit": "PHP 5 jest prawdopodobnym czynnikiem, nie wyliczoną przyczyną +6,96 p.p. Część wzrostu nastąpiła przed premierą; porównanie obejmuje także zaburzenie wyników wyszukiwania z 2004.",
      "sources": [
        {
          "label": "Archiwum odczytów miesięcznych",
          "url": "https://github.com/toUpperCase78/tiobe-index-ratings/blob/master/Tiobe_Index_All_Ratings_October2026.csv"
        },
        {
          "label": "PHP — historia PHP 5",
          "url": "https://www.php.net/manual/en/history.php.php"
        },
        {
          "label": "Zespół PHP o nagrodzie TIOBE — I 2005",
          "url": "https://www.php.net/archive/2005.php"
        },
        {
          "label": "FAQ TIOBE — kopia z II 2015, s. 5",
          "url": "https://stefanch.com/wp-content/uploads/2015/02/Tiobe-Index-2015-02-21.pdf#page=5"
        }
      ]
    },
    {
      "id": "php-2010-2024",
      "language": "php",
      "title": "Niemal 90% mniej względem początku 2010 r.",
      "from": {
        "month": "2010-01",
        "value": 10.07
      },
      "to": {
        "month": "2024-04",
        "value": 1.09
      },
      "evidence": "Komentarz TIOBE i zmiana metodologii",
      "explanation": "Jansen wskazywał konkurencję Rails, Django i rozwiązań JavaScript oraz historyczne problemy bezpieczeństwa PHP. To konkretne alternatywy w obszarze, w którym PHP wcześniej dominowało. Na wieloletnią różnicę wpływał też pomiar: w 2014 Jansen przypominał, że udziały zaczęto normalizować względem ponad 200 języków zamiast pierwszych 50, obniżając wyniki dawnych liderów.",
      "limit": "−8,98 p.p. i −89,2% dotyczy lat 2010–2024. Od I 2014 (4,61%) do IV 2024 (1,09%) spadek wynosi −3,52 p.p., czyli około −76,4%. Żaden z tych wyników nie mierzy odsetka zamkniętych witryn PHP.",
      "sources": [
        {
          "label": "Archiwum odczytów miesięcznych",
          "url": "https://github.com/toUpperCase78/tiobe-index-ratings/blob/master/Tiobe_Index_All_Ratings_October2026.csv"
        },
        {
          "label": "Wypowiedź Jansena o PHP — IV 2024",
          "url": "https://www.infoworld.com/article/2336734/php-sinks-in-tiobe-language-popularity-index.html"
        },
        {
          "label": "Jansen o rozszerzeniu podstawy obliczeń — XII 2014",
          "url": "https://www.infoworld.com/article/2236579/r-swift-soar-in-language-popularity-in-2014.html"
        }
      ]
    },
    {
      "id": "kotlin-2017-2023",
      "language": "kotlin",
      "title": "Od 0,09% do historycznego maksimum 1,15%",
      "from": {
        "month": "2017-02",
        "value": 0.09
      },
      "to": {
        "month": "2023-11",
        "value": 1.15
      },
      "evidence": "Udokumentowany rozwój ekosystemu",
      "explanation": "W maju 2017 Google ogłosiło oficjalne wsparcie Kotlina na Androidzie i obsługę w Android Studio 3.0. Kolejne lata przyniosły inwestycje w biblioteki, dokumentację i podejście Kotlin-first. W kwietniu 2023 Google podawało, że język jest używany w ponad 95% tysiąca najpopularniejszych aplikacji Androida. To konkretna droga od niszowego języka do szerokiego zastosowania na jednej dużej platformie.",
      "limit": "Kotlin miał w sprawdzonej serii maksimum 1,15%, dlatego porównanie obejmuje niemal siedem lat. Duży wzrost względny wynika też z bardzo niskiej wartości początkowej; dane Androida nie są wskaźnikiem TIOBE.",
      "sources": [
        {
          "label": "Archiwum odczytów miesięcznych",
          "url": "https://github.com/toUpperCase78/tiobe-index-ratings/blob/master/Tiobe_Index_All_Ratings_October2026.csv"
        },
        {
          "label": "Google — oficjalne wsparcie, V 2017",
          "url": "https://android-developers.googleblog.com/2017/05/android-announces-support-for-kotlin.html"
        },
        {
          "label": "Google — skala adopcji, IV 2023",
          "url": "https://developers.googleblog.com/google-at-kotlinconf-23/"
        }
      ]
    }
  ]
};
