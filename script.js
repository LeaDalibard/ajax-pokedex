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

      fetch("https://pokeapi.co/api/v2/pokemon-species/"+ pokeName + "/")
         .then(response => response.json())
          .then(pokemon => console.log(pokemon))


    }
})();
/*

 function groupBy(OurArray, property) {
        return OurArray.reduce(function (accumulator, object) {
            // get the value of our object(age in our case) to use for group    the array as the array key
            const key = object[property];
            // if the current value is similar to the key(age) don't accumulate the transformed array and leave it empty
            if (!accumulator[key]) {
                accumulator[key] = [];
            }
            // add the value to the array
            accumulator[key].push(object);
            // return the transformed array
            return accumulator;
// Also we also set the initial value of reduce() to an empty object
        }, {});
    }

let arrMoves = pokemon.moves
                    let moves = []
                    const randomArray = []
                    var keys = Object.values(arrMoves);
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
                    document.getElementById("pokMove").innerHTML = Object.values(moves)
                    console.log(Object.values(moves))
                    console.log(keys)
 */