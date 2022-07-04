import React from "react";
import "../../../src/assets/scss/theme/elements/_modal.scss";

window.addEventListener("click", function (e) {
  if (e.target.hasAttribute("data-copy")) {
  console.log(e.target.getAttribute("data-copy"));
    var textarea = document.createElement("textarea");
    textarea.value = e.target.getAttribute("data-copy");
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    e.preventDefault();
    this.alert("Copied successfully")
  }
});

function Modal({ setOpenModal }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title" >
          <h1 className="text-color-primary">Donate</h1>
        </div>
        
        <div className="body">
          <p>~ Ergo: 9gMnqf29LPxos2Lk5Lt6SkTmbWYL1d5QFHygbf6zRXDgL4KtAho</p><a href="https://explorer.ergoplatform.com/en/addresses/9gMnqf29LPxos2Lk5Lt6SkTmbWYL1d5QFHygbf6zRXDgL4KtAho">Explorer</a><a href={() => false} data-copy="9gMnqf29LPxos2Lk5Lt6SkTmbWYL1d5QFHygbf6zRXDgL4KtAho">copy</a>
        </div>

          <div className="body">
          <p>~ Monero: 82pTXa9pXyee7Ft81sGnK8c6XK3qKf2FzWbgUFrPJGdART4krBcsXkCKeBX5TQRxBr9ryhdPyHa5wGBr37Em2SSgP4u9MmH </p><a href={() => false} data-copy="82pTXa9pXyee7Ft81sGnK8c6XK3qKf2FzWbgUFrPJGdART4krBcsXkCKeBX5TQRxBr9ryhdPyHa5wGBr37Em2SSgP4u9MmH">copy</a>
        </div>

        <div className="body">
          <p>~ Bitcoin: bc1qcn833ty7fhp84ed22kvateckq08ffhp627q3us</p> <a href="https://mempool.space/address/bc1qcn833ty7fhp84ed22kvateckq08ffhp627q3us">Explorer</a><a href={() => false} data-copy="bc1qcn833ty7fhp84ed22kvateckq08ffhp627q3us">copy</a>

        </div>
        <div className="footer">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;