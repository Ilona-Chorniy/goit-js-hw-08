const nameInput = document.querySelector("#name-input");
nameInput.style.width = "360px";
nameInput.style.height = "40px";
nameInput.style.fontSize = "16px";

const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", () => {
  const name = nameInput.value.trim();
  if (name === "") {
    nameOutput.textContent = "Anonymous";
  } else {
    nameOutput.textContent = name;
  }
});