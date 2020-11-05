



window.addEventListener('load', () => document.querySelector('.preloader').classList.add('hidePreloader'))

const togglerr = document.querySelector('.toggle')
const navbar = document.querySelector('.collapse-nav')
// const open = document.querySelector('.open-nav')

togglerr.addEventListener('click',function(){
    // console.log('heyy');
    navbar.classList.toggle('open-nav')
})

const navItem = document.querySelectorAll('.nav-item')


navItem.forEach(function (link) {
    link.addEventListener("click", function () {
      navbar.classList.remove("open-nav");
    //   console.log('link')
    });
  });
  

 