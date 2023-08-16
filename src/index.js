import { caricaPagina } from "./caricaPagina"
import { caricaHome } from "./caricaHome"
import { caricaStoria } from "./caricaStoria";
import { caricaMenu } from "./caricaMenu";
import { caricaContatti } from "./carticaContatti"

function pagAttuale () {
    const storia = document.querySelector(".storia");
    const home = document.querySelector(".home");
    const menu = document.querySelector('.menu');
    const contatti = document.querySelector(".contatti");

    let arr = [storia, home, menu, contatti];
    for (let i=0; i < 4; i++) {
        if (arr[i]) {
            return arr[i];
        }
    }
    return;
}

const homeLink = document.querySelector('#home');
const storiaLink = document.querySelector('#storia');
const menuLink = document.querySelector('#menu');
const contattiLink = document.querySelector('#contatti');

function rimuoviBordoInferiore() {
    const tab = document.querySelectorAll('.tab');
    tab.forEach(element => {
        element.style.borderBottom = '';
    });
}

caricaHome();

homeLink.addEventListener('click', () => {
    rimuoviBordoInferiore();
    pagAttuale().remove();
    homeLink.style.borderBottom = '3px solid black';
    caricaHome();
});

storiaLink.addEventListener('click', () => {
    rimuoviBordoInferiore();
    pagAttuale().remove();
    storiaLink.style.borderBottom = '3px solid black';
    caricaStoria();
});

menuLink.addEventListener('click', () => {
    rimuoviBordoInferiore();
    pagAttuale().remove();
    menuLink.style.borderBottom = '3px solid black';
    caricaMenu();
});

contattiLink.addEventListener('click', () => {
    rimuoviBordoInferiore();
    pagAttuale().remove();
    contattiLink.style.borderBottom = '3px solid black';
    caricaContatti();
});