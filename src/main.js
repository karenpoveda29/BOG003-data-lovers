import { example } from './data.js';
import pokemon from './data/pokemon/pokemon.js';
import data from './data/pokemon/pokemon.js';


const insertarPokemon = (number,type,name,maxCp,img) => {
    const section = document.getElementById("pokemon-cards");
    section.insertAdjacentHTML("beforeend", ` 
        <div class="card-pokemon"> 
            <img class="image-pokemon" src="${img}">
            <p class="number">${number}</p>
            <p class="name">${name}</p>
            <div class="type">${type}</div>
            <p class="combat-power">${maxCp}</p>            
        </div>
    `); 
} 

const todosPokemon = () => {
    const pokemon = data.pokemon; 
    for(let i= 0; i<pokemon.length; i++){
        const number = pokemon[i].num;
        const type = pokemon[i].type;
        const name = pokemon[i].name;
        const maxCp = pokemon[i].stats['max-cp'];
        const img = pokemon[i].img;
        insertarPokemon(number,type,name,maxCp,img);
    }
}
todosPokemon();








