/*Profesor decidí dejarlo de la forma que se ve el programa corriendo ya que
al agregar varias tareas la parte de los checkbox se dificulta verla porque
queda arriba.*/
const form = document.querySelector("#form");
const nTarea = document.querySelector("#nTarea");
const total = document.querySelector("#total");
const suma = document.querySelector("#suma")
const listo = document.querySelector("#listo")
const revisa = document.querySelector("#revisa")
let checkBox = document.getElementById("check1");

let listaDeTareas = [
    { id: Date.now() + 1, name: "Alimentar perros", done: false },
    { id: Date.now() + 2, name: "Dejar hijo en el colegio", done: false },
    { id: Date.now() + 3, name: "Estudiar JavaScript", done: false },
]

form.addEventListener("submit", (e) => {  
    e.preventDefault(); 
    listaDeTareas.push({
        id: Date.now(),
        name: nTarea.value,
        done: false,
    });

    render();
    nTarea.value = "";

});

const eliminar = (id) => {
    listaDeTareas = listaDeTareas.filter((item) => item.id !== id);  
    render(); 
};

const completar = (id) => {

    listaDeTareas.forEach((item) => {
        if (item.id === id && !item.done) {
            item.done = true
        } else if (item.id === id && item.done) {
            item.done = false
        }
    })

    render()
}



const render = () => {

    total.innerHTML = "";
    let contar = 0
    listaDeTareas.forEach((item) => {

        total.innerHTML +=
           `<div>${item.id} ${item.name} <label for="check1">:</label>
           <input ${item.done ? "checked" : ""} onchange="completar(${item.id})" type="checkbox">
           <button onclick="eliminar(${item.id})">X</button></div>`
        contar = contar + 1
    },);

    suma.innerHTML = contar
    listo.innerHTML = listaDeTareas.filter((item) => item.done).length 

}

render(); 