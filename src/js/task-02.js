const list = document.querySelector("#ingredients");

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
for (const ingridient of ingredients) {
  const item = document.createElement("li");
  item.classList.add("item");
  item.textContent = ingridient;

  list.append(item);
  console.log(list);
}
