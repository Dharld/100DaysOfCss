const highlightedWord = document.querySelector(".quote span");
const meaning = document.querySelector(".definition");

console.log(meaning, highlightedWord);

highlightedWord.addEventListener("mouseenter", () => {
  meaning.classList.remove("not-active");
  meaning.classList.add("active");
});

highlightedWord.addEventListener("mouseleave", () => {
  meaning.classList.add("not-active");
});
