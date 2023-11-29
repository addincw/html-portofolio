class CopyToClipboard {
  enable() {
    const BtnCopies = document.querySelectorAll(".btn-copy");
    BtnCopies.forEach((BtnCopy) => {
      BtnCopy.addEventListener("click", function () {
        const copy = this.dataset?.copy ?? "";

        navigator.clipboard.writeText(copy);
        alert("Copied");
      });
    });
  }
}

export default CopyToClipboard;
