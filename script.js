
const header = document.querySelector('header');
//ho creato una variabile che indica lo scroll precedente
let lastScroll = 0;

window.addEventListener('scroll', () => {
    //ho salvato in una costante la" quantità di scorrimento" verticale attuale.
  const currentScroll = window.scrollY;
// Questo controllo viene spesso utilizzato per determinare la direzione in cui l'utente sta scorrendo la pagina.
  if (currentScroll > lastScroll) {
    //se lo scroll avviene verso il basso aggiungo la classe hidden alla nav 1 
    header.querySelector('.nav1').classList.add('hidden');
    //questa transformazione sposta l'elemento verso l'alto del 100%
    header.querySelector('.nav2').style.transform = 'translateY(-100%)';
  } else {
    //se invece lo scroll è verso l'alto rimuovo la classe hidden e restituisco la trasformazione a default
    header.querySelector('.nav1').classList.remove('hidden');
    header.querySelector('.nav2').style.transform = 'translateY(0)';
  }
 //faccio in modo che la variabile lastScroll contenga il  valore della currentscroll e si ricomincia da capo
  lastScroll = currentScroll;
});
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

priceItems.forEach((priceItem) => {
  priceItem.addEventListener("mouseover", function () {
    // Rimuovi la classe ".bluSpan" da tutti gli elementi
    document.querySelectorAll(".price-item").forEach((item) => {
      item.classList.remove("bluSpan");
    });

    // Aggiungi la classe ".bluSpan" all'elemento su cui è avvenuto il passaggio del mouse
    this.classList.add("bluSpan");
  });

  // ----------------------------------

  priceItem.addEventListener("click", function () {
    const priceText = this.querySelector("span").textContent;

    // Aggiorna il testo di <span class="price-selection">
    document.querySelector(".price-selection").textContent = priceText;

    // Rimuovi la classe "visible" da tutti gli elementi
    document.querySelectorAll(".price-item img.checked-img").forEach((img) => {
      img.classList.add("hidden");
      img.classList.remove("visible");
    });

    // Aggiungi la classe "visible" all'immagine all'interno dell'elemento cliccato
    const checkedImg = this.querySelector("img.checked-img");
    if (checkedImg) {
      checkedImg.classList.add("visible");
    }
  });
});

/* -----------------------------------------------------evento click language-item ----------------------------------------- */

const languageItems = document.querySelectorAll(".language-item");

languageItems.forEach((languageItem) => {
  languageItem.addEventListener("mouseover", function () {
    // Rimuovi la classe ".bluSpan" da tutti gli elementi
    document.querySelectorAll(".language-item").forEach((item) => {
      item.classList.remove("bluSpan");
    });

    // Aggiungi la classe ".bluSpan" all'elemento su cui è avvenuto il passaggio del mouse
    this.classList.add("bluSpan");
  });

  languageItem.addEventListener("click", function () {
    const countryText = this.querySelector(".country-language").textContent;

    document.querySelector(".country-selection").textContent = countryText;

    document
      .querySelectorAll(".language-item img.checked-img")
      .forEach((img) => {
        img.classList.add("hidden");
        img.classList.remove("visible");
      });

    const checkedImg = this.querySelector("img.checked-img");
    if (checkedImg) {
      checkedImg.classList.add("visible");
    }

    const languageFlagImg = this.querySelector(".language-item-flag");
    const flagSelectionImg = document.querySelector(".flag-selection");

    if (languageFlagImg && flagSelectionImg) {
      flagSelectionImg.src = languageFlagImg.src;
      flagSelectionImg.alt = languageFlagImg.alt;
    }
  });
});
=======


