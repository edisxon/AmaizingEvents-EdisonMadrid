

import { renderCards, filterEvents, renderCheck } from "./modules.js"



const cardsContainer = document.getElementById("cardsContainer")
const checkContainer = document.getElementById("checkContainer")
const searchInput = document.getElementById("searchInput")




fetch("https://aulamindhub.github.io/amazing-api/events.json").then(res => res.json()).then(res => {
  renderCheck(res.events, checkContainer)
  renderCards(res.events, cardsContainer)

  const checkboxes = document.querySelectorAll(".formCheck")

  searchInput.addEventListener("input", () => filterEvents(res.events, cardsContainer, searchInput, checkboxes))
  checkboxes.forEach(checkbox => checkbox.addEventListener("change", () => filterEvents(res.events, cardsContainer, searchInput, checkboxes)))

})


