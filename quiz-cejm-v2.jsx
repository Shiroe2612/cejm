import { useState } from "react";

const questions = [
  // ÉCONOMIE - THÉORICIENS
  {
    categorie: "📊 Économie",
    question: "Selon Schumpeter, qu'est-ce que la « destruction créatrice » ?",
    options: [
      "La faillite des entreprises mal gérées",
      "Le processus par lequel l'innovation remplace les anciennes industries",
      "La destruction des monopoles par l'État",
      "La crise économique qui précède la reprise",
    ],
    bonne: 1,
    explication: "Schumpeter (1942) montre que l'innovation est le moteur du capitalisme : de nouvelles technologies détruisent les anciennes activités pour en créer de nouvelles. Ex : internet a détruit les agences de voyage classiques.",
  },
  {
    categorie: "📊 Économie",
    question: "Keynes préconise, en période de crise, que l'État doit :",
    options: [
      "Réduire ses dépenses pour équilibrer le budget",
      "Augmenter les taux d'intérêt",
      "Investir massivement pour relancer la demande",
      "Laisser le marché se réguler seul",
    ],
    bonne: 2,
    explication: "Keynes (1936) théorise que l'État doit intervenir via des dépenses publiques (politique budgétaire expansionniste) pour relancer la demande et sortir de la récession. C'est la politique de relance.",
  },
  {
    categorie: "📊 Économie",
    question: "Adam Smith est associé à quel concept clé ?",
    options: [
      "La destruction créatrice",
      "La main invisible du marché",
      "Le circuit économique",
      "La courbe de Phillips",
    ],
    bonne: 1,
    explication: "Adam Smith (1776) explique que le marché libre s'auto-régule grâce à la « main invisible » : chaque individu en cherchant son intérêt personnel contribue à l'intérêt général.",
  },
  {
    categorie: "📊 Économie",
    question: "Qu'est-ce que le PIB ?",
    options: [
      "Le bénéfice total des entreprises françaises",
      "La valeur de tous les biens et services produits sur le territoire en un an",
      "Le montant total des impôts collectés par l'État",
      "La somme des salaires versés aux ménages",
    ],
    bonne: 1,
    explication: "Le PIB (Produit Intérieur Brut) mesure la richesse créée sur un territoire donné en une année. C'est l'indicateur principal de la croissance économique.",
  },
  {
    categorie: "📊 Économie",
    question: "Dans un oligopole, combien y a-t-il d'offreurs ?",
    options: ["Un seul (monopole)", "Deux exactement (duopole)", "Quelques grandes entreprises", "Une multitude de petits vendeurs"],
    bonne: 2,
    explication: "L'oligopole = peu d'offreurs puissants face à de nombreux demandeurs. Ex : les opérateurs téléphoniques (Orange, SFR, Bouygues, Free).",
  },
  {
    categorie: "📊 Économie",
    question: "Quel organisme gère la politique monétaire en Europe ?",
    options: ["Le FMI", "La BCE (Banque Centrale Européenne)", "Le Trésor Public", "L'INSEE"],
    bonne: 1,
    explication: "La BCE fixe les taux directeurs pour contrôler l'inflation et soutenir l'économie de la zone euro.",
  },
  {
    categorie: "📊 Économie",
    question: "Ricardo est connu pour la théorie des :",
    options: [
      "Avantages absolus",
      "Avantages comparatifs",
      "Cycles économiques longs",
      "Trappes à pauvreté",
    ],
    bonne: 1,
    explication: "David Ricardo (1817) montre que chaque pays a intérêt à se spécialiser dans ce qu'il produit relativement le mieux, même s'il est moins efficace dans l'absolu. C'est le fondement du libre-échange.",
  },
  {
    categorie: "📊 Économie",
    question: "Les « cycles de Kondratiev » durent environ :",
    options: ["5 à 10 ans", "10 à 20 ans", "40 à 60 ans", "100 ans"],
    bonne: 2,
    explication: "Nikolaï Kondratiev identifie des cycles économiques longs de 40 à 60 ans liés aux grandes vagues d'innovation technologique (révolution industrielle, électricité, informatique...).",
  },
  // DROIT
  {
    categorie: "⚖️ Droit",
    question: "Quelles sont les conditions de validité d'un contrat ?",
    options: [
      "Signature + date + témoin",
      "Consentement, capacité, objet licite, cause licite",
      "Offre + acceptation + prix",
      "Écrit + signature + enregistrement notarial",
    ],
    bonne: 1,
    explication: "Les 4 conditions : consentement non vicié, capacité juridique des parties, objet licite et certain, cause licite.",
  },
  {
    categorie: "⚖️ Droit",
    question: "Quelle est la durée maximale d'un CDD ?",
    options: ["6 mois", "12 mois", "18 mois", "24 mois"],
    bonne: 2,
    explication: "Un CDD ne peut dépasser 18 mois en général (renouvellements inclus). Il doit correspondre à un cas précis prévu par la loi.",
  },
  {
    categorie: "⚖️ Droit",
    question: "Que signifie le RGPD ?",
    options: [
      "Règlement Général sur la Protection des Données",
      "Registre Général des Professions Digitales",
      "Règlement de Gestion des Programmes Développeurs",
      "Réseau Général de Protection des Droits",
    ],
    bonne: 0,
    explication: "Le RGPD (2018) encadre la collecte et le traitement des données personnelles en Europe. Clé pour le BTS SIO : consentement, droit d'accès, droit à l'oubli.",
  },
  {
    categorie: "⚖️ Droit",
    question: "La responsabilité pénale concerne :",
    options: [
      "La réparation d'un préjudice causé à une autre personne",
      "Le non-respect d'un contrat signé",
      "Une infraction envers la société, sanctionnée par une peine",
      "Un litige entre employeur et salarié",
    ],
    bonne: 2,
    explication: "La responsabilité pénale = infraction à la loi (ex : vol, piratage informatique). La sanction est une peine (prison, amende). La responsabilité civile, elle, répare un préjudice.",
  },
  {
    categorie: "⚖️ Droit",
    question: "Un vice du consentement qui consiste à tromper volontairement l'autre partie s'appelle :",
    options: ["L'erreur", "Le dol", "La violence", "La lésion"],
    bonne: 1,
    explication: "Le dol = tromperie intentionnelle. Il vicie le consentement et peut entraîner la nullité du contrat. Ex : un vendeur qui cache un défaut majeur d'un bien.",
  },
  {
    categorie: "⚖️ Droit",
    question: "La CNIL est l'autorité chargée de :",
    options: [
      "Réguler les marchés financiers",
      "Contrôler l'application du droit du travail",
      "Veiller à la protection des données personnelles en France",
      "Superviser les tribunaux de commerce",
    ],
    bonne: 2,
    explication: "La CNIL (Commission Nationale de l'Informatique et des Libertés) contrôle le respect du RGPD et de la loi Informatique et Libertés. Elle peut sanctionner les entreprises qui ne protègent pas les données.",
  },
  {
    categorie: "⚖️ Droit",
    question: "En droit du travail, le principe de non-discrimination s'applique notamment à :",
    options: [
      "La fixation des salaires uniquement",
      "L'embauche, la promotion, le licenciement",
      "Seulement aux entreprises de + 50 salariés",
      "Uniquement au moment de l'entretien d'embauche",
    ],
    bonne: 1,
    explication: "La non-discrimination s'applique à toutes les étapes de la vie professionnelle : recrutement, formation, promotion, rémunération, licenciement. Critères protégés : origine, sexe, âge, handicap, opinions...",
  },
  {
    categorie: "⚖️ Droit",
    question: "Qu'est-ce qu'un acte sous seing privé ?",
    options: [
      "Un acte rédigé et authentifié par un notaire",
      "Un acte rédigé et signé par les parties sans notaire",
      "Un acte secret dont le contenu est confidentiel",
      "Un acte signé devant deux témoins obligatoirement",
    ],
    bonne: 1,
    explication: "L'acte sous seing privé est rédigé directement par les parties (sans notaire). Il a valeur légale mais moins de force probante qu'un acte authentique (notarié).",
  },
  // MANAGEMENT - THÉORICIENS
  {
    categorie: "🏢 Management",
    question: "Frederick Taylor est le père de :",
    options: [
      "La direction par objectifs",
      "L'organisation scientifique du travail (OST)",
      "Le management participatif",
      "La pyramide des besoins",
    ],
    bonne: 1,
    explication: "Taylor (fin XIXe) invente l'OST : diviser le travail en tâches simples et répétitives, mesurer les temps, optimiser la productivité. Limite : déshumanisation, démotivation des travailleurs.",
  },
  {
    categorie: "🏢 Management",
    question: "Dans la pyramide de Maslow, quel est le besoin le plus élevé ?",
    options: ["Sécurité", "Appartenance", "Estime de soi", "Accomplissement de soi"],
    bonne: 3,
    explication: "La pyramide de Maslow (du bas vers le haut) : besoins physiologiques → sécurité → appartenance → estime → accomplissement de soi. Un besoin supérieur ne peut être satisfait que si les inférieurs le sont.",
  },
  {
    categorie: "🏢 Management",
    question: "Herzberg distingue les facteurs de motivation des facteurs :",
    options: ["De production", "D'hygiène", "De compétence", "De hiérarchie"],
    bonne: 1,
    explication: "Herzberg : les facteurs d'hygiène (salaire, conditions de travail) évitent l'insatisfaction mais ne motivent pas. Seuls les facteurs de motivation (reconnaissance, responsabilités) créent la vraie satisfaction.",
  },
  {
    categorie: "🏢 Management",
    question: "Henry Mintzberg est connu pour :",
    options: [
      "La théorie des besoins",
      "La description des rôles du manager et des configurations organisationnelles",
      "L'invention du SWOT",
      "La théorie X et Y",
    ],
    bonne: 1,
    explication: "Mintzberg identifie les 10 rôles du manager (interpersonnel, informationnel, décisionnel) et décrit 5 configurations organisationnelles (structure simple, bureaucratie, adhocratie...).",
  },
  {
    categorie: "🏢 Management",
    question: "La théorie X de McGregor suppose que les salariés sont :",
    options: [
      "Naturellement motivés et créatifs",
      "Paresseux et ont besoin d'être contrôlés",
      "Autonomes et cherchent les responsabilités",
      "Sensibles à la reconnaissance",
    ],
    bonne: 1,
    explication: "McGregor : Théorie X = les individus sont fainéants, il faut les contrôler et les diriger (management autoritaire). Théorie Y = les individus aiment travailler et s'auto-disciplinent (management participatif).",
  },
  {
    categorie: "🏢 Management",
    question: "Quel style de management implique les salariés dans les décisions (Likert) ?",
    options: ["Autoritaire", "Paternaliste", "Consultatif", "Participatif"],
    bonne: 3,
    explication: "Le management participatif (Likert) associe les salariés aux décisions. Il favorise la motivation, la créativité et la cohésion d'équipe. C'est le style le plus efficace selon Likert.",
  },
  {
    categorie: "🏢 Management",
    question: "Dans une analyse SWOT, les Opportunités sont :",
    options: [
      "Des points forts internes à l'entreprise",
      "Des faiblesses internes à améliorer",
      "Des éléments favorables dans l'environnement externe",
      "Des risques présents dans l'environnement externe",
    ],
    bonne: 2,
    explication: "SWOT : Forces/Faiblesses = internes. Opportunités/Menaces = externes. Les opportunités sont des tendances du marché dont l'entreprise peut tirer profit.",
  },
  {
    categorie: "🏢 Management",
    question: "La stratégie de différenciation consiste à :",
    options: [
      "Être le moins cher du marché",
      "Se concentrer sur un seul segment de marché",
      "Proposer une offre unique perçue comme supérieure",
      "Diversifier les produits sur plusieurs marchés",
    ],
    bonne: 2,
    explication: "Porter (1980) identifie 3 stratégies génériques : domination par les coûts, différenciation (se démarquer par la qualité/image), et focalisation (cibler une niche). Ex de différenciation : Apple.",
  },
  {
    categorie: "🏢 Management",
    question: "Fayol identifie 5 fonctions de l'administration. Lesquelles ?",
    options: [
      "Planifier, Organiser, Commander, Coordonner, Contrôler",
      "Produire, Vendre, Financer, RH, Communiquer",
      "Décider, Déléguer, Motiver, Évaluer, Récompenser",
      "Analyser, Synthétiser, Décider, Agir, Mesurer",
    ],
    bonne: 0,
    explication: "Henri Fayol (1916) : POCCC — Planifier, Organiser, Commander, Coordonner, Contrôler. C'est la base des fonctions managériales encore enseignées aujourd'hui.",
  },
  // NUMÉRIQUE / SIO
  {
    categorie: "💻 Numérique & SIO",
    question: "Quelle loi française encadre spécifiquement la cybercriminalité ?",
    options: [
      "La loi Hadopi",
      "La loi Godfrain de 1988",
      "La loi DADVSI",
      "La loi Macron",
    ],
    bonne: 1,
    explication: "La loi Godfrain (1988) est le premier texte français à criminaliser les atteintes aux systèmes informatiques : accès frauduleux, sabotage, vol de données. Elle a été intégrée dans le Code pénal.",
  },
  {
    categorie: "💻 Numérique & SIO",
    question: "Dans le cadre du RGPD, le DPO (Data Protection Officer) a pour rôle de :",
    options: [
      "Développer les applications de traitement des données",
      "Veiller au respect de la réglementation sur les données personnelles",
      "Commercialiser les données collectées par l'entreprise",
      "Superviser la sécurité informatique uniquement",
    ],
    bonne: 1,
    explication: "Le DPO (ou Délégué à la Protection des Données) conseille l'organisation, contrôle la conformité RGPD, et sert d'interlocuteur avec la CNIL. Sa désignation est obligatoire dans certaines organisations.",
  },
  {
    categorie: "💻 Numérique & SIO",
    question: "Le principe de « privacy by design » signifie :",
    options: [
      "Rendre le site web accessible aux personnes handicapées",
      "Intégrer la protection des données dès la conception du système",
      "Chiffrer toutes les données stockées après leur collecte",
      "Publier la politique de confidentialité sur le site",
    ],
    bonne: 1,
    explication: "Le « privacy by design » (protection dès la conception) est un principe du RGPD : la vie privée doit être prise en compte dès le développement d'un produit ou service, pas ajoutée après coup.",
  },
];

