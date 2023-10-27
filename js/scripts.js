let pokemonRepository = (function () {
  let pokemonList = [
    {name: 'Bulbasaur', height: .7, types: ['grass', 'poison']},
    {name: 'Charmander', height: .6, types: ['fire']},
    {name: 'Squirtle', height: .5, types: ['water']},
    {name: 'Ivysaur', height: 1, types: ['grass', 'poison']},
    {name: 'Venasaur', height: 2, types: ['grass', 'poison']},
    {name: 'Charmeleon', height: 1.1, types: ['fire']},
    {name: 'Charizard', height: 1.7, types: ['fire', 'flying']},
    {name: 'Wartortle', height: 1, types: ['water']},
    {name: 'Blastoise', height: 1.6, types: ['water']},
  ];
  return {
      add: function(pokemon) {
        pokemonList.push(pokemon);
      },
      getAll: function() {
        return pokemonList;
      }
    };
})();

pokemonRepository.getAll().forEach(function(pokemon) {
  document.write(pokemon.name + " (height: " + pokemon.height +")");
  if (pokemon.height > 1.1) {
    document.write(" Wow, that\'s big!");
  }
  document.write("<br/>")
})