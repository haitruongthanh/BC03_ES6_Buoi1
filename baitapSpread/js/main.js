let string = document.getElementById("heading").innerText;
let char = [...string];
document.getElementById("heading").style.display = "none";
let contentHTML = "";
char.forEach(function (item) {
  let contentSpan = /* html */ `
    <span>${item}</span>
    `;
  contentHTML += contentSpan;
});
document.getElementById("span-content").innerHTML = contentHTML;
