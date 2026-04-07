# Overnight Research — April 6, 2026

## 1. Better Insight Examples (from ChewIQ codebase deep dive)

The current marketing hero uses a single histamine example. ChewIQ actually has **8 correlation types** and can surface multi-layered insights. Here are the most compelling examples for the animation sequence:

### Recommended Hero Insight Sequence (cycle through these)

**Example 1 — Food Property Pattern Discovery (most impressive)**
> "3 foods you eat regularly share a hidden property: high oxalate. Your headaches appeared within 8 hours of eating them 71% of the time."
> Confidence: 71% · Foods: Spinach, Almonds, Quinoa
> *Why it's compelling: The AI discovers a category-level sensitivity the user didn't know about. This is the "holy shit" moment.*

**Example 2 — Stress as Symptom Amplifier**
> "Joint pain severity is 1.8x worse on high-stress days compared to low-stress days."
> Based on: 90 days of journal data
> *Why it's compelling: Shows the engine correlates across entry types (journal scores + symptoms), not just food→symptom.*

**Example 3 — Supplement Proof of Efficacy**
> "Since starting Magnesium Glycinate, headache severity decreased 45% and frequency dropped 30%."
> Based on: 4 weeks before vs. 4 weeks after
> *Why it's compelling: Proves a supplement is actually working with data, not guesswork.*

**Example 4 — Meal Timing Pattern**
> "Bloating occurred after late meals (after 8 PM) in 65% of cases — regardless of what you ate."
> Occurrences: 8 instances
> *Why it's compelling: The trigger isn't a food, it's a timing pattern. Unexpected.*

**Example 5 — Evening Supplement → Sleep Quality**
> "Sleep quality improved by 1.8 points on nights after taking Magnesium Glycinate."
> Based on: 23 nights analyzed
> *Why it's compelling: Cross-correlates supplements with next-day journal scores.*

### My Recommendation for the Animation
Cycle through Examples 1 and 2 (or show Example 1 as the primary, since the property pattern discovery is the most unique and impressive capability). The current histamine example is fine but a bit generic — the oxalate pattern discovery is what no other app can do.

---

## 2. Visual Comparison Findings

### What's Wrong with the Marketing Mockups

**Colors are off:**
- Marketing uses `#3a5a5a`/`#5a8a8a` for ChewIQ — these are gray-green approximations. Real ChewIQ uses OKLCH teal at hue 195° which reads cooler and more blue-tinted.
- Marketing uses `#92400e`/`#d97706` for HoneyDoIQ — close but the real app uses standard Tailwind amber scale.

**Shadows are too heavy:**
- Marketing uses `shadow-md` (medium). Both real apps use near-flat shadows (`shadow-sm` or custom subtle warm-tinted shadows). Marketing cards look "louder" than the real products.

**Badges are wrong shape:**
- Marketing uses `rounded-md` (4px). Both real apps use `rounded-full` (pill shape) with ring accents.

**Font weight mismatch:**
- Marketing uses `font-bold` for headings. ChewIQ uses `font-semibold`. HoneyDoIQ uses `font-extrabold`.

**HoneyDoIQ card uses wrong fonts:**
- The marketing card uses Fraunces/Source Sans 3 (the ChewIQ fonts). Real HoneyDoIQ uses Plus Jakarta Sans throughout — a completely different typographic voice.

### Which Visual Language is Stronger?
ChewIQ's design system is more sophisticated — OKLCH colors, warm-tinted shadows, semantic token layers, proper focus states. The marketing site's approach component should mimic ChewIQ's actual insight card patterns more closely rather than inventing its own.

### Specific Recommendations
1. Swap badge shapes to `rounded-full` with ring accent
2. Reduce shadows from `shadow-md` to `shadow-sm` 
3. Use actual ChewIQ OKLCH teal values for ChewIQ-branded elements
4. Use Plus Jakarta Sans or at least `font-extrabold` sans-serif for HoneyDoIQ elements
5. Match ChewIQ's actual insight card layout (from `app/(app)/insights/page.tsx`)

---

## 3. Animation Timing Notes
User said the animation was "very fast." Current timing:
- Badge appears: 800ms
- Typing starts: 1200ms  
- Stats appear: 4000ms
- Chart appears: 5200ms
- Reveal (headline): 7000ms

Recommend slowing to:
- Badge appears: 1500ms
- Typing starts: 2500ms (slower typing speed: 40ms per char instead of 28ms)
- Stats appear: 6500ms
- Chart appears: 8000ms
- Reveal (headline): 10000ms

Total animation: ~10 seconds before the headline appears. Gives each phase room to breathe.
