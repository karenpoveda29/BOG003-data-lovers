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
  const lowToHigh = pokemons.sort((a, b) => {
  return  a.stats["max-cp"] - b.stats["max-cp"];
  });
  return lowToHigh;
};

export const sortedDescendent = (pokemons) => {
  const highToLow = pokemons.sort((a, b) => {
    return b.stats["max-cp"] - a.stats["max-cp"];
  });
  return highToLow;
}; 
    






