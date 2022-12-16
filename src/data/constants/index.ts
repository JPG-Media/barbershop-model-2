export const barbershopInfo = {
  name: "Hats Off Classic Barbershop", 
  city: 'based in Antioch- Tennessee',
  xp: `It's not just a haircut, it's an experience.
  Where detail makes the difference
  `,

  representing: `Bringing to Antioch the most licensed and professional work possible. This is what makes Hats Off Classic Barbershop a different and a special place. Enjoy our always clean and professional barber shop environment.`,
  address: '2400 Antioch Pike Suite D Antioch, TN 37013',
  
  label: 'Hats Off Classic Barbershop',
  phone:`615-569-6580
  `,
     miniAgenda: `Tue-Sat Noon-6:30pm`,
     email: ``,
     facebook: ``,
     instagram: `https://www.instagram.com/hatsoffclassic_barbershop/`,
     latitude: 36.06093711126134,
     longitude:  -86.67284375493008,
  copyright: 'HatsOffClassicBarbershop © 2022',
};

export const hero = 'Its not just a haircut, its an experience.'
export const hero2 = `Bringing to Antioch the most licensed and professional work possible.`;

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
    name: "Hats Off",
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
    name: "Hats Off",
    text: "text-white font-light",
    border: "border-white",
  },
};

export const services =  [
  {
      id:1, 
      name: 'Haircut', 
      price: '25', 
      description: ''
  },

  {
      id:2, 
      name: 'Haircut & Beard', 
      price: '30', 
      description: ''
  },

  {
      id:3, 
      name: 'Kids Cut', 
      price: '20', 
      description: ''
  },

  {
      id:4, 
      name: "Woman's Services", 
      price: '22+', 
      description: "" 
  },

  {
    id:5, 
    name: "Eyebrow Arch", 
    price: '12', 
    description: "" 
},

{
  id:6, 
  name: "Mohawk", 
  price: '22', 
  description: "" 
},

 
]; 

export const theEstablishment = 
  `The ${barbershopInfo.name} is a place decorated in our own way and always with good music, ${barbershopInfo.representing}. Besides a great haircut, at ${barbershopInfo.name} you can enjoy a place where men can go to be our friends. We want them to feel comfortable here. So come get a haircut and a cold one at ${barbershopInfo.name}!`;

export const workingHours = {
  Monday: `Closed`,
  Tuesday: "Closed",
  Wednesday: "Closed",
  Thursday: "Noon ⟹ 6:30pm",
  Friday: "Noon ⟹ 6:30pm",
  Saturday: "Noon ⟹ 6:30pm",
  Sunday: "Closed",
};

export const placeImage = "/images/place.png";

export const heroImages = [
  { id: "hero1", url: "/images/hero1.jpg", title: "HERO1", isFirst: true },
  { id: "hero2", url: "/images/hero2.jpg", title: "HERO2" },
  { id: "hero3", url: "/images/hero3.jpg", title: "HERO3", isLast: true },
];

export const images = [
  "/images/gallery/gallery1.webp",
  "/images/gallery/gallery2.webp",
  "/images/gallery/gallery3.webp",
  "/images/gallery/gallery4.webp",
  "/images/gallery/gallery5.webp",
  "/images/gallery/gallery6.webp",
  "/images/gallery/gallery7.webp",
  "/images/gallery/gallery8.webp",
  "/images/gallery/gallery9.webp",
  "/images/gallery/gallery10.webp",
];

export const about = 
{

    description: `${barbershopInfo.name} is your Personal Barbershop, based in ${barbershopInfo.city}. We are specialized in all types of men's haircuts and we do our best to please our customers. With the Style you desire by a consultation that fits your lifestyle, ${barbershopInfo.xp} delivering a great result so they feel better when they walk out my door.`,
    address: barbershopInfo.address,
}
;



