const metrics = [
  {
    id: "mutual-understanding",
    name: "Mutual Understanding",
    definition: "CGI and the client understand each other's goals, constraints, and working context.",
    green: "Shared priorities are clear and both sides understand what success looks like.",
    amber: "Some expectations differ or assumptions need to be checked.",
    red: "Goals, constraints, or success measures are unclear or disputed.",
    prompt: "Where are we making assumptions about the client's priorities?"
  },
  {
    id: "trust-transparency",
    name: "Trust and Transparency",
    definition: "The relationship supports honest discussion, early escalation, and shared facts.",
    green: "Issues are raised early and conversations are open.",
    amber: "Some topics are avoided or surfaced late.",
    red: "Important information is withheld, challenged, or escalated unexpectedly.",
    prompt: "What would make difficult conversations easier?"
  },
  {
    id: "working-rhythm",
    name: "Working Rhythm",
    definition: "Meetings, governance, cadence, and ways of working are effective.",
    green: "Governance is useful, regular, and decision-focused.",
    amber: "Cadence exists but decisions or follow-through are inconsistent.",
    red: "The working model creates friction, delay, or duplicated effort.",
    prompt: "Which meeting or handoff creates the most drag?"
  },
  {
    id: "value-beyond-contract",
    name: "Value Beyond Contract",
    definition: "CGI is seen to add value beyond delivery of contracted scope.",
    green: "The client sees CGI bringing insight, ideas, and practical value.",
    amber: "Value is mostly delivery-led and not always visible.",
    red: "CGI is seen mainly as a transactional supplier.",
    prompt: "Where could CGI bring useful perspective beyond the contract?"
  },
  {
    id: "executive-alignment",
    name: "Executive Alignment",
    definition: "Senior stakeholders are engaged, aligned, and able to resolve issues.",
    green: "Sponsors are active, aligned, and available when decisions are needed.",
    amber: "Executive contact exists but lacks rhythm or clarity.",
    red: "Senior alignment is absent, fragile, or reactive.",
    prompt: "Which senior relationship needs attention before the next decision point?"
  },
  {
    id: "future-outlook",
    name: "Future Outlook",
    definition: "The relationship feels sustainable and has credible future opportunity.",
    green: "There is a clear path for continued relationship health or growth.",
    amber: "Future opportunity exists but depends on near-term action.",
    red: "Renewal, extension, or future partnership looks at risk.",
    prompt: "What should change in the next 30 days to improve the outlook?"
  }
];

