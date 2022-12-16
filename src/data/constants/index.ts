export const barbershopInfo = {
  name: "Shane’s Classic Barbershop", 
  city: 'based in Nashville- Tennessee',
  xp: `I always try to show customers my love for Puerto Rico, my roots are part of my history, and working in Orlando, I can show other people where I came from and where I learned to do what I love! Always with God first of all and giving the best for our customers,`,
  representing: `Bringing to Nashville the most licensed and professional work possible. This is what makes Shane’s Classic Barbershop a different and a special place. Enjoy our always clean and professional barber shop environment.
  `, 
  address: '2746 Old Lebanon Rd, Nashville, TN 37214',
  
  label: 'Shane’sClassicBarbershop',
  phone:`
  (615) 730-5616`,
     miniAgenda: `Mon-Sat 	09:00am-6:00pm`,
     email: ` `,
     facebook: `https://www.facebook.com/shanesclassicbarbershop/`,
     instagram: `https://www.instagram.com/shanesclassicbarbershop/`,
     latitude: 36.16809946920114,
     longitude: -86.66400059196576,
  copyright: 'Shane’sClassicBarbershop © 2022',
};

export const hero = 'The most incredible haircuts in town'
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
    name: "Shane’s Classic Barbershop",
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
    name: "Shane’s Classic Barbershop",
    text: "text-white font-light",
    border: "border-white",
  },
};

export const services =  [
  {
      id:1, 
      name: 'Classic Cut', 
      price: '30', 
      description: 'Includes a cut and style of your choosing and a straight razor shave on the back of the neck.'
  },

  {
      id:2, 
      name: 'Classic cut with beard trim', 
      price: '35', 
      description: 'Classic Cut with single guard (one length all over) beard trim and line up.'
  },

  {
      id:3, 
      name: 'Beard Trim', 
      price: '10', 
      description: 'A single guard (one length all over) beard and mustache trim.'
  },

  {
      id:4, 
      name: "Classic cut with straight razor shave", 
      price: '60', 
      description: "Includes a classic cut with a hot lather straight razor shave." 
  },

 
]; 

export const theEstablishment = 
  `The ${barbershopInfo.name} is a place decorated in our own way and always with good music, ${barbershopInfo.representing}. Besides a great haircut, at ${barbershopInfo.name} you can enjoy a place where men can go to be our friends. We want them to feel comfortable here. So come get a haircut and a cold one at ${barbershopInfo.name}!`;


export const workingHours = {
  Monday: `09:00am ⟹ 7:00pm`,
  Tuesday: "09:00am ⟹ 7:00pm",
  Wednesday: "09:00am ⟹ 6:00pm",
  Thursday: "09:00am ⟹ 7:00pm",
  Friday: "09:00am ⟹ 7:00pm",
  Saturday: "08:00am ⟹ 4:00pm",
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

];

export const about = 
    {

        description: `${barbershopInfo.name} is your Personal Barbershop, based in ${barbershopInfo.city}. We are specialized in all types of men's haircuts and we do our best to please our customers. With the Style you desire by a consultation that fits your lifestyle, ${barbershopInfo.xp} delivering a great result so they feel better when they walk out my door.`,
        address: barbershopInfo.address,
    }
;



