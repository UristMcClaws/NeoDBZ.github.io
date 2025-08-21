
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
    `The Yardrat must be Level 3 before taking this power.<br>
    By freezing time, the Yardrat can automatically Dodge an attack like using the 'Freeze' Telekinesis power, but may be used once every two rounds and costs only 150 Ki and 3 End.`,
    "Mental"
  ),
  new RacePower(
    "Shunkan Idou",
    `The Yardrat must have the Temporal Distortion power and be Level 6 before taking this power.<br>
    More commonly known as 'Instant Transmission', it allows the Yardrat to teleport themself to any place that they can see or to a person whose Ki that they can Sense. When used in battle; it gives a MNT/5 bonus to a Strike or Dodge roll, replacing other Superspeeds. It costs 150 Ki and 3 End to use and can only be used once every two rounds. By touching them, one other person may be brought with the Yardrat (usually, this means they are in a grapple) and by paying an additional 150 Ki and 3 End. Used in this way, this lets the Yardrat dodge an attack originating from outside a grapple and/or allows them to help other people escape (see IT Escape). The other person need not be willing, but they do get a Grapple Break attempt (even Flare Break) to prevent it if they choose. When the Yardrat reaches Level 12, they can teach this power to a single person, who must be at least Level 8. Teaching this power takes two Neo weeks. During which time, neither person may fight or train. The person taught this technique can not teach it to anyone.
    <br><br>
    <b>IT Escape:</b> Before a battle has started, if someone attacks you ('calls init'); you can not teleport away to avoid combat altogether. When you wish to leave a scene in this manner, declare you're doing so and check that no one intends to stop you. If they do wish to stop or attack you, Initiative is rolled as normal. On the first action you get, you may attempt to teleport away, declaring it. Anyone, who wishes to attack you, may make any basic attack or basic discharge, with add-ons as normal, against your single Dodge with your bonus from IT.
    <br><br>
    If you dodge their attack, you successfully leave the scene. If they hit you, you have failed to escape and take damage; even if you reduce that damage to zero, you fail to teleport. It must be your action to teleport away. If you teleport and the person that you are fighting is also capable of teleporting with Kai Kai/IT, they may follow you as a pursuit.
    <br><br>
    Failure to teleport away from combat still costs the power's normal amount of Ki and End.
    <br><br>
    Note: If you use Freeze or Temporal Distortion; it still only allows you to avoid a single attack, not all attacks from multiple opponents.`,
    "Mental"
  ),
];

const Yardrat = new Race({
  Name: "Yardrat",
  Class: "Low",
  Description: `The Yardrats are an alien race, who live a few light years away from planet Namek. While their planet seems to be without excess, their style of clothing emulates gluttony. Often, their outfits are lavish with ruffles and belts. Any variation of the style is acceptable based on social standing. However, deviation from the basic idea of the most popular fashion will often get a Yardrat discriminated against by his peers. Damaging a Yardrat's clothes may be perceived as a huge sign of disrespect.
  <br><br>
  Physically, they never stand more than four feet tall, and never weigh more than seventy pounds. They, also, only come in one color: pink! Their bodies are small in comparison to their skull, which balloons above their large, round, yellow eyes like a globe, spotted with purple along the top center. These purple spots can differ in variation. But, by no means are they a reliable way of differentiating one Yardrat from another. They only have four fingers on either hand, and four toes on each foot. Yardrat do not have hair anywhere on their bodies. This includes a distinct lack of eyebrows. Androgyny is the name of the game if you are a Yardrat. It is speculated that they reproduce by growing their young in test tubes, created from an amalgamation of their DNA and other Yardrat DNA. They are born with the knowledge of each DNA donor. Thus, they are able to enter society almost immediately after being born.
  <br><br>
  As a species, the Yardrat have proven to be nice to outsiders, welcoming the rare few who find their planet, and are curious of them. It is not in a Yardrat to deny the opportunity for gaining knowledge. They are, also, eager to share their knowledge and ability concerning the manipulation of time and space, if they see it to be helpful to someone outside of their own race. Their society is a perfect picture of unity. And, it is very rare for one Yardrat to turn down another who may need help.
  <br><br>
  Height: 3-4' (Max) (91-121 cm)<br>
  Weight: 60 - 70 pounds (27-31 kg)<br>
  Life Span: 200-300 years. Age can be relatively determined by the amount of wrinkles on a Yardrat's face.<br>
  Interesting Traits: When living in large groups, Yardrats are thought to follow a hive-mind mentality. Only a few Yardrats ever speak.
<br><br>
  Example: The Anime series did not single out a Yardrat. However, they are shown en masse, clustering around Goku's crashed space pod. They nurse him back to health, repair his ship, and teach him the Instant Transmission technique before sending him back home. He has no complaints about the species and seems rather fond of them in his recollection.`,
  Int: 18,
  Mnt: 20,
  Str: 7,
  Dex: 10,
  Stm: 10,
  Spd: 14,
  Features: features,
  Powers: powers,
  HpAttribute: 8, // HP: 10 x STM + 15 x Level
  HpLevel: 10,
  KiAttribute: 15, // Ki: 14 x MNT + 25 x Level
  KiLevel: 30,
  LpAttribute: 15, // LP: 14 x STM
  StartingPoints: 27,
  StartingPointsMax: 9,
  LevelPoints: 5,
  HpModIncrease: [4, 8, 12],
  KiModIncrease: [6, 12, 18],
  StartingPowers: 6,
  LevelupPowers: 2,
});

export default Yardrat;
