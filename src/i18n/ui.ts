import type { Locale } from "./translations";

export const uiText = {
  zh: { theme: "切换明暗主题", language: "选择语言", mapTitle: "罗多尔福·巴克里索·莫雷诺广场位置地图", close: "关闭图库", previous: "上一张照片", next: "下一张照片", home: "返回首页", translatedReview: "译文" },
  en: { theme: "Toggle theme", language: "Choose language", mapTitle: "Plaza Rodolfo Baquerizo Moreno location map", close: "Close gallery", previous: "Previous photo", next: "Next photo", home: "Back to home", translatedReview: "Translation" },
  es: { theme: "Cambiar el tema", language: "Elegir idioma", mapTitle: "Mapa de ubicación de la Plaza Rodolfo Baquerizo Moreno", close: "Cerrar la galería", previous: "Foto anterior", next: "Foto siguiente", home: "Volver al inicio", translatedReview: "Traducción" },
} satisfies Record<Locale, Record<string, string>>;

export const legalTitles = {
  zh: { privacy: "隐私政策", terms: "服务条款", cookies: "Cookie 设置" },
  en: { privacy: "Privacy Policy", terms: "Terms of Service", cookies: "Cookie Settings" },
  es: { privacy: "Política de privacidad", terms: "Condiciones de uso", cookies: "Configuración de cookies" },
};

export const legalDocuments = ["privacy", "terms", "cookies"] as const;
