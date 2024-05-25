document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.boton-hamburguesa');
    const mainMenu = document.querySelector('.menu-variable');
    const botonesInicio = document.querySelector('.botones-iniciosesion-registro');

    menuToggle.addEventListener('click', function() {
        mainMenu.classList.toggle('show');  /* classList despliega todas las claeses del objeto y la propiedad toggle agrega la clase si no esta, y si esta la quita */
        botonesInicio.classList.toggle('show');
    });
});



