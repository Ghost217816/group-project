const games = [
  {
    id: "1",
    title: "S.T.A.L.K.E.R. 2: Heart of Chornobyl",
    img:"https://cdn1.epicgames.com/offer/602a0ef0aceb46cca62445439661d712/EGS_STALKER2HeartofChornobyl_GSCGameWorld_S1_2560x1440-62f2f7def1bae0e3255e49fc7177adaf",
    releaseDate: "2024-11-20",
    developer: "GSC Game World",
    genres: ["Відкритий світ", "Бойовик", "Пригоди", "Виживання"],
    ageRating: "18+",
    locale: "uk-UA",
    description:
      "Відкрийте для себе Чорнобильську Зону Відчуження з небезпечними ворогами, смертельними аномаліями та потужними артефактами. Напишіть власну епічну історію, прокладаючи шлях до Серця Чорнобиля.",
    editions: [
      { sku: "standard", name: "Standard", priceUAH: null, discount: null },
      { sku: "deluxe", name: "Deluxe Edition", priceUAH: 1329, discount: null },
      { sku: "ultimate", name: "Ultimate Edition", priceUAH: 1748, discount: null }
    ],
    store: {
      // якщо треба показувати бейдж знижки/ціну — підставляйте сюди актуальні значення
      hasDiscount: true,
      discountPercent: 30,
      discountedPriceUAH: 979
    },
    // за потреби можна доповнити
    platforms: ["PC (Windows)"],
    languages: ["Українська", "Англійська", "Російська", "інші"],
    tags: ["singleplayer", "story-rich", "post-apocalypse"]
  },

  {
  id: "2",
  title: "Fortnite",
  img:"https://cdn1.epicgames.com/offer/fn/FNBR_37-00_C6S4_EGS_Launcher_KeyArt_FNLogo_Carousel_PDP_2560x1440_logo_2560x1440-04348f5d3d52391f572e8c1050ddc737",
  releaseDate: "2017-07-21",
  developer: "Epic Games",
  genres: ["Бойовик", "Королівська битва", "Виживання", "Онлайн"],
  ageRating: "12+",
  locale: "uk-UA",
  description:
    "Fortnite — популярна онлайн-гра у жанрі королівської битви, де гравці змагаються за виживання, будують укріплення та борються з суперниками у динамічних боях.",
  editions: [
    { sku: "standard", name: "Free-to-Play", priceUAH: 0, discount: null },
    { sku: "crew", name: "Fortnite Crew Subscription", priceUAH: 339, discount: null },
    { sku: "vbucks", name: "V-Bucks Packs", priceUAH: null, discount: null }
  ],
  store: {
    hasDiscount: false,
    discountPercent: null,
    discountedPriceUAH: null
  },
  platforms: ["PC (Windows)", "PlayStation", "Xbox", "Nintendo Switch", "Android", "iOS (обмежено)"],
  languages: ["Українська", "Англійська", "Іспанська", "Французька", "інші"],
  tags: ["multiplayer", "battle-royale", "shooter", "building"]
},

{
  id: "3",
  title: "Subnautica: Below Zero",
  img:"https://unknownworlds.com/_next/image?url=https%3A%2F%2Fd17c72h1ypygg7.cloudfront.net%2Fsubnautica%2Ffiles%2F2019%2F01%2F20190129_SN_BZ_KeyArt_16_9.jpg%2F20190129_SN_BZ_Key_Art_16_9_54f84bc0b8.jpg&w=3840&q=75",
  releaseDate: "2021-05-14",
  developer: "Unknown Worlds Entertainment",
  genres: ["Пригоди", "Виживання", "Відкритий світ"],
  ageRating: "12+",
  locale: "uk-UA",
  description:
    "Subnautica: Below Zero — пригодницька гра на виживання у відкритому світі під водою. Досліджуйте крижаний океан планети 4546B, будуйте бази, взаємодійте з дивовижними створіннями та розкрийте таємниці замерзлого світу.",
  editions: [
    { sku: "standard", name: "Standard Edition", priceUAH: 449, discount: null },
    { sku: "deluxe", name: "Deluxe Edition", priceUAH: 569, discount: null }
  ],
  store: {
    hasDiscount: true,
    discountPercent: 25,
    discountedPriceUAH: 337
  },
  platforms: ["PC (Windows)", "PlayStation", "Xbox", "Nintendo Switch"],
  languages: ["Англійська", "Українська (частково, фанатський переклад)", "Німецька", "Французька", "інші"],
  tags: ["singleplayer", "survival", "exploration", "underwater", "open-world"]
},

{
  id: "4",
  title: "Cities: Skylines – Snowfall",
  img:"https://s.pacn.ws/1/p/ph/cities-skylines-snowfall-dlc-458921.5.jpg?v=rv1vtl&width=800&crop=614,344",
  releaseDate: "2016-02-18",
  developer: "Colossal Order",
  genres: ["Симулятор", "Стратегія", "Будівництво міста", "DLC"],
  ageRating: "3+",
  locale: "uk-UA",
  description:
    "Snowfall — це доповнення для Cities: Skylines, яке додає зимові карти, погодні умови зі снігом, нові системи обігріву та громадського транспорту, включно з трамваями. Воно робить управління містом ще складнішим та цікавішим.",
  editions: [
    { sku: "dlc", name: "DLC Snowfall", priceUAH: 189, discount: null },
    { sku: "bundle", name: "Snowfall + Cities: Skylines Bundle", priceUAH: 449, discount: null }
  ],
  store: {
    hasDiscount: true,
    discountPercent: 50,
    discountedPriceUAH: 95
  },
  platforms: ["PC (Windows)", "macOS", "Linux"],
  languages: ["Англійська", "Німецька", "Французька", "Іспанська", "інші"],
  tags: ["singleplayer", "city-builder", "simulation", "strategy", "dlc"]
},

{
  id: "5",
  title: "Mortal Kombat 11",
  img:"https://hot.game/uploads/media/poster_game/0001/13/63553ac4a31609ce264c916646d1d3421e2520e9.jpeg",
  releaseDate: "2019-04-23",
  developer: "NetherRealm Studios",
  genres: ["Бойовик", "Файтинг", "Онлайн"],
  ageRating: "18+",
  locale: "uk-UA",
  description:
    "Mortal Kombat 11 — один із найпопулярніших файтингів сучасності з кінематографічною кампанією, кастомізацією персонажів та жорстокими бійками. Гра пропонує як сюжетний режим, так і мультиплеєрні змагання.",
  editions: [
    { sku: "standard", name: "Standard Edition", priceUAH: 699, discount: null },
    { sku: "premium", name: "Premium Edition", priceUAH: 1199, discount: null },
    { sku: "ultimate", name: "Ultimate Edition", priceUAH: 1399, discount: null }
  ],
  store: {
    hasDiscount: true,
    discountPercent: 60,
    discountedPriceUAH: 279
  },
  platforms: ["PC (Windows)", "PlayStation", "Xbox", "Nintendo Switch"],
  languages: ["Англійська", "Іспанська", "Французька", "Німецька", "інші"],
  tags: ["fighting", "multiplayer", "story-rich", "competitive"]
},

{
  id: "6",
  title: "Mortal Kombat 1",
  img:"https://gaming-cdn.com/images/products/19340/orig/mortal-kombat-1-definitive-edition-definitive-edition-pc-game-steam-cover.jpg?v=1747293260",
  releaseDate: "2023-09-19",
  developer: "NetherRealm Studios",
  genres: ["Бойовик", "Файтинг", "Онлайн"],
  ageRating: "18+",
  locale: "uk-UA",
  description:
    "Mortal Kombat 1 — перезапуск культової серії файтингів. У грі представлено нову історію, оновлених персонажів та унікальну систему допоміжних бійців (Kameo Fighters), що додає нові тактичні можливості у боях.",
  editions: [
    { sku: "standard", name: "Standard Edition", priceUAH: 2099, discount: null },
    { sku: "premium", name: "Premium Edition", priceUAH: 2799, discount: null },
    { sku: "kollector", name: "Kollector’s Edition", priceUAH: 5499, discount: null }
  ],
  store: {
    hasDiscount: false,
    discountPercent: null,
    discountedPriceUAH: null
  },
  platforms: ["PC (Windows)", "PlayStation 5", "Xbox Series X|S", "Nintendo Switch"],
  languages: ["Англійська", "Іспанська", "Французька", "Німецька", "інші"],
  tags: ["fighting", "multiplayer", "story-rich", "next-gen"]
},

{
  id: "7",
  title: "Dota 2",
  img:"data:image/jpeg;base64,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",
  developer: "Valve",
  genres: ["MOBA", "Стратегія", "Онлайн"],
  ageRating: "16+",
  locale: "uk-UA",
  description:
    "Dota 2 — одна з найпопулярніших MOBA-ігор у світі, де дві команди по п'ять гравців борються за контроль над картою. Гравці обирають героїв з унікальними здібностями та змагаються за знищення ворожого трону.",
  editions: [
    { sku: "standard", name: "Free-to-Play", priceUAH: 0, discount: null },
    { sku: "battlepass", name: "Battle Pass (сезонний)", priceUAH: null, discount: null },
    { sku: "dlc", name: "Cosmetics & Bundles", priceUAH: null, discount: null }
  ],
  store: {
    hasDiscount: false,
    discountPercent: null,
    discountedPriceUAH: null
  },
  platforms: ["PC (Windows)", "macOS", "Linux"],
  languages: ["Англійська", "Українська (фанатський переклад)", "Російська", "Китайська", "інші"],
  tags: ["multiplayer", "competitive", "moba", "esports", "free-to-play"]
},

{
  id: "8",
  title: "EA Sports FC 25",
  img:"https://i0.wp.com/brignews.com/wp-content/uploads/2024/10/GOAL-Blank-WEB-Facebook-2024-07-17T151013.046.jpg.webp?fit=1920%2C1080&ssl=1",
  releaseDate: "2024-09-27",
  developer: "EA Canada, EA Romania",
  genres: ["Спортивний симулятор", "Футбол", "Онлайн"],
  ageRating: "3+",
  locale: "uk-UA",
  description:
    "EA Sports FC 25 — футбольний симулятор, який прийшов на зміну серії FIFA. Гра пропонує більш реалістичний підхід до тактики, розвиток клубної кар’єри та нові режими, зокрема 5 на 5 Rush.",
  editions: [
    { sku: "standard", name: "Standard Edition", priceUAH: null, discount: null },
    { sku: "ultimate", name: "Ultimate Edition", priceUAH: null, discount: null }
  ],
  store: {
    hasDiscount: null,
    discountPercent: null,
    discountedPriceUAH: null
  },
  platforms: ["PC (Windows)", "PlayStation 4", "PlayStation 5", "Xbox One", "Xbox Series X|S", "Nintendo Switch"],
  languages: ["Українська (частково, фанатський переклад)", "Англійська", "інші"],
  tags: ["football", "simulation", "sports", "multiplayer", "tactical"]
},

{
  id: "9",
  title: "EA Sports FC 24",
  img:"https://gaming-cdn.com/images/products/13588/orig/ea-sports-fc-24-pc-game-ea-app-cover.jpg?v=1696842619",
  releaseDate: "2023-09-29",
  developer: "EA Vancouver, EA Romania",
  genres: ["Спортивний симулятор", "Футбол", "Онлайн"],
  ageRating: "3+",
  locale: "uk-UA",
  description:
    "EA Sports FC 24 — перша гра серії EA Sports FC після завершення партнерства з FIFA. Вона зберігає улюблені режими та ліцензії і вводить нові технології: HyperMotion V, PlayStyles (powered by Opta) та покращений Frostbite-двигун.",
  editions: [
    { sku: "standard", name: "Standard Edition", priceUAH: null, discount: null },
    { sku: "ultimate", name: "Ultimate Edition", priceUAH: null, discount: null }
  ],
  store: {
    hasDiscount: false,
    discountPercent: null,
    discountedPriceUAH: null
  },
  platforms: ["PC (Windows)", "PlayStation 4", "PlayStation 5", "Xbox One", "Xbox Series X|S", "Nintendo Switch"],
  languages: ["Українська (неофіційна)", "Англійська", "інші"],
  tags: ["football", "simulation", "sports", "multiplayer", "new-era"]
},

{
  id: "10",
  title: "Counter-Strike: Global Offensive",
  img:"https://media.steampowered.com/apps/csgo/blog/images/fb_image.png?v=6",
  releaseDate: "2012-08-21",
  developer: "Valve, Hidden Path Entertainment",
  genres: ["Шутер", "Тактичний", "Онлайн", "Кіберспорт"],
  ageRating: "18+",
  locale: "uk-UA",
  description:
    "Counter-Strike: Global Offensive — багатокористувацький тактичний шутер від першої особи, у якому дві команди (терористи та спецпризначенці) змагаються у виконанні завдань або знищенні суперників. Одна з найпопулярніших кіберспортивних дисциплін у світі.",
  editions: [
    { sku: "standard", name: "Free-to-Play", priceUAH: 0, discount: null },
    { sku: "prime", name: "Prime Status Upgrade", priceUAH: 419, discount: null }
  ],
  store: {
    hasDiscount: false,
    discountPercent: null,
    discountedPriceUAH: null
  },
  platforms: ["PC (Windows)", "macOS", "Linux"],
  languages: ["Англійська", "Українська (частково, фанатський переклад)", "Російська", "інші"],
  tags: ["multiplayer", "shooter", "competitive", "esports", "tactical"]
},

{
  id: "11",
  title: "Counter-Strike 2",
  img:"https://gaming-cdn.com/images/products/13664/orig/counter-strike-2-pc-game-steam-cover.jpg?v=1695885435",
  releaseDate: "2023-09-27",
  developer: "Valve",
  genres: ["Шутер", "Тактичний", "Онлайн", "Кіберспорт"],
  ageRating: "18+",
  locale: "uk-UA",
  description:
    "Counter-Strike 2 — нове покоління легендарного тактичного шутера на рушії Source 2. Гра отримала покращену графіку, динамічні димові гранати, оновлену фізику та мережеві технології. CS2 замінила CS:GO та стала основною платформою для кіберспорту.",
  editions: [
    { sku: "standard", name: "Free-to-Play", priceUAH: 0, discount: null },
    { sku: "prime", name: "Prime Status Upgrade", priceUAH: 419, discount: null }
  ],
  store: {
    hasDiscount: false,
    discountPercent: null,
    discountedPriceUAH: null
  },
  platforms: ["PC (Windows)", "Linux"],
  languages: ["Англійська", "Українська (частково, фанатський переклад)", "Російська", "інші"],
  tags: ["multiplayer", "shooter", "competitive", "esports", "tactical", "source2"]
},

{
  id: "12",
  title: "Destiny 2",
  img:"https://cdn1.epicgames.com/offer/428115def4ca4deea9d69c99c5a5a99e/EN_Bungie_D2_S27_OfferLandscape_S1_2560x1440_2560x1440-0aa20ea10d57acb82c0fee4699a447cc",
  releaseDate: "2017-09-06",
  developer: "Bungie",
  genres: ["Шутер від першої особи", "MMO", "РПГ", "Кооперативний", "PvP"],
  ageRating: "16+",
  locale: "uk-UA",
  description:
    "Destiny 2 — безкоштовна онлайн-гра в жанрі шутера від першої особи з елементами MMO та РПГ. Гравці беруть на себе роль Стража, захисника людства, у боротьбі проти інопланетних загроз. Гра пропонує захопливу кампанію, кооперативні місії, різноманітні PvP-режими та регулярні оновлення контенту.",
  editions: [
    { sku: "standard", name: "Standard Edition", priceUAH: null, discount: null },
    { sku: "forsaken", name: "Forsaken Pack", priceUAH: null, discount: null },
    { sku: "shadowkeep", name: "Shadowkeep Pack", priceUAH: null, discount: null },
    { sku: "legacy", name: "Legacy Collection (2025)", priceUAH: null, discount: null }
  ],
  store: {
    hasDiscount: false,
    discountPercent: null,
    discountedPriceUAH: null
  },
  platforms: ["PC (Windows)", "PlayStation 4", "PlayStation 5", "Xbox One", "Xbox Series X|S", "Stadia"],
  languages: ["Англійська", "Французька", "Німецька", "Італійська", "Японська", "Корейська", "Польська", "Португальська (Бразилія)", "Російська", "Іспанська", "Іспанська (Латинська Америка)", "Китайська (спрощена)", "Китайська (традиційна)"],
  tags: ["PvE", "PvP", "MMO", "RPG", "кооператив", "кросплатформенний", "онлайн"
  ]
},

{
  id: "13",
  title: "Apex Legends",
  img:"https://images.unian.net/photos/2024_10/thumb_files/1200_0_1729432845-2222.jpg",
  releaseDate: "2019-02-04",
  developer: "Respawn Entertainment",
  genres: ["Battle Royale", "Hero Shooter", "Онлайн", "Кооперативний", "PvP"],
  ageRating: "13+",
  locale: "uk-UA",
  description:
    "Apex Legends — безкоштовна гра в жанрі battle royale, де гравці обирають унікальних героїв (Легенд) з різними здібностями та змагаються у командних боях. Розроблена Respawn Entertainment, гра пропонує динамічний геймплей, кросплатформенний матчмейкінг та регулярні оновлення.",
  editions: [
    { sku: "standard", name: "Free-to-Play", priceUAH: 0, discount: null },
    { sku: "battlePass", name: "Battle Pass", priceUAH: 999, discount: null }
  ],
  store: {
    hasDiscount: false,
    discountPercent: null,
    discountedPriceUAH: null
  },
  platforms: [
    "PC (Windows)",
    "PlayStation 4",
    "PlayStation 5",
    "Xbox One",
    "Xbox Series X|S",
    "Nintendo Switch",
    "iOS",
    "Android"
  ],
  languages: [
    "Англійська",
    "Французька",
    "Німецька",
    "Італійська",
    "Японська",
    "Корейська",
    "Польська",
    "Португальська (Бразилія)",
    "Російська",
    "Іспанська (Іспанія)",
    "Іспанська (Латинська Америка)",
    "Китайська (спрощена)",
    "Китайська (традиційна)",
    "Арабська"
  ],
  tags: ["multiplayer", "shooter", "competitive", "esports", "tactical", "crossplay"]
},

{
  id: "14",
  title: "S.T.A.L.K.E.R.: Тінь Чорнобиля",
  img:"https://indiegamesdevel.com/wp-content/uploads/2024/09/shadow-of-chernobyl.jpg",
  releaseDate: "2007-03-20",
  developer: "GSC Game World",
  genres: ["Шутер від першої особи", "Сурвайвал-хорор", "Відкритий світ", "РПГ", "Пригоди"],
  ageRating: "16+",
  locale: "uk-UA",
  description:
    "S.T.A.L.K.E.R.: Тінь Чорнобиля — культовий шутер від першої особи з елементами сурвайвал-хорору та РПГ, дія якого відбувається в альтернативній реальності Чорнобильської зони після другого катастрофічного вибуху на ЧАЕС. Гравець виступає в ролі сталкера, який досліджує зону, стикається з аномаліями, мутантами та іншими сталкерами, виконуючи різноманітні місії.",
  editions: [
    { sku: "standard", name: "Standard Edition", priceUAH: null, discount: null },
    { sku: "enhanced", name: "Enhanced Edition", priceUAH: 499, discount: null },
    { sku: "trilogy", name: "Legends of the Zone Trilogy", priceUAH: 999, discount: 33 }
  ],
  store: {
    hasDiscount: true,
    discountPercent: 33,
    discountedPriceUAH: 999
  },
  platforms: ["PC (Windows)", "PlayStation 4", "PlayStation 5", "Xbox One", "Xbox Series X|S", "Nintendo Switch"],
  languages: ["Англійська", "Російська", "Українська (частково)", "Інші"],
  tags: ["open-world", "survival-horror", "RPG", "post-apocalypse", "immersive-sim"]
},

{
  id: "15",
  title: "Euro Truck Simulator 2",
  img:"https://i.ytimg.com/vi/xlTuC18xVII/maxresdefault.jpg",
  releaseDate: "2012-10-18",
  developer: "SCS Software",
  genres: ["Симулятор", "Відкритий світ", "Інді", "Реалістичний", "Керування бізнесом"],
  ageRating: "3+",
  locale: "uk-UA",
  description:
    "Euro Truck Simulator 2 — реалістичний симулятор вантажних перевезень, де гравець бере на себе роль водія вантажівки, доставляючи вантажі по Європі. Гра пропонує детальну карту, ліцензовані вантажівки, можливість керувати власною транспортною компанією та багатий вибір модифікацій.",
  editions: [
    { sku: "standard", name: "Standard Edition", priceUAH: 249, discount: null },
    { sku: "gold", name: "Gold Edition", priceUAH: 349, discount: null },
    { sku: "complete", name: "Complete Edition", priceUAH: 499, discount: null },
    { sku: "premium", name: "Premium Edition", priceUAH: 599, discount: null }
  ],
  store: {
    hasDiscount: true,
    discountPercent: 50,
    discountedPriceUAH: 249
  },
  platforms: ["PC (Windows)", "Linux", "macOS", "PlayStation 5", "Xbox Series X|S"],
  languages: ["Англійська", "Російська", "Українська", "Німецька", "Французька", "Іспанська", "Італійська", "Польська", "Чеська", "Португальська", "Грецька", "Турецька", "Китайська (спрощена)", "Японська", "Корейська", "Арабська"],
  tags: ["симулятор", "відкритий світ", "реалістичний", "керування бізнесом", "модифікації", "європейські дороги"]
},

{
  id: "16",
  title: "God of War (2018)",
  img:"https://artline.ua/storage/images/news/860/ru/news_1635241752962468_0.webp",
  releaseDate: "2018-04-20",
  developer: "Santa Monica Studio",
  genres: ["Екшн-пригода", "РПГ", "Сурвайвал", "Пригоди"],
  ageRating: "18+",
  locale: "uk-UA",
  description:
    "God of War (2018) — це перезавантаження культової серії, де Кратос, колишній бог війни, разом зі своїм сином Атреєм вирушають у подорож через міфологічний світ Півночі. Гра поєднує інтенсивний бойовий процес, глибоку емоційну історію та відкритий світ, що вражає деталями.",
  editions: [
    { sku: "standard", name: "Standard Edition", priceUAH: null, discount: null },
    { sku: "digitalDeluxe", name: "Digital Deluxe Edition", priceUAH: 1299, discount: null },
    { sku: "collector", name: "Collector's Edition", priceUAH: 2499, discount: null }
  ],
  store: {
    hasDiscount: true,
    discountPercent: 50,
    discountedPriceUAH: 599
  },
  platforms: ["PlayStation 4", "PlayStation 5", "PC (Windows)"],
  languages: ["Англійська", "Російська", "Українська", "Інші"],
  tags: ["singleplayer", "story-rich", "mythology", "action-adventure", "father-son"]
},

{
  id: "17",
  title: "DREDGE",
  img:"https://www.nintendo.com/eu/media/images/10_share_images/games_15/nintendo_switch_4/2x1_NSwitch_Dredge.jpg",
  releaseDate: "2023-03-30",
  developer: "Black Salt Games",
  genres: ["Пригоди", "РПГ", "Хорор", "Інді", "Виживання", "Острівний світ"],
  ageRating: "12+",
  locale: "uk-UA",
  description:
    "DREDGE — це пригодницька гра з елементами жахів, у якій ви граєте роль рибалки, що досліджує темні таємниці затонулого архіпелагу. Керуйте своїм кораблем, закидайте волосінь і витягайте з глибини дивних і жахливих істот. Продавайте свою здобич, покращуйте свій корабель і відкривайте нові секрети.",
  editions: [
    { sku: "standard", name: "Standard Edition", priceUAH: 257, discount: null },
    { sku: "deluxe", name: "Deluxe Edition", priceUAH: 499, discount: null }
  ],
  store: {
    hasDiscount: true,
    discountPercent: 50,
    discountedPriceUAH: 257
  },
  platforms: ["PC (Windows)", "PlayStation 4", "PlayStation 5", "Xbox One", "Xbox Series X|S", "Nintendo Switch", "Android", "iOS", "macOS"],
  languages: ["Англійська", "Російська", "Українська", "Інші"],
  tags: ["singleplayer", "story-rich", "psychological-horror", "fishing", "open-world", "exploration"]
},

{

  "id": "18",
  "title": "S.T.A.L.K.E.R.: Call of Pripyat",
  img:"https://content1.rozetka.com.ua/goods/images/big/375328387.jpg",
  "releaseDate": "2009-10-02",
  "developer": "GSC Game World",
  "genres": ["Шутер від першої особи", "Сурвайвал-хорор", "РПГ", "Пригоди"],
  "ageRating": "18+",
  "locale": "uk-UA",
  "description": "S.T.A.L.K.E.R.: Call of Pripyat — це продовження культової серії, де ви граєте за майора Дегтярьова, який розслідує зникнення військової експедиції в Чорнобильській зоні. Гра поєднує відкритий світ, атмосферу постапокаліпсису та елементи виживання.",
  "editions": [
    { "sku": "standard", "name": "Standard Edition", "priceUAH": 415, "discount": null },
    { "sku": "enhanced", "name": "Enhanced Edition", "priceUAH": 415, "discount": null },
    { "sku": "legendsTrilogy", "name": "S.T.A.L.K.E.R.: Legends of the Zone Trilogy", "priceUAH": 415, "discount": null }],

  store: {
    hasDiscount: true,
    discountPercent: 80,
    discountedPriceUAH: 83
  },
  platforms: ["PC (Windows)", "PlayStation 4", "Xbox One", "Nintendo Switch", "PlayStation 5", "Xbox Series X|S"],
  languages: ["Англійська", "Російська", "Українська", "Інші"],
  tags: ["singleplayer", "story-rich", "post-apocalypse", "open-world", "survival-horror"],
},


{
  id: "19",
  title: "World of Tanks",
  releaseDate: "2010-08-12",
  developer: "Wargaming",
  genres: ["Шутер від першої особи", "Симулятор", "Шутер від третьої особи", "Стратегічна відеогра"],
  ageRating: "12+",
  locale: "uk-UA",
  description: "World of Tanks (WoT) – це безкоштовна онлайн-гра в жанрі танкового симулятора від білоруської студії Wargaming, яка пропонує гравцям вступати у масштабні командні бої на броньованих машинах середини ХХ століття.",
  editions: [
    { sku: "standard", "name": "Standard Edition", "priceUAH": Free, "discount": null },
    { sku: "enhanced", "name": "Enhanced Edition", "priceUAH": Free, "discount": null },
    { sku: "legendsTrilogy", "name": "S.T.A.L.K.E.R.: Legends of the Zone Trilogy", "priceUAH": 415, "discount": null }
  ],
  store: {
    hasDiscount: true,
    discountPercent: 80,
    discountedPriceUAH: 83
  },
  platforms: ["PC (Windows)", "PlayStation 4", "Xbox One", "PlayStation 5", "Xbox Series X|S"],
  languages: ["Англійська", "Російська", "Українська", "Інші"],
  tags: ["singleplayer", "story-rich", "post-apocalypse", "open-world", "survival-horror"]
},


{
  id: "19",
  title: "The Sims 4",
  img:"https://cdn1.epicgames.com/offer/2a14cf8a83b149919a2399504e5686a6/EGS_TheSims4DigitalDeluxeUpgrade_Maxis_DLC_S1_2560x1440-dd3e4bdf8936608a2d109d26a4bab26f",
  releaseDate: "2014-09-02",
  developer: "Maxis",
  genres: ["Симулятор життя", "Пісочниця", "Креативний", "Сімейний"],
  ageRating: "12+",
  locale: "uk-UA",
  description:
    "The Sims 4 — це симулятор життя, де ви створюєте та контролюєте персонажів, формуєте їхні характери, кар'єри та взаємини. Гра поєднує глибокий редактор персонажів, будівництво будинків та відкритий світ без чітко визначених цілей.",
  editions: [
    { sku: "standard", name: "Standard Edition", priceUAH: 0, discount: null },
    { sku: "digitalDeluxe", name: "Digital Deluxe Edition", priceUAH: 499, discount: null }
  ],
  store: {
    hasDiscount: true,
    discountPercent: 0,
    discountedPriceUAH: 0
  },
  platforms: ["PC (Windows)", "PlayStation 4", "Xbox One", "PlayStation 5", "Xbox Series X|S"],
  languages: ["Українська", "Англійська", "Російська", "інші"],
  tags: ["singleplayer", "sandbox", "creative", "family-friendly"]
},

{
    id: "20",
    title: "Cyberpunk 2077",
    img:"https://www.cyberpunk.net/build/images/social-thumbnail-en-ddcf4d23.jpg",
    releaseDate: "2020-12-10",
    developer: "CD Projekt Red",
    genres: ["Рольова гра", "Відкритий світ", "Пригоди", "Екшн"],
    ageRating: "18+",
    locale: "uk-UA",
    description:
      "Cyberpunk 2077 — це рольова гра в відкритому світі майбутнього, де ви керуєте персонажем на ім’я В, виконуєте місії, взаємодієте з персонажами та приймаєте рішення, які впливають на сюжет. Гра поєднує глибоку систему кастомізації, бойову механіку та багатий сюжет.",
    editions: [
      { sku: "standard", name: "Standard Edition", priceUAH: 1499, discount: null },
      { sku: "digitalDeluxe", name: "Digital Deluxe Edition", priceUAH: 1999, discount: null }
    ],
    store: {
      hasDiscount: true,
      discountPercent: 20,
      discountedPriceUAH: 1199
    },
    platforms: ["PC (Windows)", "PlayStation 4", "PlayStation 5", "Xbox One", "Xbox Series X|S"],
    languages: ["Українська", "Англійська", "Російська", "інші"],
    tags: ["singleplayer", "rpg", "open-world", "action", "story-driven"]
  },

  {
    id: "21",
    title: "Subnautica",
    img:"https://image.api.playstation.com/vulcan/img/rnd/202105/1203/1I06ja4yVTXkplVZnjDTfwUf.jpg",
    releaseDate: "2018-01-23",
    developer: "Unknown Worlds Entertainment",
    genres: ["Виживання", "Пригоди", "Відкритий світ", "Пісочниця"],
    ageRating: "12+",
    locale: "uk-UA",
    description:
      "Subnautica — це гра про виживання на незвіданій океанічній планеті. Гравець досліджує підводний світ, будує бази, збирає ресурси та досліджує таємниці планети. Гра поєднує захоплюючий сюжет із відкритим світом та креативними елементами будівництва.",
    editions: [
      { sku: "standard", name: "Standard Edition", priceUAH: 499, discount: null },
      { sku: "deluxe", name: "Deluxe Edition", priceUAH: 699, discount: null }
    ],
    store: {
      hasDiscount: true,
      discountPercent: 10,
      discountedPriceUAH: 449
    },
    platforms: ["PC (Windows)", "Mac", "PlayStation 4", "PlayStation 5", "Xbox One", "Xbox Series X|S", "Nintendo Switch"],
    languages: ["Українська", "Англійська", "Російська", "інші"],
    tags: ["singleplayer", "survival", "open-world", "adventure", "underwater"]
  },

  {
    id: "22",
    title: "Team Fortress 2",
    img:"https://gaming-cdn.com/images/products/18886/616x353/team-fortress-2-pc-game-steam-cover.jpg?v=1742298289",
    releaseDate: "2007-10-10",
    developer: "Valve",
    genres: ["Шутер від першої особи", "Мультиплеєр", "Тактичний", "Геройський"],
    ageRating: "16+",
    locale: "uk-UA",
    description:
      "Team Fortress 2 — це командний шутер від першої особи, де гравці обирають одну з дев'яти унікальних класів, кожен з яких має свої особливості та роль у команді. Гра пропонує різноманітні режими, карти та постійні оновлення, включаючи нові предмети та косметичні елементи.",
    editions: [
      { sku: "standard", name: "Standard Edition", priceUAH: 0, discount: null }
    ],
    store: {
      hasDiscount: false,
      discountPercent: 0,
      discountedPriceUAH: 0
    },
    platforms: ["PC (Windows)", "Xbox 360", "PlayStation 3", "macOS", "Linux"],
    languages: ["Українська", "Англійська", "Російська", "інші"],
    tags: ["free-to-play", "multiplayer", "FPS", "team-based", "hero shooter"]
  }
];

