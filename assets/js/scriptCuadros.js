const cuadroAzul = document.getElementById("azul");
const cuadroRojo = document.getElementById("rojo");
const cuadroVerde = document.getElementById("verde");
const cuadroAmarillo = document.getElementById("amarillo");

const cambioColor = (e) => (e.target.style.backgroundColor = "black");

cuadroAzul.addEventListener("click", cambioColor);
cuadroRojo.addEventListener("click", cambioColor);
cuadroVerde.addEventListener("click", cambioColor);
cuadroAmarillo.addEventListener("click", cambioColor);

// let color = "";

const keyDiv = document.getElementById("key");
document.addEventListener("keydown", function (e) {
  if (e.key === "a") {
    keyDiv.style.backgroundColor = "pink";
  } else if (e.key === "s") {
    keyDiv.style.backgroundColor = "orange";
  } else if (e.key === "d") {
    keyDiv.style.backgroundColor = "skyblue";
  }
});

function nuevoCuadro(color) {
  const cuadro = document.createElement("div");
  cuadro.style.height = "200px";
  cuadro.style.width = "200px";
  cuadro.style.margin = "30px";
  cuadro.style.backgroundColor = color;

  document.body.appendChild(cuadro);
}

document.addEventListener("keydown", function (e) {
  if (e.key === "q") {
    nuevoCuadro("purple");
  } else if (e.key === "w") {
    nuevoCuadro("gray");
  } else if (e.key === "e") {
    nuevoCuadro("chocolate");
  }
});
