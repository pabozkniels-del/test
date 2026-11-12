// Telt het aantal klikken op de knop.
const knop = document.getElementById('knop');
const teller = document.getElementById('teller');
let count = 0;

knop.addEventListener('click', () => {
  count += 1;
  teller.textContent = count;
});
