function removeSideMenu(button){

    button.parentNode.parentNode.style.left = "100vw"

    document.getElementsByClassName("first-page")[0].style.filter = "blur(0)"

    document.getElementsByClassName("login-page")[0].style.filter = "blur(0)"

    document.getElementsByClassName("link-footer")[0].style.filter = "blur(0)"

}

function showSideMenu(){

    let mobileMenu = document.getElementsByClassName("mobile-menu")[0]

    mobileMenu.style.left = "20vw"

    //mobileMenu.style.opacity = "1"

    document.getElementsByClassName("first-page")[0].style.filter = "blur(5px)"

    document.getElementsByClassName("login-page")[0].style.filter = "blur(5px)"

    document.getElementsByClassName("link-footer")[0].style.filter = "blur(5px)"

}