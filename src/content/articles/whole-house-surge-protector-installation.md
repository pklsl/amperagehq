---
title: "Whole-House Surge Protector Installation Guide"
description: "How to install a whole-house surge protector. Understand Type 1 vs Type 2 SPDs, MOV technology, clamping voltage, and top brands including Eaton, Siemens, and Square D."
pubDate: 2026-04-19
author: "AmperageHQ Team"
tags: ["surge-protection", "installation", "panel", "safety", "affiliate"]
---

A single electrical surge can destroy electronics worth thousands of dollars — and it happens silently in milliseconds. Plug-in surge protectors at individual devices provide some protection, but a whole-house surge protective device (SPD) at the panel is the first and most effective line of defense, stopping surges before they enter your home's wiring.

## What Is a Power Surge?

A transient voltage surge is a brief spike in electrical voltage significantly above the standard 120V (or 240V) of residential circuits. Surges can reach thousands of volts and last from a fraction of a millisecond to several milliseconds.

### Sources of Surges

**External (utility) surges:**
- Lightning strikes on or near utility lines — the most powerful surge type, potentially reaching 10,000+ volts
- Utility switching operations — as power companies switch equipment, momentary surges propagate through distribution lines
- Power restoration after outages — voltage overshoot occurs as the system restabilizes

**Internal (in-home) surges:**
- Motor-driven appliances (refrigerators, AC compressors, washers) generate surges when they switch on and off — every motor is a small surge generator
- Internal surges account for approximately 60–80% of all surge events in a typical home

A whole-house SPD protects against both types. Interestingly, plug-in surge protectors connected to outlets beyond the SPD provide additional protection, especially for sensitive electronics.

---

## Types of Surge Protective Devices

NEC (Article 285 for Type 1, Type 2) and UL 1449 classify SPDs by their installation location in the power system:

### Type 1 SPD

Installed between the utility transformer and the main service disconnect (before the main breaker). Can handle direct lightning strikes on utility lines — rated for 100kA or more per phase.

**Installation:** Requires the utility to disconnect power (since the service entrance conductors are always live). More complex installation, typically performed when service work is already being done.

**Best for:** High lightning-risk areas, homes near utility distribution equipment, maximum protection

### Type 2 SPD

Installed at or after the main service entrance disconnect — typically at the main panel or a subpanel. Handles lightning energy that has already been attenuated by the utility transformer plus the service entrance conductors, and handles internal surge events very effectively.

**Installation:** Can be installed on the load side of the main breaker by an electrician without utility involvement. The main breaker is turned off and the SPD wires connect to a dedicated double-pole breaker or directly to the bus.

**Best for:** Most residential applications — provides excellent protection at a reasonable cost and complexity

### Type 3 SPD

Point-of-use devices — the standard plug-in surge protectors. Installed within 30 feet of the protected equipment. Best used as a second layer of protection downstream of a Type 2 SPD.

### Type 1+2 Combination

Some devices are listed as Type 1 and Type 2, providing broader protection from both utility-side and internal surges. Becoming more common in residential applications.

---

## How Surge Protection Works

### MOV (Metal Oxide Varistor) Technology

The core component in most residential SPDs is the MOV — a semiconductor component with voltage-dependent resistance. Under normal voltage, MOV resistance is very high — it passes no significant current. When voltage exceeds the clamping voltage threshold, resistance drops dramatically — the MOV conducts the excess energy, diverting it to ground rather than letting it reach connected equipment.

**Limitation of MOVs:** Each surge event degrades the MOV slightly. Over time — after absorbing many smaller surges or a large surge event — MOVs can fail. Quality SPDs include monitoring indicators (LEDs) and/or audible alarms that signal when the MOV has degraded and the device should be replaced.

### SASD (Series Arc-to-Surge Diversion) and MCOV

More advanced SPDs use different technologies that don't degrade the same way MOVs do, but MOV-based designs remain the most common residential choice.

### Clamping Voltage

The clamping voltage is the voltage at which the SPD begins conducting and diverting energy. Lower clamping voltage means better protection — the SPD responds before higher voltages can damage equipment.

UL 1449 4th edition sets the maximum clamping voltage at 1,000V for a 120V rated SPD. Look for SPDs with clamping voltages below 700V (preferably below 600V) for better protection.

### Joule Rating

The joule rating indicates how much surge energy the SPD can absorb. Higher is better, but it's not the only spec that matters — MOV count, clamping voltage, and response time all matter too.

Whole-house SPDs typically handle 40kA–80kA peak current. Compare peak current ratings rather than joule ratings when evaluating panel-mounted SPDs.

---

## Whole-House Surge Protector Recommendations

### Siemens FS140 (Type 1+2) — Best Overall

The Siemens FS140 is the most commonly recommended whole-house SPD by electricians in the US. The FS140:
- Is Type 1 and Type 2 listed — provides both external and internal surge protection
- Handles 140kA peak current per mode
- Has a 1,000V clamping voltage at L-N
- Includes LED status indicator (green = protected, red = replace)
- Installs to a 120/240V 2-pole breaker or bus lugs
- Compatible with Siemens, Murray, and many other panels

