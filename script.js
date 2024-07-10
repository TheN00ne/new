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

let counter = (start) => {
    let count = start;

    return () => {
        let div = document.createElement("div");
        div.style.width = "100px";
        div.style.height = "20px";
        div.style.backgroundColor = "red";
        div.innerHTML = `Counter: ${count}`;
        document.body.append(div);
    }
}

let count1 = counter(0);
let count2 = counter(100);