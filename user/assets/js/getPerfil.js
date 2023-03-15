'use strict'

const perfil = document.querySelector('.account')

function cardPerfil(){
    perfil.classList.toggle('show')
}

perfil.addEventListener('click', cardPerfil)

