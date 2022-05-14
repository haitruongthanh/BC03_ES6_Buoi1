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
        <button id="${item}" class="color-button ${item}" onclick="addClass(\'${item}\')"
        ></button> 
        `;
    contentHTML += contentBtn;
  });
  document.getElementById("colorContainer").innerHTML = contentHTML;
};

createButton();

let addClass = (className) => {
  /*   let houseClass = document
    .getElementById("house")
    .classList.contains(className);
  if (houseClass) {
    document.getElementById("house").classList.add(className);
  } else {
    document.getElementById("house").classList.remove(className);
  } */

  document.getElementById("house").classList.toggle(className);
  document.getElementById(className).classList.toggle("active");
};

/* let removeActive = (className) => {
  let isActive = document.getElementsByClassName("active");
  console.log(isActive.length);
  if (isActive.length > 1) {
    colorList.forEach(function (item) {
      document.getElementById(item).classList.remove("active");
      document.getElementById("house").classList.remove(className);
    });
  }
};

let reset = (nameClass) => {
  document.getElementById("house").className.replace(nameClass, "");
  document.getElementById(nameClass).className.replace("active", "");
};
 */
