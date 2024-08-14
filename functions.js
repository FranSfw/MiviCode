const contactButton = document.getElementById('contactButton');
const heightDivImages = document.getElementById('divBussinesses').offsetHeight;
const divImages = document.getElementById('divImages');

window.addEventListener('load', function () {
    divImages.style.height = `${heightDivImages}px`;
});

window.addEventListener('resize', function () {
    divImages.style.height = `${heightDivImages}px`;
});

contactButton.addEventListener('click', function () {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
    });
})