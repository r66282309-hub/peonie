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
- Mappa di consultazione delle segnalazioni per utenti autorizzati.
- Esportazione dei dati in formati geografici, dove prevista.
- Guida pratica per il corretto rilevamento fotografico e descrittivo.
- Form per segnalazioni pregresse non raccolte con il protocollo di campo.

## Scopo del progetto

L’applicazione è pensata per supportare attività di monitoraggio naturalistico e raccolta dati sul territorio, facilitando l’invio di osservazioni georeferenziate da parte di rilevatori, tecnici, ricercatori o cittadini coinvolti in campagne di segnalazione.

I dati raccolti possono essere utilizzati per finalità scientifiche, conoscitive, gestionali e di conservazione, con particolare riferimento alla distribuzione e alla documentazione delle popolazioni spontanee di peonia in Sardegna.

## Enti e supporto

Il portale è sviluppato a supporto delle attività di censimento e monitoraggio della peonia selvatica in Sardegna, nell’ambito del progetto [![Post Facebook](images/facebook-post.jpg)](https://www.facebook.com/AgrisSardegna/posts/pfbid0PZSvQs8z4UoC38FLAgy5rJCarFfkK3vscrYQDFp2qAAg1XVDJgv2KXAXQKrgEZdtl)

Il portale include i loghi della **Regione Autonoma della Sardegna** e di **AGRIS Sardegna Agricoltura** in relazione al contesto istituzionale, al supporto o alla fornitura del servizio nell’ambito delle attività di censimento e monitoraggio della peonia selvatica in Sardegna.

I loghi sono inseriti nelle pagine principali dell’applicazione con funzione identificativa e istituzionale.

## Licenza, riuso e materiali istituzionali

Il codice sorgente e i materiali presenti in questo repository sono pubblicati esclusivamente a fini di documentazione tecnica, consultazione e verifica.

Salvo diversa autorizzazione scritta dell’autore, non è consentito copiare, riutilizzare, modificare, distribuire o impiegare il progetto, in tutto o in parte, per altri servizi, applicazioni, portali o iniziative.

La pubblicazione del repository non costituisce cessione dei diritti sul codice, sui contenuti o sulla struttura del progetto.

I loghi, i marchi, le denominazioni e gli elementi istituzionali eventualmente presenti nel portale appartengono ai rispettivi titolari. Tali elementi sono utilizzati esclusivamente nel contesto del portale e non sono concessi in licenza con il codice del repository.

Qualsiasi riuso dei loghi, dei marchi o degli elementi grafici istituzionali deve essere preventivamente autorizzato dai rispettivi enti titolari.

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
├── img/                    # Immagini, esempi fotografici e loghi istituzionali
└── README.md               # Documentazione del progetto


