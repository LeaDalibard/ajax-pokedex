(() => {

    search.addEventListener("click", getPokemon)

    function getPokemon() {
        let pokeName = document.getElementById("pokemon").value
        fetch("https://pokeapi.co/api/v2/pokemon/" + pokeName + "/")
            .then(response => response.json())
            .then(pokemon => {
                    document.getElementById("idNum").innerHTML = pokemon.id
                    document.getElementById("name").innerHTML = pokemon.name
                }
            )


    }
})();
/*
 pokemons => {
                    pokemons.forEach(
                        (pokemon) => {
                            if (pokemon.name = pokeName) {
                                console.log(pokemon)
                            }
                        }
                    )
                }
 */