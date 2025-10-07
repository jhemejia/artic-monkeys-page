// Arctic Monkeys Tours Data
const toursData = {
  events: [
    {
      month: "December 2024",
      events: [
        {
          day: "15",
          month: "Dec",
          title: "Arctic Monkeys in Madrid",
          location: "WiZink Center, Madrid, Spain",
          dateFull: "Sunday, December 15, 2024",
          ticketStatus: "available",
          ticketUrl: "#",
        },
        {
          day: "18",
          month: "Dec",
          title: "Arctic Monkeys in Barcelona",
          location: "Palau Sant Jordi, Barcelona, Spain",
          dateFull: "Wednesday, December 18, 2024",
          ticketStatus: "sold-out",
          ticketUrl: null,
        },
      ],
    },
    {
      month: "January 2025",
      events: [
        {
          day: "20",
          month: "Jan",
          title: "Arctic Monkeys in London",
          location: "O2 Arena, London, United Kingdom",
          dateFull: "Monday, January 20, 2025",
          ticketStatus: "available",
          ticketUrl: "#",
        },
        {
          day: "25",
          month: "Jan",
          title: "Arctic Monkeys in Manchester",
          location: "AO Arena, Manchester, United Kingdom",
          dateFull: "Saturday, January 25, 2025",
          ticketStatus: "available",
          ticketUrl: "#",
        },
      ],
    },
    {
      month: "February 2025",
      events: [
        {
          day: "10",
          month: "Feb",
          title: "Arctic Monkeys in Paris",
          location: "Accor Arena, Paris, France",
          dateFull: "Monday, February 10, 2025",
          ticketStatus: "available",
          ticketUrl: "#",
        },
        {
          day: "15",
          month: "Feb",
          title: "Arctic Monkeys in Berlin",
          location: "Mercedes-Benz Arena, Berlin, Germany",
          dateFull: "Saturday, February 15, 2025",
          ticketStatus: "available",
          ticketUrl: "#",
        },
        {
          day: "20",
          month: "Feb",
          title: "Arctic Monkeys in Amsterdam",
          location: "Ziggo Dome, Amsterdam, Netherlands",
          dateFull: "Thursday, February 20, 2025",
          ticketStatus: "sold-out",
          ticketUrl: null,
        },
      ],
    },
    {
      month: "March 2025",
      events: [
        {
          day: "05",
          month: "Mar",
          title: "Arctic Monkeys in Milan",
          location: "Mediolanum Forum, Milan, Italy",
          dateFull: "Wednesday, March 5, 2025",
          ticketStatus: "available",
          ticketUrl: "#",
        },
        {
          day: "10",
          month: "Mar",
          title: "Arctic Monkeys in Rome",
          location: "Palalottomatica, Rome, Italy",
          dateFull: "Monday, March 10, 2025",
          ticketStatus: "no-tickets",
          ticketUrl: null,
        },
      ],
    },
  ],
};

// Function to create event card HTML
function createEventCard(event) {
  let ticketButton = "";

  switch (event.ticketStatus) {
    case "available":
      ticketButton = `<a href="${event.ticketUrl}" target="_blank" class="ticket-btn">Get Tickets</a>`;
      break;
    case "sold-out":
      ticketButton = `<span class="ticket-btn sold-out">Sold Out</span>`;
      break;
    case "no-tickets":
      ticketButton = `<span class="ticket-btn no-link">No tickets available</span>`;
      break;
    default:
      ticketButton = `<span class="ticket-btn">Tickets TBA</span>`;
  }

  return `
    <div class="event-card">
      <div class="event-info">
        <div class="event-date">
          <span class="day">${event.day}</span>
          <span class="month">${event.month}</span>
        </div>
        <div class="event-details">
          <h4 class="event-title">${event.title}</h4>
          <p class="event-location">${event.location}</p>
          <p class="event-date-full">${event.dateFull}</p>
        </div>
      </div>
      <div class="event-actions">
        ${ticketButton}
      </div>
    </div>
  `;
}

// Function to create month group HTML
function createMonthGroup(monthData) {
  const eventsHtml = monthData.events
    .map((event) => createEventCard(event))
    .join("");

  return `
    <details class="events-month-group">
      <summary class="month-header">
        <h3>${monthData.month}</h3>
        <span class="toggle-icon">+</span>
      </summary>
      <div class="month-events">
        ${eventsHtml}
      </div>
    </details>
  `;
}

// Function to render all events
function renderEvents() {
  const eventsList = document.querySelector(".events-list");
  if (eventsList) {
    eventsList.innerHTML = toursData.events
      .map((monthData) => createMonthGroup(monthData))
      .join("");
  }
}

// Function to initialize the page
function initializeToursPage() {
  renderEvents();
}

// Initialize when DOM is loaded
document.addEventListener("DOMContentLoaded", initializeToursPage);
