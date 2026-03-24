const users = [
  {
    id: 1,
    firstName: "Jefe",
    lastName: "General",
    address: { country: "Argentina" },
    image: "https://randomuser.me/api/portraits/men/12.jpg",
    messages: [
      { author: "Jefe", text: "Buen día equipo", time: "09:00", isMine: false },
      { author: "me", text: "Buen día jefe", time: "09:01", isMine: true },
      { author: "Jefe", text: "Hoy tenemos que avanzar con el proyecto", time: "09:02", isMine: false },
      { author: "me", text: "Estoy trabajando en eso", time: "09:03", isMine: true },
      { author: "Jefe", text: "Perfecto, luego revisamos avances", time: "09:04", isMine: false },
      { author: "me", text: "Dale", time: "09:05", isMine: true }
    ]
  },
  {
    id: 2,
    firstName: "Secretario",
    lastName: "Administrativo",
    address: { country: "Argentina" },
    image: "https://randomuser.me/api/portraits/men/33.jpg",
    messages: [
      { author: "Secretario", text: "Les recuerdo la reunión de hoy", time: "09:20", isMine: false },
      { author: "me", text: "¿A qué hora era?", time: "09:21", isMine: true },
      { author: "Secretario", text: "A las 12 en la sala virtual", time: "09:22", isMine: false },
      { author: "me", text: "Perfecto gracias", time: "09:23", isMine: true },
      { author: "Secretario", text: "Luego paso el resumen", time: "09:24", isMine: false },
      { author: "me", text: "Buenísimo", time: "09:25", isMine: true }
    ]
  },
  {
    id: 3,
    firstName: "Ingeniero",
    lastName: "Software",
    address: { country: "Chile" },
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    messages: [
      { author: "Ingeniero", text: "Estoy revisando el sistema", time: "10:10", isMine: false },
      { author: "me", text: "¿Encontraste algo?", time: "10:11", isMine: true },
      { author: "Ingeniero", text: "Hay que optimizar unas funciones", time: "10:12", isMine: false },
      { author: "me", text: "Ok lo vemos", time: "10:13", isMine: true },
      { author: "Ingeniero", text: "Después te paso el código", time: "10:14", isMine: false },
      { author: "me", text: "Perfecto", time: "10:15", isMine: true }
    ]
  },
  {
    id: 4,
    firstName: "Diseñador",
    lastName: "UI",
    address: { country: "Uruguay" },
    image: "https://randomuser.me/api/portraits/women/52.jpg",
    messages: [
      { author: "Diseñador", text: "Estoy trabajando en el diseño nuevo", time: "11:00", isMine: false },
      { author: "me", text: "¿Del chat?", time: "11:01", isMine: true },
      { author: "Diseñador", text: "Sí, para que sea más moderno", time: "11:02", isMine: false },
      { author: "me", text: "Buenísimo", time: "11:03", isMine: true },
      { author: "Diseñador", text: "Luego se los muestro", time: "11:04", isMine: false },
      { author: "me", text: "Dale", time: "11:05", isMine: true }
    ]
  },
  {
    id: 5,
    firstName: "Tester",
    lastName: "QA",
    address: { country: "España" },
    image: "https://randomuser.me/api/portraits/men/61.jpg",
    messages: [
      { author: "Tester", text: "Encontré un bug en el login", time: "12:30", isMine: false },
      { author: "me", text: "¿Qué pasa?", time: "12:31", isMine: true },
      { author: "Tester", text: "No valida bien los datos", time: "12:32", isMine: false },
      { author: "me", text: "Lo reviso ahora", time: "12:33", isMine: true },
      { author: "Tester", text: "Avisame cuando esté listo", time: "12:34", isMine: false },
      { author: "me", text: "Dale", time: "12:35", isMine: true }
    ]
  },
  {
    id: 6,
    firstName: "Ingeniero",
    lastName: "Backend",
    address: { country: "Argentina" },
    image: "https://randomuser.me/api/portraits/men/28.jpg",
    messages: [
      { author: "Ingeniero", text: "Estoy subiendo cambios al servidor", time: "13:10", isMine: false },
      { author: "me", text: "Perfecto", time: "13:11", isMine: true },
      { author: "Ingeniero", text: "Puede que se caiga un momento", time: "13:12", isMine: false },
      { author: "me", text: "Avisá cuando termine", time: "13:13", isMine: true },
      { author: "Ingeniero", text: "Dale", time: "13:14", isMine: false },
      { author: "me", text: "Gracias", time: "13:15", isMine: true }
    ]
  }
];

export { users };