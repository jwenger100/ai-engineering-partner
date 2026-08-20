# Campaign reference

Quick reference for running ads. Everything here is deliberate; the reasoning
is included so it does not get undone by accident later.

## Ad landing pages

Both run the **same offer** as the homepage. Only the hero and problem section
differ, so each ad's promise matches the page it lands on. Roughly 80% of the
content is shared via `src/components/LandingPage.tsx`.

| Hook | URL | Primary CTA |
|---|---|---|
| Cost / velocity | https://www.aiengineeringpartner.com/burning-credits | Book a free call |
| Security | https://www.aiengineeringpartner.com/is-my-app-safe | Check my app |

The CTAs are intentionally different. Security traffic arrives alarmed and not
ready to talk, so it gets the low-commitment questionnaire. Credit-burn traffic
already knows it has a problem and wants it solved, so it gets the calendar.

### Why they are not in the nav or in search

They are `noindex` and listed under `Disallow` in `src/app/robots.ts`, and they
are excluded from `src/app/sitemap.ts`.

1. Three pages selling one offer with near-identical content splits your own
   search ranking and reads as duplicate content.
2. A browsing visitor seeing all three in the nav would assume they are three
   different services. They are one.
3. Organic visitors wandering into them would contaminate the A/B numbers.

To change this, a landing page would first need substantially different content
from the homepage, and it would stop being a clean test arm.

## Tracking

Attribution is captured on arrival and held in `localStorage` for 30 days, so
it survives navigation, closing the tab, and returning days later. It is
attached to every form and risk-check submission and forwarded into the Cal.com
booking iframe.

Always tag ad URLs:

```
https://www.aiengineeringpartner.com/burning-credits?utm_source=facebook&utm_medium=paid&utm_campaign=<campaign>&utm_content=<creative>
```

`utm_content` is the one that tells you which *creative* won, so set it per ad,
not per campaign. `fbclid` is appended by Meta automatically.

## How to judge the test

Judge on **ad click-through rate** and **risk-check completion rate**. Both have
enough volume to read within a sensible budget.

Do **not** judge on bookings or closed deals. At realistic traffic against a
$7,500 offer you will have single-digit conversions, and single digits are
noise. Read those qualitatively instead: listen to how the people who show up
describe their own problem, and put their words in the next round of creative.

## Before spending anything

- Remove the Lovable and Replit **logos** from both creatives. Meta prohibits
  third-party trademarks in ad creative and acts on it without waiting for a
  complaint. Use the plain words instead.
- Delete the "eliminate recurring platform costs" panel from the second
  creative. Published list prices are $20-25/mo, so it is not defensible, and
  migration usually raises the monthly bill rather than lowering it.
- Resize: Instagram feed wants **1080x1350**, LinkedIn single image wants
  **1200x1200**. Both current creatives are roughly 3:4 and fit neither.
- LinkedIn auto-rejects creative with more than 20% text overlay.

## The one cost claim that is allowed

> Both of the founders we've moved so far were spending over $700 a month
> before we started.

First person, about our own clients, verifiable. Never restate this as a market
average or a typical figure. That version was on the site once and had to be
removed.
