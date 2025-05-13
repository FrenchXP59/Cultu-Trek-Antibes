// src/data/placesData.js

export const PLACES_DATA = [
  {
    id: 1,
    lieu: "Place Nationale",
    latitude: 43.58125,
    longitude: 7.12590,
    questions: [
      {
        id: 101,
        question: "En quelle année fut érigée la colonne sur la place nationale ?",
        reponses_acceptables: ["1818", "année 1818", "en 1818"],
        indice: "C'est l'année où Louis XVIII était au pouvoir.",
        qcm: ["1800", "1818", "1830", "1850"],
        bonne_reponse: "1818"
      },
      {
        id: 102,
        question: "Quel roi de France est mentionné sur la colonne ?",
        reponses_acceptables: ["Louis XVIII", "Louis 18"],
        indice: "Il a régné après Napoléon et portait le même prénom que plusieurs autres rois célèbres.",
        qcm: ["Louis XIV", "Louis XV", "Louis XVIII", "Louis XVI"],
        bonne_reponse: "Louis XVIII"
      }
    ],
    defi: "Prenez une photo de la colonne et trouvez la meilleure perspective.",
    infoShort: "Place Nationale, 06600 Antibes",
    infoLong: "Érigée en 1818, cette colonne marque la restauration monarchique sous Louis XVIII après la chute de Napoléon. Située en plein centre du vieil Antibes, elle symbolise la fidélité de la ville au roi restauré.",
    infoPlus: "La colonne fut installée à l’initiative des royalistes antibois. Une plaque commémorative en bas du monument rappelle ce geste d’allégeance.",
    photo: "/images/villas/1.jpg"
  },
  {
    id: 2,
    lieu: "Musée Peynet",
    latitude: 43.58105,
    longitude: 7.12591,
    questions: [
      {
        id: 201,
        question: "Quelle œuvre emblématique de Peynet est associée à la Saint-Valentin ?",
        reponses_acceptables: ["les amoureux de peynet", "les amoureux", "amoureux", "les amoureux peynet"],
        indice: "Un couple mythique qui symbolise la romance éternelle.",
        qcm: ["Les Mariés de Peynet", "Les Amoureux de Peynet", "Les Sourires de Peynet", "Les Fiançailles de Peynet"],
        bonne_reponse: "Les Amoureux de Peynet"
      },
      {
        id: 202,
        question: "Dans quel pays trouve-t-on deux musées consacrés à Peynet ?",
        reponses_acceptables: ["Japon", "Le Japon", "japon", "le japon"],
        indice: "Un pays d'Asie connu pour ses mangas.",
        qcm: ["Chine", "Corée du Sud", "Japon", "Thaïlande"],
        bonne_reponse: "Le Japon"
      }
    ],
    defi: "Reproduisez un croquis rapide inspiré d'une œuvre exposée.",
    infoShort: "Place Nationale, 06600 Antibes",
    infoLong: "Le musée Peynet abrite une collection unique dédiée à l’illustrateur Raymond Peynet, célèbre pour ses “Amoureux”, symboles universels de romantisme. On y découvre dessins, lithographies, porcelaines et objets rares.",
    infoPlus: "Deux musées japonais, à Karuizawa et Sakuto-cho, sont entièrement dédiés à Peynet. Une statue représentant ses “Amoureux” a également été érigée à Hiroshima.",
    photo: "/images/villas/2.jpg"
  },
  {
    id: 3,
    lieu: "Montée Dor de la Souchère",
    latitude: 43.58095,
    longitude: 7.12842,
    questions: [
      {
        id: 301,
        question: "Qui était Romuald Dor de la Souchère ?",
        reponses_acceptables: ["Archéologue", "Conservateur", "conservateur du musée picasso", "Fondateur", "historien"],
        indice: "Il a joué un rôle clé dans la préservation du patrimoine d’Antibes.",
        qcm: ["Archéologue", "Conservateur", "Fondateur", "Romuald Dor de la Souchère"],
        bonne_reponse: "Romuald Dor de la Souchère"
      }
    ],
    defi: "Choisissez le meilleur angle de vue depuis la montée, avec le musée sur la droite. Prenez une photo d’un bateau passant dans le champ.",
    infoShort: "Accès par la place Mariejol, montée vers le musée Picasso",
    infoLong: "Cette montée pittoresque rend hommage à Romuald Dor de la Souchère, historien et archéologue français, à l’origine de la transformation du château Grimaldi en musée, avant même l’arrivée de Picasso.",
    infoPlus: "Il fut le premier conservateur du musée créé en 1928. Sa vision a permis à ce lieu d’accueillir, quelques années plus tard, les œuvres que Picasso réalisera sur place.",
    photo: "/images/villas/3.jpg"
  },
  {
    id: 4,
    lieu: "Musée Picasso",
    latitude: 43.58088,
    longitude: 7.12817,
    questions: [
      {
        id: 401,
        question: "Quel ancien château abrite aujourd’hui le musée Picasso ?",
        reponses_acceptables: ["Château Grimaldi", "Le Château Grimaldi", "grimaldi", "château grimaldi", "château des Grimaldi"],
        indice: "Son nom rappelle une célèbre famille princière.",
        qcm: ["Château Grimaldi", "Château de la Turbie", "Château d'Antibes", "Château Fort"],
        bonne_reponse: "Château Grimaldi"
      },
      {
        id: 402,
        question: "Quel lien particulier Picasso avait-il avec Antibes avant d'y séjourner en 1946 ?",
        reponses_acceptables: ["Picasso pouvait voir Antibes depuis Malaga", "Depuis sa ville natale de Málaga", "depuis malaga", "malaga", "espagne"],
        indice: "Antibes était visible depuis sa ville natale, située de l’autre côté de la Méditerranée.",
        qcm: ["Picasso pouvait voir Antibes depuis Malaga", "Picasso aimait Antibes", "Picasso résidait à Antibes", "Picasso était né à Antibes"],
        bonne_reponse: "Picasso pouvait voir Antibes depuis Malaga"
      }
    ],
    defi: "Faites un selfie créatif devant le musée, en imitant une œuvre ou une pose inspirée de l’univers de Picasso.",
    infoShort: "Place Mariejol, 06600 Antibes",
    infoLong: "Le musée Picasso d’Antibes occupe le château Grimaldi, forteresse médiévale transformée en musée d’art moderne. En 1946, Picasso y installe son atelier temporaire et y laisse plusieurs œuvres majeures.",
    infoPlus: "C’est ici que Picasso réalisa des fresques murales et des œuvres puissantes comme “La Joie de Vivre”. Il offrit ces œuvres à la ville, marquant le début de la collection du musée.",
    photo: "/images/villas/4.jpg"
  },
  {
    id: 5,
    lieu: "Le Défi de Nicolas Lavarenne (Remparts)",
    latitude: 43.58137,
    longitude: 7.12890,
    questions: [
      {
        id: 501,
        question: "Comment la posture de la sculpture reflète-t-elle le thème du courage et du dépassement de soi ?",
        reponses_acceptables: ["Équilibre précaire", "posture dynamique", "équilibre", "avancée vers l'inconnu", "élan", "tension", "déséquilibre volontaire"],
        indice: "Regardez bien la posture aérienne du personnage : suspendu, prêt à basculer, mais en mouvement.",
        qcm: ["Équilibre précaire", "Assise en contemplation", "Statique", "Inclinée"],
        bonne_reponse: "Équilibre précaire"
      }
    ],
    defi: "Trouvez l’angle parfait pour photographier la sculpture avec la mer en arrière-plan. Bonus si vous capturez l’ombre projetée !",
    infoShort: "Remparts côté mer, près de la Porte Marine",
    infoLong: "Installée sur les remparts d’Antibes, cette sculpture vertigineuse signée Nicolas Lavarenne incarne la quête d’élévation, la prise de risque, le mouvement. L’artiste travaille souvent sur la légèreté et la verticalité.",
    infoPlus: "Le personnage semble défier la gravité, suspendu dans l’espace comme entre deux décisions. Une œuvre puissante à contempler sous différents angles",
    photo: "/images/villas/5.jpg"
  },
  {
    id: 6,
    lieu: "Blind Bench de David David (Port Vauban)",
    latitude: 43.5837060,
    longitude: 7.1275453,
    questions: [
      {
        id: 601,
        question: "Quel phénomène moderne la statue “Blind Bench” critique-t-elle ?",
        reponses_acceptables: [
          "addiction aux smartphones", "addiction", "téléphone", "isolement numérique",
          "isolement", "smartphone", "écrans", "dépendance numérique", "dépendance", "dépendance aux écrans"
        ],
        indice: "Regardez bien ce que fait la personne assise sur le banc.",
        qcm: ["Addiction aux smartphones", "Isolement numérique", "Modernité", "Technologie"],
        bonne_reponse: "Addiction aux smartphones"
      }
    ],
    defi: "Prenez une photo de la statue en essayant de reproduire la même posture… mais sans écran. Juste vous, les yeux fermés, et le banc.",
    infoShort: "Port Vauban, promenade devant la Capitainerie",
    infoLong: "L’œuvre “Blind Bench” de David David représente un homme assis sur un banc, les yeux bandés, absorbé par un smartphone invisible. Elle critique la perte de lien au monde réel et l’isolement moderne.",
    infoPlus: "David David est un artiste niçois engagé. Ses sculptures jouent souvent avec des symboles forts (bandes sur les yeux, postures figées) pour dénoncer l’aliénation contemporaine.",
    photo: "/images/villas/6.jpg"
  },
  {
    id: 7,
    lieu: "Colonne à la Mer (Remparts)",
    latitude: 43.5806698,
    longitude: 7.1285784,
    questions: [
      {
        id: 701,
        question: "Comparez le style de la Colonne à la Mer avec l'architecture environnante. Quels éléments créent le contraste mentionné dans la controverse ?",
        reponses_acceptables: [
          "Matériaux modernes", "Couleurs vives", "Contraste avec pierre historique",
          "contraste avec les remparts", "ne s’intègre pas au paysage", "débat esthétique",
          "moderne", "trop moderne", "moche", "béton", "beton", "laid", "affreux"
        ],
        indice: "Certains adorent son style, d’autres trouvent qu’elle jure avec les remparts historiques.",
        qcm: ["Matériaux modernes", "Couleurs vives", "Contraste avec pierre historique", "Architecture contemporaine"],
        bonne_reponse: "Contraste avec pierre historique"
      },
      {
        id: 702,
        question: "Qui est l’artiste derrière la Colonne à la Mer ?",
        reponses_acceptables: ["Bernard Pagès"],
        indice: "Le nom de l'artiste.",
        qcm: ["Bernard Pagès", "Jean Dupont", "Pierre Martin", "Paul Durand"],
        bonne_reponse: "Bernard Pagès"
      }
    ],
    defi: "Prenez une photo de la Colonne à la Mer avec les remparts ou la vieille ville en arrière-plan. Ajoutez un mot pour exprimer votre impression (ex : choc, modernité, décalage…).",
    infoShort: "Remparts Est sous le musée Picasso",
    infoLong: "Installée à l’entrée Est des remparts, la Colonne à la Mer est une œuvre contemporaine de Bernard Pagès. Elle suscite le débat par son esthétique brute, en contraste avec les murs anciens d’Antibes.",
    infoPlus: "Cette œuvre fait partie d’un programme d’intégration de l’art contemporain dans l’espace public. Bernard Pagès joue ici sur le volume, les matériaux industriels et la verticalité.",
    photo: "/images/villas/7.jpg"
  },
  {
    id: 8,
    lieu: "Plage de la Gravette",
    latitude: 43.58244,
    longitude: 7.12861,
    questions: [
      {
        id: 801,
        question: "En étant sur les remparts situés au-dessus de la plage des Gravettes, quel monument situé à l'est domine cette plage ?",
        reponses_acceptables: ["Fort Carré"],
        indice: "Ce monument domine la plage.",
        qcm: ["Fort Carré", "Château Grimaldi", "Fort d'Antibes", "Remparts d'Antibes"],
        bonne_reponse: "Fort Carré"
      },
      {
        id: 802,
        question: "Quelle particularité géologique donne son nom à la plage de la Gravette ?",
        reponses_acceptables: ["Graviers", "Petits galets"],
        indice: "Les galets donnent leur nom à la plage.",
        qcm: ["Graviers", "Galets", "Petits galets", "Roches"],
        bonne_reponse: "Graviers"
      }
    ],
    defi: "Ramassez au moins 3 déchets pour préserver la plage. Bravo pour votre geste !",
    infoShort: "Sous les remparts, accès par la Porte Marine",
    infoLong: "Nichée entre les remparts et le Port Vauban, la plage de la Gravette est une crique protégée et appréciée des locaux. Sa forme en arc et ses eaux calmes en font un lieu de détente idéal.",
    infoPlus: "Son nom vient du gravier qui la compose, à la différence des plages de sable. Depuis les hauteurs, on aperçoit le Fort Carré. Spot parfait pour observer le ballet des bateaux notamment lors des voiles d'Antibes.",
    photo: "/images/villas/8.jpg"
  },
  {
    id: 9,
    lieu: "Nomade de Jaume Plensa (Port Vauban)",
    latitude: 43.5849520,
    longitude: 7.1306660,
    questions: [
      {
        id: 901,
        question: "Quel alphabet est utilisé pour former la sculpture “Nomade” ?",
        reponses_acceptables: ["Alphabet latin", "Latin", "lettres latines"],
        indice: "C’est l’alphabet le plus utilisé dans le monde.",
        qcm: ["Alphabet latin", "Alphabet cyrillique", "Alphabet arabe", "Alphabet grec"],
        bonne_reponse: "Alphabet latin"
      },
      {
        id: 902,
        question: "Quel est le message que l’artiste Jaume Plensa veut transmettre avec cette œuvre ?",
        reponses_acceptables: ["ouverture", "ouverture au monde", "diversité", "diversité culturelle", "échange", "humanité", "unité", "tolérance", "communication", "connexion", "solidarité"],
        indice: "Cette figure vide tournée vers la mer évoque le lien entre les peuples.",
        qcm: ["Ouverture au monde", "Isolation", "Patriotisme", "Fermeture culturelle"],
        bonne_reponse: "L’ouverture au monde"
      }
    ],
    defi: "Prenez une photo originale en cadrant la mer à travers les lettres du Nomade. Bonus si on vous voit en ombre dans la structure !",
    infoShort: "Môle du Port Vauban, extrémité Est, face à la mer",
    infoLong: "Installé à l’entrée du port, le “Nomade” est une sculpture monumentale composée de lettres de l’alphabet latin. Créée par Jaume Plensa, elle invite à la contemplation et au dialogue entre cultures.",
    infoPlus: "Œuvre emblématique d’Antibes depuis 2010, elle est devenue un symbole de la ville. Vide à l’intérieur, elle évoque la figure humaine en quête de sens, de lien et d’horizon.",
    photo: "/images/villas/9.jpg"
  },
  {
    id: 10,
    lieu: "Fort Carré",
    latitude: 43.58996,
    longitude: 7.12754,
    questions: [
      {
        id: 1001,
        question: "Quelle a été l’une des principales fonctions historiques du Fort Carré ?",
        reponses_acceptables: ["défense militaire", "protection", "protéger la ville", "forteresse", "militaire", "invasion", "défense"],
        indice: "Une fonction historique du fort.",
        qcm: ["Défense militaire", "Protection contre les invasions", "Observatoire", "Réserve militaire"],
        bonne_reponse: "Défense militaire"
      }
    ],
    defi: "Depuis le Nomade, prenez une photo du Fort Carré visible au loin. Ajoutez un filtre ou une mise en scène pour lui donner un air de carte postale.",
    infoShort: "Vue depuis le Nomade, extrémité du Port Vauban",
    infoLong: "Construit au XVIe siècle, le Fort Carré est un bastion militaire en forme d’étoile destiné à surveiller les frontières du royaume. Il surplombe aujourd’hui le port, visible à distance depuis le Nomade.",
    infoPlus: "Bien qu’il soit ouvert à la visite, le Fort Carré peut aussi être admiré de loin : sa silhouette géométrique est l’un des repères visuels emblématiques de l’entrée maritime d’Antibes.",
    photo: "/images/villas/10.jpg"
  },
  {
    id: 11,
    lieu: "Les Halles d’Antibes",
    latitude: 43.58122,
    longitude: 7.12763,
    questions: [
      {
        id: 1101,
        question: "Quel produit local emblématique peut-on déguster ici ?",
        reponses_acceptables: ["Tapenade", "Fromage", "pissaladière", "socca", "olives", "rosé", "tomates", "ratatouille", "aïoli", "légumes", "Charcuterie", "farcis", "petits farcis", "Vin", "produits locaux"],
        indice: "Un incontournable des apéros provençaux, souvent à base d’olives.",
        qcm: ["Tapenade", "Tarte flambée", "Raclette", "Choucroute"],
        bonne_reponse: "Tapenade"
      }
    ],
    defi: "Repérez un étal coloré qui vous donne envie et prenez-le en photo. Vous pouvez aussi noter le nom d’un produit que vous n’aviez jamais vu.",
    infoShort: "Cours Masséna, centre historique d’Antibes",
    infoLong: "Les Halles d’Antibes sont le cœur gourmand de la ville. Ce marché couvert accueille chaque jour producteurs, fromagers, charcutiers et maraîchers, avec des produits typiques de la Provence.",
    infoPlus: "Ne manquez pas les étals de tapenade maison, d’olives noires de Nyons, ou encore les petits farcis niçois. En été, le marché devient un lieu de rendez-vous animé et savoureux.",
    photo: "/images/villas/11.jpg"
  },
  {
    id: 12,
    lieu: "Bar à Absinthe",
    latitude: 43.58082,
    longitude: 7.12743,
    questions: [
      {
        id: 1201,
        question: "Quel est le cadre historique unique dans lequel se trouve le Bar à Absinthe d'Antibes ?",
        reponses_acceptables: ["Sous-sol vouté", "9e siècle", "cave", "voute en pierre", "Maçonnerie romane", "vouté"],
        indice: "Un lieu caché sous terre, parfait pour déguster cette boisson historique.",
        qcm: ["Sous-sol vouté", "9e siècle", "Maçonnerie romane", "Architecture gothique"],
        bonne_reponse: "Sous-sol vouté"
      },
      {
        id: 1202,
        question: "Quel était l'un des usages médicinaux présumés de l'absinthe au 19e siècle ?",
        reponses_acceptables: ["Propriétés antibactériennes", "vermifuge", "stimulant", "Traitement gastrique"],
        indice: "Un usage médical supposé de l'absinthe.",
        qcm: ["Propriétés antibactériennes", "Traitement gastrique", "Digestif", "Antiseptique"],
        bonne_reponse: "Propriétés antibactériennes"
      }
    ],
    defi: "Trouvez l'ancien puits romain dans le sous-sol voûté et décrivez sa reconversion actuelle.",
    infoShort: "25 Cr Masséna, 06600 Antibes",
    infoLong: "Le Bar à Absinthe d’Antibes vous plonge dans une ambiance Belle Époque. Situé dans une cave voûtée du IXe siècle, ce lieu insolite propose de redécouvrir l’absinthe, interdite en France jusqu’en 2011.",
    infoPlus: "Objets anciens, musiques d’époque et déguisements vous permettent de remonter le temps. L’absinthe y est servie selon le rituel classique, avec fontaine à eau, cuillère ajourée et sucre.",
    photo: "/images/villas/12.jpg"
  },
  {
    id: 13,
    lieu: "Jardin des Poètes (Remparts)",
    latitude: 43.578607,
    longitude: 7.126694,
    questions: [
      {
        id: 1301,
        question: "Quel célèbre écrivain français a son buste dans ce jardin ?",
        reponses_acceptables: ["victor hugo", "hugo", "victor-hugo", "buste de victor hugo"],
        indice: "Son nom est associé aux Misérables et à Notre-Dame de Paris.",
        qcm: ["Victor Hugo", "Molière", "Voltaire", "Balzac"],
        bonne_reponse: "Victor Hugo"
      }
    ],
    defi: "Trouvez le buste de Victor Hugo et lisez un extrait de l’un de ses poèmes ou romans à voix haute. Vous pouvez aussi le réciter en silence pour vous.",
    infoShort: "Remparts sud, à l’est de la Porte Marine.",
    infoLong: "Ce petit jardin en surplomb offre une vue paisible sur la mer et un hommage discret à la littérature française. Plusieurs bustes d’écrivains y sont disséminés dans un cadre propice à la contemplation.",
    infoPlus: "Le buste de Victor Hugo témoigne de l’admiration portée à l’auteur, dont l’œuvre a souvent célébré la nature, le peuple et les rivages méditerranéens.",
    photo: "/images/villas/13.jpg"
  }
];
