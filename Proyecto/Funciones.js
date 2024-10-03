function cambia(){
    var i =Math.floor(Math.random()*12);
    var ximagen = "banner/" + i + ".webp";
          if (i <= 12) {
                 document.getElementById("fotocambia").src =ximagen;
              }
  }
  function inicio() {
              setInterval(cambia, 800);
          }
  //evento que se ejecuta al mostrar la pagina
  window.onload = inicio;