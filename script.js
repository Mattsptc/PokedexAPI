
function convertPokemonToLI(pokemon) {
  return `        <li class="${pokemon.type}">
    <span class="number">${pokemon.pokemonNumber}</span>
    <span class="name">${(pokemon.name)}</span>
    <div class="detail">
       
        <ol class="types">
${pokemon.types.map((type) => `<li class='type ${type}'>${type}</li> `).join('')}
        </ol>
        <img src="${pokemon.photo}" alt="${pokemon.name}">
</div>
</li>`;
}

const pokemonsList = document.getElementById("pokemonsList");

pokeAPI.getPokemons().then((pokemons = []) => {
    const newHtml = pokemons.map((pokemon) => convertPokemonToLI(pokemon)).join('');
  pokemonsList.innerHTML = newHtml

});
