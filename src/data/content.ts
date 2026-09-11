/**
 * Všetky texty stránky. Nastavenia webu (logo, GTM, kontakt…) sú v site.ts.
 */

export const seo = {
  titulok: 'Ponuka vozidiel v BEGAM Trnava',
  popis:
    'Hľadáte nové vozidlo bez zbytočných starostí? BEGAM Trnava vám ponúka širokú ponuku vozidiel, profesionálne poradenstvo a férový prístup pri výbere auta pre každodenné jazdy aj dlhé cesty.',
};

export const hero = {
  //   = nezalomiteľná medzera — drží predložku „v" spolu s BEGAM
  nadpis: 'Ponuka jazdených vozidiel v BEGAM Trnava',
  podnadpisTucne: 'Hľadáte jazdené vozidlo',
  podnadpis:
    ' bez zbytočných starostí? BEGAM Trnava vám ponúka širokú ponuku vozidiel, profesionálne poradenstvo a férový prístup pri výbere auta pre každodenné jazdy aj dlhé cesty.',
  cta: [
    {
      riadok1: 'Jazdené vozidlá',
      riadok2: 'predaj',
      url: 'https://begam.sk/ponuka-vozidiel/?status=pouzivane&_status=pouzivane',
    },
    {
      riadok1: 'Jazdené vozidlá',
      riadok2: 'výkup',
      url: 'https://begam.sk/ponuka-vozidiel/?status=pouzivane&_status=pouzivane',
    },
  ],
};

/** Trust badges pod CTA tlačidlami v hero sekcii (hotové obrázky z predlohy) */
export const trustItems = [
  {
    src: '/images/badge-financovanie.png',
    alt: 'Výhodné financovanie',
    width: 162,
    height: 52,
  },
  {
    src: '/images/badge-registracia.png',
    alt: 'Registrácia vozidla na dopravnom inšpektoráte',
    width: 205,
    height: 66,
  },
  {
    src: '/images/badge-pzp.png',
    alt: 'PZP + havarijné poistenie',
    width: 136,
    height: 66,
  },
] as const;

export const benefity = {
  nadpis: 'Prečo si vybrať Begam?',
  polozky: [
    ['Výkup aj výmena', 'vozidla'],
    ['30+ rokov', 'skúseností'],
    ['Transparentná cena', 'a stav'],
    ['Rýchla reakcia na', 'váš dopyt'],
    ['Financovanie', 'na mieru'],
  ],
};

export const vozidla = {
  nadpis: 'Naše vozidlá',
  stitok: 'Používané vozidlo',
  cta: 'Zobraziť celú ponuku',
  ctaUrl: 'https://begam.sk/ponuka-vozidiel/?status=pouzivane&_status=pouzivane',
  karty: [
    {
      foto: '/images/auto-peugeot.png',
      nazov: 'Peugeot 2008 1.5 BlueHDi 130 GT EAT8',
      parametre: ['57 862 km', '96 kw', '2022', 'Diesel', '8-st. automatická', 'Predný pohon'],
      cena: '18 990 € s DPH',
      url: 'https://begam.sk/ponuka-vozidiel?status=pouzivane&_status=pouzivane&stav=Jazden%C3%A9',
    },
    {
      foto: '/images/auto-volvo.png',
      nazov: 'Volvo XC60 2.0 B4 mHEV Core A/T',
      parametre: ['8 917 km', '145 kw', '2024', 'Benzín', '8-st. automatická', 'Predný pohon'],
      cena: '39 490 € s DPH',
      url: 'https://begam.sk/ponuka-vozidiel?status=pouzivane&_status=pouzivane&stav=Jazden%C3%A9',
    },
    {
      foto: '/images/auto-opel.png',
      nazov: 'Opel Combo COMBI N1 Edition Plus L2 1,5 CDTi 102k',
      parametre: ['550 km', '75 kw', '2025', 'Diesel', '6-st. manuálna', 'Predný pohon'],
      cena: '23 490 € s DPH',
      url: 'https://begam.sk/ponuka-vozidiel?status=pouzivane&_status=pouzivane&stav=Jazden%C3%A9',
    },
    {
      foto: '/images/auto-tiguan.png',
      nazov: 'Volkswagen Tiguan Comfortline 2.0 110kW AT7',
      parametre: ['153 096 km', '110 kw', '2018', 'Diesel', '7-st. automatická', 'Predný pohon'],
      cena: '19 990 € s DPH',
      url: 'https://begam.sk/ponuka-vozidiel?status=pouzivane&_status=pouzivane&stav=Jazden%C3%A9',
    },
  ],
};

export const formular = {
  nadpis: 'Kontakt / nezáväzný dopyt',
  polia: {
    meno: 'Meno',
    email: 'Email',
    telefon: 'Telefónne číslo',
    casKontaktu: 'Preferovaný čas kontaktu',
    sprava: 'Správa',
  },
  casKontaktuMoznosti: [
    'Čím skôr',
    'Dopoludnia (8:00-12:00)',
    'Popoludní (12:00-17:00)',
    'Večer (17:00-19:00)',
  ],
  gdprText: 'Súhlasím so spracovaním osobných údajov',
  odoslat: 'Odoslať dopyt',
};

export const dakujeme = {
  nadpis: 'Ďakujeme za váš dopyt!',
  text: 'Vaša žiadosť bola úspešne odoslaná. Čoskoro sa vám ozveme s odpoveďou na váš dopyt.',
  tlacidlo: 'Späť na hlavnú stránku',
};

export const footer = {
  ochranaText: 'Ochrana osobných údajov',
  kontaktNadpis: 'Kontakt',
};
