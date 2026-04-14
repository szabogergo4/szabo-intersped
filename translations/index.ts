export type Language = 'hu' | 'en';

export const translations = {
  hu: {
    nav: {
      home: 'Kezdőlap',
      about: 'Rólunk',
      services: 'Szolgáltatások',
      contact: 'Kapcsolat',
    },
    hero: {
      headline: 'Logisztika,\namiben bízhat.',
      subheadline: 'Komplett fuvarozási megoldások Magyarországon és Európa-szerte.',
      cta_primary: 'Ajánlatot kérek',
      cta_secondary: 'Szolgáltatásaink',
      stats: [
        { value: '500+', label: 'Teljesített fuvar' },
        { value: '15+', label: 'Ország' },
        { value: '10+', label: 'Év tapasztalat' },
        { value: '24/7', label: 'Elérhetőség' },
      ],
    },
    services: {
      title: 'Szolgáltatásaink',
      subtitle: 'Teljes körű logisztikai megoldások az Ön igényeire szabva',
      items: [
        {
          title: 'Nemzetközi szállítmányozás',
          description:
            'Megbízható és hatékony áruszállítás az egész Európában. Partnerkapcsolataink révén gyors és biztonságos szállítást garantálunk a kontinens bármely pontjára.',
        },
        {
          title: 'ADR szállítás',
          description:
            'Veszélyes áruk szállítása a szigorú ADR előírásoknak megfelelően. Képzett sofőreink és felszerelt járműveink biztosítják a legmagasabb szintű biztonságot.',
        },
        {
          title: 'Belföldi szállítmányozás',
          description:
            'Gyors és megbízható belső szállítás Magyarország egész területén. Rugalmas ütemezéssel és versenyképes árakon oldjuk meg fuvarozási igényeit.',
        },
        {
          title: 'Raktározás',
          description:
            'Modern raktárkapacitás az Ön árujának biztonságos tárolásához. Rugalmas bérleti konstrukciók és teljes körű készletkezelés.',
        },
        {
          title: 'Szállítmánybiztosítás ügyintézés',
          description:
            'Teljes körű biztosítási ügyintézés az Ön szállítmányai részére. Megkötjük a szükséges biztosításokat és gondoskodunk a kárrendezésről.',
        },
      ],
    },
    whyUs: {
      title: 'Miért válasszon minket?',
      subtitle: 'Több mint 10 éves tapasztalattal állunk ügyfeleink oldalán',
      items: [
        {
          title: 'Megbízhatóság',
          description:
            'Pontosan és határidőre teljesítjük vállalásainkat. Ügyfeleink visszatérnek, mert tudják: nálunk a szó kötelez.',
        },
        {
          title: 'Átláthatóság',
          description:
            'Nincs rejtett díj, nincs meglepetés. Ajánlatunk tartalmaz minden költséget, amellyel az ügyfelünknek számolnia kell.',
        },
        {
          title: 'Folyamatos kapcsolattartás',
          description:
            'A szállítás minden fázisában elérhetők vagyunk. Valós idejű tájékoztatást nyújtunk a szállítmány aktuális állapotáról.',
        },
      ],
    },
    quote: {
      title: 'Kérjen árajánlatot',
      subtitle:
        'Töltse ki az alábbi űrlapot, és 24 órán belül felvesszük Önnel a kapcsolatot.',
      fields: {
        name: 'Teljes név',
        email: 'Email cím',
        phone: 'Telefonszám',
        from: 'Indulási cím',
        to: 'Érkezési cím',
        cargo: 'Áru típusa',
        weight: 'Hozzávetőleges súly (kg)',
        notes: 'Megjegyzés (opcionális)',
      },
      submit: 'Ajánlatot kérek',
      success_title: 'Köszönjük megkeresését!',
      success_body:
        'Üzenetét megkaptuk, és 24 órán belül felvesszük Önnel a kapcsolatot.',
      error_required: 'Kötelező mező',
      error_email: 'Érvényes email cím szükséges',
    },
    about: {
      title: 'Rólunk',
      story_title: 'Több mint 10 éve a megbízható szállítmányozás szolgálatában',
      story:
        'A Szabó Intersped Kft. 2014-ben alakult Debrecenben, azzal a céllal, hogy megbízható és professzionális fuvarozási megoldásokat kínáljon hazai és európai ügyfeleinek. Cégünk az évek során folyamatosan fejlődött: bővítettük partnerkapcsolatainkat és szolgáltatásainkat, hogy az ügyfelek igényeinek minden területen meg tudjunk felelni.',
      story2:
        'Ma büszkén mondhatjuk, hogy Magyarország megbízható logisztikai partnerei közé tartozunk. ADR minősítéssel rendelkező sofőreink, tapasztalt csapatunk és személyre szabott kiszolgálásunk garantálja, hogy szállítmánya biztonságban megérkezzen a célállomásra.',
      badges: ['Licencelt szállítmányozó', 'ADR tanúsított', 'Biztosított szállítás'],
    },
    contact: {
      title: 'Kapcsolat',
      address_label: 'Cím',
      phone_label: 'Telefon',
      email_label: 'Email',
      tax_label: 'Adószám',
      eu_vat_label: 'EU adószám',
      reg_label: 'Cégjegyzékszám',
      contact_person_label: 'Kapcsolattartó',
      contact_person: 'Dr. Kocsis Mariann',
      map_title: 'Térképen',
    },
    footer: {
      tagline: 'Megbízható logisztikai partner Magyarországon és Európa-szerte.',
      copyright: '© 2025 Szabó Intersped Kft. Minden jog fenntartva.',
      nav_title: 'Navigáció',
      contact_title: 'Kapcsolat',
      services_title: 'Szolgáltatások',
    },
  },

  en: {
    nav: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      contact: 'Contact',
    },
    hero: {
      headline: 'Logistics\nYou Can Trust.',
      subheadline: 'Complete freight solutions across Hungary and throughout Europe.',
      cta_primary: 'Request a Quote',
      cta_secondary: 'Our Services',
      stats: [
        { value: '500+', label: 'Completed Shipments' },
        { value: '15+', label: 'Countries' },
        { value: '10+', label: 'Years Experience' },
        { value: '24/7', label: 'Availability' },
      ],
    },
    services: {
      title: 'Our Services',
      subtitle: 'Comprehensive logistics solutions tailored to your needs',
      items: [
        {
          title: 'International Freight',
          description:
            'Reliable and efficient cargo transport across Europe. Through our partner network, we guarantee fast and secure delivery to any point on the continent.',
        },
        {
          title: 'ADR Transport',
          description:
            'Hazardous goods transport in strict compliance with ADR regulations. Our certified drivers and equipped vehicles ensure the highest level of safety.',
        },
        {
          title: 'Domestic Freight',
          description:
            'Fast and reliable freight across Hungary. We handle your logistics needs with flexible scheduling and competitive pricing.',
        },
        {
          title: 'Warehousing',
          description:
            'Modern warehouse capacity for the safe storage of your goods. Flexible rental arrangements and full inventory management services.',
        },
        {
          title: 'Cargo Insurance',
          description:
            'Full insurance handling for your shipments. We arrange the necessary policies and manage the claims process on your behalf.',
        },
      ],
    },
    whyUs: {
      title: 'Why Choose Us?',
      subtitle: 'Over 10 years of experience standing by our clients',
      items: [
        {
          title: 'Reliability',
          description:
            'We deliver on time, every time. Our clients return because they know our word is our bond.',
        },
        {
          title: 'Transparency',
          description:
            'No hidden fees, no surprises. Our quotes include every cost you need to account for.',
        },
        {
          title: 'Constant Communication',
          description:
            'We are available at every stage of transport. We provide real-time updates on shipment status.',
        },
      ],
    },
    quote: {
      title: 'Request a Quote',
      subtitle: 'Fill in the form below and we will contact you within 24 hours.',
      fields: {
        name: 'Full Name',
        email: 'Email Address',
        phone: 'Phone Number',
        from: 'Pickup Address',
        to: 'Delivery Address',
        cargo: 'Type of Cargo',
        weight: 'Approximate Weight (kg)',
        notes: 'Additional Notes (optional)',
      },
      submit: 'Request Quote',
      success_title: 'Thank you for your inquiry!',
      success_body: 'We have received your message and will contact you within 24 hours.',
      error_required: 'Required field',
      error_email: 'A valid email address is required',
    },
    about: {
      title: 'About Us',
      story_title: 'Over 10 years of reliable freight services',
      story:
        'Szabó Intersped Kft. was founded in 2014 in Debrecen, Hungary, with the mission of providing reliable and professional freight solutions to domestic and European clients. Over the years, we have continuously grown, expanding our partner network and service portfolio to meet every client need.',
      story2:
        "Today, we are proud to be among Hungary's trusted logistics partners. Our ADR-certified drivers, experienced team, and personalised service guarantee that your shipment arrives safely at its destination.",
      badges: ['Licensed Freight Forwarder', 'ADR Certified', 'Insured Transport'],
    },
    contact: {
      title: 'Contact',
      address_label: 'Address',
      phone_label: 'Phone',
      email_label: 'Email',
      tax_label: 'Tax Number',
      eu_vat_label: 'EU VAT Number',
      reg_label: 'Company Reg.',
      contact_person_label: 'Contact Person',
      contact_person: 'Dr. Mariann Kocsis',
      map_title: 'Find Us',
    },
    footer: {
      tagline: 'A reliable logistics partner across Hungary and Europe.',
      copyright: '© 2025 Szabó Intersped Kft. All rights reserved.',
      nav_title: 'Navigation',
      contact_title: 'Contact',
      services_title: 'Services',
    },
  },
} as const;

export type Translations = (typeof translations)['hu'];
