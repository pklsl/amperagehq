---
title: "Understanding 240V Split-Phase Power"
description: "How does 240V split-phase power work in residential homes? Learn about transformer principles, service entrance, hot legs, bus bar configuration, and panel design."
pubDate: 2026-04-19
author: "AmperageHQ Team"
tags: ["electrical-fundamentals", "240v", "split-phase", "residential", "education"]
---

If you've ever looked at a residential electrical panel and wondered why there are two rows of breakers — and how a regular outlet works at 120V while a dryer uses 240V from the same panel — you're asking the right question. Understanding split-phase power is fundamental to understanding residential electrical systems.

## The Utility Transformer: Where It All Starts

Your home's electrical power comes from a utility transformer. In most suburban and rural neighborhoods, this is a cylindrical gray can mounted on a utility pole (or a green pad-mounted box on the ground for underground service). This transformer takes the high-voltage distribution line (typically 7,200V to 14,400V) and steps it down to the voltage your home uses.

### Split-Phase Transformer Output

The residential transformer produces a **center-tapped single-phase output**. This means the transformer's secondary winding has three terminals:

- **H1** (Line 1 Hot) — the left end of the secondary winding
- **H2** (Line 2 Hot) — the right end of the secondary winding
- **N** (Neutral) — a tap at the exact center of the secondary winding

The voltage between H1 and N is **120V**. The voltage between H2 and N is also **120V**. But here's the key: H1 and H2 are on opposite ends of the winding with the neutral in the center, so the voltage between H1 and H2 is **240V**.

This is called split-phase because the neutral divides the 240V into two 120V "phases" — though technically these are not different phases (both are in phase with each other on a phasor diagram), rather two opposite polarities of a single-phase supply.

### Why "Split-Phase" and Not "Two-Phase"

True two-phase power (which is obsolete) had two phases 90° apart. Split-phase power has H1 and H2 that are 180° apart — they are anti-phase. If you measure H1 to neutral, you get a sine wave that peaks at +170V (120V RMS). H2 to neutral peaks at -170V simultaneously — it's the mirror image. Between H1 and H2, the combined swing is ±340V, which is 240V RMS.

You'll sometimes hear this called "single-phase 3-wire" or "Edison system" — Thomas Edison's original distribution network used a version of this configuration.

---

## The Service Entrance: From Transformer to Panel

### Service Drop (Overhead)

For overhead service, three conductors come from the transformer to the weatherhead on your house:

