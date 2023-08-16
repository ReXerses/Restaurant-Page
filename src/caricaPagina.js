const caricaPagina = (() => {
  const mainContainer = document.querySelector("#content");

  const header = document.createElement("header");
  header.innerHTML= `
    <style>
      body {
        margin: 0px;
      }
      /* Stili per la navbar */
      nav {
        display: flex;
        align-items: center;
        justify-content: space-around;
        background-color: rgb(0 161 255 / 73%);
        flex-flow: row wrap;
        padding: 10px;
        filter: drop-shadow(0px 2vh 5vh #000000);
      }

      nav > img {
        filter: invert(1);
        border: 4px solid black;
        padding: 10px;
        border-radius: 32px;
      }
    

      ul.links {
        padding: 0px;
        list-style: none;
        display: flex;
        align-items: center;
        column-gap: 2rem;
        flex-flow: row wrap;
        justify-content: center;
      }

      li.tab {
        font-size: 1.9rem;
        padding: 5px;
        cursor : pointer;
      }

      /* Stili per i button */

      .social-container {
        column-gap: 16px;
        display: flex;
      }

      .social-container button {
        width: 30px;
        height: 30px;
        margin: 0 5px;
        background-color: #ccc;
        border: none;
        border-radius: 16px;
        cursor: pointer;
        margin:10px;
      }

      #IG {
        background-image:url(/home/rexerses/repos/Restaurant-Page/src/media/instagram.png);
        background-size: 100% 100%;
      }
      #FB {
        background-image:url(/home/rexerses/repos/Restaurant-Page/src/media/facebook.png);
        background-size: 100% 100%;
      }
      #TIK {
        background-image:url(/home/rexerses/repos/Restaurant-Page/src/media/tiktok.png);
        background-size: 100% 100%;
      }
      #YT {
        background-image:url(/home/rexerses/repos/Restaurant-Page/src/media/youtube.png);
        background-size: 100% 100%;
      }
    </style>
    <nav>
      <img src="/home/rexerses/repos/Restaurant-Page/src/media/pizza.png" alt="Logo" style="width: 75px; height: 70px;">
      <ul class="links">
        <li data-tab-target="#home"     id='home' class="tab">Home</li>
        <li data-tab-target="#menu"     id='menu' class="tab">Menu</li>
        <li data-tab-target="#origini"  id='storia' class="tab">Origini</li>
        <li data-tab-target="#contatti" id='contatti' class="tab">Contatti</li>
      </ul>
      <div class="social-container">
        <button id="IG">
            <a href="https://www.youtube.com/watch?v=y6120QOlsfU" target="_blank">&nbsp&nbsp&nbsp</a>
        </button>
        <button id="FB"></button>
        <button id="TIK"></button>
        <button id="YT">
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">&nbsp&nbsp&nbsp</a>
        </button>
      </div>
    </nav>
  `;
  header.style.position = 'sticky';
  header.style.top = '0';
  header.style.zIndex = '1';

  mainContainer.appendChild(header);
})();

