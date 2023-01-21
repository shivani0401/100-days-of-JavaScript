window.addEventListener("DOMContentLoaded", function () {
    const color = document.getElementById("color");
    const btn = document.getElementById("gen");

    const generateHexColor = () => {
        const randomHexColor = Math.random().toString(16).substring(2,8);
        this.document.body.style.backgroundColor = "#"+ randomHexColor;
        color.innerHTML = "#"+ randomHexColor;
    }
    btn.addEventListener("click", generateHexColor);
})