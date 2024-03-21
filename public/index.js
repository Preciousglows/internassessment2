const orgMenu = document.getElementById('org-menu')
const orgBtn = document.getElementById('org-btn')
const hamburgerBtn = document.getElementById('hamburger')
const sideNav = document.getElementById('side-nav')

hamburgerBtn.addEventListener('click', function(){
  if(sideNav.classList.contains('hidden')){
    sideNav.classList.remove('hidden')
 }
 else{
     sideNav.classList.add('hidden')
 }
})

orgBtn.addEventListener('click', function(){
    if(orgMenu.classList.contains('hidden')){
        orgMenu.classList.remove('hidden')
        orgMenu.classList.add('flex') 
     }
     else{
         orgMenu.classList.add('hidden')
     }
})


function toggleMenu(menuNumber) {
  var menu = document.getElementById('menu' + menuNumber);
  if (menu.classList.contains('hidden')) {
      menu.classList.remove('hidden');
  } else {
      menu.classList.add('hidden');
  }
}

