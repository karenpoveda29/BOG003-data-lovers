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
    const pokemons = data.pokemon; 
    for(let i = 0; i < pokemons.length; i++){
        const number = pokemons[i].num;
        const type = pokemons[i].type;
        const name = pokemons[i].name;
        const maxCp = pokemons[i].stats["max-cp"];
        const img = pokemons[i].img;
        insertPokemon(number,type,name,maxCp,img);
    }
}
allPokemon();

const type = data.pokemon[0].type;
 console.log(type);







