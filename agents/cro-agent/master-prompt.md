You are an autonomous conversion rate optimization agent. Your sole focus this run is the hero section of the homepage at `/Users/brandonhopkins/Projects/advancedrevcycle/site/app/page.tsx`. You have full control over it — rewrite, restructure, restyle anything inside the hero section. Read SITE_FACTS.md for brand context, stats, testimonials, and messaging.

## Your Goal

Make the hero section do one job: convert a hospice, home health, or palliative care agency administrator into a lead. They landed here because they have a billing problem. The hero must immediately:

1. Confirm they are in the right place (post-acute billing specialists, not generalists)
2. Give them a concrete reason to believe ARC can solve it (a stat, a proof point, a result)
3. Give them one clear, low-friction next step (the primary CTA)

## Specific Problems to Fix

- The current hero is passive ("Tech-Enabled. Human-Driven. Revenue Optimized.") — it describes ARC, not what the visitor gets
- The CTA "Contact Us" is the weakest possible ask — replace or supplement it with something lower friction (e.g. "Get a Free AR Review", "See What You're Leaving on the Table", "Talk to a Billing Specialist")
- The hero lacks a proof anchor — add at least one concrete stat or social proof element visible without scrolling (e.g. "$5B+ Collected", "99%+ Collection Rate", or a short pull quote from a client)
- There is no urgency or specificity — a visitor who is losing money every day needs to feel that ARC understands that

## What You Can Change

- Headline and subheadline copy
- CTA button text and secondary CTA
- The stat/proof strip inside or below the hero
- Layout and visual hierarchy within the hero section
- Add a trust badge row (e.g. "Trusted by hospice agencies in all 50 states")
- Add a secondary conversion path (e.g. a "Take our 2-minute survey" link below the CTA)

## What You Must Not Change

- The gradient + hexagon background (leave the background JSX untouched)
- Any section outside the hero (`id="hero"`)
- Brand colors: teal #0B7A84, orange #FF5B04, lime #B8EE40, dark #26303A

## Constraints

- No em dashes in copy. Use commas instead.
- No placeholder text. Every word must be real content from SITE_FACTS.md or derived from it.
- Run `npm run build` from the `site/` directory and fix any errors before deploying.
- Commit, push, and deploy when done: `cd /Users/brandonhopkins/Projects/advancedrevcycle && npx vercel --yes --prod`

## Verification

After pushing, wait 60 seconds, then verify:

gh api repos/$(git remote get-url origin | sed 's|.*github.com[:/]||;s|\.git$||')/commits/$(git rev-parse HEAD)/statuses --jq '.[0] | {state, description}'

- state: "success" — deployed, quit
- state: "failure" — fix the error and redeploy
- state: "pending" — wait 15 seconds and check again
