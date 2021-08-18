import { filterType, getPercentage, sortedDescendent, sortedAscendent, sortedByNumber} from './data.js';
import data from './data/pokemon/pokemon.js';
let currentArray = data.pokemon;

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

/* función genérica para remover elementos repetidos en un array, se usa dentro de la función createSelectTypes*/
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
    const messageSection = document.getElementById("message-type");
    messageSection.innerHTML = "";
    const userChoice = filterSelect.value;
    if (userChoice == "--Selecciona un tipo--"){
        messageSection.classList.add("hide");
        document.getElementById("title").removeAttribute("style");
        currentArray = data.pokemon;        
        showAllPokemon(currentArray);
    } else {
        //mostrar mensaje del tipo elegido
        document.getElementById("title").style.display = "none";
        messageSection.classList.remove("hide");
        currentArray = filterType(data.pokemon, userChoice);
        showPercentagePerType(data.pokemon, currentArray, userChoice);
        showAllPokemon(currentArray);
    }
});

/* Total y porcentaje de pokemones por tipo */ 
const showPercentagePerType = (pokemon, chosenType, userChoice) => {
   const totalPokemon = pokemon.length;
   const totalPerType = chosenType.length;
   const percentage = getPercentage(totalPerType, totalPokemon);

   const messageType = document.getElementById("message-type");
   messageType.setAttribute("class", `${userChoice} message-type`);
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

/* Agregar evento change al select para ordenar */
const sortSelect = document.getElementById("sort-menu");

sortSelect.addEventListener("change", () => {
    const userChoice = sortSelect.value;
    document.getElementById("cards-section").innerHTML = "";
    if(userChoice === "highestFirst"){
        currentArray = sortedDescendent(currentArray);
        showAllPokemon(currentArray);        
    } else if(userChoice === "lowestFirst"){
        currentArray = sortedAscendent(currentArray);
        showAllPokemon(currentArray);
    } else { //create a function 
        currentArray = sortedByNumber(currentArray);
        showAllPokemon(currentArray);
    }
});
