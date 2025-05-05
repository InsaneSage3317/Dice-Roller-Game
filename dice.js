function rollDice() {

const noOfDice = document.getElementById("noOfDice").value;
const result = document.getElementById("result");
const images = document.getElementById("images");
let values = [];
let imageArr = [];


for (let i = 0; i < noOfDice; i++) {
    let value = Math.floor(Math.random() * 6) + 1;
    values.push(value);
    imageArr.push(`<img src="dice_images/${value}.png">`);

}


result.textContent = `Dice: ${values.join(", ")}`
images.innerHTML = imageArr.join("");
}