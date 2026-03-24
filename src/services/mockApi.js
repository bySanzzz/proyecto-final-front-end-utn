const users = [
  {
    id: 1,
    firstName: "Leon",
    lastName: "Kennedy",
    email: "leon.kennedy@raccooncity.com",
    password: "biohazard123",
    address: { country: "EEUU" },
    image: "https://vignette.wikia.nocookie.net/residentevil/images/2/21/Leon_Kennedy_RE2.png",
    messages: [
      { author: "Leon", text: "Estamos siendo rodeados...", time: "09:12", isMine: false },
      { author: "me", text: "Mantén la calma, Leon", time: "09:13", isMine: true }
    ]
  },
  {
    id: 2,
    firstName: "Jill",
    lastName: "Valentine",
    email: "jill.valentine@umbrella.com",
    password: "s.t.a.r.s",
    address: { country: "EEUU" },
    image: "https://static.wikia.nocookie.net/residentevil/images/8/8d/Jill_Valentine_RE3.png",
    messages: [
      { author: "Jill", text: "Necesito un plan para salir de aquí", time: "10:01", isMine: false },
      { author: "me", text: "Te cubro, Jill", time: "10:05", isMine: true }
    ]
  },
  {
    id: 3,
    firstName: "James",
    lastName: "Sunderland",
    email: "james.sunderland@silent.com",
    password: "silent123",
    address: { country: "EEUU" },
    image: "https://static.wikia.nocookie.net/silenthill/images/3/3f/JamesSunderland.png",
    messages: [
      { author: "James", text: "Heather... ¿estás aquí?", time: "11:22", isMine: false },
      { author: "me", text: "Sigue adelante, James", time: "11:30", isMine: true }
    ]
  },
  {
    id: 4,
    firstName: "Heather",
    lastName: "Mason",
    email: "heather.mason@silent.com",
    password: "pyramidhead",
    address: { country: "EEUU" },
    image: "https://static.wikia.nocookie.net/silenthill/images/5/5b/HeatherMason.png",
    messages: [
      { author: "Heather", text: "Este pueblo es un horror...", time: "12:10", isMine: false },
      { author: "me", text: "No pierdas la esperanza, Heather", time: "12:11", isMine: true }
    ]
  },
  {
    id: 5,
    firstName: "Waylon",
    lastName: "Park",
    email: "waylon.park@outlast.com",
    password: "mountmassive",
    address: { country: "EEUU" },
    image: "https://static.wikia.nocookie.net/outlast/images/2/27/WaylonPark.png",
    messages: [
      { author: "Waylon", text: "No puedo salir de este hospital", time: "13:45", isMine: false },
      { author: "me", text: "Tranquilo, Waylon, busca otra salida", time: "13:50", isMine: true }
    ]
  },
  {
    id: 6,
    firstName: "Lynn",
    lastName: "Langermann",
    email: "lynn.langermann@outlast.com",
    password: "camara123",
    address: { country: "EEUU" },
    image: "https://static.wikia.nocookie.net/outlast/images/3/3c/LynnLangermann.png",
    messages: [
      { author: "Lynn", text: "Waylon, ¿estás bien?", time: "14:03", isMine: false },
      { author: "me", text: "Sí, Lynn, sigue filmando", time: "14:04", isMine: true }
    ]
  },
  {
    id: 7,
    firstName: "Sebastian",
    lastName: "Castellanos",
    email: "sebastian.castellanos@evilwithin.com",
    password: "stem123",
    address: { country: "EEUU" },
    image: "https://static.wikia.nocookie.net/theevilwithin/images/7/73/SebastianCastellanos.png",
    messages: [
      { author: "Sebastian", text: "Estos monstruos... no puedo creerlo", time: "15:20", isMine: false },
      { author: "me", text: "Mantente fuerte, Sebastian", time: "15:22", isMine: true }
    ]
  },
  {
    id: 8,
    firstName: "Joseph",
    lastName: "Oda",
    email: "joseph.oda@evilwithin.com",
    password: "detective",
    address: { country: "EEUU" },
    image: "https://static.wikia.nocookie.net/theevilwithin/images/5/53/JosephOda.png",
    messages: [
      { author: "Joseph", text: "Sebastian, tenemos que investigar esto", time: "16:18", isMine: false },
      { author: "me", text: "Entendido, Joseph", time: "16:25", isMine: true }
    ]
  },
  {
    id: 9,
    firstName: "Claire",
    lastName: "Redfield",
    email: "claire.redfield@raccooncity.com",
    password: "biohazard456",
    address: { country: "EEUU" },
    image: "https://static.wikia.nocookie.net/residentevil/images/9/9e/ClaireRedfield.png",
    messages: [
      { author: "Claire", text: "Chris, ¿dónde estás?", time: "17:02", isMine: false },
      { author: "me", text: "Sigue buscando, Claire", time: "17:05", isMine: true }
    ]
  },
  {
    id: 10,
    firstName: "Chris",
    lastName: "Redfield",
    email: "chris.redfield@raccooncity.com",
    password: "bioterror",
    address: { country: "EEUU" },
    image: "https://static.wikia.nocookie.net/residentevil/images/6/68/Chris_Redfield_RE2.png",
    messages: [
      { author: "Chris", text: "Tengo que detener a Umbrella", time: "18:40", isMine: false },
      { author: "me", text: "No te rindas, Chris", time: "18:41", isMine: true }
    ]
  }
];

export { users };