(() => {
    fetch("https://pokeapi.co/api/v2/")
        .then(response=>response.json())
        .then(pokemon=>{
            console.log(pokemon)})
})();
