import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  no: {
    translation: {
      hero: {
        superTitle: "Lokalisert i Trondheim | Tilgjengelig for prosjektbasert arbeid",
        headline: "Flerspråklig AI-kvalitet, Lokalisering og Tolking for grensekryssende team.",
        subHeadline: "Jeg hjelper selskaper med å levere nøyaktig, kulturelt pålitelig og operasjonelt feilfritt flerspråklig arbeid på tvers av AI-evaluering, språkkvalitet og høytroende kommunikasjon.",
        ctaPrimary: "Diskuter et prosjekt",
        ctaSecondary: "Se kvalifikasjoner"
      },
      trustBar: [
        "Trondheim, Norge",
        "AI Data Ops & RLHF",
        "Faktasjekk & Kildeverifisering",
        "Strengt Konfidensielt (NDA)",
        "100% Policy-Compliant"
      ],
      services: {
        pillar1: {
          title: "Flerspråklig AI-kvalitet og Evaluering",
          desc: "RLHF, AI Safety, Prompt Engineering og finjustering av modeller for nordiske markeder."
        },
        pillar2: {
          title: "Lokalisering og Språklig QA",
          desc: "Kulturell tilpasning og språklig kvalitetssikring som bygger tillit i Norden."
        },
        pillar3: {
          title: "Tolking og Grensekryssende Kommunikasjon",
          desc: "Profesjonell tolking for juridiske, medisinske og bedriftsinterne behov."
        }
      },
      credentials: {
        title: "Sertifiseringer & Protokoll",
        privacy: "Personvern og konfidensialitet er fundamentalt i mitt arbeid. Alle prosjekter håndteres under streng NDA og i samsvar med internasjonale standarder.",
        verified: "Verifisert Data-Dossier"
      }
    }
  },
  en: {
    translation: {
      hero: {
        superTitle: "Based in Trondheim | Available for Project-Based Work",
        headline: "Multilingual AI Quality, Localization, and Interpretation for Cross-Border Teams.",
        subHeadline: "I help companies deliver accurate, culturally reliable, and operationally flawless multilingual work across AI evaluation, linguistic quality, and high-trust communication.",
        ctaPrimary: "Discuss a Project",
        ctaSecondary: "View Qualifications"
      },
      trustBar: [
        "Trondheim, Norway",
        "AI Data Ops & RLHF",
        "Fact-Checking & Source Verification",
        "Strictly Confidential (NDA)",
        "100% Policy-Compliant"
      ],
      services: {
        pillar1: {
          title: "Multilingual AI Quality & Evaluation",
          desc: "RLHF, AI Safety, Prompt Engineering, and model fine-tuning for Nordic markets."
        },
        pillar2: {
          title: "Localization & Linguistic QA",
          desc: "Cultural adaptation and linguistic quality assurance that builds trust in the Nordics."
        },
        pillar3: {
          title: "Interpretation & Cross-Border Communication",
          desc: "Professional interpretation for legal, medical, and corporate needs."
        }
      },
      credentials: {
        title: "Certifications & Protocol",
        privacy: "Privacy and confidentiality are fundamental to my work. All projects are handled under strict NDA and in compliance with international standards.",
        verified: "Verified Data-Dossier"
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'no',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
