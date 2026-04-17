---
title: "Subpanel Installation Basics"
description: "Learn how to plan, size, and install a subpanel — including feeder sizing, grounding requirements for detached structures, and the critical difference between neutral and ground in a subpanel."
pubDate: 2026-04-07
updatedDate: 2026-04-07
author: "Ray Castellano"
tags: ["subpanel", "panel", "feeder", "installation", "grounding"]
image: "https://images.pexels.com/photos/2569842/pexels-photo-2569842.jpeg?auto=compress&cs=tinysrgb&w=800"
---

A subpanel extends your electrical system from the main panel to a remote location — a workshop, detached garage, addition, or any area where running individual circuits from the main panel would be impractical. Subpanel installation involves feeder sizing, a critical grounding decision (depending on whether it's in the same structure or a separate building), and landing multiple circuits safely.

## When Do You Need a Subpanel?

A subpanel makes sense when:

- **A detached structure needs power**: Garages, barns, workshops, guest houses — code requires a separate means of disconnect at any detached building, making a subpanel the natural choice
- **A large addition needs multiple circuits**: Running ten individual home-run circuits from the main panel across a long distance is expensive and complex — a subpanel at the addition simplifies the wiring
- **The main panel is full**: A small subpanel can add circuit capacity without a full main panel upgrade (though this only works if the main panel has sufficient amperage headroom)
- **A workshop or garage needs heavy loads**: EV charger, large tool circuits, compressor — a dedicated subpanel at the worksite simplifies future circuit additions

## Planning a Subpanel Installation

### Step 1: Calculate the Load

Determine how much power the subpanel location actually needs. Add up:
- Lighting and outlet loads (typically 3 VA per sq ft for general lighting)
- Fixed appliances (nameplate ratings)
- HVAC loads (if applicable)
- EV charger (if planned)
- Any other continuous or large loads

Apply demand factors per NEC Article 220. Size the subpanel to the calculated load plus 25–50% headroom for future needs. Installing a larger feeder now is far less expensive than upgrading it later.

### Step 2: Choose the Subpanel Size

Common residential subpanel sizes:

| Application | Typical Size |
|-------------|-------------|
| Small outbuilding (lights + outlets) | 60A, 6–12 spaces |
| Garage with EV charger | 100A, 12–20 spaces |
| Large workshop | 100–150A, 20–30 spaces |
| Home addition or basement | 100A, 20–30 spaces |

Choose more spaces than you currently need — adding circuit slots costs almost nothing during the original installation.

### Step 3: Size the Feeder

The feeder is the set of conductors running from the main panel's double-pole breaker to the subpanel. Size it to the subpanel's amperage rating or the calculated load (whichever is higher), following NEC Table 310.12:

| Subpanel Size | Copper Feeder | Aluminum Feeder |
|---|---|---|
| 60A | 6 AWG | 4 AWG |
| 100A | 1/0 AWG | 2/0 AWG |
| 125A | 2/0 AWG | 3/0 AWG |
| 150A | 3/0 AWG | 4/0 AWG |
| 200A | 4/0 AWG | 350 kcmil |

Aluminum is commonly used for feeders — it's significantly less expensive for large conductors and perfectly acceptable when properly installed with appropriate terminals and anti-oxidant compound.

### Step 4: Verify Main Panel Capacity

The main panel must have:
1. An open double-pole breaker slot for the feeder breaker
2. Sufficient remaining amperage for the new load

Do a quick load calculation on your current main panel to confirm you have headroom. A 200A service panel feeding 150A of existing loads can support a 60A subpanel but may struggle with a 100A subpanel at full load.

## The Critical Grounding Rule: Same Structure vs. Separate Structure

This is the most important concept in subpanel installation — and the one most commonly done wrong.

### Same Structure (Attached Garage, Basement, Addition)

A subpanel within the same building as the main panel is **not** a separately derived system. The grounding rule:

- **Keep the neutral bar and ground bar separate** (or use a subpanel with isolated neutral/ground bars)
- **Do NOT bond neutral to ground** at the subpanel
- **Do NOT connect a ground rod** at the subpanel (it's in the same structure)
- Run **four conductors** in the feeder: two hots, one neutral, one ground
- The ground bar connects to the feeder's grounding conductor
- The neutral bar is isolated from the enclosure (isolated neutral bar)

This prevents neutral current from flowing on the grounding system (the "parallel path" hazard).

### Separate Structure (Detached Garage, Barn, Workshop)

A subpanel in a detached building IS treated differently for grounding:

- **Ground rods are required** at the detached structure (minimum two rods, 6+ feet deep, 6+ feet apart — or single rod if it achieves required resistance)
- **The neutral and ground are bonded at the subpanel** (this is the first means of disconnect in this structure)
- The feeder can be either:
  - **Four conductors** (two hots, neutral, ground): The ground rod connects to the ground bar; neutral is bonded to the ground bar at the subpanel
  - **Three conductors** (two hots, neutral — no separate ground): Permitted only for existing installations (legacy rule); not permitted for new installations under the current NEC. The neutral serves as both neutral and ground, bonded at the subpanel with ground rods

**For any new detached structure installation, use a four-conductor feeder and install ground rods.**

## Installing the Subpanel

### What You'll Need

- Subpanel enclosure (rated amperage, sufficient spaces)
- Feeder conductors (sized per the table above)
- Conduit for the feeder (PVC, EMT, or buried conduit as appropriate)
- Double-pole breaker for the main panel (sized to the feeder ampacity)
- Ground rods and grounding electrode conductor (for detached structures)
- Wire nuts, ring terminals, cable clamps

### Step 1: Mount the Subpanel

Mount the panel enclosure at the subpanel location. Standard installation height is with the top breaker at or below 6.5 feet from the floor. Secure to framing or a plywood back-board.

### Step 2: Run the Feeder

Run conduit from the main panel to the subpanel location. For detached structures, run conduit underground (PVC with THWN-2 conductors, buried to NEC minimum depths — typically 6 inches in conduit, 24 inches for direct burial). Pull feeder conductors through the conduit with fish tape or wire-pulling lubricant.

### Step 3: Land the Feeder at the Subpanel

Remove the subpanel dead-front cover. Connect the conductors:

- **Two hot conductors (typically black and red)**: Land on the subpanel's main lugs or main breaker terminals
- **Neutral**: Land on the neutral bar (isolated from the enclosure in a same-structure subpanel; bonded to the enclosure in a detached structure subpanel)
- **Ground**: Land on the ground bar (bonded to the enclosure)

For a detached structure: Install the main bonding jumper (the strap or screw that bonds the neutral bar to the enclosure) and install the grounding electrode conductor from the ground bar to the ground rods.

### Step 4: Land the Feeder at the Main Panel

Turn off the main breaker. Install the double-pole feeder breaker in an available slot. Connect the two hot conductors to the breaker's load terminals, the neutral to the neutral bar, and the ground to the ground bar.

### Step 5: Install Branch Circuits

With the feeder landed, install branch circuit breakers and run branch circuits from the subpanel as needed. Follow all the same rules as you would running circuits from the main panel — AFCI and GFCI protection where required, proper wire sizing, and box fill calculations.

## Getting an Inspection

Subpanel installation requires a permit in virtually every jurisdiction. The inspection will verify:

- Feeder conductor sizing
- Correct neutral/ground separation or bonding (depending on structure type)
- Ground rod installation at detached structures
- Working clearances around the panel
- Proper grounding electrode conductor sizing and connection

A properly installed subpanel makes future electrical work in a remote location straightforward — every new circuit originates right at the subpanel rather than requiring a long home-run back to the main panel.

## See Also

- [Panel upgrades and load calculations](/articles/panel-upgrades-and-load-calculations) — verify your main panel has sufficient amperage headroom before sizing and installing a subpanel
- [Outdoor electrical work](/articles/outdoor-electrical-work) — running an underground feeder to a detached garage involves the same conduit and burial depth rules covered in the outdoor wiring guide
- [Wire gauge and ampacity guide](/articles/wire-gauge-and-ampacity-guide) — feeder conductor sizing is one of the most important decisions in subpanel installation; this guide covers aluminum vs. copper and the correct gauge for every amperage rating
