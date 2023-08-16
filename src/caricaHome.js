const caricaHome = (() => {
    //container
    const contentContainer = document.querySelector("#content");
  
    const home = document.createElement("div");
    home.classList.add("tab-content")
    home.innerHTML = `<style>
    @import url('https://fonts.googleapis.com/css2?family=Gentium+Book+Plus:ital@1&display=swap');

    body {
        margin: 0px;
        font-family: 'Gentium Book Plus', serif;
    }

    .home {
        display: flex;
        min-height: 100vh;
        max-height: 100%;
        flex-direction: column;
        justify-content: space-evenly;
    }

    .primaParte , .secondaParte {
        display: flex;
        flex: 1;
    }

    .primaParte {
        background-image: url(/home/rexerses/repos/Restaurant-Page/src/media/primaParte.jpg);
        background-size: cover;
        background-repeat: no-repeat;
        background-position: 50% 50%;
    }

    .secondaParte {
        background-image: url(/home/rexerses/repos/Restaurant-Page/src/media/secondaParte.jpg);
        background-size: cover;
        background-repeat: no-repeat;
        background-position: 50% 30%;
        justify-content: flex-end;
    }

    .modale , .modale2 {
        background-color: rgb(0 161 255 / 28%);
        display: flex;
        flex-direction: column;
        padding: 2rem;
        min-width: 25vw;
        max-width: 100%;
        color: white;
    }

    .localita {
        font-size: 2rem;
        font-weight: bold;
    }

    .nomePizzeria {
        font-weight: bolder;
        font-size: 3rem;
    }

    .descrizioneLocalita {
        font-size: 1.5rem;
    }

    .scopri {
        width: 10rem;
        height: 3rem;
        align-self: center;
        border: 1px solid white;
        background: none;
        color: white;
        font-size: 1.4rem;
        border-radius: 8px;
        cursor: pointer;
    }

    .scopri:hover {
        border: 1px solid black;
        color: black;
        background-color: rgba(255, 255, 255, 0.616);
    }
  </style>
  <div class="home">
    <div class="primaParte">
        <div class="modale">
            <p class="localita">Caserta</p>
            <p class="nomePizzeria">La Reggia</p>
            <p class="descrizioneLocalita">"A pochi passi dalla famosa Reggia di Caserta"</p>
            <button class="scopri">scopri di più</button>
        </div>
    </div>
    <div class="secondaParte">
        <div class="modale2">
            <p class="localita">Napoli</p>
            <p class="nomePizzeria">La Locanda del marinaio</p>
            <p class="descrizioneLocalita">"Sul lungo mare di Napoli"</p>
            <button class="scopri">scopri di più</button>
        </div>
    </div>
</div>`;
  
    contentContainer.appendChild(home);
  });
  
  export { caricaHome };
