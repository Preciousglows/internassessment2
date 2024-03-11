const menu = document.getElementById('menu')
const kebab = document.getElementById('kebab')

document.addEventListener('click', function(){
    if(menu.classList.contains('hidden')){
       menu.classList.remove('hidden') 
    }
    else{
        menu.classList.add('hidden')
    }
})