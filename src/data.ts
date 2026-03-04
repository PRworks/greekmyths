export enum Difficulty {
  MORTAL = 'Mortal',
  HERO = 'Hero',
  GOD = 'God'
}

export interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: string;
  difficulty: Difficulty;
  iconUrl: string; // Direct public URL for the icon
}

export const QUESTIONS: Question[] = [
  // EASY (MORTAL)
  {
    id: 1,
    difficulty: Difficulty.MORTAL,
    text: "Who is the King of the Gods and ruler of Mount Olympus?",
    options: ["Poseidon", "Zeus", "Hades", "Apollo"],
    correctAnswer: "Zeus",
    iconUrl: "https://img.icons8.com/color/512/zeus.png"
  },
  {
    id: 2,
    difficulty: Difficulty.MORTAL,
    text: "Which god rules the sea and carries a trident?",
    options: ["Zeus", "Ares", "Poseidon", "Hermes"],
    correctAnswer: "Poseidon",
    iconUrl: "https://img.icons8.com/color/512/poseidon.png"
  },
  {
    id: 3,
    difficulty: Difficulty.MORTAL,
    text: "What was the giant wooden gift used by the Greeks to enter Troy?",
    options: ["The Trojan Horse", "The Golden Fleece", "The Labyrinth", "The Parthenon"],
    correctAnswer: "The Trojan Horse",
    iconUrl: "https://img.icons8.com/color/512/trojan-horse.png"
  },
  {
    id: 4,
    difficulty: Difficulty.MORTAL,
    text: "Who is the Goddess of Wisdom and war strategy?",
    options: ["Hera", "Aphrodite", "Athena", "Artemis"],
    correctAnswer: "Athena",
    iconUrl: "https://img.icons8.com/color/512/athena.png"
  },
  {
    id: 5,
    difficulty: Difficulty.MORTAL,
    text: "What is the name of the home of the Greek Gods?",
    options: ["Mount Everest", "Mount Olympus", "The Underworld", "Atlantis"],
    correctAnswer: "Mount Olympus",
    iconUrl: "https://img.icons8.com/color/512/mountain.png"
  },
  {
    id: 6,
    difficulty: Difficulty.MORTAL,
    text: "Which hero was famous for his incredible strength?",
    options: ["Perseus", "Hercules", "Odysseus", "Achilles"],
    correctAnswer: "Hercules",
    iconUrl: "https://img.icons8.com/color/512/hercules.png"
  },
  {
    id: 7,
    difficulty: Difficulty.MORTAL,
    text: "Who is the messenger god with winged sandals?",
    options: ["Hermes", "Apollo", "Hephaestus", "Dionysus"],
    correctAnswer: "Hermes",
    iconUrl: "https://img.icons8.com/color/512/hermes.png"
  },
  {
    id: 8,
    difficulty: Difficulty.MORTAL,
    text: "What did Prometheus steal from the gods to give to humans?",
    options: ["Gold", "Fire", "Ambrosia", "Lightning"],
    correctAnswer: "Fire",
    iconUrl: "https://img.icons8.com/color/512/fire.png"
  },
  {
    id: 9,
    difficulty: Difficulty.MORTAL,
    text: "Who is the Goddess of Love and Beauty?",
    options: ["Hera", "Artemis", "Aphrodite", "Demeter"],
    correctAnswer: "Aphrodite",
    iconUrl: "https://img.icons8.com/color/512/aphrodite.png"
  },
  {
    id: 10,
    difficulty: Difficulty.MORTAL,
    text: "Which monster had snakes for hair and could turn people to stone?",
    options: ["The Hydra", "The Minotaur", "Medusa", "The Sphinx"],
    correctAnswer: "Medusa",
    iconUrl: "https://img.icons8.com/color/512/medusa.png"
  },

  // MEDIUM (HERO)
  {
    id: 11,
    difficulty: Difficulty.HERO,
    text: "Which goddess is the twin sister of Apollo and rules the hunt?",
    options: ["Artemis", "Athena", "Hera", "Hestia"],
    correctAnswer: "Artemis",
    iconUrl: "https://img.icons8.com/color/512/artemis.png"
  },
  {
    id: 12,
    difficulty: Difficulty.HERO,
    text: "What is the name of the three-headed dog that guards the Underworld?",
    options: ["Chimera", "Cerberus", "Orthrus", "Typhon"],
    correctAnswer: "Cerberus",
    iconUrl: "https://img.icons8.com/color/512/cerberus.png"
  },
  {
    id: 13,
    difficulty: Difficulty.HERO,
    text: "Which monster is part lion, part goat, and part dragon?",
    options: ["Manticore", "Griffin", "Chimera", "Hydra"],
    correctAnswer: "Chimera",
    iconUrl: "https://img.icons8.com/color/512/chimera.png"
  },
  {
    id: 14,
    difficulty: Difficulty.HERO,
    text: "Who is the God of the Underworld?",
    options: ["Hades", "Thanatos", "Charon", "Ares"],
    correctAnswer: "Hades",
    iconUrl: "https://img.icons8.com/color/512/hades.png"
  },
  {
    id: 15,
    difficulty: Difficulty.HERO,
    text: "Which hero defeated the Minotaur in the Labyrinth?",
    options: ["Theseus", "Perseus", "Jason", "Bellerophon"],
    correctAnswer: "Theseus",
    iconUrl: "https://img.icons8.com/color/512/warrior.png"
  },
  {
    id: 16,
    difficulty: Difficulty.HERO,
    text: "Who is the God of War?",
    options: ["Ares", "Hephaestus", "Apollo", "Dionysus"],
    correctAnswer: "Ares",
    iconUrl: "https://img.icons8.com/color/512/ares.png"
  },
  {
    id: 17,
    difficulty: Difficulty.HERO,
    text: "Which goddess is the mother of Persephone and rules the harvest?",
    options: ["Demeter", "Hera", "Hestia", "Aphrodite"],
    correctAnswer: "Demeter",
    iconUrl: "https://img.icons8.com/color/512/demeter.png"
  },
  {
    id: 18,
    difficulty: Difficulty.HERO,
    text: "What was the name of the winged horse born from Medusa's blood?",
    options: ["Arion", "Pegasus", "Sleipnir", "Chiron"],
    correctAnswer: "Pegasus",
    iconUrl: "https://img.icons8.com/color/512/pegasus.png"
  },
  {
    id: 19,
    difficulty: Difficulty.HERO,
    text: "Who is the God of Fire and the Forge?",
    options: ["Hephaestus", "Hermes", "Apollo", "Ares"],
    correctAnswer: "Hephaestus",
    iconUrl: "https://img.icons8.com/color/512/hephaestus.png"
  },
  {
    id: 20,
    difficulty: Difficulty.HERO,
    text: "Which hero killed the Gorgon Medusa?",
    options: ["Perseus", "Hercules", "Achilles", "Theseus"],
    correctAnswer: "Perseus",
    iconUrl: "https://img.icons8.com/color/512/warrior.png"
  },

  // HARD (GOD)
  {
    id: 21,
    difficulty: Difficulty.GOD,
    text: "How many labors did Hercules have to complete to atone for his crimes?",
    options: ["10", "12", "7", "15"],
    correctAnswer: "12",
    iconUrl: "https://img.icons8.com/color/512/hercules.png"
  },
  {
    id: 22,
    difficulty: Difficulty.GOD,
    text: "Who was the mortal weaver challenged by Athena and turned into a spider?",
    options: ["Arachne", "Penelope", "Ariadne", "Cassandra"],
    correctAnswer: "Arachne",
    iconUrl: "https://img.icons8.com/color/512/spider.png"
  },
  {
    id: 23,
    difficulty: Difficulty.GOD,
    text: "Which Titan was forced to hold up the sky for all eternity?",
    options: ["Cronus", "Atlas", "Prometheus", "Epimetheus"],
    correctAnswer: "Atlas",
    iconUrl: "https://img.icons8.com/color/512/atlas.png"
  },
  {
    id: 24,
    difficulty: Difficulty.GOD,
    text: "What was the name of the ship Jason and the Argonauts sailed on?",
    options: ["The Argo", "The Odyssey", "The Victory", "The Triton"],
    correctAnswer: "The Argo",
    iconUrl: "https://img.icons8.com/color/512/galley.png"
  },
  {
    id: 25,
    difficulty: Difficulty.GOD,
    text: "Who was the first woman created by the gods, who opened a jar of troubles?",
    options: ["Pandora", "Helen", "Medea", "Circe"],
    correctAnswer: "Pandora",
    iconUrl: "https://img.icons8.com/color/512/pandoras-box.png"
  },
  {
    id: 26,
    difficulty: Difficulty.GOD,
    text: "Which god was born from Zeus's thigh?",
    options: ["Dionysus", "Apollo", "Hermes", "Ares"],
    correctAnswer: "Dionysus",
    iconUrl: "https://img.icons8.com/color/512/dionysus.png"
  },
  {
    id: 27,
    difficulty: Difficulty.GOD,
    text: "Who was the musician who tried to rescue his wife Eurydice from the Underworld?",
    options: ["Orpheus", "Apollo", "Pan", "Linus"],
    correctAnswer: "Orpheus",
    iconUrl: "https://img.icons8.com/color/512/lyre.png"
  },
  {
    id: 28,
    difficulty: Difficulty.GOD,
    text: "Which goddess was born from the sea foam?",
    options: ["Aphrodite", "Thetis", "Amphitrite", "Galatea"],
    correctAnswer: "Aphrodite",
    iconUrl: "https://img.icons8.com/color/512/aphrodite.png"
  },
  {
    id: 29,
    difficulty: Difficulty.GOD,
    text: "What was the only part of Achilles that was vulnerable?",
    options: ["His heart", "His eyes", "His heel", "His shoulder"],
    correctAnswer: "His heel",
    iconUrl: "https://img.icons8.com/color/512/achilles-heel.png"
  },
  {
    id: 30,
    difficulty: Difficulty.GOD,
    text: "Who was the king who turned everything he touched into gold?",
    options: ["Midas", "Sisyphus", "Tantalus", "Croesus"],
    correctAnswer: "Midas",
    iconUrl: "https://img.icons8.com/color/512/gold-bars.png"
  }
];
