import { filterType } from './data.js';
import data from './data/pokemon/pokemon.js';

/* Mostrar Pokemones */

/* Esta función es para insertar un solo pokemon en el DOM */
const insertPokemon = (number,types,name,maxCp,img) => {
    const cardsSection = document.getElementById("cards-section");
    cardsSection.insertAdjacentHTML("beforeend", ` 
        <div class="pokemon-card"> 
            <img class="image-pokemon" src="${img}">
            <p class="number">${number}</p>
            <p class="name">${name}</p>
            <div class="types">
                ${types.map(type => `<span class="type-style ${type}">${type}</span>`).join("")}
            </div>           
            <p class="combat-power">Max-PC ${maxCp}</p>            
        </div>`); 
} 

/* Esta función es para mostrar los 251 */
const showAllPokemon = (pokemons) => {
    for(let i = 0; i < pokemons.length; i++){
        const number = pokemons[i].num;
        const types = pokemons[i].type;
        const name = pokemons[i].name;
        const maxCp = pokemons[i].stats["max-cp"];
        const img = pokemons[i].img;
        insertPokemon(number,types,name,maxCp,img);
    }
}
showAllPokemon(data.pokemon); 


/* Filtrar Pokemones */   

function createSelectTypes() {
    /* Crear un array con los 18 tipos */
    const pokemons = data.pokemon;
    const allTypes = pokemons.map(pokemon => pokemon.type).flat(); //array de 362 tipos repetidos
    const singleTypes = removeDuplicates(allTypes); //array con 18 tipos sin repetir
    
    /* Crear la etiqueta select*/
    const select = document.createElement("select");
    const option = document.createElement("option");
    option.innerHTML = "Selecciona un tipo";
    select.appendChild(option);

    /* Crear las 18 opciones con cada uno de los tipos */
    singleTypes.forEach(type => {
        const option = document.createElement("option");
        option.innerHTML = type; 
        option.value = type;
        select.appendChild(option);
    })

    /* Agregamos el select al DOM */
    const menu = document.getElementById("menu");
    menu.appendChild(select);

    return select; 
}

/* función genérica para remover elementos repetidos en un array*/
const removeDuplicates = (array) => {
    let uniqueElements = []; 
    array.forEach(element => {
      if (!uniqueElements.includes(element)) { //ya está incluido
          uniqueElements.push(element); //acción de incluir
      }
    });
    return uniqueElements;
}

/* Evento change para filtrar */
const filterSelect = createSelectTypes();
filterSelect.addEventListener("change", () => { 
    document.getElementById("cards-section").innerHTML = "";
    const userChoice = filterSelect.value;
    const chosenType = filterType(data.pokemon, userChoice);
    if (userChoice == "Selecciona un tipo"){
        showAllPokemon(data.pokemon);
    } else {
        //mostrar mensaje del tipo elegido
        showAllPokemon(chosenType);
    }
})



/* 
Para el cálculo (total pokemon por tipo) buscar un método que nos permita saber el largo del array chosenType y meter este dato dentro de un span y mostrarlo en la pantalla como parte del mensaje grande */ 









