const them = document.getElementById('them')
const article = document.getElementById('article')
const aside = document.getElementById('aside')
const footer = document.getElementById('footer')
them.addEventListener('click', () => {
    article.classList.toggle('dark')
    aside.classList.toggle('dark')
    footer.classList.toggle('dark')
    if(them.innerHTML === 'Light'){
        them.innerHTML = 'Dark'
    }else{
        them.innerHTML = 'Light'
    }
})

var navbar = document.getElementById('nav')
var menuBtn = document.getElementById('menu-btn')
var menu = document.getElementById('menu')

function navMenu(){
   if(window.innerWidth < 665){
      navbar.style.display = 'none'
      menuBtn.style.display = 'block'
      menu.classList.add('done')
   }else{
      navbar.style.display = 'block'
      menuBtn.style.display = 'none'
      menu.style.display = 'none'
   }
  }

menuBtn.addEventListener('click',function(){
   menu.classList.toggle('done')
   menu.classList.toggle('menu')
   this.classList.toggle('menu-btn')
})

window.onload = navMenu()
