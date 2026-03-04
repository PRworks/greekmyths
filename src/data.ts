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

const BASE_URL = "https://raw.githubusercontent.com/PRworks/greekmyths/main/img/";

export const QUESTIONS: Question[] = [
  // EASY (MORTAL)
  {
    id: 1,
    difficulty: Difficulty.MORTAL,
    text: "Who is the King of the Gods and ruler of Mount Olympus?",
    options: ["Poseidon", "Zeus", "Hades", "Apollo"],
    correctAnswer: "Zeus",
    iconUrl: `${BASE_URL}zeus_eagle.png`
  },
  {
    id: 2,
    difficulty: Difficulty.MORTAL,
    text: "Which god rules the sea and carries a trident?",
    options: ["Zeus", "Ares", "Poseidon", "Hermes"],
    correctAnswer: "Poseidon",
    iconUrl: `${BASE_URL}poseidon_trident.png`
  },
  {
    id: 3,
    difficulty: Difficulty.MORTAL,
    text: "What was the giant wooden gift used by the Greeks to enter Troy?",
    options: ["The Trojan Horse", "The Golden Fleece", "The Labyrinth", "The Parthenon"],
    correctAnswer: "The Trojan Horse",
    iconUrl: `${BASE_URL}trojan_horse.png`
  },
  {
    id: 4,
    difficulty: Difficulty.MORTAL,
    text: "Who is the Goddess of Wisdom and war strategy?",
    options: ["Hera", "Aphrodite", "Athena", "Artemis"],
    correctAnswer: "Athena",
    iconUrl: `${BASE_URL}athena_owl.png`
  },
  {
    id: 5,
    difficulty: Difficulty.MORTAL,
    text: "What is the name of the home of the Greek Gods?",
    options: ["Mount Everest", "Mount Olympus", "The Underworld", "Atlantis"],
    correctAnswer: "Mount Olympus",
    iconUrl: `${BASE_URL}olympus_mountain.png`
  },
  {
    id: 6,
    difficulty: Difficulty.MORTAL,
    text: "Which hero was famous for his incredible strength?",
    options: ["Perseus", "Hercules", "Odysseus", "Achilles"],
    correctAnswer: "Hercules",
    iconUrl: `${BASE_URL}heracles_club.png`
  },
  {
    id: 7,
    difficulty: Difficulty.MORTAL,
    text: "Who is the messenger god with winged sandals?",
    options: ["Hermes", "Apollo", "Hephaestus", "Dionysus"],
    correctAnswer: "Hermes",
    iconUrl: `${BASE_URL}hermes_winged_sandal.png`
  },
  {
    id: 8,
    difficulty: Difficulty.MORTAL,
    text: "What did Prometheus steal from the gods to give to humans?",
    options: ["Gold", "Fire", "Ambrosia", "Lightning"],
    correctAnswer: "Fire",
    iconUrl: `${BASE_URL}prometheus_fire.png`
  },
  {
    id: 9,
    difficulty: Difficulty.MORTAL,
    text: "Who is the Goddess of Love and Beauty?",
    options: ["Hera", "Artemis", "Aphrodite", "Demeter"],
    correctAnswer: "Aphrodite",
    iconUrl: `${BASE_URL}aphrodite_heart.png`
  },
  {
    id: 10,
    difficulty: Difficulty.MORTAL,
    text: "Which monster had snakes for hair and could turn people to stone?",
    options: ["The Hydra", "The Minotaur", "Medusa", "The Sphinx"],
    correctAnswer: "Medusa",
    iconUrl: `${BASE_URL}medusa_head.png`
  },
  {
    id: 31,
    difficulty: Difficulty.MORTAL,
    text: "Which city was protected by the goddess Athena?",
    options: ["Sparta", "Athens", "Corinth", "Thebes"],
    correctAnswer: "Athens",
    iconUrl: `${BASE_URL}acropolis.png`
  },
  {
    id: 32,
    difficulty: Difficulty.MORTAL,
    text: "What is the name of the goddess of the hearth and home?",
    options: ["Hestia", "Hera", "Demeter", "Artemis"],
    correctAnswer: "Hestia",
    iconUrl: `${BASE_URL}olympian_fire_bowl.png`
  },
  {
    id: 33,
    difficulty: Difficulty.MORTAL,
    text: "Who is the god of music, poetry, and the sun?",
    options: ["Apollo", "Dionysus", "Hermes", "Ares"],
    correctAnswer: "Apollo",
    iconUrl: `${BASE_URL}apollo_sun_rays.png`
  },
  {
    id: 34,
    difficulty: Difficulty.MORTAL,
    text: "Which hero flew too close to the sun with wings made of wax?",
    options: ["Icarus", "Daedalus", "Perseus", "Bellerophon"],
    correctAnswer: "Icarus",
    iconUrl: `${BASE_URL}icarus_wings.png`
  },
  {
    id: 35,
    difficulty: Difficulty.MORTAL,
    text: "What did the Greeks win at the first Olympic Games?",
    options: ["Gold Medals", "Olive Wreaths", "Silver Cups", "Money"],
    correctAnswer: "Olive Wreaths",
    iconUrl: `${BASE_URL}laurel_wreath.png`
  },
  {
    id: 36,
    difficulty: Difficulty.MORTAL,
    text: "Who is the queen of the gods and wife of Zeus?",
    options: ["Hera", "Athena", "Aphrodite", "Demeter"],
    correctAnswer: "Hera",
    iconUrl: `${BASE_URL}hera_peacock_feather.png`
  },
  {
    id: 37,
    difficulty: Difficulty.MORTAL,
    text: "Which god of the forge is known for being the blacksmith of the gods?",
    options: ["Hephaestus", "Ares", "Hermes", "Apollo"],
    correctAnswer: "Hephaestus",
    iconUrl: `${BASE_URL}hephaestus_anvil.png`
  },
  {
    id: 38,
    difficulty: Difficulty.MORTAL,
    text: "What was the name of the golden object Jason went to find?",
    options: ["The Golden Fleece", "The Golden Apple", "The Golden Cup", "The Golden Shield"],
    correctAnswer: "The Golden Fleece",
    iconUrl: `${BASE_URL}golden_fleece.png`
  },
  {
    id: 39,
    difficulty: Difficulty.MORTAL,
    text: "Who is the god of wine and celebrations?",
    options: ["Dionysus", "Apollo", "Hermes", "Pan"],
    correctAnswer: "Dionysus",
    iconUrl: `${BASE_URL}dionysus_thyrsus.png`
  },
  {
    id: 40,
    difficulty: Difficulty.MORTAL,
    text: "Which hero was known for his long journey home after the Trojan War?",
    options: ["Odysseus", "Achilles", "Agamemnon", "Menelaus"],
    correctAnswer: "Odysseus",
    iconUrl: `${BASE_URL}odyssey_ship.png`
  },
  {
    id: 61,
    difficulty: Difficulty.MORTAL,
    text: "Which hero was known for his incredible speed and was raised by bears?",
    options: ["Atalanta", "Hercules", "Theseus", "Jason"],
    correctAnswer: "Atalanta",
    iconUrl: `${BASE_URL}atalanta_apple.png`
  },
  {
    id: 62,
    difficulty: Difficulty.MORTAL,
    text: "What was the name of the beautiful woman whose face launched a thousand ships?",
    options: ["Helen of Troy", "Penelope", "Clytemnestra", "Andromache"],
    correctAnswer: "Helen of Troy",
    iconUrl: `${BASE_URL}helen_of_troy.png`
  },
  {
    id: 63,
    difficulty: Difficulty.MORTAL,
    text: "Which god is the ruler of the sky and often carries a lightning bolt?",
    options: ["Zeus", "Poseidon", "Hades", "Ares"],
    correctAnswer: "Zeus",
    iconUrl: `${BASE_URL}zeus_eagle.png`
  },
  {
    id: 64,
    difficulty: Difficulty.MORTAL,
    text: "What is the name of the mountain where the gods live?",
    options: ["Mount Olympus", "Mount Parnassus", "Mount Ida", "Mount Etna"],
    correctAnswer: "Mount Olympus",
    iconUrl: `${BASE_URL}olympus_mountain.png`
  },
  {
    id: 65,
    difficulty: Difficulty.MORTAL,
    text: "Who is the god of the sea and earthquakes?",
    options: ["Poseidon", "Zeus", "Hades", "Hermes"],
    correctAnswer: "Poseidon",
    iconUrl: `${BASE_URL}poseidon_trident.png`
  },
  {
    id: 66,
    difficulty: Difficulty.MORTAL,
    text: "Which goddess is the patron of the city of Athens?",
    options: ["Athena", "Hera", "Aphrodite", "Artemis"],
    correctAnswer: "Athena",
    iconUrl: `${BASE_URL}athena_owl.png`
  },
  {
    id: 67,
    difficulty: Difficulty.MORTAL,
    text: "What was the name of the giant wooden horse used in the Trojan War?",
    options: ["The Trojan Horse", "The Greek Horse", "The Wooden Horse", "The Iron Horse"],
    correctAnswer: "The Trojan Horse",
    iconUrl: `${BASE_URL}trojan_horse.png`
  },
  {
    id: 68,
    difficulty: Difficulty.MORTAL,
    text: "Who is the goddess of love and beauty?",
    options: ["Aphrodite", "Hera", "Athena", "Artemis"],
    correctAnswer: "Aphrodite",
    iconUrl: `${BASE_URL}aphrodite_heart.png`
  },
  {
    id: 69,
    difficulty: Difficulty.MORTAL,
    text: "Which god is the messenger of the gods and has wings on his sandals?",
    options: ["Hermes", "Apollo", "Ares", "Dionysus"],
    correctAnswer: "Hermes",
    iconUrl: `${BASE_URL}hermes_winged_sandal.png`
  },
  {
    id: 70,
    difficulty: Difficulty.MORTAL,
    text: "Who was the hero who performed twelve labors?",
    options: ["Hercules", "Theseus", "Perseus", "Jason"],
    correctAnswer: "Hercules",
    iconUrl: `${BASE_URL}heracles_club.png`
  },

  // MEDIUM (HERO)
  {
    id: 11,
    difficulty: Difficulty.HERO,
    text: "Which goddess is the twin sister of Apollo and rules the hunt?",
    options: ["Artemis", "Athena", "Hera", "Hestia"],
    correctAnswer: "Artemis",
    iconUrl: `${BASE_URL}artemis_crescent.png`
  },
  {
    id: 12,
    difficulty: Difficulty.HERO,
    text: "What is the name of the three-headed dog that guards the Underworld?",
    options: ["Chimera", "Cerberus", "Orthrus", "Typhon"],
    correctAnswer: "Cerberus",
    iconUrl: `${BASE_URL}cerberus.png`
  },
  {
    id: 13,
    difficulty: Difficulty.HERO,
    text: "Which monster is part lion, part goat, and part dragon?",
    options: ["Manticore", "Griffin", "Chimera", "Hydra"],
    correctAnswer: "Chimera",
    iconUrl: `${BASE_URL}chimera.png`
  },
  {
    id: 14,
    difficulty: Difficulty.HERO,
    text: "Who is the God of the Underworld?",
    options: ["Hades", "Thanatos", "Charon", "Ares"],
    correctAnswer: "Hades",
    iconUrl: `${BASE_URL}hades_helmet.png`
  },
  {
    id: 15,
    difficulty: Difficulty.HERO,
    text: "Which hero defeated the Minotaur in the Labyrinth?",
    options: ["Theseus", "Perseus", "Jason", "Bellerophon"],
    correctAnswer: "Theseus",
    iconUrl: `${BASE_URL}minotaur_head.png`
  },
  {
    id: 16,
    difficulty: Difficulty.HERO,
    text: "Who is the God of War?",
    options: ["Ares", "Hephaestus", "Apollo", "Dionysus"],
    correctAnswer: "Ares",
    iconUrl: `${BASE_URL}ares_shield.png`
  },
  {
    id: 17,
    difficulty: Difficulty.HERO,
    text: "Which goddess is the mother of Persephone and rules the harvest?",
    options: ["Demeter", "Hera", "Hestia", "Aphrodite"],
    correctAnswer: "Demeter",
    iconUrl: `${BASE_URL}demeter_wheat.png`
  },
  {
    id: 18,
    difficulty: Difficulty.HERO,
    text: "What was the name of the winged horse born from Medusa's blood?",
    options: ["Arion", "Pegasus", "Sleipnir", "Chiron"],
    correctAnswer: "Pegasus",
    iconUrl: `${BASE_URL}pegasus_flying.png`
  },
  {
    id: 19,
    difficulty: Difficulty.HERO,
    text: "Who is the God of Fire and the Forge?",
    options: ["Hephaestus", "Hermes", "Apollo", "Ares"],
    correctAnswer: "Hephaestus",
    iconUrl: `${BASE_URL}hephaestus_hammer.png`
  },
  {
    id: 20,
    difficulty: Difficulty.HERO,
    text: "Which hero killed the Gorgon Medusa?",
    options: ["Perseus", "Hercules", "Achilles", "Theseus"],
    correctAnswer: "Perseus",
    iconUrl: `${BASE_URL}medusas_mirror.png`
  },
  {
    id: 41,
    difficulty: Difficulty.HERO,
    text: "Which monster had nine heads, and when one was cut off, two more grew back?",
    options: ["The Hydra", "The Chimera", "The Sphinx", "The Minotaur"],
    correctAnswer: "The Hydra",
    iconUrl: `${BASE_URL}hydra.png`
  },
  {
    id: 42,
    difficulty: Difficulty.HERO,
    text: "Who was the legendary archer who used a bow that only he could string?",
    options: ["Odysseus", "Achilles", "Hercules", "Paris"],
    correctAnswer: "Odysseus",
    iconUrl: `${BASE_URL}odysseus_bow.png`
  },
  {
    id: 43,
    difficulty: Difficulty.HERO,
    text: "Which goddess of the hunt is often associated with the moon?",
    options: ["Artemis", "Athena", "Hera", "Hestia"],
    correctAnswer: "Artemis",
    iconUrl: `${BASE_URL}artemis_crescent.png`
  },
  {
    id: 44,
    difficulty: Difficulty.HERO,
    text: "What was the name of the labyrinth where the Minotaur lived?",
    options: ["The Labyrinth", "The Maze", "The Underworld", "The Parthenon"],
    correctAnswer: "The Labyrinth",
    iconUrl: `${BASE_URL}labyrinth.png`
  },
  {
    id: 45,
    difficulty: Difficulty.HERO,
    text: "Who was the hero who killed the Nemean Lion?",
    options: ["Hercules", "Theseus", "Perseus", "Achilles"],
    correctAnswer: "Hercules",
    iconUrl: `${BASE_URL}nemean_lion_pelt.png`
  },
  {
    id: 46,
    difficulty: Difficulty.HERO,
    text: "Which god is the messenger of the gods and carries the caduceus?",
    options: ["Hermes", "Apollo", "Ares", "Hephaestus"],
    correctAnswer: "Hermes",
    iconUrl: `${BASE_URL}hermes_caduceus.png`
  },
  {
    id: 47,
    difficulty: Difficulty.HERO,
    text: "Who was the hero who rode the winged horse Pegasus?",
    options: ["Bellerophon", "Jason", "Theseus", "Perseus"],
    correctAnswer: "Bellerophon",
    iconUrl: `${BASE_URL}pegasus_flying.png`
  },
  {
    id: 48,
    difficulty: Difficulty.HERO,
    text: "Which goddess is the queen of the underworld and wife of Hades?",
    options: ["Persephone", "Demeter", "Hecate", "Hestia"],
    correctAnswer: "Persephone",
    iconUrl: `${BASE_URL}hades_crown.png`
  },
  {
    id: 49,
    difficulty: Difficulty.HERO,
    text: "Who was the hero who sailed with the Argonauts to find the Golden Fleece?",
    options: ["Jason", "Hercules", "Theseus", "Orpheus"],
    correctAnswer: "Jason",
    iconUrl: `${BASE_URL}argo_ship.png`
  },
  {
    id: 50,
    difficulty: Difficulty.HERO,
    text: "Which monster had the body of a man and the head of a bull?",
    options: ["The Minotaur", "The Centaur", "The Satyr", "The Gorgon"],
    correctAnswer: "The Minotaur",
    iconUrl: `${BASE_URL}minotaur_head.png`
  },
  {
    id: 71,
    difficulty: Difficulty.HERO,
    text: "Which hero was the son of Zeus and Danae, and killed Medusa?",
    options: ["Perseus", "Hercules", "Theseus", "Jason"],
    correctAnswer: "Perseus",
    iconUrl: `${BASE_URL}medusas_mirror.png`
  },
  {
    id: 72,
    difficulty: Difficulty.HERO,
    text: "Who was the queen of the Amazons whose belt Hercules had to retrieve?",
    options: ["Hippolyta", "Penthesilea", "Antiope", "Melanippe"],
    correctAnswer: "Hippolyta",
    iconUrl: `${BASE_URL}hippolyta_belt.png`
  },
  {
    id: 73,
    difficulty: Difficulty.HERO,
    text: "Which hero defeated the Chimera while riding Pegasus?",
    options: ["Bellerophon", "Perseus", "Hercules", "Theseus"],
    correctAnswer: "Bellerophon",
    iconUrl: `${BASE_URL}pegasus_flying.png`
  },
  {
    id: 74,
    difficulty: Difficulty.HERO,
    text: "What was the name of the thread Ariadne gave to Theseus to escape the Labyrinth?",
    options: ["Ariadne's Thread", "The Golden Thread", "The Fate Thread", "The Life Thread"],
    correctAnswer: "Ariadne's Thread",
    iconUrl: `${BASE_URL}labyrinth_thread.png`
  },
  {
    id: 75,
    difficulty: Difficulty.HERO,
    text: "Which hero was the son of King Aegeus and killed the Minotaur?",
    options: ["Theseus", "Perseus", "Hercules", "Jason"],
    correctAnswer: "Theseus",
    iconUrl: `${BASE_URL}minotaur_head.png`
  },
  {
    id: 76,
    difficulty: Difficulty.HERO,
    text: "Who was the sorceress who helped Jason steal the Golden Fleece?",
    options: ["Medea", "Circe", "Hecate", "Calypso"],
    correctAnswer: "Medea",
    iconUrl: `${BASE_URL}medea_cauldron.png`
  },
  {
    id: 77,
    difficulty: Difficulty.HERO,
    text: "Which hero was the son of Peleus and Thetis and fought in the Trojan War?",
    options: ["Achilles", "Odysseus", "Agamemnon", "Ajax"],
    correctAnswer: "Achilles",
    iconUrl: `${BASE_URL}achilles_armor.png`
  },
  {
    id: 78,
    difficulty: Difficulty.HERO,
    text: "What was the name of the ship Jason and the Argonauts sailed on?",
    options: ["The Argo", "The Odyssey", "The Victory", "The Triton"],
    correctAnswer: "The Argo",
    iconUrl: `${BASE_URL}argo_ship.png`
  },
  {
    id: 79,
    difficulty: Difficulty.HERO,
    text: "Who was the hero who killed the Nemean Lion as his first labor?",
    options: ["Hercules", "Theseus", "Perseus", "Jason"],
    correctAnswer: "Hercules",
    iconUrl: `${BASE_URL}nemean_lion_pelt.png`
  },
  {
    id: 80,
    difficulty: Difficulty.HERO,
    text: "Which hero was known for his cleverness and the Trojan Horse?",
    options: ["Odysseus", "Achilles", "Agamemnon", "Menelaus"],
    correctAnswer: "Odysseus",
    iconUrl: `${BASE_URL}trojan_horse.png`
  },

  // HARD (GOD)
  {
    id: 21,
    difficulty: Difficulty.GOD,
    text: "How many labors did Hercules have to complete to atone for his crimes?",
    options: ["10", "12", "7", "15"],
    correctAnswer: "12",
    iconUrl: `${BASE_URL}nemean_lion_pelt.png`
  },
  {
    id: 22,
    difficulty: Difficulty.GOD,
    text: "Who was the mortal weaver challenged by Athena and turned into a spider?",
    options: ["Arachne", "Penelope", "Ariadne", "Cassandra"],
    correctAnswer: "Arachne",
    iconUrl: `${BASE_URL}greek_vase.png`
  },
  {
    id: 23,
    difficulty: Difficulty.GOD,
    text: "Which Titan was forced to hold up the sky for all eternity?",
    options: ["Cronus", "Atlas", "Prometheus", "Epimetheus"],
    correctAnswer: "Atlas",
    iconUrl: `${BASE_URL}atlas_globe.png`
  },
  {
    id: 24,
    difficulty: Difficulty.GOD,
    text: "What was the name of the ship Jason and the Argonauts sailed on?",
    options: ["The Argo", "The Odyssey", "The Victory", "The Triton"],
    correctAnswer: "The Argo",
    iconUrl: `${BASE_URL}argo_ship.png`
  },
  {
    id: 25,
    difficulty: Difficulty.GOD,
    text: "Who was the first woman created by the gods, who opened a jar of troubles?",
    options: ["Pandora", "Helen", "Medea", "Circe"],
    correctAnswer: "Pandora",
    iconUrl: `${BASE_URL}pandoras_box.png`
  },
  {
    id: 26,
    difficulty: Difficulty.GOD,
    text: "Which god was born from Zeus's thigh?",
    options: ["Dionysus", "Apollo", "Hermes", "Ares"],
    correctAnswer: "Dionysus",
    iconUrl: `${BASE_URL}dionysus_grape.png`
  },
  {
    id: 27,
    difficulty: Difficulty.GOD,
    text: "Who was the musician who tried to rescue his wife Eurydice from the Underworld?",
    options: ["Orpheus", "Apollo", "Pan", "Linus"],
    correctAnswer: "Orpheus",
    iconUrl: `${BASE_URL}apollo_lyre.png`
  },
  {
    id: 28,
    difficulty: Difficulty.GOD,
    text: "Which goddess was born from the sea foam?",
    options: ["Aphrodite", "Thetis", "Amphitrite", "Galatea"],
    correctAnswer: "Aphrodite",
    iconUrl: `${BASE_URL}aphrodite_heart.png`
  },
  {
    id: 29,
    difficulty: Difficulty.GOD,
    text: "What was the only part of Achilles that was vulnerable?",
    options: ["His heart", "His eyes", "His heel", "His shoulder"],
    correctAnswer: "His heel",
    iconUrl: `${BASE_URL}achilles_heel.png`
  },
  {
    id: 30,
    difficulty: Difficulty.GOD,
    text: "Who was the king who turned everything he touched into gold?",
    options: ["Midas", "Sisyphus", "Tantalus", "Croesus"],
    correctAnswer: "Midas",
    iconUrl: `${BASE_URL}midas_gold_hand.png`
  },
  {
    id: 51,
    difficulty: Difficulty.GOD,
    text: "Which Titan was the father of Zeus and swallowed his own children?",
    options: ["Cronus", "Atlas", "Prometheus", "Hyperion"],
    correctAnswer: "Cronus",
    iconUrl: `${BASE_URL}cronus_sickle.png`
  },
  {
    id: 52,
    difficulty: Difficulty.GOD,
    text: "Who was the goddess of magic, crossroads, and ghosts?",
    options: ["Hecate", "Circe", "Medea", "Nyx"],
    correctAnswer: "Hecate",
    iconUrl: `${BASE_URL}hecate_torches.png`
  },
  {
    id: 53,
    difficulty: Difficulty.GOD,
    text: "Which monster was a giant with a single eye in the middle of his forehead?",
    options: ["Polyphemus", "Typhon", "Argus", "Geryon"],
    correctAnswer: "Polyphemus",
    iconUrl: `${BASE_URL}cyclops_eye.png`
  },
  {
    id: 54,
    difficulty: Difficulty.GOD,
    text: "Who was the enchantress who turned Odysseus's men into pigs?",
    options: ["Circe", "Medea", "Calypso", "Scylla"],
    correctAnswer: "Circe",
    iconUrl: `${BASE_URL}circe_wand.png`
  },
  {
    id: 55,
    difficulty: Difficulty.GOD,
    text: "Which goddess of victory is often depicted with wings?",
    options: ["Nike", "Iris", "Eos", "Selene"],
    correctAnswer: "Nike",
    iconUrl: `${BASE_URL}nike_wings.png`
  },
  {
    id: 56,
    difficulty: Difficulty.GOD,
    text: "Who was the Titan who gave birth to the sun, moon, and dawn?",
    options: ["Hyperion", "Theia", "Oceanus", "Tethys"],
    correctAnswer: "Hyperion",
    iconUrl: `${BASE_URL}hyperion_sun.png`
  },
  {
    id: 57,
    difficulty: Difficulty.GOD,
    text: "Which monster was a giant whirlpool that swallowed ships?",
    options: ["Charybdis", "Scylla", "The Kraken", "Ceto"],
    correctAnswer: "Charybdis",
    iconUrl: `${BASE_URL}charybdis_whirlpool.png`
  },
  {
    id: 58,
    difficulty: Difficulty.GOD,
    text: "Who were the three goddesses who controlled the thread of life?",
    options: ["The Fates", "The Muses", "The Graces", "The Furies"],
    correctAnswer: "The Fates",
    iconUrl: `${BASE_URL}fate_thread.png`
  },
  {
    id: 59,
    difficulty: Difficulty.GOD,
    text: "Which hero was the son of a nymph and was dipped in the River Styx?",
    options: ["Achilles", "Hercules", "Perseus", "Theseus"],
    correctAnswer: "Achilles",
    iconUrl: `${BASE_URL}achilles_armor.png`
  },
  {
    id: 60,
    difficulty: Difficulty.GOD,
    text: "Who was the architect of the Labyrinth and father of Icarus?",
    options: ["Daedalus", "Hephaestus", "Prometheus", "Atlas"],
    correctAnswer: "Daedalus",
    iconUrl: `${BASE_URL}daedalus_blueprint.png`
  },
  {
    id: 81,
    difficulty: Difficulty.GOD,
    text: "Who was the Titan who was punished by Zeus for giving fire to humanity?",
    options: ["Prometheus", "Atlas", "Epimetheus", "Cronus"],
    correctAnswer: "Prometheus",
    iconUrl: `${BASE_URL}prometheus_fire.png`
  },
  {
    id: 82,
    difficulty: Difficulty.GOD,
    text: "Which goddess was born from the head of Zeus, fully armed and ready for battle?",
    options: ["Athena", "Hera", "Artemis", "Aphrodite"],
    correctAnswer: "Athena",
    iconUrl: `${BASE_URL}athena_owl.png`
  },
  {
    id: 83,
    difficulty: Difficulty.GOD,
    text: "Who was the god of the sun who drove a golden chariot across the sky?",
    options: ["Helios", "Apollo", "Hyperion", "Phaethon"],
    correctAnswer: "Helios",
    iconUrl: `${BASE_URL}apollo_sun_rays.png`
  },
  {
    id: 84,
    difficulty: Difficulty.GOD,
    text: "Which monster was a giant with a hundred eyes, tasked with guarding Io?",
    options: ["Argus", "Polyphemus", "Typhon", "Geryon"],
    correctAnswer: "Argus",
    iconUrl: `${BASE_URL}cyclops_eye.png`
  },
  {
    id: 85,
    difficulty: Difficulty.GOD,
    text: "Who was the goddess of the harvest whose grief caused the seasons?",
    options: ["Demeter", "Hera", "Hestia", "Persephone"],
    correctAnswer: "Demeter",
    iconUrl: `${BASE_URL}demeter_wheat.png`
  },
  {
    id: 86,
    difficulty: Difficulty.GOD,
    text: "Which god of the underworld had a helmet of invisibility?",
    options: ["Hades", "Thanatos", "Charon", "Ares"],
    correctAnswer: "Hades",
    iconUrl: `${BASE_URL}hades_helmet.png`
  },
  {
    id: 87,
    difficulty: Difficulty.GOD,
    text: "Who was the god of sleep and the father of Morpheus?",
    options: ["Hypnos", "Thanatos", "Phobetor", "Icelos"],
    correctAnswer: "Hypnos",
    iconUrl: `${BASE_URL}god_scroll.png`
  },
  {
    id: 88,
    difficulty: Difficulty.GOD,
    text: "Which goddess was the personification of the rainbow and a messenger of the gods?",
    options: ["Iris", "Nike", "Eos", "Selene"],
    correctAnswer: "Iris",
    iconUrl: `${BASE_URL}apollo_sun_rays.png`
  },
  {
    id: 89,
    difficulty: Difficulty.GOD,
    text: "Who was the god of panic and the wild, often depicted with goat legs?",
    options: ["Pan", "Dionysus", "Hermes", "Silvanus"],
    correctAnswer: "Pan",
    iconUrl: `${BASE_URL}pan_pipes.png`
  },
  {
    id: 90,
    difficulty: Difficulty.GOD,
    text: "Which Titan was the mother of the gods and wife of Cronus?",
    options: ["Rhea", "Theia", "Tethys", "Mnemosyne"],
    correctAnswer: "Rhea",
    iconUrl: `${BASE_URL}hera_peacock_feather.png`
  }
];
