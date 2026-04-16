export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  date: string;
  image: string;
  content: string;
  relatedService?: { title: string; href: string };
}

export const posts: BlogPost[] = [
  {
    slug: "noe-timing-five-day-window",
    title: "NOE Timing: The Five-Day Window That Protects Your First Payment",
    category: "Compliance",
    excerpt:
      "A late Notice of Election does not trigger a warning. It triggers an automatic denial. Medicare requires the NOE to be filed within five days of a hospice patient's admission, and agencies that miss that window face a non-billable period starting from day one. The day count starts on the admission date, not on the day someone finds the paperwork. Filing on admission day removes the risk entirely.",
    date: "April 2026",
    image: "/assets/gallery/careers-1.jpg",
    relatedService: { title: "Hospice Billing", href: "/hospice-billing" },
    content: `
The Notice of Election is the document that makes a hospice patient's Medicare benefit official. Without it, there is no billable period. File it late, and the days before the filing become non-billable permanently. There is no retroactive fix, no appeal pathway, and no grace period.

## What the Five-Day Rule Actually Says

Medicare Conditions of Participation require a hospice to file the Notice of Election within five calendar days of the effective date of election. The effective date is the date the patient elects the hospice benefit, which is typically the admission date. That five-day window starts on day one of admission, not on the day your billing team opens the chart.

If the NOE is filed on day six or later, Medicare calculates a non-billable period equal to the number of days from the election date through the day before the NOE was filed. If you admit a patient on the first of the month and file the NOE on the ninth, days one through eight are non-billable. You cannot recapture those days.

## Where Agencies Lose the Window

Most late NOE filings are not caused by ignorance of the rule. They happen for operational reasons:

**Weekend and holiday admissions.** A patient admitted on Friday afternoon may not reach the billing queue until Monday. By the time the NOE is filed, three to four days of the window are already gone.

**Delayed physician certification.** Some agencies wait to file the NOE until the certifying physician has signed the election statement. The two documents are separate processes. Waiting for the physician signature to initiate NOE filing is a common and costly confusion.

**EMR workflow gaps.** In some EMR systems, the admission workflow and the billing workflow operate in separate modules. A completed admission does not automatically trigger a billing notification, and the NOE falls through the gap.

**Staffing coverage gaps.** During vacations, turnover, or weekends, agencies without clear coverage protocols can miss admissions that need same-day NOE attention.

## The Day Count Mechanics

The five-day window counts calendar days, not business days. A patient admitted on a Wednesday has until Sunday to have the NOE filed. Most billing teams that work Monday through Friday do not account for this when a Wednesday admission is admitted late in the day.

The NOE must be received and accepted by the Medicare Administrative Contractor, not just submitted. A submission error, a missing field, or a rejected batch will not stop the clock. If the MAC does not accept the NOE within five days, the window has closed regardless of your submission date.

## What a Non-Billable Period Costs

The dollar impact of a non-billable period depends on the length and the patient's care level. A Routine Home Care day reimburses at approximately $200 to $215 per day under current rates. A five-day non-billable period costs roughly $1,000 to $1,100 per patient. For an agency with frequent late filings, the annual impact compounds quickly.

For patients who remain on hospice for a short stay, a late NOE can eliminate most or all of the billable episode. A patient who elects hospice, remains for 12 days, and whose NOE was filed on day seven has only five billable days. The clinical team provided 12 days of care. The billing captures five.

## Filing on Admission Day

The most reliable protection against NOE-related revenue loss is a same-day filing protocol. When the patient is admitted and the election statement is executed, the NOE is initiated that day. This requires:

**A direct link between clinical admissions and billing.** The billing team needs to know about every admission as it happens, not when the chart is transferred or when a report runs. In most well-run agencies, this is a real-time notification from the clinical lead to billing.

**Separation of the NOE from physician certification.** The hospice election statement signed by the patient or representative is sufficient to initiate the NOE. Physician certification is a separate document with its own deadlines. Conflating the two delays the NOE unnecessarily.

**Weekend and holiday coverage.** Same-day filing only works if someone is available to file on any day an admission can occur. Agencies that admit seven days a week need NOE coverage seven days a week.

**MACs that allow electronic filing.** All three Medicare Administrative Contractors, Palmetto GBA, CGS, and National Government Services, accept electronic NOE submission. Batching paper submissions does not work within a five-day window.

## What Happens After the Window Closes

If the NOE is filed late, the MAC will process the claim with a non-billable period. The agency will see this on the remittance advice. The non-billable days will not appear on the claim, and payment will reflect only the days after the NOE filing date.

There is no corrected claim pathway for a late NOE. The non-billable period is permanent. The only productive response is an internal review to understand why the filing was late and a process change to prevent recurrence.

## Connecting NOE Timing to the Rest of the Billing Cycle

The NOE is the first step in the hospice billing sequence. Filing it correctly on admission day sets up clean claim submission, accurate payment posting, and a billable period that reflects the actual care delivered. Every downstream billing function depends on the NOE being right.

Agencies that consistently file NOEs on time tend to have fewer claims problems overall. The discipline required to file same-day is the same discipline that catches documentation gaps, identifies payer issues early, and keeps AR aging manageable. A late NOE is often a signal that the billing workflow has gaps that extend beyond the notice itself.

ARC's billing team files NOEs on the day of admission as standard practice. For agencies that have experienced non-billable periods or are uncertain about their current NOE filing timelines, the first step is a review of the current admissions-to-billing notification process.
    `.trim(),
  },
  {
    slug: "2025-hospice-wage-index-changes",
    title: "Understanding the 2025 Hospice Wage Index Changes",
    category: "Regulatory Update",
    excerpt:
      "The 2025 Medicare hospice wage index update moved reimbursement rates for agencies in dozens of geographic areas. Agencies that missed the adjustment discovered the gap when claims came back short. The changes are not complicated, but they require action before the next billing period.",
    date: "March 2026",
    image: "/assets/gallery/careers-blog.jpg",
    relatedService: { title: "Hospice Billing", href: "/hospice-billing" },
    content: `
The Medicare hospice wage index is updated each federal fiscal year, which begins October 1. The 2025 update, effective October 1, 2024, adjusted labor cost factors for counties and Core-Based Statistical Areas across the country. Some areas saw rate increases. Others saw decreases. Agencies that did not update their billing systems or review their MAC payment schedules did not find out until claims came back short.

## How the Hospice Wage Index Works

Medicare hospice reimbursement uses four payment categories: Routine Home Care, Continuous Home Care, Inpatient Respite Care, and General Inpatient Care. Each category has a base rate, which is then adjusted by a wage index factor tied to the geographic location of the agency.

The wage index reflects local labor cost differences. An agency in a high-cost urban market receives a higher wage index adjustment than an agency in a rural area with lower wage costs. The adjusted rate is what the agency actually receives per day for each care category.

The wage index factors are published by CMS in the annual hospice final rule, typically released in August before the October effective date. Agencies have roughly six weeks between publication and implementation to update their billing systems and review their expected rates.

## What Changed in 2025

The 2025 hospice final rule included several changes that affected payment rates:

**Base rate update.** CMS applies an annual market basket update to hospice base rates. The 2025 update reflected a 2.9% market basket increase, partially offset by a 0.5% productivity adjustment, resulting in a net base rate increase of approximately 2.4%.

**Wage index reclassifications.** Some counties and CBSAs received new wage index assignments based on updated Bureau of Labor Statistics data. Reclassifications typically happen at the CBSA boundary level, meaning agencies in counties that shifted from one CBSA to another saw their wage index factor change.

**Rural add-on adjustment.** The rural add-on percentage, which applies to hospices located in rural areas, was updated as part of the rule. Agencies that qualify for the rural add-on needed to verify their rural status under the updated CBSA definitions.

## Finding Your Agency's Wage Index Factor

Each hospice agency's wage index factor is tied to the county in which it is located. The factor for your county is published in the wage index tables included in the annual final rule.

To verify your current rate:

1. Identify your agency's county and the CBSA that county belongs to under current CMS definitions.
2. Look up your CBSA's wage index factor in the current year's wage index table.
3. Apply the factor to the current base rates for each care category.
4. Compare the result to what your MAC has been paying.

If there is a discrepancy, the issue is either a billing system that has not been updated to the current rates or a claim payment error that needs to be corrected.

## What a Missed Adjustment Looks Like on Claims

An agency that did not update its billing system to reflect the 2025 wage index may have been submitting claims at the prior year's adjusted rates. Some MACs pay what is submitted rather than what is correct, meaning the agency received less than it was entitled to without receiving a denial.

In other cases, the MAC's payment system updated correctly but the agency's internal reporting still reflected old rates, creating an apparent discrepancy that was actually correct payment at the new rate.

Sorting out which scenario applies requires a line-by-line comparison of your agency's submitted rates against the MAC's payment schedule for your geographic area.

## Proactive Wage Index Review

The most effective approach to wage index changes is a proactive review before each federal fiscal year begins. The review should cover:

**Verification of CBSA assignment.** Confirm that your agency's county is correctly assigned to the right CBSA in both your billing system and your MAC enrollment records.

**Rate comparison.** Pull the new base rates and wage index factors from the final rule and calculate your expected adjusted rates for each care category. Compare these to what your billing system is configured to submit.

**Remittance audit.** After the first claims process under new rates, review your remittances to confirm the MAC is paying at the expected level for each care category.

**Prior period review.** If rates were not updated correctly at the start of the fiscal year, calculate the underpayment for claims already processed. Some MACs allow corrected claims for rate-related errors; others require a different process.

## The Broader Pattern: Annual Regulatory Updates

The wage index is one of several CMS updates that take effect at the start of each federal fiscal year. Hospice agencies also need to track changes to:

- The face-to-face encounter requirements
- Certification and recertification documentation standards
- Quality reporting program requirements
- Cost report filing deadlines

Missing any of these updates creates compliance exposure or revenue loss. The volume of annual regulatory activity is one of the reasons hospice billing benefits from dedicated specialists rather than generalist billing staff who split attention across multiple specialties.

ARC's team monitors every CMS final rule and MAC bulletin that affects hospice reimbursement. Rate updates are applied before the first claim of the new fiscal year, and post-update remittances are reviewed to confirm the MAC is paying correctly. Agencies that experienced unexplained payment discrepancies after October 2024 should request a rate audit as a starting point.
    `.trim(),
  },
  {
    slug: "pdgm-primary-diagnosis-selection",
    title: "Why PDGM Primary Diagnosis Selection Matters More Than Ever",
    category: "Coding",
    excerpt:
      "Under the Patient-Driven Groupings Model, the primary diagnosis determines your clinical grouping and reimbursement rate. A suboptimal selection is not a minor issue, it is lost revenue on every episode. A coding review from a PDGM-specialized team before the first claim of an episode is the fastest way to close that gap.",
    date: "February 2026",
    image: "/assets/gallery/careers-eligibility.jpg",
    relatedService: { title: "Coding and OASIS Review", href: "/coding-and-oasis-review" },
    content: `
The Patient-Driven Groupings Model changed the financial architecture of home health reimbursement when it replaced the Prospective Payment System in January 2020. Under PPS, visit volume was the primary driver of payment. Under PDGM, clinical complexity drives the grouping, and the primary diagnosis drives the clinical complexity assignment. The code selected for the primary diagnosis is not a documentation formality. It is the variable that determines which of twelve clinical groups a patient falls into, and clinical groups determine the base payment rate.

## How Clinical Groupings Work Under PDGM

PDGM divides home health episodes into 30-day payment periods. Each 30-day period is classified based on five factors: timing (early or late in the episode), admission source (community or post-acute), clinical grouping, functional level, and comorbidity adjustment.

The clinical grouping is set entirely by the primary diagnosis code. CMS has organized ICD-10 codes into clinical categories that correspond to the six clinical groups: Musculoskeletal Rehabilitation, Neuro/Stroke Rehabilitation, Wounds, Complex Nursing Interventions, Behavioral Health, and Medical Management. The primary diagnosis code must fall into one of these categories. If a patient's condition is most accurately captured by a code in a higher-reimbursing clinical group, and the documentation supports that code, selecting it rather than a less specific alternative is not upcoding. It is accurate coding.

## What a Suboptimal Code Costs

To understand the financial impact of an incorrect primary diagnosis selection, consider a patient being admitted for wound care following a lower extremity amputation. The wound is the active issue driving the home health need. If the coder selects a code related to the underlying diabetes rather than the wound, the patient may be grouped into Medical Management rather than Wounds. Depending on the specific codes and the period timing, this can represent a payment difference of several hundred dollars per 30-day period.

For an agency with 50 active patients at any given time and a modest error rate on primary diagnosis selection, the aggregate revenue impact can be significant. Multiply across a year and the number becomes material.

## Why Primary Diagnosis Selection Requires PDGM Knowledge

Not every ICD-10 code that accurately describes a patient's condition is the correct primary diagnosis under PDGM. The primary diagnosis should reflect the main reason for the home health admission, which is typically the condition most responsible for the patient's homebound status and the need for skilled services. But it must also be a code that CMS has designated as a valid primary diagnosis for home health.

Some codes are excluded from serving as home health primary diagnoses. Some are only valid as additional diagnoses. Selecting a code without knowing its PDGM classification status can result in a claim that fails edit checks or that does not capture the appropriate clinical grouping.

PDGM-specialized coders know which codes belong to which clinical groups, which codes are excluded from primary diagnosis status, and how to read clinical documentation to identify the most accurate and most appropriate primary diagnosis given the patient's full clinical picture.

## The OASIS Connection

The primary diagnosis on the claim must match the primary diagnosis on the OASIS. The OASIS assessment drives the clinical grouping in the same way as the claim code. If the OASIS and the claim are coded differently, the discrepancy creates a documentation integrity problem and potential audit exposure.

OASIS review at Level 2 and above includes verification that the assessment codes are consistent with the clinical documentation and that the primary diagnosis on the OASIS is appropriate for the patient's condition. When the OASIS and the claim align correctly, the agency has a clean audit trail and the assurance that the clinical grouping reflects what was actually delivered.

## Comorbidity Adjustments: The Secondary Diagnosis Layer

Primary diagnosis selection determines the clinical grouping, but comorbidity adjustments add a secondary layer of payment calculation. CMS applies comorbidity adjustments based on secondary diagnoses that interact with the primary condition in ways that increase care complexity.

The interaction table that determines which secondary diagnoses qualify for comorbidity adjustments is specific to PDGM. A diagnosis that would intuitively seem like a complicating factor may not appear on the interaction table, while others that seem minor may qualify. Comprehensive secondary diagnosis coding, including all active comorbidities that appear in the clinical record, is necessary to capture every applicable comorbidity adjustment.

An agency that codes only the primary diagnosis and leaves secondary diagnoses incomplete is systematically underpaying itself on every episode where a comorbidity adjustment applies.

## Audit Risk: The Other Side of the Equation

The argument for thorough PDGM coding is not just revenue optimization. It is also audit protection. CMS and the MACs audit home health claims for clinical necessity, documentation adequacy, and coding accuracy. The primary diagnosis must be supported by the clinical record. The documented condition must justify the home health services provided.

An accurate primary diagnosis, selected from the clinical record with PDGM logic applied, is defensible in an audit. A code selected without reference to the documentation, or selected to reach a particular grouping without clinical support, is not.

The goal of PDGM coding is clinical accuracy with PDGM logic applied. Every code selected should be clinically supported. The coding review process is not about gaming the grouping. It is about ensuring that the codes submitted accurately reflect the care the clinical team actually delivered.

## When to Conduct a Coding Review

The optimal time for a coding review is before the claim for the first 30-day period is submitted. Once a claim is paid, correcting it requires a process that most agencies do not have the resources to manage routinely.

For agencies that have not conducted a systematic coding review, a retrospective audit of a representative sample of recent episodes can identify whether systematic coding errors are present and estimate the revenue impact. This gives leadership the information to decide whether a prospective coding review process is warranted.

ARC's coding team, built through the RCO acquisition, conducts PDGM-aligned coding review at four levels depending on an agency's complexity and compliance requirements. The coding review is available as a standalone service or integrated with ARC's full home health billing process.
    `.trim(),
  },
  {
    slug: "outsourced-billing-transition",
    title: "Transitioning from In-House to Outsourced Billing: What to Expect",
    category: "Operations",
    excerpt:
      "The decision to outsource billing is one of the easier ones. The handoff is where agencies get into trouble. A poorly timed transition can stall AR for months. Getting the timing and the steps right keeps collections intact from day one.",
    date: "January 2026",
    image: "/assets/gallery/about-team.png",
    relatedService: { title: "Hospice Billing", href: "/hospice-billing" },
    content: `
Most hospice and home health agencies that outsource billing arrive at the decision after a triggering event: a biller resigns, AR starts aging, or a compliance issue surfaces that the in-house team cannot resolve. The decision itself is usually straightforward once the trigger occurs. What most agencies underestimate is how the transition is managed.

A billing handoff done poorly is expensive. Claims fall through the gaps. AR ages during the learning period. The new vendor is working from incomplete information while the departing billing team, if one still exists, is disengaging. Done well, the transition is nearly invisible to the agency's revenue cycle. The difference is almost entirely in how the handoff is structured.

## The Pre-Transition Audit

Before any billing partner can take over claims, they need to understand the current state of your AR. This is not just a courtesy step. The pre-transition audit determines what existing claims need follow-up, what denials are pending appeal, and what documentation gaps exist in open episodes.

The pre-transition audit should cover:

**Current AR aging by payer.** A 60-day aging report broken out by payer shows where collections are concentrated and where problems are likely to be. Medicaid claims over 90 days, for example, may require a different follow-up process than commercial claims of the same age.

**Open denials and appeals.** Every denial that has been received but not resolved is a revenue risk during transition. If the new team takes over before understanding what denials are in flight, those denials may age out of appeal timelines.

**Unbilled episodes.** Any episode where services have been delivered but a claim has not been submitted represents an accounts receivable problem that needs to be addressed immediately, not after the transition is complete.

**Documentation gaps.** Missing face-to-face encounter documentation, unsigned certifications, and incomplete OASIS assessments all create claims that cannot be submitted cleanly. Identifying and resolving these gaps before the transition starts the new team with a clean pipeline.

## EMR Access and the Learning Period

The incoming billing team needs EMR access before the transition date. This is not optional and it is not something that can happen on day one of the engagement. EMR onboarding, credentialing with your software vendor, and learning your specific agency's workflow within the system takes time.

For EMR platforms the team has not worked with before, the learning period is longer. For familiar platforms, it can be compressed significantly. The right question to ask a prospective billing partner is not just which EMRs they work with, but how many of their billers have active experience with your specific platform.

ARC works with every major hospice and home health EMR, including Netsmart, MatrixCare, WellSky, Axxess, Homecare Homebase, Mumms, KanTime, Careficient, Complia Health, HospiceMD, and Delta Health Technologies. For familiar platforms, EMR onboarding can happen in days rather than weeks.

## What Happens on Day One

The first day of the new billing relationship should not be the first time the new team sees your AR. By the time the engagement starts, the new team should have:

- Completed EMR access and initial orientation
- Reviewed the pre-transition audit results
- Established who receives notification of new admissions
- Confirmed how claims will be submitted for the transition period
- Identified any immediate priority items, including aging denials or claims at risk of timely filing limits

The transition date itself should mark the point at which the new team takes primary responsibility for new claims submission. Existing open claims and in-flight appeals may have a defined handoff period, but the timeline should be established before day one, not improvised during it.

## The 30-Day Post-Transition Review

The first 30 days of a new billing relationship reveal whether the transition was set up correctly. This is the period to watch closely.

**Are new claims being submitted on time?** The timeliness of new claims submission is the most direct indicator of whether the new team has access to what it needs. If claims are delayed, the cause is usually either an EMR access problem or a gap in the admission notification process.

**Are existing denials being worked?** Appeals on pre-transition denials require documentation that may not have been fully transferred. If existing denials are aging without action, investigate whether the new team has access to the supporting documentation.

**Is the remittance process working?** Payment posting requires access to remittance advice from each payer. Any payer portal access that was not set up before the transition creates a posting gap that affects your AR reporting.

**Is communication clear?** The billing team should be proactively notifying the agency of any coverage changes, payer issues, or documentation gaps as they are discovered, not waiting for the agency to ask.

## When the In-House Biller Is Still in the Building

Many transitions happen while the departing billing staff member is still employed. This is the best-case scenario because knowledge transfer can happen in real time. But it requires clear expectation-setting.

The departing biller should understand that their role is to transfer knowledge, not to continue making billing decisions. The incoming team needs to take ownership of the process as quickly as possible. A transition where the in-house biller continues making decisions while the external team watches is not a transition. It is a delayed handoff that will create confusion when the biller eventually leaves.

Define a specific date on which the external team takes primary responsibility. Before that date, the in-house biller handles claims with the new team observing. After that date, the external team handles claims with the in-house biller available for questions. This structure makes the handoff real rather than gradual.

## Measuring Success at 90 Days

By 90 days post-transition, the engagement should be fully operational. The indicators of a successful transition at this stage are:

**Clean claims rate.** What percentage of submitted claims are paid on first submission without rejection or denial? A well-functioning billing operation targets 95%+ on clean claims.

**AR aging trend.** Is the over-90-day bucket shrinking relative to total AR? A new billing partner that is working existing claims aggressively will move that number. One that is only processing new claims will not.

**Denial resolution rate.** Of all denials received since the transition, what percentage have been resolved through payment, appeal, or write-off? A high unresolved denial percentage suggests claims are falling out of the workflow.

**Agency communication.** Is the billing team proactively communicating issues, or is the agency finding out about problems from remittances and aging reports? Reactive communication is a warning sign.

The transition from in-house to outsourced billing is a well-trodden path in post-acute care. Most agencies that do it with proper planning maintain collections continuity from day one. Most agencies that do it without proper planning spend the next six months recovering.

ARC has completed billing transitions in under 30 days and has onboarded agencies that had no billing infrastructure at all, starting from licensure. The key variable in every successful transition is the pre-transition groundwork, not the billing team's general competence once they are up and running.
    `.trim(),
  },
];
