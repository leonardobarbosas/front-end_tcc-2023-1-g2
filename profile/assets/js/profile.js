'use strict'

import {editPerfil, perfilNormal} from "./functions/functionsProfile.js"

const buttonEdit = document.querySelector('.button_edit')

buttonEdit.addEventListener('click', ()=>{
    editPerfil()
    const buttonReturn = document.querySelector('.button_return')

buttonReturn.addEventListener('click', ()=>{
    perfilNormal()
})
})

