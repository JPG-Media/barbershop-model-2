export const barbershopInfo = {
  name: "Drake’s Barbershop", 
  city: 'Based in Murfreesboro- Tennessee',
  xp: `Drake’s Barber Shop has proudly had the finest haircuts in town since 1972. We believe that you, the client, are walking “billboards” or advertisements if you will. Your hair represents our work. We also believe that if you take care of your customer, they’ll take care of you. You can schedule an appointment online so no waiting! Just come in for a great haircut in a traditional barber shop at a fair price.`,

  representing: `Bringing to Murfreesboro the most licensed and professional work possible. This is what makes Drake’s Barbershop a different and a special place. Enjoy our always clean and professional barber shop environment.`,
  address: '1117 Memorial Blvd Murfreesboro, TN 37130',
  label: 'Drake’s Barbershop',
  phone: `615-896-0042`,
  miniAgenda: `Tue-Sat 09:00am-5:30pm`,
  email: `drakesbarbershop@bellsouth.net `,
  facebook: `https://www.facebook.com/BarberShopsinMurfreesboro/`,
  instagram: `https://www.instagram.com/drakesbarbershop/`,
  latitude: 35.85882840067621,
  longitude: -86.39253803403098,
  copyright: 'Drake’sBarbershop © 2022',
};

export const hero = 'Since 1972 delivering the finests haircuts in town.'
export const hero2 = `Bringing to Murfreesboro the most licensed and professional work possible.`;

export const colors = {
  primary: "#e02424",
  logo: "#aa1d4e",
  logo2: "#1a5a95",
  secondary: "#5DB7DE",
  background: "black",
  primaryText: "text-white",
  secondaryText: "text-gray-300",
  bgPrimary: "bg-black",
  bgGradient: "from-black to-[#000320]",
  barberPole: "bg-white",
  beforeBarberPole: "before:bg-white",
  barberPoleBorder: "border-black",
  beforeBarberPoleBorder: "before:border-black",
  bookNow: "bg-primary text-black",
  bookNowGlow: "drop-shadow-[0px_0px_5px_#e02424]",
  bookNowHover:
    "hover:bg-background hover:drop-shadow-[0px_0px_12px_#e02424] hover:text-white hover:border-primary hover:ease-out",
  bookNowActive: "active:drop-shadow-[0px_0px_6px_#e02424]",
};

export const logo = {
  nav: {
    name: "Drake’s Barbershop",
    text: "text-white",
    border: "border-white",
  },
  establishment: {
    name: "The Establishment ",
    text: "text-white font-light ",
    border: `border-white`,
  },
  gallery: {
    name: "GALLERY",
    text: "text-white font-light",
    border: "border-contrast",
  },
  services: {
    name: "SERVICES",
    text: "text-white font-semibold",
    border: "border-white",
  },
  about: {
    name: "ABOUT",
    text: "text-white font-light",
    border: "border-white",
  },
  team: {
    name: "TEAM",
    text: "text-white font-light",
    border: "border-white",
  },
  footer: {
    name: "Drake’s Barbershop",
    text: "text-white font-light",
    border: "border-white",
  },
};

export const services =  [
  {
      id:1, 
      name: 'Men’s Haircut', 
      price: '25', 
      description: 'Classic mens haircut'
  },

  {
      id:2, 
      name: 'Beard Trim', 
      price: '20', 
      description: ''
  },

  {
      id:3, 
      name: 'Haircut & Beard trim', 
      price: '40', 
      description: ''
  },

  {
      id:4, 
      name: "Kids cut", 
      price: '20', 
      description: "" 
  },

  {
    id:5, 
    name: "Bald fade", 
    price: '30', 
    description: "" 
},

{
  id:6, 
  name: "Buzz cut", 
  price: '20', 
  description: "An even one blade buzz cut" 
},

];

export const theEstablishment = 
  `The ${barbershopInfo.name} is a place decorated in our own way and always with good music, ${barbershopInfo.representing}. Besides a great haircut, at ${barbershopInfo.name} you can enjoy a place where men can go to be our friends. We want them to feel comfortable here. So come get a haircut and a cold one at ${barbershopInfo.name}!`;

export const workingHours = {
  Monday: `Closed`,
  Tuesday: "09:00am ⟹ 5:30pm",
  Wednesday: "09:00am ⟹ 5:30pm",
  Thursday: "09:00am ⟹ 5:30pm",
  Friday: "09:00am ⟹ 5:30pm",
  Saturday: "08:00am ⟹ 1:30pm",
  Sunday: "Closed",
};

export const placeImage = "/images/place.png";

export const heroImages = [
  { id: "hero1", url: "/images/hero1.jpg", title: "HERO1", isFirst: true },
  { id: "hero2", url: "/images/hero2.jpg", title: "HERO2" },
  { id: "hero3", url: "/images/hero3.jpg", title: "HERO3", isLast: true },
];

export const images = [
  "/images/gallery/gallery1.jpg",
  "/images/gallery/gallery2.jpg",
  "/images/gallery/gallery3.jpg",
  "/images/gallery/gallery4.jpg",
  "/images/gallery/gallery5.jpg",
  "/images/gallery/gallery6.jpg",
  "/images/gallery/gallery7.jpg",
];

export const about = 
{

    description: `${barbershopInfo.name} is your Personal Barbershop, based in ${barbershopInfo.city}. We are specialized in all types of men's haircuts and we do our best to please our customers. With the Style you desire by a consultation that fits your lifestyle, ${barbershopInfo.xp} delivering a great result so they feel better when they walk out my door.`,
    address: barbershopInfo.address,
};



