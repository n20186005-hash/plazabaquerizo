import type { Locale } from "@/i18n/translations";
import data from "./nearby-places.json";

export const locales: Locale[] = ["es", "en", "zh"];
export const nearbyPlaces = data;

export const nearbyPath = (locale: Locale, slug: string) => `/${locale}/explore/${slug}`;
export const placeMap = (place: (typeof data)[number]) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${place.names.es}, ${place.address}`)}`;

export const nearbyLabels = {
  es: {
    nearby: "Lugares cercanos", home: "Guía de la plaza Baquerizo", map: "Abrir en Google Maps",
    intro: "Qué ver", about: "Quién lo gestiona", basic: "Información práctica",
    address: "Dirección", hours: "Horario", fare: "Entrada", route: "Recorrido a pie",
    photo: "Dónde fotografiar", transport: "Cómo llegar", tips: "Consejos de visita",
    faq: "Preguntas frecuentes", reviews: "Opiniones de visitantes", rating: "Ver puntuación y reseñas",
    reviewsNote: "La ficha de Google Maps muestra la puntuación y el número de reseñas disponibles al momento de consultarla.",
    source: "Fuente de información", more: "Sigue explorando", lodging: "Dónde alojarse",
    lodgingText: "Para combinar la plaza con el casco histórico, busca alojamiento cerca de la avenida 9 de Octubre. Para salir temprano a la ribera del Guayas, considera el entorno del Malecón 2000.",
    nearbyIntro: "Desde el Estero Salado hasta el río Guayas, elige una parada y consulta su recorrido, acceso y mapa.",
    credit: "Fotografía redimensionada", details: "Lee la guía",
  },
  en: {
    nearby: "Nearby attractions", home: "Baquerizo Plaza guide", map: "Open in Google Maps",
    intro: "What to see", about: "Who manages this site", basic: "Practical information",
    address: "Address", hours: "Opening hours", fare: "Admission", route: "Walking route",
    photo: "Where to take photos", transport: "Getting there", tips: "Visiting tips",
    faq: "Frequently asked questions", reviews: "Visitor reviews", rating: "View rating and reviews",
    reviewsNote: "The Google Maps listing shows the rating and review count available when you open it.",
    source: "Information source", more: "Keep exploring", lodging: "Where to stay",
    lodgingText: "For a trip that combines the plaza and the historic centre, look for accommodation near 9 de Octubre Avenue. For an early start on the Guayas riverfront, consider the Malecón 2000 area.",
    nearbyIntro: "From the Salado estuary to the Guayas River, pick a stop for its walking route, access details and map.",
    credit: "Resized photograph", details: "Read the guide",
  },
  zh: {
    nearby: "周边景点", home: "巴克里索广场指南", map: "在 Google 地图中打开",
    intro: "游览看点", about: "管理主体", basic: "基础信息",
    address: "地址", hours: "开放时间", fare: "门票", route: "步行路线",
    photo: "拍照机位", transport: "交通方式", tips: "游览须知",
    faq: "常见问题", reviews: "游客评价", rating: "查看评分与评价",
    reviewsNote: "打开 Google 地图景点页，即可查看当时显示的评分和评价数量。",
    source: "资料来源", more: "继续游览", lodging: "住宿建议",
    lodgingText: "计划连游广场和历史城区，可在十月九日大道附近找住宿。想清早去瓜亚斯河边，可考虑马雷孔2000周边。",
    nearbyIntro: "从萨拉多河口到瓜亚斯河，选择一处景点查看步行路线、出入口及专属地图。",
    credit: "实景照片，已调整尺寸", details: "查看指南",
  },
};

export const metroUrl = "https://www.metrovia-gye.com.ec/";
export const plazaManagementUrl = "https://guayaquil.gob.ec/malecones-renovaron-mejorar-esparcimiento-experiencia-visitantes/";
