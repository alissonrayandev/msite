import { createI18n } from 'vue-i18n';

const messages = {
  pt: {
    name: 'Milena Saldini',
    role: 'Designer Gráfico',
    description: "Designer gráfico especializada em criar identidades visuais e materiais criativos para marcas que querem se destacar.Apaixonada por transformar ideias em soluções visuais que comunicam com propósito. Trabalho com criação de identidades visuais, redes sociais, materiais impressos e digitais — tudo com atenção aos detalhes, criatividade e foco no que a sua marca quer transmitir.",
    linkedin: 'Perfil no LinkedIn',
    codepen: 'Perfil no CodePen',
    email: 'Enviar um Email',
    whatsapp: 'WhatsApp',
    downloadCV: 'Baixar CV'
  },
  en: {
    name: 'Milena Saldini',
    role: 'Graphic Designer',
    description: "Graphic designer specialized in creating visual identities and creative materials for brands that want to stand out. Passionate about transforming ideas into visual solutions that communicate with purpose. I work with the creation of visual identities, social media, printed and digital materials — all with attention to detail, creativity, and a focus on what your brand wants to convey.",
    linkedin: 'LinkedIn Profile',
    codepen: 'CodePen Profile',
    email: 'Send an Email',
    whatsapp: 'WhatsApp',
    downloadCV: 'Download CV'
  },
  es: {
    name: 'Milena Saldini',
    role: 'Diseñadora Gráfica',
    description: "Diseñadora gráfica especializada en crear identidades visuales y materiales creativos para marcas que quieren destacarse. Apasionada por transformar ideas en soluciones visuales que comuniquen con propósito. Trabajo con la creación de identidades visuales, redes sociales, materiales impresos y digitales — todo con atención a los detalles, creatividad y enfoque en lo que su marca quiere transmitir.",
    linkedin: 'Perfil en LinkedIn',
    codepen: 'Perfil en CodePen',
    email: 'Enviar un Email',
    whatsapp: 'WhatsApp',
    downloadCV: 'Descargar CV'
  }
};

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages,
});

export default i18n;
