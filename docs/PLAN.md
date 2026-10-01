# Piano di realizzazione — 7 giorni lavorativi (gio 1 – ven 9 ottobre 2026)

Ogni giornata ha un'attività pianificata alle 12:00 (ora italiana) che legge `docs/SPEC.md`, questo file e `PROGRESS.md`, esegue i microtask del proprio giorno, spunta le caselle, aggiorna `PROGRESS.md` e fa push su `main`.
Se un prerequisito di Andrea manca, si fa tutto il resto e si annota `BLOCCATO:` in `PROGRESS.md`.

## Cosa serve da Andrea

| Quando | Cosa |
|--------|------|
| Giovedì 1, pomeriggio | Connettere Upstash Redis al progetto dal Marketplace di Vercel |
| Da subito, in chat | Approvare o correggere i blocchi di contenuti (domande, tag, risposte, giudizi finali) man mano che arrivano |
| Entro mercoledì 7 | Impostare `ADMIN_PASSWORD` nelle variabili d'ambiente del progetto Vercel |
| Giovedì 8 sera | Caricare le immagini in `public/img/<slug>.webp` (vedi `docs/IMAGES.md`) |
| Venerdì 9 mattina | Fornire il contatto del titolare per `/privacy` |

## Giorno 1 — gio 1 ott: fondamenta
- [x] Scaffold Next.js (App Router) + TypeScript + Tailwind nella radice della repo, `.gitignore`, `README.md`
- [ ] (BLOCCATO, vedi PROGRESS.md) Collegare la repo a un progetto Vercel e fare il primo deploy (se il collegamento GitHub non è autorizzato, annotare BLOCCATO con i passi manuali)
- [x] Tipi e schema dati: `lib/types.ts`, `data/phenomena.ts` con i 20 fenomeni, slug, macro-categoria e `stem` come da SPEC (contenuti testuali ancora vuoti)
- [x] `docs/IMAGES.md`: 20 nomi file con indicazione di taglio/zoom per ciascuno
- [x] Design tokens (palette, font via `next/font`, raggi, ombre) in stile social contemporaneo
- [x] Setup Vitest

## Fase 0 — contenuti definiti in chat con Andrea (in corso, prima del Giorno 2)
Andrea e Claude definiscono in chat, a blocchi di 4 fenomeni: domanda, 3 tag corretti, 4 tag errati, commento (COS'È e PERCHÉ insieme), e i giudizi finali (frasi ironiche per fascia e per BRO/SIS/ZIO/ZIA/BOOMER). Ogni blocco approvato viene salvato in `docs/CONTENUTI.md`, che è la fonte di verità dei testi. Niente testi inventati da sessioni automatiche.

## Giorno 2 — ven 2 ott: integrazione contenuti
- [ ] Integrare `docs/CONTENUTI.md` in `data/phenomena.ts` e nelle costanti dei giudizi finali, testi identici a quelli approvati
- [ ] Per i fenomeni "DA DEFINIRE": segnaposto evidente e `BLOCCATO:` in `PROGRESS.md`, nessun testo inventato
- [ ] Test: ogni fenomeno completo ha 3 tag corretti e 4 errati, tutti distinti
- [ ] Segnalare in `PROGRESS.md` cosa resta da definire con Andrea

## Giorno 3 — lun 5 ott: logica
- [ ] Applicare eventuali correzioni successive di Andrea a `docs/CONTENUTI.md` e ai dati
- [ ] Shuffle Fisher–Yates: ordine delle 20 domande e posizione dei 7 tag, contenuto mai alterato
- [ ] Stato della sessione: numero X / 20, selezione massimo 3 tag, conferma, punteggio
- [ ] Classificazione finale (soglie e termini da SPEC) e calcolo categoria migliore in percentuale
- [ ] Test Vitest su shuffle, punteggio, classificazione

## Giorno 4 — mar 6 ott: schermate del quiz
- [ ] Schermata iniziale
- [ ] Schermata domanda: immagine grande zoomata e scurita, nome del fenomeno, 7 chip, "Scegli 3 tag", conferma
- [ ] Schermata "VEDIAMO SE CI HAI PRESO": corretti, sbagliati, selezioni giuste, corretti non selezionati, commento unico «COS'È E PERCHÉ?», immagine rivelata senza didascalia, "PROSSIMA DOMANDA"
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
- [ ] Proporre ad Andrea la card personaggio condivisibile sui social (Web Share API, immagine generata da codice, punteggio e termine finale), con stima del lavoro: non implementarla senza approvazione
- [ ] Riepilogo finale in `PROGRESS.md`: cosa è fatto, cosa resta (dominio, contatto, verifica legale, termini Vercel per uso commerciale)
