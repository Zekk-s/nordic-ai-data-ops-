import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  no: {
    translation: {
      hero: {
        superTitle: "Flerspråklig kvalitetsspesialist · Trondheim, Norge",
        headline: "Lokalisering, språkkvalitet og tolking for grensekryssende team.",
        subHeadline: "Mehmet Zeki Oguz arbeider med lokalisering, språkkvalitet, terminologi og AI-evaluering.",
        ctaPrimary: "Send e-post",
        ctaSecondary: "Nettsted"
      },
      trustBar: [
        "Trondheim, Norge",
        "Lokalisering",
        "Språkkvalitet",
        "Terminologi",
        "AI-evaluering",
        "Tolking"
      ],
      services: {
        pillar1: {
          title: "Flerspråklig AI-kvalitet",
          desc: "Evaluering av flerspråklig AI-tekst, med vekt på språkkvalitet og terminologi."
        },
        pillar2: {
          title: "Lokalisering og språkkvalitet",
          desc: "Lokalisering og terminologi for team som publiserer på flere språk."
        },
        pillar3: {
          title: "Tolking",
          desc: "Tolking for grensekryssende team."
        }
      },
      credentials: {
        verified: "Mehmet Zeki Oguz",
        title: "Kontakt",
        windowLabel: "Kontakt",
        roleTitle: "Flerspråklig kvalitetsspesialist",
        roleBody: "Lokalisering, språkkvalitet, terminologi og AI-evaluering. Bosatt i Trondheim, Norge.",
        contactTitle: "E-post og nettsted",
        panelHeading: "# KONTAKT",
        cityLine: "Trondheim, Norge",
        focus: ["Lokalisering", "Språkkvalitet", "Terminologi", "AI-evaluering"]
      },
      alignment: {
        title: "Eksempel på ordvalg",
        subtitle: "Et statisk eksempel. En engelsk setning, skrevet om på norsk i tre steg. Ingen modell kjøres.",
        sourceKicker: "Engelsk kilde",
        sourceNote: "Eksempelsetning",
        exampleKicker: "Norsk eksempel",
        levelLabel: "Eksempelnivå",
        literal: "Ordrett",
        nuanced: "Nyansert",
        adapted: "Tilpasset",
        notes: ["Ordvalg", "Tone", "Klarhet"],
        reasons: {
          literal: "Ordrett oversettelse. I en norsk tekst om arbeidsplassen høres «direkte konfrontasjon» hardere ut enn den engelske formuleringen.",
          softer: "«Anbefaler» er et mykere valg enn «foreslår» i denne setningen.",
          clarification: "«Rask avklaring» handler om å rydde opp i saken, ikke om å tvinge fram en konfrontasjon.",
          dialogue: "«Saklig dialog» er en roligere formulering av det samme poenget.",
          consensus: "«Konsensus» navngir enighet, og passer med resten av eksempelet."
        }
      },
      demo: {
        eyebrow: "Statisk demo",
        title: "Eksempel på et oppsett",
        disclaimer: "Ingen live-data. Diagrammet og panelene er en skisse, ikke en måling.",
        badge: "Ingen live-data",
        chartTitle: "Eksempeldiagram",
        chartNote: "Tegnede former. Ikke poeng fra en gjennomgang.",
        sampleA: "Eksempel A",
        sampleB: "Eksempel B",
        axes: ["Terminologi", "Tone", "Klarhet", "Konsistens", "Målgruppe", "Grammatikk"],
        panelTitle: "AI-evaluering",
        panelBody: "Gjennomgang av flerspråklig AI-tekst, med vekt på språkkvalitet og terminologi.",
        card1Title: "Terminologi",
        card1Body: "Samme termer på tvers av språk.",
        card1Tag: "Fokus",
        card2Title: "Språkkvalitet",
        card2Body: "Ordvalg, tone og klarhet.",
        card2Tag: "Fokus",
        contactTitle: "Kontakt",
        basedLabel: "Bosatt i",
        city: "Trondheim",
        country: "Norge"
      }
    }
  },
  en: {
    translation: {
      hero: {
        superTitle: "Multilingual Quality Specialist · Trondheim, Norway",
        headline: "Localisation, language quality, and interpretation for cross-border teams.",
        subHeadline: "Mehmet Zeki Oguz works on localisation, language quality, terminology, and AI evaluation.",
        ctaPrimary: "Email",
        ctaSecondary: "Website"
      },
      trustBar: [
        "Trondheim, Norway",
        "Localisation",
        "Language quality",
        "Terminology",
        "AI evaluation",
        "Interpretation"
      ],
      services: {
        pillar1: {
          title: "Multilingual AI quality",
          desc: "Evaluation of multilingual AI output, focused on language quality and terminology."
        },
        pillar2: {
          title: "Localisation and language quality",
          desc: "Localisation and terminology for teams that publish across languages."
        },
        pillar3: {
          title: "Interpretation",
          desc: "Interpretation for cross-border teams."
        }
      },
      credentials: {
        verified: "Mehmet Zeki Oguz",
        title: "Contact",
        windowLabel: "Contact",
        roleTitle: "Multilingual Quality Specialist",
        roleBody: "Localisation, language quality, terminology, and AI evaluation. Based in Trondheim, Norway.",
        contactTitle: "Email and website",
        panelHeading: "# CONTACT",
        cityLine: "Trondheim, Norway",
        focus: ["Localisation", "Language quality", "Terminology", "AI evaluation"]
      },
      alignment: {
        title: "Wording example",
        subtitle: "A static example. One English sentence, rewritten in Norwegian in three steps. No model is called.",
        sourceKicker: "English source",
        sourceNote: "Example sentence",
        exampleKicker: "Norwegian example",
        levelLabel: "Example level",
        literal: "Literal",
        nuanced: "Nuanced",
        adapted: "Adapted",
        notes: ["Wording", "Tone", "Clarity"],
        reasons: {
          literal: "A direct translation. In a Norwegian workplace text, “direkte konfrontasjon” sounds harsher than the English.",
          softer: "“Anbefaler” is a softer choice than “foreslår” in this sentence.",
          clarification: "“Rask avklaring” is about clearing the issue up, rather than forcing a confrontation.",
          dialogue: "“Saklig dialog” is calmer wording for the same point.",
          consensus: "“Konsensus” names agreement, and it fits the rest of this example."
        }
      },
      demo: {
        eyebrow: "Static demo",
        title: "Sample review layout",
        disclaimer: "No live data. The chart and panels are a layout sketch, not a measurement.",
        badge: "No live data",
        chartTitle: "Sample chart",
        chartNote: "Drawn shapes. Not scores from a review.",
        sampleA: "Sample A",
        sampleB: "Sample B",
        axes: ["Terminology", "Tone", "Clarity", "Consistency", "Audience", "Grammar"],
        panelTitle: "AI evaluation",
        panelBody: "Review of multilingual AI output for language quality and terminology.",
        card1Title: "Terminology",
        card1Body: "Consistent terms across languages.",
        card1Tag: "Focus",
        card2Title: "Language quality",
        card2Body: "Wording, tone, and clarity.",
        card2Tag: "Focus",
        contactTitle: "Contact",
        basedLabel: "Based in",
        city: "Trondheim",
        country: "Norway"
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
