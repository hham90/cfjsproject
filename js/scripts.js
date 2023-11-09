let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

  function showDetails(pokemon) {
    loadDetails(pokemon).then(function (item) {
      showModal(item.name, item.height, item.imageUrl);
    });
  }
  function addListItem(abn) {
    let pokeUL = document.querySelector('.list-group');
    let listItem = document.createElement('li');
    let button = document.createElement('button');
    button.innerText = abn.name;
    button.classList.add('btn', 'btn-primary', 'btn-lg');
    listItem.classList.add('list-group-item');
    button.setAttribute('data-toggle', 'modal');
    button.setAttribute('data-target', '#modal-container')
    listItem.appendChild(button);
    pokeUL.appendChild(listItem);
    button.addEventListener('click', function() {
      showDetails(abn);
    })
  }
  function loadList() {
    return fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
      });
    }).catch(function (e) {
      console.error(e);
    })
  }
  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      // Now we add the details to the item
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = details.types;
      return item;
    }).catch(function (e) {
      console.error(e);
    });
  }
  function add(pokemon) {
    pokemonList.push(pokemon);
  }
  function getAll() {
    return pokemonList
  }
  function showModal(name, height, imageURL) {

    let modalBody = $('.modal-body');
    let modalTitle = $('.modal-title');
    modalTitle.empty();
    modalBody.empty();

    let titleElement = document.createElement('h1');
    titleElement.innerText = name;

    let myImage = document.createElement('img');
    myImage.src = imageURL;

    let contentElement = document.createElement('p');
    contentElement.innerText = 'Height: ' + height;

    modalTitle.append(titleElement);
    modalBody.append(myImage);
    modalBody.append(contentElement);
    $('.modal-container').click(function () {
      $('btn').toggle('modal')
    })
  }

  window.addEventListener('keydown', (e) => {
    let modalContainer = document.querySelector('#modal-container');
    if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
      hideModal();
    }
  });

  return {
      loadList: loadList,
      add: add,
      getAll: getAll,
      loadDetails: loadDetails,
      addListItem: addListItem
    };
  })();

//loads list
pokemonRepository.loadList().then(function() {
  pokemonRepository.getAll().forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon);
});
});