const COULEURS = {
  "📊 Économie": { bg: "#0a1628", accent: "#00c6ff", light: "#0d2540" },
  "⚖️ Droit": { bg: "#1a0a2e", accent: "#bf5af2", light: "#2d1050" },
  "🏢 Management": { bg: "#0a1f0a", accent: "#30d158", light: "#0d3310" },
  "💻 Numérique & SIO": { bg: "#1a1208", accent: "#ffd60a", light: "#2d2010" },
};

function shuffle(arr) {
  return [...arr].sort(() => Math.random() - 0.5);
}

export default function QuizCEJM() {
  const [questionsShuffled] = useState(() => shuffle(questions));
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [fini, setFini] = useState(false);
  const [showExplication, setShowExplication] = useState(false);
  const [historique, setHistorique] = useState([]);

  const q = questionsShuffled[current];
  const couleur = COULEURS[q?.categorie] || { bg: "#111", accent: "#fff", light: "#222" };

  function choisir(idx) {
    if (selected !== null) return;
    setSelected(idx);
    const correct = idx === q.bonne;
    if (correct) setScore((s) => s + 1);
    setShowExplication(true);
    setHistorique((h) => [...h, { question: q.question, correct, categorie: q.categorie }]);
  }

  function suivant() {
    if (current + 1 >= questionsShuffled.length) {
      setFini(true);
    } else {
      setCurrent((c) => c + 1);
      setSelected(null);
      setShowExplication(false);
    }
  }

  function recommencer() {
    setCurrent(0);
    setSelected(null);
    setScore(0);
    setFini(false);
    setShowExplication(false);
    setHistorique([]);
  }

  const pct = Math.round((score / questionsShuffled.length) * 100);

  // Stats par catégorie
  function statsParCat() {
    const cats = {};
    historique.forEach(({ categorie, correct }) => {
      if (!cats[categorie]) cats[categorie] = { total: 0, correct: 0 };
      cats[categorie].total++;
      if (correct) cats[categorie].correct++;
    });
    return cats;
  }

  if (fini) {
    const mention = pct >= 80 ? "🔥 Excellent ! T'es prêt(e) !" : pct >= 60 ? "👍 Pas mal, encore un effort !" : "💪 Révise encore, t'y es presque !";
    const stats = statsParCat();
    return (
      <div style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0a0a1a 0%, #0d1a0d 50%, #1a0a2e 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'Segoe UI', sans-serif",
        padding: "20px",
      }}>
        <div style={{
          background: "rgba(255,255,255,0.05)",
          border: "1px solid rgba(255,255,255,0.15)",
          borderRadius: "24px",
          padding: "40px 32px",
          maxWidth: "500px",
          width: "100%",
          textAlign: "center",
          backdropFilter: "blur(20px)",
        }}>
          <div style={{ fontSize: "64px", marginBottom: "12px" }}>
            {pct >= 80 ? "🏆" : pct >= 60 ? "🎯" : "📚"}
          </div>
          <h1 style={{ color: "#fff", fontSize: "26px", fontWeight: 800, margin: "0 0 6px" }}>Quiz terminé !</h1>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "14px", margin: "0 0 28px" }}>{mention}</p>

          <div style={{
            background: "rgba(255,255,255,0.08)",
            borderRadius: "16px",
            padding: "20px",
            marginBottom: "24px",
          }}>
            <div style={{ fontSize: "52px", fontWeight: 800, color: pct >= 80 ? "#30d158" : pct >= 60 ? "#ffd60a" : "#ff453a", lineHeight: 1 }}>
              {score}/{questionsShuffled.length}
            </div>
            <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "13px", marginTop: "6px" }}>{pct}% de bonnes réponses</div>
            <div style={{ height: "8px", background: "rgba(255,255,255,0.1)", borderRadius: "4px", marginTop: "14px", overflow: "hidden" }}>
              <div style={{ height: "100%", width: `${pct}%`, background: pct >= 80 ? "#30d158" : pct >= 60 ? "#ffd60a" : "#ff453a", borderRadius: "4px" }} />
            </div>
          </div>

          {/* Stats par catégorie */}
          <div style={{ marginBottom: "24px", textAlign: "left" }}>
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "12px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", marginBottom: "12px" }}>Résultats par matière</p>
            {Object.entries(stats).map(([cat, s]) => {
              const c = COULEURS[cat] || { accent: "#fff" };
              const p = Math.round((s.correct / s.total) * 100);
              return (
                <div key={cat} style={{ marginBottom: "10px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "4px" }}>
                    <span style={{ color: "rgba(255,255,255,0.7)", fontSize: "13px" }}>{cat}</span>
                    <span style={{ color: c.accent, fontSize: "13px", fontWeight: 700 }}>{s.correct}/{s.total}</span>
                  </div>
                  <div style={{ height: "5px", background: "rgba(255,255,255,0.1)", borderRadius: "3px", overflow: "hidden" }}>
                    <div style={{ height: "100%", width: `${p}%`, background: c.accent, borderRadius: "3px" }} />
                  </div>
                </div>
              );
            })}
          </div>

          <button onClick={recommencer} style={{
            background: "linear-gradient(135deg, #00c6ff, #bf5af2)",
            border: "none", borderRadius: "12px", padding: "14px 32px",
            color: "#fff", fontSize: "16px", fontWeight: 700, cursor: "pointer", width: "100%",
          }}>
            🔄 Recommencer
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={{
      minHeight: "100vh",
      background: `linear-gradient(135deg, ${couleur.bg} 0%, #050505 100%)`,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "'Segoe UI', sans-serif",
      padding: "20px",
      transition: "background 0.5s ease",
    }}>
      <div style={{ maxWidth: "560px", width: "100%" }}>
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
          <span style={{
            background: couleur.light,
            color: couleur.accent,
            padding: "6px 14px",
            borderRadius: "20px",
            fontSize: "13px",
            fontWeight: 700,
            border: `1px solid ${couleur.accent}44`,
          }}>
            {q.categorie}
          </span>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <span style={{ color: "#30d158", fontSize: "13px", fontWeight: 700 }}>✓ {score}</span>
            <span style={{ color: "rgba(255,255,255,0.3)", fontSize: "13px" }}>{current + 1}/{questionsShuffled.length}</span>
          </div>
        </div>

        {/* Barre de progression */}
        <div style={{ height: "4px", background: "rgba(255,255,255,0.1)", borderRadius: "2px", marginBottom: "28px", overflow: "hidden" }}>
          <div style={{
            height: "100%",
            width: `${((current + 1) / questionsShuffled.length) * 100}%`,
            background: `linear-gradient(90deg, ${couleur.accent}, ${couleur.accent}88)`,
            borderRadius: "2px",
            transition: "width 0.4s ease",
          }} />
        </div>

        {/* Question */}
        <div style={{
          background: "rgba(255,255,255,0.05)",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: "20px",
          padding: "26px 22px",
          marginBottom: "16px",
          backdropFilter: "blur(10px)",
        }}>
          <p style={{ color: "#fff", fontSize: "19px", fontWeight: 700, margin: 0, lineHeight: 1.45 }}>
            {q.question}
          </p>
        </div>

        {/* Options */}
        <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "16px" }}>
          {q.options.map((opt, idx) => {
            let bg = "rgba(255,255,255,0.05)";
            let border = "1px solid rgba(255,255,255,0.1)";
            let color = "rgba(255,255,255,0.85)";
            let icon = String.fromCharCode(65 + idx);
            let iconBg = "rgba(255,255,255,0.1)";
            let iconColor = "rgba(255,255,255,0.5)";

            if (selected !== null) {
              if (idx === q.bonne) {
                bg = "rgba(48, 209, 88, 0.15)"; border = "1px solid #30d158"; color = "#30d158";
                icon = "✓"; iconBg = "#30d15822"; iconColor = "#30d158";
              } else if (idx === selected && selected !== q.bonne) {
                bg = "rgba(255, 69, 58, 0.15)"; border = "1px solid #ff453a"; color = "#ff453a";
                icon = "✗"; iconBg = "#ff453a22"; iconColor = "#ff453a";
              } else {
                bg = "rgba(255,255,255,0.02)"; color = "rgba(255,255,255,0.25)"; iconColor = "rgba(255,255,255,0.2)";
              }
            }

            return (
              <button key={idx} onClick={() => choisir(idx)} style={{
                background: bg, border, borderRadius: "14px", padding: "14px 16px",
                color, fontSize: "14px", fontWeight: 500, textAlign: "left",
                cursor: selected !== null ? "default" : "pointer",
                transition: "all 0.2s ease",
                display: "flex", alignItems: "center", gap: "12px",
              }}>
                <span style={{
                  minWidth: "28px", height: "28px", borderRadius: "8px",
                  background: iconBg, display: "flex", alignItems: "center",
                  justifyContent: "center", fontSize: "12px", fontWeight: 700, color: iconColor, flexShrink: 0,
                }}>
                  {icon}
                </span>
                {opt}
              </button>
            );
          })}
        </div>

        {/* Explication */}
        {showExplication && (
          <div style={{
            background: `${couleur.accent}12`,
            border: `1px solid ${couleur.accent}33`,
            borderRadius: "14px",
            padding: "14px 16px",
            marginBottom: "14px",
            color: "rgba(255,255,255,0.75)",
            fontSize: "13px",
            lineHeight: 1.65,
          }}>
            <span style={{ color: couleur.accent, fontWeight: 700 }}>💡 </span>
            {q.explication}
          </div>
        )}

        {/* Bouton suivant */}
        {selected !== null && (
          <button onClick={suivant} style={{
            background: couleur.accent,
            border: "none", borderRadius: "14px", padding: "15px",
            color: "#000", fontSize: "15px", fontWeight: 800,
            cursor: "pointer", width: "100%",
          }}>
            {current + 1 >= questionsShuffled.length ? "Voir les résultats 🏆" : "Question suivante →"}
          </button>
        )}

        <div style={{ textAlign: "center", marginTop: "14px", color: "rgba(255,255,255,0.25)", fontSize: "12px" }}>
          Score : {score} / {current + (selected !== null ? 1 : 0)} répondu{current > 0 ? "es" : "e"}
        </div>
      </div>
    </div>
  );
}
