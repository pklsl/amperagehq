---
title: "Wire Gauge and Ampacity: A Complete Reference Guide"
description: "Understand AWG wire sizing, copper vs. aluminum conductors, ampacity tables, and how to select the right wire gauge for any residential or light commercial circuit."
pubDate: 2026-04-07
updatedDate: 2026-04-07
author: "Ray Castellano"
tags: ["wire-gauge", "ampacity", "AWG", "conductors", "wiring"]
image: "https://images.pexels.com/photos/10185562/pexels-photo-10185562.jpeg?auto=compress&cs=tinysrgb&w=800"
---

Selecting the correct wire gauge is fundamental to safe electrical work. Undersized wire overheats, melts insulation, and causes fires. Oversized wire wastes money. This guide covers the American Wire Gauge (AWG) system, ampacity tables for common installation methods, and the practical rules electricians use to size conductors correctly.

## The AWG System

American Wire Gauge (AWG) is the standard wire sizing system used in the United States. The numbering is counterintuitive: **smaller AWG numbers mean larger, heavier wire**.

- 14 AWG is thinner than 12 AWG
- 4 AWG is thicker than 8 AWG
- Numbers below 1 AWG continue as 1/0 (one-ought), 2/0, 3/0, 4/0, then 250 kcmil, 300 kcmil, etc. for very large conductors

Wire size directly affects:
- **Ampacity**: Maximum current the wire can carry safely
- **Resistance**: Larger wire has lower resistance and less voltage drop
- **Flexibility**: Smaller wire is more flexible; larger wire is stiffer

## Copper vs. Aluminum Conductors

Both copper and aluminum are used for electrical wiring, but with important differences:

| Property | Copper | Aluminum |
|----------|--------|----------|
| Conductivity | Higher | Lower (~61% of copper) |
| Ampacity (same gauge) | Higher | ~80% of copper |
| Cost | Higher | Lower |
| Weight | Heavier | Lighter |
| Connections | Standard terminals | Requires anti-oxidant compound and compatible terminals |
| Corrosion | Low | Higher (oxidation) |

**When aluminum is used**: Service entrance conductors, large feeder conductors (100A+), and underground feeder applications. For a 200A service entrance, aluminum 4/0 conductors are standard and far less expensive than copper alternatives.

**When copper is preferred**: Branch circuit wiring inside walls, connections to devices, and anywhere terminations are frequent. Aluminum branch circuit wiring (common in 1960s–1970s homes) is a known fire hazard when connected with copper-only devices without proper anti-oxidant treatment and CO/ALR-rated devices.

## Ampacity Tables

Ampacity depends on the conductor material, insulation type, installation method, and ambient temperature. The following tables cover the most common residential and light commercial scenarios.

### Copper Conductors — 60°C and 75°C Insulation (NEC Table 310.12)

Most devices and breakers are rated for 60°C terminations (the limiting factor even if the wire itself is rated higher).

| AWG | 60°C Ampacity | 75°C Ampacity | Common Use |
|-----|---------------|---------------|------------|
| 14 | 15A | 20A | General branch circuits (15A max) |
| 12 | 20A | 25A | 20A branch circuits |
| 10 | 30A | 35A | Dryers, ranges, EV chargers (30A) |
| 8 | 40A | 50A | EV chargers, ranges, AC units |
| 6 | 55A | 65A | 50A circuits, EV chargers |
| 4 | 70A | 85A | 60A circuits, feeders |
| 3 | 85A | 100A | 80A EV chargers |
| 2 | 95A | 115A | 90A–100A feeders |
| 1 | 110A | 130A | Small subpanels |
| 1/0 | 125A | 150A | Subpanels, feeders |
| 2/0 | 145A | 175A | 150A feeders |
| 3/0 | 165A | 200A | 175A–200A feeders |
| 4/0 | 195A | 230A | 200A services |

**Important**: For branch circuits, use the 60°C ampacity column unless you can confirm that both the breaker and all devices are rated for 75°C terminations.

### Aluminum Conductors — 75°C Insulation (NEC Table 310.12)

| AWG | 75°C Ampacity | Common Use |
|-----|---------------|------------|
| 12 | 20A | — (not recommended for branch circuits) |
| 10 | 30A | — |
| 8 | 40A | — |
| 6 | 50A | — |
| 4 | 65A | 60A circuits |
| 3 | 75A | — |
| 2 | 90A | 90A feeders |
| 1 | 100A | — |
| 1/0 | 120A | 100A feeders |
| 2/0 | 135A | 125A feeders |
| 3/0 | 155A | 150A feeders |
| 4/0 | 180A | 175–200A services |