**Price:** $100–$130

### Eaton CHSPT2ULTRA (Type 2) — Best Value

Eaton's CHSPT2ULTRA is an excellent value SPD with competitive specs:
- 108kA surge current rating
- 800V clamping voltage (L-N) — better than many competitors
- Status indicator and audible alarm when replacement is needed
- Compatible with Eaton CH, BR panels and others with appropriate breaker
- UL 1449 4th edition listed

**Price:** $80–$110

### Square D SDSB80G (Type 2) — Best for Square D Panels

Square D's whole-house SPD is designed to integrate cleanly with Square D QO panels. It mounts directly to the panel interior without requiring a breaker — using the bus bar lugs directly.

- 80kA surge current rating
- Compatible with QO and QOB panels
- Clean interior mounting
- LED status indicator

**Price:** $70–$100

### Leviton 51120-1 (Type 2) — Universal Compatibility

Leviton's whole-house SPD is designed for wide panel compatibility and has a compact form factor that installs in a single knockout of most panels.

- 120kA total surge current (60kA per phase)
- 800V clamping voltage
- LED status indicator, alarm
- UL 1449 listed

**Price:** $90–$130

---

## Installation Guide

Whole-house SPD installation involves panel work and should be done by a licensed electrician or a qualified person who understands panel safety. The service entrance conductors above the main breaker remain live even with the main breaker turned off — do not contact them.

### What You'll Need

- Whole-house SPD (appropriate for your panel)
- Double-pole breaker (correct brand and amperage for your panel) — if the SPD doesn't connect directly to bus lugs
- Screwdrivers
- Wire strippers
- Non-contact voltage tester
- Knock-out punch (if a new knockout is needed)

### Step 1: Turn Off the Main Breaker

Turn off the main service disconnect. Verify with a non-contact voltage tester that the bus bars (not the service entrance conductors) are de-energized.

### Step 2: Select Mounting Location

Most whole-house SPDs mount in one of two ways:
- **Dedicated double-pole breaker:** The SPD connects to a dedicated 2-pole breaker (typically 30A or 50A — check the SPD spec). The breaker provides overcurrent protection for the SPD leads.
- **Direct bus lug connection:** Some SPDs have their own internal overcurrent protection (fused) and connect directly to the bus bar lugs. Check the SPD's installation instructions.

Choose a location in the panel that provides short wire runs from the SPD to its connection point — shorter leads mean the SPD responds faster to surges.

### Step 3: Mount the SPD

Following the manufacturer's instructions:
- Mount the SPD unit to the panel or wall adjacent to the panel
- Some SPDs have a bracket that mounts inside the panel; others mount externally
- Route the SPD's leads through appropriate knockouts

### Step 4: Connect the Leads

**SPD leads:**
- Black lead → hot bus or breaker terminal (Hot 1)
- Red lead → hot bus or breaker terminal (Hot 2)
- Green or bare lead → ground bar

Some SPDs have separate neutral connections — connect to the neutral bar.

Tighten all connections to the manufacturer's specified torque if a torque screwdriver is available.

### Step 5: Install the Breaker (if required)

If the SPD uses a dedicated breaker, install the breaker in the appropriate slot (ensuring it contacts both bus bars for double-pole), connect the SPD leads, and verify the breaker is in the OFF position.

### Step 6: Restore Power

Turn on the main breaker, then turn on the SPD's dedicated breaker (if applicable). Verify the SPD's status indicator shows green or "Protected."

---

## Layered Surge Protection Strategy

A whole-house SPD is the first layer of protection. For best protection of sensitive electronics, use a layered approach:

**Layer 1: Whole-house SPD at the panel** — stops the largest surge events, both utility-side and internal

**Layer 2: Point-of-use SPDs at sensitive equipment** — provides additional protection for equipment that generates or is most sensitive to surges:
- UPS (uninterruptible power supply) for computers, servers, NAS — provides battery backup plus surge protection
- High-quality surge protectors for home theater equipment
- Direct connections (no surge strip) for washing machines and other motor loads that generate their own surges

**What not to skip:** Many whole-house surges travel through telephone/cable/satellite lines rather than (or in addition to) the power lines. Better SPDs include coaxial and phone line protection; alternatively, use surge protectors with coax connectors for TV and internet equipment.

---

## Maintenance

- **Check the status indicator annually** — replace if the LED shows "replace" or "unprotected"
- **Replace after a known large surge event** — a nearby lightning strike or significant power event may have degraded the MOVs
- **Replace every 5–10 years** even without known events — MOVs degrade gradually from smaller unnoticed surges
- **Keep purchase receipt** — many whole-house SPDs come with connected equipment warranties (typically $50,000–$150,000) that require the SPD to be registered and properly installed

A whole-house surge protector is inexpensive insurance against appliance damage. At $80–$130, it's trivial compared to replacing a refrigerator, HVAC controller board, or home theater equipment — all of which are vulnerable to surge damage.
