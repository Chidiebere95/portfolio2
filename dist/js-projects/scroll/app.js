const linksContainer=document.querySelector('.links-container');
const links=document.querySelector('.links');
const navbarToggle=document.querySelector('.nav-toggle');

navbarToggle.addEventListener('click',function(){
    //console.log('shajes')

    const linksHeight=links.getBoundingClientRect().height;
    const linksContainerHeight=linksContainer.getBoundingClientRect().height;


    if(linksContainerHeight===0){
        linksContainer.style.height=`${linksHeight}px`
    }
    else{
        linksContainer.style.height=0}




    //    if (linksContainer.classList.contains('show-links')){
    //        linksContainer.classList.remove('show-links')
    //    }
    //    else{
    //            linksContainer.classList.add('show-links')
    //    }

})

const navbar=document.getElementById('nav');
const topLinkBtn=document.querySelector('.top-link');
window.addEventListener('scroll',function(){

    let scrollHeight=window.pageYOffset;
    let navHeight=navbar.getBoundingClientRect().height;
    //    console.log(scrollHeight)

    if(scrollHeight>navHeight){
        navbar.classList.add('fixed-nav')
    }
    else{
        navbar.classList.remove('fixed-nav')

    }

    if(scrollHeight>500){
        topLinkBtn.classList.add('show-link')
    }
    else{
        topLinkBtn.classList.remove('show-link')

    }


})
// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    // prevent default
    e.preventDefault();
    // navigate to specific spot
    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);

    const navHeight = navbar.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const fixedNav = navbar.classList.contains("fixed-nav");
    let position = element.offsetTop -navHeight;

//    if (!fixedNav) {
//      position = position - navHeight;
//    }
    if (navHeight > 82) {
      position = position + containerHeight;
    }

    window.scrollTo({
      left: 0,
      top: position,
    });
    // close
    linksContainer.style.height = 0;
  });
});
// calculate heights



















