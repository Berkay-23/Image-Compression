const inpFile = document.querySelector("#inpFile");
const previewContainer = document.querySelector(".imagePreview");
const previewImage = previewContainer.querySelector(".image-preview__image");
const previewDefaultText = previewContainer.querySelector(".image-preview__default-text");
const btnCompress = document.querySelector("#btnImageCompress");
const slideValue = document.querySelector(".value");
const inputSlider = document.querySelector(".range input");
const containerOutput = document.getElementById('containerOutput');
const alert = document.querySelector(".alert");
const closeButton = document.querySelector(".close-button");

inpFile.addEventListener("change", ImagePreview);
btnCompress.addEventListener("click", onClick);
closeButton.addEventListener("click", alertClose);

let image = null;

function ImagePreview() {

    const file = inpFile.files[0];

    if (file) {
        const reader = new FileReader();

        previewDefaultText.style.display = "none";
        previewImage.style.display = "block";

        reader.addEventListener("load", function () {
            previewImage.setAttribute("src", this.result);
        });

        reader.readAsDataURL(file);
    } else {
        previewDefaultText.style.display = null;
        previewImage.style.display = null;
        previewImage.setAttribute("src", "")
    }

    image = inpFile.files[0];
}

inputSlider.oninput = (() => {
    let value = inputSlider.value;
    slideValue.textContent = value;
});

function onClick() {

    if (file) {

        if (window.innerWidth > 1272) { // Global media query

            containerOutput.style.border = "5px solid #062e51";
        }
        else if (window.innerWidth <= 1272 && window.innerWidth > 768) { // Big tablet media query

            containerOutput.style.border = "0.2rem solid #062e51";
        }
        else if (window.innerWidth <= 768 && window.innerWidth > 500) { // tablet media query

            containerOutput.style.border = "0.2rem solid #062e51";
        }
        else { // phone media query

            containerOutput.style.border = "0.2rem solid #062e51";
        }

        alertDataUpload("success");
    }
    else {
        alertDataUpload("warning");
    }
}

function alertClose() {
    alert.classList.remove("show");
    alert.classList.add("hide");
}

function alertDataUpload(alertType) {

    let icon = document.querySelector(".fa-exclamation-circle");
    let iconCancel = document.querySelector(".fa-times");
    let message = document.querySelector(".message");
    let cancel = closeButton;

    if (alertType == "success") {

        icon.style.visibility = "hidden";

        alert.style.background = "#82E0AA";
        alert.style.borderLeft = "8px solid #27AE60";

        message.textContent = "Sıkıştırma işlemi başarılı";
        message.style.color = "#1E8449";

        cancel.style.background = "#58D68D";
        iconCancel.style.color = "#229954";

        alert.classList.remove("default");
        alert.classList.remove("hide");
        alert.classList.add("show");
    }

    else {
        icon.style.visibility = "visible";

        alert.style.background = "#ffdb9b";
        alert.style.borderLeft = "8px solid #ffc107";

        message.textContent = "Henüz bir görüntü seçmediniz.";
        message.style.color = "#ce8500";

        cancel.style.background = "#ffc776";
        iconCancel.style.color = "#ce8500";

        alert.classList.remove("default");
        alert.classList.remove("hide");
        alert.classList.add("show");
    }

    alert.classList.remove("default");
    alert.classList.remove("hide");
    alert.classList.add("show");

    setTimeout(function () {
        alertClose();
    }, 3000);
}