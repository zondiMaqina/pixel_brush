const allColors = {
  blue: 'blue',
  green: 'green',
  red: 'red',
  orange: 'orange',
  yellow: 'yellow'
};

// for showing pop up model and removing it
const settingsImage = document.querySelector("ul.right li img#settings-button");
const model = document.querySelector("header div.settings-container");

settingsImage.addEventListener("click", () => {
  model.classList.toggle("show");
})

// for changing theme of webpage
const body = document.querySelector("body");
const featuresPane = document.querySelector("article.features-pane");
const sunIcon = document.querySelector("nav ul li img#theme-button");

sunIcon.addEventListener("click", () => {
  body.classList.toggle('light');
  featuresPane.classList.toggle('light');
})

// for incrementing and decrementing grid suqare
const settingsModel = document.querySelector("div.settings-container article#settings");
const increment = document.querySelector("div.settings-container article p.increment");
const decrement = document.querySelector("div.settings-container article p.decrement");
const input = document.querySelector("div.settings-container article#settings input");

settingsModel.addEventListener('click', (event) => {
  let target = event.target;
  let value = Number(input.value);
  
  if (target == increment){
    if (value < 16) value += 1;
    input.value = value;
  } else if (target == decrement){
    if (value > 2) value -= 1;
    input.value = value;
  }
});