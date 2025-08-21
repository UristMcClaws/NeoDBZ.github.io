import RaceFeature from "./raceFeatures.js";
import RacePower from "./racePowers.js";

class Race {
  constructor({
    Name = "",
    Class = "",
    Description = "",
    Int = 0,
    Mnt = 0,
    Str = 0,
    Dex = 0,
    Stm = 0,
    Spd = 0,
    Features = [],
    Powers = [],
    HpAttribute = 0,
    HpLevel = 0,
    KiAttribute = 0,
    KiLevel = 0,
    LpAttribute = 0,
    StartingPoints = 0,
    StartingPointsMax = 0,
    LevelPoints = 0,
    HpModIncrease = [],
    KiModIncrease = [],
    StartingPowers = 0,
    LevelupPowers = 0,
  } = {}) {
    this.Name = Name;
    this.Class = Class;
    this.Description = Description;
    this.Int = Int;
    this.Mnt = Mnt;
    this.Str = Str;
    this.Dex = Dex;
    this.Stm = Stm;
    this.Spd = Spd;
    // Ensure Features is a list of RaceFeature instances
    this.Features = Features.map((f) => (f instanceof RaceFeature ? f : new RaceFeature(f.Name, f.Description)));
    // Ensure Powers is a list of RacePower instances
    this.Powers = Powers.map((p) => (p instanceof RacePower ? p : new RacePower(p.Name, p.Description, p.Type)));
    this.HpAttribute = HpAttribute;
    this.HpLevel = HpLevel;
    this.KiAttribute = KiAttribute;
    this.KiLevel = KiLevel;
    this.LpAttribute = LpAttribute;
    this.StartingPoints = StartingPoints;
    this.StartingPointsMax = StartingPointsMax;
    this.LevelPoints = LevelPoints;
    this.HpModIncrease = HpModIncrease;
    this.KiModIncrease = KiModIncrease;
    this.StartingPowers = StartingPowers;
    this.LevelupPowers = LevelupPowers;
  }
}

export default Race;
