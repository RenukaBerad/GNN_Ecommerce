import rubyImg from "@/assets/gemstones/ruby.jpg";
import emeraldImg from "@/assets/gemstones/emerald.jpg";
import sapphireImg from "@/assets/gemstones/sapphire.jpg";
import amethystImg from "@/assets/gemstones/amethyst.jpg";
import topazImg from "@/assets/gemstones/topaz.jpg";
import diamondImg from "@/assets/gemstones/diamond.jpg";
import opalImg from "@/assets/gemstones/opal.jpg";
import pearlImg from "@/assets/gemstones/pearl.jpg";

export interface Gemstone {
  id: string;
  name: string;
  shortDescription: string;
  meaning: string;
  color: string;
  colorClass: string;
  glowClass: string;
  zodiac: string;
  rarity: string;
  hardness: string;
  chakra: string;
  image: string;
  benefits: string[];
  whoShouldWear: string[];
  careInstructions: string[];
}

export const gemstones: Gemstone[] = [
  {
    id: "ruby",
    name: "Ruby",
    shortDescription: "The king of precious stones, symbolizing passion and power.",
    meaning: "Ruby, known as the 'King of Gemstones,' has been treasured for millennia as a symbol of passion, protection, and prosperity. Ancient warriors embedded rubies in their skin believing it would make them invincible in battle. This magnificent stone channels the energy of the sun, igniting courage and enhancing vitality in those who wear it.",
    color: "Deep Red",
    colorClass: "gem-ruby",
    glowClass: "glow-ruby",
    zodiac: "Leo / Aries",
    rarity: "Rare",
    hardness: "9 Mohs",
    chakra: "Heart & Root",
    image: rubyImg,
    benefits: [
      "Enhances passion and vitality in all aspects of life",
      "Promotes courage and confidence during challenging times",
      "Stimulates the heart chakra for emotional healing",
      "Attracts prosperity and success in business ventures",
    ],
    whoShouldWear: [
      "Those seeking to reignite passion in relationships",
      "Leaders and entrepreneurs needing confidence",
      "Individuals born under Leo or Aries zodiac signs",
      "Anyone recovering from emotional trauma",
    ],
    careInstructions: [
      "Clean with warm soapy water and a soft brush",
      "Avoid ultrasonic cleaners for fracture-filled stones",
      "Store separately to prevent scratching other gems",
      "Avoid prolonged exposure to extreme heat",
    ],
  },
  {
    id: "emerald",
    name: "Emerald",
    shortDescription: "The stone of successful love and infinite patience.",
    meaning: "Emerald, the gemstone of Venus, has been revered since ancient times as a symbol of rebirth, love, and wisdom. Cleopatra was famously passionate about emeralds, adorning herself with these verdant treasures. This stone opens the heart chakra, promoting unconditional love and fostering harmony in relationships.",
    color: "Vivid Green",
    colorClass: "gem-emerald",
    glowClass: "glow-emerald",
    zodiac: "Taurus / Gemini",
    rarity: "Very Rare",
    hardness: "7.5 Mohs",
    chakra: "Heart",
    image: emeraldImg,
    benefits: [
      "Promotes unconditional love and emotional healing",
      "Enhances mental clarity and intuition",
      "Brings harmony and domestic bliss to relationships",
      "Supports growth and renewal in all life aspects",
    ],
    whoShouldWear: [
      "Those seeking to attract true love and deepen connections",
      "Artists and creatives needing inspiration",
      "Individuals working through relationship challenges",
      "People born under Taurus or Gemini signs",
    ],
    careInstructions: [
      "Clean gently with lukewarm water and mild soap",
      "Never use ultrasonic or steam cleaners",
      "Avoid exposure to heat and harsh chemicals",
      "Oil treatments may need periodic renewal",
    ],
  },
  {
    id: "sapphire",
    name: "Sapphire",
    shortDescription: "The gem of wisdom, royalty, and divine favor.",
    meaning: "Sapphire has adorned royalty and clergy throughout history, symbolizing wisdom, virtue, and celestial hope. This majestic stone is believed to attract blessings and protect against envy. Associated with the throat chakra, sapphire enhances self-expression and helps one speak their truth with clarity and confidence.",
    color: "Royal Blue",
    colorClass: "gem-sapphire",
    glowClass: "glow-sapphire",
    zodiac: "Virgo / Libra",
    rarity: "Rare",
    hardness: "9 Mohs",
    chakra: "Throat & Third Eye",
    image: sapphireImg,
    benefits: [
      "Enhances wisdom and mental acuity",
      "Promotes truth and authentic self-expression",
      "Calms the mind and reduces anxiety",
      "Attracts abundance and spiritual blessings",
    ],
    whoShouldWear: [
      "Seekers of wisdom and spiritual growth",
      "Those in leadership positions needing clarity",
      "Individuals desiring protection and good fortune",
      "People born under Virgo or Libra signs",
    ],
    careInstructions: [
      "Safe to clean with ultrasonic cleaners (untreated stones)",
      "Warm soapy water works for regular cleaning",
      "Store in a soft cloth to prevent scratches",
      "Avoid harsh chemicals and extreme temperature changes",
    ],
  },
  {
    id: "amethyst",
    name: "Amethyst",
    shortDescription: "The spiritual stone of peace and transformation.",
    meaning: "Amethyst, the 'Stone of Sobriety,' has been prized since ancient Greece for its ability to prevent intoxication and promote clear-headedness. This royal purple gem is a powerful protector and spiritual enhancer, opening the third eye and crown chakras to facilitate meditation, intuition, and connection to higher realms.",
    color: "Royal Purple",
    colorClass: "gem-amethyst",
    glowClass: "glow-amethyst",
    zodiac: "Pisces / Aquarius",
    rarity: "Common",
    hardness: "7 Mohs",
    chakra: "Crown & Third Eye",
    image: amethystImg,
    benefits: [
      "Promotes peace, calm, and emotional balance",
      "Enhances spiritual awareness and intuition",
      "Aids in overcoming addictions and bad habits",
      "Improves sleep quality and dream recall",
    ],
    whoShouldWear: [
      "Those seeking spiritual enlightenment",
      "Individuals struggling with stress or anxiety",
      "People working on breaking negative patterns",
      "Those born under Pisces or Aquarius signs",
    ],
    careInstructions: [
      "Clean with warm soapy water and soft cloth",
      "Avoid prolonged exposure to direct sunlight",
      "Safe for ultrasonic cleaning",
      "Store away from heat sources to preserve color",
    ],
  },
  {
    id: "topaz",
    name: "Imperial Topaz",
    shortDescription: "The stone of strength, intellect, and good fortune.",
    meaning: "Imperial Topaz, with its warm golden-orange hues, has been associated with the sun god Ra in ancient Egypt. This powerful stone is believed to attract abundance and success while enhancing mental clarity. It stimulates the solar plexus chakra, boosting self-confidence and personal power.",
    color: "Golden Orange",
    colorClass: "gem-topaz",
    glowClass: "glow-topaz",
    zodiac: "Scorpio / Sagittarius",
    rarity: "Rare",
    hardness: "8 Mohs",
    chakra: "Solar Plexus",
    image: topazImg,
    benefits: [
      "Attracts abundance, success, and good fortune",
      "Enhances creativity and manifestation abilities",
      "Boosts self-confidence and personal power",
      "Promotes generosity and joy",
    ],
    whoShouldWear: [
      "Entrepreneurs and business professionals",
      "Those seeking to manifest their goals",
      "Individuals needing a confidence boost",
      "People born under Scorpio or Sagittarius signs",
    ],
    careInstructions: [
      "Clean with warm soapy water",
      "Avoid steam or ultrasonic cleaners",
      "Protect from sharp blows (perfect cleavage)",
      "Store separately in a soft pouch",
    ],
  },
  {
    id: "diamond",
    name: "Diamond",
    shortDescription: "The eternal symbol of purity, strength, and invincibility.",
    meaning: "Diamond, the hardest natural substance on Earth, symbolizes eternal love, purity, and invincibility. Ancient Hindus placed diamonds in the eyes of deity statues, believing they had divine power. This magnificent gem amplifies energy, bringing clarity of mind and helping the wearer connect with their highest self.",
    color: "Crystal Clear",
    colorClass: "gem-diamond",
    glowClass: "glow-diamond",
    zodiac: "Aries / All Signs",
    rarity: "Rare",
    hardness: "10 Mohs",
    chakra: "Crown",
    image: diamondImg,
    benefits: [
      "Amplifies energy and intentions",
      "Promotes clarity, purity, and enlightenment",
      "Symbolizes eternal love and commitment",
      "Enhances inner strength and courage",
    ],
    whoShouldWear: [
      "Those celebrating eternal love and commitment",
      "Individuals seeking clarity and enlightenment",
      "People born in April (birthstone)",
      "Anyone desiring to amplify positive energy",
    ],
    careInstructions: [
      "Safe for ultrasonic and steam cleaning",
      "Clean regularly with ammonia-based solution",
      "Check prongs periodically for loose settings",
      "Store separately as diamonds can scratch other gems",
    ],
  },
  {
    id: "opal",
    name: "Fire Opal",
    shortDescription: "The stone of creativity, passion, and mystical wonder.",
    meaning: "Opal, with its mesmerizing play of colors, has been called the 'Queen of Gems' and was believed by ancient Romans to be the most powerful of all stones. This enchanting gem stimulates creativity and originality, encouraging freedom and independence. It amplifies emotions and helps release inhibitions.",
    color: "Fiery Iridescent",
    colorClass: "gem-opal",
    glowClass: "glow-opal",
    zodiac: "Libra / Scorpio",
    rarity: "Rare",
    hardness: "5.5 Mohs",
    chakra: "All Chakras",
    image: opalImg,
    benefits: [
      "Stimulates creativity and artistic expression",
      "Enhances emotional depth and spontaneity",
      "Promotes hope, purity, and innocence",
      "Amplifies traits and brings them to surface",
    ],
    whoShouldWear: [
      "Artists, writers, and creative professionals",
      "Those seeking to embrace their true selves",
      "Individuals wanting to enhance intuition",
      "People born under Libra or Scorpio signs",
    ],
    careInstructions: [
      "Clean only with damp soft cloth",
      "Never use ultrasonic or steam cleaners",
      "Avoid extreme temperature changes",
      "Store in moist cotton to prevent cracking",
    ],
  },
  {
    id: "pearl",
    name: "South Sea Pearl",
    shortDescription: "The organic gem of purity, wisdom, and feminine grace.",
    meaning: "Pearls, born from the sea, represent purity, innocence, and wisdom gained through experience. Ancient cultures believed pearls were tears of the gods or dewdrops filled with moonlight. These luminous gems have a calming effect and are associated with the moon, enhancing feminine energy and emotional balance.",
    color: "Lustrous White",
    colorClass: "gem-pearl",
    glowClass: "glow-pearl",
    zodiac: "Cancer / Gemini",
    rarity: "Rare",
    hardness: "2.5 Mohs",
    chakra: "Crown & Third Eye",
    image: pearlImg,
    benefits: [
      "Promotes purity, integrity, and loyalty",
      "Enhances personal integrity and focus",
      "Calms and balances emotions",
      "Attracts wealth and luck",
    ],
    whoShouldWear: [
      "Those seeking emotional balance and calm",
      "Individuals celebrating milestones and new beginnings",
      "People born under Cancer or Gemini signs",
      "Anyone wanting to enhance their feminine energy",
    ],
    careInstructions: [
      "Wipe with soft damp cloth after wearing",
      "Never use ultrasonic or steam cleaners",
      "Avoid contact with perfumes, hairspray, cosmetics",
      "Store separately in a soft cloth bag",
    ],
  },
];

export const getGemstoneById = (id: string): Gemstone | undefined => {
  return gemstones.find((gem) => gem.id === id);
};
