function toggleMenu() {
  const menu = document.getElementById('menu');
  menu.classList.toggle('show');
}

function searchMovie() {
  const input = document.getElementById('movieSearch').value.trim();
  const resultDiv = document.getElementById('search-result');

  if (input.length > 0) {
    resultDiv.textContent = `'${input}' এর জন্য অনুসন্ধান চলছে...`;
  } else {
    resultDiv.textContent = "অনুগ্রহ করে মুভির নাম লিখুন।";
  }
}
