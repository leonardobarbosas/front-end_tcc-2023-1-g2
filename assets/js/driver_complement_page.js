'use strict'

const inputFile = document.getElementById("picture__input")
const pictureImage = document.querySelector(".picture__image")
const pictureImageTxt = ""
const icon = document.getElementById("camera-icon")
pictureImage.innerHTML = pictureImageTxt

inputFile.addEventListener("change", function (e) {
    const inputTarget = e.target
    const file = inputTarget.files[0]

    if (file) {
            const reader = new FileReader()

        reader.addEventListener("load", function (e) {
            const readerTarget = e.target

            const img = document.createElement("img")
            img.src = readerTarget.result
            img.classList.add("picture__img")

            pictureImage.innerHTML = ""
            icon.style.display = "none"
            pictureImage.appendChild(img)
        })

        reader.readAsDataURL(file)
    } else {
        icon.style.display = "block"
        pictureImage.innerHTML = pictureImageTxt;
    }
})


