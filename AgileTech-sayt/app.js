let menuList = document.getElementById("menu-list");
menuList.style.maxHeight = "0px";

function toggleMenu() {
    if (menuList.style.maxHeight == "0px") {
        menuList.style.maxHeight = "402px";
    } else {
        menuList.style.maxHeight = "0px";

    }
}