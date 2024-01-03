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


let button = document.querySelector('.network-btn');
let count = 0;

button.addEventListener('click', () => {
    count++;

    if (count === 2) {
        button.blur();
        count = 0;
    }
});

document.addEventListener('click', (event) => {
    if (!button.contains(event.target)) {
        button.blur();
        count = 0;
    }
});

