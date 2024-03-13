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
});
