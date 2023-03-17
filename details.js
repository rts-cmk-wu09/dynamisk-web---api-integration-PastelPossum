const params = new URLSearchParams(document.location.search)
const pokemon = params.get("name")
const detailsWrap = document.querySelector(".wrapper")

fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)

    .then(response => response.json())
    .then((data) => {


        detailsWrap.innerHTML += `
        
        <figure class="hero-wrap">

            <img class="hero" src="/img/Pokemon-logo-497D61B223-seeklogo.com.png" alt="">
           
           </figure>

        <h1 class="details-name">${data.name}</h1>

        <div class="sprites-wrap">
            <figure class="sprites">

                <img src="${data.sprites.front_default}" alt="">
                <img src="${data.sprites.front_shiny}" alt="">

            </figure>

            <section class="sprites-text">

                <p>Normal</p>
                <p>Shiny</p>

            </section>
        </div>

        <section class="details-info">

            <dl>

                <dt>Type:</dt>
                <dd class="uppercase">${data.types[0].type.name}</dd>
                <dt>Height:</dt>
                <dd>${data.height}</dd>
                <dt>Weight</dt>
                <dd>${data.weight}</dd>

            </dl>

        </section>

        `

    })
