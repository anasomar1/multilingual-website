const translations = {
  en: {
    home: "Home",
    about: "About",
    contact: "Contact us",
    selectLanguage: "Select a language",
    english: "English",
    arabic: "Arabic",
  },
  ar: {
    home: "الصفحة الرئيسية",
    about: "من نحن",
    contact: "تواصل معنا",
    selectLanguage: "إختر لغة",
    english: "الانجليزية",
    arabic: "العربية",
  },
};

const languageSelector = document.querySelector("select");
languageSelector.addEventListener("change", (event) => {
  setLanguage(event.target.value);
  localStorage.setItem("lang", event.target.value);
});

document.addEventListener("DOMContentLoaded", () => {
  setLanguage(localStorage.getItem("lang"));
});

const setLanguage = (language) => {
  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach((element) => {
    const translationKey = element.getAttribute("data-i18n");
    element.textContent = translations[language][translationKey];
  });
  document.dir = language === "ar" ? "rtl" : "ltr";
};
