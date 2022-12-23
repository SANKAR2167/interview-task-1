// active and remove active
const navLink = document.querySelectorAll('.nav_link')
navLink.forEach(n => n.classList.remove('active'))

function linkAction() {
      navLink.forEach(n => n.classList.remove('active'))
      this.classList.add('active')

      const navMenu = document.getElementById('nav_menu')
      navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction))


// show & hide password
let password = document.getElementById('fakePassword');  
    let toggler = document.getElementById('toggler');  
    showHidePassword = () => {  
     if (password.type == 'password') {  
      password.setAttribute('type', 'text');  
      toggler.classList.add('fa-eye');  
     } else {  
      toggler.classList.remove('fa-eye');  
      password.setAttribute('type', 'password');  
     }  
    };  
    toggler.addEventListener('click', showHidePassword);  