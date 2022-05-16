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

        let current = document.querySelector('.product .image-thumbnail.active').getAttribute('data-number')
        
        // ESSA FUNÇÃO ADICIONA BORDA NA MINIATURA ATUAL
        const addBorderImage = (c) =>{
            const imagesModalThumbnail = document.querySelectorAll('.modal .image-thumbnail')
            const imagesThumbnail = document.querySelectorAll('.product .image-thumbnail')
            imagesThumbnail[c].classList.add('active')
            imagesModalThumbnail[c].classList.add('active')
        }

        // ESSA FUNÇÃO REMOVE TODAS AS BORDAS DOS ELEMENTOS EM MINIATURA
        const removeBorderImage = () =>{
            const imagesThumbnail = document.querySelectorAll('.image-thumbnail')
            imagesThumbnail.forEach((imageThumbnail) =>{
                imageThumbnail.classList.remove('active')
            })
        }

        // ESSA FUNÇÃO MUDA A IMAGEM BASEADA NO VALOR DO CURRENT
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
            removeBorderImage();
            addBorderImage(current)
        }

        changeImages();

        // MUDAR IMAGEM A PARTIR DE TOQUE NAS SETAS
        const previousModal = document.querySelector('.modal .arrow-previous')
        const nextModal = document.querySelector('.modal .arrow-next')
        
        nextModal.addEventListener('click', () => {
                current++ 
                changeImages(current)
        })
        
        previousModal.addEventListener('click', () => {
            current-- 
            changeImages(current)
        }) 
    }
})