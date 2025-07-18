import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import HttpBackend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'

i18n
    .use(HttpBackend) // 從 public/locales 載入語言檔
    .use(LanguageDetector) // 偵測使用者語言（例如根據瀏覽器）
    .use(initReactI18next) // 結合 React
    .init({
        debug: true,
        fallbackLng: 'en-US', // 預設語言
        interpolation: {
            escapeValue: false, // React 已自動處理 XSS
        },
        detection: {
            order: ['localStorage', 'cookie', 'navigator'],
            caches: ['localStorage'], // 儲存偵測結果，避免每次都偵測
        },
        backend: {
            loadPath: `${process.env.PUBLIC_URL}/locales/{{lng}}/{{ns}}.json`, // 語言檔案路徑
        },
    })

export default i18n
