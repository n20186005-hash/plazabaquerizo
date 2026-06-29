export type Locale = "zh" | "en" | "es";
export type LinkItem = { name: string; url: string };
export type FAQItem = { question: string; answer: string };
export type TransportOption = { name: string; time: string; price: string; steps: string[] };
export type TimelineEvent = { period: string; description: string };
export type HistorySection = { subtitle: string; content: string };
export type EcologySection = { subtitle: string; content: string };

export type Translations = {
  nav: { about: string; visiting: string; transportation: string; tips: string; gallery: string; reviews: string; faq: string; location: string };
  hero: { tagline: string; title: string; subtitle: string; cta: string };
  rating: { reviews: string; source: string };
  about: { title: string; p1: string; p2: string; highlights: { title: string; items: string[] }; timeline: { title: string; events: TimelineEvent[] }; management: { title: string; content: string } };
  history: { title: string; intro: string; sections: HistorySection[]; buildings: { title: string; items: string[]; conclusion: string } };
  ecology: { title: string; sections: EcologySection[] };
  visiting: { title: string; hours: { title: string; content: string; note: string }; price: { title: string; content: string; note: string }; duration: { title: string; content: string; note: string }; animals: { title: string; content: string }; bring: { title: string; items: string[] } };
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
    nav: { about: "景点概览", visiting: "游览指南", transportation: "交通接驳", tips: "游览建议", gallery: "照片画廊", reviews: "游客评价", faq: "常见问题", location: "地图位置" },
    hero: { tagline: "瓜亚基尔市中心·绿意盎然的城市绿洲", title: "Plaza Rodolfo Baquerizo Moreno", subtitle: "厄瓜多尔瓜亚基尔 · Av. 9 de Octubre", cta: "探索公园" },
    rating: { reviews: "条评价", source: "Google 评论" },
    about: {
      title: "景点概览",
      p1: "Plaza Rodolfo Baquerizo Moreno 位于厄瓜多尔瓜亚基尔市中心，坐落在重要的 9 de Octubre 大道上。这是一个美丽的城市公园，为市民和游客提供了宝贵的绿色空间。公园全天开放（06:00-23:00），是散步、慢跑、休闲娱乐的理想场所。\n\n公园以 Rodolfo Baquerizo Moreno 命名，他是厄瓜多尔重要的政治人物。公园内绿树成荫，环境优美，设有步行道和休息区域，是逃离城市喧嚣、享受户外时光的绝佳去处。",
      p2: "作为一个城市公园，这里不需要门票，完全免费向公众开放。无论是清晨散步、午后休憩，还是傍晚慢跑，这里都能满足您的需求。公园位置便利，交通便利，是体验瓜亚基尔市民生活的好去处。",
      highlights: { title: "景点速览", items: ["地理位置: 厄瓜多尔瓜亚基尔市中心，Av. 9 de Octubre", "公园类型: 城市公园，免费对外开放", "开放时间: 每日 06:00 – 23:00", "主要设施: 步行道、绿化区、休息区", "适合活动: 散步、慢跑、休闲、家庭出游"] },
      timeline: { title: "发展历程", events: [
        { period: "建成初期", description: "Plaza Rodolfo Baquerizo Moreno 作为瓜亚基尔的城市公共空间建成，以厄瓜多尔重要政治人物 Rodolfo Baquerizo Moreno 命名。" },
        { period: "发展完善", description: "随着城市的发展，公园逐渐增加绿化面积和步行设施，成为市民日常休闲的重要场所。" },
        { period: "现今", description: "如今，公园已成为瓜亚基尔市中心重要的绿色空间，每天吸引大量市民和游客前来休闲娱乐。" }
      ]},
      management: { title: "公园管理", content: "Plaza Rodolfo Baquerizo Moreno 作为公共城市公园，由瓜亚基尔市政府管理维护。公园免费向公众开放，开放时间为每日 06:00 至 23:00。请爱护公园环境，保持整洁。" }
    },
    history: {
      title: "公园简介与城市绿意",
      intro: "Plaza Rodolfo Baquerizo Moreno 是瓜亚基尔市中心一处重要的公共绿色空间。\n\n公园以 Rodolfo Baquerizo Moreno（1889-1977）命名，他是厄瓜多尔的政治家，曾于 1944 年至 1946 年担任临时总统。作为一个城市公园，这里没有厚重的历史建筑，但却是市民日常生活中不可或缺的一部分。\n\n在繁忙的 9 de Octubre 大道旁，这片绿洲为市民提供了难得的休闲空间。",
      sections: [
        { subtitle: "1. 城市绿洲：繁忙中的宁静", content: "Plaza Rodolfo Baquerizo Moreno 虽然位于繁忙的市中心，但却是一个宁静的绿色空间。高大的树木为游客提供阴凉，步行道宽敞整洁，是逃离城市喧嚣、享受片刻宁静的理想场所。\n\n无论是清晨的慢跑，午后的散步，还是傍晚的休闲，这里都能满足不同人群的需求。公园的设计注重实用性和舒适性，为市民提供了一个优质的户外活动空间。" },
        { subtitle: "2. 地理位置与交通便利性", content: "公园坐落在瓜亚基尔最重要的主干道之一——9 de Octubre 大道上，交通十分便利。周边有公共交通站点，方便市民和游客前来。\n\n作为市中心的城市公园，这里不仅是休闲场所，也是城市景观的一部分。公园的绿化美化了城市环境，改善了市中心区域的生态环境。" }
      ],
      buildings: {
        title: "周边景点与延伸探索",
        items: [
          "9 de Octubre 大道: 瓜亚基尔最重要的主干道之一，沿途有许多商店、餐厅和商业设施。",
          "Malecon 2000（滨海大道）: 距离不远，是瓜亚基尔最著名的滨河景观带，拥有完善的旅游设施。",
          "瓜亚基尔市中心: 公园位于市中心，可以顺道探索周边的商业区和城市景观。"
        ],
        conclusion: "Plaza Rodolfo Baquerizo Moreno 不是传统意义上的大型旅游景区，但作为城市公园，它为市民和游客提供了一个放松身心的绿色空间。在繁忙的都市中，这样一片绿洲显得尤为珍贵。"
      }
    },
    ecology: {
      title: "城市生态与绿化环境",
      sections: [
        { subtitle: "城市绿化的典范", content: "Plaza Rodolfo Baquerizo Moreno 虽然面积不大，但在城市绿化方面发挥着重要作用。公园内的树木和植被不仅美化了环境，还改善了周边的空气质量，为城市生物多样性提供了支持。\n\n在热带气候下，这些绿色植物为市民提供了宝贵的阴凉和清凉。公园的维护状况良好，体现了瓜亚基尔市对城市生态环境的重视。" },
        { subtitle: "城市公园的生态意义", content: "作为城市中的绿色空间，Plaza Rodolfo Baquerizo Moreno 在改善城市微气候、提供休闲空间方面发挥着重要作用。城市公园虽然不如自然保护区那样原始，但它们是城市生态系统的重要组成部分。\n\n在这里，市民可以亲近自然，享受绿色环境带来的身心愉悦。对于城市居民来说，这样的公园是提升生活质量的重要设施。" }
      ]
    },
    visiting: {
      title: "游览指南",
      hours: { title: "开放时间", content: "每日 06:00 – 23:00\n全年无休，节假日正常开放", note: "⚠️ 提醒：公园开放时间较长，但建议白天前往，夜间请注意安全。" },
      price: { title: "费用", content: "免费开放，无需购票", note: "公园完全免费向公众开放，适合各类游客。" },
      duration: { title: "建议游览时长", content: "建议预留 30 分钟 - 1.5 小时", note: "这里适合短暂休息、散步或慢跑。可根据个人需求灵活安排时间。" },
      animals: { title: "公园环境与设施", content: "作为一个城市公园，这里主要是绿化空间和步行道。没有专门的野生动物栖息地，但树木和植被为城市鸟类提供了栖息环境。公园环境整洁，设施完善，是日常休闲的好去处。" },
      bring: { title: "游览建议物品", items: ["舒适的步行鞋", "饮用水（保持水分补充）", "防晒用品（赤道阳光较强）", "相机或手机（记录城市公园美景）", "轻便衣物（热带气候，注意透气）"] }
    },
    transportation: {
      title: "交通接驳",
      airport: { title: "从瓜亚基尔机场出发", content: "距离瓜亚基尔国际机场(GYE)约 8 公里，车程约 20-30 分钟。", options: [
        { name: "出租车/网约车(最便捷)", price: "$5 - $10 美元", time: "约 20-30 分钟", steps: ["在机场出口处乘坐出租车或使用网约车应用", "告诉司机前往 Av. 9 de Octubre 的 Plaza Rodolfo Baquerizo Moreno", "公园位于市中心，交通便利"] },
        { name: "公共交通(经济实惠)", price: "$0.35 - $0.50 美元", time: "约 40-50 分钟", steps: ["在机场乘坐前往市中心的公交或班车", "在 9 de Octubre 大道附近下车", "步行即可到达公园"] }
      ]},
      city: { title: "从瓜亚基尔市中心前往", content: "公园位于市中心 Av. 9 de Octubre 上，从任何地点前往都十分方便。", steps: ["导航: 在 Google Maps 中输入 Plaza Rodolfo Baquerizo Moreno Guayaquil", "公交: 乘坐前往 9 de Octubre 大道的公交车，在附近下车", "步行: 如果在市中心，步行即可轻松到达"] },
      selfDrive: { title: "自驾前往", content: "如果从其他城市驾车前来，可沿主要公路前往瓜亚基尔市中心。", steps: ["从基多或昆卡: 乘坐国内航班或长途巴士前往瓜亚基尔", "在瓜亚基尔市内: 导航至 Av. 9 de Octubre", "停车: 周边有付费停车场，建议提前了解"] }
    },
    tips: { title: "游览建议与安全提醒", items: [
      "公园免费开放，无需任何门票或预约",
      "建议白天前往，夜间请注意人身安全",
      "热带气候炎热，请做好防晒和补水措施",
      "公园适合散步、慢跑和休闲，但请注意礼貌，不影响他人",
      "请保持公园整洁，不要乱扔垃圾",
      "可以带小孩前来，但请注意看护",
      "周边有餐厅和商店，可以顺道用餐或购物"
    ] },
    gallery: { title: "精彩照片", viewMore: "在 Google Maps 查看更多相片" },
    reviews: { title: "游客评价", subtitle: "来自 Google Maps 的真实评价", viewMore: "在 Google Maps 查看更多评价" },
    faq: { title: "常见问题", subtitle: "深入了解 Plaza Rodolfo Baquerizo Moreno", items: [
      { question: "Plaza Rodolfo Baquerizo Moreno 的开放时间是？", answer: "每日 06:00 - 23:00，全年无休，节假日正常开放。开放时间较长，方便市民在不同时间段前来休闲。" },
      { question: "进入公园需要门票吗？", answer: "不需要。Plaza Rodolfo Baquerizo Moreno 是完全免费向公众开放的的城市公园，无需购票或预约。" },
      { question: "公园以谁命名？", answer: "公园以 Rodolfo Baquerizo Moreno（1889-1977）命名，他是厄瓜多尔的政治家，曾于 1944 年至 1946 年担任临时总统。他在厄瓜多尔历史上有着重要地位。" },
      { question: "公园适合什么活动？", answer: "公园适合散步、慢跑、休闲放松、家庭出游等活动。作为一个城市公园，这里环境优美，绿树成荫，是日常休闲的好去处。" },
      { question: "如何前往 Plaza Rodolfo Baquerizo Moreno？", answer: "公园位于瓜亚基尔市中心 Av. 9 de Octubre 上，交通便利。从机场打车约 20-30 分钟，市区内可乘坐公交或步行前往。" },
      { question: "公园附近还有哪些值得一游的景点？", answer: "可以顺道参观：Malecon 2000（滨海大道，瓜亚基尔最著名的滨河景观带）、9 de Octubre 大道（购物和餐饮）、瓜亚基尔市中心商业区。" }
    ]},
    location: { title: "地图位置", address: "Av. 9 de Octubre, 090313 Guayaquil, 厄瓜多尔\n(市中心繁华地段，交通便利)", openMaps: "在 Google Maps 查看位置" },
    footer: { callToAction: "作为城市绿色空间，请与我们一起爱护环境、保护绿地。保持公园整洁，共同维护美好环境。", text: "© 2026 Plaza Rodolfo Baquerizo Moreno 旅行指南 · 保留所有权利。\n本网站是一个独立的第三方旅游资讯项目。我们与当地政府或其他官方机构没有任何关联。", made: "本网站是一个独立的第三方旅游资讯项目。为探索者而制", linksTitle: "相关链接", links: [
      { name: "厄瓜多尔国家旅游局", url: "https://ecuador.travel/" },
      { name: "瓜亚基尔市政府", url: "https://www.guayaquil.gob.ec/" },
      { name: "2000年滨海大道基金会", url: "https://malecon2000.com/" },
      { name: "瓜亚斯省政府", url: "https://guayas.gob.ec/" },
      { name: "瓜亚基尔官方旅游局", url: "http://visitguayaquil.com/" }
    ]}
  },

  en: {
    nav: { about: "Overview", visiting: "Visit Guide", transportation: "Getting There", tips: "Travel Tips", gallery: "Photo Gallery", reviews: "Reviews", faq: "FAQ", location: "Location" },
    hero: { tagline: "Downtown Guayaquil · Green Urban Oasis", title: "Plaza Rodolfo Baquerizo Moreno", subtitle: "Guayaquil, Ecuador · Av. 9 de Octubre", cta: "Explore the Park" },
    rating: { reviews: "reviews", source: "Google Reviews" },
    about: {
      title: "Overview: Urban Park in Downtown Guayaquil",
      p1: "Plaza Rodolfo Baquerizo Moreno is located in downtown Guayaquil, Ecuador, on the important Av. 9 de Octubre avenue. This is a beautiful urban park that provides valuable green space for citizens and visitors. The park is open daily (06:00-23:00) and is an ideal place for walking, jogging, and recreational activities.\n\nThe park is named after Rodolfo Baquerizo Moreno, an important Ecuadorian political figure. The park features shady trees, beautiful environment, walking paths and rest areas, making it an excellent place to escape the city bustle and enjoy outdoor time.",
      p2: "As an urban park, there is no entrance fee - completely free and open to the public. Whether it's for a morning walk, afternoon rest, or evening jog, this park meets your needs. The park is conveniently located with good transportation access, making it a great place to experience Guayaquil citizen life.",
      highlights: { title: "Quick Facts", items: ["Location: Downtown Guayaquil, Ecuador, Av. 9 de Octubre", "Park Type: Urban park, free and open to public", "Opening Hours: Daily 06:00 – 23:00", "Main Facilities: Walking paths, green areas, rest areas", "Suitable Activities: Walking, jogging, leisure, family outings"] },
      timeline: { title: "Development Timeline", events: [
        { period: "Early Establishment", description: "Plaza Rodolfo Baquerizo Moreno was established as a public urban space in Guayaquil, named after the important Ecuadorian political figure Rodolfo Baquerizo Moreno." },
        { period: "Development & Improvement", description: "With urban development, the park gradually increased green areas and walking facilities, becoming an important place for citizens' daily leisure." },
        { period: "Present Day", description: "Today, the park has become an important green space in downtown Guayaquil, attracting many citizens and visitors daily for leisure and recreation." }
      ]},
      management: { title: "Park Management", content: "Plaza Rodolfo Baquerizo Moreno, as a public urban park, is managed and maintained by the Guayaquil Municipal Government. The park is free and open to the public daily from 06:00 to 23:00. Please help maintain the park environment and keep it clean." }
    },
    history: {
      title: "Park Introduction & Urban Greenery",
      intro: "Plaza Rodolfo Baquerizo Moreno is an important public green space in downtown Guayaquil.\n\nThe park is named after Rodolfo Baquerizo Moreno (1889-1977), an Ecuadorian politician who served as Interim President from 1944 to 1946. As an urban park, there are no grand historical buildings here, but it is an indispensable part of citizens' daily lives.\n\nLocated beside the busy Av. 9 de Octubre avenue, this oasis provides citizens with a rare leisure space.",
      sections: [
        { subtitle: "1. Urban Oasis: Tranquility Amidst Busy City", content: "Although Plaza Rodolfo Baquerizo Moreno is located in the busy city center, it is a tranquil green space. Tall trees provide shade for visitors, and the walking paths are spacious and clean, making it an ideal place to escape the city noise and enjoy a moment of peace.\n\nWhether it's morning jogging, afternoon walking, or evening leisure, this park meets the needs of different groups. The park's design focuses on practicality and comfort, providing citizens with a quality outdoor activity space." },
        { subtitle: "2. Location & Transportation Convenience", content: "The park is located on Av. 9 de Octubre, one of Guayaquil's most important main avenues, with very convenient transportation. There are public transportation stops nearby, making it easy for citizens and visitors to access.\n\nAs a city park in the downtown area, this place is not only a leisure venue but also part of the urban landscape. The park's greenery beautifies the urban environment and improves the ecological conditions of the city center." }
      ],
      buildings: {
        title: "Nearby Attractions",
        items: [
          "Av. 9 de Octubre: One of Guayaquil's most important main avenues, with many shops, restaurants and commercial facilities along the way.",
          "Malecon 2000: Not far away, it is Guayaquil's most famous riverside landscape belt, with complete tourist facilities.",
          "Downtown Guayaquil: The park is located in the city center, so you can also explore the surrounding commercial areas and urban landscapes."
        ],
        conclusion: "Plaza Rodolfo Baquerizo Moreno is not a traditional large-scale tourist attraction, but as an urban park, it provides citizens and visitors with a green space to relax. In a busy city, such an oasis is particularly precious."
      }
    },
    ecology: {
      title: "Urban Ecology & Green Environment",
      sections: [
        { subtitle: "Model of Urban Greening", content: "Although Plaza Rodolfo Baquerizo Moreno is not large in area, it plays an important role in urban greening. The trees and vegetation in the park not only beautify the environment but also improve the air quality of the surrounding area, supporting urban biodiversity.\n\nUnder the tropical climate, these green plants provide valuable shade and coolness for citizens. The park is well-maintained, reflecting Guayaquil's emphasis on urban ecological environment." },
        { subtitle: "Ecological Significance of Urban Parks", content: "As a green space in the city, Plaza Rodolfo Baquerizo Moreno plays an important role in improving the urban microclimate and providing leisure space. Although urban parks are not as pristine as natural reserves, they are an important part of the urban ecosystem.\n\nHere, citizens can get close to nature and enjoy the physical and mental pleasure brought by the green environment. For urban residents, such parks are important facilities for improving quality of life." }
      ]
    },
    visiting: {
      title: "Visitor Guide",
      hours: { title: "Opening Hours", content: "Daily: 06:00 – 23:00\nOpen year-round, including holidays", note: "⚠️ Note: The park has long opening hours, but it is recommended to visit during daytime. Please be careful at night." },
      price: { title: "Cost", content: "Free entry, no tickets required", note: "The park is completely free and open to the public, suitable for all types of visitors." },
      duration: { title: "Recommended Duration", content: "Recommended: 30 minutes - 1.5 hours", note: "This is suitable for short breaks, walking or jogging. Time can be arranged flexibly according to personal needs." },
      animals: { title: "Park Environment & Facilities", content: "As an urban park, this is mainly a green space and walking paths. There are no dedicated wildlife habitats, but trees and vegetation provide habitat for urban birds. The park environment is clean and facilities are complete, making it a good place for daily leisure." },
      bring: { title: "Recommended Items", items: ["Comfortable walking shoes", "Drinking water (stay hydrated)", "Sun protection (equatorial sun is strong)", "Camera or phone (capture park scenery)", "Light clothing (tropical climate, breathable)"] }
    },
    transportation: {
      title: "Getting There",
      airport: { title: "From Guayaquil Airport", content: "About 8 km from Guayaquil International Airport (GYE), approx. 20-30 minutes by car.", options: [
        { name: "Taxi/Ride-sharing (Most Convenient)", price: "$5 - $10 USD", time: "About 20-30 minutes", steps: ["Take a taxi at the airport exit or use ride-sharing app", "Tell the driver to go to Plaza Rodolfo Baquerizo Moreno on Av. 9 de Octubre", "The park is in downtown, with convenient transportation"] },
        { name: "Public Transportation (Economical)", price: "$0.35 - $0.50 USD", time: "About 40-50 minutes", steps: ["Take a bus or shuttle from the airport to downtown", "Get off near Av. 9 de Octubre", "Walk to reach the park"] }
      ]},
      city: { title: "From Downtown Guayaquil", content: "The park is located on Av. 9 de Octubre in downtown, very convenient to access from any location.", steps: ["Navigation: Enter Plaza Rodolfo Baquerizo Moreno Guayaquil in Google Maps", "Bus: Take a bus heading to Av. 9 de Octubre, get off nearby", "Walking: If in downtown, you can easily walk to the park"] },
      selfDrive: { title: "Driving", content: "If driving from other cities, you can follow main highways to downtown Guayaquil.", steps: ["From Quito or Cuenca: Take domestic flight or long-distance bus to Guayaquil", "Within Guayaquil: Navigate to Av. 9 de Octubre", "Parking: There are paid parking lots nearby, it's recommended to check in advance"] }
    },
    tips: { title: "Travel Tips & Safety Reminders", items: [
      "Park is free, no tickets or reservation required",
      "Recommended to visit during daytime, please be careful at night",
      "Tropical climate is hot, please take sun protection and hydration measures",
      "Park is suitable for walking, jogging and leisure, please be courteous and don't disturb others",
      "Please keep the park clean, don't litter",
      "Children are welcome, but please supervise them",
      "There are restaurants and shops nearby, you can dine or shop nearby"
    ] },
    gallery: { title: "Photo Gallery", viewMore: "View More Photos on Google Maps" },
    reviews: { title: "Visitor Reviews", subtitle: "Real reviews from Google Maps", viewMore: "View More Reviews on Google Maps" },
    faq: { title: "Frequently Asked Questions", subtitle: "Learn more about Plaza Rodolfo Baquerizo Moreno", items: [
      { question: "What are the opening hours of Plaza Rodolfo Baquerizo Moreno?", answer: "Daily 06:00 - 23:00, open year-round including holidays. The long opening hours make it convenient for citizens to come for leisure at different times." },
      { question: "Is there an entrance fee for the park?", answer: "No. Plaza Rodolfo Baquerizo Moreno is a completely free urban park open to the public. No tickets or reservation are required." },
      { question: "Who is the park named after?", answer: "The park is named after Rodolfo Baquerizo Moreno (1889-1977), an Ecuadorian politician who served as Interim President from 1944 to 1946. He holds an important position in Ecuadorian history." },
      { question: "What activities is the park suitable for?", answer: "The park is suitable for walking, jogging, leisure relaxation, family outings and other activities. As an urban park, it has beautiful environment with shady trees, making it a good place for daily leisure." },
      { question: "How to get to Plaza Rodolfo Baquerizo Moreno?", answer: "The park is located on Av. 9 de Octubre in downtown Guayaquil, with convenient transportation. It's about 20-30 minutes by taxi from the airport, or you can take bus or walk from downtown." },
      { question: "What other attractions are worth visiting near the park?", answer: "You can also visit: Malecon 2000 (Guayaquil's most famous riverside landscape belt), Av. 9 de Octubre (shopping and dining), Downtown Guayaquil commercial area." }
    ]},
    location: { title: "Map Location", address: "Av. 9 de Octubre, 090313 Guayaquil, Ecuador\n(Downtown bustling area, convenient transportation)", openMaps: "View Location on Google Maps" },
    footer: { callToAction: "As an urban green space, please join us in caring for the environment and protecting green areas. Keep the park clean and maintain a beautiful environment together.", text: "© 2026 Plaza Rodolfo Baquerizo Moreno Travel Guide · All rights reserved.\nThis website is an independent third-party travel information project. We are not affiliated with the local government or any official authority.", made: "This website is an independent third-party travel information project. Made for explorers.", linksTitle: "Related Links", links: [
      { name: "Ecuador National Tourism Board", url: "https://ecuador.travel/" },
      { name: "Guayaquil Municipal Government", url: "https://www.guayaquil.gob.ec/" },
      { name: "Malecon 2000 Foundation", url: "https://malecon2000.com/" },
      { name: "Guayas Provincial Government", url: "https://guayas.gob.ec/" },
      { name: "Guayaquil Official Tourism", url: "http://visitguayaquil.com/" }
    ]}
  },

  es: {
    nav: { about: "Descripción General", visiting: "Guía de Visita", transportation: "Cómo Llegar", tips: "Consejos", gallery: "Galería de Fotos", reviews: "Reseñas", faq: "Preguntas Frecuentes", location: "Ubicación" },
    hero: { tagline: "Centro de Guayaquil · Oasis Urbano Verde", title: "Plaza Rodolfo Baquerizo Moreno", subtitle: "Guayaquil, Ecuador · Av. 9 de Octubre", cta: "Explora el Parque" },
    rating: { reviews: "reseñas", source: "Google Reviews" },
    about: {
      title: "Descripción General: Parque Urbano en el Centro de Guayaquil",
      p1: "Plaza Rodolfo Baquerizo Moreno se encuentra en el centro de Guayaquil, Ecuador, en la importante Av. 9 de Octubre. Este es un hermoso parque urbano que proporciona un valioso espacio verde para los ciudadanos y visitantes. El parque está abierto diariamente (06:00-23:00) y es un lugar ideal para caminar, trotar y actividades recreativas.\n\nEl parque recibe su nombre de Rodolfo Baquerizo Moreno, una importante figura política ecuatoriana. El parque cuenta con árboles frondosos, un entorno hermoso, senderos peatonales y áreas de descanso, lo que lo convierte en un excelente lugar para escapar del bullicio de la ciudad y disfrutar del aire libre.",
      p2: "Como parque urbano, no hay tarifa de entrada: es completamente gratuito y está abierto al público. Ya sea para una caminata matutina, descanso por la tarde o trotar por la noche, este parque satisface sus necesidades. El parque está convenientemente ubicado con buen acceso al transporte, lo que lo convierte en un gran lugar para experimentar la vida ciudadana de Guayaquil.",
      highlights: { title: "Datos Rápidos", items: ["Ubicación: Centro de Guayaquil, Ecuador, Av. 9 de Octubre", "Tipo de Parque: Parque urbano, gratuito y abierto al público", "Horario: Diario 06:00 – 23:00", "Instalaciones Principales: Senderos peatonales, áreas verdes, áreas de descanso", "Actividades Adecuadas: Caminata, trote, ocio, salidas familiares"] },
      timeline: { title: "Línea de Tiempo", events: [
        { period: "Establecimiento Inicial", description: "Plaza Rodolfo Baquerizo Moreno se estableció como un espacio urbano público en Guayaquil, nombrado así por la importante figura política ecuatoriana Rodolfo Baquerizo Moreno." },
        { period: "Desarrollo y Mejora", description: "Con el desarrollo urbano, el parque aumentó gradualmente las áreas verdes y las instalaciones peatonales, convirtiéndose en un lugar importante para el ocio diario de los ciudadanos." },
        { period: "Actualidad", description: "Hoy en día, el parque se ha convertido en un importante espacio verde en el centro de Guayaquil, atrayendo a muchos ciudadanos y visitantes diariamente para ocio y recreación." }
      ]},
      management: { title: "Gestión del Parque", content: "Plaza Rodolfo Baquerizo Moreno, como parque urbano público, es gestionado y mantenido por el Municipio de Guayaquil. El parque es gratuito y está abierto al público diariamente de 06:00 a 23:00. Por favor, ayude a mantener el entorno del parque y mantenerlo limpio." }
    },
    history: {
      title: "Introducción al Parque y Verde Urbano",
      intro: "Plaza Rodolfo Baquerizo Moreno es un importante espacio verde público en el centro de Guayaquil.\n\nEl parque recibe su nombre de Rodolfo Baquerizo Moreno (1889-1977), un político ecuatoriano que se desempeñó como Presidente Interino de 1944 a 1946. Como parque urbano, no hay grandes edificios históricos aquí, pero es una parte indispensable de la vida diaria de los ciudadanos.\n\nUbicado junto a la concurrida avenida Av. 9 de Octubre, este oasis proporciona a los ciudadanos un raro espacio de ocio.",
      sections: [
        { subtitle: "1. Oasis Urbano: Tranquilidad en Medio de la Ciudad Concurrida", content: "Aunque Plaza Rodolfo Baquerizo Moreno está ubicado en el concurrido centro de la ciudad, es un espacio verde tranquilo. Los árboles altos proporcionan sombra a los visitantes, y los senderos peatonales son amplios y limpios, lo que lo convierte en un lugar ideal para escapar del ruido de la ciudad y disfrutar de un momento de paz.\n\nYa sea trote matutino, caminata por la tarde o ocio nocturno, este parque satisface las necesidades de diferentes grupos. El diseño del parque se centra en la practicidad y la comodidad, proporcionando a los ciudadanos un espacio de actividad al aire libre de calidad." },
        { subtitle: "2. Ubicación y Conveniencia de Transporte", content: "El parque está ubicado en Av. 9 de Octubre, una de las avenidas principales más importantes de Guayaquil, con un transporte muy conveniente. Hay paradas de transporte público cerca, lo que facilita el acceso a los ciudadanos y visitantes.\n\nComo parque de la ciudad en el área del centro, este lugar no solo es un lugar de ocio, sino también parte del paisaje urbano. El verde del parque embellece el entorno urbano y mejora las condiciones ecológicas del centro de la ciudad." }
      ],
      buildings: {
        title: "Atracciones Cercanas",
        items: [
          "Av. 9 de Octubre: Una de las avenidas principales más importantes de Guayaquil, con muchas tiendas, restaurantes e instalaciones comerciales a lo largo del camino.",
          "Malecon 2000: No muy lejos, es la franja paisajística ribereña más famosa de Guayaquil, con instalaciones turísticas completas.",
          "Centro de Guayaquil: El parque está ubicado en el centro de la ciudad, por lo que también puede explorar las áreas comerciales circundantes y el paisaje urbano."
        ],
        conclusion: "Plaza Rodolfo Baquerizo Moreno no es un atractivo turístico tradicional a gran escala, pero como parque urbano, proporciona a los ciudadanos y visitantes un espacio verde para relajarse. En una ciudad ocupada, un oasis como este es particularmente precioso."
      }
    },
    ecology: {
      title: "Ecología Urbana y Ambiente Verde",
      sections: [
        { subtitle: "Modelo de Forestación Urbana", content: "Aunque Plaza Rodolfo Baquerizo Moreno no es grande en área, juega un papel importante en la forestación urbana. Los árboles y la vegetación en el parque no solo embellecen el entorno, sino que también mejoran la calidad del aire en el área circundante, apoyando la biodiversidad urbana.\n\nBajo el clima tropical, estas plantas verdes proporcionan sombra y frescura valiosas para los ciudadanos. El parque está bien mantenido, reflejando la importancia que Guayaquil otorga al entorno ecológico urbano." },
        { subtitle: "Significado Ecológico de los Parques Urbanos", content: "Como un espacio verde en la ciudad, Plaza Rodolfo Baquerizo Moreno juega un papel importante en la mejora del microclima urbano y en la proporción de espacios de ocio. Aunque los parques urbanos no son tan prístinos como las reservas naturales, son una parte importante del ecosistema urbano.\n\nAquí, los ciudadanos pueden acercarse a la naturaleza y disfrutar del placer físico y mental que brinda el entorno verde. Para los residentes urbanos, estos parques son instalaciones importantes para mejorar la calidad de vida." }
      ]
    },
    visiting: {
      title: "Guía de Visita",
      hours: { title: "Horario de Apertura", content: "Diario: 06:00 – 23:00\nAbierto todo el año, incluyendo feriados", note: "⚠️ Nota: El parque tiene un horario de apertura amplio, pero se recomienda visitarlo durante el día. Por favor, tenga cuidado por la noche." },
      price: { title: "Costo", content: "Entrada gratuita, no se requieren entradas", note: "El parque es completamente gratuito y está abierto al público, adecuado para todo tipo de visitantes." },
      duration: { title: "Duración Recomendada", content: "Recomendado: 30 minutos - 1.5 horas", note: "Esto es adecuado para descansos cortos, caminatas o trote. El tiempo puede organizarse flexiblemente según las necesidades personales." },
      animals: { title: "Ambiente del Parque e Instalaciones", content: "Como parque urbano, aquí hay principalmente espacio verde y senderos peatonales. No hay hábitats de vida silvestre dedicados, pero los árboles y la vegetación proporcionan hábitat para las aves urbanas. El entorno del parque es limpio y las instalaciones están completas, lo que lo convierte en un buen lugar para el ocio diario." },
      bring: { title: "Artículos Recomendados", items: ["Zapatos cómodos para caminar", "Agua potable (mantenerse hidratado)", "Protección solar (el sol ecuatorial es fuerte)", "Cámara o teléfono (capturar el paisaje del parque)", "Ropa ligera (clima tropical, transpirable)"] }
    },
    transportation: {
      title: "Cómo Llegar",
      airport: { title: "Desde el Aeropuerto de Guayaquil", content: "A unos 8 km del Aeropuerto Internacional de Guayaquil (GYE), aproximadamente 20-30 minutos en automóvil.", options: [
        { name: "Taxi/Movilidad (Más Conveniente)", price: "$5 - $10 USD", time: "Aproximadamente 20-30 minutos", steps: ["Tomar un taxi en la salida del aeropuerto o usar aplicación de movilidad", "Decirle al conductor que vaya a Plaza Rodolfo Baquerizo Moreno en Av. 9 de Octubre", "El parque está en el centro, con transporte conveniente"] },
        { name: "Transporte Público (Económico)", price: "$0.35 - $0.50 USD", time: "Aproximadamente 40-50 minutos", steps: ["Tomar un autobús o transporte desde el aeropuerto al centro", "Bajar cerca de Av. 9 de Octubre", "Caminar para llegar al parque"] }
      ]},
      city: { title: "Desde el Centro de Guayaquil", content: "El parque está ubicado en Av. 9 de Octubre en el centro, muy conveniente para acceder desde cualquier ubicación.", steps: ["Navegación: Ingresar Plaza Rodolfo Baquerizo Moreno Guayaquil en Google Maps", "Autobús: Tomar un autobús que va a Av. 9 de Octubre, bajar cerca", "Caminando: Si está en el centro, puede caminar fácilmente al parque"] },
      selfDrive: { title: "Conduciendo", content: "Si conduce desde otras ciudades, puede seguir las carreteras principales hasta el centro de Guayaquil.", steps: ["Desde Quito o Cuenca: Tomar vuelo doméstico o autobús de larga distancia a Guayaquil", "Dentro de Guayaquil: Navegar a Av. 9 de Octubre", "Estacionamiento: Hay estacionamientos pagos cerca, se recomienda verificar con anticipación"] }
    },
    tips: { title: "Consejos de Viaje y Recordatorios de Seguridad", items: [
      "El parque es gratuito, no se requieren entradas o reservas",
      "Visita diurna recomendada, tenga cuidado por la noche",
      "Protección solar necesaria, clima tropical es caluroso",
      "Parque adecuado para caminar, trote y ocio, sea cortés",
      "Mantener el parque limpio, no tirar basura",
      "Niños son bienvenidos, pero superviselos",
      "Restaurantes y tiendas cercanas, puede comprar o comer"
    ] },
    gallery: { title: "Galería de Fotos", viewMore: "Ver Más en Google Maps" },
    reviews: { title: "Reseñas", subtitle: "Reseñas de Google Maps", viewMore: "Más Reseñas" },
    faq: { title: "Preguntas Frecuentes", subtitle: "Aprenda más sobre Plaza Rodolfo Baquerizo Moreno", items: [
      { question: "¿Cuál es el horario de apertura de Plaza Rodolfo Baquerizo Moreno?", answer: "Diario 06:00 - 23:00, abierto todo el año. El horario amplio facilita a los ciudadanos venir para ocio en diferentes momentos." },
      { question: "¿Hay tarifa de entrada al parque?", answer: "No. Plaza Rodolfo Baquerizo Moreno es un parque urbano completamente gratuito y abierto al público. No se requieren entradas o reservas." },
      { question: "¿Quién le da nombre al parque?", answer: "El parque recibe su nombre de Rodolfo Baquerizo Moreno (1889-1977), un político ecuatoriano que se desempeñó como Presidente Interino de 1944 a 1946." },
      { question: "¿Qué actividades es adecuado para el parque?", answer: "El parque es adecuado para caminata, trote, relajación y salidas familiares. Como parque urbano, tiene un entorno hermoso con árboles frondosos." },
      { question: "¿Cómo llegar a Plaza Rodolfo Baquerizo Moreno?", answer: "El parque está ubicado en Av. 9 de Octubre en el centro de Guayaquil. Unos 20-30 minutos en taxi desde el aeropuerto." },
      { question: "¿Qué otras atracciones vale la pena visitar cerca del parque?", answer: "Puede visitar: Malecon 2000, Av. 9 de Octubre, Centro de Guayaquil." }
    ]},
    location: { title: "Ubicación en el Mapa", address: "Av. 9 de Octubre, 090313 Guayaquil, Ecuador\n(Área concurrida del centro, transporte conveniente)", openMaps: "Ver Ubicación en Google Maps" },
    footer: { callToAction: "Como un espacio verde urbano, por favor únanse a nosotros para cuidar el entorno y proteger las áreas verdes. Mantenga el parque limpio y conserve un entorno hermoso juntos.", text: "© 2026 Guía de Viaje de Plaza Rodolfo Baquerizo Moreno · Todos los derechos reservados.\nEste sitio web es un proyecto independiente de información turística. No estamos afiliados con el gobierno local ni ninguna autoridad oficial.", made: "Este sitio web es un proyecto independiente de información turística. Hecho para exploradores.", linksTitle: "Enlaces Relacionados", links: [
      { name: "Dirección Nacional de Turismo", url: "https://ecuador.travel/" },
      { name: "Municipio de Guayaquil", url: "https://www.guayaquil.gob.ec/" },
      { name: "Fundación Malecón 2000", url: "https://malecon2000.com/" },
      { name: "Gobierno Provincial de Guayas", url: "https://guayas.gob.ec/" },
      { name: "Turismo Oficial de Guayaquil", url: "http://visitguayaquil.com/" }
    ]}
  }
};
