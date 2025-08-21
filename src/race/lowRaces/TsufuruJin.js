// Tsufuru-jin race definition

import Race from '../Race';
import RaceFeature from '../raceFeatures.js';
import RacePower from '../racePowers.js';

const features = [
    new RaceFeature(
      "Mental",
      "Tsufuru-jin may not be the the physically strongest or forceful of races, but they are apt in finding the weaknesses of their supposed superiors. Tuffles may use INT/4 as their damage modifier for all attacks. When using their blaster, they must use INT/4 as their damage modifier."
    ),
    new RaceFeature(
      "Mental", 
      "Tsufuru-jin are capable of rapidly mastering new skills. Every time they level up, they gain 1 additional power, following the normal rules for gaining powers every level."
    ),
    new RaceFeature(
      "Mental",
      "Tsufuru-jin rely on advanced weaponry to make up for their, otherwise, weak attacks. Tuffles carry around 'Blasters' and other weaponry capable of harming mighty foes. Metal ammunition functions as a Racial Sword that deals 4d10 AP damage per level and becomes AS at Level 11. It, also, has a 'Powercell' pool of 6 Energy. By consuming one energy, you may fire a Ki Offense power through the Blaster. Using a power in this way does not cost Ki; but you must still pay for the cost of any addons. Multi or Combo powers costs 2 Energy, +1 Energy per attack in the combo. When you use your Blaster to fire Ki attacks; you instead use your DEX mod for your strike roll and gain +Level/2 bonus to Strike. You may not fire Invents, powers gained through the Ki Fighting Style, or any other attack that is not a 'Ki Offense Power' through your blaster."
    ),
    new RaceFeature(
      "Mental",
      "Tsufuru-jin are some of the most apt craftsmen in the universe. They may learn 'Recipes', as though they were powers. Recipes allow them to craft items by spending a certain amount of credits and Neo Weeks spent crafting. You may only craft one item at a time. But, crafting does not interfere with training or fighting."
    ),
    new RaceFeature(
      "Mental",
      "Tsufuru-jin start with a regular school of their choice at Level 1 and gain another school for free at Level 5, 10, 15 and 20. If they do not have the INT to learn another school, this takes them temporarily above their limit, but may delay learning future schools. Schools gained in this way grant double the normal stat bonus."
    ),
]

