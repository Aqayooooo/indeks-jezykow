# Dane i metodologia

Stan zestawienia: **20 października 2026 r.** To zapis archiwalny, bez automatycznej aktualizacji.

## Popularność

Ranking z października 2026 obejmuje sześć wybranych języków: Python, C++, Java, JavaScript, PHP i Kotlin. Wskaźnik TIOBE opisuje zainteresowanie według metodologii indeksu. Nie mierzy liczby projektów, programistów ani ofert pracy. Zmiana rok do roku jest podana w punktach procentowych. Brak porównania dla Kotlina jest oznaczony jako brak danych, nie jako zero.

## Historia

Wykres korzysta z archiwalnego zestawienia TIOBE z czerwca 2025. Punkty w latach 2005, 2010, 2015, 2020 i 2025 przedstawiają pozycje uśrednione w okresach 12-miesięcznych. Linie jedynie łączą te obserwacje; ich przebieg pomiędzy punktami nie opisuje dodatkowych pomiarów. Im mniejszy numer miejsca, tym wyżej znajduje się punkt.

Kotlin nie ma w tym zestawieniu porównywalnej serii historycznej. Dane miesięczne z 2026 są prezentowane osobno. Wskazana w analizie zmiana metodologii TIOBE w październiku 2026 ogranicza porównywalność procentów z wcześniejszymi okresami.

## Skoki i spadki popularności

Analiza sprawdzona **24 października 2026 r.** obejmuje 14 wybranych zmian dla sześciu języków, w latach 2003–2026. To odczyty miesięczne, odrębne od średnich 12-miesięcznych na wykresie. Każda prezentowana różnica przekracza 1 punkt procentowy. Usunięto przypadki oparte wyłącznie na zmianie miejsca i mniejszych wahaniach. Okresy od miesiąca do kilkunastu lat obejmują wybrane większe fazy wzrostu lub spadku, a nie wyłącznie porównania sąsiednich miesięcy. Nie jest to pełna lista ani automatyczny ranking największych zmian w całej historii. Wewnątrz dłuższego okresu mogły występować odbicia i wahania.

