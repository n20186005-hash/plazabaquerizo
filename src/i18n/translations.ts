export type Locale = "zh" | "en" | "es";
export type LinkItem = { name: string; url: string };
export type FAQItem = { question: string; answer: string };
export type TransportOption = { name: string; time: string; price: string; steps: string[] };
export type TimelineEvent = { period: string; description: string };
export type HistorySection = { subtitle: string; content: string };
export type EcologySection = { subtitle: string; content: string };
export type CultureSection = { subtitle: string; content: string };

export type Translations = {
  nav: { about: string; history: string; ecology: string; culture: string; visiting: string; transportation: string; tips: string; gallery: string; reviews: string; faq: string; location: string };
  hero: { tagline: string; title: string; subtitle: string; cta: string };
  rating: { reviews: string; source: string };
  about: { title: string; p1: string; p2: string; highlights: { title: string; items: string[] }; timeline: { title: string; events: TimelineEvent[] }; management: { title: string; content: string } };
  history: { title: string; intro: string; sections: HistorySection[] };
  ecology: { title: string; sections: EcologySection[] };
  culture: { title: string; intro: string; sections: CultureSection[]; events: { title: string; items: string[] } };
  visiting: { title: string; hours: { title: string; content: string; note: string }; price: { title: string; content: string; note: string }; duration: { title: string; content: string; note: string }; birds: { title: string; content: string }; bring: { title: string; items: string[] }; route: { title: string; content: string } };
  transportation: { title: string; airport: { title: string; content: string; options: TransportOption[] }; city: { title: string; content: string; steps: string[] }; selfDrive: { title: string; content: string; steps: string[] } };
  tips: { title: string; items: string[] };
  gallery: { title: string; viewMore: string };
  reviews: { title: string; subtitle: string; viewMore: string };
  faq: { title: string; subtitle: string; items: FAQItem[] };
  location: { title: string; address: string; openMaps: string };
  footer: { callToAction: string; text: string; made: string; linksTitle: string; links: LinkItem[] };
};

