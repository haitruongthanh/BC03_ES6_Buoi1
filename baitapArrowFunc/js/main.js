const colorList = [
  "pallet",
  "viridian",
  "pewter",
  "cerulean",
  "vermillion",
  "lavender",
  "celadon",
  "saffron",
  "fuschia",
  "cinnabar",
];

let createButton = () => {
  let contentHTML = "";
  colorList.forEach((item) => {
    let contentBtn = /* html */ `
        <button id="${item}" class="color-button ${item}" onclick="addClass('${item}')"
        ></button> 
        `;
    contentHTML += contentBtn;
  });
  document.getElementById("colorContainer").innerHTML = contentHTML;
};

createButton();
let addClass = (className) => {
  document.getElementById("house").className = `house ${className}`;
};

let header = document.getElementById("colorContainer");
let btns = header.getElementsByClassName("color-button");
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", () => {
    let current = document.getElementsByClassName("active");
    console.log(current);
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    }
    this.className += " active";
  });
}
