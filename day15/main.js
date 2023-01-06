const inputElem = document.querySelector("input");
const fileName = document.querySelector(".filename");
const img = document.querySelector(".content img");
const uploadButton = document.querySelector(".upload-btn");
const bar = document.querySelector(".bar");
const dropZone = document.querySelector(".dropzone");
const syncImg = document.querySelector(".syncing");
const doneImg = document.querySelector(".done");

let selectedFile;

inputElem.addEventListener("change", handleFile);
uploadButton.addEventListener("click", uploadFile);

function handleFile() {
  selectedFile = this.files[0];
  fileName.textContent = selectedFile.name;
  img.style.opacity = 0;
}

function uploadFile() {
  const start = Date.now();
  let id;
  let width = 1;
  const uploadTime = 5000;
  if (selectedFile) {
    id = setInterval(frame, uploadTime / 100);
  }
  function frame() {
    if (width >= 100) {
      syncImg.classList.remove("active");
      doneImg.classList.add("active");
      uploadButton.textContent = "Done";
      uploadButton.removeEventListener("click", uploadFile);
      clearInterval(id);
    } else {
      dropZone.style.opacity = "0";
      syncImg.classList.add("active");
      width++;
      bar.style.width = width + "%";
    }
  }
}
