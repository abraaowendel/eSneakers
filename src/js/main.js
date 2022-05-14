const menuMobile = document.querySelector('.menu__mobile')
const menuToggle = document.querySelector('.menu')

menuMobile.addEventListener('click', () =>{
    menuMobile.classList.toggle('active')
    menuToggle.classList.toggle('active')
})
menuToggle.querySelectorAll('li').forEach((item) => item.addEventListener('click', () =>{
    menuMobile.classList.remove('active')
    menuToggle.classList.remove('active')
}))