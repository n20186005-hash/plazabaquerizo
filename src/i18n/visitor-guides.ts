import type { SiteLocale } from "@/app/site-url";

const maps = {
  plaza: "https://maps.app.goo.gl/SLF6QEhLsZQfujpk7",
  walk: "https://www.google.com/maps/dir/?api=1&origin=Plaza+Rodolfo+Baquerizo+Moreno,+Guayaquil&destination=Malec%C3%B3n+del+Salado,+Guayaquil&travelmode=walking",
};

const sources = {
  plaza: "https://www.eluniverso.com/2004/04/22/0001/18/F3AFA4F207F84DE6BB21577D65FAC9BD.html/",
  history: "https://guayaquil.gob.ec/american-park-huella-historica-entretenimiento-ciudad/",
  events: "https://www.eluniverso.com/guayaquil/2020/07/28/nota/7921221/modernidad-actividades-aire-libre-atraen-visitas-plaza-rodolfo/",
  city: "https://guayaquil.gob.ec/",
  manager: "https://malecon.org.ec/fundacion.php",
  boats: "https://guayaquil.gob.ec/paseos-bote-estero-salado-reviven-recuerdos-tradicion-guayaquilena/",
};

export const guideSlugs = ["ubicacion-y-acceso", "eventos-y-exposiciones", "paseo-malecon-del-salado"] as const;
export type GuideSlug = (typeof guideSlugs)[number];

type Guide = {
  title: string;
  card: string;
  description: string;
  sections: { title: string; text: string }[];
  steps?: string[];
  map: string;
  sources: [label: string, url: string][];
};

export const guideLabels = {
  es: { home: "Plaza Rodolfo Baquerizo Moreno", guides: "Guías para tu visita", route: "Recorrido a pie", map: "Abrir en Google Maps", sources: "Fuentes", gallery: "Ver fotos de la plaza" },
  en: { home: "Plaza Rodolfo Baquerizo Moreno", guides: "Plan your visit", route: "Walking route", map: "Open in Google Maps", sources: "Sources", gallery: "See photos of the plaza" },
  zh: { home: "罗多尔福·巴克里索·莫雷诺广场", guides: "游览指南", route: "步行路线", map: "在 Google 地图中打开", sources: "资料来源", gallery: "查看广场实景照片" },
} satisfies Record<SiteLocale, Record<string, string>>;