## Key Ampacity Rules

### Rule 1: Size the Breaker to Protect the Wire

The breaker must be sized at or below the wire's ampacity. A 20A breaker must have at least 12 AWG copper wire. A 15A breaker must have at least 14 AWG copper.

Common circuit configurations:
- **15A circuit**: 14 AWG copper, 15A breaker
- **20A circuit**: 12 AWG copper, 20A breaker
- **30A circuit**: 10 AWG copper, 30A breaker
- **40A circuit**: 8 AWG copper, 40A breaker
- **50A circuit**: 6 AWG copper, 50A breaker
- **60A circuit**: 4 AWG copper, 60A breaker

### Rule 2: Continuous Loads at 80%

Any load that operates for 3 hours or more continuously must be calculated at 125% of its rated current (equivalently, the circuit and breaker can only be loaded to 80% of their rating).

For a circuit feeding a 48A EV charger (a continuous load): 48A × 1.25 = 60A minimum circuit rating. You need a 60A breaker and 4 AWG wire.

### Rule 3: Conduit Fill Derating

When more than three current-carrying conductors are in the same conduit or cable, their ampacity must be derated:

| Conductors | Ampacity Factor |
|------------|----------------|
| 4–6 | 80% |
| 7–9 | 70% |
| 10–20 | 50% |
| 21–30 | 45% |

Example: Six 12 AWG conductors in a conduit — each rated 25A at 75°C — must be derated to 25A × 0.80 = 20A. The 20A breaker still matches, but you're at the limit.

Note: Grounding conductors do not count as current-carrying for this calculation. Neutrals count only if they carry non-linear current (e.g., with large variable frequency drives or computer equipment).

### Rule 4: Voltage Drop

Long wire runs lose voltage due to the wire's resistance. The NEC recommends (but doesn't require for most circuits) keeping voltage drop under 3% on branch circuits and under 5% total (feeder + branch combined).

For a 120V, 20A circuit, 3% drop = 3.6V maximum drop. To calculate whether your wire size is adequate for the run length, use the formula:

**Voltage Drop = (2 × Length × Current × Resistance per foot)**

Or use an online wire sizing calculator — the key takeaway is that long runs often require upsizing the wire to compensate for resistance.

Common rule of thumb: For runs over 100 feet on a 15A or 20A circuit, go up one wire size.

## Wire Insulation Types

Different insulations are rated for different temperatures and environments:

| Insulation Type | Temp Rating | Wet/Dry | Common Application |
|---|---|---|---|
| NM-B (Romex) | 60°C | Dry only | Branch circuits in walls |
| THHN | 90°C (dry) / 75°C (wet) | Dry and wet | Conductors in conduit |
| THWN-2 | 90°C wet | Wet | Outdoor conduit, direct burial |
| XHHW-2 | 90°C wet | Wet | Service entrance, large feeders |
| USE-2 | 90°C | Underground | Direct burial service entrance |
| UF-B | 60°C | Wet | Direct burial branch circuits |

For most conduit installations, **THHN/THWN-2** is the standard choice — it's dual-rated for wet and dry locations at 90°C and is readily available at most electrical suppliers.

## Practical Wire Selection Guide

| Application | Wire | Breaker |
|-------------|------|---------|
| General 15A outlets | 14 AWG Cu | 15A |
| 20A kitchen/bath outlets | 12 AWG Cu | 20A |
| Clothes dryer | 10 AWG Cu | 30A |
| Electric water heater | 10 AWG Cu | 30A |
| Electric range | 6 AWG Cu | 50A |
| EV charger (40A EVSE) | 8 AWG Cu | 50A |
| EV charger (48A EVSE) | 4 AWG Cu | 60A |
| 100A subpanel (Cu) | 1/0 AWG | 100A |
| 100A subpanel (Al) | 2/0 AWG | 100A |
| 200A service (Al) | 4/0 AWG | 200A |

Use this table as a starting point, but always verify against NEC tables and account for derating, voltage drop, and local amendments before pulling wire on any significant installation.

## See Also

- [NEC code basics](/articles/nec-code-basics) — Article 310 and Table 310.12 are the NEC foundation for ampacity; this overview explains how the code is structured and where to find the rules
- [Running new circuits](/articles/running-new-circuits) — apply wire sizing knowledge in practice: this guide walks through planning, sizing, and installing a new branch circuit from start to finish
- [Home EV charger installation](/articles/home-ev-charger-installation) — EV chargers are a common high-amperage application where wire gauge selection and the 125% continuous load rule matter most
