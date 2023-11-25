const ele = document.getElementById("ele1");

ele.style.backgroundColor = "green";

function pintar(color) {
  ele.style.backgroundColor = color;
}
ele.addEventListener("click", function () {
  pintar("yellow");
});

const cuadroAzul = document.getElementById("azul");
const cambioColor = (e) => (e.target.style.backgroundColor = "black");

cuadroAzul.addEventListener("click", cambioColor);
