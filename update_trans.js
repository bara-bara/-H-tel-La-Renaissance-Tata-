const fs = require("fs");
const { translations } = require("./src/data/translations.ts");

// Enhance Arabic
translations.ar.nav.discover = "اكتشف طاطا";
translations.ar.nav.book = "احجز الآن";
translations.ar.hero.cta = "احجز الآن";
translations.ar.hero.whatsapp = "تواصل عبر واتساب";
translations.ar.rooms.checkAvailability = "تحقق من التوفر والأسعار";

translations.ar.gallery.filters = {
  all: "جميع الصور",
  rooms: "الغرف",
  hotel: "الفندق والفناء",
  restaurant: "المطعم",
  common: "البهو والمرافق"
};

translations.ar.discover = {
  eyebrow: "اكتشف طاطا والمنطقة",
  title: "واحة الجنوب المغربي الساحرة وعاصمة الأطلس الصغير",
  subtitle: "تتميز طاطا بطبيعتها الصحراوية الخلابة وواحاتها النخيلية الخضراء وتاريخها العريق الممتد عبر القرون.",
  items: [
    {
      title: "واحة ونخيل طاطا",
      desc: "واحة ممتدة تضم آلاف أشجار النخيل الباسقة، ونظام ري تقليدي بديع (الخطارات والسواقي) يمنح الزائر شعوراً استثنائياً بالسكينة والانتعاش."
    },
    {
      title: "القصبات والقرى الطينية التاريخية",
      desc: "قصبات أثرية شامخة ومبانٍ طينية عريقة كقصبة أكادير لهنا وقرى ديد وتزونين، تجسد تراث القوافل التجارية التاريخية عبر الصحراء."
    },
    {
      title: "النقوش الصخرية الأثرية",
      desc: "مواقع أثرية مفتوحة في محيط طاطا تحتوي على نقوش ورسومات صخرية تعود لآلاف السنين قبل الميلاد، وتوثق حياة الإنسان وحيوانات ما قبل التاريخ."
    },
    {
      title: "جبال الأطلس الصغير ومسارات 4x4",
      desc: "تضاريس جبلية وردية مذهلة، ومسارات خلابة تربط طاطا بتافراوت وإيغرم وفم زكيد ومحاميد الغزلان، وجهة مفضلة لعشاق المغامرة والهدوء."
    }
  ],
  stayNote: "يقع فندق لا رينيسانس في قلب طاطا على بُعد 900 متر فقط من مركز المدينة، ليكون محطتكم المريحة والمثالية لاستكشاف روعة هذه المنطقة الأصيلة."
};

translations.ar.ctaBanner = {
  eyebrow: "إقامة مريحة في قلب طاطا",
  title: "هل تخطط لزيارة طاطا قريباً؟",
  subtitle: "احجز غرفتك مباشرة عبر Booking.com أو تواصل معنا عبر واتساب للاستفادة من أفضل الأسعار والخدمات الشخصية.",
  bookBtn: "احجز غرفتك الآن",
  whatsappBtn: "تواصل عبر واتساب"
};

// Enhance French
translations.fr.nav.discover = "Découvrir Tata";
translations.fr.nav.book = "RÉSERVER";
translations.fr.hero.cta = "Book Now — Réserver";
translations.fr.hero.whatsapp = "Contact on WhatsApp";
translations.fr.rooms.checkAvailability = "Vérifier la disponibilité & tarifs";

translations.fr.gallery.filters = {
  all: "Toutes les photos",
  rooms: "Chambres",
  hotel: "Hôtel & Patio",
  restaurant: "Restaurant",
  common: "Espaces communs"
};

