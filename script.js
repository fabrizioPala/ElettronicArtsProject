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

