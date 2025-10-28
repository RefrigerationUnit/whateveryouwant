const en_btn = document.querySelector('.en');
const pt_btn = document.querySelector('.pt');

const english_text = document.querySelector('.english')
const portuguese_text = document.querySelector('.portuguese')

en_btn.addEventListener('click', translateToEnglish);
pt_btn.addEventListener('click', translateToPortuguese);

function translateToEnglish() {
    let h1 = document.querySelector('h1');
    // translate the title
    h1.textContent = "Houses or Museums?";
    english_text.style.display = "block";
    portuguese_text.style.display = "none";
}
function translateToPortuguese() {
    let h1 = document.querySelector('h1');
    // translate the title
    h1.textContent = "Casa ou Museus?";
    portuguese_text.style.display = "block";
    english_text.style.display = "none";
}
