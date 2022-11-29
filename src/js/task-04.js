let counterValue = 0;
let value = document.querySelector("#value");
const decrementBtn = document.querySelector(`button[data-action="decrement"]`);
const incrementBtn = document.querySelector(`button[data-action="increment"]`);
decrementBtn.addEventListener("click", () => {
  counterValue--;
  console.log(counterValue);
  value.textContent = counterValue;
});
incrementBtn.addEventListener("click", () => {
  counterValue++;
  console.log(counterValue);
  value.textContent = counterValue;
});
