const pokemonWrap = document.querySelector(".pokemon-wrapper")

const pokemonNames = ["sobble", "kecleon", "phantump","banette", "bronzor", "kricketune"]

pokemonNames.forEach(name => {

    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then(res => res.json())
        .then(data =>{

            pokemonWrap.innerHTML += `
            
            <div class="cards">

            <h2>${data.name}</h2>
            <img src="${data.sprites.front_default}" alt="">

            <p><a href="details.html?name=${data.name}">More</a></p>

            </div>
            
            `

        })

})