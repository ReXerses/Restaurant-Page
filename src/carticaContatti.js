const caricaContatti = (() => {
    //container
    const contentContainer = document.querySelector("#content");
  
    const contatti = document.createElement("div");

    contatti.innerHTML = `
    <style>
        body {
            margin: 0px;
        }
        
        .contatti {
            display: flex;
            flex-direction: column;
            max-height: 100%;
            min-height: 100vh;
            justify-content: space-around;
            background-image: url(/home/rexerses/repos/Restaurant-Page/src/media/Reggia.jpg);
            background-size: cover;
            background-repeat: no-repeat;
            background-position: 50% 50%;
        }
        
        .finestraCentrale {
            display: flex;
            flex-wrap: wrap;
            background: rgb(0 161 255 / 28%);
            padding: 3.6rem;
            justify-content: space-around;
            align-items: center;
            gap: 10rem;
            backdrop-filter: blur(10px);
            color: white;
            border-radius: 16px;
        }
        
        .primoN , .secondoN {
            display: flex;
            flex-direction: column;
            font-size: clamp(18px, 4vw, 26px);
        } 
        
        h2 {
            margin-top: 1.5rem;
            margin-bottom: 1.5rem;
        }
    </style>

    <div class="contatti">
        <div class="finestraCentrale">
            <div class="primoN">
                <h2>Pizzeria:</h2>
                <span>La Reggia</span>
                <h2>Indirizzo:</h2>
                <span>Via Roma N. 23</span>
                <h2>Numero di Telefono:</h2>
                <span>081/64719555</span>
                <h2>Orari apertura:</h2>
                <span>12 - 16 , 19 - 00</span>
            </div>
            <div class="secondoN">
                <h2>Pizzeria/Ristorante:</h2>
                <span>La Locanda del marinaio</span>
                <h2>Indirizzo:</h2>
                <span>Via Partenope N. 54</span>
                <h2>Numero di Telefono:</h2>
                <span>0823/44778865</span>
                <h2>Orari apertura:</h2>
                <span>12 - 16 , 20 - 01</span>
            </div>
        </div>
    </div>
  `;
  
    contentContainer.appendChild(contatti);
  });
  
  export { caricaContatti };