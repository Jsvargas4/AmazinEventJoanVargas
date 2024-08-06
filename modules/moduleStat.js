//events Statics
export function eventStatics() {
    fetch('https://aulamindhub.github.io/amazing-api/events.json')
      .then(response => response.json())
        
      .then(data => {
        const tableHTML = crearTablaHTML(data);
  
        const tableContainer = document.getElementById('eventStatics');
        tableContainer.innerHTML = tableHTML;
      })
      .catch(error => {
        console.error('Error al obtener los datos:', error);
  
        const tableContainer = document.getElementById('eventStatics');
        tableContainer.innerHTML = '<p>No Data Found.</p>';
      });
  }

  export function crearTablaHTML(data) {
  
    const calculateAssistancePercentage = (assistance, capacity) => {
      return ((assistance / capacity) * 100).toFixed(2);
    };
  
  
    const highestAssistanceEvent = data.events.reduce((prev, current) => {
      const prevPercentage = calculateAssistancePercentage(prev.assistance || prev.estimate, prev.capacity);
      const currentPercentage = calculateAssistancePercentage(current.assistance || current.estimate, current.capacity);
      return prevPercentage > currentPercentage ? prev : current;
    });
  
    const lowestAssistanceEvent = data.events.reduce((prev, current) => {
      const prevPercentage = calculateAssistancePercentage(prev.assistance || prev.estimate, prev.capacity);
      const currentPercentage = calculateAssistancePercentage(current.assistance || prev.estimate, current.capacity);
      return prevPercentage < currentPercentage ? prev : current;
    });
  
  
    const largestCapacityEvent = data.events.reduce((prev, current) => {
      return prev.capacity > current.capacity ? prev : current;
    });
  
  //tabla uno
    let tableHTML = `
        <table class="table table-light table-hover table-bordered">
            <thead class="table-dark">
                <tr>
                    <th colspan="3">Events Statistics</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>Events with highest % of assistance</th>
                    <th>Events with lowest % of assistance</th>
                    <th>Events with large capacity</th>
                </tr>
                <tr>
                    <td>${highestAssistanceEvent.name} (${calculateAssistancePercentage(highestAssistanceEvent.assistance, highestAssistanceEvent.capacity)}%)</td>
                    <td>${lowestAssistanceEvent.name} (${calculateAssistancePercentage(lowestAssistanceEvent.assistance, lowestAssistanceEvent.capacity)}%)</td>
                    <td>${largestCapacityEvent.name} (${largestCapacityEvent.capacity})</td>
                </tr>
            </tbody>
            </table> 
                       
    `;
  
    return tableHTML;
  
  }

  //upcomingEvents
  export async function upcomingEvents() {
  
    const tableContainer = document.getElementById('upcomingEvents');
  
  
    const response = await fetch('https://aulamindhub.github.io/amazing-api/events.json');
    const data = await response.json();
  
  
    const futureEvents = data.events.filter(event => new Date(event.date) > new Date(data.currentDate));
  
  
    const eventsByCategory = {};
    futureEvents.forEach(event => {
      if (!eventsByCategory[event.category]) {
        eventsByCategory[event.category] = {
          revenue: 0,
          totalAssistance: 0,
          capacity: 0
        };
      }
      eventsByCategory[event.category].revenue += event.price * (event.assistance || event.estimate);
      eventsByCategory[event.category].totalAssistance += event.assistance || event.estimate;
      eventsByCategory[event.category].capacity += event.capacity;
    });
  
  
    let tableHTML = `
        <table class="table table-light table-hover table-bordered">
            <thead class="table-dark">
                <tr>
                    <th colspan="3">Upcoming events Statistics by category</th>
                </tr>
            </thead>     
                <tr>
                    <th>Categories</th>
                    <th>Revenues</th>
                    <th>Porcentage of assistance</th>
                </tr>
            
  
            <tbody>`;
  
  
    for (const category in eventsByCategory) {
      const { revenue, totalAssistance, capacity } = eventsByCategory[category];
      const percentage = ((totalAssistance / capacity) * 100).toFixed(2);
      tableHTML += `
            <tr>
                <td>${category}</td>
                <td>$${revenue}</td>
                <td>${percentage}%</td>
            </tr>`;
    }
  
    tableHTML += `
            </tbody>
        </table>`;
  
  
    tableContainer.innerHTML = tableHTML;
  }

  //pastEvents
  export async function pastEvents() {
  
    const tableContainerDos = document.getElementById('pastEvents');
  
    const response = await fetch('https://aulamindhub.github.io/amazing-api/events.json');
    const data = await response.json();
  
    const pastEvents = data.events.filter(event => new Date(event.date) < new Date(data.currentDate));
  
  
    const eventsByCategory = {};
    pastEvents.forEach(event => {
      if (!eventsByCategory[event.category]) {
        eventsByCategory[event.category] = {
          revenue: 0,
          totalAssistance: 0,
          capacity: 0
        };
      }
      eventsByCategory[event.category].revenue += event.price * (event.assistance || event.estimate);
      eventsByCategory[event.category].totalAssistance += event.assistance || event.estimate;
      eventsByCategory[event.category].capacity += event.capacity;
    });
  
  
    let tableHTML = `
      <table class="table table-light table-hover table-bordered">
        <thead class="table-dark">
          <tr>
            <th colspan="3">Past events Statistics by category</th>
          </tr>
      </thead>     
          <tr>
            <th>Categories</th>
            <th>Revenues</th>
            <th>Porcentage of assistance</th>
          </tr>
        
  
        <tbody>`;
  
  
    for (const category in eventsByCategory) {
      const { revenue, totalAssistance, capacity } = eventsByCategory[category];
      const percentage = ((totalAssistance / capacity) * 100).toFixed(2);
      tableHTML += `
        <tr>
          <td>${category}</td>
          <td>$${revenue}</td>
          <td>${percentage}%</td>
        </tr>`;
    }
  
    tableHTML += `
        </tbody>
      </table>`;
  
  
    tableContainerDos.innerHTML = tableHTML;
  }