const scenarioData = {
  conservative: {
    name: "Conservative",
    note: "Lower traffic and a slower ramp while the first site establishes repeat customers.",
    avgTicket: "EUR13.80",
    monthlyRevenue: "EUR45k",
    grossMargin: "68%",
    payback: "40 months",
    rent: 13,
    labor: 31,
    cogs: 32
  },
  base: {
    name: "Base case",
    note: "Balanced first-location assumptions for a walkable urban neighborhood.",
    avgTicket: "EUR15.20",
    monthlyRevenue: "EUR61k",
    grossMargin: "71%",
    payback: "30 months",
    rent: 11,
    labor: 28,
    cogs: 29
  },
  optimistic: {
    name: "Optimistic",
    note: "Stronger brand traction, better weekend pull, and higher retail and food attachment.",
    avgTicket: "EUR16.40",
    monthlyRevenue: "EUR76k",
    grossMargin: "73%",
    payback: "22 months",
    rent: 10,
    labor: 26,
    cogs: 27
  }
};

const fields = {
  name: document.getElementById("scenario-name"),
  note: document.getElementById("scenario-note"),
  avgTicket: document.getElementById("avg-ticket"),
  monthlyRevenue: document.getElementById("monthly-revenue"),
  grossMargin: document.getElementById("gross-margin"),
  payback: document.getElementById("payback"),
  rentShare: document.getElementById("rent-share"),
  laborShare: document.getElementById("labor-share"),
  cogsShare: document.getElementById("cogs-share"),
  rentBar: document.getElementById("rent-bar"),
  laborBar: document.getElementById("labor-bar"),
  cogsBar: document.getElementById("cogs-bar")
};

function renderScenario(key) {
  const scenario = scenarioData[key];
  fields.name.textContent = scenario.name;
  fields.note.textContent = scenario.note;
  fields.avgTicket.textContent = scenario.avgTicket;
  fields.monthlyRevenue.textContent = scenario.monthlyRevenue;
  fields.grossMargin.textContent = scenario.grossMargin;
  fields.payback.textContent = scenario.payback;
  fields.rentShare.textContent = `${scenario.rent}%`;
  fields.laborShare.textContent = `${scenario.labor}%`;
  fields.cogsShare.textContent = `${scenario.cogs}%`;
  fields.rentBar.style.width = `${scenario.rent * 3}%`;
  fields.laborBar.style.width = `${scenario.labor * 3}%`;
  fields.cogsBar.style.width = `${scenario.cogs * 3}%`;
}

document.querySelectorAll(".scenario-button").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelector(".scenario-button.active")?.classList.remove("active");
    button.classList.add("active");
    renderScenario(button.dataset.scenario);
  });
});

renderScenario("base");
