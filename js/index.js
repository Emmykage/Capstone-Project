var menuBtn = document.querySelector('.menu-bar');


function showMenu(){
    // const links = document.querySelector('.links-2');
    // links.style.display = 'block'
    // const displayMenu = document.querySelector('.links-2');
    // displayMenu.style.left = '0%';
    const links = document.querySelector('.links-2');
    const toggle = document.querySelector('.open');

    if(links.style.left === '-100%'){
      links.style.left = '0';
      toggle.classList.add('fa-times');
      toggle.classList.remove('fa-bars')
    }else{
      links.style.left = '-100%';
      toggle.classList.add('fa-bars');
      toggle.classList.remove('fa-times')
    }

}
menuBtn.addEventListener('click',showMenu);



// function showMenu() {
  
//   const link = document.querySelector('nav .links-2');
//   const toggle = document.querySelector('.open');
//   const logo = document.querySelector('.logo a');

//   if (link.style.display === 'block') {
//     link.style.display = 'none';
//     toggle.classList.remove('fa-times');
//     toggle.classList.add('fa-bars');
//     logo.style.display = 'block';
//   } else {
//     link.style.display = 'block';
//     toggle.classList.remove('fa-bars');
//     toggle.classList.add('fa-times');
//     logo.style.display = 'none';
//   }
// }