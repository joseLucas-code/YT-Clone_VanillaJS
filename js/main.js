
// menu open/close

const openBtn = document.querySelector('.openBtn')
const closeBtn = document.querySelector('.closeBtn')
const menuSideBar = document.querySelector('.secondary-aside-menu')
const blackBG = document.querySelector('.black-bg')

openBtn.addEventListener('click', function(){
    menuSideBar.classList.add('open-menu')
    blackBG.classList.add('visible-bg')
    document.body.classList.add('overflow-hidden')
})
closeBtn.addEventListener('click', function(){
    menuSideBar.classList.remove('open-menu')
    blackBG.classList.remove('visible-bg')
    document.body.classList.remove('overflow-hidden')


})

// search mobile open/close

const searchMobile = document.querySelector('.search-mobile')
const openSearchBtn = document.querySelector('.js-search-open')
const closeSearchBtn = document.querySelector('.search-mobile i')

openSearchBtn.addEventListener('click', ()=>{
    searchMobile.classList.add('open-search-mobile')
    blackBG.classList.add('visible-bg')
    document.body.classList.add('overflow-hidden')
})

closeSearchBtn.addEventListener('click', ()=>{
    searchMobile.classList.remove('open-search-mobile')
    blackBG.classList.remove('visible-bg')
    document.body.classList.remove('overflow-hidden')
})

// hidden main header

 const mainHeader = document.querySelector('header.main-header')

 window.addEventListener('mousewheel', (e)=>{
    //  mainHeader.classList.add("hidden-header")

    if(e.deltaY > 0){
        mainHeader.classList.add('hidden-header')
        if(document.body.classList.contains('overflow-hidden') || document.body.clientWidth > 768){
            mainHeader.classList.remove('hidden-header')
        }
    }else{
        mainHeader.classList.remove('hidden-header')

    }
 })

// user menu open/close

const appsBtn = document.querySelector('.js-apps');
const appsBox = document.querySelector('.apps-box');
const notificationBtn = document.querySelector('.js-notification');
const notificationBox = document.querySelector('.notification-box');
const userBtn = document.querySelector('.user-perfil');
const userBox = document.querySelector('.user-perfil-box');

const themeMenu = document.querySelector('.theme-menu')
const themeBtn = document.querySelector('.js-theme-menu');
const closeThemeBtn = document.querySelector('.js-close-theme')

appsBtn.addEventListener('click', ()=>{
    appsBox.classList.toggle('open-apps')
    notificationBox.classList.remove('open-notification')
    userBox.classList.remove('open-user-perfil-box')
})

notificationBtn.addEventListener('click', ()=>{
    notificationBox.classList.toggle('open-notification')
    appsBox.classList.remove('open-apps')
    userBox.classList.remove('open-user-perfil-box')
})

userBtn.addEventListener('click', ()=>{
    userBox.classList.toggle('open-user-perfil-box')
    notificationBox.classList.remove('open-notification')
    appsBox.classList.remove('open-apps')
})

themeBtn.addEventListener('click', ()=>{
    themeMenu.classList.add('open-theme-menu')
})

closeThemeBtn.addEventListener('click', ()=>{
    themeMenu.classList.remove('open-theme-menu')
})

// theme change light/dark
const allThemeOptions = document.querySelectorAll('.theme-options-single')
const iconThemeOptions = document.querySelectorAll('.js-check-icon')

allThemeOptions.forEach((theme,themeIndex) => theme.addEventListener('click', function(){
    theme.id === "light" ? themeChange.light() : themeChange.dark()

    if(theme.id === "light"){
        themeChange.light()
        iconThemeOptions[0].classList.add('active')
        iconThemeOptions[1].classList.remove('active')
    }else{
        themeChange.dark()
        iconThemeOptions[0].classList.remove('active')
        iconThemeOptions[1].classList.add('active')
    }
}))
const themeChange = {
    light(){
        localStorage.setItem('theme', 'light');
        this.update();
    },
    dark(){
        localStorage.setItem('theme', 'dark');
        this.update();
    },
    update(){
        if(localStorage.theme === 'dark'){
            document.body.classList.add('dark')
            iconThemeOptions[1].classList.add('active')
            iconThemeOptions[0].classList.remove('active')
        }else{
            document.body.classList.remove('dark')
            iconThemeOptions[1].classList.remove('active')
        }

        // userBox.classList.remove('open-user-perfil-box')
        // themeMenu.classList.remove('open-theme-menu')
    }
}

// grid Videos Create
const gridVideosContent = document.querySelector('.grid-videos'); 

let totalVideos = Array.from({length: 50})

function addMoreVideos(){
    
    for(let i in totalVideos){
        let min = parseInt(Math.random() * 59)
        let sec = parseInt(Math.random() * 59)
        let hr = parseInt(Math.random() * 24)
        gridVideosContent.innerHTML += `
        <div class="video-box-wrapper">
            <div class="box-video">
                <div class="video-duration">
                    <span class="min">${min}</span>:<span class="sec">${sec < 10 ? "0" + sec : sec}</span>
                </div>
            </div>
                
            <div class="video-perfil"></div>

            <div class="description-box">
                <h4 class="video-title">Lorem ipsum dolor sit amet consectetur adipisicing.</h4>
                <p class="video-channel">Lorem ipsum</p>
                <p class="video-views">40 mil visualizações °</p>
                <p class="video-postage">há ${hr == 0 ? hr + 2 : hr} horas</p>
            </div>
        </div>
        `
    }
    
}

window.onload = function(){
    addMoreVideos()
    themeChange.update()
}



