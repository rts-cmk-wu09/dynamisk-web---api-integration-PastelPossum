import axios from "./node_modules/axios/dist/esm/axios.js"

const pokemonWrap = document.querySelector(".pokemon-wrapper")

axios.get(`https://pokeapi.co/api/v2/pokemon/`)
.then(res => {

    res.data.results.forEach(pokemon => {

        pokemonWrap.innerHTML += `
            
      <div class="cards">
      <h2>${pokemon.name}</h2>
      <p><a href="details.html?name=${pokemon.name}">More</a></p>
      </div>
      `

    })

})
