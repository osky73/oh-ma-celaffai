# Oh ma celaffai?! — Specifiche consolidate

Fonte originale: `docs/BRIEF-originale.md` (testo integrale del brief di Andrea, da non modificare).
Questo file lo integra con le decisioni prese dopo e **prevale** dove i due differiscono.
Lingua del prodotto, dei testi e dei commenti: italiano.

## 1. I 20 fenomeni (decisi)

RIZZ e MEWING sono stati tolti. Aggiunti SPINGERE e ME CONTRO TE. Il 30/09 SIGMA è stato sostituito da GOAT e KAI CENAT da BREAKFAST CLUB (Italia), passando per VIOLA SILVI. Non sostituire altri fenomeni senza una nuova indicazione di Andrea.

| # | Fenomeno | Slug immagine | Macro-categoria | Formato domanda (`stem`) |
|---|----------|---------------|-----------------|--------------------------|
| 1 | 6/7 (sixseven) | sixseven | Slang | 6/7 ma in che senso? |
| 2 | AURA | aura | Slang | Quando hai aura? |
| 3 | GOAT | goat | Slang | Chi è GOAT? |
| 4 | BRAINROT | brainrot | Slang | Cosa significa «brainrot»? |
| 5 | FLEXARE | flexare | Slang | Cosa significa «flexare»? |
| 6 | DROPPARE | droppare | Slang | Cosa significa «droppare»? |
| 7 | GHOSTARE | ghostare | Slang | Cosa significa «ghostare»? |
| 8 | CRINGE | cringe | Slang | Cosa significa «cringe»? |
| 9 | CHILL / CHILLARE | chill | Slang | Cosa significa «chill / chillare»? |
| 10 | SPINGERE | spingere | Slang | Quando qualcosa spinge? |
| 11 | SKIBIDI TOILET | skibidi-toilet | Meme e gesti | Cos'è «Skibidi Toilet»? |
| 12 | SIUUU | siuuu | Meme e gesti | Cos'è «SIUUU»? |
| 13 | KHABY LAME | khaby-lame | Creator | Chi è Khaby Lame? |
| 14 | ISHOWSPEED | ishowspeed | Creator | Chi è IShowSpeed? |
| 15 | BREAKFAST CLUB (Italia) | breakfast-club | Creator | Chi compone il Breakfast Club (Italia)? (proposta di Andrea, da rivedere) |
| 16 | MRBEAST | mrbeast | Creator | Chi è MrBeast? |
| 17 | ME CONTRO TE | me-contro-te | Creator | Chi sono i Me contro Te? (target più pre-teen: tono e tag coerenti) |
| 18 | DRIP | drip | Moda e brand | Cosa significa «drip»? |
| 19 | FIVEFOURFIVE (545) | fivefourfive | Moda e brand | Cos'è «FIVEFOURFIVE»? |
| 20 | GCDS | gcds | Moda e brand | Cos'è «GCDS»? |

- Ogni fenomeno ha un campo `stem` (frase della domanda): non va scritto nel codice dell'interfaccia.
- BREAKFAST CLUB (Italia): collettivo italiano scelto da Andrea (al posto di Viola Silvi, a sua volta subentrata a Kai Cenat). Specificare sempre "Italia" per distinguerlo dall'omonimo programma radiofonico statunitense. Formato domanda da rivedere con Andrea: l'idea è «Chi compone il Breakfast Club (Italia)?», con i tag corretti e i distrattori basati sui membri. Scrivere solo ciò di cui si è certi, marcare ogni dubbio (soprattutto la composizione attuale) come "DA VERIFICARE" e non inventare dettagli su persone reali.
- Le domande (`stem`) e tutti i testi sono scritti a mano per ogni fenomeno. La colonna «Formato domanda» della tabella è solo indicativa: **fa fede `docs/CONTENUTI.md`**, che prevale in caso di differenze.
- Macro-categorie: Slang (10), Creator (5), Meme e gesti (2), Moda e brand (3).
- Il "categoria migliore" del risultato finale si calcola sulla **percentuale** di tag corretti per categoria (le categorie hanno dimensioni diverse), non sul conteggio assoluto. Spareggio: ordine Slang, Creator, Meme e gesti, Moda e brand.
- Il brief originale prevedeva blocchi separati "COS'È?" e "PERCHÉ?" e una didascalia: sono superati. La schermata dopo la risposta mostra un solo blocco di commento, intitolato "COS'È E PERCHÉ?" (titolo proposto), e l'immagine senza didascalia.
- I tag si mostrano esattamente come scritti in `docs/CONTENUTI.md` (anche minuscoli e con grafia informale), senza normalizzarli.
- Per ogni fenomeno: 3 tag corretti + 4 tag errati plausibili e legati al tema (niente risposte assurde). Il dataset è fisso: lo shuffle cambia solo l'ordine delle domande e la posizione dei 7 tag, mai il contenuto.
- Tono: leggero, ironico, contemporaneo, mai da gioco per bambini. Campi per fenomeno: domanda, tag e un unico commento che spiega COS'È e PERCHÉ insieme (campo `spiegazione`). Nessuna didascalia sulle immagini e nessuna introduzione sotto la domanda: decisioni di Andrea (superano il brief originale).

## 2. Immagini

