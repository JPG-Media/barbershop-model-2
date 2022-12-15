export const barbershopInfo = {
  name: "Bowtie Barber Club", 
  city: 'based in Nashville- Tennessee and in Oxford- Ohio',
  xp: `The Bowtie Barber Club was founded and created by Keith Weiser in 2015. For years Keith was a professional baseball player for the Colorado Rockies organization. He played eight great years of the game before retiring as a left-handed pitcher and moving to Nashville. On the day he married his wife, Keith and his bachelor party went into Master's Barber School in Mt. Juliet to get a fresh cut and hot towel shave. That experience sparked an idea for Keith, in which he created Bowtie Barber Club.

  Spending time in the barbershop is nothing new to Keith. His grandfather, Charles Noppert, was a barber for over 40 years, and still to this day Keith’s grandfather’s shop is the oldest running barbershop in the state of Ohio.
   
  Bowtie Barber Club is a new barber shop with a classic feel. Located right outside of Nashville in Donelson, Bowtie Barber Club is one of the newest barber shops that offers a variety of services for men of all ages. Bowtie Barber Club prides itself for its trendy environment, memberships, and quality barbers. Next time you want to relax and leave looking your best, stop by the Bowtie Barber Club and let us take care of you.
  `,

  representing: `Bringing to Nashville the most licensed and professional work possible. This is what makes Bowtie Barber Club a different and a special place. Enjoy our always clean and professional barber shop environment.`,
  address: "2624 Old Lebanon Rd. Nashville, TN 37214",
  label: 'Bowtie Barber Club',
  phone: `615-889-5538`,
  miniAgenda: `Mon-Thu 	10:00am-6:00pm`,
  email: `Keith@BowtieBarberClub.com`,
  facebook: `https://www.facebook.com/bowtiebarberclub/`,
  instagram: `https://www.instagram.com/bowtiebarberclub/`,
  latitude: 36.1702818,
  longitude: -86.6713472,
  copyright: 'BowtieBarberClub © 2022',
};

export const hero = 'Bowtie Barber Club is a new barber shop with a classic feel.'
export const hero2 = `Enjoy our always clean and professional barber shop environment.`;

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
    name: "BowtieBarberClub",
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
    name: "BowtieBarberClub",
    text: "text-white font-light",
    border: "border-white",
  },
};

export const services =  [
  {
      id:1, 
      name: 'Classic Haircut', 
      price: '37', 
      description: '(Haircut, hot towel, straight razor neck shave)'
  },

  {
      id:2, 
      name: 'Beard Trim', 
      price: '20', 
      description: ''
  },

  {
      id:3, 
      name: 'Child Cut', 
      price: '28', 
      description: '(12 and Under)'
  },

  {
      id:4, 
      name: "Straight Razor Shave", 
      price: '50', 
      description: "" 
  },

  {
    id:5, 
    name: "Bald Fade", 
    price: '40', 
    description: "" 
},

{
  id:6, 
  name: "Partial Shave", 
  price: '35', 
  description: "" 
},

{
id:7, 
name: "Neck Shave", 
price: '10', 
description: "" 
},

{
id:8, 
name: "Line Up Cut", 
price: '20', 
description: "" 
},

];

export const theEstablishment = 
  `The ${barbershopInfo.name} is a place decorated in our own way and always with good music, ${barbershopInfo.representing}. Besides a great haircut, at ${barbershopInfo.name} you can enjoy a place where men can go to be our friends. We want them to feel comfortable here. So come get a haircut and a cold one at ${barbershopInfo.name}!`;

export const workingHours = {
  Monday: `10:00am ⟹ 6:00pm`,
  Tuesday: "10:00am ⟹ 6:00pm",
  Wednesday: "10:00am ⟹ 6:00pm",
  Thursday: "10:00am ⟹ 6:00pm",
  Friday: "10:00am ⟹ 5:00pm",
  Saturday: "10:00am ⟹ 3:00pm",
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

        description: `${barbershopInfo.name} is your Personal Barbershop, based in CITY. We are specialized in all types of men's haircuts and we do our best to please our customers. With the Style you desire by a consultation that fits your lifestyle, ${barbershopInfo.xp} delivering a great result so they feel better when they walk out my door.`,
        address: barbershopInfo.address,
    };



