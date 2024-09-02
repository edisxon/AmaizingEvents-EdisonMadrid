





function renderEventDetails(event) {
    const eventDetailsContainer = document.querySelector(".details")
    eventDetailsContainer.innerHTML = `
        <section class="w-50 navbar d-flex justify-content-around flex-wrap detailCard">
          <div>
            <img class="detailsImg" src="${event.image}" alt="${event.name}">
          </div>
            
          <div class="detailText">
            <h3 class="text-center detailsTitle">${event.name}</h3>
            <ul class="list-group p-4">
              <li class=""><span class="detailsSpan">date</span>: ${event.date}</li>
              <li class=""><span class="detailsSpan">category</span>: ${event.category}</li>
              <li class=""><span class="detailsSpan">place</span>: ${event.place}</li>
              <li class=""><span class="detailsSpan">capacity</span>: ${event.capacity}</li>
              <li class=""><span class="detailsSpan">${event.assistance ? 'assistance' : 'estimate'}</span>: ${event.assistance || event.estimate}</li>
              <li class=""><span class="detailsSpan">price</span>: $${event.price}</li>
            </ul>
          </div>
        </section>`
}



const params = new URLSearchParams(window.location.search)
const eventId = parseInt(params.get('id')) 








fetch("https://aulamindhub.github.io/amazing-api/events.json").then(res => res.json()).then(data => {

  const events = data.events

  const evento = data.events.find(event => event._id === eventId)

  renderEventDetails(evento)

})