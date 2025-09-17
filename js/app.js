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

const obtenerNombre = (e) => {

  e.preventDefault();
  console.log(e);
  console.log('desde la funcion obtenerNombre');

  const input = document.querySelectorAll(".form-control");
  console.log(input[1].value);
  const parrafos = document.querySelectorAll('p');
  console.log(parrafos[5]);

  /* parrafos[5].textContent = parrafos[5].textContent + input[1].value; */
  parrafos[5].textContent += input[1].value;
  formulario.reset();
}

const cambiarTema = () => {

  const html = document.documentElement;
  const temaActual = html.getAttribute("data-bs-theme");
  console.log(temaActual);

  html.setAttribute("data-bs-theme", temaActual === "dark" ? "light" : "dark");
}

const crearTarea = (e) => {
e.preventDefault();
console.log('Desde la funcion crear tarea');

const inputTarea = document.getElementById("tarea").value.trim();
console.log((inputTarea));

const divcol = document.createElement('div');
const divcard = document.createElement('div');
const divcardBody = document.createElement('div');
const h5 = document.createElement('h5');
const p = document.createElement('p');
divcol.className = "col-md-4 col-lg-3";
divcard.className = "card h-100";
divcardBody.className = "card-body";
h5.className = "card-title";
h5.textContent = "Tarea ✔";
p.className = "card-text";
p.textContent = inputTarea;

const row = document.querySelector(".row-gap-3");

row.appendChild(divcol);
divcol.appendChild(divcard);
divcard.appendChild(divcardBody);
divcardBody.appendChild(h5);
divcardBody.appendChild(p);

formularioTarea.reset();

}


const btnRojo = document.querySelector(".btn-danger");
/* console.log(btnRojo); */

const btnAmarillo = document.querySelector(".btn-warning");
console.log(btnAmarillo);

const formulario = document.querySelector("#formNombre");

const btnCambiarTema = document.querySelector(".btn-dark")
console.log(btnCambiarTema);

const formularioTarea = document.querySelector('#formTareas');



btnRojo.addEventListener("click", ocultarParrafo);
btnAmarillo.addEventListener("click", borrarParrafo);
formulario.addEventListener("submit", obtenerNombre);
btnCambiarTema.addEventListener("click", cambiarTema);
formularioTarea.addEventListener("submit", crearTarea);



