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