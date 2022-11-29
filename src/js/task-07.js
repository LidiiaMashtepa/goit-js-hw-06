const input = document.querySelector("#font-size-control");
const abracadabra = document.querySelector("#text");

input.addEventListener("input", onInputChange);
function onInputChange(event) {
  abracadabra.style.fontSize = event.currentTarget.value + "px";
}
console.log(abracadabra.style);
