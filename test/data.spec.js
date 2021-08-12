import { filterType, getPercentage } from '../src/data.js';

const pokemon = [
  {"num": "001", "name": "bulbasaur", "type": ["grass", "poison"], "stats": {"base-attack": "118","base-defense": "111", "base-stamina": "128","max-cp": "1115", "max-hp": "113"}},
  {"num": "002", "name": "ivysaur", "type": ["grass", "poison"], "stats": {"base-attack": "151", "base-defense": "143", "base-stamina": "155", "max-cp": "1699", "max-hp": "134"}},
  {"num": "003", "name": "venusaur", "type": ["grass", "poison"], "stats": {"base-attack": "198", "base-defense": "189", "base-stamina": "190", "max-cp": "2720", "max-hp": "162"}},
  {"num": "004", "name": "charmander", "type": ["fire"], "stats": {"base-attack": "116", "base-defense": "93", "base-stamina": "118", "max-cp": "980", "max-hp": "105"}},
  {"num": "005", "name": "charmeleon", "type": ["fire"], "stats": {"base-attack": "158", "base-defense": "126", "base-stamina": "151", "max-cp": "1653", "max-hp": "131"}},
  {"num": "006", "name": "charizard", "type": ["fire", "flying"], "stats": {"base-attack": "223", "base-defense": "173", "base-stamina": "186", "max-cp": "2889", "max-hp": "158"}},
  {"num": "007", "name": "squirtle", "type": ["water"], "stats": {"base-attack": "94", "base-defense": "121", "base-stamina": "127", "max-cp": "946", "max-hp": "112"}},
  {"num": "008", "name": "wartortle", "type": ["water"], "stats": {"base-attack": "126", "base-defense": "155", "base-stamina": "153", "max-cp": "1488", "max-hp": "132"}}
]

const pokemonGrass = [ 
  {"num": "001", "name": "bulbasaur", "type": ["grass", "poison"], "stats": {"base-attack": "118","base-defense": "111", "base-stamina": "128","max-cp": "1115", "max-hp": "113"}},
  {"num": "002", "name": "ivysaur", "type": ["grass", "poison"], "stats": {"base-attack": "151", "base-defense": "143", "base-stamina": "155", "max-cp": "1699", "max-hp": "134"}},
  {"num": "003", "name": "venusaur", "type": ["grass", "poison"], "stats": {"base-attack": "198", "base-defense": "189", "base-stamina": "190", "max-cp": "2720", "max-hp": "162"}}
]

const pokemonFire = [
  {"num": "004", "name": "charmander", "type": ["fire"], "stats": {"base-attack": "116", "base-defense": "93", "base-stamina": "118", "max-cp": "980", "max-hp": "105"}},
  {"num": "005", "name": "charmeleon", "type": ["fire"], "stats": {"base-attack": "158", "base-defense": "126", "base-stamina": "151", "max-cp": "1653", "max-hp": "131"}},
  {"num": "006", "name": "charizard", "type": ["fire", "flying"], "stats": {"base-attack": "223", "base-defense": "173", "base-stamina": "186", "max-cp": "2889", "max-hp": "158"}}
]

const pokemonWater = [
  {"num": "007", "name": "squirtle", "type": ["water"], "stats": {"base-attack": "94", "base-defense": "121", "base-stamina": "127", "max-cp": "946", "max-hp": "112"}},
  {"num": "008", "name": "wartortle", "type": ["water"], "stats": {"base-attack": "126", "base-defense": "155", "base-stamina": "153", "max-cp": "1488", "max-hp": "132"}}
]

describe('filtrado por tipo', () => {
  it('debería ser una función', () => {
    expect(typeof filterType).toBe('function');
  }); 

  it('debería retornar los pokemones de tipo grass', () => {
    expect(filterType(pokemon, "grass")).toEqual(pokemonGrass);
  });

  it('debería retornar los pokemones de tipo fire', () => {
    expect(filterType(pokemon, "fire")).toEqual(pokemonFire);
  });

});

describe('porcentaje del tipo', () => {
  it('debería ser una función', () => {
    expect(typeof getPercentage).toBe('function');
  });

  it('debería calcular el porcentaje de pokemones tipo grass', () => {
    expect(getPercentage(pokemonGrass.length, pokemon.length)).toBe('37.50');
  });

  it('debería retornar el porcentaje de pokemones tipo water', () => {
    expect(getPercentage(pokemonWater.length, pokemon.length)).toBe('25.00');
  })
});
