/*const container = document.getElementById("container")

const getData = async () => {
  try{
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const 
    theDates = await response.json();
    console.log(theDates)

    container.innerHTML = theDates.map((item) => {
      return (
        `<div class="information">
        <p>${item.title}</p>
        <p>${item.body}</p>
        </div>
        `
      )
    })
  } catch (error) {
    console.error(error)
  }
};
getData()*/

const searchEntrada = document.getElementById("searchInput")
const button = document.getElementById("searchCharacters")
const listContainer = document.getElementById("listContainer")

const getData = async (name = "") => {
  try{
    const url = name 
    ? `https://rickandmortyapi.com/api/character/?name=${name}`
      : "https://rickandmortyapi.com/api/character";
      const response = await fetch(url);
      if (!response.ok) {
        if (name !== "") {
       listContainer.innerHTML = "<p>No se encontraron personajes</p>"; 
       setTimeout(() => getData(), 2000);
        return;
      } else {
        throw new Error("Error al cargar personajes");
      }
      }
    const data = await response.json();
    console.log(data)

    if (data.results) {
    listContainer.innerHTML = data.results.map((item) =>
        `<div class="characters">
      <img src=${item.image} />
      <p>${item.name}</p>
      <p>${item.status}</p>
      <p>${item.species}</p>
      <p>${item.gender}</p>
      </div>`
      ).join("");
    } else {
      listContainer.innerHTML = "<p>No se encontraron personajes</p>";
    }
  } catch (error) {
    console.error(error)
    listContainer.innerHTML ="<p>Error al buscar personaje</p>";
  }
};
  
    
      

    

 button.addEventListener("click", () => {
  getData(searchInput.value.trim());
 });

 searchEntrada.addEventListener("keydown", (event) => {
if (event.key === "Enter") {
  getData(searchEntrada.value.trim());
}
 });

getData()