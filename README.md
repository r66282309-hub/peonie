# Peonie Sardegna Survey PWA

Applicazione web progressiva (PWA) per la raccolta georeferenziata di segnalazioni relative alla presenza di peonie selvatiche in Sardegna.

Il progetto nasce con l’obiettivo di fornire uno strumento semplice, leggero e utilizzabile anche da dispositivi mobili per acquisire osservazioni di campo corredate da posizione geografica, fotografie e informazioni descrittive utili al monitoraggio della distribuzione delle peonie spontanee.

## Funzionalità principali

- Scheda di rilevamento compilabile da browser.
- Acquisizione della posizione geografica del punto osservato.
- Caricamento di fotografie a supporto della segnalazione.
- Ridimensionamento automatico delle immagini prima dell’invio.
- Funzionamento come Progressive Web App installabile su smartphone.
- Cache locale per migliorare l’utilizzo in condizioni di connettività variabile.
- Mappa di consultazione delle segnalazioni.
- Esportazione dei dati in formati geografici, dove prevista.
- Guida pratica per il corretto rilevamento fotografico e descrittivo.

## Scopo del progetto

L’applicazione è pensata per supportare attività di monitoraggio naturalistico e raccolta dati sul territorio, facilitando l’invio di osservazioni georeferenziate da parte di rilevatori, tecnici, ricercatori o cittadini coinvolti in campagne di segnalazione.

I dati raccolti possono essere utilizzati per finalità scientifiche, conoscitive, gestionali e di conservazione, con particolare riferimento alla distribuzione e alla documentazione delle popolazioni spontanee di peonia in Sardegna.

## Struttura del repository

```text
peonie/
├── index.html              # Pagina principale dell'applicazione
├── survey.htm              # Scheda di rilevamento
├── maps.html               # Pagina mappa / consultazione dati
├── guida.html              # Guida pratica al rilevamento
├── manifest.json           # Manifest PWA
├── service-worker.js       # Service worker per cache e funzionalità PWA
├── icons/                  # Icone dell'applicazione
├── img/                    # Immagini e materiali grafici
└── README.md               # Documentazione del progetto
