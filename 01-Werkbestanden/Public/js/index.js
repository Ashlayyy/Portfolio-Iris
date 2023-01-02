//btt button
const scrollToTopBtn = document.getElementById("button__scrollToTop");
if (scrollToTopBtn) {
  function handleScroll() {
    const rootElement = document.documentElement;
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

//form submit
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

const body = document.querySelector("body");

if (modal) {
  modal.addEventListener("click", () => {
    body.style.overflow = "auto";
    modal.style.display = "none";
  });
}

if (img) {
  img.forEach((img) => {
    img.addEventListener("click", (event) => {
      if (img.classList.contains("foto__staand")) {
        modalImg.classList.add("foto__staand");
      } else if (img.classList.contains("foto__vierkant")) {
        modalImg.classList.add("foto__vierkant");
      } else {
        modalImg.classList.add("foto__liggend");
        if (modalImg.classList.contains("foto__staand")) {
          modalImg.classList.remove("foto__staand");
        } else if (modalImg.classList.contains("foto__vierkant")) {
          modalImg.classList.remove("foto__vierkant");
        } else {
          modalImg.classList.remove("foto__liggend");
        }
      }
      body.style.overflow = "hidden";
      modal.style.display = "block";
      modalImg.src = img.src;
    });
  });
}

if (span) {
  span.onclick = function () {
    body.style.overflow = "auto";
    modal.style.display = "none";
  };
}