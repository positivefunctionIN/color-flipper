const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById('btn');
const color = document.querySelector(".color");

/* this was my logic ...
basically it did what ki random num m array k length gya and loop m vahi   */
btn.addEventListener('click', function () {
    let hexcolor = '#';

    for (let i = 0; i < 6; i++) {
        hexcolor += hex[getRandomNum()];
    }

    color.textContent = hexcolor;
    document.body.style.backgroundColor = hexcolor;

})
function getRandomNum() {
    return Math.floor(Math.random() * hex.length);
}


