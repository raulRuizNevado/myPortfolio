document.addEventListener('DOMContentLoaded', function () {
    const itemList = document.querySelectorAll('#nav ul li');

    userPage = localStorage.getItem('page');

    changePage(userPage);

    // Cambiar el elemento del menu activo al pulsar

    itemList.forEach(item => {
        item.addEventListener('click', function () {
            itemList.forEach(item => {
                item.classList.remove('active');
            });

            this.classList.add('active');
            changePage(this.id);
            localStorage.setItem('page', this.id);
        });
    });

    // Cambiar contenido de la pagina inyectando las diferentes paginas

    function changePage(url) {

        pageUrl = 'pages/' + url + '.html';

        fetch(pageUrl)
            .then(response => response.text())
            .then(data => {
                document.querySelector('#content').innerHTML = data;
            });

        itemList.forEach(item => {
            if (item.id == url) {
                item.classList.add('active');
            }
        });
    }

    // Efecto de blur de la navbar al hacer scroll

    window.addEventListener('scroll', function () {
        const nav = document.querySelector('#nav');

        if (window.scrollY > 150) {
            nav.style.opacity = 0.3;

            nav.addEventListener('mouseover', function () {
                nav.style.opacity = 1;
                nav.style.backgroundColor = '#fff';
            });

            if (window.scrollY > 300) {
                nav.style.opacity = 0;
            }
            
        } else { 
            nav.style.opacity = 1; 
            nav.style.backgroundColor = 'transparent';
        }
    });
});