- **Two insulated service entrance conductors** (the two hot legs — H1 and H2)
- **One bare neutral** (the center tap, also bonded to the utility's grounding system)

These conductors are the responsibility of the utility up to the point of attachment. After the weatherhead, they pass through the utility meter (which measures total energy consumption) and continue to your main panel.

### Underground Service Entrance

Underground service uses a conduit from the transformer to your meter socket, with three conductors inside — two hots and the neutral. The insulation color convention is the same: black and red for hots, white or gray for neutral.

### Meter Socket

The meter socket connects to the service entrance conductors and provides the utility with a way to measure usage. Modern meters are digital and communicate wirelessly. The meter does not affect the electrical characteristics — it simply measures current flow.

---

## Inside the Main Panel

### Bus Bars

The main panel distributes the service entrance conductors to individual branch circuits through bus bars:

- **Hot Bus Bar A (left bus)** — connects to Line 1 (H1) from the service entrance
- **Hot Bus Bar B (right bus)** — connects to Line 2 (H2) from the service entrance
- **Neutral Bar** — connects to the service neutral
- **Ground Bar** — in the main panel, the ground bar is bonded to the neutral bar and to the earth ground (grounding electrode system)

The alternating slot pattern in most panels is designed so that adjacent slots connect to opposite bus bars. Slot 1 connects to Bus A; Slot 2 connects to Bus B; Slot 3 connects to Bus A again, and so on.

### Single-Pole Breakers (120V)

A single-pole breaker occupies one slot in the panel and connects to one bus bar — either Bus A or Bus B. It provides 120V between the hot conductor and neutral: perfect for standard outlets, lights, and small appliances.

The two buses are loaded alternately as circuits are added, with the goal of balancing load across both legs.

### Double-Pole Breakers (240V)

A double-pole breaker spans two adjacent slots, connecting to both Bus A and Bus B simultaneously. Because adjacent slots connect to opposite buses, the double-pole breaker has:
- One terminal connected to Bus A (120V to neutral)
- One terminal connected to Bus B (120V to neutral)
- 240V between the two terminals

This is how the panel delivers 240V from the same infrastructure that delivers 120V — by using both hot legs simultaneously.

---

## Measuring Voltages in the Panel

With a multimeter set to AC voltage:

| Measurement | Expected Reading |
|---|---|
| Hot to neutral (120V circuit) | ~120V AC |
| Hot to ground | ~120V AC |
| Hot 1 to Hot 2 (at a 240V circuit) | ~240V AC |
| Neutral to ground (in main panel) | ~0V (bonded together) |
| Neutral to ground (in subpanel) | ~0V to a few volts (should not be bonded in subpanel) |

The small deviation from exactly 120V or 240V is normal — utility voltage varies with load and distance from the transformer. Most homes see 114–126V per leg under normal conditions.

---

## Load Balancing

Because the panel alternates slots between Bus A and Bus B, the total current drawn from each leg depends on which circuits are running and their load.

**Why balance matters:** Each hot leg from the transformer carries current. The neutral carries only the **difference** between the two legs. If Bus A draws 60A and Bus B draws 50A, the neutral carries 10A. If both legs draw 60A, the neutral carries 0A.

- **Balanced loads** — neutral current is minimal, reduces neutral conductor losses
- **Unbalanced loads** — the leg with higher load heats its wire more; the neutral may carry significant current

Electricians try to balance loads across both legs, particularly for large loads. This is why a skilled electrician balancing a panel considers both which slot each breaker goes in and the load magnitude of each circuit.

---

## The Neutral Bond at the Main Panel

In the main panel only, the neutral and ground bars are bonded together. This is a critical distinction:

- **Main panel:** Neutral and ground are connected (bonded) to each other and to the grounding electrode (driven ground rod, water pipe, etc.)
- **Subpanels:** Neutral and ground must NOT be bonded — they must be connected to separate bars. The neutral flows back to the utility transformer; the ground connects back to the main panel ground bar.

Bonding neutral to ground in a subpanel creates parallel paths for neutral current — some flows back through the neutral wire, some flows back through the ground wire and the equipment grounding path. This creates ground current, which is a safety hazard and can cause GFCI nuisance tripping.

---

## Split-Phase Power in Practice

### 120V Loads (Single-Pole)

Standard outlets, lighting, refrigerators, microwaves, TVs, computers — all 120V loads use a single hot leg and the neutral. Current flows out on the hot conductor, through the load, and returns on the neutral. The ground is a safety conductor that only carries current during a fault.

### 240V Loads (Double-Pole, No Neutral)

Well pumps, air conditioning compressors, some water heaters, NEMA 6-50 welders — these are purely 240V loads that don't use 120V at all. Current flows out on Hot 1, through the load, and returns on Hot 2. No neutral conductor is needed (though a ground wire is still required).

### 240V Loads with 120V Components (Double-Pole with Neutral)

Electric dryers, ranges, ovens — these appliances use 240V for heating elements but 120V for clocks, lights, and control circuits. They require a 4-wire connection: Hot 1, Hot 2, Neutral, and Ground. This is why NEMA 14-30 and 14-50 receptacles have 4 prongs.

---

## Common Misconceptions

### "240V is Twice as Dangerous as 120V"

Yes and no. The higher voltage does mean higher potential shock energy for the same resistance. But the lethal factor in electrical shock is current through the body, which depends on the total circuit resistance (including body resistance). In practice, any household voltage can be lethal under the right conditions — neither 120V nor 240V is "safe to touch."

### "Two-Phase Power"

US residential power is not two-phase. It's single-phase with a center-tapped neutral. True two-phase power was used in early electrification (phases 90° apart) and is now obsolete. Three-phase power (phases 120° apart) is common in commercial and industrial settings.

### "The Neutral is Always Safe to Touch"

The neutral conductor is at approximately 0V relative to ground in a balanced system. However, a broken neutral can cause the neutral to rise to dangerous voltages. Never assume any conductor is safe without testing with a meter.

---

## Why Voltage Sags and Imbalances Occur

### Voltage Sag

When a large motor (AC compressor, well pump) starts, it draws 3–5× its running current for a fraction of a second. This inrush current causes a momentary voltage drop — lights dim when the AC kicks on. This is normal for briefly but if it's severe or persistent, it may indicate an undersized service entrance.

### Voltage Imbalance

If one leg of the split-phase service is significantly lower than the other (more than 3% difference), you may have:
- A loose service entrance connection at the meter or panel
- High load on one leg
- A utility issue at the transformer

Voltage imbalance harms motors — a 3.5% voltage imbalance can cause 25% or more increase in motor heating.

---

Understanding split-phase power transforms the electrical panel from a mysterious box of switches into a logical, understandable distribution system. With this foundation, concepts like double-pole breakers, 4-wire appliance connections, and load balancing become intuitive rather than confusing.
