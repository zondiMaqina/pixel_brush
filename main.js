const allColors = {
  blue: 'blue',
  green: 'green',
  red: 'red',
  orange: 'orange',
  yellow: 'yellow'
};

// for showing pop up model and removing it
const icons = document.querySelector("header nav ul.right");
const model = document.querySelector("header div.settings-container");
const body = document.querySelector("body");
const featuresPane = document.querySelector("article.features-pane");

icons.addEventListener("click", (event) => {
  let target = event.target;
  
  if (target.id == 'settings-button'){
    // for showing model
    model.classList.toggle('show')
  } else if (target.id == 'theme-button'){
    // for changing page theme
    body.classList.toggle('light');
    featuresPane.classList.toggle('light');
  };
})

// for incrementing and decrementing grid suqare
const settingsModel = document.querySelector("div.settings-container article#settings");
const increment = document.querySelector("div.settings-container article p.increment");
const decrement = document.querySelector("div.settings-container article p.decrement");
const input = document.querySelector("div.settings-container article#settings input");
let sketchPad = document.querySelector("main section#sketch-pad");

function addBlocksToSketchPad(number) {
  sketchPad.replaceChildren(document.createElement("div"));
  let square = number ** 2;
  for (let num = 1; num < square; num++) {
    sketchPad.appendChild(document.createElement('div'));
  }
  sketchPad.setAttribute("style", `grid-template-columns: repeat(${number}, 1fr); grid-template-rows: repeat(${number}, 1fr);`)
}

settingsModel.addEventListener('click', (event) => {
  let target = event.target;
  let value = Number(input.value);
  
  if (target == increment && value < 16){
    value += 1;
    input.value = value;
    addBlocksToSketchPad(value)
  } else if (target == decrement && value > 2){
    value -= 1;
    input.value = value;
    addBlocksToSketchPad(value)
  }
});

// for adding color to sketch pad
function getRandomColor() {
  let colors = [ "#FF6B6B", "#6BCB77", "#4D96FF", "#4D96FF", "#4D96FF", "#4D96FF", "#4D96FF",
"#4D96FF", "#4D96FF", "#FFD93D"];

  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
};

sketchPad.addEventListener('touchmove', (e) => {
  e.preventDefault(); // prevent scrolling
  const touch = e.touches[0];
  const element = document.elementFromPoint(touch.clientX, touch.clientY);

  if (element && element.parentElement === sketchPad) {
    element.style.backgroundColor = getRandomColor();
  }
}, { passive: false });
