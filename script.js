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
$next.addEventListener("click", () =>{
  let scrollTarget = $slider.scrollLeft + 100;
  $slider.style.scrollBehavior = "smooth";
  $slider.style.transitionDuration = 2000;
  $slider.scrollTo({
    left: scrollTarget,
  });
})
  
//scroll to left
$prev.onclick = () => $slider.scrollLeft -=100

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

const $redbar = document.querySelectorAll(".triggerButtons__RedBar")
const $allCard = document.querySelectorAll(".cardUltimeNovità")


$trigger.forEach(($_el) => {

  $_el.addEventListener("click", event => {

    $allCard.forEach($__card => {
      
      $__card.classList.add("card-up")
      
      setTimeout(() => {

        $__card.classList.remove("card-up")
        
      }, 10);
    })
  })
});


//
//------------------------------------GESTIONE BARRE ROSA MENU---------------
//



$trigger.forEach(($__el) => {
  
  $__el.addEventListener("click", event => {

    $redbar.forEach(($_bar) => $_bar.classList.remove("visible__bar"))

    $trigger.forEach(($_trig) => $_trig.classList.remove("triggered_bg"))

    const nth = event.target.dataset.nth

    document.getElementById(nth).classList.add("visible__bar")

    event.currentTarget.classList.add("triggered_bg")
    
  })
})

//----------------------GESTIONE MOUSE HOVER------------------


$allCard.forEach(($_card) => {
  $_card.addEventListener("mouseover", () => {
    $_card.classList.add('card-up')
  }, $_card.addEventListener("mouseout", () => {
    $_card.classList.remove("card-up")
  }))
})
