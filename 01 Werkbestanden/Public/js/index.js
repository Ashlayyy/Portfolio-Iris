//copyrigth year
const footer__copyRightYear = document.getElementById("footer__copyrightYear");
const year = new Date().getFullYear();
footer__copyRightYear.innerText = year;

//btt button
const scrollToTopBtn = document.getElementById("button__scrollToTop");
const rootElement = document.documentElement;

function handleScroll() {
  const scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
  if (
    rootElement.scrollTop / scrollTotal > 0.1 &&
    rootElement.scrollTop / scrollTotal <= 0.9
  ) {
    scrollToTopBtn.classList.add("showBtn");
    scrollToTopBtn.classList.remove("whiteBtn");
  } else if (rootElement.scrollTop / scrollTotal > 0.9) {
    scrollToTopBtn.classList.add("whiteBtn");
  } else {
    scrollToTopBtn.classList.remove("showBtn");
    scrollToTopBtn.classList.remove("whiteBtn");
  }
}

function scrollToTop() {
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
scrollToTopBtn.addEventListener("click", scrollToTop);
document.addEventListener("scroll", handleScroll);

//contact button
const button_contact = document.getElementById("navigation__button");
if (button_contact) {
  button_contact.addEventListener("click", function (event) {
    window.location.href = "/contact";
  });
}

//artis button
const button_artis = document.getElementById("artis__button");
if (button_artis) {
  button_artis.addEventListener("click", function (event) {
    window.location.href = "/artis";
  });
}

//examen 1 button
const examen1_button = document.getElementById(
  "main__overmij__examenButton_product"
);
if (examen1_button) {
  examen1_button.addEventListener("click", function (event) {
    window.location.href = "/examen/product";
  });
}

//examen 2 button
const examen2_button = document.getElementById(
  "main__overmij__examenButton_3d"
);
if (examen2_button) {
  examen2_button.addEventListener("click", function (event) {
    window.location.href = "/examen/3D";
  });
}

const formSubmit = document.getElementById("submitButton");
if (formSubmit) {
  formSubmit.addEventListener("click", (event) => {
    const voornaamValue = document.getElementById("voornaam").value;
    const achternaamValue = document.getElementById("achternaam").value;
    const emailValue = document.getElementById("email").value;
    const phoneValue = document.getElementById("telefoon").value;
    const berichtValue = document.getElementById("bericht").value;

    if (
      voornaamValue &&
      typeof voornaamValue !== "" &&
      achternaamValue &&
      typeof achternaamValue !== "" &&
      emailValue &&
      typeof emailValue !== "" &&
      phoneValue &&
      typeof phoneValue !== "" &&
      berichtValue &&
      typeof berichtValue !== ""
    ) {
      fetch("/sendEmail", {
        method: "POST",
        body: JSON.stringify({
          voornaam: voornaamValue,
          achternaam: achternaamValue,
          email: emailValue,
          telefoon: phoneValue,
          bericht: berichtValue,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }).then((response) => {
        alert("Email succesvol verzonden");
        location.reload();
      });
    } else {
      alert("De velden mogen niet leeg zijn!");
    }
  });
}

//modal image
const modal = document.getElementById("modalImage");

const img = document.querySelectorAll(".foto__clickable");
const modalImg = document.getElementById("modal-content");

const span = document.getElementsByClassName("close")[0];

if (modal) {
  modal.addEventListener("click", () => {
    modal.style.display = "none";
  });
}

if (img) {
  img.forEach((img) => {
    img.addEventListener("click", (event) => {
      modal.style.display = "block";
      modalImg.src = img.src;
    });
  });
}

if (span) {
  span.onclick = function () {
    modal.style.display = "none";
  };
}
