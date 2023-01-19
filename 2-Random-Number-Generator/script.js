window.addEventListener("DOMContentLoaded", function () {
    const num = document.getElementById("count");
    const btn = document.getElementById("gen");

    const generateNumber = () => {
        const randomNumber = Math.floor(Math.random()*100);
        num.innerHTML = randomNumber;
    }

    btn.addEventListener("click", generateNumber);
})