/**
 * Hôtel La Renaissance Tata – Core Hotel Data & Official Configuration
 * 
 * Note: All contact details, booking URLs, and media assets are preserved
 * from the confirmed project records.
 */

// PRIMARY DIRECT BOOKING URL
// Booking.com was selected as the premier booking engine for superior trust,
// multilingual support, instant confirmation, and dominant Moroccan market presence.
export const BOOKING_URL = "https://www.booking.com/hotel/ma/la-renaissance-tata.html";

// DIRECT HOTEL CONTACTS
export const WHATSAPP_URL = "https://wa.me/212630003333";
export const PHONE_NUMBER = "+212528802494";
export const PHONE_DISPLAY = "05 28 80 24 94";
export const MOBILE_NUMBER = "+212630003333";
export const MOBILE_DISPLAY = "06 30 00 33 33";
export const EMAIL_ADDRESS = "larenaissance1982@gmail.com";

export const hotelInfo = {
  name: "Hôtel La Renaissance Tata",
  arabicName: "فندق لا رينيسانس طاطا",
  phone: PHONE_NUMBER,
  phoneLabel: PHONE_DISPLAY,
  mobile: MOBILE_NUMBER,
  mobileLabel: MOBILE_DISPLAY,
  whatsapp: WHATSAPP_URL,
  email: EMAIL_ADDRESS,
  address: "9 Avenue des F.A.R, Tata 84000, Maroc",
  addressArabic: "9 شارع القوات المسلحة الملكية، طاطا 84000، المغرب",
  city: "Tata",
  country: "Maroc",
  postalCode: "84000",
  receptionHours: "24/7 (24h/24, 7j/7)",
  coordinates: {
    lat: 29.7497,
    lng: -7.9744,
  },
  bookingUrl: BOOKING_URL,
  agodaUrl: "https://www.agoda.com/hotel-la-renaissance/hotel/tata-ma.html",
  googleUrl: "https://www.google.com/maps/search/?api=1&query=Hotel+La+Renaissance+Tata+Avenue+des+FAR",
  mapEmbed: "https://maps.google.com/maps?q=Hotel%20La%20Renaissance%20Tata%2C%20Avenue%20des%20FAR%2C%20Tata%2C%20Morocco&z=15&output=embed",
};

export const calcNights = (checkin: string, checkout: string): number => {
  const d1 = new Date(checkin).getTime();
  const d2 = new Date(checkout).getTime();
  return Math.max(1, Math.round((d2 - d1) / 86400000));
};

export const getBookingUrl = ({
  checkin,
  checkout,
  adults,
}: {
  checkin?: string;
  checkout?: string;
  adults?: number;
}): string => {
  if (!checkin || !checkout) return BOOKING_URL;
  return `${BOOKING_URL}?checkin=${checkin}&checkout=${checkout}&group_adults=${adults || 2}&no_rooms=1&group_children=0`;
};

