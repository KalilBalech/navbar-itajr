function removeSideMenu(button){

    //button.parentNode.parentNode.style.left = "100vw"

    button.parentNode.parentNode.style.display= "none"

    document.getElementsByClassName("first-page")[0].style.filter = "blur(0)"

    document.getElementsByClassName("login-page")[0].style.filter = "blur(0)"

    document.getElementsByClassName("link-footer")[0].style.filter = "blur(0)"

}

function showSideMenu(){

    let mobileMenu = document.getElementsByClassName("mobile-menu")[0]

    //mobileMenu.style.left = "20vw"

    mobileMenu.style.display = "block"

    document.getElementById("footer").style.overflowY = "hidden"

    document.getElementsByClassName("first-page")[0].style.filter = "blur(5px)"

    document.getElementsByClassName("login-page")[0].style.filter = "blur(5px)"

    document.getElementsByClassName("link-footer")[0].style.filter = "blur(5px)"

}