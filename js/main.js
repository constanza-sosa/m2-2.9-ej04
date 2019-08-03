"use strict";

// EJERCICIO 4
// REPASO: Mi lista de tareas
// Hemos creado una aplicación para gestionar un listado de tareas: ¡somos gente muy ocupada! Para eso, hemos creado un objeto literal con el listado de tareas y su estado. Nuestra misión es:
// Mostrar una frase que indique cuántas tareas hay.
// Pintar todas las tareas en pantalla.
// Tachar las ya realizadas.
// Permitir marcar una tarea como 'completa' o 'incompleta'.
// Vamos a partir de este array de datos en nuestro fichero JavaScript:
// const tasks = [
//   { name: 'Recoger setas en el campo', completed: true },
//   { name: 'Comprar pilas', completed: true },
//   { name: 'Poner una lavadora de blancos', completed: true },
//   {
//     name: 'Aprender cómo se realizan las peticiones al servidor en JavaScript',
//     completed: false,
//   },
// ];
// Veamos como afrontar un ejercicio de este tipo, dónde tenemos que unir muchos de los conceptos aprendidos hasta ahora, la organización es clave:
// a) Vamos a por una tarea. Primero vamos a pintar una tarea, solo una, en una lista de HTML. A continuación vamos a preparar una clase que la modifique, de manera que si fuera una tarea completada completed: true, el texto aparezca tachado.
// b) Listado de tareas. ¡Seguimos con nuestras tareas! Ahora vamos a pintar en pantalla todas la tareas que tenemos en el listado, cada una de las tareas completadas debe aparecer tachada.
// c) Vamos a darle dinamismo. Ahora viene lo bueno: vamos a añadir la lógica necesaria para completar tareas. Para ello vamos a añadir un input de tipo checkbox al final de cada tarea que nos falte por completar. El checkbox de las tareas completadas debe aparecer marcado (checked). Además, cuando el usuario marque la tarea como completada marcando el checkbox, deben suceder varias cosas:
// la tarea debe mostrarse como completada (tachada)
// debemos modificar su estado (propiedad completed) en el array tasks.
// d) Tareas totales. No nos podemos olvidar de los detalles. Añadamos por encima del listado de tareas una frase que diga: Tienes X tareas. Y completadas y Z por realizar. Cada vez que una tarea se marque/desmarque deberiamos actualizar esta información.

const list = document.querySelector(".task__list");
const paragraph = document.querySelector(".paragraph");

const tasks = [
  {
    name: "Recoger setas en el campo",
    completed: true
  },
  {
    name: "Comprar pilas",
    completed: true
  },
  {
    name: "Poner una lavadora de blancos",
    completed: true
  },
  {
    name: "Aprender cómo se realizan las peticiones al servidor en JavaScript",
    completed: false
  }
];

console.log(tasks);


// const tasksSumary = {
//   total: tasks.length,
//   completed: 0,
//   pending: 0
// }

// for (const item of tasks){
//   if (item.completed === true){
//     tasksSumary.completed ++
//   }
// }

// tasksSumary.pending = tasksSumary.total - tasksSumary.completed;


function writeChecklist() {
  let total = tasks.length;
  let complete = 0;
  let pending = 0;
  let content = "";
  for (let i = 0; i <= tasks.length-1; i++) {
    if (tasks[i].completed === true) {
      content += `
      <li class="list__item list__item${i} complete">
      <label for="input${i}">
      <input
      class='input'
      id='input${i}'
      type='checkbox'
      value='${i}'
      name='option'
      checked
      />
      ${tasks[i].name}
      </label>
      </li>
      `
      complete ++;
    } else {
      content += `
      <li class="list__item list__item${i}">
      <label for="input${i}">
      <input
      class='input'
      id='input${i}'
      type='checkbox'
      value='${i}'
      name='option'
      />
      ${tasks[i].name}
      </label>
      </li>
      `
      pending ++;
    }
    
    list.innerHTML = content;
    paragraph.innerHTML = `Tienes ${total} tareas de las cuales ${complete} están hechas y ${pending} están pendientes`;
  }
}
writeChecklist();


const inputsToSelect = document.querySelectorAll('.input');

for (const item of inputsToSelect){
  item.addEventListener('change', changeArray);
}

function changeArray(event) {
  const selected = event.currentTarget;
  const z = selected.value;

  if (selected.checked === true){
    tasks[z].completed = true;
    writeChecklist();
  } else{
    tasks[z].completed = false;
    writeChecklist();
  }
  console.log(tasks);
}


  // for (let i = 0; i < inputs.length; i++) {
  //   inputs[i].addEventListener('change', changeArray);
  // }



  
  // function lineChecklist(event) {
  //   const selected = event.currentTarget;
  // const parent = event.currentTarget.parentElement.parentElement;
  // if (selected.checked === true) {
  //   parent.classList.add('complete');
  //   tasksSumary.completed ++;
  //   tasksSumary.pending = tasksSumary.total - tasksSumary.completed;
  //   paragraph.innerHTML = `Tienes ${tasksSumary.total} tareas de las cuales ${tasksSumary.completed} están hechas y ${tasksSumary.pending} están pendientes`
  // } else {
  //   parent.classList.remove('complete');
  //   tasksSumary.completed --;
  //   tasksSumary.pending = tasksSumary.total - tasksSumary.completed;
  //   paragraph.innerHTML = `Tienes ${tasksSumary.total} tareas de las cuales ${tasksSumary.completed} están hechas y ${tasksSumary.pending} están pendientes`
  // }
// }

// for (let i = 0; i < inputs.length; i++) {
//   inputs[i].addEventListener("change", lineChecklist);
// }
