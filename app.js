// Supabase
const supabase = supabaseJs.createClient(
  "https://osnbqkefnoqsssnyirfk.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9zbmJxa2Vmbm9xc3NzbnlpcmZrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY5MjQwNzMsImV4cCI6MjA5MjUwMDA3M30.M7F6dRhYb0-nMqCiL9XyUL6WXcHq5UU7yf61RJ05ct0"
);

// NAVIGATION
function switchTab(tab) {

  document.querySelectorAll('.page').forEach(p => p.classList.add('hidden'));

  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));

  if (tab === 'students') {
    studentsPage.classList.remove('hidden');
    document.querySelectorAll('.nav-item')[0].classList.add('active');
    headerTitle.innerText = "Students";
  }

  if (tab === 'records') {
    recordsPage.classList.remove('hidden');
    document.querySelectorAll('.nav-item')[1].classList.add('active');
    headerTitle.innerText = "Records";
  }

  if (tab === 'view') {
    viewPage.classList.remove('hidden');
    document.querySelectorAll('.nav-item')[2].classList.add('active');
    headerTitle.innerText = "View";
  }
}

// START APP DIRECTLY
window.onload = () => switchTab('students');