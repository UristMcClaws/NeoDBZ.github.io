import Race from "../races.js";
import RaceFeature from "../raceFeatures.js";
import RacePower from "../racePowers.js";

// Default features and powers for Chou-Jin
const features = [
  new RaceFeature("Physical", "Due to their small size, Chou-jin always have +4 to Dodge rolls."),
  new RaceFeature(
    "Physical",
    `Chou-jin start with the Basic Flight power and do not have to pay Ki to use it. Other flight powers still cost Ki as normal. Chou-jin gain a bonus to all Strike and Dodge rolls according to the form of Flight they’re using:<br>
    <table>
      <tr><th>Flight Power</th><th>Bonus</th></tr>
      <tr><td>Basic Flight</td><td>+1 to Strike and Dodge rolls</td></tr>
      <tr><td>Advanced Flight</td><td>+2 to Strike and Dodge rolls</td></tr>
      <tr><td>Boosted Flight</td><td>+3 to Strike and Dodge rolls</td></tr>
    </table>`
  ),
  new RaceFeature(
    "Mental",
    "Chou-jin are physically weak, but make up for it with mental prowess. All of a Chou-jin’s Ki attacks can gain +10 Damage per 100 Max Ki that they have available (Charging does not increase this damage). Whenever an attack is enhanced with this bonus, declare it and pay your Levelx15 additional Ki, which does not count towards ‘Enlarged Ki Blast’. Apply this damage at the end of your damage, like Bulk - it’s not multiplied by anything. Template: ((Max Ki x10)/100). Alternatively, you may decide not to pay a Ki cost and add ((Max Ki x6)/100) damage instead."
  ),
  new RaceFeature(
    "Mental",
    "Chou-jins start with a Regular School of their choice at Level 1 and gain another school for free at Level 5, 10, 15, and 20. If they do not have the INT to learn another school, this takes them temporarily above their limit, but may delay learning future schools. Schools gained in this way grant double the normal stat bonus."
  ),
];

const powers = [
  new RacePower(
    "Improved ESP",
    `The Chou-jin must have the ‘Minor ESP’ power before taking this power.<br>
    With this, the Chou-jin can communicate for no Ki cost across any distance with anyone they have ever come in contact with, as if they have sensed the target. ‘Improved ESP’ is two-way: If you contact someone, they can respond to you even if they do not have this power or without sensing you.`,
    "Mental"
  ),
  new RacePower(
    "Mental Barrier",
    `This power is automatically obtained at Level 5.<br>
    The Chou-jin are able to tap in to their Ki and manipulate it to grant a constant form of protection. This gives a Resistance value based on your MNT/4. Stacking with other forms of Resistance.`,
    "Mental"
  ),
];

const ChouJin = new Race({
  Name: "Chou-Jin",
  Class: "Low",
  Description: `Their bodies never seem to age. They are quite strong with their Ki and have a talent for flying, but are physically one of the weakest races. Chou-jin are born in Heaven, created from a sinless soul and granted eternal life in a playful form. Though, most tend to grow into a mature being far wiser than their appearance gives them credit. Their life in Heaven is always short as they are simply given bodies, allowed a few days to adjust to them, then sent into the Neoverse. Like babies few ever remember their first few days. Furthermore, they may have been born in Heaven, but not all stay to a straight path. 
    <br><br> 
    Despite their inability to breed (due to their young age), these beings do have different genders. Being that the Chou-jin are not raised by any parental figures, they have no common cultural ties. One of the few ties these children share is that most look like large dolls, which makes sense as they were bodies with a soul grafted on them. On the other hand, many end up being taken care of by an adult, who worries about a child wandering around alone. In particular, Triclops are noted for having a special liking of these ageless children. 
    <br><br> 
    Average Height: 3’3” (99 cm)<br>
    Average Weight: 40 pounds (18 kg)<br> 
    Life Span: Ageless.<br>
    Interesting Traits: Though unable to breed; Chou-jin have different sexes. Most look like Russian dolls. 
    <br><br> 
    Example: Chiaotzu.`,
  Int: 18,
  Mnt: 20,
  Str: 8,
  Dex: 8,
  Stm: 9,
  Spd: 12,
  Features: features,
  Powers: powers,
  HpLevel: 10,
  HpAttribute: 8,
  KiLevel: 30,
  KiAttribute: 15,
  LpAttribute: 15,
  StartingPoints: 27,
  StartingPointsMax: 9,
  LevelPoints: 5,
  HpModIncrease: [4, 8, 12],
  KiModIncrease: [6, 12, 18],
  StartingPowers: 6,
  LevelupPowers: 2,
});

export default ChouJin;
