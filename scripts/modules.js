

export function renderCards (array, container){
    for (let i=0; i<array.length; i++){
        const card = document.createElement("div")
        card.classList.add("card")
        card.innerHTML = `
        <img src="${array[i].image}" class="card-img-top cardImg" alt="${array[i].name}">
        <div class="card-body">
            <h5 class="card-title text-center">${array[i].name}</h5>
            <div class="textContainer mb-4">
              <p class="card-text">${array[i].description}</p>
            </div>
            <div class="cardButtonContainer ">
              <span class="textCard">$${array[i].price}</span>
              <a href="./details.html?id=${array[i]._id}" class="btn btn-secondary">Details</a>
            </div>
            
        </div>`
        container.appendChild(card)
    }

}

export function filterEvents(eventsArray, container, searchInput, checkboxes) {
    const searchText = searchInput.value.toLowerCase()
    const selectedCategories = Array.from(checkboxes).filter(checkbox => checkbox.checked).map(checkbox => checkbox.value)
  
    let filteredEvents = eventsArray.filter(event => {
      const matchesSearch = event.name.toLowerCase().includes(searchText)
      const matchesCategory = (selectedCategories.length === 0) || selectedCategories.includes(event.category)
      return matchesSearch && matchesCategory;
    });
  
    if (filteredEvents.length === 0) {
      const kindMessage = document.createElement("h2")
      kindMessage.innerHTML = "Sorry, there are no matching events"
      container.innerHTML = ''
      container.appendChild(kindMessage)
    } else {
      container.innerHTML = ''
      renderCards(filteredEvents, container)
    }
}

export function renderCheck(array, container){
    const arrayCheck = []
    array.forEach(elem => {
      if (arrayCheck.includes(elem.category) === false){
        arrayCheck.push(elem.category)
      }
    })
  
    arrayCheck.forEach(elem => {
      const check = document.createElement("div")
      check.innerHTML = `
        <input class="formCheck" type="checkbox" value="${elem}" name="${elem}">
        <label class="formCheckLabel" for="${elem}">
          ${elem}
        </label>`
        container.appendChild(check)
    })
  
}