let container_games=document.querySelector('.games')
function renderGames(array){
  array.forEach(element => {
    container_games.innerHTML+=` <div class="card">
  <h3 class="title">${element.title}</h3>
  <img src="${element.img}"/>
  <p class="descr">${element.description}</p>
  <p class="date">${element.releaseDate}</p>
  <p class="dev">${element.developer}</p>
  <p class="age">${element.ageRating}</p>
  <p class="loc">${element.locale}</p>
</div>
    `
  });
}

renderGames(games)


const slider = document.getElementById('slider');
const slidesContainer = document.getElementById('slides');
const slides = Array.from(document.querySelectorAll('.slide'));
const dots = Array.from(document.querySelectorAll('.dot'));
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

let index = 0;
let autoSlide;

// -----------------------
// Оновлення слайду
// -----------------------
function update() {
  const w = slider.clientWidth;
  slidesContainer.style.transform = `translate3d(${-index * w}px, 0, 0)`;
  dots.forEach(d => d.classList.toggle('active', Number(d.dataset.index) === index));
}

// -----------------------
// Наступний слайд
// -----------------------
function nextSlide() {
  index = (index + 1) % slides.length;
  update();
}

// -----------------------
// Стрілки
// -----------------------
prevBtn.addEventListener('click', () => { 
  index = (index - 1 + slides.length) % slides.length; 
  update(); 
  restartAuto(); 
});
nextBtn.addEventListener('click', () => { 
  nextSlide(); 
  restartAuto(); 
});

// -----------------------
// Точки
// -----------------------
dots.forEach(dot => {
  dot.addEventListener('click', () => { 
    index = Number(dot.dataset.index); 
    update(); 
    restartAuto(); 
  });
});

// -----------------------
// Автоперехід
// -----------------------
function startAuto() { autoSlide = setInterval(nextSlide, 10000); } 
function restartAuto() { clearInterval(autoSlide); startAuto(); }

window.addEventListener('resize', update);

// -----------------------
// Старт слайдера
// -----------------------
update();
startAuto();
