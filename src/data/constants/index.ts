export const barbershopInfo = {
  name: "Next Gen Barbershop", 
  city: 'based in Murfreesboro- Tennessee',
  xp: ``,

  representing: `Bringing to Murfreesboro the most licensed and professional work possible. This is what makes Next Gen Barbershop  a different and a special place. Enjoy our always clean and professional barber shop environment.`,
  address: '2705 Old Fort Pkwy, Murfreesboro, TN 37128',
  
  label: 'Next Gen Barbershop',
  phone:`
  (615) 907-4006`,
    miniAgenda: `Mon-Fri	09:00am-5:45pm`,
    email: `nexgenbarbers@yahoo.com`,
    facebook: ``,
    instagram: `https://www.instagram.com/nexgen_barber_shop/`,
    latitude: 35.84454139734579,
    longitude: -86.44575633193007,
  copyright: 'NextGenBarbershop © 2022',
};

export const hero = 'The most incredible haircuts in town.'
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
    name: "Next Gen Barbershop",
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
    name: "Next Gen Barbershop",
    text: "text-white font-light",
    border: "border-white",
  },
};

export const services =  [
  {
      id:1, 
      name: 'Classic Cut', 
      price: '40', 
      description: 'Basic cut with neck shave. Product and Style included.'
  },

  {
      id:2, 
      name: 'Detailed Cut', 
      price: '30', 
      description: 'Razer fade, hard parts, razor lines, etc. Product and Style included.'
  },

  {
      id:3, 
      name: 'Full Beard Trim', 
      price: '35', 
      description: 'Kids 10 and younger'
  },

  {
      id:4, 
      name: "Edge Up", 
      price: '35', 
      description: "All around the head, face not included" 
  },

 
];

export const theEstablishment = 
  `The ${barbershopInfo.name} is a place decorated in our own way and always with good music, ${barbershopInfo.representing}. Besides a great haircut, at ${barbershopInfo.name} you can enjoy a place where men can go to be our friends. We want them to feel comfortable here. So come get a haircut and a cold one at ${barbershopInfo.name}!`;

export const workingHours = {
  Monday: `09:00am ⟹ 5:45pm`,
  Tuesday: "09:00am ⟹ 5:45pm",
  Wednesday: "09:00am ⟹ 5:45pm",
  Thursday: "09:00am ⟹ 5:45pm",
  Friday: "09:00am ⟹ 5:45pm",
  Saturday: "09:00 ⟹ 2:00pm",
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



