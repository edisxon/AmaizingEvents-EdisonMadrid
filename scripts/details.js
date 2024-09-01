





function renderEventDetails(event) {
    const eventDetailsContainer = document.querySelector(".details")
    eventDetailsContainer.innerHTML = `
        <section class="w-50 navbar d-flex justify-content-around flex-wrap">
          <div>
            <img class="detailsImg" src="${event.image}" alt="${event.name}">
          </div>
            
          <div>
            <h3 class="text-center detailsTitle">${event.name}</h3>
            <ul class="list-group p-4">
              <li class="">date: ${event.date}</li>
              <li class="">category: ${event.category}</li>
              <li class="">place: ${event.place}</li>
              <li class="">capacity: ${event.capacity}</li>
              <li class="">${event.assistance ? 'assistance' : 'estimate'}: ${event.assistance || event.estimate}</li>
              <li class="">price: $${event.price}</li>
            </ul>
          </div>
        </section>`
}



const params = new URLSearchParams(window.location.search)
const eventId = parseInt(params.get('id')) 
console.log(eventId);







fetch("https://aulamindhub.github.io/amazing-api/events.json").then(res => res.json()).then(data => {
  console.log(data);
  const events = data.events
  console.log(events);
  
  const evento = data.events.find(event => event._id === eventId)
  console.log(evento);
  
  renderEventDetails(evento)

})