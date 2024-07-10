const nameInp = document.getElementById("name");
const passwordInp = document.getElementById("password");
const btn = document.getElementById("btn");

scale = (e) => {
 e.target.style.transform = "scale(1.01)";
 setTimeout(() => {e.target.style.transform = "scale(1)"}, 200)
}

nameInp.addEventListener("input", scale);
passwordInp.addEventListener("input", scale);

passwordInp.addEventListener("keydown", (e) => {
    if(e.code == "ControlLeft"){
        passwordInp.setAttribute("type", "text");
    }
})

passwordInp.addEventListener("keyup", () => {
    passwordInp.setAttribute("type", "password");
})