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
