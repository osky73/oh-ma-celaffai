# Piano di realizzazione — 7 giorni lavorativi (gio 1 – ven 9 ottobre 2026)

Ogni giornata ha un'attività pianificata alle 09:00 (ora italiana) che legge `docs/SPEC.md`, questo file e `PROGRESS.md`, esegue i microtask del proprio giorno, spunta le caselle, aggiorna `PROGRESS.md` e fa push su `main`.
Se un prerequisito di Andrea manca, si fa tutto il resto e si annota `BLOCCATO:` in `PROGRESS.md`.

## Cosa serve da Andrea

| Quando | Cosa |
|--------|------|
| Giovedì 1, pomeriggio | Connettere Upstash Redis al progetto dal Marketplace di Vercel |
| Venerdì 2 – lunedì 5 mattina | Validare `docs/CONTENUTI-DA-VALIDARE.md` (slang e tag invecchiano in fretta) |
| Entro mercoledì 7 | Impostare `ADMIN_PASSWORD` nelle variabili d'ambiente del progetto Vercel |
| Giovedì 8 sera | Caricare le immagini in `public/img/<slug>.webp` (vedi `docs/IMAGES.md`) |
| Venerdì 9 mattina | Fornire il contatto del titolare per `/privacy` |

## Giorno 1 — gio 1 ott: fondamenta
- [ ] Scaffold Next.js (App Router) + TypeScript + Tailwind nella radice della repo, `.gitignore`, `README.md`
- [ ] Collegare la repo a un progetto Vercel e fare il primo deploy (se il collegamento GitHub non è autorizzato, annotare BLOCCATO con i passi manuali)
- [ ] Tipi e schema dati: `lib/types.ts`, `data/phenomena.ts` con i 20 fenomeni, slug, macro-categoria e `stem` come da SPEC (contenuti testuali ancora vuoti)
- [ ] `docs/IMAGES.md`: 20 nomi file con indicazione di taglio/zoom per ciascuno
- [ ] Design tokens (palette, font via `next/font`, raggi, ombre) in stile social contemporaneo
- [ ] Setup Vitest

## Giorno 2 — ven 2 ott: contenuti
- [ ] Contenuti fenomeni 1–10: intro, 3 tag corretti, 4 errati plausibili, COS'È, PERCHÉ, didascalia
- [ ] Contenuti fenomeni 11–20 (ME CONTRO TE con tono pre-teen)
- [ ] Inserire i contenuti in `data/phenomena.ts`
- [ ] Generare `docs/CONTENUTI-DA-VALIDARE.md` leggibile (una scheda per fenomeno) con spazio per correzioni
- [ ] Segnalare in `PROGRESS.md` cosa deve validare Andrea

## Giorno 3 — lun 5 ott: logica
- [ ] Applicare le correzioni di Andrea (file di contenuti e/o `docs/CORREZIONI.md`)
- [ ] Shuffle Fisher–Yates: ordine delle 20 domande e posizione dei 7 tag, contenuto mai alterato
- [ ] Stato della sessione: numero X / 20, selezione massimo 3 tag, conferma, punteggio
- [ ] Classificazione finale (soglie e termini da SPEC) e calcolo categoria migliore in percentuale
- [ ] Test Vitest su shuffle, punteggio, classificazione

## Giorno 4 — mar 6 ott: schermate del quiz
- [ ] Schermata iniziale
- [ ] Schermata domanda: immagine grande zoomata e scurita, nome, intro, 7 chip, "Scegli 3 tag", conferma
- [ ] Schermata "VEDIAMO SE CI HAI PRESO": corretti, sbagliati, selezioni giuste, corretti non selezionati, COS'È?, PERCHÉ?, immagine rivelata con didascalia, "PROSSIMA DOMANDA"
- [ ] Fallback grafico quando l'immagine manca
- [ ] Animazioni leggere, `prefers-reduced-motion`, tap target, `aria-pressed`, contrasto

## Giorno 5 — mer 7 ott: risultato finale e interfaccia suggerimenti
- [ ] Schermata risultato: punteggio su 60, percentuale, tag corretti, domande perfette, categoria migliore, frase ironica per fascia
- [ ] Frase sul genere identica (costante unica), switch MASCHIO/FEMMINA, classificazione BRO/SIS/ZIO/ZIA/BOOMER
- [ ] Interfaccia suggerimenti con adattatore dati finto: campo, pulsante "DROPPALO", riga privacy, elenco "SUGGERIMENTI IN TREND", elenco "STANNO SALENDO" con tap, empty state
- [ ] Ordine della schermata finale come da SPEC

## Giorno 6 — gio 8 ott: backend suggerimenti
- [ ] Client Upstash (supporto delle due coppie di variabili) e funzione di normalizzazione con test
- [ ] API: invio suggerimento, voto tap, lettura elenchi (trend + in salita) con cache 60 s
- [ ] Un voto per persona per elemento (cookie + hash IP con sale, TTL 90 giorni), rate limit, blacklist di base
- [ ] Collegare l'interfaccia del Giorno 5 alle API reali; soglie 30 e `RISING_MIN`
- [ ] `/admin` protetta da password: elenco completo, nascondi/ripristina, export CSV
- [ ] Test Vitest su normalizzazione (incluse frasi meme), soglie e voto duplicato

## Giorno 7 — ven 9 ott: rifinitura e produzione
- [ ] Integrare le immagini caricate da Andrea; verificare il fallback per quelle mancanti
- [ ] Meta tag, immagine di anteprima social (generata da codice), favicon, pagina `/privacy`
- [ ] Controlli responsive, accessibilità e prestazioni (build, peso immagini, LCP ragionevole)
- [ ] Deploy in produzione, verifica che sia pronto e senza errori nei log
- [ ] Riepilogo finale in `PROGRESS.md`: cosa è fatto, cosa resta (dominio, contatto, verifica legale, termini Vercel per uso commerciale)