Wartości historyczne pochodzą z [nieoficjalnego archiwum odczytów TIOBE](https://github.com/toUpperCase78/tiobe-index-ratings) oraz wskazanych raportów z danego okresu. Archiwum nie jest prowadzone przez TIOBE. Jego zbiorcza seria historyczna została odtworzona z wykresów, więc wartości są przybliżone; osobne tabele miesięczne i raporty pozwalają sprawdzić wskazane nowsze odczyty. W dniu weryfikacji oficjalna strona indeksu informowała o czasowej niedostępności historii w związku z aktualizacją metodologii. Miesiące oznaczają wydania indeksu, niekoniecznie datę zapisania pliku archiwalnego.

Wskaźniki pokazujemy z dokładnością do dwóch miejsc po przecinku. Różnica w punktach procentowych to wartość końcowa minus początkowa. Zmiana względna to ta różnica podzielona przez wartość początkową, pomnożona przez 100%. Na przykład 16,12% → 23,84% daje +7,72 p.p. i około +47,9% względem wartości początkowej. Nie jest to wzrost liczby programistów o 47,9%. Kolumna „Change” w tabelach TIOBE oznacza zmianę rok do roku, a nie od poprzedniego miesiąca.

Dla JavaScriptu w styczniu 2014 i 2015 raport podaje dokładnie 1,569% oraz 3,274%; interfejs wylicza różnicę z wyświetlonych 1,57% i 3,27%. Dla Javy w sierpniu 2017 pierwotny odczyt 12,961% został zaokrąglony do 12,96%.

Rozróżniamy udokumentowane czynniki, komentarze twórców indeksu, kontekst trendu i wyraźnie oznaczone hipotezy. Starsze wypowiedzi Paula Jansena są dostępne w raportach InfoWorld i PVS-Studio, a nowsze również w zachowanych komentarzach TIOBE w archiwum. Podajemy, gdzie komentarz został zachowany; nie przedstawiamy archiwum jako oficjalnej publikacji TIOBE.

Raporty GitHuba, Google oraz PSF/JetBrains opisują inne miary i grupy użytkowników. Potwierdzają wydarzenia lub kontekst technologiczny, ale nie pozwalają obliczyć ich udziału w konkretnym skoku TIOBE. Równoczesne zdarzenia nie są dowodem przyczynowości. Dobór nie opiera się na samych zmianach miejsca w rankingu.

Odczyty, opisy, okresy i odnośniki do źródeł każdego przypadku są w `changes-data.js` i w polu `popularityChanges` pliku `data.json`. Linki do konkretnych źródeł są również widoczne pod każdym opisem na stronie.

### Korekty dat i interpretacji

- Wiosenny skok Pythona to III–V 2004: około 1,01% → 6,58%, a nie rok 2003. FAQ TIOBE potwierdza zaburzenie wyników Google w IV 2004 dla Javy i C++. Wpływ tego zaburzenia na wzrost względnego udziału Pythona jest wnioskiem, nie wyliczeniem opublikowanym przez TIOBE.
- Dla C++ VIII 2003 → XII 2007 daje około 17,53% → 7,87%, czyli −9,66 p.p. i około −55,1% względem wartości początkowej. Czynnik pomiarowy z 2004 i ocena konkurencji C# z 2007 są opisane osobno.
- Dla PHP porównanie I 2010 → IV 2024 daje 10,07% → 1,09%: −8,98 p.p. i −89,2%. Od I 2014 (4,61%) spadek wynosi −3,52 p.p. i około −76,4%. W porównaniu przez wiele lat uwzględniamy również rozszerzenie podstawy normalizacji TIOBE z 50 do ponad 200 języków, opisane przez Jansena w 2014.
- Dla Kotlina wydłużono okres do II 2017 → XI 2023, uzyskując 0,09% → 1,15%, czyli +1,06 p.p. To maksimum w sprawdzonej serii, a nie język o kilkunastoprocentowym udziale.
- Spadek Pythona od VII 2025 pokazujemy do IX 2026, przed wskazaną zmianą metodologii w X 2026. Komentarz o R i Perlu z II 2026 dotyczy części tego dłuższego okresu.

### Źródła wyjaśnień

- [GitHub Octoverse 2024](https://github.blog/news-insights/octoverse/octoverse-2024/) — aktywność Pythona, Jupyter i ekosystemu npm; okres raportu X 2023–IX 2024.
- [PSF / JetBrains: Python Developers Survey 2024](https://lp.jetbrains.com/python-developers-survey-2024/) — zakres zastosowań Pythona.
- [Zachowane komentarze TIOBE](https://github.com/toUpperCase78/tiobe-index-ratings) — maj 2025 i luty 2026.
- [PVS-Studio: C++ językiem roku 2022](https://pvs-studio.com/en/blog/posts/1026/) — przytoczony komentarz TIOBE o wydajności i modernizacji standardu.
- [InfoWorld: komentarz o konkurencji języków, IX 2017](https://www.infoworld.com/article/2255789/why-python-and-c-cant-displace-java-c-or-c.html).
- [InfoWorld: spadki Javy i C, VIII 2017](https://www.infoworld.com/article/2254773/java-and-c-hit-all-time-lows-in-tiobe-language-popularity-index.html).
- [InfoWorld: JavaScript językiem roku 2014](https://www.infoworld.com/article/2239003/javascript-surges-past-swift-r-for-programming-language-of-the-year-honors.html).
- [InfoWorld: spadek PHP, IV 2024](https://www.infoworld.com/article/2336734/php-sinks-in-tiobe-language-popularity-index.html).
- [Google: wsparcie Kotlina na Androidzie, 17 V 2017](https://android-developers.googleblog.com/2017/05/android-announces-support-for-kotlin.html).
- [Google at KotlinConf 2023](https://developers.googleblog.com/google-at-kotlinconf-23/).
- [TIOBE: definicja i obliczanie indeksu](https://www.tiobe.com/tiobe-index/programminglanguages_definition/).

- [FAQ TIOBE w kopii raportu z II 2015, s. 5 — zmiana wyników Google w 2004](https://stefanch.com/wp-content/uploads/2015/02/Tiobe-Index-2015-02-21.pdf#page=5).
- [TIOBE VII 2015, zachowany raport — odbicie C++ i adopcja C++11](https://img.sauf.ca/pictures/2015-07-27/f109ffcf27985b226a4053d0f4cb716d.pdf).
- [TIOBE IX 2007, zachowany komentarz Jansena — C++ i C#](https://www.production.dijitalders.com/icerik/131/337/programlama_dili_istatistikleri.html).
- [InfoWorld: autorzy badania trendów w 2005](https://www.infoworld.com/article/2221907/2005-survey-spots-trends-in-software-development.html).
- [InfoWorld: wypowiedź Jansena o Androidzie, IV 2015](https://www.infoworld.com/article/2237727/java-regains-spot-as-most-popular-language-in-developer-index.html).
- [InfoWorld: wypowiedź Jansena o Javie 8, XI 2015](https://www.infoworld.com/article/2240935/java-shines-brightest-in-language-popularity.html).
- [ADTmag: przytoczone podsumowanie TIOBE za 2015](https://adtmag.com/blogs/watersworks/2016/01/java-2015.aspx?p=1).
- [GitHub Octoverse 2025 — wzrost TypeScriptu](https://github.blog/news-insights/octoverse/octoverse-a-new-developer-joins-github-every-second-as-ai-leads-typescript-to-1/).
- [PHP: historia języka — PHP 5](https://www.php.net/manual/en/history.php.php).
- [PHP: ogłoszenie nagrody TIOBE za 2004](https://www.php.net/archive/2005.php).
- [InfoWorld: wypowiedź Jansena o zmianie normalizacji, XII 2014](https://www.infoworld.com/article/2236579/r-swift-soar-in-language-popularity-in-2014.html).
- [Python 2.4: data wydania](https://www.python.org/download/releases/2.4/).

## Wydania i interpretacja

Opisy obejmują trzy istotne wydania funkcjonalne każdego języka oraz wersję lub standard wskazane dla daty zestawienia. Funkcje Preview, eksperymentalne i wersje testowe są wyróżnione w opisach. Opublikowanie standardu nie gwarantuje pełnego wsparcia przez kompilatory, przeglądarki i środowiska uruchomieniowe.

Kontekst historyczny jest interpretacją zmian w technologii, a nie dowodem przyczynowości. Popularność jest tylko jednym z kryteriów wyboru języka do projektu.

## Źródła do weryfikacji

- [TIOBE Index](https://www.tiobe.com/tiobe-index/)
- [Python: dokumentacja według wersji](https://www.python.org/doc/versions/)
- [PHP: dokumentacja](https://www.php.net/)
- [ECMAScript: standard](https://262.ecma-international.org/)
- [Java SE: dokumentacja](https://docs.oracle.com/en/java/javase/)
- [Kotlin: historia wydań](https://kotlinlang.org/docs/releases.html)
- [C++: ISO/IEC 14882](https://www.iso.org/standard/83626.html)
- [C++26: WG21 P2996R13 — refleksja statyczna i operator ^^](https://www.open-std.org/jtc1/sc22/wg21/docs/papers/2025/p2996r13.html)

Ranking i wersje zostały przeniesione z analizy źródłowej. Historyczne przypadki w sekcji „Skoki i spadki” zweryfikowano osobno według źródeł wskazanych powyżej.
