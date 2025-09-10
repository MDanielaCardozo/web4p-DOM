const cambiarTitulo = () => {
    /* probamos si funciona desde la consola */
    console.log("Desde la funcion cambiarTitulo");

    /* Metodo getElementById */
    const titulo = document.getElementById("titulo-modificable");

    /* Metodo getElementsByTagName */
    //const titulo = document.getElementsByTagName('h2')

    /* metodo getElementsByClassName */
    //const titulo = document.getElementsByClassName('display-4')

    /* metodo querySelector que nos devuelve el primer elemento que coincide con el selector */
    /* const titulo = document.querySelector('.display-4') */

    /* const titulo = document.querySelectorAll('.display-4') */

    console.log(titulo);

    //modificar el color del titulo
    titulo.classList.add("text-info");

    //titulo.className = 'text-warning';

    //titulo.innerHTML = 'Hola <b>mundo</b>';

    titulo.textContent = 'Hola <b>mundo</b>'


    
    
}