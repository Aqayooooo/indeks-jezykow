# Języki programowania — popularność i wersje

Zestawienie sześciu języków programowania: Python, C++, Java, JavaScript, PHP i Kotlin.

- Ranking TIOBE z października 2026, wskaźniki procentowe i zmiany rok do roku.
- Historyczne pozycje w latach 2005–2025 z tabelą wartości.
- 14 dużych zmian wskaźnika dla sześciu języków w latach 2003–2026: okresy od miesiąca do kilkunastu lat, wyjaśnienia i źródła. Każda różnica przekracza 1 p.p.
- Wersje, trzy istotne wydania każdego języka i przykłady kodu.

## Uruchomienie

Otwórz `index.html` w przeglądarce lub uruchom serwer statyczny:

```sh
python -m http.server 4173
```

Nie jest wymagany proces budowania ani instalacja zależności.

## Pliki

- `index.html` — treść i struktura
- `report.css` — podstawowe style strony, tabel i przycisków
- `report.js` — tabele, wykres i zakładki
- `changes-data.js` — odczyty, opisy zmian i źródła
- `changes.js` — wybór języka i obliczanie różnic
- `languages.js` — profile języków
- `data.json` — eksport danych
- `metodologia.md` — źródła i ograniczenia pomiarów

## Dane

Stan rankingu i wersji: **20 października 2026 r.** Analizę historycznych zmian sprawdzono **24 października 2026 r.** Szczegóły: [metodologia.md](metodologia.md). Eksport: [data.json](data.json).

Historyczne średnie 12-miesięczne są prezentowane oddzielnie od miesięcznych wyników 2026. Dla Kotlina nie ma porównywalnej serii 2005–2025. TIOBE nie mierzy liczby ofert pracy ani projektów.

Interfejs korzysta z systemowych fontów. Nie używa analityki ani plików cookie.