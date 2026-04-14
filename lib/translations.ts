export type Language = "hu" | "en" | "de";

export const translations = {
  hu: {
    // Navigation
    nav: {
      home: "Kezdőlap",
      about: "Rólunk",
      services: "Szolgáltatások",
      contact: "Kapcsolat",
    },

    // Hero
    hero: {
      headline: "Logisztika, amiben bízhat.",
      subheadline:
        "Komplett fuvarozási megoldások Magyarországon és Európa-szerte.",
      ctaPrimary: "Ajánlatot kérek",
      ctaSecondary: "Szolgáltatásaink",
      stats: [
        { value: "15+", label: "Ország" },
        { value: "10+", label: "Év tapasztalat" },
        { value: "24/7", label: "Elérhetőség" },
      ],
    },

    // Services
    services: {
      sectionLabel: "Amit kínálunk",
      title: "Szolgáltatásaink",
      subtitle:
        "Teljes körű logisztikai megoldásokat nyújtunk vállalkozása számára – a határokon átívelő fuvarozástól a raktározásig.",
      items: [
        {
          title: "Nemzetközi szállítmányozás",
          description:
            "Teljes körű nemzetközi fuvarozási szolgáltatások Európa-szerte. Megbízható partnerkapcsolataink révén az Ön áruja időben és biztonságban érkezik meg.",
        },
        {
          title: "ADR szállítás",
          description:
            "Veszélyes áruk biztonságos és jogszabálynak megfelelő szállítása tapasztalt, ADR-minősített sofőreinkkel és felszerelt járműveinkkel.",
        },
        {
          title: "Belföldi szállítmányozás",
          description:
            "Gyors és megbízható belföldi fuvarozás Magyarország egész területén. Rugalmas ütemezéssel, versenyképes árakon.",
        },
        {
          title: "Raktározás",
          description:
            "Biztonságos raktározási megoldások rövid- és hosszútávra. Debreceni raktárbázisunkból az Ön igényeihez igazítva.",
        },
        {
          title: "Szállítmánybiztosítás ügyintézés",
          description:
            "Teljes körű biztosítási ügyintézés az Ön szállítmányához. Gondoskodunk arról, hogy áruja minden körülmények között védett legyen.",
        },
      ],
    },

    // Why Us
    whyUs: {
      sectionLabel: "Miért mi?",
      title: "Értékeink, amelyekre büszkék vagyunk",
      subtitle:
        "Ügyfeleink megelégedettsége és az áruk biztonságos célba juttatása áll munkánk középpontjában.",
      items: [
        {
          title: "Megbízhatóság",
          description:
            "Minden megbízatást maradéktalan szakszerűséggel és pontossággal teljesítünk. Partnereink tudják: amit vállalunk, azt megtartjuk.",
        },
        {
          title: "Átláthatóság",
          description:
            "Nyílt kommunikáció, áttekinthető árazás, valós idejű szállítmánykövetés. Nincs rejtett díj, nincs meglepetés.",
        },
        {
          title: "Folyamatos kapcsolattartás",
          description:
            "Dedikált ügyintézőink a nap 24 órájában elérhetők. Kérdés, probléma vagy frissítés esetén mindig tudja, kihez forduljon.",
        },
      ],
    },

    // Quote Form
    quote: {
      sectionLabel: "Ingyenes ajánlat",
      title: "Kérjen ajánlatot",
      subtitle:
        "Töltse ki az alábbi űrlapot, és munkatársunk 24 órán belül felveszi Önnel a kapcsolatot.",
      fields: {
        name: "Teljes név",
        email: "E-mail cím",
        phone: "Telefonszám",
        from: "Indulási cím / ország",
        to: "Érkezési cím / ország",
        cargo: "Áru típusa",
        weight: "Hozzávetőleges súly (kg)",
        message: "Megjegyzés, különleges igények",
      },
      submit: "Ajánlatot kérek",
      success:
        "Köszönjük megkeresését! Munkatársunk hamarosan felveszi Önnel a kapcsolatot.",
      error: "Kérjük, töltse ki az összes kötelező mezőt.",
      required: "Kötelező mező",
    },

    // About
    about: {
      sectionLabel: "Rólunk",
      title: "Több mint egy évtizede az úton",
      paragraphs: [
        "A Szabó Intersped Kft. 2016-ban alakult azzal a céllal, hogy megbízható, rugalmas és versenyképes árú logisztikai megoldásokat nyújtson magyarországi és európai partnereinek. Debreceni székhelyünkről koordináljuk a fuvarokat egész Európában.",
        "Csapatunk tapasztalt fuvarozási szakemberekből áll, akik ismerik a szakma minden csínját-bínját – a vámügyintézéstől a veszélyes áruk biztonságos szállításáig. Büszkék vagyunk arra, hogy ügyfeleink többsége hosszú távú partnerünkké vált.",
        "Az ADR-minősítés és az EU-konform működés garantálja, hogy szállítmányai minden körülmények között a legmagasabb biztonsági és jogi előírásoknak megfelelően kerülnek kezelésre.",
      ],
      badges: [
        "Engedélyezett fuvarozó",
        "ADR minősített",
        "EU-konform",
        "Biztosított",
      ],
    },

    // Contact / Footer
    contact: {
      title: "Kapcsolat",
      address: "4032 Debrecen, Füredi út 98.",
      phone: "+36 20 330 7360",
      email: "szabointerspedkft@gmail.com",
      contactPerson: "Dr. Kocsis Mariann",
    },

    // Footer
    footer: {
      tagline: "Logisztika, amiben bízhat.",
      copyright: "© 2025 Szabó Intersped Kft. Minden jog fenntartva.",
      taxNumber: "Adószám: 25489006-2-09",
      euVat: "EU ÁFA: HU25489006",
      companyReg: "Cégjegyzékszám: 09-09-027625",
    },
  },

  en: {
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      contact: "Contact",
    },

    hero: {
      // Comma is required: Hero component splits headline on "," for two-line display
      headline: "Logistics, You Can Trust.",
      subheadline:
        "Complete freight solutions across Hungary and throughout Europe.",
      ctaPrimary: "Request a Quote",
      ctaSecondary: "Our Services",
      stats: [
        { value: "15+", label: "Countries Served" },
        { value: "10+", label: "Years Experience" },
        { value: "24/7", label: "Availability" },
      ],
    },

    services: {
      sectionLabel: "What We Offer",
      title: "Our Services",
      subtitle:
        "Comprehensive logistics solutions for your business – from cross-border freight to warehousing.",
      items: [
        {
          title: "International Freight",
          description:
            "Full-service international freight across Europe. Through our trusted partnerships, your cargo arrives on time and in perfect condition.",
        },
        {
          title: "ADR Transport",
          description:
            "Safe and legally compliant transport of hazardous goods by our certified ADR drivers and properly equipped vehicles.",
        },
        {
          title: "Domestic Freight",
          description:
            "Fast and reliable domestic transport throughout Hungary. Flexible scheduling at competitive rates.",
        },
        {
          title: "Warehousing",
          description:
            "Secure short- and long-term storage solutions. Our Debrecen warehouse facility is tailored to your needs.",
        },
        {
          title: "Cargo Insurance",
          description:
            "Full cargo insurance management for your shipments. We ensure your goods are protected under all circumstances.",
        },
      ],
    },

    whyUs: {
      sectionLabel: "Why Us?",
      title: "The Values We Stand Behind",
      subtitle:
        "Customer satisfaction and the safe delivery of goods are at the heart of everything we do.",
      items: [
        {
          title: "Reliability",
          description:
            "Every assignment is fulfilled with full professionalism and punctuality. Our partners know: what we commit to, we deliver.",
        },
        {
          title: "Transparency",
          description:
            "Open communication, clear pricing, real-time shipment tracking. No hidden fees, no surprises.",
        },
        {
          title: "Constant Communication",
          description:
            "Our dedicated account managers are available 24 hours a day. For any question, issue or update – you always know who to call.",
        },
      ],
    },

    quote: {
      sectionLabel: "Free Quote",
      title: "Request a Quote",
      subtitle:
        "Fill in the form below and our team will get back to you within 24 hours.",
      fields: {
        name: "Full Name",
        email: "Email Address",
        phone: "Phone Number",
        from: "Origin Address / Country",
        to: "Destination Address / Country",
        cargo: "Type of Cargo",
        weight: "Approximate Weight (kg)",
        message: "Comments, Special Requirements",
      },
      submit: "Request a Quote",
      success:
        "Thank you for your inquiry! Our team will contact you shortly.",
      error: "Please fill in all required fields.",
      required: "Required",
    },

    about: {
      sectionLabel: "About Us",
      title: "More Than a Decade on the Road",
      paragraphs: [
        "Szabó Intersped Kft. was founded in 2016 with the goal of providing reliable, flexible, and competitively priced logistics solutions for Hungarian and European partners. From our Debrecen headquarters, we coordinate shipments across Europe.",
        "Our team consists of experienced freight professionals who know every aspect of the industry – from customs clearance to the safe transport of hazardous materials. We are proud that the majority of our clients have become long-term partners.",
        "Our ADR certification and EU-compliant operations guarantee that your shipments are handled to the highest safety and legal standards in all circumstances.",
      ],
      badges: [
        "Licensed Carrier",
        "ADR Certified",
        "EU Compliant",
        "Fully Insured",
      ],
    },

    contact: {
      title: "Contact",
      address: "4032 Debrecen, Füredi út 98., Hungary",
      phone: "+36 20 330 7360",
      email: "szabointerspedkft@gmail.com",
      contactPerson: "Dr. Mariann Kocsis",
    },

    footer: {
      tagline: "Logistics You Can Trust.",
      copyright: "© 2025 Szabó Intersped Kft. All rights reserved.",
      taxNumber: "Tax No.: 25489006-2-09",
      euVat: "EU VAT: HU25489006",
      companyReg: "Company Reg.: 09-09-027625",
    },
  },

  de: {
    nav: {
      home: "Startseite",
      about: "Über uns",
      services: "Leistungen",
      contact: "Kontakt",
    },

    hero: {
      // Comma required for two-line Hero split
      headline: "Logistik, der Sie vertrauen können.",
      subheadline:
        "Umfassende Transportlösungen in Ungarn und ganz Europa.",
      ctaPrimary: "Angebot anfragen",
      ctaSecondary: "Unsere Leistungen",
      stats: [
        { value: "15+", label: "Länder" },
        { value: "10+", label: "Jahre Erfahrung" },
        { value: "24/7", label: "Erreichbarkeit" },
      ],
    },

    services: {
      sectionLabel: "Was wir bieten",
      title: "Unsere Leistungen",
      subtitle:
        "Umfassende Logistiklösungen für Ihr Unternehmen – vom grenzüberschreitenden Transport bis zur Lagerhaltung.",
      items: [
        {
          title: "Internationaler Transport",
          description:
            "Vollständige internationale Speditionsdienstleistungen in ganz Europa. Durch unsere vertrauenswürdigen Partnerschaften kommt Ihre Ware pünktlich und in einwandfreiem Zustand an.",
        },
        {
          title: "ADR-Transport",
          description:
            "Sicherer und gesetzeskonformer Transport von Gefahrgütern durch unsere zertifizierten ADR-Fahrer und entsprechend ausgerüstete Fahrzeuge.",
        },
        {
          title: "Inlandstransport",
          description:
            "Schneller und zuverlässiger Transport in ganz Ungarn. Flexibler Zeitplan zu wettbewerbsfähigen Preisen.",
        },
        {
          title: "Lagerhaltung",
          description:
            "Sichere Kurzzeit- und Langzeitlagerlösungen. Unser Lager in Debrecen wird individuell an Ihre Bedürfnisse angepasst.",
        },
        {
          title: "Transportversicherung",
          description:
            "Vollständige Versicherungsverwaltung für Ihre Sendungen. Wir stellen sicher, dass Ihre Güter unter allen Umständen geschützt sind.",
        },
      ],
    },

    whyUs: {
      sectionLabel: "Warum wir?",
      title: "Die Werte, hinter denen wir stehen",
      subtitle:
        "Kundenzufriedenheit und die sichere Lieferung von Gütern stehen im Mittelpunkt unserer Arbeit.",
      items: [
        {
          title: "Zuverlässigkeit",
          description:
            "Jeder Auftrag wird mit vollster Professionalität und Pünktlichkeit erfüllt. Unsere Partner wissen: Was wir zusagen, das halten wir.",
        },
        {
          title: "Transparenz",
          description:
            "Offene Kommunikation, klare Preisgestaltung, Echtzeit-Sendungsverfolgung. Keine versteckten Gebühren, keine Überraschungen.",
        },
        {
          title: "Ständige Kommunikation",
          description:
            "Unsere Kundenbetreuer sind 24 Stunden am Tag erreichbar. Bei Fragen, Problemen oder Updates wissen Sie immer, an wen Sie sich wenden können.",
        },
      ],
    },

    quote: {
      sectionLabel: "Kostenloses Angebot",
      title: "Angebot anfragen",
      subtitle:
        "Füllen Sie das untenstehende Formular aus und wir melden uns innerhalb von 24 Stunden bei Ihnen.",
      fields: {
        name: "Vollständiger Name",
        email: "E-Mail-Adresse",
        phone: "Telefonnummer",
        from: "Abgangsadresse / Land",
        to: "Zieladresse / Land",
        cargo: "Art der Ware",
        weight: "Ungefähres Gewicht (kg)",
        message: "Anmerkungen, besondere Anforderungen",
      },
      submit: "Angebot anfragen",
      success:
        "Vielen Dank für Ihre Anfrage! Unser Team wird sich in Kürze bei Ihnen melden.",
      error: "Bitte füllen Sie alle Pflichtfelder aus.",
      required: "Pflichtfeld",
    },

    about: {
      sectionLabel: "Über uns",
      title: "Mehr als ein Jahrzehnt unterwegs",
      paragraphs: [
        "Szabó Intersped Kft. wurde 2016 gegründet mit dem Ziel, zuverlässige, flexible und wettbewerbsfähige Logistiklösungen für ungarische und europäische Partner anzubieten. Von unserem Hauptsitz in Debrecen aus koordinieren wir Transporte in ganz Europa.",
        "Unser Team besteht aus erfahrenen Speditionsfachleuten, die jeden Aspekt der Branche kennen – von der Zollabwicklung bis zum sicheren Transport von Gefahrgütern. Wir sind stolz darauf, dass die Mehrheit unserer Kunden zu langfristigen Partnern geworden ist.",
        "Unsere ADR-Zertifizierung und der EU-konforme Betrieb gewährleisten, dass Ihre Sendungen unter allen Umständen nach höchsten Sicherheits- und Rechtsstandards behandelt werden.",
      ],
      badges: [
        "Zugelassener Spediteur",
        "ADR-zertifiziert",
        "EU-konform",
        "Vollversichert",
      ],
    },

    contact: {
      title: "Kontakt",
      address: "4032 Debrecen, Füredi út 98., Ungarn",
      phone: "+36 20 330 7360",
      email: "szabointerspedkft@gmail.com",
      contactPerson: "Dr. Mariann Kocsis",
    },

    footer: {
      tagline: "Logistik, der Sie vertrauen können.",
      copyright: "© 2025 Szabó Intersped Kft. Alle Rechte vorbehalten.",
      taxNumber: "Steuernr.: 25489006-2-09",
      euVat: "EU-MwSt.: HU25489006",
      companyReg: "Handelsnr.: 09-09-027625",
    },
  },
} as const;
