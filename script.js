(() => {

    search.addEventListener("click", getPokemon)


    function getPokemon() {
        let pokeName = document.getElementById("pokemon").value

        fetch("https://pokeapi.co/api/v2/pokemon/" + pokeName + "/")
            .then(response => response.json())
            .then(pokemon => {
                document.getElementById("idNum").innerHTML = pokemon.id
                document.getElementById("name").innerHTML = pokemon.name
                img = pokemon.sprites
                document.getElementById("pokImg").src = img.front_default

                arrMoves = pokemon.moves
                let finalMoves = []
                const randomArray = []
                for (let i = 0; i < 4; i++) {
                    randomArray.push(Math.floor(Math.random() * arrMoves.length))
                }
                for (let i = 0; i < 4; i++) {
                    finalMoves.push(arrMoves[randomArray[i]].move.name)
                }
                var unique = [...new Set(finalMoves)];
                document.getElementById("pokMove").innerHTML = unique.join(', ');
            })
        /*____________________________________*/

        fetch("https://pokeapi.co/api/v2/pokemon-species/" + pokeName + "/")
            .then(response => response.json())
            .then(pokemon => {
                var nextEvol=pokemon
                if(pokemon.evolves_from_species==null){ document.getElementById("preEvolname").innerHTML = "First evolution";
                    document.getElementById("preEvol-1").src =" ";
                    document.getElementById("preEvol-1").alt ="No previous evolution";
                }
                else {
                    prevEvol = pokemon.evolves_from_species.name
                    document.getElementById("preEvolname").innerHTML += prevEvol
                    urlPrev = "https://pokeapi.co/api/v2/pokemon/" + prevEvol + "/"
                    return fetch(urlPrev)
                        .then(response => response.json())
                        .then(evolPrev => {
                            imgPrev = evolPrev.sprites
                            document.getElementById("preEvol-1").src = imgPrev.front_default
                        })
                }

            })



    }
})();