const clients = [
  {
    id: "acme",
    name: "Acme Financial Services",
    accountDirector: "Priya Shah",
    deliveryManager: "Morgan Lee",
    fyMargin: "18.4%",
    fyRevenue: "GBP 4.8m",
    csap: "7.6",
    contractEnd: "31 Mar 2027",
    overall: "Amber",
    lowestMetric: "Executive Alignment",
    status: "Complete",
    updated: "10 Jun 2026",
    openActions: 2,
    summary: "The account is commercially stable and delivery performance is broadly trusted. Executive engagement needs a firmer rhythm before renewal planning starts.",
    support: "Sponsor-to-sponsor check-in and a short renewal readiness conversation would help create clearer alignment.",
    ratings: {
      "mutual-understanding": "Green",
      "trust-transparency": "Green",
      "working-rhythm": "Amber",
      "value-beyond-contract": "Amber",
      "executive-alignment": "Amber",
      "future-outlook": "Amber"
    }
  },
  {
    id: "northbank",
    name: "Northbank Utilities",
    accountDirector: "Jamie Fraser",
    deliveryManager: "Anika Patel",
    fyMargin: "22.1%",
    fyRevenue: "GBP 3.1m",
    csap: "8.4",
    contractEnd: "30 Sep 2028",
    overall: "Green",
    lowestMetric: "Working Rhythm",
    status: "Confirmed",
    updated: "06 Jun 2026",
    openActions: 0,
    summary: "The relationship is healthy with clear governance and visible value from the delivery team.",
    support: "No additional engagement support required at this stage.",
    ratings: {
      "mutual-understanding": "Green",
      "trust-transparency": "Green",
      "working-rhythm": "Green",
      "value-beyond-contract": "Green",
      "executive-alignment": "Green",
      "future-outlook": "Green"
    }
  },
  {
    id: "helio",
    name: "Helio Health Group",
    accountDirector: "Sam Chen",
    deliveryManager: "Olivia Brown",
    fyMargin: "9.8%",
    fyRevenue: "GBP 2.4m",
    csap: "6.1",
    contractEnd: "15 Dec 2026",
    overall: "Red",
    lowestMetric: "Trust and Transparency",
    status: "Not complete",
    updated: "04 Jun 2026",
    openActions: 3,
    summary: "Several operational issues have landed late and there is limited agreement on root causes.",
    support: "Prepare a joint issue review with agreed facts, clear action owners, and executive visibility.",
    ratings: {
      "mutual-understanding": "Amber",
      "trust-transparency": "Red",
      "working-rhythm": "Amber",
      "value-beyond-contract": "Amber",
      "executive-alignment": "Red",
      "future-outlook": "Red"
    }
  },
  {
    id: "westhaven",
    name: "Westhaven Council",
    accountDirector: "Leila Khan",
    deliveryManager: "Chris Morgan",
    fyMargin: "15.2%",
    fyRevenue: "GBP 1.9m",
    csap: "7.2",
    contractEnd: "30 Jun 2027",
    overall: "Amber",
    lowestMetric: "Future Outlook",
    status: "Reworked",
    updated: "02 Jun 2026",
    openActions: 1,
    summary: "Day-to-day delivery is steady but future direction and roadmap value need a stronger conversation.",
    support: "Confirm roadmap discussion with client leadership and agree a follow-up decision forum.",
    ratings: {
      "mutual-understanding": "Green",
      "trust-transparency": "Amber",
      "working-rhythm": "Green",
      "value-beyond-contract": "Amber",
      "executive-alignment": "Amber",
      "future-outlook": "Amber"
    }
  }
];

const supportActions = [
  {
    client: "Acme Financial Services",
    metric: "Executive Alignment",
    action: "Arrange sponsor-to-sponsor check-in before renewal planning.",
    owner: "Priya Shah",
    due: "24 Jun 2026",
    status: "Open"
  },
  {
    client: "Helio Health Group",
    metric: "Trust and Transparency",
    action: "Prepare joint issue review with agreed facts and next-step owners.",
    owner: "Morgan Lee",
    due: "18 Jun 2026",
    status: "Open"
  },
  {
    client: "Westhaven Council",
    metric: "Future Outlook",
    action: "Confirm roadmap discussion with client leadership.",
    owner: "Leila Khan",
    due: "01 Jul 2026",
    status: "In progress"
  }
];

const appShell = document.getElementById("appShell");
const view = document.getElementById("view");
const breadcrumbs = document.getElementById("breadcrumbs");
const headerAction = document.getElementById("headerAction");
const supportDrawer = document.getElementById("supportDrawer");

const state = {
  filter: "All",
  formStep: 0,
  metricTab: "mutual-understanding",
  assessmentRatings: Object.fromEntries(metrics.map((metric) => [metric.id, "Amber"])),
  confidence: Object.fromEntries(metrics.map((metric) => [metric.id, "Medium"]))
};