const powers = [
  new RacePower(
    'Reload!',
    "By spending an action, a Tuffle may recharge all of the 6 Energy in his Blaster's Power Cell.",
    'Physical'
  ),
  new RacePower(
    'Advanced Shield Projectors',
    "Tuffles deploy powerful personal shields to protect themselves. This shield costs no Ki and stops up to Levelx50+INT/2 damage, or half in SP damage. At Level 5, this shield stops an additional INT/2 damage from SP and non-SP attacks. This shield may be used an unlimited number of times per round, but only once per combo.",
    'Mental'
  ),
  new RacePower(
    'Arms and Armor Crafting',
    "You may craft or repair Weapons or Armor of any type. This costs half of the normal amount of credits than to buy and takes 1 Neo Week for a weapon or 1 Neo Week per Rank for Armor to complete. Repairing Armor takes half of the time and credits of building a new one.",
    'Mental'
  ),
  new RacePower(
    'Basic Gear Crafting',
    "You may craft Scouters, Dragon Ball Radars, Trinkets, Spacesuits, Spacesuit Repair Kits and Weighted Clothing. This costs half of the normal amount of credits than to buy and takes 2 Neo Weeks.",
    'Mental'
  ),
  new RacePower(
    'Rejuvenator Crafting',
    "You may craft Rejuvenators and their special equipment that allows for warriors to rapidly heal. This costs an amount of credits and time spent crafting it, as detailed below and it must be in a Dwelling. While crafting a Rejuvenator, you may not craft anything else, but may fight and train normally.\nBasic Model: Restores +10% HP and Ki per Neo Hour and doubles LP recovery. Costs 1,000 Credits and 2 Neo Weeks.\nAdvanced Model: Restores +20% HP and Ki per Neo Hour and doubles LP recovery. Costs 3,000 Credits and 4 Neo Weeks. Level 1 criticals are healed in 12 RL Hours.\nDeluxe Model: Restores +30% HP and Ki per Neo Hour and doubles LP recovery. Costs 9,000 Credits and 6 Neo Weeks. Level 2 criticals are healed in 12 RL Hours, Level 1 criticals in 6 RL Hours.\nMiracle Model: Restores +40% HP and Ki per Neo Hour and doubles LP recovery. Costs 27,000 Credits and 8 Neo Weeks. Level 3 criticals are healed in 12 RL Hours, Level 2 criticals in 6 RL Hours, and Level 1 criticals in 3 RL Hours.\nA Model may be 'upgraded' by paying the difference in cost and time. For instance, going from Advanced to Miracle costs 24,000 Credits and 4 Neo Weeks.",
    'Mental'
  ),
  new RacePower(
    'Advanced Recipes',
    "This Recipe may be selected up to twice; Select two of the following benefits. These benefits do not stack with themselves. But, you can apply more than one modification to a single item.\n- Armor crafted by you gains your +(INT/5)% to its HP. The armor, also, grants +INT/4 Resistance. This counts your INT at the time of crafting.\n- You may add a second effect to a Trinket that only has one effect on it. You may not place the same effect on a Trinket twice. This costs 1,000 Credits and 1 Neo Week of crafting.\n- You may add a third effect to a Trinket with two effects on it. You may not place the same effect on a Trinket twice. This costs 1,500 Credits and 1 Neo Week of crafting.\n- Tuffle Weighted Clothing crafted by you does not have a Strike or Dodge penalty associated with it.\n- You may improve the striking point of a weapon; increasing its damage by +1d10 damage per level of the wielder. This costs 300 Credits and 1 Neo Week spent crafting.\n- You may rebalance a weapon, making the 'Slice' power cost -1 End to use up to a minimum of 1. This costs 300 Credits and 1 Neo Week spent crafting.\n- You may improve a weapon's basic design. Basic attacks and the 'Slice' power deal +20% base damage. This costs 300 Credits and 1 Neo Week spent crafting.\n- Dragon Ball Radars made by you have a +15% chance to find the Dragon Balls.",
    'Mental'
  ),
  new RacePower(
    'Operation',
    "Okay, look. When something is broken, you don't duct tape it up and hope it fixes itself... Maybe, you do. But, Tsufuru-jin know that replacement is always more effective (and fun) than letting it heal over time. A Tsufuru-jin may take up to one person under their 'care' and in a single Neo week--using surgery and robotics to repair Critical hits. The results are usually significantly shinier and more obvious than the patient expected. But, few can argue with the results. The Tsufuru-jin can't spend that Neo week crafting (potentially delaying existing projects by 1 Neo Week), but is otherwise not occupied. The person taken under care must spend a certain amount of time recovering from the surgery. During which time, they may not fight. A Tsufuru-jin may work on themselves.\n- AC Broken Bone: 3 RL Hours.\n- DAC Broken Bone: 12 RL Hours.\n- TAC Broken Bone or Removed Limb: 24 RL Hours.",
    'Mental'
  ),
]

export const TsufuruJin = new Race({
  Name: 'Tsufuru-jin',
  Class: 'Low',
  Description: `The Tsufuru-jin (also referred to as a Tuffle) are a frail, yet highly intelligent native of the Planet Plant. They protected their domain from the chaotic race of wilderness-dwelling Saiyans, but ultimately lost the battle and were forced off their own homeworld, now renamed Vegeta. Their civilization was heavily advanced and possessed technology that allows them to move spaceships beyond the speed of light, which is where they now live - in the cold depths of space. They appear to be naturally adept with using all forms of technology beyond the normal means of most races, which has given them an edge at survival that few would be able to achieve in such harsh conditions. They are not a particularly vengeful race. However, they might harbor ill-will or distrust towards Saiyans.`,
  Int: 25,
  Mnt: 13,
  Str: 9,
  Dex: 9,
  Stm: 10,
  Spd: 9,
  Features: features,
  Powers: powers,
  HpAttribute: 8,
  HpLevel: 10,
  KiAttribute: 8,
  KiLevel: 15,
  LpAttribute: 'Stm',
  StartingPoints: 27,
  StartingPointsMax: 9,
  LevelPoints: 5,
  HpModIncrease: [5, 10, 15],
  KiModIncrease: [5, 10, 15],
  StartingPowers: 6,
  LevelupPowers: 2,
});
