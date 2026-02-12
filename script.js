document.addEventListener("DOMContentLoaded", () => {
  const boton = document.getElementById("btn-buscar");
  const contenedor = document.getElementById("resultados");

  boton.addEventListener("click", async () => {
    try {
      const response = await fetch("https://rickandmortyapi.com/api/character");
      const data = await response.json();
      mostrarPersonajes(data.results);
    } catch (error) {
      console.error("Error al buscar personajes:", error);
    }
  });

  const mostrarPersonajes = (personajes) => {
    contenedor.innerHTML = ""; // Limpiar antes de mostrar

    personajes.forEach(personaje => {
      const card = document.createElement("div");
      card.classList.add("personaje-card"); // opcional para estilos

      card.innerHTML = `
        <img src="${personaje.image}" alt="${personaje.name}">
        <h3>${personaje.name}</h3>
        <p>${personaje.species}</p>
      `;

      contenedor.appendChild(card);
    });
  };
});

