const morty = 'https://rickandmortyapi.com/api/character/';
const contenedorPersonajes = document.getElementById('personajes');

fetch(morty)
    .then(response => response.json())
    .then(data => {
        const Personajes = data.results.slice(0,8);

        Personajes.forEach(personaje => {
            const personajeSection = document.createElement('section');
            personajeSection.classList.add('personaje');
            personajeSection.innerHTML = `
        <img src="${personaje.image}" alt="${personaje.name}">
        <h2>${personaje.name}</h2>
        <p>Sexo: ${personaje.gender}</p>
        <p>status: ${personaje.status}</p>
        <p>origin: ${personaje.origin.name}</p>
      `;
            contenedorPersonajes.appendChild(personajeSection);
        });
    })
    .catch(error => {
        console.error('Error:', error);
    });
