const caricaStoria = (() => {
    //container
    const contentContainer = document.querySelector("#content");
  
    const storia = document.createElement("div");
    storia.innerHTML = `<style>
    body {
      margin: 0px;
    }
    
    .storia {
        background-image: url(../src/media/background.jpg);
        background-size: cover;
        background-repeat: no-repeat;
        background-position: 50% 30%;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;    
    }
    
    .racconto {
        background-image: url(../src/media/10.jpg);
        padding: 16px;
        border: 2px solid black;
        font-size: 1.4rem;
        text-align: center;
        width: clamp(20rem, 50vw, 40rem);
        max-width: 100%;
        border-radius: 32px;
        filter:drop-shadow(0px 2vh 5vh #000000);
    }

    .racconto > p {
      border-bottom: 4px solid #a11313;
      border-radius: 16px;
    }
    
  </style>
  <div class="storia">
        <div class="racconto">
            <p>ORIGINI DELLA FAMIGLIA CUOZZO</p>
            <p>Siamo una famiglia di pizzaioli con una lunga tradizione che inizia nel lontano 1921. <br>
                La nostra storia ha inizio con il nostro bisnonno, un abile e appassionato pizzaiolo che ha aperto la prima pizzeria nel cuore di una piccola città.<br> Da allora, la passione per la pizza e l'arte di crearla è passata di generazione in generazione. <br>
                La nostra pizzeria è diventata un punto di riferimento per gli amanti della vera pizza italiana.<br> Utilizziamo solo ingredienti freschi e di alta qualità, seguendo fedelmente le ricette tradizionali tramandate dalla nostra famiglia. <br> L'impasto viene preparato con cura e pazienza, lasciato lievitare lentamente per ottenere una base morbida e saporita. <br>
                Il segreto del nostro successo è l'amore e la dedizione che mettiamo in ogni pizza che prepariamo.<br> Ogni membro della famiglia ha imparato l'arte della pizza fin da piccolo, e tutti condividiamo la stessa passione per la cucina. <br>
                Oltre alla classica pizza Margherita e alle altre specialità italiane, offriamo anche creazioni uniche e innovative, che riflettono la nostra creatività e desiderio di sperimentare nuovi gusti.<br>
                Siamo orgogliosi della nostra eredità familiare e della nostra lunga storia nella preparazione delle migliori pizze. <br>Ogni giorno ci impegniamo per continuare a portare avanti la tradizione della nostra famiglia, offrendo ai nostri clienti esperienze culinarie indimenticabili!
            </p>
        </div>
    </div>
  `;
  
    contentContainer.appendChild(storia);
  });
  
  export { caricaStoria };