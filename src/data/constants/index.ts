export const barbershopInfo = {
  name: "Gypsy Barber & Shave", 
  city: 'Based in Goodlettsville- Tennessee',
  xp: ``,

  representing: `Bringing to Goodlettsville the most licensed and professional work possible. This is what makes Gypsy Barber & Shave a different and a special place. Enjoy our always clean and professional barber shop environment.`,
  address: '815 Meadowlark Lane, Goodlettsville, Tennessee 37072',
  
  label: 'Gypsy Barber & Shave',
  phone:`615-756-4871`,
   miniAgenda: `Tue-Sat 	10:00am-6:00pm`,
   email: ` gypsybarberandshave@gmail.com`,
   facebook: ``,
   instagram: `https://www.instagram.com/gypsybarberandshave/`,
   latitude: 36.299523020141066,
   longitude: -86.70458001353582,
  copyright: 'GypsyBarber&Shave © 2022',
};

export const hero = 'The most incredible haircuts in town'
export const hero2 = `Bringing to Goodlettsville the most licensed and professional work possible.`;

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
    name: "GypsyBarber&Shave",
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
    name: "GypsyBarber&Shave",
    text: "text-white font-light",
    border: "border-white",
  },
};

export const services =  [
  {
      id:1, 
      name: 'Haircut', 
      price: '35', 
      description: ''
  },

  {
      id:2, 
      name: 'Haircut w/ Beard Trim', 
      price: '50', 
      description: ''
  },

  {
      id:3, 
      name: 'Full Face Shave', 
      price: '40', 
      description: 'Any type of haircut & style you desire, Lathered neck & straight razor edging, Beard trim, (No beard detailing) eyebrows & ears maintenance, blow-dry and style, cold beer or beverage'
  },

  {
    id:4, 
    name: 'Beard Trim', 
    price: '20', 
    description: ''
},


 
]; 

export const theEstablishment = 
  `The ${barbershopInfo.name} is a place decorated in our own way and always with good music, ${barbershopInfo.representing}. Besides a great haircut, at ${barbershopInfo.name} you can enjoy a place where men can go to be our friends. We want them to feel comfortable here. So come get a haircut and a cold one at ${barbershopInfo.name}!`;

export const workingHours = {
  Monday: `Closed`,
  Tuesday: "10:00am ⟹ 6:00pm",
  Wednesday: "10:00am ⟹ 6:00pm",
  Thursday: "11:00am ⟹ 8:00pm",
  Friday: "10:00am ⟹ 6:00pm",
  Saturday: "10:00am ⟹ 6:00pm",
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
    }
;



