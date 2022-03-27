
//save current theme to localStorage
let theme = localStorage.getItem('theme')

if(theme == null){
    setTheme('light')
}else{
    setTheme(theme)
}

// grab the theme dots and set each of them with their color
let themeDots = document.getElementsByClassName('theme-dot')

for(var i = 0; i < themeDots.length; i++){
    themeDots[i].addEventListener('click', function(){
        let mode = this.dataset.mode
        setTheme(mode)
    })
}

//set color function
function setTheme(mode){
    if(mode == 'light'){
        document.getElementById('theme-style').href = 'style.css'
    }
    if(mode == 'purple'){
        document.getElementById('theme-style').href = 'purple.css'
    }
    if(mode == 'green'){
        document.getElementById('theme-style').href = 'green.css'
    }

    localStorage.setItem('theme', mode)

}

//the check-out-projects button

let topButton = document.querySelector('.top-btn')
topButton.addEventListener('click', function(){
    $('html, body').animate({
        scrollTop: $('#post-section-projects').offset().top
    }, 1500)
})



//the check-out-papers button

let topButton = document.querySelector('.top-btn')
topButton.addEventListener('click', function(){
    $('html, body').animate({
        scrollTop: $('#post-section-papers').offset().top
    }, 1500)
})
