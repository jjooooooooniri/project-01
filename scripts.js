document.addEventListener('DOMContentLoaded', function () {
    const toggler = document.querySelector('.navbar-toggler');
    const sideMenu = document.querySelector('.side-menu');
    const overlay = document.querySelector('.overlay');

    toggler.addEventListener('click', function () {
        sideMenu.classList.toggle('active');
        overlay.classList.toggle('active');
    });

    overlay.addEventListener('click', function () {
        sideMenu.classList.remove('active');
        overlay.classList.remove('active');
    });
});
