var toggleMenu = document.querySelector('.toggle-menu')
var toggleExit = document.querySelector('.toggle-menu-exit')
var mainMenuUl = document.querySelector('.header-menu')
var overlay = document.querySelector('.overlay')
var titles = document.querySelectorAll('.title')
var subMenuServices = document.querySelectorAll('.sub-menu-services')
var subMenuPHoto = document.querySelector('.sub-menu-photo')
var body = document.querySelector('body')


function toggleHandle() {
    toggleMenu.addEventListener('click', function () {
        // show toggle exit
        toggleMenu.style.display = 'none'
        toggleExit.style.display = 'block'
        mainMenuUl.style.display = 'block'
        overlay.style.display = 'block'
        body.setAttribute('style', 'overflow: hidden')

    })

    toggleExit.addEventListener('click', () => {
        // show toggle menu
        toggleMenu.style.display = 'block'
        toggleExit.style.display = 'none'
        mainMenuUl.style.display = 'none'
        overlay.style.display = 'none'
        body.removeAttribute('style')
    })

    overlay.addEventListener('click', () => {
        // show toggle menu
        toggleMenu.style.display = 'block'
        toggleExit.style.display = 'none'
        mainMenuUl.style.display = 'none'
        overlay.style.display = 'none'
    })
}
toggleHandle()



function photoEdit() {
    titles.forEach((title, index) => {
        title.addEventListener('click', (e) => {
            e.preventDefault()
            
            // Check screen width
            if (window.innerWidth < 1439) {
                if (subMenuServices[index].style.display === 'block') {
                    subMenuServices[index].style.display = 'none';
                } else {
                    subMenuServices[index].style.display = 'block';
                }
            }
        })

    })
}
photoEdit()



// show Image photo responsive
function showImagesRes() {
    var showImgPhotoRes = document.querySelector('.show-img-mobile');
    var itemFirst = document.querySelector('.item-first')
    var itemSecond = document.querySelector('.item-second')
    var itemThird = document.querySelector('.item-third')
    var itemFourth = document.querySelector('.item-fourth')


    // Event click
    itemFirst.addEventListener('click', function () {
        showImgPhotoRes.src = './assets/img/photo/photo-img_1.png'
    })

    itemSecond.addEventListener('click', function () {
        showImgPhotoRes.src = './assets/img/photo/photo-img_2.png'
    })

    itemThird.addEventListener('click', function () {
        showImgPhotoRes.src = './assets/img/photo/photo-img_3.png'
    })

    itemFourth.addEventListener('click', function () {
        showImgPhotoRes.src = './assets/img/photo/photo-img_4.png'
    })
}
showImagesRes();

