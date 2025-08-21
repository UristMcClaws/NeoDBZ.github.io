
import Race from "../races.js";
import RaceFeature from "../raceFeatures.js";
import RacePower from "../racePowers.js";

const features = [
  new RaceFeature(
    "Mental",
    "Yardrats have a natural talent to slightly warp space and time, making them appear faster than they really are in reality. They gain a +2 to Initiative rolls and +1 APR."
  ),
  new RaceFeature(
    "Mental",
    "Yardrats have a great mastery of their Ki, granting Max Ki/25 damage to Ki attacks. (Charging does not affect this)"
  ),
  new RaceFeature(
    "Mental",
    "Due to their overwhelming abilities with Ki, they are, also, proficient with the mind. They gain Levelx5 damage to TK and Hybrid powers."
  ),
  new RaceFeature(
    "Physical",
    "Due to their small size, Yardrats have a +4 to Dodge rolls."
  ),
  new RaceFeature(
    "Mental",
    "Yardrats have a unique understanding of Ki and can use it defensively in ways other races can't. When a Yardrat uses the 'Aura of Protection' power, it has a limit of 35 Ki per Level instead of the regular 25. Yardrats can also use up to 30 Ki per Level with the Supreme Aura power."
  ),
  new RaceFeature(
    "Mental",
    "Yardrats start with a school of their choice at Level 1 and gain another school for free at Level 5, 10, 15, and 20. If they do not have the INT to learn another school, this takes them temporarily above their limit, but may delay learning future schools. Schools gained in this way grant double the normal stat bonus."
  ),
];

const powers = [
  new RacePower(
    "Temporal Distortion",
    "The Yardrat must be Level 3 before taking this power. By freezing time, the Yardrat can automatically Dodge an attack like using the 'Freeze' Telekinesis power, but may be used once every two rounds and costs only 150 Ki and 3 End.",
    "Mental"
  ),
  new RacePower(
    "Shunkan Idou",
    "The Yardrat must have the Temporal Distortion power and be Level 6 before taking this power. More commonly known as 'Instant Transmission', it allows the Yardrat to teleport themself to any place that they can see or to a person whose Ki that they can Sense. When used in battle; it gives a MNT/5 bonus to a Strike or Dodge roll, replacing other Superspeeds. It costs 150 Ki and 3 End to use and can only be used once every two rounds. By touching them, one other person may be brought with the Yardrat (usually, this means they are in a grapple) and by paying an additional 150 Ki and 3 End. Used in this way, this lets the Yardrat dodge an attack originating from outside a grapple and/or allows them to help other people escape (see IT Escape). The other person need not be willing, but they do get a Grapple Break attempt (even Flare Break) to prevent it if they choose. When the Yardrat reaches Level 12, they can teach this power to a single person, who must be at least Level 8. Teaching this power takes two Neo weeks. During which time, neither person may fight or train. The person taught this technique can not teach it to anyone.",
    "Mental"
  ),
];

const Yardrat = new Race({
  Name: "Yardrat",
  Class: "Low",
  Description: `Yardrats are a mysterious race known for their unique abilities to manipulate space and matter. They are peaceful, reclusive, and possess a deep understanding of advanced techniques such as Instant Transmission. Yardrats are small, with a somewhat frail appearance, but their mastery of esoteric powers makes them formidable in their own right.`,
  Int: 16,
  Mnt: 18,
  Str: 8,
  Dex: 10,
  Stm: 10,
  Spd: 10,
  Features: features,
  Powers: powers,
  HpAttribute: 10, // HP: 10 x STM + 15 x Level
  HpLevel: 15,
  KiAttribute: 14, // Ki: 14 x MNT + 25 x Level
  KiLevel: 25,
  LpAttribute: 14, // LP: 14 x STM
  StartingPoints: 27,
  StartingPointsMax: 9,
  LevelPoints: 5,
  HpModIncrease: [4, 8, 12],
  KiModIncrease: [6, 12, 18],
  StartingPowers: 6,
  LevelupPowers: 2,
});

export default Yardrat;