export const translations: Record<Locale, Translations> = {
  zh: {
    nav: { about: "景点概览", history: "历史沿革", ecology: "城市生态", culture: "建筑与文化", visiting: "游览指南", transportation: "交通接驳", tips: "游览建议", gallery: "照片画廊", reviews: "游客评价", faq: "常见问题", location: "地图位置" },
    hero: { tagline: "瓜亚基尔市中心 · 跨越世纪的城市文化广场", title: "Plaza Rodolfo Baquerizo Moreno", subtitle: "厄瓜多尔瓜亚基尔 · Av. 9 de Octubre", cta: "探索广场" },
    rating: { reviews: "条评价", source: "Google 评论" },
    about: {
      title: "景点概览",
      p1: "Plaza Rodolfo Baquerizo Moreno 位于厄瓜多尔瓜亚基尔市中心，坐落在重要的 9 de Octubre大道上，是连接瓜亚基尔大学（Universidad de Guayaquil）与萨拉多河口滨江大道（Malecón del Estero Salado）的重要城市枢纽。\n\n广场以 Rodolfo Baquerizo Moreno（1890-1977）命名，他是20世纪初瓜亚基尔著名的企业家和的城市文化推动者。1922年，他正是在这片土地上建立了该市第一个大型游乐园“美国公园”（American Park），为市民留下了深刻的城市记忆。",
      p2: "2004年，广场作为“千禧年滨河大道基金会”（Fundación Malecón 2000）城市更新计划的一部分进行了大规模重建，由著名建筑师 Juan Xavier Chávez 重新设计。如今，这里不仅是一个现代化的会展中心（Centro de Convenciones），更是一个集生态、文化与休闲于一体的城市地标。地下停车场可容纳112辆车，地面设有展览区和用于现场音乐及戏剧表演的露天剧场（Ágora）。",
      highlights: { title: "景点速览", items: ["地理位置: 厄瓜多尔瓜亚基尔市中心，Av. 9 de Octubre，连接大学区与 Estero Salado 水岸", "广场性质: 现代化会展中心兼具城市生态公园功能", "开放时间: 每日 06:00 – 23:00", "主要设施: 地下停车场（112车位）、地面展览区、Ágora 露天剧场、环形步道", "适合活动: 文化展览、观鸟、散步、慢跑、户外演出观赏"] },
      timeline: { title: "跨越世纪的历史沿革", events: [
        { period: "19世纪中叶", description: "Los Baños del Salado：这里最初是瓜亚基尔市民最喜爱的“萨拉多浴场”，人们在这里沐浴、喝着羊奶、听着军乐队演奏，是当时城市休闲的核心场所。" },
        { period: "1922年", description: "企业家 Rodolfo Baquerizo Moreno 在此打造了瓜亚基尔首个大型游乐园“美国公园”（American Park），设有溜冰场、斗牛场，成为城市文化生活的里程碑。" },
        { period: "1932年", description: "全国第一个用于演出的声学贝壳剧场在园内建成，为市民带来了前所未有的户外演出体验，奠定了此地作为文化空间的基础。" },
        { period: "1960年代", description: "原址更名为“瓜亚基尔公园”（Parque Guayaquil），继续作为市民休闲空间服务，直至20世纪末。" },
        { period: "2004年至今", description: "由著名建筑师 Juan Xavier Chávez 重新设计，作为 Fundación Malecón 2000 城市更新计划的重要一环，蜕变为如今集生态、会展与文化于一体的现代化 Plaza Rodolfo Baquerizo Moreno。" }
      ]},
      management: { title: "管理与维护", content: "广场由“千禧年滨河大道基金会”（Fundación Malecón 2000）管理维护，是瓜亚基尔市中心城市更新的重要成果。广场免费向公众开放，开放时间为每日 06:00 至 23:00。请爱护广场环境，保持整洁。" }
    },
    history: {
      title: "历史沿革与时光印记",
      intro: "Plaza Rodolfo Baquerizo Moreno 所在地是一处跨越近两个世纪城市记忆的珍贵遗址。从19世纪中叶的“萨拉多浴场”，到20世纪初的“美国公园”，再到今日现代化的会展文化广场——这里的每一寸土地都承载着瓜亚基尔市民的共同回忆。\n\n需要特别说明的是：广场以 Rodolfo Baquerizo Moreno 命名，是为了纪念这位杰出的企业家和城市文化推动者，而非政治人物。他在1922年创立的“美国公园”是瓜亚基尔现代城市娱乐文化的重要起源。",
      sections: [
        { subtitle: "Los Baños del Salado：19世纪的休闲中心", content: "在广场建成之前，这片土地在19世纪中叶是瓜亚基尔市民最喜爱的休闲胜地——“萨拉多浴场”（Los Baños del Salado）。当时，市民们会来到这里沐浴，饮用当地认为是疗养佳品的新鲜羊奶，在军乐队现场演奏的音乐中享受午后时光。这里是19世纪瓜亚基尔城市社交生活的核心场所，也是今日广场深厚文化底蕴的历史根源。" },
        { subtitle: "American Park（美国公园）：1922年的城市娱乐革命", content: "1922年，企业家 Rodolfo Baquerizo Moreno 敏锐地捕捉到市民对现代娱乐空间的需求，在此建立了瓜亚基尔第一个大型游乐园——“美国公园”（American Park）。公园内设有溜冰场、斗牛场等当时最先进的娱乐设施，迅速成为全市最受欢迎的休闲目的地。\n\n1932年，全国第一个专门用于演出的声学贝壳剧场（Teatro al Aire Libre con Concha Acústica）在园内落成。这一创新设计利用贝壳形曲面结构自然扩音，使户外演出达到了前所未有的音响效果，吸引了众多国内外艺术家前来表演。" },
        { subtitle: "从“瓜亚基尔公园”到现代重生（1960-2004）", content: "进入1960年代，原址更名为“瓜亚基尔公园”（Parque Guayaquil），继续服务市民。然而随着城市扩张和时代变迁，原有设施逐渐老化。2004年，在 Fundación Malecón 2000 的推动下，著名建筑师 Juan Xavier Chávez 对整片区域进行了全新的总体规划设计，将历史记忆、生态保育与现代会展功能完美融合，打造出今日我们所见的 Plaza Rodolfo Baquerizo Moreno。" }
      ]
    },
    ecology: {
      title: "城市生态与动植物观察",
      sections: [
        { subtitle: "城市观鸟指南", content: "Plaza Rodolfo Baquerizo Moreno 是瓜亚基尔市内非常著名的城市观鸟点。园内种植了大量本土植物，为鸟类提供了理想的觅食和栖息环境，常年吸引数十种鸟类在此繁衍。\n\n游客在这里可能观察到的鸟类包括：\n· 棕腹蜂鸟（Amazilia ventrirrufa）：体型小巧，羽毛在阳光下闪烁金属光泽，是最常见的访客之一\n· 灰颊鹦鹉（Aratinga wagleri）：成群结队，鸣声清脆，为广场增添了热带生机\n· 太平洋斑鸠（Zenaida meloda）：在树梢间悠闲觅食，是观鸟初学者最容易观察到的物种之一\n· 热带鸟种丰富：不同季节还可观测到多种候鸟和留鸟\n\n建议携带一副轻便望远镜，清晨或傍晚是观鸟的最佳时段。" },
        { subtitle: "本土植物与城市微气候", content: "广场内精心选育了多种厄瓜多尔本土植物，不仅美化环境，更为城市微气候调节和昆虫多样性保护发挥着重要作用：\n\n· 木棉树（Ceibo / Bombacopsis guianensis）：瓜亚基尔的城市象征之树，巨大的树干和绚烂的红花为广场提供了壮丽的遮荫空间，其花朵是多种蜂鸟的重要蜜源\n· 萨曼树（Samán / Albizia saman）：树冠广阔如伞，是广场上最理想的乘凉之处，傍晚时分常有鸟类在枝头栖息\n· 马达加斯加洋槐（Acacia mangium）：生长迅速，叶片细密，为小型昆虫和蜘蛛提供了理想的微栖息地\n\n这些植物共同构成了一个立体的城市生态系统，在炎热的热带气候中为市民提供清凉，同时也为城市野生动物保留了珍贵的庇护所。" }
      ]
    },
    culture: {
      title: "现代建筑与社区文化",
      intro: "2004年的重建不仅是对历史的致敬，更是对现代城市公共空间设计的一次卓越探索。广场的每一个建筑细节都体现了建筑师 Juan Xavier Chávez 对“城市即客厅”这一理念的深刻理解。",
      sections: [
        { subtitle: "环形步道：连接城市与自然的巧妙设计", content: "广场最引人注目的设计亮点之一，是其巧妙的环形步道系统。这条步道将繁忙的城市主干道（Av. 9 de Octubre）与宁静的水岸（Estero Salado）无缝连接，让市民在短短几分钟内就能从喧嚣的都市环境过渡到充满自然气息的滨水空间。\n\n步道沿途设置了多处休息节点，并结合地形高差设计了层次丰富的景观视线，使游客在行走过程中能不断发现新的视角。这一设计不仅提升了广场的可达性，更强化了瓜亚基尔作为“滨水城市”的空间认同感。" },
        { subtitle: "Ágora 露天剧场：声学与美学的双重盛宴", content: "广场的核心文化设施是位于中央的 Ágora 露天剧场。这一现代化的户外演出空间继承了1932年声学贝壳剧场的设计理念，利用科学的声学设计，使现场音乐和戏剧表演无需扩音设备即可实现出色的音响效果。\n\nÁgora 不仅是一个演出场地，更是社区凝聚力的象征。它的阶梯式坐席设计鼓励市民自带坐垫、与陌生人并肩而坐，在共同的艺术体验中建立城市归属感。" }
      ],
      events: { title: "广场文化活动日历", items: [
        "文化展览：广场地面展览区常年举办各类艺术、历史和科普主题展览",
        "手工艺品集市：周末定期举办，本地工匠在此展示和销售传统手工艺品",
        "K-Fest 音乐节：近年来深受年轻人喜爱，广场已成为瓜亚基尔 K-Pop 文化活动的重要举办地",
        "户外剧场演出：Ágora 常年有现场音乐、戏剧和舞蹈表演，多为免费向公众开放"
      ]}
    },
    visiting: {
      title: "游览指南",
      hours: { title: "开放时间", content: "每日 06:00 – 23:00\n全年无休，节假日正常开放", note: "⚠️ 提醒：广场开放时间较长，但建议白天前往，夜间请注意安全。" },
      price: { title: "费用", content: "广场公共区域免费开放，无需购票", note: "广场公共区域完全免费向公众开放。部分特展或 Ágora 专场演出可能单独收费，请留意现场公告。" },
      duration: { title: "建议游览时长", content: "建议预留 1 – 3 小时", note: "若计划观鸟、参观展览并漫步至 Malecón del Estero Salado，建议预留半天时间。" },
      birds: { title: "城市观鸟与生态观察", content: "广场是瓜亚基尔市内著名的城市观鸟点。园内种植了木棉树（Ceibo）、无花果树等大量本土植物，常年吸引数十种鸟类在此繁衍觅食。特别推荐清晨或傍晚时分前往，携带一副轻便望远镜，您将有机会近距离观察到棕腹蜂鸟（Amazilia ventrirrufa）、灰颊鹦鹉等多种热带鸟类。\n\n除鸟类外，广场的植物群落——包括巨大的木棉树、萨曼树和马达加斯加洋槐——也为城市昆虫和小型野生动物提供了宝贵的栖息地，是了解瓜亚基尔城市生态系统的绝佳户外课堂。" },
      bring: { title: "游览建议物品", items: ["舒适的步行鞋（广场至 Estero Salado 步道较长）", "饮用水（保持水分补充，赤道气候炎热）", "防晒用品与帽子（热带阳光强烈，建议避开正午时段）", "轻便望远镜或双筒镜（观鸟爱好者的必备）", "相机或手机（广场建筑与热带鸟类都是绝佳拍摄题材）", "轻便衣物（热带气候，注意透气速干）"] },
      route: { title: "推荐延伸游览路线", content: "由于广场直接连接着萨拉多河口（Estero Salado），我们特别推荐以下傍晚游览路线：\n\n1. 约17:00 从广场出发，此时阳光开始变得柔和，是拍摄建筑最佳光线\n2. 约17:30 在广场 Ágora 附近找一处阴凉坐下，观察鸟类活动的高峰时段\n3. 约18:15 沿环形步道向 Estero Salado 水岸方向漫步，沿途欣赏落日余晖\n4. 约18:45 抵达 Malecón del Estero Salado，在滨水餐厅享用海鲜晚餐，同时观赏水上喷泉夜景\n\n这条路线全长约1.5公里，步行轻松，且完美避开了赤道地区正午的酷热，是体验瓜亚基尔本地生活的绝佳方式。" }
    },
    transportation: {
      title: "交通接驳",
      airport: { title: "从瓜亚基尔机场出发", content: "距离瓜亚基尔国际机场(GYE)约 8 公里，车程约 20-30 分钟。", options: [
        { name: "出租车/网约车(最便捷)", price: "$5 - $10 美元", time: "约 20-30 分钟", steps: ["在机场出口处乘坐出租车或使用网约车应用", "告诉司机前往 Av. 9 de Octubre 的 Plaza Rodolfo Baquerizo Moreno", "广场位于市中心，地下停车场可容纳112辆车（入口在 Av. 9 de Octubre）"] },
        { name: "公共交通(经济实惠)", price: "$0.35 - $0.50 美元", time: "约 40-50 分钟", steps: ["在机场乘坐前往市中心的公交或班车", "在 9 de Octubre 大道附近下车", "步行即可到达广场"] }
      ]},
      city: { title: "从瓜亚基尔市内前往", content: "广场位于市中心 Av. 9 de Octubre 上，从任何地点前往都十分方便。广场同时紧邻瓜亚基尔大学，是学生和市民的热门去处。", steps: ["导航: 在 Google Maps 中输入 Plaza Rodolfo Baquerizo Moreno Guayaquil", "公交: 乘坐前往 9 de Octubre 大道的公交车，在 Plaza Rodolfo Baquerizo Moreno 站下车", "步行: 从 Malecón del Estero Salado 方向沿步道可直接走入广场"] },
      selfDrive: { title: "自驾前往", content: "广场设有地下停车场，可容纳112辆车，对自驾游客非常友好。", steps: ["导航至 Av. 9 de Octubre, Plaza Rodolfo Baquerizo Moreno", "地下停车场入口位于 Av. 9 de Octubre 侧，有醒目标识", "停车费: 请咨询现场收费标准，部分时段可能免费"] }
    },
    tips: { title: "游览建议", items: [
      "广场公共区域免费开放，无需任何门票或预约",
      "推荐傍晚时分（17:00-19:00）游览，避开赤道烈日，还能欣赏壮丽落日",
      "广场直接连接 Malecón del Estero Salado，建议安排连续游览，在滨水餐厅享用海鲜晚餐",
      "热带气候炎热潮湿，请做好防晒和补水措施，建议携带帽子",
      "观鸟爱好者请携带望远镜，清晨和傍晚是最佳观察时段",
      "Ágora 露天剧场常有免费演出，可提前在 Fundación Malecón 2000 官网查询活动日历",
      "请保持广场整洁，不要乱扔垃圾，共同维护这一城市文化空间",
      "周边有餐厅和商店，可以顺道用餐或购物"
    ] },
    gallery: { title: "精彩照片", viewMore: "在 Google Maps 查看更多相片" },
    reviews: { title: "游客评价", subtitle: "来自 Google Maps 的真实评价", viewMore: "在 Google Maps 查看更多评价" },
    faq: { title: "常见问题", subtitle: "深入了解 Plaza Rodolfo Baquerizo Moreno", items: [
      { question: "Plaza Rodolfo Baquerizo Moreno 的开放时间是？", answer: "每日 06:00 - 23:00，全年无休，节假日正常开放。开放时间较长，方便市民在不同时间段前来休闲或参加文化活动。" },
      { question: "进入广场需要门票吗？", answer: "广场的公共区域完全免费向公众开放，无需购票或预约。部分特展或 Ágora 专场的商业演出可能单独收费，请留意现场或官方公告。" },
      { question: "广场以谁的名字命名？有什么历史意义？", answer: "广场以 Rodolfo Baquerizo Moreno（1890-1977）命名，他是20世纪初瓜亚基尔著名的企业家和的城市文化推动者。1922年，他正是在这片土地上建立了该市第一个大型游乐园“美国公园”（American Park），为市民留下了深刻的城市记忆。请注意：Rodolfo Baquerizo Moreno 并非政治人物，历史上曾任总统的是 Alfredo Baquerizo Moreno，二者不可混淆。" },
      { question: "广场适合什么活动？除了散步还能做什么？", answer: "广场集生态、文化与会展功能于一体。您可以：观察热带城市鸟类（推荐携带望远镜）、参观地面展览区的免费展览、在 Ágora 露天剧场欣赏现场演出、沿环形步道漫步至 Malecón del Estero Salado 享受海鲜美食。这里也是了解瓜亚基尔近两个世纪城市变迁的活态科普课堂。" },
      { question: "如何前往 Plaza Rodolfo Baquerizo Moreno？", answer: "广场位于瓜亚基尔市中心 Av. 9 de Octubre 上，紧邻瓜亚基尔大学，交通便利。从机场打车约 20-30 分钟，市区内可乘坐公交或步行前往。自驾游客可使用广场地下停车场（112车位）。" },
      { question: "广场附近还有哪些值得一游的景点？", answer: "强烈推荐顺道参观：\n1. Malecón del Estero Salado（萨拉多河口滨江大道）——与广场直接相连，是欣赏河岸日落、享用海鲜晚餐和观赏水上喷泉的绝佳去处；\n2. 9 de Octubre 大道——购物和餐饮热门区域；\n3. 瓜亚基尔大学——感受当地学术氛围；\n4. Malecón 2000——瓜亚基尔最著名的滨河景观带，距离不远。" }
    ]},
    location: { title: "地图位置", address: "Av. 9 de Octubre, 090313 Guayaquil, 厄瓜多尔\n(市中心，紧邻 Universidad de Guayaquil，连接 Malecón del Estero Salado)", openMaps: "在 Google Maps 查看位置" },
    footer: { callToAction: "作为城市文化与生态空间，请与我们一起爱护环境、保护绿地。保持广场整洁，共同维护这一跨越世纪的城市记忆。", text: "© 2026 Plaza Rodolfo Baquerizo Moreno 科普指南 · 保留所有权利。\n本网站是一个独立的第三方科普项目，致力于准确传播瓜亚基尔城市历史文化。我们与当地政府或其他官方机构没有任何关联。", made: "本网站是一个独立的第三方科普项目。为探索者与学习者而制。", linksTitle: "相关链接", links: [
      { name: "厄瓜多尔国家旅游局", url: "https://ecuador.travel/" },
      { name: "瓜亚基尔市政府", url: "https://www.guayaquil.gob.ec/" },
      { name: "千禧年滨河大道基金会", url: "https://malecon2000.com/" },
      { name: "瓜亚斯省政府", url: "https://guayas.gob.ec/" },
      { name: "瓜亚基尔官方旅游局", url: "http://visitguayaquil.com/" }
    ]}
  },

  en: {
    nav: { about: "Overview", history: "History", ecology: "Ecology", culture: "Architecture & Culture", visiting: "Visit Guide", transportation: "Getting There", tips: "Travel Tips", gallery: "Photo Gallery", reviews: "Reviews", faq: "FAQ", location: "Location" },
    hero: { tagline: "Downtown Guayaquil · A Century-Spanning Urban Cultural Plaza", title: "Plaza Rodolfo Baquerizo Moreno", subtitle: "Guayaquil, Ecuador · Av. 9 de Octubre", cta: "Explore the Plaza" },
    rating: { reviews: "reviews", source: "Google Reviews" },
    about: {
      title: "Overview",
      p1: "Plaza Rodolfo Baquerizo Moreno is located in downtown Guayaquil, Ecuador, on the important Av. 9 de Octubre avenue. It serves as a vital urban hub connecting the Universidad de Guayaquil with the Malecón del Estero Salado waterfront promenade.\n\nThe plaza is named after Rodolfo Baquerizo Moreno (1890-1977), a prominent Ecuadorian entrepreneur and cultural promoter in the early 20th century. In 1922, he established the first large amusement park in Guayaquil—\"American Park\"—on this very site, leaving a profound mark on the city's collective memory.",
      p2: "In 2004, as part of the Fundación Malecón 2000 urban renewal initiative, the site was comprehensively redeveloped under the design of renowned architect Juan Xavier Chávez. Today, it functions as a modern convention center (Centro de Convenciones) that seamlessly integrates ecological preservation, cultural programming, and public recreation. Facilities include an underground parking garage (112 spaces), ground-level exhibition areas, and the Ágora open-air theater for live music and theatrical performances.",
      highlights: { title: "Quick Facts", items: ["Location: Av. 9 de Octubre, downtown Guayaquil, connecting University district with Estero Salado waterfront", "Character: Modern convention center integrated with urban ecological park", "Opening Hours: Daily 06:00 – 23:00", "Main Facilities: Underground parking (112 spaces), exhibition areas, Ágora open-air theater, circular walkway", "Activities: Cultural exhibitions, birdwatching, walking, jogging, outdoor performances"] },
      timeline: { title: "A Timeline Spanning Two Centuries", events: [
        { period: "Mid-19th Century", description: "\"Los Baños del Salado\": This site was originally Guayaquil's most beloved recreational area, where citizens came to bathe, drink fresh goat milk, and enjoy military band performances—the heart of 19th-century urban leisure." },
        { period: "1922", description: "Entrepreneur Rodolfo Baquerizo Moreno established Guayaquil's first large amusement park, \"American Park,\" featuring a skating rink and bullring, marking a milestone in the city's cultural life." },
        { period: "1932", description: "The first acoustic shell theater in the country was built on-site, providing unprecedented outdoor performance acoustics and laying the foundation for this site as a cultural space." },
        { period: "1960s", description: "The site was renamed \"Parque Guayaquil\" and continued serving as a public recreational space through the late 20th century." },
        { period: "2004 – Present", description: "Redesigned by architect Juan Xavier Chávez as part of the Fundación Malecón 2000 urban renewal, transformed into the modern Plaza Rodolfo Baquerizo Moreno—integrating history, ecology, and convention functions." }
      ]},
      management: { title: "Management & Maintenance", content: "The plaza is managed and maintained by the Fundación Malecón 2000 as an important achievement of Guayaquil's downtown urban renewal. The plaza is free and open to the public daily from 06:00 to 23:00. Please help keep the plaza clean and tidy." }
    },
    history: {
      title: "History & Heritage Through Time",
      intro: "The site of Plaza Rodolfo Baquerizo Moreno carries nearly two centuries of urban memory. From the \"Baños del Salado\" of the mid-19th century, to the \"American Park\" of the early 20th century, to today's modern convention and cultural plaza—every inch of this land holds the collective memories of Guayaquil's citizens.\n\nImportant clarification: The plaza is named after Rodolfo Baquerizo Moreno, a distinguished entrepreneur and cultural promoter, NOT a political figure. The \"American Park\" he founded in 1922 was a cornerstone of modern urban entertainment culture in Guayaquil.",
      sections: [
        { subtitle: "Los Baños del Salado: The 19th-Century Leisure Center", content: "Long before the plaza was built, this land served in the mid-19th century as \"Los Baños del Salado,\" Guayaquil's most beloved recreational destination. Citizens would come here to bathe in the saline waters, drink fresh goat milk believed to have therapeutic properties, and enjoy afternoon leisure accompanied by live military band performances. This was the heart of 19th-century Guayaquil's social life and the historical root of the plaza's deep cultural heritage." },
        { subtitle: "American Park (1922): A Revolution in Urban Entertainment", content: "In 1922, entrepreneur Rodolfo Baquerizo Moreno keenly recognized the citizens' need for modern recreational spaces and established Guayaquil's first large amusement park—\"American Park\"—on this site. The park featured a skating rink, bullring, and other state-of-the-art entertainment facilities of the time, quickly becoming the city's most popular leisure destination.\n\nIn 1932, the first acoustic shell theater in the country (Teatro al Aire Libre con Concha Acústica) was completed on-site. This innovative design used a shell-shaped curved structure for natural sound amplification, achieving unprecedented audio quality for outdoor performances and attracting numerous domestic and international artists." },
        { subtitle: "From \"Parque Guayaquil\" to Modern Rebirth (1960s-2004)", content: "Entering the 1960s, the site was renamed \"Parque Guayaquil\" and continued serving citizens. However, with urban expansion and changing times, the original facilities gradually aged. In 2004, driven by the Fundación Malecón 2000, renowned architect Juan Xavier Chávez created a new master plan for the entire area, perfectly integrating historical memory, ecological conservation, and modern convention functions into the Plaza Rodolfo Baquerizo Moreno we see today." }
      ]
    },
    ecology: {
      title: "Urban Ecology & Biodiversity",
      sections: [
        { subtitle: "Urban Birdwatching Guide", content: "Plaza Rodolfo Baquerizo Moreno is a well-known urban birdwatching spot in Guayaquil. The plaza is planted with extensive native vegetation, providing ideal foraging and habitat conditions for birds, attracting dozens of species year-round.\n\nBird species visitors may observe include:\n· Rufous-vented Hummingbird (Amazilia ventrirrufa): Small and agile, with iridescent plumage shimmering in sunlight—one of the most common visitors\n· Gray-cheeked Parrot (Aratinga wagleri): Seen in flocks, with crisp calls that bring tropical vitality to the plaza\n· Pacific Dove (Zenaida meloda): Forages leisurely among tree branches; one of the easiest species for beginner birdwatchers to observe\n· Diverse tropical species: Depending on the season, various migratory and resident birds can be observed\n\nA pair of lightweight binoculars is recommended. Early morning and dusk are the best times for birdwatching." },
        { subtitle: "Native Plants & Urban Microclimate", content: "The plaza features carefully selected Ecuadorian native plants that not only beautify the environment but also play an important role in urban microclimate regulation and insect diversity conservation:\n\n· Ceibo (Bombacopsis guianensis): The symbolic tree of Guayaquil, with a massive trunk and brilliant red flowers providing magnificent shade. Its flowers are an important nectar source for hummingbirds\n· Samán (Albizia saman): With an umbrella-like expansive canopy, it is the ideal spot for cooling off in the plaza; birds often roost on its branches at dusk\n· Madagascar Acacia (Acacia mangium): Fast-growing with fine foliage, providing ideal microhabitats for small insects and spiders\n\nTogether, these plants form a three-dimensional urban ecosystem, providing cooling in the hot tropical climate and preserving precious refuge for urban wildlife." }
      ]
    },
    culture: {
      title: "Modern Architecture & Community Culture",
      intro: "The 2004 redevelopment was not only a tribute to history but also an outstanding exploration of modern urban public space design. Every architectural detail of the plaza reflects architect Juan Xavier Chávez's profound understanding of the concept of \"the city as a living room.\"",
      sections: [
        { subtitle: "The Circular Walkway: Ingenious Design Connecting City and Nature", content: "One of the most striking design features of the plaza is its ingenious circular walkway system. This walkway seamlessly connects the busy urban main road (Av. 9 de Octubre) with the tranquil waterfront (Estero Salado), allowing citizens to transition from a bustling urban environment to a nature-filled waterfront space in just a few minutes.\n\nThe walkway incorporates multiple rest nodes along the route and uses topographic level changes to create layered landscape viewlines, allowing visitors to continuously discover new perspectives as they walk. This design not only improves the plaza's accessibility but also strengthens Guayaquil's spatial identity as a \"waterfront city.\"" },
        { subtitle: "Ágora Open-Air Theater: A Dual Feast of Acoustics and Aesthetics", content: "The core cultural facility of the plaza is the Ágora open-air theater located at its center. This modern outdoor performance space inherits the design philosophy of the 1932 acoustic shell theater, utilizing scientific acoustic design so that live music and theatrical performances achieve excellent sound quality without additional amplification.\n\nThe Ágora is not only a performance venue but also a symbol of community cohesion. Its terraced seating design encourages citizens to bring their own cushions and sit side-by-side with strangers, building a sense of urban belonging through shared artistic experiences." }
      ],
      events: { title: "Cultural Events Calendar", items: [
        "Art Exhibitions: The ground-level exhibition area hosts various art, history, and science-themed exhibitions year-round",
        "Craft Market: Regularly held on weekends, where local artisans display and sell traditional handicrafts",
        "K-Fest Music Festival: Increasingly popular among young people in recent years; the plaza has become an important venue for K-Pop cultural events in Guayaquil",
        "Ágora Performances: Regular free outdoor concerts, theater, and dance performances, mostly free and open to the public"
      ]}
    },
    visiting: {
      title: "Visitor Guide",
      hours: { title: "Opening Hours", content: "Daily: 06:00 – 23:00\nOpen year-round, including holidays", note: "⚠️ Note: The plaza has long opening hours, but visiting during daytime is recommended. Please be careful at night." },
      price: { title: "Admission", content: "Public areas are free and open to all", note: "The public areas of the plaza are completely free. Some special exhibitions or ticketed Ágora performances may charge separately; please check on-site announcements." },
      duration: { title: "Recommended Duration", content: "Recommended: 1 – 3 hours", note: "If you plan to birdwatch, visit exhibitions, and walk to Malecón del Estero Salado, consider reserving half a day." },
      birds: { title: "Urban Birdwatching & Ecological Observation", content: "The plaza is a renowned urban birdwatching spot in Guayaquil. Extensive native plants including Ceibo trees and fig trees attract dozens of bird species year-round for foraging and breeding. We especially recommend visiting in the early morning or at dusk with a pair of lightweight binoculars—you may have close encounters with Rufous-vented Hummingbirds (Amazilia ventrirrufa), gray-cheeked parrots, and various other tropical birds.\n\nIn addition to birds, the plaza's plant community—including magnificent Ceibo trees, Samán trees, and Madagascar acacia—also provides valuable habitat for urban insects and small wildlife, making it an excellent outdoor classroom for understanding Guayaquil's urban ecosystem." },
      bring: { title: "Recommended Items", items: ["Comfortable walking shoes (the walkway to Estero Salado is fairly long)", "Drinking water (stay hydrated in equatorial climate)", "Sun protection & hat (tropical sun is strong; avoid midday hours)", "Lightweight binoculars (essential for birdwatching enthusiasts)", "Camera or phone (great photographic subjects: architecture & tropical birds)", "Light, breathable clothing (hot and humid tropical climate)"] },
      route: { title: "Recommended Extended Walking Route", content: "Since the plaza directly connects to the Estero Salado waterfront, we especially recommend the following evening route:\n\n1. ~17:00: Start at the plaza, when the light becomes soft—ideal for photographng the architecture\n2. ~17:30: Find shade near the Ágora to observe peak bird activity\n3. ~18:15: Walk along the circular walkway toward the Estero Salado waterfront, enjoying the sunset along the way\n4. ~18:45: Arrive at Malecón del Estero Salado, enjoy seafood dinner at a waterfront restaurant and watch the water fountain night show\n\nThis route is approximately 1.5 km total, an easy walk, and perfectly avoids the equatorial midday heat. It is an excellent way to experience local Guayaquil life." }
    },
    transportation: {
      title: "Getting There",
      airport: { title: "From Guayaquil Airport", content: "About 8 km from Guayaquil International Airport (GYE), approx. 20-30 minutes by car.", options: [
        { name: "Taxi/Ride-sharing (Most Convenient)", price: "$5 - $10 USD", time: "About 20-30 minutes", steps: ["Take a taxi at the airport exit or use ride-sharing app", "Tell the driver to go to Plaza Rodolfo Baquerizo Moreno on Av. 9 de Octubre", "The plaza has an underground parking garage (112 spaces); entrance is on Av. 9 de Octubre"] },
        { name: "Public Transportation (Economical)", price: "$0.35 - $0.50 USD", time: "About 40-50 minutes", steps: ["Take a bus or shuttle from the airport to downtown", "Get off near Av. 9 de Octubre", "Walk to reach the plaza"] }
      ]},
      city: { title: "From Within Guayaquil", content: "The plaza is located on Av. 9 de Octubre in downtown, very convenient to access from any location. It is adjacent to the Universidad de Guayaquil, making it a popular destination for students and citizens alike.", steps: ["Navigation: Enter Plaza Rodolfo Baquerizo Moreno Guayaquil in Google Maps", "Bus: Take a bus heading to Av. 9 de Octubre, get off at Plaza Rodolfo Baquerizo Moreno stop", "Walking: From Malecón del Estero Salado, follow the walkway directly into the plaza"] },
      selfDrive: { title: "Driving", content: "The plaza has an underground parking garage with 112 spaces, very friendly for self-driving visitors.", steps: ["Navigate to Av. 9 de Octubre, Plaza Rodolfo Baquerizo Moreno", "Underground parking entrance is on the Av. 9 de Octubre side, clearly signed", "Parking fee: Please check on-site rates; some hours may be free"] }
    },
    tips: { title: "Travel Tips", items: [
      "Public areas are free, no tickets or reservation required",
      "Evening visits (17:00-19:00) are recommended to avoid the equatorial midday heat and enjoy spectacular sunsets",
      "The plaza directly connects to Malecón del Estero Salado—plan a combined visit and enjoy seafood dinner at a waterfront restaurant",
      "Tropical climate is hot and humid; please take sun protection and hydration measures, and bring a hat",
      "Birdwatching enthusiasts should bring binoculars; early morning and dusk are optimal observation times",
      "The Ágora often hosts free performances; check the Fundación Malecón 2000 official website for the events calendar in advance",
      "Please keep the plaza clean and tidy—let's preserve this urban cultural space together",
      "There are restaurants and shops nearby for dining or shopping"
    ] },
    gallery: { title: "Photo Gallery", viewMore: "View More Photos on Google Maps" },
    reviews: { title: "Visitor Reviews", subtitle: "Real reviews from Google Maps", viewMore: "View More Reviews on Google Maps" },
    faq: { title: "Frequently Asked Questions", subtitle: "Learn more about Plaza Rodolfo Baquerizo Moreno", items: [
      { question: "What are the opening hours of Plaza Rodolfo Baquerizo Moreno?", answer: "Daily 06:00 - 23:00, open year-round including holidays. The long opening hours make it convenient for citizens to enjoy cultural activities at different times." },
      { question: "Is there an entrance fee for the plaza?", answer: "No. The public areas of the plaza are completely free and open to the public. No tickets or reservation are required. Some special exhibitions or ticketed Ágora performances may charge separately." },
      { question: "Who is the plaza named after? What is its historical significance?", answer: "The plaza is named after Rodolfo Baquerizo Moreno (1890-1977), a prominent entrepreneur and cultural promoter in early 20th-century Guayaquil. In 1922, he established the city's first large amusement park, \"American Park,\" on this very site. Important note: Rodolfo Baquerizo Moreno was NOT a political figure—the historical president was Alfredo Baquerizo Moreno. Please do not confuse the two." },
      { question: "What activities is the plaza suitable for? What else can I do besides walking?", answer: "The plaza integrates ecological, cultural, and convention functions. You can: observe tropical urban birds (binoculars recommended), visit free exhibitions in the ground-level exhibition area, enjoy live performances at the Ágora open-air theater, and walk along the circular walkway to Malecón del Estero Salado for seafood dining. It is also a living classroom for understanding nearly two centuries of Guayaquil's urban transformation." },
      { question: "How to get to Plaza Rodolfo Baquerizo Moreno?", answer: "The plaza is located on Av. 9 de Octubre in downtown Guayaquil, adjacent to the Universidad de Guayaquil, with convenient transportation. It's about 20-30 minutes by taxi from the airport. Self-driving visitors can use the underground parking garage (112 spaces)." },
      { question: "What other attractions are worth visiting near the plaza?", answer: "Highly recommended to visit nearby:\n1. Malecón del Estero Salado—directly connected to the plaza, excellent for riverfront sunsets, seafood dining, and water fountain shows;\n2. Av. 9 de Octubre—popular shopping and dining area;\n3. Universidad de Guayaquil—experience the local academic atmosphere;\n4. Malecón 2000—Guayaquil's most famous riverfront landscape belt, a short distance away." }
    ]},
    location: { title: "Map Location", address: "Av. 9 de Octubre, 090313 Guayaquil, Ecuador\n(Downtown, adjacent to Universidad de Guayaquil, connecting to Malecón del Estero Salado)", openMaps: "View Location on Google Maps" },
    footer: { callToAction: "As an urban cultural and ecological space, please join us in caring for the environment and protecting green areas. Keep the plaza clean and preserve this century-spanning urban memory together.", text: "© 2026 Plaza Rodolfo Baquerizo Moreno Educational Guide · All rights reserved.\nThis website is an independent third-party educational project dedicated to accurately sharing Guayaquil's urban history and culture. We are not affiliated with the local government or any official authority.", made: "This website is an independent third-party educational project. Made for explorers and learners.", linksTitle: "Related Links", links: [
      { name: "Ecuador National Tourism Board", url: "https://ecuador.travel/" },
      { name: "Guayaquil Municipal Government", url: "https://www.guayaquil.gob.ec/" },
      { name: "Fundación Malecón 2000", url: "https://malecon2000.com/" },
      { name: "Guayas Provincial Government", url: "https://guayas.gob.ec/" },
      { name: "Guayaquil Official Tourism", url: "http://visitguayaquil.com/" }
    ]}
  },

  es: {
    nav: { about: "Descripción", history: "Historia", ecology: "Ecología", culture: "Arquitectura y Cultura", visiting: "Guía de Visita", transportation: "Cómo Llegar", tips: "Consejos", gallery: "Galería de Fotos", reviews: "Reseñas", faq: "Preguntas Frecuentes", location: "Ubicación" },
    hero: { tagline: "Centro de Guayaquil · Plaza Cultural Urbana de Siglos", title: "Plaza Rodolfo Baquerizo Moreno", subtitle: "Guayaquil, Ecuador · Av. 9 de Octubre", cta: "Explora la Plaza" },
    rating: { reviews: "reseñas", source: "Google Reviews" },
    about: {
      title: "Descripción General",
      p1: "La Plaza Rodolfo Baquerizo Moreno se encuentra en el centro de Guayaquil, Ecuador, en la importante avenida Av. 9 de Octubre. Sirve como un vital nudo urbano que conecta la Universidad de Guayaquil con el Malecón del Estero Salado.\n\nLa plaza recibe su nombre de Rodolfo Baquerizo Moreno (1890-1977), destacado empresario y promotor cultural guayaquileño de principios del siglo XX. En 1922, estableció en este mismo sitio el primer gran parque de atracciones de Guayaquil, el \"American Park,\" dejando una profunda huella en la memoria colectiva de la ciudad.",
      p2: "En 2004, como parte de la iniciativa de renovación urbana de la Fundación Malecón 2000, el sitio fue rediseñado integralmente por el renombrado arquitecto Juan Xavier Chávez. Hoy en día funciona como un moderno centro de convenciones (Centro de Convenciones) que integra armoniosamente la preservación ecológica, la programación cultural y el recreo público. Las instalaciones incluyen un estacionamiento subterráneo (112 espacios), áreas de exhibición a nivel de suelo y el teatro al aire libre Ágora para conciertos en vivo y funciones teatrales.",
      highlights: { title: "Datos Rápidos", items: ["Ubicación: Av. 9 de Octubre, centro de Guayaquil, conectando el distrito universitario con el Malecón del Estero Salado", "Carácter: Centro de convenciones moderno integrado con parque ecológico urbano", "Horario: Diario 06:00 – 23:00", "Instalaciones Principales: Estacionamiento subterráneo (112 espacios), áreas de exhibición, teatro Ágora al aire libre, pasarela circular", "Actividades: Exhibiciones culturales, observación de aves, caminatas, trote, funciones al aire libre"] },
      timeline: { title: "Una Línea de Tiempo que Abarca Dos Siglos", events: [
        { period: "Mediados del Siglo XIX", description: "\"Los Baños del Salado\": Este sitio fue originalmente el área recreativa más querida de Guayaquil, donde los ciudadanos venían a bañarse, beber leche de cabra fresca y disfrutar de presentaciones de bandas militares—el corazón del ocio urbano del siglo XIX." },
        { period: "1922", description: "El empresario Rodolfo Baquerizo Moreno estableció el primer gran parque de atracciones de Guayaquil, el \"American Park,\" en este sitio, con pista de patinaje y plaza de toros, marcando un hito en la vida cultural de la ciudad." },
        { period: "1932", description: "El primer teatro tipo concha acústica del país fue construido en el sitio, proporcionando una acústica sin precedentes para funciones al aire libre y sentando las bases para este lugar como espacio cultural." },
        { period: "Década de 1960", description: "El sitio fue renombrado \"Parque Guayaquil\" y continuó sirviendo como espacio recreativo público hasta finales del siglo XX." },
        { period: "2004 – Actualidad", description: "Rediseñado por el arquitecto Juan Xavier Chávez como parte de la renovación urbana de la Fundación Malecón 2000, transformado en la moderna Plaza Rodolfo Baquerizo Moreno, integrando historia, ecología y funciones de convenciones." }
      ]},
      management: { title: "Gestión y Mantenimiento", content: "La plaza es gestionada y mantenida por la Fundación Malecón 2000 como un importante logro de la renovación urbana del centro de Guayaquil. La plaza es gratuita y está abierta al público diariamente de 06:00 a 23:00. Por favor, ayude a mantener la plaza limpia y ordenada." }
    },
    history: {
      title: "Historia y Patrimonio a Través del Tiempo",
      intro: "El sitio de la Plaza Rodolfo Baquerizo Moreno lleva casi dos siglos de memoria urbana. Desde los \"Baños del Salado\" de mediados del siglo XIX, hasta el \"American Park\" de principios del siglo XX, hasta la moderna plaza cultural y de convenciones de hoy—cada centímetro de esta tierra guarda los recuerdos colectivos de los ciudadanos de Guayaquil.\n\nAclaración importante: La plaza recibe su nombre de Rodolfo Baquerizo Moreno, un destacado empresario y promotor cultural, NO de una figura política. El \"American Park\" que fundó en 1922 fue una piedra angular de la cultura de entretenimiento urbano moderno en Guayaquil.",
      sections: [
        { subtitle: "Los Baños del Salado: El Centro de Ocio del Siglo XIX", content: "Mucho antes de que se construyera la plaza, esta tierra sirvió en el siglo XIX como \"Los Baños del Salado,\" el destino recreativo más querido de Guayaquil. Los ciudadanos venían aquí a bañarse en las aguas salinas, beber leche de cabra fresca que se creía tenía propiedades terapéuticas, y disfrutar del ocio de tarde acompañados de presentaciones de bandas militares en vivo. Este fue el corazón de la vida social de Guayaquil en el siglo XIX y la raíz histórica del profundo patrimonio cultural de la plaza." },
        { subtitle: "American Park (1922): Una Revolución en el Entretenimiento Urbano", content: "En 1922, el empresario Rodolfo Baquerizo Moreno reconoció agudamente la necesidad de los ciudadanos de espacios de recreación modernos y estableció el primer gran parque de atracciones de Guayaquil, el \"American Park,\" en este sitio. El parque contaba con pista de patinaje, plaza de toros y otras instalaciones de entretenimiento de vanguardia de la época, convirtiéndose rápidamente en el destino de ocio más popular de la ciudad.\n\nEn 1932, el primer teatro tipo concha acústica del país (Teatro al Aire Libre con Concha Acústica) fue completado en el sitio. Este diseño innovador utilizaba una estructura curva en forma de concha para la amplificación natural del sonido, logrando una calidad de audio sin precedentes para presentaciones al aire libre y atrayendo a numerosos artistas nacionales e internacionales." },
        { subtitle: "De \"Parque Guayaquil\" al Renacimiento Moderno (1960s-2004)", content: "Entrando en la década de 1960, el sitio fue renombrado \"Parque Guayaquil\" y continuó sirviendo a los ciudadanos. Sin embargo, con la expansión urbana y los cambios de los tiempos, las instalaciones originales se deterioraron gradualmente. En 2004, impulsado por la Fundación Malecón 2000, el renombrado arquitecto Juan Xavier Chávez creó un nuevo plan maestro para toda el área, integrando armoniosamente la memoria histórica, la conservación ecológica y las funciones modernas de convenciones en la Plaza Rodolfo Baquerizo Moreno que vemos hoy." }
      ]
    },
    ecology: {
      title: "Ecología Urbana y Biodiversidad",
      sections: [
        { subtitle: "Guía de Observación de Aves Urbana", content: "La Plaza Rodolfo Baquerizo Moreno es un conocido punto de observación de aves en Guayaquil. La plaza está plantada con extensa vegetación nativa, proporcionando condiciones ideales de forrajeo y hábitat para las aves, atrayendo docenas de especies durante todo el año.\n\nEspecies de aves que los visitantes pueden observar incluyen:\n· Colibrí Vientrirrufo (Amazilia ventrirrufa): Pequeño y ágil, con plumaje iridiscente que brilla bajo la luz solar—uno de los visitantes más comunes\n· Perico de Mejillas Grises (Aratinga wagleri): Se les ve en bandadas, con llamadas crispante que aportan vitalidad tropical a la plaza\n· Tórtola del Pacífico (Zenaida meloda): Forrajea con calma entre las ramas; una de las especies más fáciles para los observadores de aves principiantes\n· Diversas especies tropicales: Dependiendo de la temporada, se pueden observar varias aves migratorias y residentes\n\nSe recomienda un par de binoculares ligeros. El amanecer y el anochecer son los mejores momentos para la observación de aves." },
        { subtitle: "Plantas Nativas y Microclima Urbano", content: "La plaza cuenta con plantas nativas ecuatorianas cuidadosamente seleccionadas que no solo embellecen el entorno, sino que también juegan un papel importante en la regulación del microclima urbano y la conservación de la diversidad de insectos:\n\n· Ceibo (Bombacopsis guianensis): El árbol simbólico de Guayaquil, con un tronco masivo y brillantes flores rojas que proporcionan una magnífica sombra. Sus flores son una fuente importante de néctar para los colibríes\n· Samán (Albizia saman): Con una copa expansiva en forma de paraguas, es el lugar ideal para refrescarse en la plaza; las aves a menudo se posan en sus ramas al anochecer\n· Acacia de Madagascar (Acacia mangium): De crecimiento rápido, con follaje fino, proporcionando microhábitats ideales para pequeños insectos y arañas\n\nJuntas, estas plantas forman un ecosistema urbano tridimensional, proporcionando refrigerio en el clima tropical caluroso y preservando un refugio precioso para la vida silvestre urbana." }
      ]
    },
    culture: {
      title: "Arquitectura Moderna y Cultura Comunitaria",
      intro: "La rediseño de 2004 no fue solo un homenaje a la historia, sino también una exploración excepcional del diseño de espacios públicos urbanos modernos. Cada detalle arquitectónico de la plaza refleja la profunda comprensión del arquitecto Juan Xavier Chávez sobre el concepto de \"la ciudad como sala de estar\".",
      sections: [
        { subtitle: "La Pasarela Circular: Diseño Ingenioso que Conecta la Ciudad y la Naturaleza", content: "Una de las características de diseño más destacadas de la plaza es su ingenioso sistema de pasarela circular. Esta pasarela conecta sin problemas la concurrida avenida urbana principal (Av. 9 de Octubre) con el tranquilo frente del agua (Estero Salado), permitiendo a los ciudadanos transicionar de un entorno urbano bullicioso a un espacio frente al agua lleno de naturaleza en solo unos minutos.\n\nLa pasarela incorpora múltiples nodos de descanso a lo largo de la ruta y utiliza cambios de nivel topográfico para crear líneas de visión paisajística con capas, permitiendo a los visitantes descubrir nuevas perspectivas continuamente mientras caminan. Este diseño no solo mejora la accesibilidad de la plaza, sino que también fortalece la identidad espacial de Guayaquil como una \"ciudad frente al agua\"." },
        { subtitle: "Teatro al Aire Libre Ágora: Un Festín Dual de Acústica y Estética", content: "La instalación cultural central de la plaza es el teatro al aire libre Ágora ubicado en su centro. Este espacio de presentaciones al aire libre moderno hereda la filosofía de diseño del teatro tipo concha acústica de 1932, utilizando diseño acústico científico para que los conciertos en vivo y las funciones teatrales logren una excelente calidad de sonido sin amplificación adicional.\n\nEl Ágora no es solo un lugar para presentaciones, sino también un símbolo de cohesión comunitaria. Su diseño de asientos con terrazas alienta a los ciudadanos a traer sus propios cojines y sentarse hombro con hombro con extraños, construyendo un sentido de pertenencia urbana a través de experiencias artísticas compartidas." }
      ],
      events: { title: "Calendario de Eventos Culturales", items: [
        "Exhibiciones de Arte: El área de exhibición a nivel de suelo alberga diversas exhibiciones de arte, historia y temas científicos durante todo el año",
        "Mercado de Artesanías: Celebrado regularmente los fines de semana, donde artesanos locales muestran y venden artesanías tradicionales",
        "Festival de Música K-Fest: Cada vez más popular entre los jóvenes en los últimos años; la plaza se ha convertido en un lugar importante para eventos culturales K-Pop en Guayaquil",
        "Funciones en el Ágora: Conciertos al aire libre, teatro y funciones de danza gratuitas regulares, en su mayoría gratuitas y abiertas al público"
      ]}
    },
    visiting: {
      title: "Guía de Visita",
      hours: { title: "Horario de Apertura", content: "Diario: 06:00 – 23:00\nAbierto todo el año, incluyendo feriados", note: "⚠️ Nota: La plaza tiene un horario de apertura amplio, pero se recomienda visitarla durante el día. Por favor, tenga cuidado por la noche." },
      price: { title: "Entrada", content: "Las áreas públicas son gratuitas y están abiertas a todos", note: "Las áreas públicas de la plaza son completamente gratuitas. Algunas exhibiciones especiales o funciones con entrada en el Ágora pueden cobrar por separado; consulte los anuncios en el sitio." },
      duration: { title: "Duración Recomendada", content: "Recomendado: 1 – 3 horas", note: "Si planea observar aves, visitar exhibiciones y caminar hasta el Malecón del Estero Salado, considere reservar medio día." },
      birds: { title: "Observación de Aves Urbanas y Observación Ecológica", content: "La plaza es un conocido punto de observación de aves urbanas en Guayaquil. Extensa vegetación nativa, incluyendo árboles Ceibo e higueras, atrae docenas de especies de aves durante todo el año para forrajeo y cría. Recomendamos especialmente visitar al amanecer o al anochecer con un par de binoculares ligeros—podría tener encuentros cercanos con Colibríes Vientrirrufos (Amazilia ventrirrufa), pericos de mejillas grises y varias otras aves tropicales.\n\nAdemás de las aves, la comunidad de plantas de la plaza—incluyendo magníficos árboles Ceibo, árboles Samán y acacia de Madagascar—también proporciona hábitat valioso para insectos urbanos y pequeña vida silvestre, convirtiéndola en un excelente aula al aire libre para comprender el ecosistema urbano de Guayaquil." },
      bring: { title: "Artículos Recomendados", items: ["Zapatos cómodos para caminar (la pasarela hasta el Estero Salado es bastante larga)", "Agua potable (mantenerse hidratado en clima ecuatorial)", "Protección solar y sombrero (el sol tropical es fuerte; evite las horas centrales del día)", "Binoculares ligeros (esenciales para entusiastas de la observación de aves)", "Cámara o teléfono (excelentes temas fotográficos: arquitectura y aves tropicales)", "Ropa ligera y transpirable (clima tropical caluroso y húmedo)"] },
      route: { title: "Ruta de Caminata Extendida Recomendada", content: "Dado que la plaza se conecta directamente con el frente del agua del Estero Salado, recomendamos especialmente la siguiente ruta nocturna:\n\n1. ~17:00: Comience en la plaza, cuando la luz se vuelve suave—ideal para fotografiar la arquitectura\n2. ~17:30: Encuentre sombra cerca del Ágora para observar el pico de actividad de las aves\n3. ~18:15: Camine por la pasarela circular hacia el frente del agua del Estero Salado, disfrutando del atardecer en el camino\n4. ~18:45: Llegue al Malecón del Estero Salado, disfrute de una cena de mariscos en un restaurante frente al agua y vea el espectáculo nocturno de fuentes de agua\n\nEsta ruta tiene un total de aproximadamente 1.5 km, una caminata fácil, y evita perfectamente el calor del mediodía ecuatorial. Es una excelente manera de experimentar la vida local de Guayaquil." }
    },
    transportation: {
      title: "Cómo Llegar",
      airport: { title: "Desde el Aeropuerto de Guayaquil", content: "A unos 8 km del Aeropuerto Internacional de Guayaquil (GYE), aproximadamente 20-30 minutos en automóvil.", options: [
        { name: "Taxi/Movilidad (Más Conveniente)", price: "$5 - $10 USD", time: "Aproximadamente 20-30 minutos", steps: ["Tomar un taxi en la salida del aeropuerto o usar aplicación de movilidad", "Decirle al conductor que vaya a Plaza Rodolfo Baquerizo Moreno en Av. 9 de Octubre", "La plaza tiene un estacionamiento subterráneo (112 espacios); la entrada está en Av. 9 de Octubre"] },
        { name: "Transporte Público (Económico)", price: "$0.35 - $0.50 USD", time: "Aproximadamente 40-50 minutos", steps: ["Tomar un autobús o transporte desde el aeropuerto al centro", "Bajar cerca de Av. 9 de Octubre", "Caminar para llegar a la plaza"] }
      ]},
      city: { title: "Desde el Interior de Guayaquil", content: "La plaza está ubicada en Av. 9 de Octubre en el centro, muy conveniente para acceder desde cualquier ubicación. Es adjacente a la Universidad de Guayaquil, lo que la convierte en un destino popular para estudiantes y ciudadanos por igual.", steps: ["Navegación: Ingresar Plaza Rodolfo Baquerizo Moreno Guayaquil en Google Maps", "Autobús: Tomar un autobús que va a Av. 9 de Octubre, bajar en la parada Plaza Rodolfo Baquerizo Moreno", "Caminando: Desde el Malecón del Estero Salado, siga la pasarela directamente hacia la plaza"] },
      selfDrive: { title: "Conduciendo", content: "La plaza cuenta con un estacionamiento subterráneo con 112 espacios, muy amigable para visitantes que conducen.", steps: ["Navegar a Av. 9 de Octubre, Plaza Rodolfo Baquerizo Moreno", "La entrada del estacionamiento subterráneo está en el lado de Av. 9 de Octubre, claramente señalizada", "Tarifa de estacionamiento: Consulte las tarifas en el sitio; algunas horas pueden ser gratuitas"] }
    },
    tips: { title: "Consejos de Viaje", items: [
      "Las áreas públicas son gratuitas, no se requieren entradas o reservas",
      "Se recomiendan las visitas nocturnas (17:00-19:00) para evitar el calor del mediodía ecuatorial y disfrutar de atardeceres espectaculares",
      "La plaza se conecta directamente con el Malecón del Estero Salado—planee una visita combinada y disfrute de una cena de mariscos en un restaurante frente al agua",
      "El clima tropical es caluroso y húmedo; por favor tome medidas de protección solar e hidratación, y traiga un sombrero",
      "Los entusiastas de la observación de aves deben traer binoculares; el amanecer y el anochecer son los mejores momentos de observación",
      "El Ágora a menudo alberga funciones gratuitas; consulte el sitio web oficial de la Fundación Malecón 2000 para el calendario de eventos con anticipación",
      "Por favor mantenga la plaza limpia y ordenada—preservemos juntos este espacio cultural urbano",
      "Hay restaurantes y tiendas cercanas para cenar o comprar"
    ] },
    gallery: { title: "Galería de Fotos", viewMore: "Ver Más en Google Maps" },
    reviews: { title: "Reseñas", subtitle: "Reseñas de Google Maps", viewMore: "Más Reseñas" },
    faq: { title: "Preguntas Frecuentes", subtitle: "Aprenda más sobre Plaza Rodolfo Baquerizo Moreno", items: [
      { question: "¿Cuál es el horario de apertura de Plaza Rodolfo Baquerizo Moreno?", answer: "Diario 06:00 - 23:00, abierto todo el año. El horario amplio facilita a los ciudadanos disfrutar de actividades culturales en diferentes momentos." },
      { question: "¿Hay tarifa de entrada a la plaza?", answer: "No. Las áreas públicas de la plaza son completamente gratuitas y están abiertas al público. No se requieren entradas o reservas. Algunas exhibiciones especiales o funciones con entrada en el Ágora pueden cobrar por separado." },
      { question: "¿Quién le da nombre a la plaza? ¿Cuál es su importancia histórica?", answer: "La plaza recibe su nombre de Rodolfo Baquerizo Moreno (1890-1977), destacado empresario y promotor cultural de Guayaquil de principios del siglo XX. En 1922, estableció el primer gran parque de atracciones de la ciudad, el \"American Park,\" en este mismo sitio. Aclaración importante: Rodolfo Baquerizo Moreno NO fue una figura política—el presidente histórico fue Alfredo Baquerizo Moreno. Por favor no confunda a las dos personas." },
      { question: "¿Para qué actividades es adecuada la plaza? ¿Qué más puedo hacer además de caminar?", answer: "La plaza integra funciones ecológicas, culturales y de convenciones. Puede: observar aves urbanas tropicales (binoculares recomendados), visitar exhibiciones gratuitas en el área de exhibición a nivel de suelo, disfrutar de presentaciones en vivo en el teatro al aire libre Ágora, y caminar por la pasarela circular hasta el Malecón del Estero Salado para cenar mariscos. También es un aula viva para comprender casi dos siglos de transformación urbana de Guayaquil." },
      { question: "¿Cómo llegar a Plaza Rodolfo Baquerizo Moreno?", answer: "La plaza está ubicada en Av. 9 de Octubre en el centro de Guayaquil, adjacente a la Universidad de Guayaquil, con transporte conveniente. Unos 20-30 minutos en taxi desde el aeropuerto. Los visitantes que conducen pueden usar el estacionamiento subterráneo (112 espacios)." },
      { question: "¿Qué otras atracciones vale la pena visitar cerca de la plaza?", answer: "Altamente recomendado visitar nearby:\n1. Malecón del Estero Salado—conectado directamente a la plaza, excelente para atardeceres frente al río, cena de mariscos y espectáculos de fuentes de agua;\n2. Av. 9 de Octubre—área popular de compras y comida;\n3. Universidad de Guayaquil—experimente la atmósfera académica local;\n4. Malecón 2000—la franja paisajística ribereña más famosa de Guayaquil, a poca distancia." }
    ]},
    location: { title: "Ubicación en el Mapa", address: "Av. 9 de Octubre, 090313 Guayaquil, Ecuador\n(Centro, adjacente a la Universidad de Guayaquil, conectando con el Malecón del Estero Salado)", openMaps: "Ver Ubicación en Google Maps" },
    footer: { callToAction: "Como un espacio cultural y ecológico urbano, por favor únanse a nosotros para cuidar el entorno y proteger las áreas verdes. Mantenga la plaza limpia y preserve juntos esta memoria urbana que abarca siglos.", text: "© 2026 Guía Educativa de Plaza Rodolfo Baquerizo Moreno · Todos los derechos reservados.\nEste sitio web es un proyecto educativo independiente de terceros dedicado a compartir con precisión la historia y cultura urbana de Guayaquil. No estamos afiliados con el gobierno local ni ninguna autoridad oficial.", made: "Este sitio web es un proyecto educativo independiente de terceros. Hecho para exploradores y aprendices.", linksTitle: "Enlaces Relacionados", links: [
      { name: "Dirección Nacional de Turismo", url: "https://ecuador.travel/" },
      { name: "Municipio de Guayaquil", url: "https://www.guayaquil.gob.ec/" },
      { name: "Fundación Malecón 2000", url: "https://malecon2000.com/" },
      { name: "Gobierno Provincial de Guayas", url: "https://guayas.gob.ec/" },
      { name: "Turismo Oficial de Guayaquil", url: "http://visitguayaquil.com/" }
    ]}
  }
};
