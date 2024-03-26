
const getRandomNumber = Math.floor(Math.random() * 100) + 1
console.log(getRandomNumber)
function checkNumber() {
    const userInput = document.getElementById("userInput").value;
    const randomNumber = getRandomNumber[1 && 100];


    if (isNaN(userInput) || userInput < 1 || userInput > 100) {
        alert("Пожалуйста, введите число от 1 до 100.");
        return;
    }


    if (userInput < getRandomNumber) {
        return alert("Загаданное число больше")
    } else if (userInput > randomNumber) {
        return alert("Загаданное число меньше")
    } else {
        return alert("Вы угадали!")
    }
}
