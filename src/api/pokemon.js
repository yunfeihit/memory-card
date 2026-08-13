const pokemonImgUrlsPromise =
    fetch("https://pokeapi.co/api/v2/pokemon?limit=20")
        .then(response => response.json())
        .then(searchResults => Promise.all(
            searchResults.results.map(searchResult =>
                fetch(searchResult.url)
                    .then(res => res.json())
                    .then(pokemonResult => 
                        pokemonResult.sprites.other["official-artwork"].front_default
                    )
            ))
        )

export default pokemonImgUrlsPromise;

// test:
// pokemonImgUrlsPromise.then(urls => console.log(urls));