export const barbershopInfo = {
  name: "Refine Classic Barbershop", 
  city: 'based in Mount Juliet- Tennessee',
  xp: ``,

  representing: `Bringing to Mount Juliet the most licensed and professional work possible. This is what makes Refine Classic Barbershop a different and a special place. Enjoy our always clean and professional barber shop environment.`,
  address: '2231 N. Mount Juliet Rd. Ste 104 Mount Juliet, TN 37122',
  
  label: 'RefineClassicBarbershop',
  phone:`615-288-3484`,
   miniAgenda: `Mon-Fri 	09:00am-7:00pm`,
   email: ` `,
   facebook: `https://www.facebook.com/Refineclassicbarbershop/`,
   instagram: `https://www.instagram.com/refinebarbershop/`,
   latitude: 36.2012185055081,
   longitude: -86.51835162945245,
  copyright: 'RefineClassicBarbershop © 2022',
};

export const hero = 'The most incredible haircuts in town.'
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
    name: "Refine Classic Barbershop",
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
    name: "Refine Classic Barbershop",
    text: "text-white font-light",
    border: "border-white",
  },
};

export const services =  [
  {
      id:1, 
      name: 'Premium Haircut', 
      price: '33', 
      description: 'This cut includes a straight razor on the back of the neck, a hot towel, scalp massage, and shampoo with a custom style.'
  },

  {
      id:2, 
      name: 'Classic Haircut', 
      price: '28', 
      description: 'This cut includes a straight razor on the back of the neck, a hot towel, and a custom style'
  },

  {
      id:3, 
      name: 'Child’s Cut', 
      price: '20', 
      description: 'Kids 12 and under. Each cut includes a hot towel and a custom style.'
  },

  {
      id:4, 
      name: "Buzz Cut", 
      price: '20', 
      description: "1 guard all over. Each cut includes a straight razor on the back of the neck and a hot towel." 
  },
  {
    id: 5,
    name: "Skin Fade",//
    price: "30",//
    description: "This cut includes a straight razor finish and a hot towel.",
    // 
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



