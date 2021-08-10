export const filterType = (pokemons, type) => {
  const chosenType = pokemons.filter((pokemon) => { 
      return pokemon.type.indexOf(type)>= 0;
  })
  
  return chosenType; //nuevo array con el tipo elegido
};


export const calcularPorcentaje = (totalPokemones, totalPorTipo) => {
  const porcentaje = parseFloat((100 * totalPorTipo) / totalPokemones).toFixed(2);
  return porcentaje;
};
