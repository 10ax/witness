let nob = document.getElementById("No")

const moveButton = () => {
  let alto = random(1, 10)
  let ancho = random(1, 10)
  console.log(alto, ancho)
  nob.style.gridRow = alto;
  nob.style.gridColumn = ancho;
}

nob.addEventListener("mousemove", moveButton);
nob.addEventListener("click", moveButton);

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

let sib = document.getElementById("Si")

sib.addEventListener("click", () => {
  document.getElementById("p").removeAttribute("hidden")
  console.log("click")
  document.getElementById("1").remove();
  document.getElementById("Si").remove();
  document.getElementById("No").remove();
  document.querySelector("section").remove()
})