export const visitorGuides: Record<SiteLocale, Record<GuideSlug, Guide>> = {
  es: {
    "ubicacion-y-acceso": {
      title: "Cómo llegar a la Plaza Rodolfo Baquerizo Moreno",
      card: "Ubicación y acceso",
      description: "Ubica la plaza en la avenida 9 de Octubre y Tungurahua, en Guayaquil, y encuentra el acceso desde el Malecón del Salado.",
      sections: [
        { title: "Dónde queda la plaza", text: "Está en el centro de Guayaquil, junto a la avenida 9 de Octubre y Tungurahua, en la manzana que también da a Quisquís. Escribe el nombre completo de la plaza en el mapa. La intersección de Tungurahua es una referencia más precisa que buscar solo Baquerizo Moreno o 9 de Octubre." },
        { title: "A pie, en transporte público o en taxi", text: "Si vienes desde el centro, sigue la avenida 9 de Octubre hacia el Estero Salado y busca el cruce con Tungurahua. Para viajar en transporte público, consulta el itinerario desde tu punto de partida y revisa el tramo a pie desde la parada antes de salir. Si llegas en taxi, menciona la avenida y la transversal para acordar el punto de bajada." },
        { title: "¿Por qué entrada conviene llegar?", text: "Para visitar la plaza, usa el cruce de 9 de Octubre y Tungurahua como referencia. Si vas a una feria, comprueba el acceso que figura en la convocatoria. El paseo por el malecón, la sala de exposiciones y la plaza abierta tienen referencias distintas." },
        { title: "Antes de salir", text: "Si necesitas un acceso sin escalones o una zona de bajada concreta, verifica ambos puntos con el recinto o el organizador. Si solo quieres ver la plaza y su entorno, deja tiempo para acercarte a la ribera y regresar por la avenida." },
      ],
      map: maps.plaza,
      sources: [["El Universo · ubicación y apertura de la plaza (2004)", sources.plaza], ["Fundación Malecón 2000", sources.manager]],
    },
    "eventos-y-exposiciones": {
      title: "Eventos y exposiciones en la Plaza Rodolfo Baquerizo Moreno",
      card: "Eventos y exposiciones",
      description: "Distingue el salón de exposiciones del ágora al aire libre y comprueba el recinto, el horario y la entrada antes de asistir a una feria en Guayaquil.",
      sections: [
        { title: "Salón y ágora", text: "El proyecto inaugurado en 2004 incluyó un edificio de vidrio, aluminio y acero con sala de exposiciones en la planta alta y un ágora para actividades al aire libre. Las dos zonas han acogido actividades de distintos formatos. En la plaza se han documentado ferias, muestras artesanales y actuaciones." },
        { title: "Cómo verificar una convocatoria", text: "Busca el nombre del evento y la fecha en el portal municipal o en el anuncio del organizador. Antes de salir, revisa si indica el salón, el ágora u otro espacio del Malecón del Salado. Guarda la convocatoria con la hora de acceso, el punto de entrada y las instrucciones de inscripción." },
        { title: "¿Hace falta entrada o reserva?", text: "Consulta las condiciones de la actividad concreta. La programación, la admisión, el aforo y el precio pueden variar entre organizadores. Si el anuncio solo dice «centro de convenciones», solicita el nombre completo y la dirección del recinto." },
        { title: "Si no hay actividades programadas", text: "Puedes observar desde el exterior cómo el volumen acristalado se relaciona con la explanada del ágora y continuar hacia el Estero Salado. Para una visita con niños o un grupo, acuerda un punto de encuentro exterior antes de entrar." },
      ],
      map: maps.plaza,
      sources: [["El Universo · edificio y ágora (2004)", sources.plaza], ["El Universo · usos culturales de la plaza (2020)", sources.events], ["Alcaldía de Guayaquil · comunicados", sources.city]],
    },
    "paseo-malecon-del-salado": {
      title: "Paseo de la Plaza Baquerizo al Malecón del Salado",
      card: "Paseo por el Malecón del Salado",
      description: "Recorre la plaza y el Estero Salado a pie, con paradas para observar la arquitectura y fotografiar el agua en Guayaquil.",
      sections: [
        { title: "Del American Park a la ribera actual", text: "Según la Alcaldía, el American Park nació en 1922 en el sector que hoy ocupan el malecón y la plaza. Rodolfo Baquerizo Moreno impulsó aquel parque de diversiones. En el paseo actual, fíjate en el cambio entre el trazado recto de la avenida, la explanada del centro de exposiciones y el borde del estero." },
        { title: "Dónde hacer fotos", text: "Desde la explanada, encuadra el inmueble acristalado y el espacio abierto en una misma toma. En el paseo ribereño, busca un ángulo que incluya el agua y el puente 5 de Junio si la vista está despejada. Revisa la luz y deja libre el paso junto a la baranda." },
        { title: "¿Dónde está el embarcadero?", text: "En su nota de julio de 2025, el Municipio señaló un acceso al muelle por Ismael Pérez Pazmiño y Aguirre. Si quieres hacer un paseo en bote, verifica antes el acceso, el horario y el servicio vigentes. Puedes completar el recorrido a pie sin pasar por el muelle." },
      ],
      steps: ["Empieza en la plaza, junto a 9 de Octubre y Tungurahua. Observa el exterior del salón y el ágora.", "Continúa hacia el Malecón del Salado por el acceso peatonal señalizado que esté abierto ese día.", "Camina junto al estero hasta un punto con vista al puente 5 de Junio y regresa por el mismo tramo o vuelve a la avenida por un acceso señalizado."],
      map: maps.walk,
      sources: [["Alcaldía de Guayaquil · historia del American Park", sources.history], ["Alcaldía de Guayaquil · acceso al muelle (2025)", sources.boats], ["Fundación Malecón 2000 · administración del paseo", sources.manager]],
    },
  },
  en: {
    "ubicacion-y-acceso": {
      title: "How to get to Plaza Rodolfo Baquerizo Moreno",
      card: "Location and directions",
      description: "Find the plaza at Avenida 9 de Octubre and Tungurahua in Guayaquil and plan your approach from the Malecón del Salado.",
      sections: [
        { title: "Where is the plaza?", text: "The plaza is in central Guayaquil at Avenida 9 de Octubre and Tungurahua, on the block that also borders Quisquís. Enter the full name in your map app. The Tungurahua intersection is a more precise reference than searching just for Baquerizo Moreno or 9 de Octubre." },
        { title: "Walking, public transport and taxis", text: "From downtown, follow Avenida 9 de Octubre toward the Estero Salado and look for the Tungurahua intersection. If using public transport, check the route from your starting point and review the walk from the stop. For a taxi drop-off, give both street names." },
        { title: "Which entrance should I use?", text: "For the plaza, use 9 de Octubre and Tungurahua as your reference. For an exhibition, check the entrance in the event listing. The waterfront, exhibition hall and open plaza have different meeting points." },
        { title: "Before you leave", text: "If you need a step-free entrance or a specific drop-off point, confirm both with the venue or organizer. For a casual visit, leave time to walk down to the water and return along the avenue." },
      ],
      map: maps.plaza,
      sources: [["El Universo · location and opening (2004)", sources.plaza], ["Malecón 2000 Foundation", sources.manager]],
    },
    "eventos-y-exposiciones": {
      title: "Events and exhibitions at Plaza Rodolfo Baquerizo Moreno",
      card: "Events and exhibitions",
      description: "Find the exhibition hall and outdoor agora, and check the venue, time and admission before attending a fair in Guayaquil.",
      sections: [
        { title: "The exhibition hall and outdoor agora", text: "The plaza opened in 2004 with a glass, aluminum and steel building housing an upstairs exhibition room, plus an outdoor agora. These spaces suit different types of gatherings. Fairs, craft displays and performances have been documented at the plaza." },
        { title: "How to check an event listing", text: "Search for the event name and date on the city website or in the organizer’s announcement. Check whether it names the exhibition hall, the agora or another Malecón del Salado venue. Save the listing with the entry time, entrance and registration details." },
        { title: "Do I need a ticket or reservation?", text: "Check the terms for the event you plan to attend. Admission, capacity and prices vary by organizer. If a listing only says “convention center,” ask for the full venue name and address." },
        { title: "On a day without events", text: "From the plaza, look at how the glass building faces the open agora, then continue toward the Estero Salado. If you are attending with children or a group, agree on a meeting point outside before entering." },
      ],
      map: maps.plaza,
      sources: [["El Universo · hall and agora (2004)", sources.plaza], ["El Universo · cultural use of the plaza (2020)", sources.events], ["City of Guayaquil · announcements", sources.city]],
    },
    "paseo-malecon-del-salado": {
      title: "A walk from Plaza Baquerizo to Malecón del Salado",
      card: "Malecón del Salado walk",
      description: "Walk from the plaza to Guayaquil’s Estero Salado for a look at the exhibition hall, waterfront and bridge.",
      sections: [
        { title: "From American Park to today’s waterfront", text: "According to the city, American Park opened in 1922 in the area now occupied by the waterfront promenade and plaza. Rodolfo Baquerizo Moreno was the driving force behind the park. On today’s walk, watch how the straight avenue gives way to the exhibition plaza and then to the estuary’s edge." },
        { title: "Photo stops", text: "From the open plaza, frame the glass exhibition hall with the foreground space around it. On the waterfront, look for a cleared view that includes both the water and the 5 de Junio bridge. Check the light and keep the walkway by the railing clear." },
        { title: "Where is the boat dock?", text: "In July 2025 the city identified dock access from Ismael Pérez Pazmiño and Aguirre. Confirm current service, hours and access if you want a boat trip. The walk can be completed without going to the dock." },
      ],
      steps: ["Start at the plaza near 9 de Octubre and Tungurahua. Look at the exhibition hall exterior and outdoor agora.", "Continue toward Malecón del Salado using the signed pedestrian access that is open on the day.", "Follow the waterfront to a view of the 5 de Junio bridge. Retrace your steps or use a signed exit to return to the avenue."],
      map: maps.walk,
      sources: [["City of Guayaquil · American Park history", sources.history], ["City of Guayaquil · dock access (2025)", sources.boats], ["Malecón 2000 Foundation · promenade management", sources.manager]],
    },
  },
  zh: {
    "ubicacion-y-acceso": {
      title: "罗多尔福·巴克里索·莫雷诺广场怎么去",
      card: "位置与交通",
      description: "查询瓜亚基尔市中心广场的街口、步行与搭车方式，以及从萨拉多滨水步道前往广场时的定位参考。",
      sections: [
        { title: "广场在哪个街口？", text: "广场位于瓜亚基尔市中心，靠近十月九日大道（Avenida 9 de Octubre）与通古拉瓦街（Tungurahua）的交叉口，所在街区也临基斯基斯街（Quisquís）。导航时可使用广场全名，搭车时则把大道与横街一起告诉司机。" },
        { title: "步行、大众交通与计程车", text: "从市中心出发，沿十月九日大道朝萨拉多河口方向步行，留意通古拉瓦街路口。搭乘大众交通时，从出发点查询路线，并检查下车后到广场的步行段。搭计程车时可用该路口约定下车位置。" },
        { title: "应该走哪个入口？", text: "普通游览可用十月九日大道与通古拉瓦街交叉口定位。若要参观展览，出发前查看活动通知注明的入口。露天广场、展览厅与滨水步道各有不同的会合位置。" },
        { title: "出发前核对", text: "如需无台阶入口或指定下车点，请先与场地方或活动主办方核对。若只想顺道参观，可以留出步行到河口水边并返回大道的时间。" },
      ],
      map: maps.plaza,
      sources: [["《宇宙报》· 广场位置与启用（2004 年）", sources.plaza], ["马雷贡 2000 基金会", sources.manager]],
    },
    "eventos-y-exposiciones": {
      title: "罗多尔福·巴克里索·莫雷诺广场活动与展览",
      card: "活动与展览",
      description: "了解广场的室内展览厅和露天活动区，以及参加展会前如何核对地点、时间和入场要求。",
      sections: [
        { title: "室内展厅与露天活动区", text: "2004 年启用的广场设有一栋由玻璃、铝材与钢构组成的建筑，楼上设展览厅，室外另有供活动使用的露天场地。广场曾举办展会、手工艺展示与演出，具体活动可能安排在不同空间。" },
        { title: "怎样核对活动公告？", text: "用活动名称和日期查询市政府网站或主办方公告，核对使用的是展厅、露天活动区，还是萨拉多滨水区的其他场地。出发前保存入场时间、入口位置和登记说明。" },
        { title: "需要门票或预约吗？", text: "以该活动公告为准。入场、名额和费用因活动而异。若公告只写「会展中心」，请向主办方核对场地全名与地址。" },
        { title: "没有活动时可以看什么？", text: "可从广场空地观察玻璃展馆与露天活动区的布局，再步行前往萨拉多河口。家庭或团体参加活动时，可以预先约好室外会合点。" },
      ],
      map: maps.plaza,
      sources: [["《宇宙报》· 展馆与露天活动区（2004 年）", sources.plaza], ["《宇宙报》· 广场文化活动（2020 年）", sources.events], ["瓜亚基尔市政府公告", sources.city]],
    },
    "paseo-malecon-del-salado": {
      title: "从巴克里索广场步行到萨拉多滨水步道",
      card: "萨拉多滨水散步路线",
      description: "从瓜亚基尔巴克里索广场走到萨拉多河口，沿途看展馆外观、滨水景色与六月五日桥。",
      sections: [
        { title: "从美洲游乐园到今日滨水区", text: "据瓜亚基尔市政府，美洲游乐园（American Park）于 1922 年创立，旧址一带如今是广场与滨水步道。游乐园由罗多尔福·巴克里索·莫雷诺推动兴建。沿途可以观察十月九日大道、展馆前开阔的广场与河口岸线之间的变化。" },
        { title: "哪里适合拍照？", text: "在展馆外的空地可把玻璃立面与广场一起拍入画面。在滨水步道视线开阔处，可尝试同时取景水面和六月五日桥。留意光线，拍摄时给步道上的行人留出空间。" },
        { title: "游船码头在哪里？", text: "市政府在 2025 年 7 月的公告中把伊斯梅尔·佩雷斯·帕斯米尼奥街与阿吉雷街交叉口列为码头入口。如计划乘船，请先核对当日入口、开放时间与运营情况。单纯散步可以省略码头一站。" },
      ],
      steps: ["从十月九日大道与通古拉瓦街附近的广场出发，先看展馆外观和露天活动区。", "向萨拉多滨水步道前进，走当天开放且设有指示的行人入口。", "沿滨水步道走到可以看见六月五日桥的位置，再原路返回，或从有指示的出口回到大道。"],
      map: maps.walk,
      sources: [["瓜亚基尔市政府 · 美洲游乐园历史", sources.history], ["瓜亚基尔市政府 · 码头入口（2025 年）", sources.boats], ["马雷贡 2000 基金会 · 滨水步道管理", sources.manager]],
    },
  },
};
