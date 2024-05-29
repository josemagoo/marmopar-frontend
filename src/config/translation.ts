export type Locale = 'es' | 'en' | 'de' | 'pt';

export type Translations = {
  [key in Locale]: {
    catalogo: string;
    trabajos: string;
    noticias: string;
    siguiente: string;
    anterior: string;
    ver_mas_catalogo: string;
    ver_mas_trabajo: string;
    ver_mas_noticias: string;
    contenido_interes: string;
    necesitas_ayuda: string;
    seguinos_en: string;
    contactanos: string;
    empresa: string;
    politica_privacidad: string;
    politica_cookies: string;
    aviso_legal: string;
    marca: string;
    inicio: string; // Añadido para la traducción de "Inicio"
    nuestros_clientes: string;
    acceso_a_nuestro: string;
    ver_mas: string;
    presione_catalogo: string;
    queres_encontrarnos: string;
    visita_nuestra_tienda: string;
    canal_comunicacion: string;
    no_es_molestia: string;
    conozca: string;
    nuestras: string;
    soluciones: string;
    marmoles_y_granito: string;
    cuarzo_y_sintetico: string;
    insumos_y_materias_primas: string;
  };
};

export const translations: Translations = {
  es: {
    catalogo: "Catálogo",
    trabajos: "Trabajos",
    noticias: "Noticias",
    siguiente: "Siguiente",
    anterior: "Anterior",
    ver_mas_catalogo: "Ver más Catálogo",
    ver_mas_trabajo: "Ver más Trabajo",
    ver_mas_noticias: "Ver más Noticias",
    contenido_interes: "Contenido de Interés",
    necesitas_ayuda: "¿Necesitas Ayuda?",
    seguinos_en: "Seguinos en",
    contactanos: "Contáctanos",
    empresa: "Empresa",
    politica_privacidad: "Política de Privacidad",
    politica_cookies: "Política de Cookies",
    aviso_legal: "Aviso Legal",
    marca: "Marmopar® es una empresa registrada de EMCOPY S.A, una empresa de Grupo Solano",
    inicio: "Inicio",
    nuestros_clientes: "NUESTROS CLIENTES",
    acceso_a_nuestro: "Acceso a nuestro",
    ver_mas: "VER MÁS",
    presione_catalogo: "Presione este botón que le direccionará a nuestro catálogo",
    queres_encontrarnos: "¿Querés encontrarnos?",
    visita_nuestra_tienda: "Visitá nuestra tienda",
    canal_comunicacion: "Nuestro principal canal de comunicación es WhatsApp",
    no_es_molestia: "Su consulta no es molestia",
    conozca: "Conozca",
    nuestras: "Nuestras",
    soluciones: "Soluciones",
    marmoles_y_granito: "Mármoles y Granito",
    cuarzo_y_sintetico: "Cuarzo y Sintético",
    insumos_y_materias_primas: "Insumos y materias primas"
  },
  en: {
    catalogo: "Catalog",
    trabajos: "Works",
    noticias: "News",
    siguiente: "Next",
    anterior: "Previous",
    ver_mas_catalogo: "See more Catalog",
    ver_mas_trabajo: "See more Work",
    ver_mas_noticias: "See more News",
    contenido_interes: "Content of Interest",
    necesitas_ayuda: "Need Help?",
    seguinos_en: "Follow us on",
    contactanos: "Contact us",
    empresa: "Company",
    politica_privacidad: "Privacy Policy",
    politica_cookies: "Cookies Policy",
    aviso_legal: "Legal Notice",
    marca: "Marmopar® is a registered company of EMCOPY S.A, a company of Grupo Solano",
    inicio: "Home",
    nuestros_clientes: "Our Clients",
    acceso_a_nuestro: "Access our",
    ver_mas: "See More",
    presione_catalogo: "Press this button to access our catalog",
    queres_encontrarnos: "Want to find us?",
    visita_nuestra_tienda: "Visit our store",
    canal_comunicacion: "Our main communication channel is WhatsApp",
    no_es_molestia: "Your inquiry is no bother",
    conozca: "Get to know",
    nuestras: "Our",
    soluciones: "Solutions",
    marmoles_y_granito: "Marbles and granite",
    cuarzo_y_sintetico: "Quartz and Synthetic",
    insumos_y_materias_primas: "Inputs and Raw Materials"
  },
  de: {
    catalogo: "Katalog",
    trabajos: "Arbeiten",
    noticias: "Nachrichten",
    siguiente: "Nächste",
    anterior: "Vorherige",
    ver_mas_catalogo: "Mehr Katalog sehen",
    ver_mas_trabajo: "Mehr Arbeit sehen",
    ver_mas_noticias: "Mehr Nachrichten sehen",
    contenido_interes: "Interessante Inhalte",
    necesitas_ayuda: "Brauchen Sie Hilfe?",
    seguinos_en: "Folge uns auf",
    contactanos: "Kontaktiere uns",
    empresa: "Unternehmen",
    politica_privacidad: "Datenschutz-Bestimmungen",
    politica_cookies: "Cookie-Richtlinie",
    aviso_legal: "Impressum",
    marca: "Marmopar® ist ein eingetragenes Unternehmen von EMCOPY S.A, einem Unternehmen der Grupo Solano",
    inicio: "Startseite", // Traducción de "Inicio" en alemán
    nuestros_clientes: "Unsere Kunden",
    acceso_a_nuestro: "Zugriff auf unser",
    ver_mas: "Mehr sehen",
    presione_catalogo: "Drücken Sie diesen Knopf, um auf unseren Katalog zuzugreifen",
    queres_encontrarnos: "Möchten Sie uns finden?",
    visita_nuestra_tienda: "Besuchen Sie unseren Laden",
    canal_comunicacion: "Unser Hauptkommunikationskanal ist WhatsApp",
    no_es_molestia: "Ihre Anfrage ist keine Belästigung",
    conozca: "Kennenlernen",
    nuestras: "Unser",
    soluciones: "Lösungen",
    marmoles_y_granito: "Marmor und Granit",
    cuarzo_y_sintetico: "Quarz und Synthetik",
    insumos_y_materias_primas: "Inputs und Rohstoffe"
  },
  pt: {
    catalogo: "Catálogo",
    trabajos: "Trabalhos",
    noticias: "Notícias",
    siguiente: "Próximo",
    anterior: "Anterior",
    ver_mas_catalogo: "Ver mais Catálogo",
    ver_mas_trabajo: "Ver mais Trabalho",
    ver_mas_noticias: "Ver mais Notícias",
    contenido_interes: "Conteúdo de Interesse",
    necesitas_ayuda: "Precisa de Ajuda?",
    seguinos_en: "Siga-nos em",
    contactanos: "Contacte-nos",
    empresa: "Empresa",
    politica_privacidad: "Política de Privacidade",
    politica_cookies: "Política de Cookies",
    aviso_legal: "Aviso Legal",
    marca: "Marmopar® é uma empresa registrada da EMCOPY S.A, uma empresa do Grupo Solano",
    inicio: "Início",
    nuestros_clientes: "Nossos Clientes",
    acceso_a_nuestro: "Acesse nosso",
    ver_mas: "Veja Mais",
    presione_catalogo: "Pressione este botão para acessar nosso catálogo",
    queres_encontrarnos: "Quer nos encontrar?",
    visita_nuestra_tienda: "Visite nossa loja",
    canal_comunicacion: "Nosso principal canal de comunicação é o WhatsApp",
    no_es_molestia: "Sua consulta não é um incômodo",
    conozca: "Conhecer",
    nuestras: "Nosso",
    soluciones: "Soluções",
    marmoles_y_granito: "Mármores e granitos",
    cuarzo_y_sintetico: "Quartzo e Sintético",
    insumos_y_materias_primas: "Insumos e Matérias-Primas"
  }
};

export const getDefaultLocale = (): Locale => 'es';

export const getTranslation = (key: keyof Translations['es'], locale: Locale = getDefaultLocale()) => {
  return translations[locale][key] || key;
};
