import { example } from './data.js';
import pokemon from './data/pokemon/pokemon.js';
import data from './data/pokemon/pokemon.js';


const insertPokemon = (number,type,name,maxCp,img) => {
    const cardsSection = document.getElementById("cards-section");
    cardsSection.insertAdjacentHTML("beforeend", ` 
        <div class="pokemon-card"> 
            <img class="image-pokemon" src="${img}">
            <p class="number">${number}</p>
            <p class="name">${name}</p>
            <div class="type">${type}</div>
            <p class="combat-power">Max-PC ${maxCp}</p>            
        </div>`); 
} 

const allPokemon = () => {
    const pokemon = data.pokemon; 
    for(let i= 0; i<pokemon.length; i++){
        const number = pokemon[i].num;
        const type = pokemon[i].type; 
        const name = pokemon[i].name;
        const maxCp = pokemon[i].stats['max-cp'];
        const img = pokemon[i].img;
        insertPokemon(number,type,name,maxCp,img);
    }
}
allPokemon();








