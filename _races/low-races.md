---
layout: default
title: Low Races
permalink: /races/low-races/
nav: false

toc:
  sidebar: left
layout: default
---

<script type="module">
import races from '../../src/race/defaultRaces.js';
import { renderFeatures, renderPowers, renderModifiers, renderPowerBonus, renderRace } from '../../src/race/raceRenderers.js';

const lowRaces = races.filter(race => race.Class === "Low");

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('low-races-list');
  if (container) {
    container.innerHTML = lowRaces.map(renderRace).join('');
  }
});
</script>

<div id="low-races-list">
  <!-- Low races will be rendered here -->
</div>
