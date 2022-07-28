let form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let labels = document.querySelectorAll("label.required");
  labels.forEach((item) => {
    item.classList.add("red");
  });
  let inputs = document.querySelectorAll(
    'input[type="text"], input[type="password"]'
  );
  inputs.forEach((item) => {
    item.classList.add("red");
  });

  let errorSpan = document.querySelectorAll("span.error");
  errorSpan.forEach((item) => {
    item.classList.add("display");
  });
});
