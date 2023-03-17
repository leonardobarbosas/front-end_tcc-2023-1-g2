'use strict'

import { editPerfil, perfilNormal } from "./functions/functionsProfile.js"

const buttonEdit = document.querySelector('.button_edit')

buttonEdit.addEventListener('click', () => {
    if (!document.body.contains(document.querySelector('.button_save'))) {
        editPerfil()
        const buttonReturn = document.querySelector('.button_return')

        buttonReturn.addEventListener('click', () => {
            perfilNormal()


        })
    }
})

