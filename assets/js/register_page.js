'use strict'

const inputName = document.getElementById('name')
const inputEmail = document.getElementById('email').value
const inputPassword = document.getElementById('password').value

const buttonForm = document.getElementById('button_form')
buttonForm.addEventListener('click', () => {
    const url = 'http://127.0.0.1:5500/pages/choose_page.html'
    document.location.href = url
})