function currentPath() {
  return decodeURIComponent(window.location.hash.replace(/^#/, "")) || "/";
}

function clientById(id) {
  return clients.find((client) => client.id === id) || clients[0];
}

function ratingClass(value) {
  return String(value || "neutral").toLowerCase().replace(/\s+/g, "-");
}

function statusClass(value) {
  return String(value || "draft").toLowerCase().replace(/\s+/g, "-");
}

function ragBadge(value) {
  return `<span class="rag-badge ${ratingClass(value)}">${value}</span>`;
}

function statusPill(value) {
  return `<span class="status-pill ${statusClass(value)}">${value}</span>`;
}

function moneyNote(value) {
  return `<span class="row-meta">${value}</span>`;
}

function iconSvg(name) {
  const icons = {
    plus: '<path d="M12 5v14M5 12h14"></path>',
    arrow: '<path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path>',
    close: '<path d="M18 6 6 18"></path><path d="m6 6 12 12"></path>'
  };
  return `<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">${icons[name] || icons.arrow}</svg>`;
}

function setBreadcrumbs(items) {
  breadcrumbs.innerHTML = items
    .map((item, index) => {
      const isLast = index === items.length - 1;
      const label = isLast ? `<strong>${item.label}</strong>` : `<a href="#${item.href}">${item.label}</a>`;
      const separator = isLast ? "" : '<span class="breadcrumb-separator">›</span>';
      return `${label}${separator}`;
    })
    .join("");
}

function setHeaderAction(html = "") {
  headerAction.innerHTML = html;
}

function updateNavActive(path) {
  const links = document.querySelectorAll("[data-nav-link]");
  links.forEach((link) => {
    const target = link.getAttribute("data-nav-link");
    const active =
      target === "/"
        ? path === "/"
        : path === target || path.startsWith(`${target}/`);
    link.classList.toggle("is-active", active);
  });
}

function pageTitle(title, subtitle, action = "") {
  return `
    <div class="page-title-row">
      <div class="title-block">
        <h1>${title}</h1>
        ${subtitle ? `<p class="subtitle">${subtitle}</p>` : ""}
      </div>
      ${action}
    </div>
  `;
}

function kpiCard(label, value, note) {
  return `
    <article class="kpi-card">
      <div class="kpi-label">${label}</div>
      <div class="kpi-value">${value}</div>
      <p class="kpi-note">${note}</p>
    </article>
  `;
}

function clientRows(items = clients) {
  return items
    .map(
      (client) => `
        <tr>
          <td><a href="#/clients/${client.id}">${client.name}</a></td>
          <td>${client.accountDirector}</td>
          <td>${client.deliveryManager}</td>
          <td>${ragBadge(client.overall)}</td>
          <td>${client.lowestMetric}</td>
          <td>${client.openActions}</td>
          <td>${client.updated}</td>
          <td>${statusPill(client.status)}</td>
        </tr>
      `
    )
    .join("");
}

function clientTable(items = clients) {
  return `
    <div class="table-wrap">
      <table>
        <thead>
          <tr>
            <th>Client</th>
            <th>Account Director</th>
            <th>Delivery Manager</th>
            <th>Overall</th>
            <th>Lowest metric</th>
            <th>Open actions</th>
            <th>Last updated</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>${clientRows(items)}</tbody>
      </table>
    </div>
  `;
}

function dashboardView() {
  setBreadcrumbs([{ label: "Home", href: "/" }]);
  setHeaderAction('<a class="button" href="#/clients/acme/assessment/new">New assessment</a>');

  const redAmber = clients.filter((client) => client.overall !== "Green").length;
  const incomplete = clients.filter((client) => client.status === "Not complete").length;
  const openActions = clients.reduce((sum, client) => sum + client.openActions, 0);

  view.innerHTML = `
    ${pageTitle(
      "Relationship Dashboard",
      "Review relationship health, emerging support needs, and assessment completion."
    )}
    <section class="kpi-grid" aria-label="Relationship summary">
      ${kpiCard("Clients assessed", clients.length, "Current financial year")}
      ${kpiCard("Red / amber relationships", redAmber, "Conversation or action may help")}
      ${kpiCard("Support actions open", openActions, "Across active clients")}
      ${kpiCard("Assessments incomplete", incomplete, "Draft or missing submissions")}
    </section>
    <section class="dashboard-grid">
      <article class="table-panel">
        <div class="panel-header">
          <h2>Client relationships</h2>
          <a class="button ghost" href="#/assessments">View all</a>
        </div>
        ${clientTable(clients)}
      </article>
      <aside class="summary-panel">
        <h2>Support focus</h2>
        <div class="insight-list">
          ${clients
            .filter((client) => client.overall !== "Green")
            .map(
              (client) => `
                <div class="insight-row">
                  <div>
                    <a class="entity-link" href="#/clients/${client.id}">${client.name}</a>
                    <span class="row-meta">${client.lowestMetric} needs attention</span>
                  </div>
                  ${ragBadge(client.overall)}
                </div>
              `
            )
            .join("")}
        </div>
      </aside>
    </section>
  `;
}

function assessmentsView() {
  setBreadcrumbs([
    { label: "Home", href: "/" },
    { label: "Assessments", href: "/assessments" }
  ]);
  setHeaderAction('<a class="button" href="#/clients/acme/assessment/new">New assessment</a>');

  const filters = ["All", "Green", "Amber", "Red", "Not complete", "Reworked"];
  const filteredClients =
    state.filter === "All"
      ? clients
      : clients.filter((client) => client.overall === state.filter || client.status === state.filter);

  view.innerHTML = `
    ${pageTitle("Assessments", "Find, review, and continue relationship assessments.")}
    <div class="filter-row" aria-label="Assessment filters">
      ${filters
        .map(
          (filter) =>
            `<button class="filter-chip ${state.filter === filter ? "is-active" : ""}" type="button" data-filter="${filter}">${filter}</button>`
        )
        .join("")}
    </div>
    <article class="table-panel">
      <div class="panel-header">
        <h2>${state.filter === "All" ? "All assessments" : `${state.filter} assessments`}</h2>
        <span class="row-meta">${filteredClients.length} results</span>
      </div>
      ${filteredClients.length ? clientTable(filteredClients) : emptyState("No assessments match this filter", "Try another rating or status.")}
    </article>
  `;
}

function clientsView() {
  setBreadcrumbs([
    { label: "Home", href: "/" },
    { label: "Clients", href: "/clients" }
  ]);
  setHeaderAction('<a class="button" href="#/clients/acme/assessment/new">New assessment</a>');

  view.innerHTML = `
    ${pageTitle("Clients", "Open a snapshot or start a fresh relationship assessment.")}
    <section class="entity-grid">
      ${clients
        .map(
          (client) => `
            <article class="entity-card">
              <h2><a class="entity-link" href="#/clients/${client.id}">${client.name}</a></h2>
              <div class="entity-facts">
                <div><span class="fact-label">Overall</span><span class="fact-value">${client.overall}</span></div>
                <div><span class="fact-label">CSAP</span><span class="fact-value">${client.csap}</span></div>
                <div><span class="fact-label">FY Margin</span><span class="fact-value">${client.fyMargin}</span></div>
                <div><span class="fact-label">Actions</span><span class="fact-value">${client.openActions}</span></div>
              </div>
              <div class="card-footer">
                ${ragBadge(client.overall)}
                <a class="entity-link" href="#/clients/${client.id}">View Details -></a>
              </div>
            </article>
          `
        )
        .join("")}
    </section>
  `;
}

function clientSnapshotView(clientId) {
  const client = clientById(clientId);
  setBreadcrumbs([
    { label: "Home", href: "/" },
    { label: "Clients", href: "/clients" },
    { label: client.name, href: `/clients/${client.id}` }
  ]);
  setHeaderAction(`<a class="button" href="#/clients/${client.id}/assessment/new">New assessment</a>`);

  view.innerHTML = `
    ${pageTitle(
      client.name,
      "Latest relationship snapshot and support needs.",
      `<a class="button primary" href="#/clients/${client.id}/assessment/new">${iconSvg("plus")}New assessment</a>`
    )}
    <section class="headstone" aria-label="Client facts">
      ${headstoneItem("Client", client.name)}
      ${headstoneItem("Account Director", client.accountDirector)}
      ${headstoneItem("FY Margin", client.fyMargin)}
      ${headstoneItem("FY Rev Forecast", client.fyRevenue)}
      ${headstoneItem("FY CSAP Score", client.csap)}
      ${headstoneItem("Contract End Date", client.contractEnd)}
    </section>
    <section class="overall-panel">
      ${ragBadge(client.overall)}
      <div>
        <h2>Overall relationship view</h2>
        <p>${client.summary}</p>
      </div>
    </section>
    <section class="metric-grid" aria-label="Relationship metrics">
      ${metrics
        .map((metric) => metricCard(metric, client.ratings[metric.id]))
        .join("")}
    </section>
    <section class="detail-grid" style="margin-top: var(--space-2xl);">
      <article class="summary-panel">
        <h2>Account Summary</h2>
        <p>${client.summary}</p>
      </article>
      <article class="summary-panel">
        <h2>Engagement Support Required</h2>
        <p>${client.support}</p>
        <button class="button" type="button" data-open-drawer="${client.id}">${iconSvg("plus")}Add support action</button>
      </article>
    </section>
    <article class="table-panel" style="margin-top: var(--space-2xl);">
      <div class="panel-header">
        <h2>Support actions</h2>
        <button class="button ghost" type="button" data-open-drawer="${client.id}">Add action</button>
      </div>
      ${supportTable(client.name)}
    </article>
  `;
}

function headstoneItem(label, value) {
  return `<div class="headstone-item"><span class="fact-label">${label}</span><span class="fact-value">${value}</span></div>`;
}

function metricCard(metric, rating) {
  return `
    <article class="metric-card">
      <h3>${metric.name}</h3>
      <p class="subtitle">${metric.definition}</p>
      <div class="card-footer">
        ${ragBadge(rating)}
        <span class="row-meta">Confidence: Medium</span>
      </div>
    </article>
  `;
}

function supportTable(clientName) {
  const rows = supportActions.filter((action) => action.client === clientName);
  if (!rows.length) {
    return emptyState("No support actions open", "This relationship has no active support request.");
  }
  return `
    <div class="table-wrap">
      <table>
        <thead>
          <tr>
            <th>Metric</th>
            <th>Action</th>
            <th>Owner</th>
            <th>Due date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          ${rows
            .map(
              (row) => `
                <tr>
                  <td>${row.metric}</td>
                  <td>${row.action}</td>
                  <td>${row.owner}</td>
                  <td>${row.due}</td>
                  <td>${statusPill(row.status)}</td>
                </tr>
              `
            )
            .join("")}
        </tbody>
      </table>
    </div>
  `;
}

function assessmentView(clientId) {
  const client = clientById(clientId);
  setBreadcrumbs([
    { label: "Home", href: "/" },
    { label: "Clients", href: "/clients" },
    { label: client.name, href: `/clients/${client.id}` },
    { label: "New Assessment", href: `/clients/${client.id}/assessment/new` }
  ]);
  setHeaderAction("");

  const stepLabels = ["Client Context", "Relationship Metrics", "Summary", "Review"];

  view.innerHTML = `
    ${pageTitle("New Assessment", client.name)}
    <div class="tone-callout"><strong>Red</strong> or <strong>Amber</strong> are not failures. They highlight where curiosity, conversation, or action may add the most value.</div>
    <div class="stepper" aria-label="Assessment steps">
      ${stepLabels
        .map(
          (label, index) => `
            <div class="step ${state.formStep === index ? "is-active" : ""}">
              <span class="step-number">${index + 1}</span>
              <span>${label}</span>
            </div>
          `
        )
        .join("")}
    </div>
    <form class="form-panel">
      ${assessmentStepContent(client)}
      <div class="form-actions">
        ${state.formStep > 0 ? '<button class="button" type="button" data-step-back>Back</button>' : `<a class="button" href="#/clients/${client.id}">Cancel</a>`}
        ${
          state.formStep < 3
            ? '<button class="button primary" type="button" data-step-next>Continue</button>'
            : `<a class="button primary" href="#/clients/${client.id}">Submit assessment</a>`
        }
      </div>
    </form>
  `;
}

function assessmentStepContent(client) {
  if (state.formStep === 0) {
    return `
      <h2>Client Context</h2>
      <div class="form-grid">
        ${field("Client", "text", client.name)}
        ${field("Account Director", "text", client.accountDirector)}
        ${field("FY Margin", "text", client.fyMargin)}
        ${field("FY Rev Forecast", "text", client.fyRevenue)}
        ${field("FY CSAP Score", "text", client.csap)}
        ${field("Contract End Date", "date", "2027-03-31")}
      </div>
    `;
  }
  if (state.formStep === 1) {
    return `
      <h2>Relationship Metrics</h2>
      <div class="metric-assessment">
        ${metrics
          .map(
            (metric) => `
              <div class="assessment-row">
                <div>
                  <h3>${metric.name}</h3>
                  <p class="subtitle">${metric.definition}</p>
                </div>
                <div>
                  <label>Rating</label>
                  <div class="segmented" role="group" aria-label="${metric.name} rating">
                    ${["Green", "Amber", "Red"]
                      .map(
                        (rating) =>
                          `<button class="segment ${ratingClass(rating)} ${state.assessmentRatings[metric.id] === rating ? "is-selected" : ""}" type="button" data-rating="${metric.id}:${rating}">${rating}</button>`
                      )
                      .join("")}
                  </div>
                </div>
                <div>
                  <label>Confidence</label>
                  <div class="segmented" role="group" aria-label="${metric.name} confidence">
                    ${["High", "Medium", "Low"]
                      .map(
                        (confidence) =>
                          `<button class="segment ${state.confidence[metric.id] === confidence ? "is-selected" : ""}" type="button" data-confidence="${metric.id}:${confidence}">${confidence}</button>`
                      )
                      .join("")}
                  </div>
                </div>
              </div>
            `
          )
          .join("")}
      </div>
    `;
  }
  if (state.formStep === 2) {
    const overall = calculateOverall();
    return `
      <h2>Summary And Support</h2>
      <div class="form-grid">
        <div class="field">
          <label>Overall rating</label>
          <div>${ragBadge(overall)}</div>
        </div>
        <div class="field">
          <label for="support-owner">Support owner</label>
          <select id="support-owner">
            <option>Priya Shah</option>
            <option>Morgan Lee</option>
            <option>Leila Khan</option>
          </select>
        </div>
        <div class="field" style="grid-column: 1 / -1;">
          <label for="account-summary">Account Summary</label>
          <textarea id="account-summary">${client.summary}</textarea>
        </div>
        <div class="field" style="grid-column: 1 / -1;">
          <label for="support-required">Engagement Support Required</label>
          <textarea id="support-required">${client.support}</textarea>
        </div>
      </div>
    `;
  }
  return `
    <h2>Review And Submit</h2>
    <section class="overall-panel">
      ${ragBadge(calculateOverall())}
      <div>
        <h3>${client.name}</h3>
        <p>Assessment ready for submission with ${metrics.length} relationship metrics completed.</p>
      </div>
    </section>
    <div class="metric-grid">
      ${metrics.map((metric) => metricCard(metric, state.assessmentRatings[metric.id])).join("")}
    </div>
  `;
}

function field(label, type, value) {
  const id = label.toLowerCase().replace(/[^a-z0-9]+/g, "-");
  return `
    <div class="field">
      <label for="${id}">${label}</label>
      <input id="${id}" type="${type}" value="${value}">
    </div>
  `;
}

function calculateOverall() {
  const ratings = Object.values(state.assessmentRatings);
  if (ratings.includes("Red")) return "Red";
  if (ratings.includes("Amber")) return "Amber";
  return "Green";
}

function reviewAssessmentView() {
  const client = clients[0];
  setBreadcrumbs([
    { label: "Home", href: "/" },
    { label: "Assessments", href: "/assessments" },
    { label: "Review Assessment", href: "/assessments/acme-review/review" }
  ]);
  setHeaderAction("");

  view.innerHTML = `
    ${pageTitle("Review Assessment", client.name)}
    <section class="overall-panel">
      ${ragBadge(client.overall)}
      <div>
        <h2>Reviewer summary</h2>
        <p>${client.summary}</p>
      </div>
    </section>
    <section class="detail-grid">
      <article class="summary-panel">
        <h2>Review checklist</h2>
        <ul class="review-list">
          <li>Amber and red ratings include clear evidence.</li>
          <li>Overall rating matches the metric pattern.</li>
          <li>Support request has an owner and next step.</li>
          <li>Follow-up timing is practical.</li>
        </ul>
      </article>
      <article class="summary-panel">
        <h2>Decision</h2>
        <p>Confirm the snapshot or return it for rework with comments.</p>
        <div class="form-actions">
          <button class="button danger" type="button">Request rework</button>
          <button class="button" type="button" data-open-drawer="${client.id}">Add support action</button>
          <a class="button primary" href="#/clients/${client.id}">Confirm</a>
        </div>
      </article>
    </section>
  `;
}

function metricGuideView() {
  const active = metrics.find((metric) => metric.id === state.metricTab) || metrics[0];
  setBreadcrumbs([
    { label: "Home", href: "/" },
    { label: "Metric Guide", href: "/metric-guide" }
  ]);
  setHeaderAction("");

  view.innerHTML = `
    ${pageTitle("Metric Guide", "Consistent definitions for each relationship-health metric.")}
    <div class="tabs" role="tablist">
      ${metrics
        .map(
          (metric) =>
            `<button class="tab ${active.id === metric.id ? "is-active" : ""}" type="button" role="tab" data-metric-tab="${metric.id}">${metric.name}</button>`
        )
        .join("")}
    </div>
    <section class="guide-grid">
      <article class="guide-panel">
        <h2>${active.name}</h2>
        <p>${active.definition}</p>
      </article>
      <article class="guide-panel">
        <h3>Green may look like</h3>
        <p>${active.green}</p>
      </article>
      <article class="guide-panel">
        <h3>Amber may look like</h3>
        <p>${active.amber}</p>
      </article>
      <article class="guide-panel">
        <h3>Red may look like</h3>
        <p>${active.red}</p>
      </article>
      <article class="guide-panel">
        <h3>Useful prompt</h3>
        <p>${active.prompt}</p>
      </article>
    </section>
  `;
}

function emptyState(title, copy) {
  return `
    <div class="empty-state">
      <div class="empty-state-inner">
        <h2>${title}</h2>
        <p class="subtitle">${copy}</p>
      </div>
    </div>
  `;
}

function openDrawer(clientId) {
  const client = clientById(clientId);
  supportDrawer.setAttribute("aria-hidden", "false");
  supportDrawer.innerHTML = `
    <div class="drawer-header">
      <div>
        <h2>Support Action</h2>
        <p class="subtitle">${client.name}</p>
      </div>
      <button class="icon-button" type="button" aria-label="Close drawer" data-drawer-close>${iconSvg("close")}</button>
    </div>
    <form class="form-grid" style="grid-template-columns: 1fr;">
      <div class="field">
        <label for="drawer-metric">Related metric</label>
        <select id="drawer-metric">
          ${metrics.map((metric) => `<option>${metric.name}</option>`).join("")}
        </select>
      </div>
      <div class="field">
        <label for="drawer-support">Support needed</label>
        <textarea id="drawer-support">${client.support}</textarea>
      </div>
      <div class="field">
        <label for="drawer-owner">Owner</label>
        <select id="drawer-owner">
          <option>${client.accountDirector}</option>
          <option>${client.deliveryManager}</option>
          <option>Morgan Lee</option>
        </select>
      </div>
      <div class="field">
        <label for="drawer-date">Due date</label>
        <input id="drawer-date" type="date" value="2026-06-24">
      </div>
      <div class="form-actions">
        <button class="button" type="button" data-drawer-close>Cancel</button>
        <button class="button primary" type="button" data-drawer-close>Save action</button>
      </div>
    </form>
  `;
  appShell.classList.add("drawer-open");
}

function closeDrawer() {
  appShell.classList.remove("drawer-open");
  supportDrawer.setAttribute("aria-hidden", "true");
}

function render() {
  const path = currentPath();
  updateNavActive(path);
  closeDrawer();

  if (path === "/") {
    dashboardView();
    return;
  }
  if (path === "/assessments") {
    assessmentsView();
    return;
  }
  if (path.startsWith("/assessments/")) {
    reviewAssessmentView();
    return;
  }
  if (path === "/clients") {
    clientsView();
    return;
  }
  if (path.startsWith("/clients/") && path.endsWith("/assessment/new")) {
    const clientId = path.split("/")[2];
    assessmentView(clientId);
    return;
  }
  if (path.startsWith("/clients/")) {
    const clientId = path.split("/")[2];
    clientSnapshotView(clientId);
    return;
  }
  if (path === "/metric-guide") {
    metricGuideView();
    return;
  }

  window.location.hash = "#/";
}

document.addEventListener("click", (event) => {
  const toggle = event.target.closest("[data-nav-toggle]");
  if (toggle) {
    const isMobile = window.matchMedia("(max-width: 959px)").matches;
    if (isMobile) {
      appShell.classList.toggle("mobile-nav-open");
    } else {
      appShell.classList.toggle("nav-collapsed");
      toggle.setAttribute("aria-expanded", String(!appShell.classList.contains("nav-collapsed")));
    }
  }

  if (event.target.closest("[data-nav-close]")) {
    appShell.classList.remove("mobile-nav-open");
  }

  if (event.target.closest(".side-nav-link")) {
    appShell.classList.remove("mobile-nav-open");
  }

  const filter = event.target.closest("[data-filter]");
  if (filter) {
    state.filter = filter.getAttribute("data-filter");
    assessmentsView();
  }

  const next = event.target.closest("[data-step-next]");
  if (next) {
    state.formStep = Math.min(3, state.formStep + 1);
    render();
  }

  const back = event.target.closest("[data-step-back]");
  if (back) {
    state.formStep = Math.max(0, state.formStep - 1);
    render();
  }

  const rating = event.target.closest("[data-rating]");
  if (rating) {
    const [metricId, value] = rating.getAttribute("data-rating").split(":");
    state.assessmentRatings[metricId] = value;
    render();
  }

  const confidence = event.target.closest("[data-confidence]");
  if (confidence) {
    const [metricId, value] = confidence.getAttribute("data-confidence").split(":");
    state.confidence[metricId] = value;
    render();
  }

  const tab = event.target.closest("[data-metric-tab]");
  if (tab) {
    state.metricTab = tab.getAttribute("data-metric-tab");
    metricGuideView();
  }

  const drawerOpen = event.target.closest("[data-open-drawer]");
  if (drawerOpen) {
    openDrawer(drawerOpen.getAttribute("data-open-drawer"));
  }

  if (event.target.closest("[data-drawer-close]")) {
    closeDrawer();
  }
});

window.addEventListener("hashchange", () => {
  state.formStep = 0;
  render();
});

render();
