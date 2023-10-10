document.addEventListener("DOMContentLoaded", function () {
    const habilidadesButton = document.querySelector(".button-menu[href='/habilidades']");
    const contactoButton = document.querySelector(".button-menu[href='/contacto']");
  
    habilidadesButton.addEventListener("click", function () {
      window.location.href = "/habilidades";
    });
  
    contactoButton.addEventListener("click", function () {
      window.location.href = "/contacto";
    });
  });
  