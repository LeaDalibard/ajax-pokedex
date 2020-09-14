(() => {

    search.addEventListener("click", getPokemon)

    function getPokemon() {
        let pokeName = document.getElementById("pokemon").value
        fetch("https://pokeapi.co/api/v2/pokemon/" + pokeName + "/")
            .then(response => response.json())
            .then(pokemon => {
                    document.getElementById("idNum").innerHTML = pokemon.id
                    document.getElementById("name").innerHTML = pokemon.name
                    let arrMoves = pokemon.moves
                    let moves = []
                    const randomArray = []
                    for (let i = 0; i < 4; i++) {
                        randomArray.push(Math.floor(Math.random() * arrMoves.length))
                    }
                    if (arrMoves.length <= 4) {
                        moves = arrMoves.name
                    } else {
                        for (let i = 0; i < 4; i++) {
                            moves.push(arrMoves[randomArray[i]])
                        }
                    }
                    document.getElementById("pokMove").innerHTML = moves
                    console.log(moves)

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