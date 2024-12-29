const CATEGORIES = [
  { name: "technology", color: "#3b82f6" },
  { name: "science", color: "#16a34a" },
  { name: "finance", color: "#ef4444" },
  { name: "society", color: "#eab308" },
  { name: "entertainment", color: "#db2777" },
  { name: "health", color: "#14b8a6" },
  { name: "history", color: "#f97316" },
  { name: "news", color: "#8b5cf6" },
];

// Selecting DOM elements
const btn = document.querySelector(".btn-open");
const form = document.querySelector(".fact-form");
const factsList = document.querySelector(".facts-list");

// Creating DOM elements: Render facts in list
factsList.innerHTML = "";

// Load data from supebase
async function loadFacts() {
  const res = await fetch(
    "https://rrpgufsggsrkorjzmgmz.supabase.co/rest/v1/facts",
    {
      headers: {
        apikey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJycGd1ZnNnZ3Nya29yanptZ216Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzUzODk4MzEsImV4cCI6MjA1MDk2NTgzMX0._YyiL9yiTEWHHY2qrPVPeaxl5deGkQhDO3PKSOgBzdY",
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJycGd1ZnNnZ3Nya29yanptZ216Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzUzODk4MzEsImV4cCI6MjA1MDk2NTgzMX0._YyiL9yiTEWHHY2qrPVPeaxl5deGkQhDO3PKSOgBzdY",
      },
    }
  );
  const data = await res.json();
  createFactList(data);
}
loadFacts();

function createFactList(dataArray) {
  const htmlArr = dataArray
    .map(
      (fact) => `
    <li class="fact">
      <p>${fact.text}
        <a class="source" href="${fact.source}" target="_blank">(Source)</a>
      </p>
      <span class="tag" style="background-color: ${
        CATEGORIES.find((c) => c.name === fact.category).color
      };">${fact.category}</span>
    </li>`
    )
    .join("");

  factsList.insertAdjacentHTML("afterbegin", htmlArr);
}

// Toogle form visibility
btn.addEventListener("click", function () {
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    btn.textContent = "close";
  } else {
    form.classList.add("hidden");
    btn.textContent = "share a fact";
  }
});
