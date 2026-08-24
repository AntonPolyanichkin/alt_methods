export const SUPPORTED_LANGS = ["en", "et", "ru"];
export const DEFAULT_LANG = "en";
 
const STORAGE_KEY = "altmethods_lang";
 
// Використовується ТІЛЬКИ для редиректу з "/" (коли мова ще невідома).
// Пріоритет: те, що людина сама обирала раніше (localStorage) ->
// мова браузера -> дефолт. НІКОЛИ не перекриває мову, яка вже явно
// вказана в URL — там рішення приймає лише MainLayout guard.
export function detectPreferredLang() {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored && SUPPORTED_LANGS.includes(stored)) return stored;
 
  const browserLang = navigator.language?.slice(0, 2);
  return SUPPORTED_LANGS.includes(browserLang) ? browserLang : DEFAULT_LANG;
}
 
// Викликається щоразу, коли MainLayout підтверджує валідний :lang з URL —
// так наступний візит на голий "/" запам'ятає останню мову.
export function rememberLang(lang) {
  if (SUPPORTED_LANGS.includes(lang)) {
    localStorage.setItem(STORAGE_KEY, lang);
  }
}