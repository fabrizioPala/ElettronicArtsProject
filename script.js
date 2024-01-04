let prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar1").style.top = "0";
    document.getElementById("navbar2").style.top = "50px";
  } else {
    document.getElementById("navbar1").style.top = "-50px";
    document.getElementById("navbar2").style.top = "0";
  }
  prevScrollpos = currentScrollPos;
};

/* ---------------------------------- evento click bottoni footer ---------------------------- */

let networkButtons = document.querySelectorAll(".network-btn");
let counts = Array.from(networkButtons).map(() => 0);

networkButtons.forEach((button, index) => {
  button.addEventListener("click", (event) => {
    event.stopPropagation();
    counts[index]++;

    // Azzera il contatore dell'altro bottone
    const otherIndex = index === 0 ? 1 : 0;
    counts[otherIndex] = 0;

    if (counts[index] === 2) {
      button.blur();
      counts[index] = 0;
    }
  });
});


document.addEventListener("click", () => {
  networkButtons.forEach((button, index) => {
    button.blur();
    counts[index] = 0;
  });
});


/* -----------------------------------------------------evento click price-item ----------------------------------------- */

const priceItems = document.querySelectorAll(".price-item");

priceItems.forEach(priceItem => {
  priceItem.addEventListener('click', function() {
    const priceText = this.querySelector('span').textContent;

    // Aggiorna il testo di <span class="price-selection">
    document.querySelector('.price-selection').textContent = priceText;

    // Rimuovi la classe "visible" da tutti gli elementi
    document.querySelectorAll('.price-item img.checked-img').forEach(img => {
      img.classList.add('hidden');
      img.classList.remove('visible');
    });

    // Aggiungi la classe "visible" all'immagine all'interno dell'elemento cliccato
    const checkedImg = this.querySelector('img.checked-img');
    if (checkedImg) {
      checkedImg.classList.add('visible');
    }
  });
});




/* -----------------------------------------------------evento click language-item ----------------------------------------- */

const languageItems = document.querySelectorAll('.language-item');

languageItems.forEach(languageItem => {
  languageItem.addEventListener('click', function() {
    const countryText = this.querySelector('.country-language').textContent;

    document.querySelector('.country-selection').textContent = countryText;

    document.querySelectorAll('.language-item img.checked-img').forEach(img => {
      img.classList.add('hidden');
      img.classList.remove('visible');
    });

    const checkedImg = this.querySelector('img.checked-img');
    if (checkedImg) {
      checkedImg.classList.add('visible');
    }

    const languageFlagImg = this.querySelector('.language-item-flag');
    const flagSelectionImg = document.querySelector('.flag-selection');
    
    if (languageFlagImg && flagSelectionImg) {
      flagSelectionImg.src = languageFlagImg.src;
      flagSelectionImg.alt = languageFlagImg.alt;
  }});
});
