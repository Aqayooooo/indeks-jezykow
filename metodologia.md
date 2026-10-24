# Dane i metodologia

Stan zestawienia: **20 października 2026 r.** To zapis archiwalny, bez automatycznej aktualizacji.

## Popularność

Ranking z października 2026 obejmuje sześć wybranych języków: Python, C++, Java, JavaScript, PHP i Kotlin. Wskaźnik TIOBE opisuje zainteresowanie według metodologii indeksu. Nie mierzy liczby projektów, programistów ani ofert pracy. Zmiana rok do roku jest podana w punktach procentowych. Brak porównania dla Kotlina jest oznaczony jako brak danych, nie jako zero.

## Historia

Mapa korzysta z archiwalnego zestawienia TIOBE z czerwca 2025. Punkty w latach 2005, 2010, 2015, 2020 i 2025 przedstawiają pozycje uśrednione w okresach 12-miesięcznych. Linie jedynie łączą te obserwacje; ich przebieg pomiędzy punktami nie opisuje dodatkowych pomiarów. Im mniejszy numer miejsca, tym wyżej znajduje się punkt.

Kotlin nie ma w tym zestawieniu porównywalnej serii historycznej. Dane miesięczne z 2026 są prezentowane osobno. Wskazana w analizie zmiana metodologii TIOBE w październiku 2026 ogranicza porównywalność procentów z wcześniejszymi okresami.

## Skoki i spadki popularności

Analiza sprawdzona **24 października 2026 r.** obejmuje 14 wybranych zmian dla sześciu języków, w okresach 2014–2026. To odczyty miesięczne, odrębne od średnich 12-miesięcznych na wykresie. Przypadki dobrano ze względu na wielkość zmiany, zmianę pozycji lub udokumentowane wydarzenie; nie jest to pełna lista wszystkich wahań.

Wartości historyczne pochodzą z [nieoficjalnego archiwum odczytów TIOBE](https://github.com/toUpperCase78/tiobe-index-ratings) oraz wskazanych raportów z danego okresu. Archiwum nie jest prowadzone przez TIOBE. Jego zbiorcza seria historyczna została odtworzona z wykresów, więc wartości są przybliżone; osobne tabele miesięczne i raporty pozwalają sprawdzić wskazane nowsze odczyty. W dniu weryfikacji oficjalna strona indeksu informowała o czasowej niedostępności historii w związku z aktualizacją metodologii. Miesiące oznaczają wydania indeksu, niekoniecznie datę zapisania pliku archiwalnego.

Wskaźniki pokazujemy z dokładnością do dwóch miejsc po przecinku. Różnica w punktach procentowych to wartość końcowa minus początkowa. Zmiana względna to ta różnica podzielona przez wartość początkową, pomnożona przez 100%. Na przykład 16,12% → 23,84% daje +7,72 p.p. i około +47,9% względem wartości początkowej. Nie jest to wzrost liczby programistów o 47,9%. Kolumna „Change” w tabelach TIOBE oznacza zmianę rok do roku, a nie od poprzedniego miesiąca.

Dla JavaScriptu w styczniu 2014 i 2015 raport podaje dokładnie 1,569% oraz 3,274%; interfejs wylicza różnicę z wyświetlonych 1,57% i 3,27%. Dla Javy w sierpniu 2017 pierwotny odczyt 12,961% został zaokrąglony do 12,96%.

Rozróżniamy komentarz twórców indeksu, potwierdzone wydarzenie, kontekst trendu i przypadki bez ustalonej przyczyny. Starsze wypowiedzi Paula Jansena są dostępne w raportach InfoWorld i PVS-Studio, a nowsze również w zachowanych komentarzach TIOBE w archiwum. Podajemy, gdzie komentarz został zachowany; nie przedstawiamy archiwum jako oficjalnej publikacji TIOBE.

Raporty GitHuba, Google oraz PSF/JetBrains opisują inne miary i grupy użytkowników. Potwierdzają wydarzenia lub kontekst technologiczny, ale nie pozwalają obliczyć ich udziału w konkretnym skoku TIOBE. Równoczesne zdarzenia nie są dowodem przyczynowości. Przy zmianie miejsca w rankingu oddzielamy arytmetykę awansu od przyczyny zainteresowania językiem.

Odczyty, opisy, okresy i odnośniki do źródeł każdego przypadku są w `changes-data.js` i w polu `popularityChanges` pliku `data.json`. Linki do konkretnych źródeł są również widoczne pod każdym opisem na stronie.

### Źródła wyjaśnień

- [GitHub Octoverse 2024](https://github.blog/news-insights/octoverse/octoverse-2024/) — aktywność Pythona, Jupyter i ekosystemu npm; okres raportu X 2023–IX 2024.
- [PSF / JetBrains: Python Developers Survey 2024](https://lp.jetbrains.com/python-developers-survey-2024/) — zakres zastosowań Pythona.
- [Zachowane komentarze TIOBE](https://github.com/toUpperCase78/tiobe-index-ratings) — maj 2025, luty 2026 i kwiecień 2025.
- [PVS-Studio: C++ językiem roku 2022](https://pvs-studio.com/en/blog/posts/1026/) — przytoczony komentarz TIOBE o wydajności i modernizacji standardu.
- [InfoWorld: komentarz o konkurencji języków, IX 2017](https://www.infoworld.com/article/2255789/why-python-and-c-cant-displace-java-c-or-c.html).
- [InfoWorld: spadki Javy i C, VIII 2017](https://www.infoworld.com/article/2254773/java-and-c-hit-all-time-lows-in-tiobe-language-popularity-index.html).
- [InfoWorld: JavaScript językiem roku 2014](https://www.infoworld.com/article/2239003/javascript-surges-past-swift-r-for-programming-language-of-the-year-honors.html).
- [InfoWorld: spadek PHP, IV 2024](https://www.infoworld.com/article/2336734/php-sinks-in-tiobe-language-popularity-index.html).
- [Google: wsparcie Kotlina na Androidzie, 17 V 2017](https://android-developers.googleblog.com/2017/05/android-announces-support-for-kotlin.html).
- [JetBrains: Kotlin w Android Studio](https://blog.jetbrains.com/kotlin/2017/05/kotlin-on-android-now-official/).
- [Google at KotlinConf 2023](https://developers.googleblog.com/google-at-kotlinconf-23/).
- [TIOBE: definicja i obliczanie indeksu](https://www.tiobe.com/tiobe-index/programminglanguages_definition/).

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

Ranking i wersje zostały przeniesione z analizy źródłowej. Historyczne przypadki w sekcji „Skoki i spadki” zweryfikowano osobno według źródeł wskazanych powyżej.
