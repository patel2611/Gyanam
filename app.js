// ==========================
// SUPABASE INIT (keep yours)
// ==========================
const SUPABASE_URL = "https://osnbqkefnoqsssnyirfk.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9zbmJxa2Vmbm9xc3NzbnlpcmZrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY5MjQwNzMsImV4cCI6MjA5MjUwMDA3M30.M7F6dRhYb0-nMqCiL9XyUL6WXcHq5UU7yf61RJ05ct0";


const supabase = supabaseJs.createClient(SUPABASE_URL, SUPABASE_KEY);

// ==========================
// NAVIGATION SYSTEM
// ==========================
function showPage(page) {

  // hide all pages
  const pages = ["students", "records", "view"];
  pages.forEach(p => {
    document.getElementById(p + "Page").style.display = "none";
    document.getElementById("nav" + capitalize(p)).classList.remove("active");
  });

  // show selected page
  document.getElementById(page + "Page").style.display = "block";
  document.getElementById("nav" + capitalize(page)).classList.add("active");

  // update header
  const titles = {
    students: "👨‍🎓 Students",
    records: "📝 Records",
    view: "👁 View"
  };

  document.getElementById("headerTitle").innerText = titles[page];

  // load data
  if (page === "students") loadStudents();
  if (page === "records") loadRecords();
}

// ==========================
// AUTO START APP HERE 🔥
// ==========================
window.onload = function () {
  showPage("students"); // 👈 APP OPENS DIRECTLY HERE
};

// helper
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}