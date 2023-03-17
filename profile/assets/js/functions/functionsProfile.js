'use strict'

const buttonReturn = document.querySelector('.button_van')
const inputPicture = document.querySelector('.inpuct-picture-container')
const picture = document.querySelector('.picture')
const buttonSave = document.querySelector('.button_edit')

const editPerfil = ()=>{

    

    if(buttonReturn.classList.value == 'button_van'){
        buttonReturn.classList.remove('button_van')
    }    
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

    
    const pictureImage = document.createElement('span')
    pictureImage.classList.add('picture__image')

    picture.appendChild(pictureImage)

    if(buttonSave.classList.value == 'button_edit'){
        buttonSave.classList.remove('button_edit')
    }
    buttonSave.classList.add('button_save')
    buttonSave.textContent = "Salvar"

    let photo
    inputForPicture.addEventListener('change', (e)=>{
        const inputTarget = e.target
        photo = inputTarget.files[0]

        if(photo){
            const reader = new FileReader()

            reader.addEventListener('load', (e)=>{
                const readerTarget = e.target

                const img = document.createElement('img')
                img.src = readerTarget.result
                img.classList.add('picture__img')

                picture
            })
        }
    })

}

const perfilNormal = ()=>{
    buttonReturn.classList.remove('button_return')
    buttonReturn.classList.add('button_van')
    buttonReturn.textContent = "Ver van"

    document.getElementById('picture__input').remove()

    picture.removeChild(document.getElementById('camera-icon'))

    buttonSave.classList.remove('button_save')
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