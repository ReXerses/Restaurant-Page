(()=>{var n={839:()=>{(()=>{const n=document.querySelector("#content"),e=document.createElement("header");e.innerHTML='\n    <style>\n      body {\n        margin: 0px;\n      }\n      /* Stili per la navbar */\n      nav {\n        display: flex;\n        align-items: center;\n        justify-content: space-around;\n        background-color: rgb(0 161 255 / 73%);\n        flex-flow: row wrap;\n        padding: 10px;\n        filter: drop-shadow(0px 2vh 5vh #000000);\n      }\n\n      nav > img {\n        filter: invert(1);\n        border: 4px solid black;\n        padding: 10px;\n        border-radius: 32px;\n      }\n    \n\n      ul.links {\n        padding: 0px;\n        list-style: none;\n        display: flex;\n        align-items: center;\n        column-gap: 2rem;\n        flex-flow: row wrap;\n        justify-content: center;\n      }\n\n      li.tab {\n        font-size: 1.9rem;\n        padding: 5px;\n        cursor : pointer;\n      }\n\n      /* Stili per i button */\n\n      .social-container {\n        column-gap: 16px;\n        display: flex;\n      }\n\n      .social-container button {\n        width: 30px;\n        height: 30px;\n        margin: 0 5px;\n        background-color: #ccc;\n        border: none;\n        border-radius: 16px;\n        cursor: pointer;\n        margin:10px;\n      }\n\n      #IG {\n        background-image:url(./media/instagram.png);\n        background-size: 100% 100%;\n      }\n      #FB {\n        background-image:url(./media/facebook.png);\n        background-size: 100% 100%;\n      }\n      #TIK {\n        background-image:url(./media/tiktok.png);\n        background-size: 100% 100%;\n      }\n      #YT {\n        background-image:url(./media/youtube.png);\n        background-size: 100% 100%;\n      }\n    </style>\n    <nav>\n      <img src="/home/rexerses/repos/Restaurant-Page/src/media/pizza.png" alt="Logo" style="width: 75px; height: 70px;">\n      <ul class="links">\n        <li data-tab-target="#home"     id=\'home\' class="tab">Home</li>\n        <li data-tab-target="#menu"     id=\'menu\' class="tab">Menu</li>\n        <li data-tab-target="#origini"  id=\'storia\' class="tab">Origini</li>\n        <li data-tab-target="#contatti" id=\'contatti\' class="tab">Contatti</li>\n      </ul>\n      <div class="social-container">\n        <button id="IG">\n            <a href="https://www.youtube.com/watch?v=y6120QOlsfU" target="_blank">&nbsp&nbsp&nbsp</a>\n        </button>\n        <button id="FB"></button>\n        <button id="TIK"></button>\n        <button id="YT">\n            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">&nbsp&nbsp&nbsp</a>\n        </button>\n      </div>\n    </nav>\n  ',e.style.position="sticky",e.style.top="0",e.style.zIndex="1",n.appendChild(e)})()}},e={};function i(a){var o=e[a];if(void 0!==o)return o.exports;var r=e[a]={exports:{}};return n[a](r,r.exports,i),r.exports}(()=>{"use strict";i(839);const n=()=>{const n=document.querySelector("#content"),e=document.createElement("div");e.classList.add("tab-content"),e.innerHTML='<style>\n    @import url(\'https://fonts.googleapis.com/css2?family=Gentium+Book+Plus:ital@1&display=swap\');\n\n    body {\n        margin: 0px;\n        font-family: \'Gentium Book Plus\', serif;\n    }\n\n    .home {\n        display: flex;\n        min-height: 100vh;\n        max-height: 100%;\n        flex-direction: column;\n        justify-content: space-evenly;\n    }\n\n    .primaParte , .secondaParte {\n        display: flex;\n        flex: 1;\n    }\n\n    .primaParte {\n        background-image: url(./media/primaParte.jpg);\n        background-size: cover;\n        background-repeat: no-repeat;\n        background-position: 50% 50%;\n    }\n\n    .secondaParte {\n        background-image: url(./media/secondaParte.jpg);\n        background-size: cover;\n        background-repeat: no-repeat;\n        background-position: 50% 30%;\n        justify-content: flex-end;\n    }\n\n    .modale , .modale2 {\n        background-color: rgb(0 161 255 / 28%);\n        display: flex;\n        flex-direction: column;\n        padding: 2rem;\n        min-width: 25vw;\n        max-width: 100%;\n        color: white;\n    }\n\n    .localita {\n        font-size: 2rem;\n        font-weight: bold;\n    }\n\n    .nomePizzeria {\n        font-weight: bolder;\n        font-size: 3rem;\n    }\n\n    .descrizioneLocalita {\n        font-size: 1.5rem;\n    }\n\n    .scopri {\n        width: 10rem;\n        height: 3rem;\n        align-self: center;\n        border: 1px solid white;\n        background: none;\n        color: white;\n        font-size: 1.4rem;\n        border-radius: 8px;\n        cursor: pointer;\n    }\n\n    .scopri:hover {\n        border: 1px solid black;\n        color: black;\n        background-color: rgba(255, 255, 255, 0.616);\n    }\n  </style>\n  <div class="home">\n    <div class="primaParte">\n        <div class="modale">\n            <p class="localita">Caserta</p>\n            <p class="nomePizzeria">La Reggia</p>\n            <p class="descrizioneLocalita">"A pochi passi dalla famosa Reggia di Caserta"</p>\n            <button class="scopri">scopri di più</button>\n        </div>\n    </div>\n    <div class="secondaParte">\n        <div class="modale2">\n            <p class="localita">Napoli</p>\n            <p class="nomePizzeria">La Locanda del marinaio</p>\n            <p class="descrizioneLocalita">"Sul lungo mare di Napoli"</p>\n            <button class="scopri">scopri di più</button>\n        </div>\n    </div>\n</div>',n.appendChild(e)};function e(){let n=[document.querySelector(".storia"),document.querySelector(".home"),document.querySelector(".menu"),document.querySelector(".contatti")];for(let e=0;e<4;e++)if(n[e])return n[e]}const a=document.querySelector("#home"),o=document.querySelector("#storia"),r=document.querySelector("#menu"),t=document.querySelector("#contatti");function d(){document.querySelectorAll(".tab").forEach((n=>{n.style.borderBottom=""}))}n(),a.addEventListener("click",(()=>{d(),e().remove(),a.style.borderBottom="3px solid black",n()})),o.addEventListener("click",(()=>{d(),e().remove(),o.style.borderBottom="3px solid black",(()=>{const n=document.querySelector("#content"),e=document.createElement("div");e.innerHTML="<style>\n    body {\n      margin: 0px;\n    }\n    \n    .storia {\n        background-image: url(./media/background.jpg);\n        background-size: cover;\n        background-repeat: no-repeat;\n        background-position: 50% 30%;\n        height: 100vh;\n        display: flex;\n        justify-content: center;\n        align-items: center;    \n    }\n    \n    .racconto {\n        background-image: url(./media/10.jpg);\n        padding: 16px;\n        border: 2px solid black;\n        font-size: 1.4rem;\n        text-align: center;\n        width: clamp(20rem, 50vw, 40rem);\n        max-width: 100%;\n        border-radius: 32px;\n        filter:drop-shadow(0px 2vh 5vh #000000);\n    }\n\n    .racconto > p {\n      border-bottom: 4px solid #a11313;\n      border-radius: 16px;\n    }\n    \n  </style>\n  <div class=\"storia\">\n        <div class=\"racconto\">\n            <p>ORIGINI DELLA FAMIGLIA CUOZZO</p>\n            <p>Siamo una famiglia di pizzaioli con una lunga tradizione che inizia nel lontano 1921. <br>\n                La nostra storia ha inizio con il nostro bisnonno, un abile e appassionato pizzaiolo che ha aperto la prima pizzeria nel cuore di una piccola città.<br> Da allora, la passione per la pizza e l'arte di crearla è passata di generazione in generazione. <br>\n                La nostra pizzeria è diventata un punto di riferimento per gli amanti della vera pizza italiana.<br> Utilizziamo solo ingredienti freschi e di alta qualità, seguendo fedelmente le ricette tradizionali tramandate dalla nostra famiglia. <br> L'impasto viene preparato con cura e pazienza, lasciato lievitare lentamente per ottenere una base morbida e saporita. <br>\n                Il segreto del nostro successo è l'amore e la dedizione che mettiamo in ogni pizza che prepariamo.<br> Ogni membro della famiglia ha imparato l'arte della pizza fin da piccolo, e tutti condividiamo la stessa passione per la cucina. <br>\n                Oltre alla classica pizza Margherita e alle altre specialità italiane, offriamo anche creazioni uniche e innovative, che riflettono la nostra creatività e desiderio di sperimentare nuovi gusti.<br>\n                Siamo orgogliosi della nostra eredità familiare e della nostra lunga storia nella preparazione delle migliori pizze. <br>Ogni giorno ci impegniamo per continuare a portare avanti la tradizione della nostra famiglia, offrendo ai nostri clienti esperienze culinarie indimenticabili!\n            </p>\n        </div>\n    </div>\n  ",n.appendChild(e)})()})),r.addEventListener("click",(()=>{d(),e().remove(),r.style.borderBottom="3px solid black",(()=>{const n=document.querySelector("#content"),e=document.createElement("header");e.innerHTML='\n      <style>\n            body {\n                margin: 0px;\n                overflow-x: hidden;\n            }\n            \n            .menu {\n                background-image: url(./media/background.jpg);\n                background-size: cover;\n                background-repeat: no-repeat;\n                background-position: 50% 30%;\n                display: flex;\n                flex-direction: column;\n                align-items: center;\n                padding: calc(1.3rem + 1.3vw);\n            }\n            \n            h2 {\n                border-top: 10px dotted white;\n                padding-top: 21px;\n            }\n            \n            .card > img {\n                min-height: 130px;\n                max-height: 20%;\n                border-radius: 16px;\n                width: clamp(110px, 15vw, 150px);\n            }\n            \n            .testa {\n                display: flex;\n                flex-direction: column;\n                justify-content: center;\n                align-items: center;\n                border-radius: 16px;\n                border: 10px solid rgb(0 0 0 / 28%);\n                box-shadow: 5px 5px 3px black;\n                background: rgb(0 161 255 / 28%);\n                padding: 1rem;\n                text-align: center;\n                color: whitesmoke;\n            }\n            \n            .content {\n                min-height: 100vh;\n                width: 100%;\n                max-height: 100%;\n                display: flex;\n                flex-wrap: wrap;\n                justify-content: start;\n                column-gap: 2rem;\n                padding-top: 5rem;\n            }\n            \n            .card {\n                gap: 15px;\n                flex-basis: 50rem;\n                margin-bottom: 5rem;\n                display: flex;\n                flex-direction: row;\n                align-items: center;\n                border-radius: 16px;\n                border-left: 10px solid rgb(0 0 0 / 28%);\n                box-shadow: 5px 5px 3px;\n                background: rgb(0 161 255 / 28%);\n                padding: 1rem;\n            }\n            \n            .nome {\n                font-weight: bolder;\n                border-bottom: 2px dotted white;\n            }\n            \n            .ingredienti {\n                font-weight: bold;\n            }\n            \n            .descrizione {\n                text-align: center;\n                flex: 1;\n                font-size: clamp(16px, 4vw, 24px);\n                color: white;\n                text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);\n            }    \n      </style>\n\n        <div class="menu">\n        <div class="testa">\n            <h1>Menù</h1>\n            <h2>Alcune delle nostre specialità</h2>\n        </div>\n        \n        <div class="content">\n            \n                <div class="card">\n                    <img src="./media/pizza1.jpg" alt="Pizza: Profumo di Bosco">\n                    <div class="descrizione">\n                        <p class="nome">PROFUMO DI BOSCO</p>\n                        <p class="ingredienti">Ingredienti:</p>\n                        <span>Ricotta di bufula, patate, porcini,<br> lardo di colonnata.</span>\n                    </div>\n                </div>\n\n                <div class="card">\n                    <img src="./media/pizza2.jpg" alt="Pizza: Ortona">\n                    <div class="descrizione">\n                        <p class="nome">ORTONA</p>\n                        <p class="ingredienti">Ingredienti:</p>\n                        <span>Provola, fior di latte, peperoni, alici,<br> cipolle caramellate, salsiccia.</span>\n                    </div>\n                </div>\n\n                <div class="card">\n                    <img src="./media/pizza3.jpg" alt="Pizza: Margherita">\n                    <div class="descrizione">\n                        <p class="nome">MARGHERITA</p>\n                        <p class="ingredienti">Ingredienti:</p>\n                        <span>Fior di latte DI AGEROLA, pomodori San Marzano, olio EVO.</span>\n                    </div>\n                </div>\n\n                <div class="card">\n                    <img src="./media/pizza4.jpg" alt="Pizza: Marinara">\n                    <div class="descrizione">\n                        <p class="nome">MARINARA</p>\n                        <p class="ingredienti">Ingredienti:</p>\n                        <span>Pomodori San Marzano, olive, capperi, alici, origano.</span>\n                    </div>\n                </div>\n\n                <div class="card">\n                    <img src="./media/pizza5.jpg" alt="Pizza: salsiccia e friarielli">\n                    <div class="descrizione">\n                        <p class="nome">SALSICCIA E FRIARIELLI</p>\n                        <p class="ingredienti">Ingredienti:</p>\n                        <span>Fior di latte DI AGEROLA, Friarielli, salsiccia.</span>\n                    </div>\n                </div>\n\n                <div class="card">\n                    <img src="./media/pizza6.jpg" alt="Pizza: Campestre">\n                    <div class="descrizione">\n                        <p class="nome">CAMPESTRE</p>\n                        <p class="ingredienti">Ingredienti:</p>\n                        <span>Fiori di zucca, fior di latte, cioffi di ricotta,<br> alici, scaglie di mandorla.</span>\n                    </div>\n                </div>\n            \n            </div>\n        </div>\n    ',n.appendChild(e)})()})),t.addEventListener("click",(()=>{d(),e().remove(),t.style.borderBottom="3px solid black",(()=>{const n=document.querySelector("#content"),e=document.createElement("div");e.innerHTML='\n    <style>\n        body {\n            margin: 0px;\n        }\n        \n        .contatti {\n            display: flex;\n            flex-direction: column;\n            max-height: 100%;\n            min-height: 100vh;\n            justify-content: space-around;\n            background-image: url(./media/Reggia.jpg);\n            background-size: cover;\n            background-repeat: no-repeat;\n            background-position: 50% 50%;\n        }\n        \n        .finestraCentrale {\n            display: flex;\n            flex-wrap: wrap;\n            background: rgb(0 161 255 / 28%);\n            padding: 3.6rem;\n            justify-content: space-around;\n            align-items: center;\n            gap: 10rem;\n            backdrop-filter: blur(10px);\n            color: white;\n            border-radius: 16px;\n        }\n        \n        .primoN , .secondoN {\n            display: flex;\n            flex-direction: column;\n            font-size: clamp(18px, 4vw, 26px);\n        } \n        \n        h2 {\n            margin-top: 1.5rem;\n            margin-bottom: 1.5rem;\n        }\n    </style>\n\n    <div class="contatti">\n        <div class="finestraCentrale">\n            <div class="primoN">\n                <h2>Pizzeria:</h2>\n                <span>La Reggia</span>\n                <h2>Indirizzo:</h2>\n                <span>Via Roma N. 23</span>\n                <h2>Numero di Telefono:</h2>\n                <span>081/64719555</span>\n                <h2>Orari apertura:</h2>\n                <span>12 - 16 , 19 - 00</span>\n            </div>\n            <div class="secondoN">\n                <h2>Pizzeria/Ristorante:</h2>\n                <span>La Locanda del marinaio</span>\n                <h2>Indirizzo:</h2>\n                <span>Via Partenope N. 54</span>\n                <h2>Numero di Telefono:</h2>\n                <span>0823/44778865</span>\n                <h2>Orari apertura:</h2>\n                <span>12 - 16 , 20 - 01</span>\n            </div>\n        </div>\n    </div>\n  ',n.appendChild(e)})()}))})()})();