const listContainer = document.getElementById('listContainer')



const getData = async () => {
  try {
    /* const response = await fetch('https://jsonplaceholder.typicode.com/posts'); */
    const response = await fetch('https://rickandmortyapi.com/api/character');
    const data = await response.json();
    
    
    listContainer.innerHTML = data.results?.map((item) => {
      return(
        `<div class="characters">
          <image src=${item.image} />
          <p>${item.name}</p>
        </div>`
      )
    })


  } catch (error) {
    console.error(error)
}

};


getData()