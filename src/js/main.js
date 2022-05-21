
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

// CARRINHO

let quant = 1;
let price = 125;
let itemOrItem;
let priceTotal = 0;
let amountCart = 0;
let cartClick = document.querySelector('.cart')

cartClick.addEventListener('click', () =>{
    cart();
})
const cart = () => {
    calculatePrice();
    formatItemOrItens();
    removeModalCart();
    createModalCart();
    
    const haveProducts = document.querySelector('.cart__checkout-products')
    const noHaveProducts = document.querySelector('.cart__checkout-empty')
    const removeItem = document.querySelector('.cart__checkout-delete')
    removeItem.addEventListener('click', () =>{
        amountCart--
        smallCart();
        cart();
    })

    if(amountCart === 0){
        haveProducts.style.display = 'none';
        noHaveProducts.style.display = 'flex';
    }
    else{
        haveProducts.style.display = 'flex';
        noHaveProducts.style.display = 'none';
    }

    const closeModal = document.querySelector('.close__cart')
    closeModal.addEventListener('click', removeModalCart)
}

const createModalCart = () => {
    const header = document.querySelector('header')
    const modalCart = document.createElement('div')  
    modalCart.classList.add('cart__checkout')
    modalCart.innerHTML = `
    <div class="cart__checkout-content">
        <div class="cart__checkout-settings">
            <div class="cart__checkout-name">Carrinho de compras</div>
            <div class="close__cart">
                <img src="./assets/icons/icon-close.svg" alt="">
            </div>
        </div>
        <div class="cart__checkout-products">
            <div class="cart__checkout-product">
                <div class="cart__product-about">
                    <div class="cart__product-image">
                        <img src="./assets/images/image-product-1-thumbnail.jpg" alt="">
                    </div>
                    <div class="cart__product-descriptions">
                        <div class="cart__product-name">eSneakers de edição limitada</div>
                    </div>
                    <div class="cart__checkout-delete">
                        <img src="./assets/icons/icon-delete.svg" alt="">
                    </div>
                </div>
                <div class="cart__product-values">
                    <div class="cart__product-amount">Subtotal (${amountCart} ${itemOrItem}): </div>
                    <div class="cart__product-value">R$ ${priceTotal},00</div>
                </div> 
            </div>
            <div class="cart__finalize-order">Finalizar Pedido</div>
        </div>
        <div class="cart__checkout-empty">
            Seu carrinho está vazio.
        </div>
    </div>`
    header.appendChild(modalCart)
}

const removeModalCart = () => {
    const modalCart = document.querySelector('.cart__checkout')
    const header = document.querySelector('header');
    if(modalCart){
        header.removeChild(modalCart)
    }
}

// ADICIONAR E REMOVER NO CARRINHO, AUMENTAR E DIMINUIR QUANTIDADE
const btnUpAmount = document.querySelector('.product__add-cart--btnUp')
const btnDownAmount = document.querySelector('.product__add-cart--btnDown')

btnUpAmount.addEventListener('click', () =>{
    quant++
    updateQuantity();
})
btnDownAmount.addEventListener('click', () =>{
    if(quant > 1){
        quant--
    }
    updateQuantity();
})

const addToCart = document.querySelector('.product__add-cart--button')
addToCart.addEventListener('click', () => {
   amountCart = amountCart + quant;
   smallCart();
   cart();
})

const updateQuantity = () => document.querySelector('.product__add-cart--amount').innerHTML = quant;
const formatItemOrItens =  () => amountCart === 1 ? itemOrItem = 'Item':  itemOrItem = `Itens`;

const calculatePrice = () => priceTotal = amountCart * price;
const smallCart = () => document.querySelector('#cart__amount').innerHTML = amountCart ; 
