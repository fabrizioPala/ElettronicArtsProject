const header = document.querySelector("header");
//ho creato una variabile che indica lo scroll precedente
let lastScroll = 0;

window.addEventListener("scroll", () => {
  //ho salvato in una costante la" quantità di scorrimento" verticale attuale.
  const currentScroll = window.scrollY;
  // Questo controllo viene spesso utilizzato per determinare la direzione in cui l'utente sta scorrendo la pagina.
  if (currentScroll > lastScroll) {
    //se lo scroll avviene verso il basso aggiungo la classe hidden alla nav 1
    header.querySelector(".nav1").classList.add("hiddenNav");
    //questa transformazione sposta l'elemento verso l'alto del 100%
    header.querySelector(".nav2").style.transform = "translateY(-70%)";
  } else {
    //se invece lo scroll è verso l'alto rimuovo la classe hidden e restituisco la trasformazione a default
    header.querySelector(".nav1").classList.remove("hiddenNav");
    header.querySelector(".nav2").style.transform = "translateY(0)";
  }
  //faccio in modo che la variabile lastScroll contenga il  valore della currentscroll e si ricomincia da capo
  lastScroll = currentScroll;
});

//-------------------GESTIONE CARD CONTENT SU TRIGGER SCROLL MENU LATERALE------------------------

const $trigger = document.querySelectorAll(".triggerContainer");
const $content = document.querySelectorAll(".content");

$trigger.forEach(($el) => {
  $el.addEventListener("click", (event) => {
    $content.forEach(($_content) => $_content.classList.remove("visible"));
    const id = event.target.dataset.id;
    document.getElementById(id).classList.add("visible");
  });
});

//---------------------------GESTIONE SCROLL MENù------------------------

const $prev = document.querySelector("#prev");
const $next = document.querySelector("#next");
const $slider = document.querySelector("#ultimeNovità-cardMenu");

//scroll to right
$next.addEventListener("click", () => {
  let scrollTarget = $slider.scrollLeft + 100;
  $slider.style.scrollBehavior = "smooth";
  $slider.style.transitionDuration = 2000;
  $slider.scrollTo({
    left: scrollTarget,
  });
});

//scroll to left
$prev.onclick = () => ($slider.scrollLeft -= 100);

//check display arrows
$slider.addEventListener("scroll", () => {
  if ($slider.scrollLeft === 0) {
    $prev.style.display = "none";
  } else {
    $prev.style.display = "block";
  }
  //se la posizione dello scroll laterale è maggiore o uguale alla larghezza totale dell'elemento meno la larghezza visibile dell'elemento, nascondo il pulsante "next". Altrimenti, mostro il pulsante "next".
  if ($slider.scrollLeft >= $slider.scrollWidth - $slider.clientWidth) {
    $next.style.display = "none";
  } else {
    $next.style.display = "block";
  }
});

//
//-------------------------------GESTIONE FOCUS TRIGGER--------------

const $redbar = document.querySelectorAll(".triggerButtons__RedBar");
const $allCard = document.querySelectorAll(".cardUltimeNovità");

$trigger.forEach(($_el) => {
  $_el.addEventListener("click", (event) => {
    $allCard.forEach(($__card) => {
      $__card.classList.add("card-up");

      setTimeout(() => {
        $__card.classList.remove("card-up");
      }, 10);
    });
  });
});

//
//------------------------------------GESTIONE BARRE ROSA MENU---------------
//

$trigger.forEach(($__el) => {
  $__el.addEventListener("click", (event) => {
    $redbar.forEach(($_bar) => $_bar.classList.remove("visible__bar"));

    $trigger.forEach(($_trig) => $_trig.classList.remove("triggered_bg"));

    const nth = event.target.dataset.nth;

    document.getElementById(nth).classList.add("visible__bar");

    event.currentTarget.classList.add("triggered_bg");
  });
});

//----------------------GESTIONE MOUSE HOVER------------------

$allCard.forEach(($_card) => {
  $_card.addEventListener(
    "mouseover",
    () => {
      $_card.classList.add("card-up");
    },
    $_card.addEventListener("mouseout", () => {
      $_card.classList.remove("card-up");
    })
  );
});

// <!-- ------------------------------------ salvatore ------------------------------- -->
// <!-- ------------------------------------ salvatore ------------------------------- -->
// <!-- ------------------------------------ salvatore ------------------------------- -->

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

// <!-- ------------------------------------ salvatore ------------------------------- -->
// <!-- ------------------------------------ salvatore ------------------------------- -->
// <!-- ------------------------------------ salvatore ------------------------------- -->

const menu = document.querySelector(".hamburger");

menu.addEventListener("click", () => {
  document.getElementById("sidebar").classList.remove("hidden")
  document.getElementById("sidebar").style.display = "block";
  document.querySelector('.side-container').classList.add("side-visible")
  document.querySelector("body").style.overflow = "hidden"



  document.getElementById("sidebar").style.width = "450px";
  document.querySelector(".nav2").classList.add("hidden");
});


function openNav() {
  document.getElementById("sidebar").style.width = "450px";
  document.querySelector(".nav2").classList.add("hidden");
}

function closeNav() {
  document.getElementById("sidebar").style.width = "0";
  document.querySelector(".nav2").classList.remove("hidden");
  document.querySelector('.side-container').classList.remove("side-visible")
  document.querySelector("body").style.overflow = ""



}


