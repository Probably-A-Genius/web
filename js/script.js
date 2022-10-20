const loader = document.querySelector('.loader');

window.addEventListener('load', () => {

    // Making 10s delay in website loading
    setTimeout((10) => {

        loader.classList.add('fadeOut');
        setTimeout((10) => {
            loader.style.display = 'none';
        }, 1000);

    }, 5000);

});
