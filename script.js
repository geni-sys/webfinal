const element = document.querySelector("#escolha");

window.addEventListener("load", () => {
  element.addEventListener("change", (event) => {
    console.log("Changed");
  });
});
