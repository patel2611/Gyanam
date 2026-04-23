// ==========================
// SUPABASE INIT (keep yours)
// ==========================
const SUPABASE_URL = "YOUR_SUPABASE_URL";
const SUPABASE_KEY = "YOUR_SUPABASE_ANON_KEY";

const supabase = supabaseJs.createClient(SUPABASE_URL, SUPABASE_KEY);

// ==========================
// PAGE NAVIGATION SYSTEM
// ==========================
function showPage(page) {

  // hide all pages
  document.getElementById("studentsPage").style.display = "none";
  document.getElementById("recordsPage").style.display = "none";
  document.getElementById("viewPage").style.display = "none";

  // reset nav active state
  document.getElementById("navStudents").classList.remove("active");
  document.getElementById("navRecords").classList.remove("active");
  document.getElementById("navView").classList.remove("active");

  // show selected page + set header
  if (page === "students") {
    document.getElementById("studentsPage").style.display = "block";
    document.getElementById("navStudents").classList.add("active");
    document.getElementById("headerTitle").innerText = "👨‍🎓 Students";
    loadStudents();
  }

  if (page === "records") {
    document.getElementById("recordsPage").style.display = "block";
    document.getElementById("navRecords").classList.add("active");
    document.getElementById("headerTitle").innerText = "📝 Records";
    loadRecords();
  }

  if (page === "view") {
    document.getElementById("viewPage").style.display = "block";
    document.getElementById("navView").classList.add("active");
    document.getElementById("headerTitle").innerText = "👁 View";
  }
}

// default page
window.onload = () => {
  showPage("students");
};