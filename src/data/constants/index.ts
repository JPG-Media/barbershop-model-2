export const barbershopInfo = {
  name: "TX Barber Cartel", 
  city: 'based in Watauga-TX',
  xp: `Founded in 2020, TX Barber Cartel is your go-to Barber Shop in Watauga, TX. We’re committed to making you look your best, every day of the week. We offer top-of-the line products and bespoke treatments. Book an appointment or walk in today! Open 7 days a week!`,
  representing: `Bringing to Watauga the most licensed and professional work possible. This is what makes TX Barber Cartel a different and a special place. Enjoy our always clean and professional barber shop environment.`,
  address: '6539 Watauga Rd Watauga,TX 76148',
  
  label: 'TX Barber Cartel',
  phone:`682-289-0103`,
   miniAgenda: `Mon-Sat 10:30am-6:00pm`,
   email: `vinny@txbarbercartel.com`,
   facebook: `https://www.facebook.com/txbarbercartel`,
   instagram: `https://www.instagram.com/txbarbercartel/`,
   latitude: 32.86143799307708,
   longitude: -97.24155280792067,
  copyright: 'TX Barber Cartel © 2022',
};

export const hero = "The recipe for the style you can find here."
export const hero2 = `We’re committed to making you look your best, every day of the week. `;

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
    name: "Taperz Barber Shop",
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
    name: "Taperz Barber Shop",
    text: "text-white font-light",
    border: "border-white",
  },
};

export const services =  [
  {
      id:1, 
      name: 'Haircut & Style', 
      price: '30', 
      description: 'Any type of haircut & style you desire, Lathered neck & straight razor edging, eyebrows & ears maintenance, blow-dry and style, free cold beer or beverage. Sit back, relax and enjoy over 20 years of experience coming to work! Beard trim $5.'
  },

  {
      id:2, 
      name: 'Haircut & Style', 
      price: '30', 
      description: 'Any type of haircut & style you desire, Lathered neck & straight razor edging, eyebrows & ears maintenance, blow-dry and style, free cold beer or beverage. Sit back relax and enjoy over 20 years of experience comes to work! Beard trim $5.'
  },

  {
      id:3, 
      name: 'Haircut & Beard trim', 
      price: '35', 
      description: 'Any type of haircut & style you desire, Lathered neck & straight razor edging, Beard trim, (No beard detailing) eyebrows & ears maintenance, blow-dry and style, cold beer or beverage'
  },

  {
      id:4, 
      name: "Woman's Services", 
      price: '35+', 
      description: "Woman's Haircut( $35+) Color ($65+) Blow Dry ($45) Hair Extensions ($400+) " 
  },

 
]; 

export const theEstablishment = 
  `The ${barbershopInfo.name} is a place decorated in my own way and always with good music, ${barbershopInfo.representing}. Besides a great haircut, at ${barbershopInfo.name} you can enjoy a place where men can go to be my friend. I want them to feel comfortable here. So come get a haircut and a cold one at ${barbershopInfo.name}!`;



export const workingHours = {
  Monday: `11:00am ⟹ 5:00pm`,
  Tuesday: "10:30am ⟹ 6:00pm",
  Wednesday: "10:30am ⟹ 6:00pm",
  Thursday: "10:30am ⟹ 6:00pm",
  Friday: "10:30am ⟹ 6:00pm",
  Saturday: "10:30am ⟹ 6:00pm",
  Sunday: "11:00am ⟹ 3:00pm",
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
  "/images/gallery/gallery8.jpg",
  "/images/gallery/gallery9.jpg",
  "/images/gallery/gallery10.jpg",

];

export const about = 
    {

        description: `${barbershopInfo.name} is your Personal Barbershop, based in ${barbershopInfo.city}. We are specialized in all types of men's haircuts and we do our best to please our customers. With the Style you desire by a consultation that fits your lifestyle, ${barbershopInfo.xp} delivering a great result so they feel better when they walk out my door.
        `,
        address: barbershopInfo.address,
    }
;





