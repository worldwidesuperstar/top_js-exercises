function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const container = document.querySelector("#container");

const btn = document.querySelector("#run-main");

btn.addEventListener("click", () => {

    const red = document.createElement("p");
    red.classList.add("red");
    red.textContent = "Hey im red";
    red.style.color = "red";
    container.appendChild(red);

    const blue = document.createElement("h3");
    blue.classList.add("blue");
    blue.textContent = "Hey im a blue h3 (no ethan)";
    blue.style.color = "blue";
    container.appendChild(blue);

    const div = document.createElement("div");
    div.style.border = "1px solid black";
    div.style.backgroundColor = "pink";

    const header = document.createElement("h1");
    header.textContent = "Im in a div";
    div.appendChild(header);

    const para = document.createElement("p");
    para.textContent = "me too bruh";
    div.appendChild(para);

    const color_button = document.createElement("button");
    color_button.textContent = "change the color of the div i guesss.. double clik";

    color_button.addEventListener("dblclick", () => {
        div.style.backgroundColor = getRandomColor();
    });

    div.appendChild(color_button);


    container.appendChild(div);

});


