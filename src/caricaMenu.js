const caricaMenu = (() => {
    const mainContainer = document.querySelector("#content");
  
    const menu = document.createElement("header");
    menu.innerHTML= `
      <style>
            body {
                margin: 0px;
                overflow-x: hidden;
            }
            
            .menu {
                background-image: url(../src/media/background.jpg);
                background-size: cover;
                background-repeat: no-repeat;
                background-position: 50% 30%;
                display: flex;
                flex-direction: column;
                align-items: center;
                padding: calc(1.3rem + 1.3vw);
            }
            
            h2 {
                border-top: 10px dotted white;
                padding-top: 21px;
            }
            
            .card > img {
                min-height: 130px;
                max-height: 20%;
                border-radius: 16px;
                width: clamp(110px, 15vw, 150px);
            }
            
            .testa {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                border-radius: 16px;
                border: 10px solid rgb(0 0 0 / 28%);
                box-shadow: 5px 5px 3px black;
                background: rgb(0 161 255 / 28%);
                padding: 1rem;
                text-align: center;
                color: whitesmoke;
            }
            
            .content {
                min-height: 100vh;
                width: 100%;
                max-height: 100%;
                display: flex;
                flex-wrap: wrap;
                justify-content: start;
                column-gap: 2rem;
                padding-top: 5rem;
            }
            
            .card {
                gap: 15px;
                flex-basis: 50rem;
                margin-bottom: 5rem;
                display: flex;
                flex-direction: row;
                align-items: center;
                border-radius: 16px;
                border-left: 10px solid rgb(0 0 0 / 28%);
                box-shadow: 5px 5px 3px;
                background: rgb(0 161 255 / 28%);
                padding: 1rem;
            }
            
            .nome {
                font-weight: bolder;
                border-bottom: 2px dotted white;
            }
            
            .ingredienti {
                font-weight: bold;
            }
            
            .descrizione {
                text-align: center;
                flex: 1;
                font-size: clamp(16px, 4vw, 24px);
                color: white;
                text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
            }    
      </style>

        <div class="menu">
        <div class="testa">
            <h1>Menù</h1>
            <h2>Alcune delle nostre specialità</h2>
        </div>
        
        <div class="content">
            
                <div class="card">
                    <img src="../src/media/pizza1.jpg" alt="Pizza: Profumo di Bosco">
                    <div class="descrizione">
                        <p class="nome">PROFUMO DI BOSCO</p>
                        <p class="ingredienti">Ingredienti:</p>
                        <span>Ricotta di bufula, patate, porcini,<br> lardo di colonnata.</span>
                    </div>
                </div>

                <div class="card">
                    <img src="../src/media/pizza2.jpg" alt="Pizza: Ortona">
                    <div class="descrizione">
                        <p class="nome">ORTONA</p>
                        <p class="ingredienti">Ingredienti:</p>
                        <span>Provola, fior di latte, peperoni, alici,<br> cipolle caramellate, salsiccia.</span>
                    </div>
                </div>

                <div class="card">
                    <img src="../src/media/pizza3.jpg" alt="Pizza: Margherita">
                    <div class="descrizione">
                        <p class="nome">MARGHERITA</p>
                        <p class="ingredienti">Ingredienti:</p>
                        <span>Fior di latte DI AGEROLA, pomodori San Marzano, olio EVO.</span>
                    </div>
                </div>

                <div class="card">
                    <img src="../src/media/pizza4.jpg" alt="Pizza: Marinara">
                    <div class="descrizione">
                        <p class="nome">MARINARA</p>
                        <p class="ingredienti">Ingredienti:</p>
                        <span>Pomodori San Marzano, olive, capperi, alici, origano.</span>
                    </div>
                </div>

                <div class="card">
                    <img src="../src/media/pizza5.jpg" alt="Pizza: salsiccia e friarielli">
                    <div class="descrizione">
                        <p class="nome">SALSICCIA E FRIARIELLI</p>
                        <p class="ingredienti">Ingredienti:</p>
                        <span>Fior di latte DI AGEROLA, Friarielli, salsiccia.</span>
                    </div>
                </div>

                <div class="card">
                    <img src="/../src/media/pizza6.jpg" alt="Pizza: Campestre">
                    <div class="descrizione">
                        <p class="nome">CAMPESTRE</p>
                        <p class="ingredienti">Ingredienti:</p>
                        <span>Fiori di zucca, fior di latte, cioffi di ricotta,<br> alici, scaglie di mandorla.</span>
                    </div>
                </div>
            
            </div>
        </div>
    `;
  
    mainContainer.appendChild(menu);
  });

  export { caricaMenu };