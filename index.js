const nav = document.querySelector("nav");
const topOfNav = nav.offsetTop

function fixNav(e){
    document.body.style.paddingTop = nav.offsetHeight +"px";
    if(window.scrollY >= topOfNav){
        document.body.classList.add("fixed")
        
    }else{
        document.body.style.paddingTop = 0;
        document.body.classList.remove("fixed")
    }
  
}

window.addEventListener("scroll", fixNav)