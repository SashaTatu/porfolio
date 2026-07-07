// Відкриття / закриття дропдауну
function toggleLangMenu() {
  const switcher = document.querySelector('.lang-switcher');
  switcher.classList.toggle('open');
}

// Зміна мови та закриття меню
function changeLanguage(langCode, langName) {
  // Оновлюємо текст на кнопці
  document.querySelector('.current-lang').textContent = langCode;
  
  // Оновлюємо активний клас у списку
  document.querySelectorAll('.lang-dropdown a').forEach(el => {
    el.classList.remove('active');
    if (el.textContent === langCode) {
      el.classList.add('active');
    }
  });
  
  // Закриваємо меню
  document.querySelector('.lang-switcher').classList.remove('open');
  
  // Тут можна додати логіку для зміни контенту на сайті, наприклад:
  console.log(`Мову змінено на: ${langName}`);
}

// Закриття меню, якщо клікнули за його межами
document.addEventListener('click', function(event) {
  const switcher = document.querySelector('.lang-switcher');
  if (!switcher.contains(event.target)) {
    switcher.classList.remove('open');
  }
});