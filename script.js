document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("demoButton");

  if (button) {
    button.addEventListener("click", () => {
      button.textContent = "Clicked!";
      button.disabled = true;
    });
  }
});
