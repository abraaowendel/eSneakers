
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

const imagesThumbnail = document.querySelectorAll('.product .image-thumbnail').forEach((items) => 
items.addEventListener('click', (item) =>{
    const imageTouch = item.currentTarget.getAttribute('data-number')
    removeBorderImage();
    addBorderImage(imageTouch);
}))

const changeImages = () => {
    if(current == 4){
        current = 0;
    }
    else if(current == -1){
        current = 3;
    }
    let imageMainActual = document.querySelectorAll('.image-actual')
    imageMainActual.forEach((imageMain) =>{
        imageMain.src = data.images[current].imageMain
    })

}

const addBorderImage = (n) =>{
    const imagesThumbnail = document.querySelectorAll('.image-thumbnail')
    imagesThumbnail[n].classList.add('active')
    current = n;
    changeImages()
}

const removeBorderImage = () =>{
    const imagesThumbnail = document.querySelectorAll('.image-thumbnail')
    imagesThumbnail.forEach((imageThumbnail) =>{
        imageThumbnail.classList.remove('active')
    })
}

let current = 0
const next = document.querySelector('.product .arrow-next')
const previous = document.querySelector('.product .arrow-previous')

next.addEventListener('click', () => {
    current++ 
    changeImages()
})

previous.addEventListener('click', () => {
    current-- 
    changeImages()
})
