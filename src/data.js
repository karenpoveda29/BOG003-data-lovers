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
