const container = document.querySelector('.container')
const clickImage = document.querySelector('.image-actual')

clickImage.addEventListener('click', () => {
    let width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if(width > 992){
        // APARECER MODAL
        const modal = document.createElement('div');
        modal.classList.add('modal')
        modal.innerHTML = `
            <div class="modal__content">
                <div class="modal__image">
                    <img src="/./assets/images/image-product-1.jpg" alt="" class="image-actual">
                    <div class="modal__close">
                        <img src="/./assets/icons/icon-close.svg" alt="">
                    </div>
                    <div class="arrow-previous">
                        <img src="/./assets/icons/icon-previous.svg" alt="">
                    </div>
                    <div class="arrow-next">
                        <img src="/./assets/icons/icon-next.svg" alt="">
                    </div>
                </div>
                <div class="images-thumbnail">
                    <div class="image-thumbnail active">
                        <img src="/./assets/images/image-product-1-thumbnail.jpg" alt="" data-number="0">
                    </div>
                    <div class="image-thumbnail">
                        <img src="/./assets/images/image-product-2-thumbnail.jpg" alt="" data-number="1">
                    </div>
                    <div class="image-thumbnail">
                        <img src="/./assets/images/image-product-3-thumbnail.jpg" alt="" data-number="2">
                    </div>
                    <div class="image-thumbnail">
                        <img src="/./assets/images/image-product-4-thumbnail.jpg" alt="" data-number="3">
                    </div>
                </div>
            </div>`
        container.appendChild(modal)
        // REMOVER MODAL
        const closeModal = document.querySelector('.modal__close')
        closeModal.addEventListener('click', () => container.removeChild(modal))
        

        // TROCAR IMAGEM
        const arrowNext = document.querySelector('.modal__image .arrow-next')
        const arrowPrevious = document.querySelector('.modal__image .arrow-previous')

        let current = 0;
        const changeImage = () =>{
            current === 4? current = 0 : current === -1? current = 3:''
             
            const imageMainActual = document.querySelectorAll('.image-actual')
            .forEach((imagesMain) =>{

                imagesMain.src = data.images[current].imageMain;

                const changeImageThumbnail = () =>{        
                    const removeBorderImage = () => {
                        document.querySelectorAll('.image-thumbnail').forEach((items) =>{
                            items.classList.remove('active')
                        }) 
                    }
                    const addBorderImage = () =>{
                        const imageModalThumbnailActual = document.querySelectorAll('.modal .image-thumbnail')
                        const imageProductThumbnailActual = document.querySelectorAll('.product .image-thumbnail')

                        imageModalThumbnailActual[current].classList.add('active')
                        imageProductThumbnailActual[current].classList.add('active')
                    }

                    removeBorderImage();
                    addBorderImage();
                }

                changeImageThumbnail();
            })
        }
        
        arrowNext.addEventListener('click', () =>{
            current++
            changeImage();
        })
        arrowPrevious.addEventListener('click', () =>{
            current--
            changeImage();
        })

        document.querySelectorAll('.modal .image-thumbnail')
        .forEach((items) => items.addEventListener('click', (item) =>{
            let tapTheThumbnail = item.target.getAttribute('data-number')
            if(current != tapTheThumbnail){
                current = tapTheThumbnail;
                changeImage();
            } 
        }))
        
    }
})  


