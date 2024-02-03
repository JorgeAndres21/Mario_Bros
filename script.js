const form = document.querySelector('.formularioFaleConosco')
const mask = document.querySelector('.mask')
const btn = document.querySelector('.entreEmContato')

function addMask (){
    form.style.left = '50%'
    form.style.transform = 'translateX(-50%)'
    mask.style.visibility = 'visible'
}


btn.addEventListener('click', addMask)
mask.addEventListener('click', () => {
    form.style.left = '-280px'
    form.style.transform = 'translateX(0%)'
    mask.style.visibility = 'hidden'
})