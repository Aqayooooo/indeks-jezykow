# Indeks — języki w ruchu

Interaktywne zestawienie popularności i rozwoju sześciu języków programowania.

**[Otwórz stronę](https://aqayooooo.github.io/indeks-jezykow/)**

## Widoki

- **Mapa historii:** kolorowe trasy pozycji TIOBE w latach 2005–2025, wybór roku, odtwarzanie kolejnych obserwacji i profile języków.
- **Ranking 2026:** wskaźniki z października, zmiany rok do roku i kontekst wyników.
- **Wydania:** trzy istotne wydania każdego języka, obszary zastosowań i przykłady kodu.

Mapa ma obsługę klawiatury, tabelę dokładnych wartości, widok mobilny i odnośniki zachowujące wybrany język oraz rok.

## Uruchomienie

Otwórz `index.html` lub uruchom serwer statyczny:

```sh
python -m http.server 4173
```

Strona nie wymaga procesu budowania ani bibliotek JavaScript. GitHub Pages publikuje katalog główny gałęzi `main`.

## Dane

Stan analizy: **20 października 2026 r.** Szczegóły i ograniczenia: [metodologia.md](metodologia.md). Eksport: [data.json](data.json).

Historyczne średnie 12-miesięczne są prezentowane oddzielnie od miesięcznych wyników 2026. Dla Kotlina nie ma porównywalnej serii 2005–2025. TIOBE nie mierzy liczby ofert pracy ani projektów.

## Pliki

- `index.html` — struktura eksploratora
- `map.css` — wygląd i responsywność
- `map.js` — mapa, oś czasu, ranking i profile
- `languages.js` — dane profili
- `data.json` — eksport danych
- `metodologia.md` — opis źródeł i pomiarów

Fonty DM Sans i Space Grotesk są pobierane z Google Fonts; interfejs ma systemowe fonty zastępcze. Brak analityki i plików cookie.