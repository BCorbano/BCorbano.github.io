import {MDCTextField} from '@material/textfield';
import {MDCRipple} from '@material/ripple';

const textField = new MDCTextField(document.querySelector('.mdc-text-field'));
const buttonRipple = new MDCRipple(document.querySelector('.mdc-button'));
MDCRipple(document.querySelector('.mdc-button'));

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

