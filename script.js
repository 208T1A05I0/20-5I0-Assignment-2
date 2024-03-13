const colors = ["#F1f5f8", "#fa2e2e", "#ff8100", "#ffff55","#45ff45","#3dfff5", "#3030fd", "#62298a"];
let currentIndex = 0;

const clickmeButton = document.getElementById('clickme');
const colorCodeText = document.getElementById('colorCode');

clickmeButton.addEventListener('click', () => {
    clickmeButton.style.backgroundColor = colors[currentIndex];
    document.body.style.backgroundColor = colors[currentIndex];
    colorCodeText.textContent = colors[currentIndex];
    currentIndex = (currentIndex + 1) % colors.length;
});
