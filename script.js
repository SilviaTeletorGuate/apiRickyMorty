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

const listContainer = document.getElementById("listContainer")
const getData = async () => {
  try{
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const data = await response.json();
    console.log(data)
    listContainer.innerHTML = data.results.map((item) => {
      return (
        `<div class="characters>
      <img src=${item.image} />
      <p>${item.name}</p>
      <p>${item.status}</p>
      <p>${item.species}</p>
      <p>${item.gender}</p>
      </div>`
      )
      
    })
  } catch (error) {
    console.error(error)
  }
};
getData()