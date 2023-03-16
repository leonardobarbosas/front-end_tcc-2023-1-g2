"use strict"

const containerTest = document.querySelector('.header_responsive_container')
const header = document.querySelector('#header-responsive')

console.log(header)

window.addEventListener('resize', () => {
    if (window.innerWidth <= 414) {

        // VOCE VAI TER Q APAGAR O HEADER 
        // DEPOIS CRIAR ELE NO CONTAINER TEST

        header.remove()
        containerTest.appendChild(header)
        console.log('teste')
    }
})