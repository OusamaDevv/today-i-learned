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

const initialFacts = [
  {
    id: 1,
    text: "React is being developed by Meta (formerly facebook)",
    source: "https://opensource.fb.com/",
    category: "technology",
    votesInteresting: 24,
    votesMindblowing: 9,
    votesFalse: 4,
    createdIn: 2021,
  },
  {
    id: 2,
    text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
    source:
      "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
    category: "society",
    votesInteresting: 11,
    votesMindblowing: 2,
    votesFalse: 0,
    createdIn: 2019,
  },
  {
    id: 3,
    text: "Lisbon is the capital of Portugal",
    source: "https://en.wikipedia.org/wiki/Lisbon",
    category: "society",
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdIn: 2015,
  },
  // Categoria "news"
  {
    id: 4,
    text: "Nel 2023, l'Unione Europea ha approvato il regolamento sull'IA più rigoroso al mondo.",
    source: "https://ec.europa.eu/digital-strategy/artificial-intelligence",
    category: "news",
    votesInteresting: 16,
    votesMindblowing: 7,
    votesFalse: 3,
    createdIn: 2023,
  },
  {
    id: 5,
    text: "Il telescopio spaziale James Webb ha fornito immagini dettagliate di galassie a oltre 13 miliardi di anni luce di distanza.",
    source: "https://www.nasa.gov/webb",
    category: "news",
    votesInteresting: 20,
    votesMindblowing: 15,
    votesFalse: 1,
    createdIn: 2022,
  },
  // Categoria "health"
  {
    id: 6,
    text: "Gli scienziati hanno scoperto che dormire meno di 6 ore a notte aumenta il rischio di malattie cardiache del 48%.",
    source: "https://www.healthline.com/sleep-study",
    category: "health",
    votesInteresting: 12,
    votesMindblowing: 5,
    votesFalse: 2,
    createdIn: 2021,
  },
  {
    id: 7,
    text: "L'acqua potabile contaminata causa ancora oltre 1,2 milioni di morti all'anno a livello globale.",
    source: "https://www.who.int/water-sanitation-health",
    category: "health",
    votesInteresting: 18,
    votesMindblowing: 8,
    votesFalse: 0,
    createdIn: 2020,
  },
];

// LINK TO APP SAMPLE DATA: https://docs.google.com/spreadsheets/d/1eeldcA_OwP4DHYEvjG0kDe0cRys-cDPhc_E9P9G1e3I/edit#gid=0

// 👍 🤯 ⛔️