- Le carica Andrea (molto zoomate o oscurate). Cartella: `public/img/<slug>.webp`, formato 4:5 (circa 1080×1350), sotto i 200 KB.
- Nella schermata domanda l'immagine è zoomata e scurita via CSS; nella schermata risultato si "rivela" con un'animazione.
- Se un file manca, il sito deve funzionare lo stesso: card grafica di ripiego (gradiente + nome del fenomeno in tipografia grande). Nessuna immagine inventata, niente immagini hotlinkate da altri siti.
- I diritti su volti e foto restano una valutazione di Andrea.

## 3. Schermata finale

Ordine: 1) punteggio e percentuale, 2) classificazione, 3) suggerimenti, 4) suggerimenti in trend e in salita.

- Frase da riportare **identica, senza correggerla**: `Prima di dirti se celaffai dimmi chi vuoi essere?` (costante unica nel codice, mostrata solo dopo il calcolo del punteggio).
- Switch MASCHIO / FEMMINA: non cambia punteggio, domande, risposte, percentuale. Decide solo il termine finale.
- 41–60: BRO / SIS. 21–40: ZIO / ZIA. 0–20: BOOMER (soglie decise da Andrea il 30/09, sostituiscono 43/42 del brief; una sola frase ironica per fascia, vedi CONTENUTI.md) (indipendente dalla scelta, da usare in modo ironico e riferito solo alla conoscenza dei trend, non all'età).
- Non chiedere mai il genere all'inizio.

## 4. Suggerimenti (regole aggiornate rispetto al brief)

**Cosa si può suggerire:** slang, tormentoni, meme, **frasi meme** (es. "Dillo alla mamma, dillo all'avvocato…"), creator, brand, prodotti iconici, capi, gesti, qualsiasi altro fenomeno. Lunghezza massima 100 caratteri. Testo d'aiuto nel campo aggiornato per citare anche le frasi meme.

**Normalizzazione (chiave di dedup):** Unicode NFKD, minuscole, rimozione accenti, rimozione punteggiatura e apostrofi ("…", ",", "!", "'"), spazi multipli ridotti a uno, trim. "Labubu", "LABUBU", "labubu!", " labubu " sono lo stesso elemento. Il nome mostrato è la grafia del primo invio, pulita dagli spazi.

**Voto:** un voto per persona **per suggerimento** (cookie + hash anonimo dell'IP con sale, conservato 90 giorni). Rate limit per dispositivo sulle azioni di scrittura (es. max 20 all'ora).

**Due elenchi pubblici, stesso contatore:**
1. **SUGGERIMENTI IN TREND**: elementi con almeno 30 segnalazioni, ordinati dal più segnalato. Formato: nome + "🔥 XX segnalazioni". Non mostrare elementi sotto 30. Empty state, testo esatto: `Nessun termine suggerito ha ancora raggiunto la quota per diventare virale, droppa il tuo!`
2. **STANNO SALENDO** (nuovo): elementi con almeno `RISING_MIN` segnalazioni (default 5, variabile d'ambiente) e meno di 30, non nascosti, ordinati per segnalazioni, massimo 10. Ogni riga ha un pulsante tap ("🔥 Lo conosco!") che aggiunge 1 segnalazione (una per persona per elemento), con aggiornamento immediato dell'interfaccia e pulsante disattivato dopo il voto. Empty state breve e in tono. Il tap è disponibile anche sugli elementi in trend.
- Un elemento passa da "in salita" a "in trend" da solo al raggiungimento di 30.
- Un nuovo suggerimento non è pubblico finché non raggiunge `RISING_MIN`: un singolo troll non compare mai.

**Moderazione:** blacklist automatica di base (insulti, volgarità, termini discriminatori, in italiano e inglese, sul testo normalizzato, con sostituzioni comuni tipo numeri/simboli) che rifiuta l'invio. Pagina `/admin` protetta da password (`ADMIN_PASSWORD`, se assente la pagina è disattivata): tutti i suggerimenti (anche sotto soglia), conteggi, pulsante nascondi/ripristina (un elemento nascosto esce da entrambi gli elenchi pubblici), export CSV. Andrea verifica a mano da lì.

**Archiviazione:** Upstash Redis (piano gratuito, dal Marketplace di Vercel), client `@upstash/redis`. Supportare sia `UPSTASH_REDIS_REST_URL/TOKEN` sia `KV_REST_API_URL/TOKEN`. Cache di 60 secondi sulla lettura degli elenchi per restare nei limiti gratuiti. Chiavi suggerite: hash per elemento (display, count, hidden, firstSeen), sorted set per la classifica degli elementi non nascosti, chiavi voto con TTL 90 giorni.

**Riga privacy (sotto il campo di invio):**
> Il suggerimento che invii viene salvato in forma anonima. Per evitare voti multipli dallo stesso dispositivo conserviamo un codice anonimo, non riconducibile a te, per 90 giorni. Non raccogliamo nome, email o altri dati personali e non usiamo cookie di profilazione.

Pagina `/privacy` con contatto del titolare (segnaposto finché Andrea non lo fornisce). Il testo va fatto verificare a chi segue la parte legale.

## 5. Tecnica

Next.js (App Router) + TypeScript + Tailwind, su Vercel, repo `osky73/oh-ma-celaffai`, branch `main`. Interfaccia mobile-first, card arrotondate, chip grandi (almeno 44 px), animazioni leggere con rispetto di `prefers-reduced-motion`, `aria-pressed` sui chip. Shuffle Fisher–Yates con `crypto.getRandomValues`. Test automatici (Vitest) su shuffle, punteggio, classificazione e normalizzazione.
