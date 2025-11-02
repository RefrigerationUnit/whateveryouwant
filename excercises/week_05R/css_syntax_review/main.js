const container = document.getElementById('gridContainer');
const columns = 6;

for (let i = 0; i < columns; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    container.appendChild(square);
}