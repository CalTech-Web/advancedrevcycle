export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  date: string;
  dateISO: string;
  image: string;
  content: string;
  relatedService?: { title: string; href: string };
}

export const posts: BlogPost[] = [
  {
    slug: "noe-timing-five-day-window",
    title: "NOE Timing: The Five-Day Window That Protects Your First Payment",
    category: "Compliance",
    dateISO: "2026-04-01",
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
    dateISO: "2026-03-01",
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
    dateISO: "2026-02-01",
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
    dateISO: "2026-01-01",
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
  {
    slug: "home-health-noa-five-day-rule",
    title: "Home Health NOA Filing: How the Five-Day Rule Affects Your First Payment",
    category: "Compliance",
    dateISO: "2025-12-15",
    excerpt:
      "The Notice of Admission triggers a home health patient's Medicare coverage period. File it late and Medicare calculates a permanent non-billable period starting from day one of care. The five-day window runs on calendar days, not business days, and missing it by a single day costs revenue that cannot be recovered.",
    date: "December 2025",
    image: "/assets/gallery/careers-eligibility.jpg",
    relatedService: { title: "Home Health Billing", href: "/home-health-billing" },
    content: `
The Notice of Admission is the document that initiates a home health patient's coverage period with Medicare. Without it, there is no billable period. File it late, and Medicare calculates a non-billable period for every day from the start of care through the day before the NOA was accepted. The dollar impact is immediate and permanent.

## What the Five-Day Rule Requires

Medicare requires home health agencies to file the Notice of Admission within five calendar days of the start of care date. The start of care date is the first day the agency provides a skilled service in the patient's home. That is the date the five-day window begins, not the date the order was received, the date the patient was referred, or the date the agency accepted the referral.

If the NOA is not accepted by the Medicare Administrative Contractor within five days of the start of care, the claim for the first 30-day payment period will be reduced. The reduction equals the number of days from the start of care through the day before the NOA was accepted. A patient whose care began on the first of the month and whose NOA was not accepted until the seventh will have the first six days excluded from payment. Those days are not recoverable.

## The Compliance History Behind the Rule

CMS implemented the NOA requirement in the Calendar Year 2021 Home Health Prospective Payment System Final Rule. Before the NOA, home health agencies were not required to file any pre-claim document for the initial episode. The NOA replaced the Request for Anticipated Payment, which was phased out as part of the same regulatory update.

The rule change was designed to give CMS and MACs earlier visibility into the home health benefit, consistent with the hospice Notice of Election requirement. The financial penalty for late filing is intentional. CMS designed it to ensure agencies treat the NOA as an operational priority rather than a documentation formality.

## Why Agencies Miss the Window

Most late NOA filings are not the result of ignorance. The most common causes are operational:

**Referral intake and start of care are handled by different teams.** When the clinical team makes the first home visit and the administrative team does not learn about it until a chart transfer or morning report, the NOA is already delayed. In well-run agencies, the billing team knows about the first skilled visit on the day it happens.

**Agencies wait for physician orders before initiating the NOA.** The physician's plan of care is a separate document with its own deadline. Waiting for the signed order before submitting the NOA is a common and costly mistake. CMS requires only that verbal orders be in place before the start of care. The NOA can be filed on verbal orders alone.

**Weekend and holiday start of care visits.** A skilled nurse visit on a Friday afternoon may not be entered into the EMR billing module until Monday morning. By Monday, two or three days of the five-day window have already elapsed. Agencies that admit patients seven days a week need NOA processing available seven days a week.

**EMR workflow disconnects.** In some systems, the clinical and billing workflows operate in separate modules. A completed visit note does not automatically create a billing notification. If the billing team depends on a report to know about new admissions, the report frequency determines how quickly the NOA gets filed.

## The Dollar Impact

Under the current PDGM payment structure, a 30-day payment period reimburses between approximately $2,000 and $3,500 depending on the clinical grouping, timing, and functional impairment level. Each excluded day in a non-billable period represents a proportional reduction to that total.

For an early episode in the Musculoskeletal Rehabilitation clinical group with moderate functional impairment, the daily rate is roughly $100 to $120. A five-day non-billable period represents $500 to $600 lost on a single patient. An agency with 100 admissions per month experiencing even a 10% late NOA rate across a full year is losing $60,000 to $70,000 annually in permanently excluded revenue.

For agencies with higher episode volumes, the compounding effect is more significant. Late NOA filings that go undetected until the remittance advice are often treated as one-time errors. They rarely are.

## Connecting NOA Timing to Clean Claim Submission

The NOA is the first step in the PDGM billing sequence. It must be accepted by the MAC before the first 30-day claim can be processed. An outstanding or rejected NOA creates a claims submission problem that delays the entire billing cycle.

Agencies that file NOAs same-day as start of care create clean billing pipelines. The MAC has early visibility into the episode, the NOA is not a variable in the claims submission process, and the billing team does not have to track NOA status alongside active claim management.

Agencies that allow the NOA to become a catch-up task rather than a same-day process introduce a persistent source of payment delays and permanent revenue loss.

## Building a Same-Day NOA Protocol

The operational requirements for same-day NOA filing parallel those for hospice NOE compliance:

**A direct notification link between clinical and billing.** The billing team must know about every skilled visit on the day it occurs, not when reports are run or charts are transferred. This typically requires a defined communication protocol between the clinician making the first visit and the billing lead.

**Clear separation of NOA from plan of care signing.** The NOA can be submitted on verbal orders. Agencies that tie NOA submission to the signed plan of care are creating unnecessary delay for every new patient.

**Seven-day coverage.** Start of care visits happen on any day. NOA processing must be available on any day. For smaller agencies, this may mean having a single billing team member on call for weekend admissions. For larger agencies, it requires a structured coverage rotation.

**MAC portal access and electronic submission.** All three Medicare Administrative Contractors, Palmetto GBA, CGS, and National Government Services, accept electronic NOA submission. Paper or batch submissions do not reliably meet the five-day window.

## What to Do After a Late NOA

When a MAC processes an NOA that was filed after the five-day window, it will calculate the non-billable period and reduce the subsequent claim payment. The agency will see this reflected on the remittance advice as a per-day reduction.

There is no corrected claim mechanism to recover a non-billable period. The reduction is permanent. The productive response is an internal process review to identify why the NOA was late and a documented protocol change to prevent recurrence.

Agencies that identify a pattern of late NOA filings should conduct a look-back audit to quantify the revenue impact. Knowing the total dollar amount of non-billable days over a given period is often the trigger that drives the operational changes that prevent further losses.

ARC's home health billing team files NOAs on the start of care date as standard practice. For agencies that have experienced non-billable periods or are uncertain about their current NOA compliance, the starting point is a review of how the clinical team and billing team communicate when the first skilled visit occurs.
    `.trim(),
  },
  {
    slug: "palliative-care-billing-multi-payer",
    title: "Palliative Care Billing: How the Multi-Payer Complexity Requires Specialized Billing",
    category: "Operations",
    dateISO: "2025-10-15",
    excerpt:
      "Palliative care billing routinely involves Medicare, Medicaid, Medicare Advantage, and commercial payers on the same patient roster. When secondary billing and patient statements are added, generalist billers lose track. The payer complexity of palliative care is manageable with the right team, but it is consistently underestimated by agencies that treat it like any other specialty.",
    date: "October 2025",
    image: "/assets/gallery/careers-3.jpg",
    relatedService: { title: "Palliative Care Billing", href: "/palliative-care-billing" },
    content: `
Palliative care billing sits at a payer intersection that no other post-acute specialty matches. A single patient may carry Medicare as primary, a Medicare Advantage plan as secondary, a commercial supplemental policy, and a co-pay obligation from the patient. Filing all four correctly, in the right order, with the right documentation attached to each claim, is not something a generalist billing team handles well.

## Why Palliative Care Billing Is Categorically Different

Most billing discussions in post-acute care focus on hospice or home health. Both have clear reimbursement frameworks: hospice pays per diem by level of care, home health pays in 30-day periods under PDGM. Palliative care does not have a single federal reimbursement model. Reimbursement depends on which payer is involved, what the patient's coverage includes, and which CPT codes are used to capture the services provided.

A palliative care visit billed to Medicare Part B under the Evaluation and Management code structure is processed differently than the same visit billed to a Medicare Advantage plan, which may require prior authorization, network verification, and plan-specific claim format. Adding a secondary payer introduces a coordination of benefits process. Adding a commercial policy with its own billing rules creates another layer.

The billing team that manages this well is one that understands payer-by-payer rules, not one that learns them by trial and denial.

## The Primary Payer Sequencing Problem

Every palliative care claim starts with a primary payer determination. For patients who are Medicare-eligible but enrolled in a Medicare Advantage plan, the correct primary payer is the Medicare Advantage plan, not traditional Medicare. Filing to traditional Medicare when a Medicare Advantage plan is primary results in a denial that must be corrected and resubmitted, with timely filing implications if the correction takes too long.

For patients with dual eligibility for Medicare and Medicaid, the sequencing is determined by coordination of benefits rules. Medicare is primary. Medicaid is secondary. Filing them out of order, or failing to coordinate the secondary Medicaid claim correctly from the primary remittance, results in claim errors or missed recovery.

For patients with commercial insurance alongside Medicare, the commercial plan may be primary depending on the patient's employment status and the plan's coordination of benefits language. Determining which payer is primary for a commercial-and-Medicare combination requires checking the patient's specific plan language, not assuming Medicare is always primary.

A billing team that identifies the correct primary payer for every patient before the first claim is submitted eliminates the most common source of palliative care billing delays.

## Secondary Billing and Coordination of Benefits

Once the primary claim is adjudicated, secondary billing begins. Secondary billing requires the primary payer's explanation of benefits or remittance advice before the secondary claim is submitted. The secondary claim typically must reference the primary payment amount, the patient liability amount, and any adjustments applied.

The timing of secondary claims is where many agencies lose revenue. Secondary claims have their own timely filing limits, which vary by payer. If the billing team waits too long after primary adjudication to submit the secondary claim, or if the remittance from the primary payer is not being monitored, the secondary filing window can close.

For patients with three payers, the process extends: primary adjudication, secondary claim with primary remittance attached, tertiary claim with both prior remittances. Each step has its own deadline and documentation requirement.

## Patient Statements and the Balance After Insurance

After primary and secondary payers have adjudicated, the remaining patient liability must be calculated accurately and billed correctly. Palliative care patient populations often include elderly patients, seriously ill patients, or patients with limited financial resources. Patient statements that are unclear, inaccurate, or poorly timed create administrative burden, patient relations problems, and uncollected balances.

The patient statement process should:

**Reflect the accurate patient liability.** The balance owed after all payer adjustments, contractual write-offs, and secondary payments must be calculated correctly before the statement is generated. Overstating the balance damages trust and creates disputes. Understating it leaves money uncollected.

**Be sent at the right time.** Statements generated before all payers have processed create confusion. The patient receives a bill and then receives another notification when a secondary payment reduces the balance. Waiting until all payers have adjudicated before generating the patient statement produces a cleaner experience and fewer inbound calls.

**Be followed up on.** A statement sent once and never followed up on is a receivable that ages without action. Patient balance follow-up, including payment reminders and hardship review, is part of the billing cycle.

## Medicare Advantage Plan Variability

Medicare Advantage plans present a particular challenge in palliative care because plan requirements vary significantly by insurer. A Humana plan and a UnitedHealthcare plan covering the same palliative care services may have different prior authorization requirements, different claim form requirements, and different timely filing windows.

Billing a Medicare Advantage plan correctly requires knowing that plan's specific requirements. Generalist billers who have not built up experience with the major Medicare Advantage plans in the markets they serve will encounter a higher denial rate from these plans, and a longer resolution cycle when denials occur.

Payers that require prior authorization for palliative care services will deny claims submitted without authorization, and the appeal process for non-authorized services is more limited than for other denial types. Identifying which Medicare Advantage plans require authorization for the specific CPT codes being billed, and obtaining that authorization before services are provided, is the only way to avoid this class of denial.

## The Case for Dedicated Palliative Care Billing

The payer complexity of palliative care does not resolve itself as an agency grows. It compounds. More patients means more payer combinations, more secondary claims, more Medicare Advantage plans with different requirements, more patient balance follow-up.

Agencies that attempt to bill palliative care through the same workflow as a simpler specialty billing process, or that assign palliative care billing to staff who also handle other lines of care, tend to see specific problems: secondary claims that lag behind primary adjudication, Medicare Advantage denials that age without follow-up, patient balances that are calculated incorrectly, and coordination of benefits errors that create claim rejections.

A billing team that specializes in palliative care billing, and that has built payer-specific knowledge across the primary plans used by palliative care patients in the markets it serves, produces fewer first-submission denials, faster secondary billing, and more accurate patient statements.

ARC's palliative care billing team handles all-payer claims, secondary billing, patient statements, and full appeals management as part of a single integrated billing cycle. The goal is that every dollar earned from palliative care services is collected, regardless of which payer or combination of payers is involved.
    `.trim(),
  },
  {
    slug: "post-acute-credentialing-gaps",
    title: "Credentialing for Post-Acute Agencies: Avoiding the Gaps That Stall Your First Claim",
    category: "Operations",
    dateISO: "2025-09-01",
    excerpt:
      "Credentialing is the permission structure behind every claim. An agency that has not completed credentialing with a payer cannot bill that payer, even if the patient is covered and the services were delivered. The gaps that stall the first claim are almost always preventable with the right credentialing process in place before the agency begins service.",
    date: "September 2025",
    image: "/assets/gallery/careers-4.jpg",
    relatedService: { title: "Contracting and Credentialing", href: "/contracting-and-credentialing" },
    content: `
Credentialing is the administrative process by which a payer verifies an agency's qualifications, licensure, and compliance status before agreeing to pay for services. Without completed credentialing, there is no payer relationship. Without a payer relationship, claims cannot be submitted. Services that have already been delivered sit unbilled until credentialing is resolved.

The timing of credentialing matters because it determines when billing can begin. An agency that starts patient care before credentialing is complete will deliver services without the ability to bill for them. Some payers allow retroactive billing once credentialing is approved. Others do not, meaning services provided during the credentialing gap may never be reimbursable.

## What Credentialing Covers

Credentialing is not a single transaction. It is a layered process that varies by payer type and may include several distinct components:

**Medicare enrollment.** Participation in Medicare as a hospice, home health, or palliative care provider requires enrollment through the CMS Provider Enrollment, Chain, and Ownership System. The enrollment process includes submission of the application, supporting documentation, and payment of any applicable application fees. CMS processes applications on a timeline that can range from weeks to months depending on application volume and completeness.

**Medicaid enrollment.** Each state's Medicaid program has its own enrollment process. An agency serving patients in multiple states must complete enrollment in each state separately. State Medicaid enrollment timelines vary significantly.

**Medicare Advantage plan credentialing.** Medicare Advantage plans maintain their own provider networks. Inclusion in a plan's network requires a separate credentialing process with that plan. An agency that is enrolled with traditional Medicare is not automatically included in any Medicare Advantage plan's network.

**Commercial insurance credentialing.** Commercial payers each maintain their own credentialing requirements and processes. Credentialing with a commercial plan typically includes verification of the agency's state licensure, accreditation, liability insurance, and tax identification information.

**State licensure verification.** Many payers verify state licensure as part of the credentialing process. An agency operating without current licensure in every state where it provides services will encounter credentialing failures.

## The Timeline Problem

Credentialing takes time. Medicare enrollment can take 90 to 180 days for new applicants in some circumstances. Medicare Advantage plans typically require 60 to 120 days to complete the credentialing and network participation process. Commercial plans vary.

Agencies that start the credentialing process after they have begun recruiting patients or have already started providing services are working against their own timeline. Patients are being seen, services are being delivered, and none of it is billable until credentialing is resolved.

The credentialing timeline should be started before the agency begins operations, not after. For an agency planning to accept Medicare and three Medicare Advantage plans, credentialing work should begin the day the agency is licensed, not the day the first patient is referred.

## Common Gaps That Delay First Claims

Most credentialing delays fall into predictable categories:

**Missing or incomplete documentation.** Credentialing applications require specific supporting documents: state licensure, accreditation certificates, liability insurance certificates, ownership and control disclosures, and tax identification documentation. Applications submitted without required documents are returned for completion, which restarts the processing timeline.

**Outdated licensure.** An agency's state license is time-limited. Credentialing processes that check licensure against state databases will flag an expired or near-expiring license. Maintaining current licensure in every state where services are provided is a prerequisite for successful credentialing.

**Payer enrollment that was not initiated for a new plan.** As an agency adds services or expands into new payer types, credentialing with each new payer must be initiated separately. An agency that has been billing Medicare for years and begins accepting Medicare Advantage patients for the first time must complete network participation credentialing with each Medicare Advantage plan separately. Assuming that existing Medicare enrollment covers Medicare Advantage participation is a common and costly error.

**Re-credentialing lapses.** Most payers require periodic re-credentialing to maintain network participation. Re-credentialing timelines vary by payer but are typically every two to three years. An agency that does not track re-credentialing deadlines and initiate the process in advance of the expiration date will find its network participation lapsed. Claims submitted after lapsed re-credentialing are denied.

**Multi-state expansion without corresponding Medicaid enrollment.** An agency that expands into a new state must complete Medicaid enrollment in that state before billing Medicaid for patients in that state. Enrollment that covers one state does not transfer to another.

## Contracting Alongside Credentialing

Credentialing establishes whether a payer will include an agency in its network. Contracting establishes the terms under which the payer will reimburse the agency. Both are necessary before claims can be submitted and paid.

For commercial and Medicare Advantage payers, credentialing and contracting often occur in parallel but are separate processes. An agency that completes credentialing without also completing the contract review and execution may find itself credentialed but lacking an effective contract, which means claims will be paid at a default rate rather than a negotiated rate, or may not be processed at all.

Contract terms for post-acute care services vary by payer and by service type. Negotiating favorable reimbursement rates requires understanding the market rates for the specific services provided, the payer's typical contract language, and the leverage an agency has based on its geography, size, and accreditation status.

## Ongoing Credentialing Management

Credentialing is not a one-time project. It requires ongoing maintenance:

- Tracking and renewing state licenses before they expire
- Initiating re-credentialing with each payer before the deadline
- Updating payer enrollment records when ownership, address, or key personnel change
- Adding credentialing for new payers as the agency's payer mix changes
- Managing credentialing for new locations when an agency expands

An agency that maintains a current credentialing file, tracks all renewal dates, and initiates re-credentialing processes 90 days before each expiration will have continuous, uninterrupted billing capability with every payer.

An agency that treats credentialing as an administrative task to address when problems arise will periodically encounter claim denials, delayed billing starts, and revenue gaps that are entirely preventable.

ARC manages the full contracting and credentialing lifecycle as part of its support services, including initial credentialing for new agencies, expansion credentialing when agencies enter new states or add payer types, re-credentialing tracking and submission, and payer relations support for disputes and escalations.
    `.trim(),
  },
  {
    slug: "authorization-eligibility-denial-prevention",
    title: "Authorization and Eligibility Verification: Preventing Denials Before Claims Are Filed",
    category: "Operations",
    dateISO: "2025-11-15",
    excerpt:
      "Most denials are preventable. Eligibility verification confirms the patient is covered before care begins. Prior authorization confirms the payer has agreed to pay. When either step fails, the agency delivers care without a guarantee of payment. The appeal process for these denials is more limited than for almost any other denial type.",
    date: "November 2025",
    image: "/assets/gallery/careers-2.jpg",
    relatedService: { title: "Authorization and Eligibility", href: "/authorization-and-eligibility" },
    content: `
Authorization and eligibility verification is the billing function that happens before the first claim is ever submitted. When it works correctly, the payer knows the patient is covered, the agency has permission to provide the service, and the claim can be processed without a coverage dispute. When it fails, the first sign of the problem is a denial on a claim for care that has already been delivered.

## Why Eligibility Verification Is Not Optional

A patient who presents for home health, hospice, or palliative care services may be enrolled in a plan that covers those services, or may not. The enrollment status may have changed since the last time the agency verified it. Secondary coverage that was active at admission may have lapsed. A Medicare Advantage plan may have specific network requirements that were not checked at intake.

Eligibility verification is the process that answers these questions before care begins. Done correctly, it confirms the payer, the coverage type, the effective dates, the deductibles and co-pays, and any coverage limitations that affect how and whether the service will be billed and paid.

A verification that misses a change in enrollment, a plan switch, or a coverage limit creates a claim that will be denied on payment. At that point, the service has been delivered. The denial has to be worked, appealed, or written off. The billing team is now resolving a problem that verification was supposed to prevent.

## The Most Common Eligibility Gaps

Eligibility verification failures cluster around several patterns:

**Point-in-time verification that is not re-checked.** A verification completed at admission is accurate as of that date. Patients whose insurance changes during the course of care, such as those aging into Medicare, losing employer coverage, or switching Medicare Advantage plans, will trigger denials if the billing team is not re-verifying eligibility at defined intervals.

**Medicare Advantage enrollment not identified.** Medicare Advantage plans require prior authorization and network participation that traditional Medicare fee-for-service does not. Agencies that verify Medicare eligibility without distinguishing between traditional Medicare and Medicare Advantage will submit claims to the wrong payer, receive denials, and face timely filing problems while the correct payer is identified.

**Medicaid coverage without managed care identification.** Many Medicaid programs are administered through managed care organizations. A patient enrolled in Medicaid may be covered through a specific MCO that has its own billing requirements and authorization process. Billing directly to Medicaid when an MCO is the primary payer results in denials.

**Verification without benefit exhaustion check.** Medicare hospice has a defined benefit period structure. Patients who have used their hospice benefit and elected to continue, or who have revoked and re-elected, have specific billing implications. Eligibility verification must include a benefit period check to identify patients approaching or in an election with prior benefit usage.

## Prior Authorization: The Second Layer

Eligibility verification establishes that a patient is covered. Prior authorization establishes that the specific services the agency intends to provide are approved by the payer before those services begin.

Authorization requirements vary by payer and by line of care. Traditional Medicare does not require prior authorization for hospice or home health services. Medicare Advantage plans frequently do, with requirements that include medical necessity documentation, clinical notes, and plan-specific forms. Commercial insurance and Medicaid managed care plans each have their own authorization requirements.

An agency that begins services without obtaining required authorization, or that provides services beyond an authorized scope, has delivered care that the payer has not agreed to pay for. The claim will be denied, and the appeal process for non-authorized services is more limited than the appeal process for other denial types.

## Managing the Authorization Lifecycle

Initial authorization is not the end of the process. Many authorizations are time-limited. A home health authorization issued for a 60-day episode must be renewed if services continue beyond that period. A palliative care authorization may require re-authorization at each billing cycle.

Re-authorization failures are a common source of claims denials that compound over time. An agency that obtains initial authorization but does not track re-authorization deadlines will have claims denied for services delivered after the authorization expired. Unlike many other denial types, expired authorization denials often cannot be reversed on appeal because the payer's process required the agency to request re-authorization in advance.

The authorization lifecycle requires:

**Tracking every active authorization with its expiration date.** Authorizations that expire without a completed re-authorization request should be flagged in advance, not discovered after a denial.

**Documentation that supports re-authorization.** Payers that issue time-limited authorizations typically require updated clinical documentation showing continued medical necessity. The billing team needs access to current clinical documentation to support the re-authorization request before the deadline.

**A defined protocol for plan-specific requirements.** Each payer has its own authorization process, timeline, and documentation requirements. An authorization team working across multiple payers needs a system that tracks payer-specific requirements rather than treating all authorizations as the same process.

## Eligibility Disputes and Authorization Appeals

When a claim is denied based on eligibility or authorization, the response depends on the denial type.

Eligibility disputes, where the agency believes the patient was eligible but the claim was denied for a coverage reason, typically require documentation of enrollment status, explanation of benefits from the patient's prior insurer if a plan switch is involved, or coordination of benefits clarification.

Authorization denials for services provided without prior authorization are generally harder to appeal. Many plans limit the circumstances under which retrospective authorization will be considered. The stronger position is to have obtained authorization before services began.

Authorization denials for services provided after an authorization expired are similarly limited. Some plans will consider an administrative exception if the re-authorization request was submitted on time but not processed before the authorization expired. Plans that do not allow exceptions require the agency to accept the denial or to seek direct payment from the patient under specific circumstances.

The goal of authorization and eligibility management is not to have a good denial appeal process. It is to prevent the denial in the first place.

## Why Dedicated Authorization Management Improves Collections

Agencies that assign authorization and eligibility management to billers who are also responsible for claims submission are asking those billers to handle two functions with different timelines and different skill requirements. Claims follow-up is reactive. Authorization management is proactive.

A dedicated authorization function, or a team that specializes in payer-specific requirements across lines of care, produces fewer denials, catches re-authorization deadlines before they lapse, and maintains the documentation needed to support both initial authorizations and re-authorizations.

For agencies whose denial rates are driven by authorization and eligibility issues, separating these functions from general billing often produces measurable improvement in first-pass claim acceptance rates within 90 days.

ARC manages the full authorization lifecycle as part of its authorization and eligibility service, including initial verification, prior authorization submission, re-authorization tracking, and appeals management for denials that result from eligibility or authorization issues.
    `.trim(),
  },
];
