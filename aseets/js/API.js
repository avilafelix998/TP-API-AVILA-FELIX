
let currentpage = 1;
//esta funcion sirve para agarrar los datos de la API con manejos de errores
async function fetchcharacter(){
    const URL = `https://rickandmortyapi.com/api/character?page=${currentpage}`;
    try {
        const response = await fetch(URL);
        console.log(response);
        if (!response.ok) {
            throw new Error(`error: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
        mostrarcharacter(data.results);
    } catch (error) {
        console.error("error fetching characters", error);
    }
}
// esta funcion es para renderizar los datos de la API 
function mostrarcharacter(characters) {
    const container = document.getElementById("characters");
    if (container) {
        characters.forEach((character) => {
            const characterElement = document.createElement("div");
            characterElement.className = "character";
            characterElement.innerHTML = `
                <img src="${character.image}" alt="${character.name}">
                <h2>${character.name}</h2>
                `;
            container.appendChild(characterElement);
        });
    } else {
        console.error("El contenedor de personajes no se encontró.");
    }
}

// Llamada a fetchcharacter en lugar de mostrarcharacter
fetchcharacter();

