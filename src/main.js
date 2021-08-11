import { filterType, getPercentage } from './data.js';
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
                ${types.map(type => `<p class="type-style ${type}">${type}</p>`).join("")}
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
    select.setAttribute("class", "select-menu");
    const option = document.createElement("option");
    option.innerHTML = "--Selecciona un tipo--";
    select.appendChild(option);

    /* Crear las 18 opciones con cada uno de los tipos */
    singleTypes.forEach(type => {
        const option = document.createElement("option");
        option.innerHTML = type; 
        option.value = type;
        select.appendChild(option);
    })

    /* Agregamos el select al DOM */
    const filterContainer = document.getElementById("filter-container");
    filterContainer.appendChild(select);

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
    document.getElementById("message-type").innerHTML = "";
    document.getElementById("message-type").style.display = "none";
    const userChoice = filterSelect.value;
    const chosenType = filterType(data.pokemon, userChoice);
    if (userChoice == "--Selecciona un tipo--"){
        const title = document.getElementById("title").removeAttribute("style");
        showAllPokemon(data.pokemon);        
    } else {
        //mostrar mensaje del tipo elegido
        title.style.display = "none";
        document.getElementById("message-type").removeAttribute("style");
        showPercentagePerType(data.pokemon, chosenType, userChoice);
        showAllPokemon(chosenType);
    }
});

/* Total y porcentaje de pokemones por tipo */ 
const showPercentagePerType = (pokemon, chosenType, userChoice) => {
   const totalPokemon = pokemon.length;
   const totalPerType = chosenType.length;
   const percentage = getPercentage(totalPerType, totalPokemon) 

   const messageType = document.getElementById("message-type");
   messageType.setAttribute("class", userChoice);
   messageType.insertAdjacentHTML("beforeend", `
    <div class="calculations">  
      <p>Tipo ${userChoice}</p>
      <p>Total: ${chosenType.length}</p> 
      <p>Porcentaje: ${percentage}%</p>
    </div>
    <p class="percentage-note">Porcentaje del tipo en las regiones Kanto y Johto</p>  
    `);
}

/* Evento para mostrar los selects en mobile */
const burgerMenu = document.getElementById("burger-menu");

burgerMenu.addEventListener("click", function(){
    const menu = document.getElementById("menu");
    if(menu.classList.contains("show")){
        menu.classList.remove("show");
    } else{
        menu.classList.add("show");
    }
});

/* Ordenar los pokemones por puntaje de MAX-PC */

/*COMPLETAR SEGUNDA H.U.
1. hacer el menú el hamburguesa
2. hacer los tests unitarios de las funciones de filtrar y calcular - mirar configuración de ESLINT
3. Figma */









