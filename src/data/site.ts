/**
 * Nastavenia projektu — jediné miesto, kde sa mení identita webu.
 * Texty sekcií sa upravujú v content.ts.
 */
export const site = {
  /** Názov firmy — používa sa v title, og:site_name a JSON-LD */
  nazovFirmy: 'BEGAM Trnava',

  /** Jazyk stránky a og:locale */
  jazyk: 'sk',
  ogLocale: 'sk_SK',

  /**
   * Google Tag Manager ID (napr. 'GTM-XXXXXXX').
   * Ak zostane prázdny reťazec, GTM sa do stránky vôbec nevloží.
   */
  gtmId: '',

  logo: {
    src: '/images/logo.svg',
    alt: 'Begam – logo',
    width: 177,
    height: 48,
  },

  /** Biela verzia loga pre tmavú pätičku */
  logoBiele: {
    src: '/images/logo-biele.png',
    alt: 'Begam – logo',
    width: 150,
    height: 47,
  },

  favicon: '/images/favicon.png',

  /** Obrázok pre og:image (zdieľanie na sociálnych sieťach) */
  ogImage: {
    src: '/images/veduci-predaja.png',
    width: 324,
    height: 489,
  },

  /** URL stránky s ochranou osobných údajov (GDPR) */
  gdprUrl: 'https://begam.sk/ochrana-osobnych-udajov/',

  kontakt: {
    email: 'info@begam.sk',
    telefony: ['+421 905 812 168'],
    /** Telefón v medzinárodnom formáte pre JSON-LD */
    telefonJsonLd: '+421905812168',
    sidlo: 'Bratislavská 7487/78, 917 02 Trnava',
  },

  /** Vedúci predaja jazdených vozidiel — zobrazuje sa v hero sekcii */
  veduciPredaja: {
    nadpis: 'Vedúci predaja jazdených vozidiel',
    meno: 'Jozef Richnavský',
    telefon: '+421 905 812 168',
    email: 'bazar@begam.sk',
    foto: {
      src: '/images/veduci-predaja.png',
      alt: 'Jozef Richnavský – vedúci predaja jazdených vozidiel',
      width: 324,
      height: 489,
    },
  },

  /** Odkazy na ponuku vozidiel na hlavnom webe */
  odkazy: {
    ponukaJazdene: 'https://begam.sk/ponuka-vozidiel/?status=pouzivane&_status=pouzivane',
  },

  /**
   * Údaje pre štruktúrované dáta (JSON-LD) na hlavnej stránke.
   * Typ firmy: https://schema.org/LocalBusiness a podtypy
   */
  jsonLd: {
    typFirmy: 'AutoDealer',
    adresa: {
      ulica: 'Bratislavská 7487/78',
      mesto: 'Trnava',
      psc: '917 02',
      krajina: 'SK',
    },
    oblastPosobenia: 'Slovensko',
  },
};