export const hotelImages = {
  realEntrance: "https://pix8.agoda.net/hotelImages/35397679/0/b2cdbd66515136a2b7bdb793697eea2f.jpg?ce=0&s=1024x768",
  realCourtyard: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/897133549.jpg?k=c2dfb124b351453e5dd3e751abaeb633eab2e8cd3ae87fa707b07f22c8d6e6cc&o=",
  realRoom: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/897132944.jpg?k=c2834570c66829bf2dccfd2b2cd333cc8dccff61c1dcb40eff2cca88def5a7c9&o=",
  realRoom2: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/850304984.jpg?k=061292703f6dc87a0ba6dfea3e910b9630bfd840b75c7e5f24b9cca91858da36&o=",
  realRoom3: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/850311037.jpg?k=dce262ff0d4af7c6d878d2056ed19cf45ece0c2bc2658e0a4e3d5ecb6e8b0a3e&o=",
  realBath: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/850310806.jpg?k=20cd52a755ba3c7afd8a7f72417493dfdd6eaf7dc23774afefbe4d346c442498&o=",
  realRestaurant: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/897133412.jpg?k=d1be4989a0ae9b5344a75ad9507e77044aae232d17371555e5de311f6ad2d175&o=",
  realDining: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/400287114.jpg?k=23d93619d37d6fe3d2f8f8ffbeafd2c6fbac857d6eab5c5412f291e2e57861b0&o=",
  realLobby: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/897133394.jpg?k=5e8d13be0fa6a4e012e64dcb0913f58d63a5ed3a6a7b8a14f192fdeb4e9bf696&o=",
  realHall: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/897133383.jpg?k=d9cf7b315260153f0b33ad58ba90c6d8f29551a4ec64ba6d3cdf01dce1bb94d2&o=",
  realSpace: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/897133441.jpg?k=0627974c14efeb5de1d0cd71caff50ab026d97eeb62a94f44d4996c9759b1391&o=",
  realAgoda2: "https://pix8.agoda.net/hotelImages/35397679/0/061037891b439e90a2ec906d0b517fa8.jpg?ce=0&s=1024x768",
  realAgoda3: "https://pix8.agoda.net/hotelImages/35397679/0/de80f88f3fcfcd073153ce390428b591.jpg?ce=0&s=1024x768",
  gPhoto1: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkcMC-uywLfLNzM-Cl0e_Du5p80L8PPlCsCaCixqVX5H4DASfbz1gWZpK5K_oRjqFM3kNOTQl6rJpXQzyDnSkDzH1P39j1vAi7epm8-fp72f_dgIbR5Lf-LB9HEA0gZZbiGqivEfgHtKPv9=w800-h600-k-no",
  gPhoto2: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkghL6DVnrfOgnyDPuCX3ENpiHShxannyel3uDCzT7NGbnhJdjW37TzJPfjAcLAwwZ2lNULOU8K_ZhP6wmSUn0okImVFgMNRDvL7L1H_ojMShTrJ8X2diaZhKx7cDFzJdbXtjD6DsYb314=w800-h600-k-no",
  gPhoto3: "https://lh4.googleusercontent.com/proxy/nt5e7Y4v6nSV85MQEsNM4Lmhq9rCRNmE5RAzDL5tRtN546J1RTf1uNUTla8h0JCYySKCDOCYNciZIa-36Jqc20IP2yxlvbv4ybXVsNHZIgkNJluPlFMhen5UaojC88cvL22GZHdr3Hb_xD2bL5UOwmyS9oi0v6g=w800-h600-k-no",
};

export interface RoomItem {
  id: string;
  img: string;
  gallery: string;
  price: number;
  guests: number;
  amenities: Array<"wifi" | "ac" | "tv" | "bath" | "breakfast" | "parking" | "family">;
}

export const roomsData: RoomItem[] = [
  {
    id: "double",
    img: hotelImages.realRoom,
    gallery: hotelImages.realRoom3,
    price: 753,
    guests: 2,
    amenities: ["wifi", "ac", "tv", "bath", "breakfast", "parking"],
  },
  {
    id: "twin",
    img: hotelImages.realRoom2,
    gallery: hotelImages.realAgoda2,
    price: 753,
    guests: 2,
    amenities: ["wifi", "ac", "tv", "bath", "breakfast", "parking"],
  },
  {
    id: "triple",
    img: hotelImages.realRoom3,
    gallery: hotelImages.realAgoda3,
    price: 850,
    guests: 3,
    amenities: ["wifi", "ac", "tv", "bath", "family", "breakfast"],
  },
  {
    id: "family",
    img: hotelImages.realAgoda2,
    gallery: hotelImages.realRoom2,
    price: 818,
    guests: 3,
    amenities: ["wifi", "ac", "tv", "bath", "family", "breakfast"],
  },
];

export type GalleryCategory = "all" | "rooms" | "hotel" | "restaurant" | "common";

export interface CategorizedImage {
  src: string;
  category: "rooms" | "hotel" | "restaurant" | "common";
  titleFr: string;
  titleAr: string;
  titleEn: string;
}

