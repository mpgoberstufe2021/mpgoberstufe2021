var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

window.onscroll = function () {
    myFunction()
};

var titl = document.getElementById("myTitl");
var header = document.getElementById("myHeader");
var sticky = header.offsetTop;


function myFunction() {
    if (window.pageYOffset >= sticky) {
        header.classList.add("sticky");
        titl.classList.remove("opacityt");
    } else {
        header.classList.remove("sticky");
        titl.classList.add("opacityt");

    }
}

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
