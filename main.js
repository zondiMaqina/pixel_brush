const allColors = {
  blue: 'blue',
  green: 'green',
  red: 'red',
  orange: 'orange',
  yellow: 'yellow'
};

// function for showing pop up model and removing it
const settingsImage = document.querySelector("ul.right li img#settings-button");
const model = document.querySelector("header div.settings-container");

settingsImage.addEventListener("click", () => {
  model.classList.toggle("show");
})