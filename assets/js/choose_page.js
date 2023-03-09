'use strict'

const goBackButton = document.getElementById('go_back_button')
goBackButton.addEventListener('click', () => {
    const url = 'http://127.0.0.1:5500/pages/register_page.html'
    document.location.href = url
})

const userButton = document.getElementById('usuario')
userButton.addEventListener('click', () => {
    const url = 'http://127.0.0.1:5500/index.html'
    document.location.href = url
})

const driverButton = document.getElementById('motorista')
driverButton.addEventListener('click', () => {
    const url = 'http://127.0.0.1:5500/pages/driver_complement_page.html'
    document.location.href = url
})
