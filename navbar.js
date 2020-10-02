var navHam = document.getElementById("navhambutton");
navHam.addEventListener("click", function() {
    var line1 = document.getElementById("navButton1");
    var line2 = document.getElementById("navButton2");
    var line3 = document.getElementById("navButton3");
    var navCircle = document.getElementById("navCircle");
    var body = document.getElementsByTagName("body");
    if (!(navHam.classList.contains("nav-expand"))) {
        line2.style.transform = "rotate(135deg)"; //Bottom
        line2.style.marginTop = "0";
        line3.style.transform = "rotate(45deg)"; //Top
        line3.style.marginBottom = "0";

        line1.style.width = "0";
        navHam.classList.add("nav-expand");
        body[0].style.overflow = "hidden";
        // Circle Animation
        navCircle.style.transform = "scale(100)";

    } else {
        line2.style.marginTop = "12px";
        line1.style.width = "20px";
        line3.style.marginBottom = "12px";
        line3.style.transform = "rotate(0deg)";
        line2.style.transform = "rotate(0deg)";
        navHam.classList.remove("nav-expand");
        navCircle.style.transform = "scale(1)";
        body[0].style.overflow = "auto";

    }

})