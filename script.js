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

