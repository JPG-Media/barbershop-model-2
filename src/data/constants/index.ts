export const barbershopInfo = {
  name: "Taperz Barber Shop", 
  city: 'based in Keller-TX, Saginaw-TX and River Oaks-TX',
  xp: `For over 10 years Taperz Barber Shop has been proudly serving the community by offering traditional Barber Shop services in a friendly, modern and upbeat atmosphere. Our skilled Barbers specialize in Fades, Shaves, Modern & Classic Hair Cuts & Styles. We take pride in being Diverse and are confident in working with all hair types and hair textures. We appreciate your business and we look forward to seeing you soon! For your enjoyment we provide complimentary beverages during your service.`,
  representing: `Bringing to Texas the most licensed and professional work possible. This is what makes Taperz a different and a special place. Enjoy our always clean and professional barber shop environment. Relax, and grab a cold on the house.`, 
  address: '801 S. Main Street suite 103 Keller, TX 76248', 
  
  label: 'TaperzBarberShop',
  phone:`999-999-9999`,
  miniAgenda: `Mon-Fri 10:00am-6:30pm`,
  email: `TAPERZBARBERs@gmail.com`,
  facebook: `https://www.facebook.com/taperzbarbershop`,
  instagram: `https://www.instagram.com/taperz_barber_shop`,
  latitude: 32.921326160461625,
  longitude:  -97.25352675888712,
  copyright: 'TaperzBarberShop © 2022',
};

export const hero = 'Friendly, modern and upbeat atmosphere.'
export const hero2 = `For over 10 years Taperz Barber Shop has been proudly serving the community by offering traditional Barber Shop services. `;

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
      name: 'Classic Cut', 
      price: '35', 
      description: 'Relax and grab a beer while your Barber achieves your custom look. Hot lather available upon request.'
  },

  {
      id:2, 
      name: 'Specialty cut', 
      price: '40', 
      description: 'This service requires a little extra time & detail. For example, a skin/bald fade, scissor cut, burst fade, etc. Hot lather available upon request.'
  },

  {
      id:3, 
      name: 'Buzz cut', 
      price: '25', 
      description: 'A low maintenance same length cut all over. Hot lather available upon request.'
  },

  {
      id:4, 
      name: "Young cut", 
      price: '30', 
      description: "An executed haircut achieved with either clippers or shears. Depending on the length and time of the service an adult price may be charged." 
  },
  {
    id: 5,
    name: "Cut & Beard",
    price: "55",
    description: "Combination of a Classic Cut & Beard Detail to achieve the perfect look.",
 
    
  },
  {
    id: 6,
    name: "Cut & Shave",
    price: "60",
    description: "The Ultimate Combination to leave you feeling like a million bucks!",
 
    
  },


 
]; 

export const theEstablishment = 
  `The ${barbershopInfo.name} is a place decorated in my own way and always with good music, ${barbershopInfo.representing}. Besides a great haircut, at ${barbershopInfo.name} you can enjoy a place where men can go to be my friend. I want them to feel comfortable here. So come get a haircut and a cold one at ${barbershopInfo.name}!
  `;


export const workingHours = {
  Monday: `10:00am ⟹ 6:30pm`,
  Tuesday: "10:00am ⟹ 6:30pm",
  Wednesday: "10:00am ⟹ 6:30pm",
  Thursday: "10:00am ⟹ 6:30pm",
  Friday: "10:00am ⟹ 6:30pm",
  Saturday: "09:00am ⟹ 4:30pm",
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
  "/images/gallery/gallery8.jpg",

];

export const about = 
{

    description: `${barbershopInfo.name} is your Personal Barbershop, based in ${barbershopInfo.city}. We are specialized in all types of men's haircuts and we do our best to please our customers. With the Style you desire by a consultation that fits your lifestyle, ${barbershopInfo.xp} delivering a great result so they feel better when they walk out my door.`,
    address: barbershopInfo.address,
}
;





