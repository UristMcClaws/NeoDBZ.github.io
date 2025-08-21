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
    `At Level 12, a Triclops is able to pass on the knowledge of their signature move to other people. Although, the result is less stable than for a Triclops. You may teach up to two students 'SplitForm' or a single student 'SplitForm' and 'Trifork'. The training takes 2 Neo Weeks to learn. During this time, neither player is allowed to fight.<br><br>
    When a non-Triclops uses Splitform or Trifork, their Split is destroyed after receiving 25% of their Maximum HP as damage and they may only make Splits while above 75% HP. These Splits may not inflict Critical Effects, but the Attack still becomes AP/SP and Stuns as normal.`,
  ),
  new RaceFeature(
    'Mental',
    'Triclops start with a Regular School of their choice at Level 1 and gain another school for free at Level 5, 10, 15, and 20. If they do not have the INT to learn another school, this takes them temporarily above their limit, but may delay learning future schools. Schools gained in this way grant double the normal stat bonus. Triclops can not know more than one school for every 9 points of INT.'
  ),
];

const powers = [
  new RacePower(
    'Splitform',
    `This power is automatically obtained at Level 1.<br>
    This power may be used to split into multiple forms or multiple arms! You may activate or deactivate this power as an Action, or as a Pre-Round Action. When it is first learned you may only seperate into two Splits. Dividing your power between multiple bodies is taxing in focus and energy. You lose 2 END per Split beyond the first, per action this Power is active and you lose 1 APR per Split while this Power is active. In return, you gain the following benefits:
    <br>
    <ul>
      <li>During your Actions, you and each of your Splits may take an action.</li>

      <li>Splits are targeted separately. This means that debuffs, such as stunning, Grappling or Capture Ball, only apply to the Split they targeted. Each Splitform Buffs, such as 'Ki Enhance' or 'Shield Piercing Charge' are applied to all Splits.</li>

      <li>Although not a Superform, while active this power suppresses the benefits of all Superforms; including Permanent Superforms. </li>

      <li>You and your Splits share all pools (HP, Ki, END, Ki Shield, available Tactician Bonus, etc). If any of these pools have Regen, you only Regen once as normal.</li>

      <li>When using an Action in the fight to create or dismiss this technique; ALL actions on that single APR are used consumed. This means you cannot split, take additional actions and reform to reacquire extra actions.</li>

      <li>Splits share all Uses Per Round; with the exception of non-Super Speed Type 2 powers, with one use per Action, per Split.</li>

      <li>Each Split may benefit from Bulk & PKU, but must pay for it separately per Attack.</li>

      <li>Non-Custom Items & Equipment are replicated between splits, but if the item is consumable or can be damaged, then its use applies to all Splits. Custom items & Equipment are simply unique.</li>

      <li>Splits must remain within 100 yards of each other. If one is in combat, they are all in combat.</li>

      <li>If multiple Splits attack on the same APR, then all attacks are declared and resolved at the same time. Apply the effects of all attacks at the end of the action at the same time. Functioning like a Multi Slash. Make a separate Strike and Damage roll for each attack. Superspeeds used to assist and defend against the attacks apply equally to all of the Triclop's attacks for that APR as normal.</li>

      <li>Superspeeds, the Focused feature, Shadowform, and other things with an X/Round, X/2 Rounds or X/Battle limitation only apply its benefits to one Split when used. The others, instead, automatically benefit from 'Advanced Combat Teleport' for free for that Action.</li>

      <li>After Reforming, all Critical Effects and other Status Effects are applied to the reformed whole. Status Effects or Critical Effects do not stack. i.e. If both splits have a broken arm, the reformed Triclops only has one broken arm, not two.</li>

      <li>When activating Split-Form, all Splits retain any status effects already afflicting the Triclops.</li>

      <li>You may not activate Split-Form while Grappling or being Grappled, including Racial Powers that function like a Grapple. However, you may maintain Split-Form after being Grappled or later begin a Grapple while in Split-Form.</li>

      <li>You select which Split remains as the "real" one when reforming (through damage or choice). This may get you out of certain location-based status effects such as Grapples and 'Capture Ball'.</li>

      <li>When initiating a grapple, any number of Splits may grapple the same person if you are successful (and the Split has not used his/her action). When doing this, no one else besides the Triclops may also grapple them. When multiple Splits are grappling one person, they count as only one individual with +15% STR per Split (+30% with two, +45% with three, +60% with four) in the grapple for Grapple-only powers, Break checks, and Shift checks. Only one Split-Form may perform an action while this is being maintained, as all the other Split-Forms are busy helping. If you make use of a move that breaks the Grapple; it ends immediately for all Splits involved.</li>

      <li>When firing a Ki attack at a Triclops involved in a grapple as above; you do not count the Triclops as multiple targets.</li>

      <li>Any single attack that deals more than 50% of a Split's Current HP causes that Split to Reform, even Mid-Combo. This causes the Triclops' number of Splits to be reduced by 1 and ends the power if there is only one Split left.</li>

      <li>When a Split is destroyed, the Triclops has a minimum of 1 HP.</li>
    </ul
    `,
    'Physical'
  ),
  new RacePower(
    'Shin-Ki-Ko-Ho Blast',
    `The Triclops must be Level 2 before taking this power.<br>
    This is a technique primarily meant to hold opponents back. The Triclops forms a Rhombus with his hands and releases a ray of energy that Stuns anything it damages. This is a Ki attack with a +5 bonus to Strike, which can be used an unlimited number of times per round, but only once per APR. It deals 1d6x10 damage plus 1d6x10 per additional level and is Armor Piercing and Shield Piercing. If someone is damaged by the Blast, they are stunned. This attack costs 15 Ki per level and 7 END.`,
    'Mental'
  ),
  new RacePower(
    'Trifork',
    `The Triclops must be Level 3 before taking this power.<br>
    While you have 50% of your maximum HP or more, you may Split into three bodies using 'Splitform'. However, you may not inflict Critical Effects while you have three or more Splits active. A critical roll will still make the attack AP/SP/Stun as normal. You may maintain multiple splits while below 50% HP, you just can't make them.`,
    'Physical'
  ),
  new RacePower(
    'Quad-Form',
    `The Triclops must be Level 4 before taking this power.<br>
    While you have 75% of your maximum HP or more, you may Split into four bodies using 'Splitform'. However, you may not inflict Critical Effects while you have three or more Splits active. A critical roll will still make the attack AP/SP/Stun as normal. You may maintain multiple splits while below 75% HP, you just can't make them.`,
    'Physical'
  ),
  new RacePower(
    'Teamwork',
    `This power is automatically obtained at Level 5.<br>
    Your Splits become significantly better at using group tactics to take opponents down together. You've become immune to area of effect attacks from your own Splits, such as the power 'Taiyoken'. If multiple Splits attack the same person at the same time; their DEX and MNT are increased by 5% for each Split attacking for purposes of strike rolls only (+10% with two, +15% with three, +20% with four).`,
    'Mental'
  ),
];


const Triclops = new Race({
  Name: 'Triclops',
  Class: 'Low',
  Description: `Evolution is an odd thing, changing one race ever so slightly. After years and years of being the top of the food chain on Earth, Humans took a turn in the evolutionary circle. Unlike their advanced human counterparts (Martial Artists), they do not have a great grasp on harnessing their Ki. Instead, they are more physically powerful. Not only are they stronger in the ways of hand to hand combat, they are rather adept at separating techniques, able to split into as many as four separate beings. Above all, they have evolved a beneficial third eye, allowing them to see better than most other races. Unfortunately, though, they seem to have lost the ability to grow hair, as their bodies are very efficient at processing 'waste'.
  <br><br>
  Average Height: 6'3" (190 cm)<br>
  Average Weight: 250 pounds (113 kg)<br>
  Life Span: 120-150 years.<br>
  Interesting Traits: Three eyes, bald.
  <br><br>
  Example: Tien (Tienshinhan).`,
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