export const categorizedGalleryImages: CategorizedImage[] = [
  {
    src: hotelImages.realCourtyard,
    category: "hotel",
    titleFr: "Patio verdoyant & architecture",
    titleAr: "الفناء الداخلي والنخيل",
    titleEn: "Green courtyard & architecture",
  },
  {
    src: hotelImages.realEntrance,
    category: "hotel",
    titleFr: "Entrée principale de l'hôtel",
    titleAr: "المدخل الرئيسي للفندق",
    titleEn: "Main hotel entrance",
  },
  {
    src: hotelImages.realRoom,
    category: "rooms",
    titleFr: "Chambre Double Confort",
    titleAr: "غرفة مزدوجة مريحة",
    titleEn: "Comfort Double Room",
  },
  {
    src: hotelImages.realRestaurant,
    category: "restaurant",
    titleFr: "Salle de restaurant marocain",
    titleAr: "صالة المطعم المغربي",
    titleEn: "Moroccan Restaurant dining area",
  },
  {
    src: hotelImages.realRoom2,
    category: "rooms",
    titleFr: "Chambre Double Twin",
    titleAr: "غرفة بسريرين منفصلين",
    titleEn: "Twin Room setup",
  },
  {
    src: hotelImages.realLobby,
    category: "common",
    titleFr: "Espace accueil & réception 24/7",
    titleAr: "مكتب الاستقبال 24/7 والبهو",
    titleEn: "24/7 Front desk & lobby",
  },
  {
    src: hotelImages.realHall,
    category: "common",
    titleFr: "Grande salle d'événements",
    titleAr: "قاعة المناسبات والمؤتمرات",
    titleEn: "Grand celebration & event hall",
  },
  {
    src: hotelImages.realDining,
    category: "restaurant",
    titleFr: "Buffet & gastronomie marocaine",
    titleAr: "بوفيه المأكولات المغربية الأصيلة",
    titleEn: "Buffet & Moroccan gastronomy",
  },
  {
    src: hotelImages.realBath,
    category: "rooms",
    titleFr: "Salle de bain privée",
    titleAr: "حمام خاص مجهز",
    titleEn: "Ensuite private bathroom",
  },
  {
    src: hotelImages.realSpace,
    category: "common",
    titleFr: "Détente & patio ombragé",
    titleAr: "فضاء الاسترخاء التراثي",
    titleEn: "Relaxation lounge & shaded patio",
  },
  {
    src: hotelImages.realRoom3,
    category: "rooms",
    titleFr: "Chambre Triple spacieuse",
    titleAr: "غرفة ثلاثية فسيحة",
    titleEn: "Spacious Triple Room",
  },
  {
    src: hotelImages.gPhoto1,
    category: "hotel",
    titleFr: "Façade & terrasse ensoleillée",
    titleAr: "واجهة الفندق والتراس المشمس",
    titleEn: "Sunny exterior terrace & facade",
  },
  {
    src: hotelImages.realAgoda2,
    category: "rooms",
    titleFr: "Chambre Familiale Confort",
    titleAr: "غرفة عائلية مريحة",
    titleEn: "Family comfort room",
  },
  {
    src: hotelImages.realAgoda3,
    category: "rooms",
    titleFr: "Literie soignée & calme",
    titleAr: "أسرّة مريحة وأجواء هادئة",
    titleEn: "Cozy bedding & peaceful ambiance",
  },
  {
    src: hotelImages.gPhoto2,
    category: "hotel",
    titleFr: "Vue sur les montagnes de l'Anti-Atlas",
    titleAr: "إطلالة على جبال الأطلس الصغير",
    titleEn: "View towards the Anti-Atlas mountains",
  },
  {
    src: hotelImages.gPhoto3,
    category: "hotel",
    titleFr: "Détails architecturaux de l'oasis",
    titleAr: "تفاصيل معمارية من واحة طاطا",
    titleEn: "Oasis architectural details",
  },
];

export const galleryImages = categorizedGalleryImages.map((item) => item.src);

export const heroSlides = [
  hotelImages.realCourtyard,
  hotelImages.realEntrance,
  hotelImages.realHall,
];

export const reviewsBreakdownData = [
  { key: "staff", score: 8.5 },
  { key: "location", score: 8.4 },
  { key: "comfort", score: 8.1 },
  { key: "clean", score: 7.9 },
  { key: "wifi", score: 7.5 },
  { key: "value", score: 7.4 },
  { key: "facilities", score: 7.4 },
] as const;
