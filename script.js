// ==============================
// ELEMENTS
// ==============================

const header = document.getElementById("header");
const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");
const navLinks = nav.querySelectorAll("a");

const backTop = document.getElementById("backTop");

const bookingForm = document.getElementById("bookingForm");
const formSuccess = document.getElementById("formSuccess");

const dateInput = document.getElementById("date");

const year = document.getElementById("year");


// ==============================
// CURRENT YEAR
// ==============================

year.textContent = new Date().getFullYear();


// ==============================
// HEADER + BACK TO TOP
// ==============================

function handleScroll() {

    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }


    if (window.scrollY > 500) {
        backTop.classList.add("visible");
    } else {
        backTop.classList.remove("visible");
    }

}

window.addEventListener("scroll", handleScroll);

handleScroll();


// ==============================
// MOBILE MENU
// ==============================

menuToggle.addEventListener("click", () => {

    nav.classList.toggle("open");

    document.body.classList.toggle("menu-open");

    if (nav.classList.contains("open")) {
        menuToggle.textContent = "✕";
    } else {
        menuToggle.textContent = "☰";
    }

});


navLinks.forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("open");

        document.body.classList.remove("menu-open");

        menuToggle.textContent = "☰";

    });

});


// ==============================
// BACK TO TOP
// ==============================

backTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// ==============================
// MINIMUM BOOKING DATE
// ==============================

const today = new Date();

const yearValue = today.getFullYear();

const monthValue =
    String(today.getMonth() + 1).padStart(2, "0");

const dayValue =
    String(today.getDate()).padStart(2, "0");

dateInput.min =
    `${yearValue}-${monthValue}-${dayValue}`;


// ==============================
// BOOKING DEMO
// ==============================

bookingForm.addEventListener("submit", event => {

    event.preventDefault();


    const name =
        document.getElementById("name").value.trim();

    const phone =
        document.getElementById("phone").value.trim();

    const service =
        document.getElementById("service").value;

    const date =
        document.getElementById("date").value;

    const time =
        document.getElementById("time").value;


    if (
        !name ||
        !phone ||
        !service ||
        !date ||
        !time
    ) {

        alert(
            "Merci de remplir tous les champs obligatoires."
        );

        return;

    }


    formSuccess.classList.add("visible");


    bookingForm.reset();


    dateInput.min =
        `${yearValue}-${monthValue}-${dayValue}`;


    setTimeout(() => {

        formSuccess.classList.remove("visible");

    }, 5000);

});