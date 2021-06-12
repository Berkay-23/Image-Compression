const inpFile = document.querySelector("#inpFile"); // Görselin seçildiği component
const previewContainer = document.querySelector(".imagePreview"); // Seçilen görselin yerleşeği konteyner 
const previewImage = previewContainer.querySelector(".image-preview__image"); // Seçilen görsel
const previewDefaultText = previewContainer.querySelector(".image-preview__default-text"); // Görsel yokken konteynerda bulunan yazı
const btnCompress = document.querySelector("#btnImageCompress"); // Sıkıştırma butonu
const slideValue = document.querySelector(".value"); // Kalite scroll barın değeri
const inputSlider = document.querySelector(".range input"); // Kalite scroll barı
const containerOutput = document.getElementById('containerOutput'); // Sıkışmış görselin yerleşeceği konteyner
const alert = document.querySelector(".alert"); // Uyarı Kutusu
const closeButton = document.querySelector(".close-button"); // Uyarı kutusunu kapatma butonu

inpFile.addEventListener("change", ImagePreview); 
btnCompress.addEventListener("click", onClick);
closeButton.addEventListener("click", alertClose);

let image = null;

function ImagePreview() { // Seçilen görselin ilgili konteynera yerleştirilmesini sağlayan fonksiyon

    const file = inpFile.files[0]; // Görüntü 

    if (file) {
        const reader = new FileReader(); // Okuyucu nesnesi

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

function onClick() { // Sıkıştırma butonuna basıldığnda ilgili uyarıları ve medya etiketlerine göre css kodunu çalıştıran fonksiyon

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
        else { // mobile media query

            containerOutput.style.border = "0.2rem solid #062e51";
        }

        alertDataUpload("success"); // Başarı uyarısı
    }
    else {
        alertDataUpload("warning"); // Uyarı uyarısı
    }
}

function alertClose() { // Uyarı metnini gizleyen fonksiyon
    alert.classList.remove("show");
    alert.classList.add("hide");
}

function alertDataUpload(alertType) { // İlgili duruma göre uyarı metnini ve css kodlarını oluşturan/çalıştıran fonksiyon

    let icon = document.querySelector(".fa-exclamation-circle"); // İkon
    let iconCancel = document.querySelector(".fa-times"); // Çarpı İkonu
    let message = document.querySelector(".message"); // Mesaj
    let cancel = closeButton; // Uyarı kutusunu kapatma butonu

    if (alertType == "success") { // Başarı uyarısı ise çalışacak css kodları

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

    else { // Uyarı uyarısı ise çalışacak css kodları
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

const btnGithub = document.querySelector(".wrapper .button:nth-child(1)"); // github butonu
const btnDocument = document.querySelector(".wrapper .button:nth-child(2)"); // google drive butonu
const btnYoutube = document.querySelector(".wrapper .button:nth-child(3)"); // youtube butonu
const btnLinkedin = document.querySelector(".wrapper .button:nth-child(4)"); // linedin butonu

// Alt taraftaki fonksiyonlar butona tıklandığında ilgili linklere yönlendirme yapmkatadır.

btnGithub.addEventListener("click", () => {
    window.open("https://github.com/Berkay-23/Image-Compression",'_blank')
});
btnDocument.addEventListener("click", () => {
    window.open("https://drive.google.com/drive/folders/1bBixGRD9E3VmzUcQqdnSTfgYAVhw_-t7?usp=sharing",'_blank')
});
btnYoutube.addEventListener("click", () => {
    window.open("https://www.youtube.com/watch?v=G-CUlMbi_RI&list=PLVkmv8ZvDX3dpgjncPJrzT1W2ZNc8UeAO",'_blank')
});
btnLinkedin.addEventListener("click", () => {
    window.open("https://www.linkedin.com/in/berkay-%C3%A7avu%C5%9Fo%C4%9Flu-289484202/",'_blank')
});

// ----------------------------------------------------------------