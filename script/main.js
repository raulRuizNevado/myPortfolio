document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#nav a:first-child').classList.add('active');
    document.getElementById('prevSection').style.pointerEvents = 'none',
        document.getElementById('prevSection').style.opacity = '0.2';
        
    document.getElementById('nextSection').addEventListener('click', function () {

        currentElement = document.getElementById('header');

        currentElement.style.pointerEvents = 'none',
            currentElement.style.opacity = '0',
            currentElement.style.transform = 'translateY(-30%)';
        
        

        setTimeout(function () {
            currentElement.remove;
        }, 900);
    });
});