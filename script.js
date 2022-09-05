const pokemonsList = document.getElementById("pokemonsList");
const loadMoreButton = document.getElementById("loadMoreButton");
const limit = 10;
let offset = 0;
const maxRecords = 151

function loadPokemonItens(offset, limit) {
  pokeAPI.getPokemons(offset, limit).then((pokemons = []) => {
    const newHtml = pokemons
      .map(
        (pokemon) => `        <li class="${pokemon.type}">
    <span class="number">${pokemon.pokemonNumber}</span>
    <span class="name">${pokemon.name}</span>
    <div class="detail">
       
        <ol class="types">
${pokemon.types
  .map((type) => `<li class='type ${type}'>${type}</li> `)
  .join("")}
        </ol>
        <img src="${pokemon.photo}" alt="${pokemon.name}">
</div>
</li>`
      )
      .join("");
    pokemonsList.innerHTML += newHtml;
  });
}

loadPokemonItens(offset, limit)

loadMoreButton.addEventListener("click", () => {
  offset += limit
  const qtdRecordNextPage = offset + limit
  if (qtdRecordNextPage >= maxRecords) {
    const newLimit = qtdRecordNextPage  - maxRecords
    loadPokemonItens(offset, limit);

    loadMoreButton.parentElement.removeChild(loadMoreButton)
    return
  } else {
  loadPokemonItens(offset, limit)};
});
