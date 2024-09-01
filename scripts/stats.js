
const maxTable = document.getElementById("maxTable")
const upcomingTable = document.getElementById("upcomingTable")
const pastTable = document.getElementById("pastTable")




fetch("https://aulamindhub.github.io/amazing-api/events.json").then(res => res.json()).then(res => {
    
    const events = res.events
    const currentDate = res.currentDate
    const upcomingEvents = res.events.filter(event => (event.date) >= currentDate)
    const pastEvents = res.events.filter(event => (event.date) < currentDate)
    

    let maxEvent = events[0]
    let minEvent = events[0]
    let maxCapacityEvent = events[0]
    
    pastEvents.forEach(event => {
        const currentPercentage = porcentaje(event)
    
        
        if (currentPercentage > porcentaje(maxEvent)) {
            maxEvent = event
        }
    

        if (currentPercentage < porcentaje(minEvent)) {
            minEvent = event
        }
    })
    events.forEach(event => {
        if (event.capacity > maxCapacityEvent.capacity) {
            maxCapacityEvent = event
        }
    })

    const firstRow = document.createElement("tr")
    firstRow.innerHTML=`
    <td>${maxEvent.name}</td>
    <td>${minEvent.name}</td>
    <td>${maxCapacityEvent.name}</td>
    `
    maxTable.appendChild(firstRow)

    const statsByCategory = {}

    upcomingEvents.forEach(event => {
 
    if (!statsByCategory[event.category]) {
        statsByCategory[event.category] = {
        revenue: 0,
        totalestimate: 0,
        totalCapacity: 0
        }
    }

    

    statsByCategory[event.category].revenue += event.price * event.estimate
    statsByCategory[event.category].totalestimate += event.estimate
    statsByCategory[event.category].totalCapacity += event.capacity
    });


    

    Object.keys(statsByCategory).forEach(category => {
    const stats = statsByCategory[category]
    const percentageestimate = ((stats.totalestimate / stats.totalCapacity) * 100)

    const row = document.createElement("tr");
    row.innerHTML = `
        <tr>
        <td>${category}</td>
        <td>${stats.revenue}</td>
        <td>${percentageestimate}%</td>
        </tr>
    `

    upcomingTable.appendChild(row)
    })






    const statsByCategory2 = {}

    pastEvents.forEach(event => {
 
    if (!statsByCategory2[event.category]) {
        statsByCategory2[event.category] = {
        revenue: 0,
        totalassistance: 0,
        totalCapacity: 0
        }
    }

    

    statsByCategory2[event.category].revenue += event.price * event.assistance
    statsByCategory2[event.category].totalassistance += event.assistance
    statsByCategory2[event.category].totalCapacity += event.capacity
    });

    
    

    Object.keys(statsByCategory2).forEach(category => {
    const stats = statsByCategory2[category]
    const percentageassistance = ((stats.totalassistance / stats.totalCapacity) * 100)

    const row = document.createElement("tr");
    row.innerHTML = `
        <tr>
        <td>${category}</td>
        <td>${stats.revenue}</td>
        <td>${percentageassistance}%</td>
        </tr>
    `

    pastTable.appendChild(row)
    })

})


function porcentaje(event) {
    return (event.assistance / event.capacity) * 100
}