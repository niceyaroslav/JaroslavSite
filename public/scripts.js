
function handlePopup(name) {
    let popup = document.getElementById(name);
    popup.classList.replace("hidden", "show");
}


function closePopup(name) {
    let popup = document.getElementById(name);
    popup.classList.replace("show", "hidden");
}

function hamburgerHandler() {
    let x = document.getElementById("hamburger");
    x.classList.toggle("responsive");
    let icon = document.getElementById('icon');
    if (icon.innerHTML.includes('<i class="fa fa-bars"></i>')) {
        icon.innerHTML = '<i class="fa fa-times"></i>';
    } else {
        icon.innerHTML = '<i class="fa fa-bars"></i>';
    }
}
