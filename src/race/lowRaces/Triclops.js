// Triclops race definition
import Race from '../races.js';
import RaceFeature from '../raceFeatures.js';
import RacePower from '../racePowers.js';


const features = [
  new RaceFeature(
    'Physical',
    "The third eye of a Triclops gives them an advantage in combat, granting +1 to all Strike and Dodge rolls and immunity to the 'Zanzoken' power. If a Triclops is blinded by 'Taiyoken' or a similar blinding power, the Triclops loses these bonuses for the rest of the round."
  ),
  new RaceFeature(
    'Mental',
    'Triclops have an unusual mastery of Ki, granting Max Ki/25 damage to Hand-to-Hand and Sword attacks (Charging does not affect this).'
  ),
  new RaceFeature(
    'Physical',
    'Triclops are capable of pushing their body to the absolute brink of exhaustion and beyond. They have STMx1.5 END. But more impressively, reaching 0 or less END on their own turn, does not cause a Triclops to pass out. Instead, at the end of their turn; they are brought up to 1 END remaining. Splitform/Trifork/Quadform de-activates. They, then, take 20% of their Maximum HP in unpreventable damage. If they drop to 0 or less END outside of their own turn (for instance, from being Choked), they pass out normally.'
  ),
  new RaceFeature(
    'Physical',
    'Triclops are known for rapidly recovering from almost any injury. They Regen Levelx2 HP, or Levelx1 LP. They also heal from serious injuries at a rapid rate; halved if they also have the Immortal Unique.'
  ),
  new RaceFeature(
    'Mental',
    "At Level 12, a Triclops is able to pass on the knowledge of their signature move to other people. Although, the result is less stable than for a Triclops. You may teach up to two students 'SplitForm' or a single student 'SplitForm' and 'Trifork'. The training takes 2 Neo Weeks to learn. During this time, neither player is allowed to fight."
  ),
  new RaceFeature(
    'Mental',
    'Triclops start with a Regular School of their choice at Level 1 and gain another school for free at Level 5, 10, 15, and 20. If they do not have the INT to learn another school, this takes them temporarily above their limit, but may delay learning future schools. Schools gained in this way grant double the normal stat bonus. Triclops can not know more than one school for every 9 points of INT.'
  ),
];

const powers = [
  new RacePower(
    'Splitform',
    "This power is automatically obtained at Level 1. This power may be used to split into multiple forms or multiple arms! You may activate or deactivate this power as an Action, or as a Pre-Round Action. When it is first learned you may only seperate into two Splits. Dividing your power between multiple bodies is taxing in focus and energy. You lose 2 END per Split beyond the first, per action this Power is active and you lose 1 APR per Split while this Power is active. In return, you gain the following benefits: (see documentation for full details).",
    'Physical'
  ),
  new RacePower(
    'Shin-Ki-Ko-Ho Blast',
    'The Triclops must be Level 2 before taking this power. This is a technique primarily meant to hold opponents back. The Triclops forms a Rhombus with his hands and releases a ray of energy that Stuns anything it damages. This is a Ki attack with a +5 bonus to Strike, which can be used an unlimited number of times per round, but only once per APR. It deals 1d6x10 damage plus 1d6x10 per additional level and is Armor Piercing and Shield Piercing. If someone is damaged by the Blast, they are stunned. This attack costs 15 Ki per level and 7 END.',
    'Mental'
  ),
  new RacePower(
    'Trifork',
    "The Triclops must be Level 3 before taking this power. While you have 50% of your maximum HP or more, you may Split into three bodies using 'Splitform'. However, you may not inflict Critical Effects while you have three or more Splits active. A critical roll will still make the attack AP/SP/Stun as normal. You may maintain multiple splits while below 50% HP, you just can't make them.",
    'Mental'
  ),
  new RacePower(
    'Quad-Form',
    "The Triclops must be Level 4 before taking this power. While you have 75% of your maximum HP or more, you may Split into four bodies using 'Splitform'. However, you may not inflict Critical Effects while you have three or more Splits active. A critical roll will still make the attack AP/SP/Stun as normal. You may maintain multiple splits while below 75% HP, you just can't make them.",
    'Physical'
  ),
  new RacePower(
    'Teamwork',
    "This power is automatically obtained at Level 5. Your Splits become significantly better at using group tactics to take opponents down together. You've become immune to area of effect attacks from your own Splits, such as the power 'Taiyoken'. If multiple Splits attack the same person at the same time; their DEX and MNT are increased by 5% for each Split attacking for purposes of strike rolls only (+10% with two, +15% with three, +20% with four).",
    'Physical'
  ),
];


const Triclops = new Race({
  Name: 'Triclops',
  Class: 'Low',
  Description: `Evolution is an odd thing, changing one race ever so slightly. After years and years of being the top of the food chain on Earth, Humans took a turn in the evolutionary circle. Unlike their advanced human counterparts (Martial Artists), they do not have a great grasp on harnessing their Ki. Instead, they are more physically powerful. Not only are they stronger in the ways of hand to hand combat, they are rather adept at separating techniques, able to split into as many as four separate beings. Above all, they have evolved a beneficial third eye, allowing them to see better than most other races. Unfortunately, though, they seem to have lost the ability to grow hair, as their bodies are very efficient at processing 'waste'.`,
  Int: 16,
  Mnt: 11,
  Str: 13,
  Dex: 11,
  Stm: 14,
  Spd: 10,
  Features: features,
  Powers: powers,
  HpAttribute: 11,
  HpLevel: 25,
  KiAttribute: 12,
  KiLevel: 15,
  LpAttribute: 15,
  StartingPoints: 27,
  StartingPointsMax: 9,
  LevelPoints: 5,
  HpModIncrease: [4, 8, 12],
  KiModIncrease: [5, 10, 15],
  StartingPowers: 6,
  LevelupPowers: 2,
});

export default Triclops;
