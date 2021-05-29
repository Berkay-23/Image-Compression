const inpFile = document.querySelector("#inpFile");
const previewContainer = document.querySelector(".imagePreview");
const previewImage = previewContainer.querySelector(".image-preview__image");
const previewDefaultText = previewContainer.querySelector(".image-preview__default-text");
const btnPreview = document.querySelector("#btnImagePreview");

// btnPreview.addEventListener("click", ImagePreview); // Click-on button
inpFile.addEventListener("change", ImagePreview); // Change-on input

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
}