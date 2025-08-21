// Ligon race definition
import Race from '../races.js';
import RaceFeature from '../raceFeatures.js';
import RacePower from '../racePowers.js';

const features = [
  new RaceFeature(
    'Mental',
    'Ligons have an unusual mastery of Ki, gaining Max Ki/25 damage to Ki attacks (Charging does not affect this).'
  ),
  new RaceFeature(
    'Physical',
    "The Ligon's secondary pair of eyes gives them an advantage in combat; providing them with a +2 to all Strike and Dodge rolls and immunity to the 'Zanzoken' power. If a Ligon is blinded by 'Taiyoken' power (or something similarly blinding), the Ligon loses these bonuses for the rest of the round."
  ),
  new RaceFeature(
    'Mental',
    "Ligons are immune to their own type of 'Mind Freeze'."
  ),
  new RaceFeature(
    'Physical',
    'Due to their small size, Ligon always have +4 to Dodge rolls.'
  ),
  new RaceFeature(
    'Mental',
    'Ligons start with a Regular School of their choice at Level 1 and gain another school for free at Level 5, 10, 15, and 20. If they do not have the INT to learn another school, this takes them temporarily above their limit, but may delay learning future schools. Schools gained in this way grant double the normal stat bonus.'
  ),
];

const powers = [
  new RacePower(
    'Time Freeze',
    `The Ligon must be Level 2 before taking this power. Three times per round, a Ligon can hold their breath to slow down time, during which only they can move. In combat, everyone else is frozen in stasis and unable to even perceive the world around them. By spending two Round uses of this power, this allows a Ligon to take up to their Levelx2 Actions as a single Action, as long as none of those extra actions have any direct impact on an opponent or attended objects. This means that all attacks are out, but things like Charging (even charging into an attack!) is okay. The Ligon can charge, use items that do not affect another person, pick up unattended items or similar actions. The Ligon must spend 3 END per extra action taken, in addition to any normal costs they might need to pay. Since time does not actually pass, no Regen occurs during these "extra" actions. "They, also, do not count towards the duration of power and effects."`,
    'Mental'
  ),
  new RacePower(
    'Mind Freeze',
    `The Ligon must have the 'Time Freeze' power and be Level 4, before taking this power. Usable once per round, a Ligon may focus their time-warping abilities on an opponent's mind and body, rendering them unable to move at all--even to defend themselves! This is resolved as a Telekinetic attack against all opponents, costing 10% of the Ligon's Current Ki (including any Charging Ki Pools and Megacharge Ki Pools!) and 3 End. It has a -6 Strike Penalty and the Ligon must roll separately against each target they want to 'Mind Freeze'. Temporary bonuses to strike (such as Focused, for example) must be paid for separately for each strike roll. If it hits, the target becomes "Time Locked." While Time Locked, the victim can do nothing but roll (40+(Their MNT or STR)/5 - (The Ligon's MNT)/5 - 1d100). On a 0 or higher; they break free of the psychokinetic hold and may act normally on their next action. On a -1 or lower, the Ligon may pay 10% of their current Ki and 3 END to keep them Time Locked until their next action. This can last up to a maximum of the Ligon's 2+(Level/4) consecutive actions. While someone who is Time Locked is unable to defend themselves, any attacks aimed at them become Locked as well. The attack is held in suspended animation mere inches from the target. When the Time Lock ends (either because its duration elapses, the Ligon chooses not to pay or because the victim broke free), the pending attacks are resolved with no defense or reflexive actions, except the use of Auras and Shields. After all reductions, any attacks that deal damage only deal 20% initially. For every Action the Victim takes after, they continue to take 20% until 100% of the damage has been recieved. Attacks that don't deal damage are simply negated against someone Time Locked. Als, the level of all incoming Critical Hits are reduced by one category (AC is negated). If the Ligon using this power is killed or rendered unconscious while they have a victim Time Locked, then not only does the Lock end but all attacks against the victim automatically fail.`,
    'Mental'
  ),
];

const Ligon = new Race({
  Name: 'Ligon',
  Class: 'Low',
  Description: `Ligons are a small, green-skinned people with four eyes. They are renowned for both their ability to manipulate time and their unrelenting refusal to provide any details about their home world, Ligon. This paranoia is so widespread that it often follows Ligons to other planets they live on, such is the case of Liquius where even the humans and reptiles on the planet feel the same paranoia about world visitors. Though one would be wise not to say this to them, Ligon are very much distant relatives to frogs. Though they are humanoid, they are amphibians, not mammals.\n\nWhen Ligons evolve from tadpoles, they are very similar to baby humans (save for the extra eyes and green skin!). There, they begin to learn to walk and adjust to living bipedal lives. Despite being amphibians, Ligons have a strict sense of honor and religious duty as well as mate for life. Furthermore, finding a Ligon that is not deeply devoted to the Kaioshins is especially rare, even for those who grew up outside of the cultural boundaries of Ligon and Liquius.`,
  Int: 18,
  Mnt: 16,
  Str: 8,
  Dex: 10,
  Stm: 12,
  Spd: 10,
  Features: features,
  Powers: powers,
  HpAttribute: 11,
  HpLevel: 20,
  KiAttribute: 12,
  KiLevel: 20,
  LpAttribute: 15,
  StartingPoints: 27,
  StartingPointsMax: 9,
  LevelPoints: 5,
  HpModIncrease: [5, 10, 15],
  KiModIncrease: [5, 10, 15],
  StartingPowers: 6,
  LevelupPowers: 2,
});

export default Ligon;
