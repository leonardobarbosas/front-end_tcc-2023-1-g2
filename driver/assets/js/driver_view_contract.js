'use strict'

const buttonCancel = document.getElementById('button_cancel')
const modal = document.getElementById('modal_box')
const buttonYes = document.getElementById('button_yes')
const buttonNo = document.getElementById('button_no')

buttonCancel.addEventListener('click', async () => {
    modal.style.display = 'block'
})

buttonYes.addEventListener('click', async () => {
    modal.style.display = 'none'
})

buttonNo.addEventListener('click', async () => {
    modal.style.display = 'none'
})

window.onclick = (event) => {
    if (event.target == modal) {
        modal.style.display = 'none'
    }
}
