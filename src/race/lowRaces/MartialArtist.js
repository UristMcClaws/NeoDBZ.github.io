// Martial Artist race definition
import Race from '../races.js';
import RaceFeature from '../raceFeatures.js';
import RacePower from '../racePowers.js';

const features = [
  new RaceFeature(
    'Mental',
    'Martial Artists have Ki Regen equal to Levelx5.'
  ),
  new RaceFeature(
    'Mental',
    'If a Martial Artist fires a Discharge (or any improved version of it) for half or less of its Ki cost, it is instead free. Addons are still paid for seperately.'
  ),
  new RaceFeature(
    'Physical',
    `'Martial Artist Aura' - When you declare the use of this ability with a power, it allows you to pay Ki costs by 'spending' your HP instead. or you can use it as a defensive Aura: 
    <ul><li>This Aura costs 1 Ki for every 1 damage and is SP Resistant and may be used Reflexively. There is no limit to the amount of Ki that may be spent. Unlike other Auras, this may be used multiple times against Combo attacks. HP may not be used to fuel this Martial Artist Aura.</li>
     <li>This does not mean Martial Artists can freely swap HP and Ki.</li>
    <li>The cost of this ability can never be reduced by more than 50% with suppression; even at 90% suppression.</li></ul>`
  ),
  new RaceFeature(
    'Mental',
    'Martial Artists start with a Regular School of their choice at Level 1 and gain another school for free at Level 5, 10, 15, and 20. If they do not have the INT to learn another school, this takes them temporarily above their limit, but may delay learning future schools. Schools gained in this way grant double the normal stat bonus. Martial Artists can not know more than one school for every 8 points of INT.'
  ),
  new RaceFeature(
    'Mental',
    "Truly experienced Martial Artists are great at mixing everything they have learned into a big pot of techniques that can be molded into their own, growing school. At Level 7; a Martial Artist can submit a 'Player Created School' to the GMs, as if they'd possessed it from Level 1. Simply having the School doesn't make people want it, though and as the Martial Artist improves, so does its fame. At Level 12; the Martial Artist can then teach their school to up to two other player characters. This training takes 2 Neo Weeks. During this time, neither player is allowed to fight or EXP train."
  ),
];

const powers = [
  new RacePower(
    'Trained',
    `This power is automatically obtained at Level 1.<br>
    A Martial Artist chooses one of the powers granted to them by their first Regular School's power list; that power is considered to be three levels higher than it actually is. If you already have a power and gain a higher level as a result, they can't choose that power to be Trained. The School's Invent can be chosen.`,
    'Mental'
  ),
  new RacePower(
    'Supreme Shield',
    `The Martial Artist must be Level 5 before taking this power.<br>
    The Martial Artist can now use his 'Martial Artist Aura' to block one Unpreventable attack per round, at the cost of 1 Ki per 1 damage. There is no limit to the amount of Ki that can be spent. This ability counts as a reflexive shield, like his normal Martial Artist Aura. Suppress Powerlevel does not reduce the costs of this shield.`,
    'Physical'
  ),
];

const MartialArtist = new Race({
  Name: 'Martial Artist',
  Class: 'Low',
  Description: `Martial Artists are the elite of their kind, who have taken the martial arts to incredible levels. Whereas, most races have a basic understanding of Ki from birth, humans have to work to grasp even the smallest understanding of it. However, those that do are known to be just as strong as the strongest warriors from races born with the most intricate knowledge of the arts. As such, these humans are renowned for their mastery of Ki and special martial arts schools. Many are sought out to be learned from.
  <br><br>
  Furthermore, humans are the most populous race in the universe. Having been one of the first races to develop intergalactic travel, their numbers spread across the universe. It is rare to find a world not inhabited by humans. Even stranger is the fact that some planets, such as Bayushi, were already populated by humans for generations before anyone from Earth stepped foot on it. Perhaps, there is something special about what caused the evolution of humans, which causes it to reproduce itself so often elsewhere?
  <br><br>
  Average Height: 5'10" (177 cm)<br>
  Average Weight: 180 pounds (81 kg)<br>
  Life Span: 60-80 years.<br>
  Interesting Traits: Especially resilient, Adaptable.
  <br><br>
  Example: Krillin (Kuririn).
  `,
  Int: 16,
  Mnt: 16,
  Str: 10,
  Dex: 11,
  Stm: 12,
  Spd: 10,
  Features: features,
  Powers: powers,
  HpAttribute: 10,
  HpLevel: 15,
  KiAttribute: 13,
  KiLevel: 25,
  LpAttribute: 15,
  StartingPoints: 27,
  StartingPointsMax: 9,
  LevelPoints: 5,
  HpModIncrease: [4, 8, 12],
  KiModIncrease: [6, 12, 18],
  StartingPowers: 6,
  LevelupPowers: 2,
});

export default MartialArtist;
