
const projects = [
  {
    number: "01",
    title: "Self-Service Printing Kiosk",
    description:
      "A printing kiosk concept with QR ticketing, document uploads, print settings, and hybrid cash and cashless payments.",
    tags: "WEB DEVELOPMENT · PYTHON · RASPBERRY PI"
  },
  {
    number: "02",
    title: "Inav — Campus Guide",
    description:
      "A campus guide concept designed to help students find offices, building directions, document requirements, and school information.",
    tags: "HTML · CSS · JAVASCRIPT · UI DESIGN"
  },
  {
    number: "03",
    title: "AquaSense",
    description:
      "A portable water-quality monitoring prototype concept using sensors to assess water parameters and display status indicators.",
    tags: "IOT · SENSORS · EMBEDDED SYSTEMS"
  },
  {
    number: "04",
    title: "Health Monitoring Prototypes",
    description:
      "Academic prototype concepts exploring basic health measurements and understandable status indicators.",
    tags: "ENGINEERING · PROTOTYPING · SENSORS"
  }
];

const projectList = document.getElementById("project-list");

if (projectList) {
  projectList.innerHTML = projects.map(project => `
    <article class="project-card">
      <span class="project-number">${project.number} / PROJECT</span>
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <div class="project-tags">${project.tags}</div>
    </article>
  `).join("");
}
