document
  .getElementById("inputSvg")
  .addEventListener("change", handleFileSelect);

function handleFileSelect(event) {
  const file = event.target.files[0];
  const reader = new FileReader();

  reader.onload = function (e) {
    const svgContent = e.target.result;
    const codePreview = document.querySelector(".code-preview");
    codePreview.textContent = svgContent;
  };

  reader.readAsText(file);
}
