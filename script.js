//your JS code here. If required.
const sizeInfo = document.querySelector('#sizeInfo');
const sizeHeader = sizeInfo.querySelector('h1');

function updateSize() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  sizeHeader.textContent = `Width: ${width} Height: ${height}`;
}

// Call updateSize() on page load to initialize the header with the current size
updateSize();

// Call updateSize() whenever the window is resized
window.addEventListener('resize', updateSize);
