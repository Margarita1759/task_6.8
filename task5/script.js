const userText = document.querySelector("input");
const textShow = document.querySelector ("#duplicateField");
const Button = document.querySelector("#clearText");
userText.addEventListener("keyup", function() {
    textShow.textContent = userText.value;
});
Button.addEventListener("click", function() {
    console.log (userText.value);
    textShow.textContent=userText.value; 
    userText.value="";
});

