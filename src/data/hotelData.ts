/**
 * Hôtel La Renaissance Tata – Core Data & Configurations
 */

export const hotelInfo = {
  name: "Hôtel La Renaissance Tata",
  arabicName: "فندق لا رينيسانس طاطا",
  phone: "+212528802494",
  phoneLabel: "05 28 80 24 94",
  mobile: "+212630003333",
  mobileLabel: "06 30 00 33 33",
  whatsapp: "https://wa.me/212630003333",
  email: "larenaissance1982@gmail.com",
  address: "9 Avenue des F.A.R, Tata 84000, Maroc",
  city: "Tata",
  country: "Maroc",
  postalCode: "84000",
  coordinates: {
    lat: 29.7497,
    lng: -7.9744,
  },
  bookingUrl: "https://www.booking.com/hotel/ma/la-renaissance-tata.html",
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
  checkin: string;
  checkout: string;
  adults: number;
}): string => {
  return `${hotelInfo.bookingUrl}?checkin=${checkin}&checkout=${checkout}&group_adults=${adults}&no_rooms=1&group_children=0`;
};

export const getAgodaUrl = ({
  checkin,
  checkout,
  adults,
}: {
  checkin: string;
  checkout: string;
  adults: number;
}): string => {
  const los = calcNights(checkin, checkout);
  return `${hotelInfo.agodaUrl}?checkIn=${checkin}&los=${los}&adults=${adults}&rooms=1&children=0&currencyCode=MAD`;
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

export const galleryImages = [
  hotelImages.realEntrance,
  hotelImages.realCourtyard,
  hotelImages.gPhoto1,
  hotelImages.realLobby,
  hotelImages.realRoom,
  hotelImages.realRestaurant,
  hotelImages.realRoom2,
  hotelImages.realDining,
  hotelImages.realHall,
  hotelImages.realBath,
  hotelImages.realSpace,
  hotelImages.realRoom3,
  hotelImages.gPhoto2,
  hotelImages.realAgoda2,
  hotelImages.realAgoda3,
  hotelImages.gPhoto3,
];

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
