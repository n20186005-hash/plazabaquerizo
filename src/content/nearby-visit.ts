import type { Locale } from "@/i18n/translations";


function translate(es: string, en: string, zh: string): Record<Locale, string> {
  return { es, en, zh };
}

export const placeKinds: Record<string, Record<Locale, string>> = {
  park: translate("Parque o paseo al aire libre", "Park or outdoor promenade", "公园或户外步道"),
  bridge: translate("Puente urbano", "Urban bridge", "城市桥梁"),
  street: translate("Calle o barrio histórico", "Historic street or district", "历史街道或街区"),
  square: translate("Plaza pública", "Public square", "公共广场"),
  monument: translate("Monumento", "Monument", "纪念建筑"),
  ride: translate("Atracción de recorrido", "Ride or aerial transport", "观光设施或空中交通"),
  museum: translate("Museo", "Museum", "博物馆"),
  view: translate("Mirador", "Lookout", "观景地标"),
  church: translate("Templo", "Place of worship", "宗教建筑"),
  library: translate("Biblioteca", "Library", "图书馆"),
  building: translate("Edificio patrimonial", "Heritage building", "历史建筑"),
  market: translate("Mercado artesanal", "Craft market", "工艺品市场"),
  cemetery: translate("Cementerio patrimonial", "Historic cemetery", "历史公墓"),
  theatre: translate("Teatro", "Theatre", "剧场"),
  stadium: translate("Estadio", "Stadium", "体育场"),
};

export const visitLabels = {
  plan: translate("Cómo organizar la visita", "Planning your visit", "游览建议"),
  highlights: translate("Qué distingue este lugar", "What makes this stop distinctive", "景点特色"),
  discover: translate("Historia, detalles y experiencia", "History, details and experience", "历史、建筑与游览体验"),
  officialName: translate("Nombre local", "Local name", "当地名称"),
  kind: translate("Tipo de lugar", "Attraction type", "景点类型"),
  city: translate("Ciudad", "City", "城市"),
  duration: translate("Tiempo orientativo de visita", "Suggested time at the site", "建议停留时间"),
  minutes: translate("minutos", "minutes", "分钟"),
  excludes: translate("Estimación editorial para esta parada; suma el traslado, las colas y los eventos por separado.", "This planning estimate covers the stop itself. Allow extra time for journeys, queues and events.", "时长为本站行程建议，交通、排队及活动耗时另计。"),
  access: translate("Ubica el acceso en el mapa antes de salir", "Locate the entrance on the map before leaving", "出发前在地图上确认入口"),
  directions: translate("Dirección y mapa del acceso", "Entrance address and map", "交通指南与景点地图"),
  directionsLink: translate("Cómo llegar a este lugar", "Get directions to this place", "导航到此景点"),
  area: translate("Ecuador", "Ecuador", "厄瓜多尔"),
  guayaquil: translate("Guayaquil", "Guayaquil", "瓜亚基尔"),
  samborondon: translate("Samborondón", "Samborondón", "桑博龙东"),
};

const lodging = {
  waterfront: translate(
    "Para enlazar esta parada con Las Peñas o el río a primera hora, elige alojamiento cerca de Malecón Simón Bolívar o del acceso de Loja. Usa los cruces y accesos del tramo concreto al calcular la caminata.",
    "For an early start at Las Peñas or the river, look near Malecón Simón Bolívar or the Loja entrance. Use the actual crossings and entrances when estimating the walk.",
    "想清早连游拉斯佩尼亚斯或滨河长廊，可选西蒙·玻利瓦尔滨河大道或洛哈街入口附近。估算步行时间时按实际过街点与开放入口计算。",
  ),
  event: translate(
    "Si vienes para una función o partido, comprueba el regreso al alojamiento después del evento. Marca un punto de recogida accesible fuera de las filas de entrada.",
    "If coming for a performance or match, plan the return to your accommodation after the event. Mark a pickup point clear of the entrance queues.",
    "若为演出或比赛而来，订住宿时一并规划散场后的回程。可提前在地图上标好避开入口人流的上车点。",
  ),
  historical: translate(
    "Para una visita centrada en el parque, considera La Puntilla. Si tu siguiente parada está en el casco antiguo de Guayaquil, calcula el viaje por carretera entre ambas orillas.",
    "Consider La Puntilla for a park-focused visit. If your next stop is in historic Guayaquil, allow for a road transfer between the two sides of the river.",
    "以历史公园为主可考虑住在蓬蒂亚。若下一站在瓜亚基尔老城，需预留两岸之间的车程。",
  ),
};

