# Pixel_brush
- A block-based sketching pad where you sketch with randomly generated colors on each stroke
- The sketch pad is built on a 16x16 grid by defaukt you can readjust its size on the settings.

> [!NOTE]
> The application is built on the focus on improving my understanding on DOM manipulation and Flexbox from CSS

This is the [live preview](...)

## Challanges

- I have to figure out how to create pop up models using javascript
- How to make each block take the space available on the pad no matter how many they are (2 - 16 square)
- How to readjust the x in the `grid-template: repeat(x, 1fr);` property to align the pixels in a grid fashion as user readjusts the pad size
- how to remove pop up model by clicking anywhere else on document

## Development

- [x] pop up model created using css property `display: none` and added an eventlistener to the button that will show the pop up model
- [x] use the grid layout in css
- [x] instead of removing pop up modelby clicking anywhere else, the approacb of using `node.classList.toggle('x');` made it simple to remove or show the model by clicking on the appropriate element