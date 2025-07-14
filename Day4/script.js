let paragraph = document.getElementById("paragraph");
let changeText = document.getElementById("btn");

changeText.addEventListener("click", function() {
    paragraph.textContent = "The paragraph text has been changed!";
})