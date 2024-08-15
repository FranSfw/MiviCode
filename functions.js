const contactButton = document.getElementById('contactButton');

contactButton.addEventListener('click', function () {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
    });
})