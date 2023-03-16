'use strict'

//Imports
import {uploadImage} from '../../../firebase/firebaseStorageImage.js'
import { postDriver } from './fetchs/driverFetch.js'

const inputFile = document.getElementById("picture__input")

const pictureImage = document.querySelector(".picture__image")

const pictureImageTxt = ""
pictureImage.innerHTML = pictureImageTxt

const icon = document.getElementById("camera-icon")

let photo

inputFile.addEventListener("change", function (e) {
    const inputTarget = e.target
    photo = inputTarget.files[0]

    if (photo) {
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

        reader.readAsDataURL(photo)
    } else {
        icon.style.display = "block"
        pictureImage.innerHTML = pictureImageTxt
    }
})


let jsonInfoDriver
const buttonForm = document.getElementById('button_form')
buttonForm.addEventListener("click", async () => {
    const rg = document.getElementById('inputRG').value
    const cpf = document.getElementById('inputCpf').value
    const phone = document.getElementById('inputTelephone').value
    const birthDate = document.getElementById('inputBirthDate').value
    const cnh = document.getElementById('inputCnh').value
    const startCareer = document.getElementById('inputStartDate').value

    const productPhoto = document.getElementById('picture__input').files[0]
    const nameImage = document.getElementById('picture__input').files[0].name
    const nameFile = nameImage.replace(' ','-').toLowerCase()
    const urlImage =  await uploadImage(productPhoto, nameFile)
    const photo= {
        name: nameImage,
        url: urlImage
    }
    console.log(photo.url)

    jsonInfoDriver = {
        nome: "leonardo",
        email: "leo@gmail.com",
        rg: rg,
        cpf: cpf,
        cnh: cnh,
        telefone: phone,
        data_nascimento: birthDate,
        inicio_carreira: startCareer,
        senha: "pegadinhadomalandro",
        foto: photo.url,
        avaliacao: 0,
        descricao: "meu nome é leo"
    }

    const uploadDriver = await postDriver(jsonInfoDriver)
    console.log(uploadDriver)

})