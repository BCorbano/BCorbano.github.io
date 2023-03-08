import {MDCTextField} from '@material/textfield';
import {MDCRipple} from '@material/ripple';
import {MDCMenu} from '@material/menu';
import {MDCTabBar} from '@material/tab-bar';

const textField = new MDCTextField(document.querySelector('.mdc-text-field'));
const buttonRipple = new MDCRipple(document.querySelector('.mdc-button'));
MDCRipple(document.querySelector('.mdc-button'));
const menu = new MDCMenu(document.querySelector('.mdc-menu'));
menu.open = true;
const tabBar = new MDCTabBar(document.querySelector('.mdc-tab-bar'));

let cardSacra = document.getElementById('cardSacra')
let cardRetratos = document.getElementById('cardRetratos');
let cardDiversos = document.getElementById('cardDiversos');
let cardClero = document.getElementById('cardClero');
let card = document.getElementsByClassName('card');

card.onClick = function() {
    if (card.style.display !== "none") {
        card.style.display = "none";
      } else {
        card.style.display = "block";
      }
}


