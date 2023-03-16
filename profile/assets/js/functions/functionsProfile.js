'use strict'

const buttonReturn = document.querySelector('.button_van')
const inputPicture = document.querySelector('.inpuct-picture-container')
const picture = document.querySelector('.picture')
const buttonSave = document.querySelector('.button_edit')

const editPerfil = ()=>{

    

    
    buttonReturn.classList.add('button_return')
    buttonReturn.textContent = "Voltar"

    
    const inputForPicture = document.createElement('input')
    inputForPicture.type = 'file'
    inputForPicture.name = 'picture__input'
    inputForPicture.id = 'picture__input'
    
    inputPicture.appendChild(inputForPicture)

    
    const i = document.createElement('i')
    i.classList.add('fa')
    i.classList.add('fa-camera')
    i.id = 'camera-icon'

    picture.appendChild(i)

    
    buttonSave.classList.add('button_save')
    buttonSave.textContent = "Salvar"

}

const perfilNormal = ()=>{
    buttonReturn.classList.add('button_van')
    buttonReturn.textContent = "Ver van"

    document.getElementById('picture__input').remove()

    picture.removeChild(document.getElementById('camera-icon'))


    buttonSave.classList.add('button_edit')
    buttonSave.textContent = "Editar"
}

/* 
    <i class="fa fa-camera" id="camera-icon"></i>
<input type="file" name="picture__input" id="picture__input">
*/

export {
    editPerfil,
    perfilNormal
}