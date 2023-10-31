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
  function showDetails(pokemon) {
    console.log(pokemon)
  }
  function addListItem(pokemon) {
    let pokeUL = document.querySelector('.pokelist');
    let listItem = document.createElement('li');
    let button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add('button-class');
    listItem.appendChild(button);
    pokeUL.appendChild(listItem);
    button.addEventListener('click', function() {
      showDetails(pokemon.name);
    })
  }
  return {
      add: function(pokemon) {
        pokemonList.push(pokemon);
      },
      getAll: function() {
        return pokemonList;
      },
      addListItem: function(pokemon) {
        return addListItem(pokemon);
      }
    };
})();

pokemonRepository.getAll().forEach(function(pokemon) {
  pokemonRepository.addListItem(pokemon);
})

// document.write(pokemon.name + " (height: " + pokemon.height +")");
//   if (pokemon.height > 1.1) {
//     document.write(" Wow, that\'s big!");
//   }
//   document.write("<br/>")