translations.fr.discover = {
  eyebrow: "Découvrir Tata & sa région",
  title: "L'oasis secrète du Sud et des montagnes de l'Anti-Atlas",
  subtitle: "Aux confins du Sahara et des crêtes roses de l'Anti-Atlas, Tata dévoile une nature préservée et un patrimoine millénaire.",
  items: [
    {
      title: "La Palmeraie de Tata & les Khettaras",
      desc: "Une oasis luxuriante de palmiers dattiers irriguée par d'ingénieux canaux traditionnels, offrant fraîcheur et sérénité après la route désertique."
    },
    {
      title: "Ksour & Kasbahs de terre séculaires",
      desc: "Des forteresses d'argile impressionnantes comme Agadir Lehana, témoins du grand passé caravanier transsaharien reliant l'Afrique subsaharienne au Nord."
    },
    {
      title: "Gravures rupestres préhistoriques",
      desc: "Des sites archéologiques uniques à ciel ouvert abritant des pétroglyphes millénaires gravés par les premiers peuples du Sud marocain."
    },
    {
      title: "L'Anti-Atlas & circuits 4x4",
      desc: "Des panoramas lunaires et canyons sculptés menant vers Tafraout, Igherm ou Foum Zguid, paradis des voyageurs indépendants et des motards."
    }
  ],
  stayNote: "Idéalement situé au 9 Avenue des F.A.R à 900 m du centre-ville, l'Hôtel La Renaissance est votre camp de base chaleureux et sécurisé pour explorer la province de Tata."
};

translations.fr.ctaBanner = {
  eyebrow: "Hospitalité depuis 1982",
  title: "Préparez votre séjour à Tata dès aujourd'hui",
  subtitle: "Bénéficiez de la réservation instantanée sur Booking.com ou échangez directement avec notre équipe sur WhatsApp.",
  bookBtn: "Réserver votre séjour",
  whatsappBtn: "Écrire sur WhatsApp"
};

// Enhance English
translations.en.nav.discover = "Discover Tata";
translations.en.nav.book = "BOOK NOW";
translations.en.hero.cta = "Book Now";
translations.en.hero.whatsapp = "Contact on WhatsApp";
translations.en.rooms.checkAvailability = "Check availability & price";

translations.en.gallery.filters = {
  all: "All Photos",
  rooms: "Rooms",
  hotel: "Hotel & Patio",
  restaurant: "Restaurant",
  common: "Common Areas"
};

translations.en.discover = {
  eyebrow: "Discover Tata & the Region",
  title: "The Enchanting Oasis of Southern Morocco & Anti-Atlas",
  subtitle: "At the crossroads of pink granite mountain peaks and the northern Sahara, Tata offers breathtaking vistas and centuries of authentic heritage.",
  items: [
    {
      title: "Tata Oasis & Ancient Irrigation",
      desc: "A sprawling emerald oasis with thousands of date palms, nourished by ancestral subterranean water channels (foggara and khettara)."
    },
    {
      title: "Historic Earthen Kasbahs",
      desc: "Centuries-old fortified villages such as Agadir Lehana, built from rammed earth and standing as sentinels of ancient trans-Saharan trade routes."
    },
    {
      title: "Prehistoric Rock Petroglyphs",
      desc: "Remarkable open-air archaeological sites featuring petroglyphs carved into stone millennia ago depicting wild fauna and early hunters."
    },
    {
      title: "Anti-Atlas Peaks & 4x4 Trails",
      desc: "Dramatic gorges, pink granite mountains, and famous expedition tracks heading to Tafraout, Igherm, and the desert of Foum Zguid."
    }
  ],
  stayNote: "Located conveniently at 9 Avenue des F.A.R, just 900 meters from Tata town center, Hôtel La Renaissance is your restful oasis retreat."
};

translations.en.ctaBanner = {
  eyebrow: "A Warm Moroccan Welcome",
  title: "Ready to Experience Tata, Morocco?",
  subtitle: "Book your room directly on Booking.com for instant confirmation, or message our team directly on WhatsApp for special requests.",
  bookBtn: "Book Your Room",
  whatsappBtn: "Chat on WhatsApp"
};

const fileContent = 'export type Language = "ar" | "fr" | "en";\n\nexport const translations = ' + JSON.stringify(translations, null, 2) + " as const;\n\nexport type TranslationsType = typeof translations.fr;\n";
fs.writeFileSync("./src/data/translations.ts", fileContent);
console.log("Successfully generated enhanced src/data/translations.ts");
