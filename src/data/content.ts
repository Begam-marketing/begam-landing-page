/**
 * Všetky texty stránky. Nastavenia webu (logo, GTM, kontakt…) sú v site.ts.
 */

export const seo = {
  titulok: 'Ponuka vozidiel v BEGAM Trnava',
  popis:
    'Hľadáte nové vozidlo bez zbytočných starostí? BEGAM Trnava vám ponúka širokú ponuku vozidiel, profesionálne poradenstvo a férový prístup pri výbere auta pre každodenné jazdy aj dlhé cesty.',
};

export const hero = {
  nadpis: 'Ponuka jazdených vozidiel v BEGAM Trnava',
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
      foto: '/images/auto-volvo.png',
      nazov: 'Volvo XC60 2.0 B4 mHEV Core A/T',
      parametre: ['8 917 km', '145 kw', '2024', 'Benzín', '8-st. automatická', 'Predný pohon'],
      cena: '39 490 € s DPH',
      url: 'https://begam.sk/ponuka-vozidiel?stav=Pou%C5%BE%C3%ADvan%C3%A9&znacka=Volvo',
    },
    {
      foto: '/images/auto-jeep.png',
      nazov: 'Jeep Avenger Elektro 54 kWh SUMMIT',
      parametre: ['10 000 km', '115 kw', '2025', 'Elektromotor', 'Automatická bezstupňová', 'Predný pohon'],
      cena: '25 490 € s DPH',
      url: 'https://begam.sk/ponuka-vozidiel?stav=Pou%C5%BE%C3%ADvan%C3%A9&znacka=Jeep',
    },
    {
      foto: '/images/auto-hyundai.png',
      nazov: 'Hyundai Bayon 1.0 T-GDi Comfort 7DCT MY2025',
      parametre: ['10 km', '74 kw', '2025', 'Benzín', '7-st. automatická', 'Predný pohon'],
      cena: '18 690 € s DPH',
      url: 'https://begam.sk/ponuka-vozidiel?stav=Pou%C5%BE%C3%ADvan%C3%A9&znacka=Hyundai',
    },
    {
      foto: '/images/auto-alfa.png',
      nazov: 'Alfa Romeo Tonale SPRINT 1.5 e-Hybrid 130k',
      parametre: ['17 797 km', '96 kw', '2023', 'Benzín', '7-st. automatická', 'Predný pohon'],
      cena: '27 990 € s DPH',
      url: 'https://begam.sk/ponuka-vozidiel?stav=Pou%C5%BE%C3%ADvan%C3%A9&znacka=Alfa+Romeo',
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
