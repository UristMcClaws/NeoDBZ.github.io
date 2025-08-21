// raceRenderers.js
// Contains rendering functions for race pages

import RaceFeature from "./raceFeatures.js";
import RacePower from "./racePowers.js";

export function renderFeatures(features) {
  if (!features || !features.length) return "";
  return (
    `<div class="race-features"><h3>Features:</h3><ul>` +
    features
      .map((f) => {
        const feat = f instanceof RaceFeature ? f : new RaceFeature(f.Type, f.Description);
        return `<li>(${feat.Type}) ${feat.Description}</li>`;
      })
      .join("<br>") +
    "</ul></div>"
  );
}

export function renderPowers(powers) {
  if (!powers || !powers.length) return "";
  return (
    `<div class="race-powers"><h3>Powers:</h3><ul>` +
    powers
      .map((p) => {
        const pow = p instanceof RacePower ? p : new RacePower(p.Name, p.Description, p.Type);
        return `<li>(${pow.Type}) <b>${pow.Name}</b>: ${pow.Description}</li>`;
      })
      .join("<br>") +
    "</ul></div>"
  );
}

export function renderModifiers(race) {
  let output = "";
  if (race.HpModIncrease && race.HpModIncrease.length > 0) {
    output += `<div>HP Mod Increase at: ${race.HpModIncrease.join(", ")}, etc.</div>`;
  }
  if (race.KiModIncrease && race.KiModIncrease.length > 0) {
    output += `<div>Ki Mod Increase at: ${race.KiModIncrease.join(", ")}, etc.</div>`;
  }
  return output || "";
}

export function renderPowerBonus(race) {
  let output = "";
  if (race.Class && race.Class === "High") {
    output += `<br>Every even Level (2, 4, 6, etc), gain 1 additional Power.`;
  }
  return output || "";
}

export function renderRace(race) {
  return `<section class="race-entry">
    <h2>
      ${race.Name}
    </h2>
    <div>${race.Description || ""}</div>
    <br>
    <table class="race-stats-table">
      <thead>
        <tr><th>Stat</th><th>Base</th></tr>
      </thead>
      <tbody>
        <tr><td>Int</td><td>${race.Int}</td></tr>
        <tr><td>Mnt</td><td>${race.Mnt}</td></tr>
        <tr><td>Str</td><td>${race.Str}</td></tr>
        <tr><td>Dex</td><td>${race.Dex}</td></tr>
        <tr><td>Stm</td><td>${race.Stm}</td></tr>
        <tr><td>Spd</td><td>${race.Spd}</td></tr>
      </tbody>
    </table>

    <blockquote>
      <div>Distribute ${race.StartingPoints} additional points, max of ${race.StartingPointsMax} in 1 stat.</div>
      <br>
      <div>
        HP: ${race.HpAttribute} x STM + ${race.HpLevel} x Level <br>
        KI: ${race.KiAttribute} x MNT + ${race.KiLevel} x Level <br>
        LP: ${race.LpAttribute} x STM
      </div>
      <br>
      ${renderModifiers(race)}
      <br>
      <div>Every Level-up, ${race.Name}s gain ${race.LevelPoints} points to divide amongst their stats and an automatic 1 to all Stats.</div>
      <br>
      <div>
        At Level 1, pick ${race.StartingPowers} powers.<br>
        Every Level-up, gain ${race.LevelupPowers} powers.
        ${renderPowerBonus(race)}
      </div>
    </blockquote>
    
    ${renderFeatures(race.Features)}
    ${renderPowers(race.Powers)}
    <br>
  </section>`;
}
