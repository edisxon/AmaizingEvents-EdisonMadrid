

import { renderCards, filterEvents, renderCheck } from "./modules.js"



const cardsContainer = document.getElementById("cardsContainer")
const checkContainer = document.getElementById("checkContainer")
const searchInput = document.getElementById("searchInput")



fetch("https://aulamindhub.github.io/amazing-api/events.json").then(res => res.json()).then(res => {

  const currentDate = res.currentDate
  const upcomingEvents = res.events.filter(event => (event.date) >= currentDate)
  
  
  
  renderCheck(res.events, checkContainer)
  renderCards(upcomingEvents, cardsContainer)

  const checkboxes = document.querySelectorAll(".formCheck")

  searchInput.addEventListener("input", () => filterEvents(upcomingEvents, cardsContainer, searchInput, checkboxes))
  checkboxes.forEach(checkbox => checkbox.addEventListener("change", () => filterEvents(upcomingEvents, cardsContainer, searchInput, checkboxes)))

})



