

import { renderCards, filterEvents, renderCheck } from "./modules.js"



const cardsContainer = document.getElementById("cardsContainer")
const checkContainer = document.getElementById("checkContainer")
const searchInput = document.getElementById("searchInput")



fetch("https://aulamindhub.github.io/amazing-api/events.json").then(res => res.json()).then(res => {

  const currentDate = res.currentDate
  const pastEvents = res.events.filter(event => (event.date) < currentDate)
 
  
  
  renderCheck(res.events, checkContainer)
  renderCards(pastEvents, cardsContainer)

  const checkboxes = document.querySelectorAll(".formCheck")

  searchInput.addEventListener("input", () => filterEvents(pastEvents, cardsContainer, searchInput, checkboxes))
  checkboxes.forEach(checkbox => checkbox.addEventListener("change", () => filterEvents(pastEvents, cardsContainer, searchInput, checkboxes)))

})

