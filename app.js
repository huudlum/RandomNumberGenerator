let minNum = document.getElementById("minNum");
let maxNum = document.getElementById("maxNum");
let result = null;
let generateBtn = document.getElementById("generateBtn")


function ranNumber() {
    let minValue = parseInt(minNum.value);
    let maxValue = parseInt(maxNum.value);

    if (!isNaN(minValue) && !isNaN(maxValue) && minValue < maxValue) {
        result = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
        document.getElementById("result").innerText = `${result}`
        document.getElementById("generateBtn").innerText = 'Reroll';

    } else {
        generateBtn.classList.add("error");
        setTimeout(() => {
            generateBtn.classList.remove("error");
        }, 1000)
        minNum.value = "";
        maxNum.value = "";
        minNum.placeholder = "Please enter";
        maxNum.placeholder = "valid numbers";
    }
}