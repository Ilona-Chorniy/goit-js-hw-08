
const form = document.querySelector(".login-form");
form.style.padding = "24px";
form.style.borderRadius = "8px";
form.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
form.style.width = "408px";

const inputs = document.querySelectorAll(".login-form input");
inputs.forEach((input) => {
  input.style.width = "100%";
  input.style.padding = "10px";
  // input.style.marginBottom = "16px";
  input.style.border = "1px solid";
  input.style.borderRadius = "4px";
});

const labels = document.querySelectorAll(".login-form label");

labels.forEach((label, index) => {
  label.style.display = "flex";
  label.style.flexDirection = "column";
  label.style.marginBottom = index === 0 ? "8px" : "16px"; 

  const input = label.querySelector("input");
  if (input) {
    input.style.marginTop = "8px"; 
  }
});



const button = document.querySelector(".login-form button");
// button.style.padding = "8px 16px";
button.style.width = "86px";
button.style.height = "40px";
button.style.backgroundColor = "#4E75FF";
button.style.color = "#fff";
button.style.border = "none";
button.style.borderRadius = "8px";
button.style.fontSize = "16px";


button.addEventListener("focus", () => {
    button.style.backgroundColor = "#6c8cff";
  });
  

  button.addEventListener("blur", () => {
    button.style.backgroundColor = "#4E75FF";
  });


form.addEventListener("submit", (e) => {
  e.preventDefault();

  const form = e.target;
  const email = form.elements.email.value.trim();
  const password = form.elements.password.value.trim();
  if (!email || !password) {
    alert("All form fields must be filled in");
    return;
  }
  const formData = {
    email: email,
    password: password,
  };

  console.log(formData);
  form.reset();
});