const closeBtn = document.querySelector(".close");
const plusButtons = document.querySelectorAll(".plus");
const detailsDiv = document.querySelector(".details");

plusButtons.forEach((plusButton) => {
  plusButton.addEventListener("click", () => {
    detailsDiv.classList.toggle("active");
  });
});

closeBtn.addEventListener("click", () => {
  detailsDiv.classList.remove("active");
});