export function lodgingFor(slug: string, kind: string, locale: Locale, fallback: string) {
  if (slug === "parque-historico") return lodging.historical[locale];
  if (kind === "stadium" || kind === "theatre") return lodging.event[locale];
  if (["malecon-2000", "jardines-malecon", "la-perla", "maac", "las-penas", "faro-santa-ana", "capilla-santa-ana", "puerto-santa-ana", "museo-julio-jaramillo"].includes(slug)) {
    return lodging.waterfront[locale];
  }
  return fallback;
}

type VisitNotice = { source: string; hours?: Record<Locale, string>; fare?: Record<Locale, string>; tip?: Record<Locale, string> };

export const visitNotices: Partial<Record<string, VisitNotice>> = {
  aerovia: {
    source: "https://aeroviagye.com/tarjetas/",
    hours: translate("El operador publica 05:30–21:30 todos los días. Consulta avisos antes de salir.", "The operator lists 05:30–21:30 daily. Check service notices before leaving.", "运营方公布每日 05:30–21:30。出发前请查临时运营公告。"),
    fare: translate("La página de tarifas del operador indica USD 0,76 por viaje normal y USD 0,38 con tarifa preferencial. Comprueba la tarifa vigente en la estación.", "The operator’s fare page lists US$0.76 per standard ride and US$0.38 for eligible concession riders. Check the current fare at the station.", "运营方票价页列出普通票每程 0.76 美元，符合资格的优惠票 0.38 美元。当前价格以车站公告为准。"),
  },
  "parque-historico": {
    source: "https://epmpsamborondon.gob.ec/",
    hours: translate("La empresa de parques publica 09:00–17:00 todos los días. Consulta si hay cambios para feriados.", "The municipal parks company lists 09:00–17:00 daily. Check for changes on holidays.", "桑博龙东市立公园公司公布每日 09:00–17:00，节假日请查临时调整。"),
    fare: translate("La tabla de la administración indica USD 4 para adultos y USD 2 para menores de hasta 12 años, personas mayores y personas con discapacidad.", "The operator’s price table lists US$4 for adults and US$2 for children up to age 12, seniors and people with disabilities.", "管理方票价表列明成人票 4 美元，12 岁及以下儿童、老年人和残障人士 2 美元。"),
    tip: translate("La administración pide autorización para sesiones fotográficas y no permite ingresar con comida ni mascotas.", "The park requires permission for photo sessions and asks visitors to leave food and pets outside.", "管理方要求专题摄影事先获准，食物和宠物不得带入。"),
  },
  "biblioteca-artes": {
    source: "https://www.uartes.edu.ec/sitio/blog/2019/01/18/inauguracion-de-la-biblioteca-de-las-artes-2/",
  },
  "la-perla": {
    source: "https://malecon.org.ec/entretenimiento.php",
    tip: translate("La Fundación indica una altura de 57 m. Si quieres subir, comprueba si la noria está operativa y consulta el tiempo de espera.", "The foundation lists a height of 57 m. If you plan to ride, check operation and the wait time.", "基金会资料列明摩天轮高 57 米；计划乘坐时可先查运营情况和排队时间。"),
  },
};

export function getVisitNotice(slug: string, locale: Locale) {
  const notice = visitNotices[slug];
  if (!notice) return;
  return { source: notice.source, hours: notice.hours?.[locale], fare: notice.fare?.[locale], tip: notice.tip?.[locale] };
}
