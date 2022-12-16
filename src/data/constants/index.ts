export const barbershopInfo = {
  name: "Xquisite Blendz", 
  city: 'based in Abilene-TX',
  xp: ``,
  representing: `Bringing to Abilene the most licensed and professional work possible. This is what makes Xquisite Blendz a different and a special place. Enjoy our always clean and professional barber shop environment.`, 
  address: '3630 North 6th Street Abilene, TX 79603',
  
  label: 'Xquisite Blendz',
  phone:`(325)-670-0479`,
  miniAgenda: `Mon-Sat 10:00am-7:00pm`,
  email: ``,
  facebook: `https://www.facebook.com/xbbabilene`,
  instagram: `https://www.instagram.com/xquisite_blendz_barbershop/`,
  latitude: 32.4555300327042,
  longitude: -99.76696582883558,
  copyright: 'Xquisite Blendz © 2022',
};

export const hero = 'Life is better when you’re looking good.'
export const hero2 = `Our job is to make you look your best.`;

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
    name: "Xquisite Blendz",
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
    name: "Xquisite Blendz",
    text: "text-white font-light",
    border: "border-white",
  },
};

export const services =  [
  {
      id:1, 
      name: 'Skin Fade', 
      price: '40', 
      description: 'Any type of haircut & style you desire, Lathered neck & straight razor edging, eyebrows & ears maintenance,relax and enjoy over 20 years of experience comes to work! Beard trim $5..'
  },

  {
      id:2, 
      name: 'Haircut & Style', 
      price: '30', 
      description: 'Any type of haircut & style you desire, Lathered neck & straight razor edging, eyebrows & ears maintenance, blow-dry and style, free cold beer or beverage. Sit back, relax and enjoy over 20 years of experience coming to work! Beard trim $5.'
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
      description: "Woman's Haircut( $35+) Color ($65+) Blow Dry ($45) Hair Extensions ($400+)" 
  },



 
]; 

export const theEstablishment = 
  `The ${barbershopInfo.name} is a place decorated in my own way and always with good music, ${barbershopInfo.representing}. Besides a great haircut, at ${barbershopInfo.name} you can enjoy a place where men can go to be my friend. I want them to feel comfortable here. So come get a haircut and a cold one at ${barbershopInfo.name}!  `;



export const workingHours = {
  Monday: `10:00am ⟹ 6:00pm`,
  Tuesday: "10:00am ⟹ 7:00pm",
  Wednesday: "10:00am ⟹ 7:00pm",
  Thursday: "10:00am ⟹ 7:00pm",
  Friday: "10:00am ⟹ 7:00pm",
  Saturday: "10:00am ⟹ 7:00pm",
  Sunday: "12:00pm ⟹ 4:00pm",
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


];

export const about = 
    {

        description: `${barbershopInfo.name} is your Personal Barbershop, based in ${barbershopInfo.city}. We are specialized in all types of men's haircuts and we do our best to please our customers. With the Style you desire by a consultation that fits your lifestyle, ${barbershopInfo.xp} delivering a great result so they feel better when they walk out my door.
        `,
        address: barbershopInfo.address,
    }
;





