/* Mostrare l'hamburger menu quando ci si clicca sopra */

/* STRUMENTI
document.queryselector
addEventsListener */

document.querySelector('.fas').addEventListener('click', function () {
  document.querySelector('.hamburger-menu').style.display = "block";
})

document.querySelector('.close').addEventListener('click', function () {
  document.querySelector('.hamburger-menu').style.display = "none";
})