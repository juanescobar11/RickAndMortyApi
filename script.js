
let contenedorPersonajes = document.getElementById("personajes");

fetch("https://rickandmortyapi.com/api/character")
  .then((response) => response.json())
  .then((datos) => {

    console.log(datos);
    console.log(datos.results);

    datos.results.forEach(elementos => {
      // console.log(elementos.name);

      const contenedorCreado = document.createElement('div');

      contenedorCreado.innerHTML = `
        <h4>Nombre del Personaje: ${elementos.name}</h4>
        <h4>Estado actual: ${elementos.status}</h4>
        <h4>Especie: ${elementos.species}</h4>
        <h4>genero: ${elementos.gender}</h4>
        <h4>ID: ${elementos.id}</h4>
        <h4>Url en formato Json: ${elementos.url}</h4>
        <img src="${elementos.image}">
        <br>
      `;

      contenedorPersonajes.appendChild(contenedorCreado); // Momento en que se agrega el div al contenedor principal
    });
  });


