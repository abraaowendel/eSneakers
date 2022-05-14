const container = document.querySelector('.container')
const clickImage = document.querySelector('.image-actual')
clickImage.addEventListener('click', () => {
    var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
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
                        <img src="/./assets/images/image-product-1-thumbnail.jpg" alt="">
                    </div>
                    <div class="image-thumbnail">
                        <img src="/./assets/images/image-product-2-thumbnail.jpg" alt="">
                    </div>
                    <div class="image-thumbnail">
                        <img src="/./assets/images/image-product-3-thumbnail.jpg" alt="">
                    </div>
                    <div class="image-thumbnail">
                        <img src="/./assets/images/image-product-4-thumbnail.jpg" alt="">
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
            if(current === 4){
                current = 0;
            }
            else if (current === -1){
                current = 3;
            }

            const imageMainActual = document.querySelectorAll('.image-actual').forEach((imagesMain) =>{
                imagesMain.src = data[current].imageMain;

                const imageModalThumbnailActual = document.querySelectorAll('.modal .image-thumbnail')
                const imageProductThumbnailActual = document.querySelectorAll('.product .image-thumbnail')

                document.querySelectorAll('.image-thumbnail').forEach((items) =>{
                    items.classList.remove('active')
                })
                    
                imageModalThumbnailActual[current].classList.add('active')
                imageProductThumbnailActual[current].classList.add('active')

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
    }
})  


