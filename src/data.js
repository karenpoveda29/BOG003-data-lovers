export const filterType = (pokemons, type) => {
  const chosenType = pokemons.filter((pokemon) => { 
      return pokemon.type.indexOf(type)>= 0;
  })
  
  return chosenType; //nuevo array con el tipo elegido
};


export const getPercentage = (totalPerType, totalPokemon) => {
  const percentage = parseFloat((100 * totalPerType) / totalPokemon).toFixed(2);
  return percentage;
};


export const sortedAscendent = (pokemons) => {
  const pokemonsCopy = pokemons.map(n => n);
  const lowToHigh = pokemonsCopy.sort((a, b) => {
  return  a.stats["max-cp"] - b.stats["max-cp"];
  });
  return lowToHigh;
};

export const sortedDescendent = (pokemons) => {
  const pokemonsCopy = pokemons.map(n => n);
  const highToLow = pokemonsCopy.sort((a, b) => {
  return b.stats["max-cp"] - a.stats["max-cp"];
  });
  return highToLow;
}; 

export const sortedByNumber = (pokemons) => {
  const pokemonsCopy = pokemons.map(n => n);
  const lowToHigh = pokemonsCopy.sort((a, b) => {
  return  Number(a.num) - Number(b.num);
  });
  return lowToHigh;
};







