'use strict'

/* import { getEmail, getName, getUidPassword} from "../../firebase/firebaseGoogleLoginRegister.js" */

const buttonForm = document.getElementById('button_form')

buttonForm.addEventListener('click', () => {
    const inputName = document.getElementById('name').value
    const inputEmail = document.getElementById('email').value
    const inputPassword = document.getElementById('password').value

    localStorage.setItem('name', inputName)
    localStorage.setItem('email', inputEmail)
    localStorage.setItem('password', inputPassword)

    const url = 'http://127.0.0.1:5500/pages/choose_page.html'
    document.location.href = url
})

const buttonGoogleRegister = document.getElementById('button-register-google')
/* 
let nome
let email
let senha

buttonGoogleRegister.addEventListener('click', async() => {
    nome = await getName()
    email = await getEmail()
    senha = await getUidPassword()
})

 */
