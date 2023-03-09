'use strict'

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
