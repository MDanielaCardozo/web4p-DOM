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

  /*  const titulo = document.querySelectorAll('.display-4') */

  console.log(titulo);

  //modificar el color del titulo
  titulo.classList.add("text-info");

  //eliminar la clase display-4
  titulo.classList.remove("display-4");

  //titulo.className = 'text-warning';

  //titulo.innerHTML = 'Hola <b>mundo</b>';

  titulo.textContent = "Hola <b>mundo</b>";
};



const ocultarParrafo = () => {
  console.log("Desde la funcion ocultar parrafo");
  
  const parrafo = document.getElementById("parrafo");
  
  parrafo.classList.toggle("visually-hidden");
  
  if (btnRojo.textContent === "Ocultar parrafo") {
    /* cambiar el estilo del boton por el color verde y que modifique el texto mostrar  parrafo*/
    btnRojo.classList.replace("btn-danger", "btn-success");
    btnRojo.textContent = "Mostrar parrafo";
  } else {
    btnRojo.textContent = "Ocultar parrafo";
    btnRojo.classList.replace("btn-success", "btn-danger");
  }
};

const borrarParrafo = () => {
  console.log("Desde la funcion borrar parrafo");

  const parrafos = document.getElementsByTagName("p");
  console.log(parrafos[4]);
  
  parrafos[4].remove();

  btnAmarillo.classList.add("disabled");
  
}


const btnRojo = document.querySelector(".btn-danger");
/* console.log(btnRojo); */

const btnAmarillo = document.querySelector(".btn-warning");
console.log(btnAmarillo);


btnRojo.addEventListener("click", ocultarParrafo);
btnAmarillo.addEventListener("click", borrarParrafo);


