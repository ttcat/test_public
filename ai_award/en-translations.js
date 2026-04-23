// English translations for AI Teammate Program (DTL AI Award)
// Each entry: { sel, text? | html? }  — applied to every matching element
window.DTL_EN = [
  // ============ NAV ============
  { sel: '.nav-links a[href="#levels"]', text: 'Levels' },
  { sel: '.nav-links a[href="#culture"]', text: 'Culture' },
  { sel: '.nav-links a[href="#policy"]', text: 'Policy' },
  { sel: '.nav-links a[href="#services"]', text: 'Tools' },

  // ============ HERO ============
  { sel: '.hero-eyebrow', html: '<span class="hero-eyebrow-dot"></span>DTL AI Teammate Program · Now live' },
  { sel: '.hero-title', html: 'Play with AI.<br><span class="gradient">Make fun stuff</span>.' },
  { sel: '.hero-sub', html: "Your idea, our budget. Start today.<br>" },
  { sel: '.hero-cta-row .btn-primary', html: 'Start <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>' },
  { sel: '.hero-cta-row .btn-ghost', text: 'See Level 1 first' },

  // ============ TTCAT QUOTE ============
  { sel: '.quote-text', html:
    '<p>AI is reshaping most work on this planet — ours included.</p>' +
    '<p>Right now, the only way to turn AI into a tool that feels natural in your hands is to have the resources — and the freedom — to actually play with it. Work, research, side projects, games, or just fixing something annoying in your daily life. We pay the bill.</p>' +
    "<p>Supporting every DTL teammate to grow and level up has always mattered to me. This is a defining moment — but no FOMO. The org has your back: budget, places to share, and a chance for us to learn together.</p>"
  },

  // ============ PRINCIPLES ============
  { sel: '#principles .section-title', html: 'One spirit,<br>four angles.' },
  { sel: '#principles .section-sub', text: 'Simple as that — make it work for you first, share it, tell us when it flops, great work gets more rewards.' },
  { sel: '#principles .principle:nth-child(1) .principle-title', text: 'Make it work for you first' },
  { sel: '#principles .principle:nth-child(1) .principle-body', text: "We fund the exploring. We reward the sharing and shipping." },
  { sel: '#principles .principle:nth-child(2) .principle-title', text: 'Share it' },
  { sel: '#principles .principle:nth-child(2) .principle-body', text: 'A good trick benefits the whole team — and earns bigger rewards.' },
  { sel: '#principles .principle:nth-child(3) .principle-title', text: "Didn't work? Tell us." },
  { sel: '#principles .principle:nth-child(3) .principle-body', html: 'Hitting walls is a contribution too — sharing what you learned from it is the <em>best</em> kind.' },
  { sel: '#principles .principle:nth-child(4) .principle-title', text: 'Awards' },
  { sel: '#principles .principle:nth-child(4) .principle-body', text: 'Real value gets seen — and rewarded.' },

  // ============ LEVELS OVERVIEW ============
  { sel: '#levels .section-title', html: 'Four stages.<br>Start wherever you want.' },
  { sel: '#levels .section-sub', text: "No need to go in order. If you're already fluent with AI tools, jump straight to L2 or L3." },
  { sel: '.level-card.lv1 .lv-name', text: 'Explorer' },
  { sel: '.level-card.lv1 .lv-purpose', text: 'Just start using AI — for anything.' },
  { sel: '.level-card.lv1 .value', text: 'Full tool reimbursement' },
  { sel: '.level-card.lv2 .lv-name', text: 'Contributor' },
  { sel: '.level-card.lv2 .lv-purpose', text: 'Turn your experience into an asset the team can use.' },
  { sel: '.level-card.lv3 .lv-name', text: 'Builder' },
  { sel: '.level-card.lv3 .lv-purpose', text: 'Bake AI into your workflow. Ship measurable results.' },
  { sel: '.level-card.lv4 .lv-name', text: 'Pioneer' },
  { sel: '.level-card.lv4 .lv-tag', text: 'LV 04 · PIONEER' },
  { sel: '.level-card.lv4 .lv-purpose', text: 'Change how the organization works.' },
  { sel: '.level-card .lv-reward-line .label', text: 'REWARD' },

  // ============ L1 DETAIL ============
  { sel: '#lv1 .ld-title', text: 'Explorer' },
  { sel: '#lv1 .ld-reward', text: 'Full tool reimbursement' },
  { sel: '#lv1 .ld-intro', text: "Want to try an AI tool? Tell us. We'll pay for it — as long as it gets you started and you actually use it." },
  { sel: '#lv1 .freedom-label', text: 'The point' },
  { sel: '#lv1 .freedom-title', text: 'Use it for whatever you want.' },
  { sel: '#lv1 .freedom-body', text: "Up to three months of AI exploration — you use, we pay. Doesn't have to be work. Side projects, animations, novels, games, language learning, doing your taxes, planning trips, or sampling a bunch of tools at once? All good. We pay the bill. We believe the best way to learn AI is to actually play with it and have fun doing it." },
  { sel: '#lv1 .freedom-tags .freedom-tag:nth-child(1)', text: 'games' },
  { sel: '#lv1 .freedom-tags .freedom-tag:nth-child(2)', text: 'videos' },
  { sel: '#lv1 .freedom-tags .freedom-tag:nth-child(3)', text: 'novels' },
  { sel: '#lv1 .freedom-tags .freedom-tag:nth-child(4)', text: 'taxes' },
  { sel: '#lv1 .freedom-tags .freedom-tag:nth-child(5)', text: 'languages' },
  { sel: '#lv1 .freedom-tags .freedom-tag:nth-child(6)', text: 'illustrations' },
  { sel: '#lv1 .freedom-tags .freedom-tag:nth-child(7)', text: 'schedules' },
  { sel: '#lv1 .freedom-tags .freedom-tag:nth-child(8)', text: 'songs' },
  { sel: '#lv1 .freedom-tags .freedom-tag:nth-child(9)', text: 'you name it' },
  { sel: '#lv1 .ld-field:nth-of-type(1) .ld-field-label', text: 'How to apply' },
  { sel: '#lv1 .ld-field:nth-of-type(1) .ld-field-body', html: '1–3 sentences — which tool, what you want to do, how long. <strong>Does not have to be work-related.</strong>' },
  { sel: '#lv1 .ld-field:nth-of-type(2) .ld-field-label', text: 'What we cover' },
  { sel: '#lv1 .ld-field:nth-of-type(2) .ld-field-body', html: 'Tool subscriptions, initially covered for <strong>1–3 months</strong> depending on your needs.' },
  { sel: '#lv1 .ld-field:nth-of-type(3) .ld-field-label', text: "Your part — share at our online meetings" },
  { sel: '#lv1 .ld-field:nth-of-type(3) .ld-field-body', html: 'Share at our online meetings, both team and org-wide — what you did, whether the tool is any good, and how to get the most out of it:<ul><li>what you used it for</li><li>what works, what doesn\'t</li><li>whether it\'s worth renewing</li><li>whether you\'d recommend it to colleagues</li></ul><div class="ld-note">Share before you apply for the next round — that way the budget actually creates value.</div>' },

  // ============ L2 DETAIL ============
  { sel: '#lv2 .ld-title', text: 'Contributor' },
  { sel: '#lv2 .ld-intro', html: "<strong>L1 is you playing around.<br>L2 is turning what you figured out into something other people can reuse.</strong>" },
  { sel: '#lv2 .ld-field:nth-of-type(1) .ld-field-label', text: 'Any source counts' },
  { sel: '#lv2 .ld-field:nth-of-type(1) .ld-field-body', html: 'Prompt tricks or workflows you picked up while making games, editing video, or doing your taxes — as long as what you write up <strong>helps other DTL folks</strong>, it counts.<p style="color: var(--text-3); font-size: 13px; margin-top: 12px;">Example: you learned how to get a model to reliably output JSON while building a game → you write that up for researchers → totally counts.</p>' },
  { sel: '#lv2 .ld-field:nth-of-type(2) .ld-field-label', text: 'Format · one plus one' },
  { sel: '#lv2 .ld-field:nth-of-type(2) .ld-field-body', html: 'Org-wide online session plus:<br><br>tutorial doc · webpage or deck · video demo · case study article' },
  { sel: '#lv2 .ld-field:nth-of-type(3) .ld-field-label', text: 'Must include' },
  { sel: '#lv2 .ld-field:nth-of-type(3) .ld-field-body', html: '<ol><li>the problem you were solving</li><li>tools and methods you used</li><li>actual results</li><li>limitations and caveats</li><li>concrete advice for teammates</li></ol>' },
  { sel: '#lv2 .ld-field:nth-of-type(4) .ld-field-label', text: 'Scoring · out of 10' },
  { sel: '#lv2 .rubric thead th:nth-child(1)', text: 'Criterion' },
  { sel: '#lv2 .rubric thead th:nth-child(2)', text: 'Pts' },
  { sel: '#lv2 .rubric thead th:nth-child(3)', text: 'What we look for' },
  { sel: '#lv2 .rubric tbody tr:nth-child(1) td:nth-child(1)', text: 'Usefulness' },
  { sel: '#lv2 .rubric tbody tr:nth-child(1) td:nth-child(3)', text: '3 = teammates can use it as-is' },
  { sel: '#lv2 .rubric tbody tr:nth-child(2) td:nth-child(1)', text: 'Reproducible' },
  { sel: '#lv2 .rubric tbody tr:nth-child(2) td:nth-child(3)', text: '3 = full steps / prompts / templates' },
  { sel: '#lv2 .rubric tbody tr:nth-child(3) td:nth-child(1)', text: 'Clarity' },
  { sel: '#lv2 .rubric tbody tr:nth-child(3) td:nth-child(3)', text: '2 = clear structure, concrete examples' },
  { sel: '#lv2 .rubric tbody tr:nth-child(4) td:nth-child(1)', text: 'Honesty' },
  { sel: '#lv2 .rubric tbody tr:nth-child(4) td:nth-child(3)', text: '2 = pitfalls, comparisons, reflections' },
  { sel: '#lv2 .ld-field:nth-of-type(5) .ld-field-label', text: 'Reward' },
  { sel: '#lv2 .reward-pill:nth-of-type(1) .rp-label', text: 'Qualifying · 7+' },
  { sel: '#lv2 .reward-pill:nth-of-type(2) .rp-label', text: 'Excellent · 9+' },

  // ============ L3 DETAIL ============
  { sel: '#lv3 .ld-title', text: 'Builder' },
  { sel: '#lv3 .ld-intro', html: 'Bake AI into your actual workflow and produce <strong>verifiable results</strong>. Data, duration, real impact.' },
  { sel: '#lv3 .ld-field:nth-of-type(1) .ld-field-label', text: 'Qualifying outcomes' },
  { sel: '#lv3 .ld-field:nth-of-type(1) .ld-field-body', text: 'Time saved · process automation · quality or speed gains · internal tools · lower outsourcing cost · scaled-up research or advocacy · new ways of working' },
  { sel: '#lv3 .ld-field:nth-of-type(2) .ld-field-label', text: 'What to submit' },
  { sel: '#lv3 .ld-field:nth-of-type(2) .ld-field-body', html: '<ol><li>problem context</li><li>solution and implementation</li><li><strong>evidence of actual results</strong> (data, screenshots, feedback, before / after)</li><li>whether it can scale</li></ol>' },
  { sel: '#lv3 .ld-field:nth-of-type(3) .ld-field-label', text: 'Team applications' },
  { sel: '#lv3 .ld-field:nth-of-type(3) .ld-field-body', text: 'Teams of 2–5 can apply together and decide their own split.' },
  { sel: '#lv3 .ld-field:nth-of-type(4) .ld-field-label', text: 'Long-term validation · cross-team tier and above' },
  { sel: '#lv3 .ld-field:nth-of-type(4) .ld-field-body', html: "On approval we pay <strong>70%</strong>; after 3 months of continued use, we pay the remaining <strong>30%</strong>." },
  { sel: '#lv3 .tiers-label', text: 'Reward tiers · scaled by reach and scope of problem solved' },
  { sel: '#lv3 .tier.t1 .tier-name', text: 'Personal' },
  { sel: '#lv3 .tier.t1 .tier-criteria', text: 'Improvement to your own workflow, with concrete data.' },
  { sel: '#lv3 .tier.t2 .tier-name', text: 'Team' },
  { sel: '#lv3 .tier.t2 .tier-criteria', text: 'At least 3 teammates on the same team use it continuously for ≥ 1 month.' },
  { sel: '#lv3 .tier.t3 .tier-name', text: 'Cross-team' },
  { sel: '#lv3 .tier.t3 .tier-criteria', text: 'At least 2 teams use it for ≥ 1 month.' },
  { sel: '#lv3 .tier.t4 .tier-name', text: 'Org-wide' },
  { sel: '#lv3 .tier.t4 .tier-criteria', text: 'Incorporated into SOP or adopted by most of the org.' },

  // ============ L4 DETAIL ============
  { sel: '#lv4 .ld-title', text: 'Pioneer of the Year' },
  { sel: '#lv4 .ld-number', text: 'LV 04 · PIONEER' },
  { sel: '#lv4 .ld-intro', html: 'For the one person who <strong>truly changed how the organization works</strong>. Once a year, evaluated at year-end.' },
  { sel: '#lv4 .ld-field:nth-of-type(1) .ld-field-label', text: 'Criteria · most of the following' },
  { sel: '#lv4 .ld-field:nth-of-type(1) .ld-field-body', html: '<ul><li>Built an AI system adopted across teams or the whole org</li><li>Measurably raised overall efficiency</li><li>Pioneered new research methods, advocacy formats, or business models</li><li>Built sustainable long-term capability</li></ul>' },
  { sel: '#lv4 .ld-field:nth-of-type(2) .ld-field-label', text: 'Reward' },
  { sel: '#lv4 .ld-field:nth-of-type(2) .ld-field-body', html: '<ul><li>Annual special bonus <strong>from NT$ 200,000</strong></li><li>Shoutout at the year-end all hands</li><li>Priority in promotion / development decisions</li><li>Career conversation</li></ul>' },

  // ============ REVIEW ============
  { sel: '#judges .section-title', text: "Who reviews?" },
  { sel: '#judges .section-sub', text: 'Two levels: your manager, then the CEO.' },
  { sel: '#judges .review-cell:nth-of-type(1) .review-who', text: 'Manager reviews' },
  { sel: '#judges .review-cell:nth-of-type(2) .review-who', text: 'Manager reviews' },
  { sel: '#judges .review-cell:nth-of-type(3) .review-who', html: 'Manager first pass<br>CEO final sign-off' },
  { sel: '#judges .review-cell:nth-of-type(4) .review-who', html: 'CEO + manager<br>decide together' },

  // ============ CULTURE ============
  { sel: '#culture .section-title', html: "We reward playing. We reward results.<br>No need to put on a show." },
  { sel: '#culture .culture-col.yes .culture-col-label', text: 'Yes to these' },
  { sel: '#culture .culture-col.no .culture-col-label', text: "No thanks" },
  { sel: '#culture .culture-col.yes .culture-list li:nth-child(1)', html: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>Reinventing a better wheel is totally fine' },
  { sel: '#culture .culture-col.yes .culture-list li:nth-child(2)', html: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>Self-directed learning, and sharing with others' },
  { sel: '#culture .culture-col.yes .culture-list li:nth-child(3)', html: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>Got an idea? Just build it' },
  { sel: '#culture .culture-col.yes .culture-list li:nth-child(4)', html: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>Small things are good things too' },
  { sel: '#culture .culture-col.yes .culture-list li:nth-child(5)', html: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>We want to hear about failures too' },
  { sel: '#culture .culture-col.no .culture-list li:nth-child(1)', html: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/></svg>Waiting for someone to teach you' },
  { sel: '#culture .culture-col.no .culture-list li:nth-child(2)', html: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/></svg>Learning AI just because the boss said so' },
  { sel: '#culture .culture-col.no .culture-list li:nth-child(3)', html: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/></svg>Doing it just to win the award' },
  { sel: '#culture .culture-col.no .culture-list li:nth-child(4)', html: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/></svg>Pure AI slop you never actually used' },
  { sel: '#culture .culture-col.no .culture-list li:nth-child(5)', html: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/></svg>Results that can\'t be verified' },

  // ============ CADENCE ============
  { sel: '#cadence .section-title', text: 'How the program runs. Live from today.' },
  { sel: '#cadence .cadence-cell:nth-of-type(1) .cadence-big', text: 'Monthly' },
  { sel: '#cadence .cadence-cell:nth-of-type(1) .cadence-list', html: 'Applications open · share sessions<br>Published case studies' },
  { sel: '#cadence .cadence-cell:nth-of-type(2) .cadence-big', text: 'Quarterly' },
  { sel: '#cadence .cadence-cell:nth-of-type(2) .cadence-list', html: 'Review outcomes, revise the award program<br>MVP recognition' },
  { sel: '#cadence .cadence-cell:nth-of-type(3) .cadence-big', text: 'Annually' },
  { sel: '#cadence .cadence-cell:nth-of-type(3) .cadence-list', html: 'Pioneer awards ceremony<br>Year-end retrospective' },

  // ============ POLICY ============
  { sel: '#policy .section-title', html: 'Before you start,<br>read this.' },
  { sel: '#policy .section-sub', text: 'Our internal policy for using generative AI — have fun, play responsibly.' },
  { sel: '.policy-pillar.p-security .policy-pillar-title', text: 'Security red line' },
  { sel: '.policy-pillar.p-security .policy-pillar-body', text: 'Never input sensitive or confidential information. AI services based in or operated from China are flat-out forbidden.' },
  { sel: '.policy-pillar.p-accountability .policy-pillar-title', text: 'You\'re accountable, not the model' },
  { sel: '.policy-pillar.p-accountability .policy-pillar-body', text: "Whatever AI puts out, the person using it owns it. Treat AI like an unreliable junior assistant — output is a draft, not a finished product." },
  { sel: '.policy-pillar.p-transparency .policy-pillar-title', text: 'Disclose how you used it' },
  { sel: '.policy-pillar.p-transparency .policy-pillar-body', text: 'When submitting internally, say specifically how AI was used — drafting? translation? analysis? It helps the reviewer calibrate.' },
  { sel: '.policy-expand summary span', text: 'Expand the full policy (7 chapters)' },
  { sel: '#policy-full-body', html:
    '<h3>Overview</h3>' +
    "<p>Doublethink Lab encourages the use of generative AI (GAI) tools to raise the quality and efficiency of our work. But GAI also creates real risks — to accuracy, information security, our partners' safety, and the organization's credibility. This policy sets the rules every team member must follow when using GAI for work, and will evolve alongside the tools, the risks, and best practice.</p>" +
    '<h3>Scope</h3>' +
    '<p>This policy applies to everyone at Doublethink Lab — full-time, part-time, contractors, interns, volunteers. It covers any work-related GAI use, whether on org-issued or personal devices.</p>' +
    '<hr>' +
    '<h3>1 · Fairness and bias</h3>' +
    '<p><strong>1.1</strong> Before using GAI for a task, assess whether model bias could produce unfair outcomes. If so, take concrete steps to mitigate it — otherwise the task is not a fit for GAI.</p>' +
    '<h4>Why it matters</h4>' +
    '<p>GAI models are trained on human-produced data and inherit its biases — across gender, ethnicity, nationality, age, and other protected attributes. Screening or scoring candidates with GAI can produce systematically unfair outcomes; using GAI to assess the credibility of sources or individuals can embed bias and compromise the integrity of research.</p>' +
    '<h3>2 · Personal accountability</h3>' +
    "<p><strong>2.1</strong> Users are personally accountable for any GAI output they adopt, publish, or forward — its accuracy, factuality, tone, and appropriateness.</p>" +
    '<h4>Why it matters</h4>' +
    '<p>Do not outsource judgment to GAI. If you draft an email to an external partner with GAI and it contains a factual error, that is on you. If you co-write a report with GAI and it hallucinates a fact, fabricates a citation, or invents a quote — you are the one who has to catch it. Before using any GAI output, <strong>read it, verify it, edit it.</strong> Treat GAI output as a draft from an unreliable junior assistant, not a finished product.</p>' +
    '<h3>3 · Information security and privacy</h3>' +
    '<p><strong>3.1 Never input sensitive or confidential information into a GAI model.</strong></p>' +
    "<p>Typical sensitive information includes: names or personal details of partners working with us against CCP malign influence, who may face transnational repression; and sensitive internal org data (such as HR matters). <strong>Treat everything you put into a model as golden intelligence in the CCP's eyes.</strong> If you are unsure whether something counts as sensitive, ask your manager.</p>" +
    '<h3>4 · Transparent disclosure</h3>' +
    '<p><strong>4.1</strong> Internally, disclose GAI use clearly and specifically.</p>' +
    '<ul>' +
    '<li>When submitting a report, tell the research lead exactly how GAI was used — e.g., "Section 3 was drafted with GAI, then verified and edited by me," or "Original Chinese source material was translated with GAI."</li>' +
    '<li>Do not pass off undisclosed GAI output as your own original work. This covers text, code, analysis, summaries, translations, and images.</li>' +
    '<li>Disclosure helps reviewers calibrate — for example, checking more carefully for hallucinations, fabricated citations, or inconsistent voice.</li>' +
    '</ul>' +
    '<p><strong>4.2</strong> Follow the research lead or comms team\'s guidance on whether and how to disclose GAI use externally.</p>' +
    '<h3>5 · Approved vendors</h3>' +
    '<p>The question is not whether the model is open-source — it is <strong>where your data goes when you use the service</strong>. Cloud services send prompts to the vendor\'s servers; their jurisdiction and data-handling practices drive the risk.</p>' +
    '<h4>5.1 Forbidden</h4>' +
    "<p>No work use of cloud GAI services headquartered in China, operated from China, or with significant ties to China — including services that route data through Chinese jurisdictions (such as Hong Kong). Data sent to these services falls under Chinese jurisdiction and can be compelled into the hands of Chinese state authorities.</p>" +
    '<p><strong>Examples:</strong> DeepSeek, Kimi / Moonshot AI, Baidu Wenxin, Alibaba Qwen cloud (Tongyi Qianwen), ByteDance Doubao, Tencent Hunyuan, Zhipu ChatGLM cloud service.</p>' +
    '<p>Running open-weights models entirely on DTL-controlled hardware with no network traffic to China-linked services is not automatically forbidden by this clause, but must be pre-approved by the policy owner before handling work data.</p>' +
    '<h4>5.2 Approved</h4>' +
    '<p>Approved vendors all hold recognized international security and compliance certifications (e.g. ISO/IEC 27001, SOC 2 Type II, HIPAA, FedRAMP):</p>' +
    '<ul>' +
    '<li><strong>Anthropic</strong> — Claude Enterprise / Team / API</li>' +
    '<li><strong>OpenAI</strong> — ChatGPT Team / Enterprise / API</li>' +
    '<li><strong>Google</strong> — Gemini (Workspace plans) / Vertex AI</li>' +
    '<li><strong>Microsoft</strong> — Copilot for M365 / Azure OpenAI</li>' +
    '</ul>' +
    '<p>For other vendors, run it by your manager and the policy owner first.</p>' +
    '<h3>6 · Intellectual property and content</h3>' +
    '<p><strong>6.1</strong> Do not input complete, third-party copyrighted content into public GAI services unless it is already in the public domain.</p>' +
    '<p><strong>6.2</strong> Before publishing GAI-generated images, video, or music, confirm no third-party rights are infringed. For external use, disclose that it is "AI-generated."</p>' +
    '<h3>7 · Violations</h3>' +
    "<p>Violations may result in clawback of program awards, internal disciplinary action, or — if there is a serious security incident — formal HR proceedings. If you realize you or someone else has violated the policy unintentionally, <strong>report it to the policy owner as soon as possible</strong>. Dealing with it early always carries less risk than covering it up.</p>" +
    '<hr>' +
    '<p style="color: var(--text-3); font-size: 12px;">This policy is a living document and will evolve with tools, risks, and best practice. Questions? Contact the policy owner or <strong>TTCAT</strong>.</p>'
  },

  // ============ SERVICES ============
  { sel: '#services .section-title', html: 'More than ChatGPT,<br>Claude, Gemini.' },
  { sel: '#services .services-intro', text: 'AI is moving fast — writing, images, video, music, code, agents, research all have their own tools. Here are 24 worth trying. Pick one and start playing.' },
  { sel: '#services .services-note', text: "This is just a starting point. If you've tried something else and liked it, propose it — we don't care about the brand, the org pays." },
  { sel: '.service-cell:has(a[aria-label="ChatGPT"]) .service-desc', text: 'All-in-one entry for chat, writing, analysis, and code.' },
  { sel: '.service-cell:has(a[aria-label="Claude"]) .service-desc', text: 'Strong at long-form reading, reasoning, and coding.' },
  { sel: '.service-cell:has(a[aria-label="Gemini"]) .service-desc', text: 'Integrated with Google, search, and multimodal input.' },
  { sel: '.service-cell:has(a[aria-label="Midjourney"]) .service-desc', text: 'Art-grade image generation with the widest stylistic range.' },
  { sel: '.service-cell:has(a[aria-label="Nano Banana"]) .service-desc', text: "Google's ultra-fast editor — edits, comps, one click." },
  { sel: '.service-cell:has(a[aria-label="Sora"]) .service-desc', text: "OpenAI's video model — long takes, high realism." },
  { sel: '.service-cell:has(a[aria-label="Veo"]) .service-desc', text: "Google's high-resolution video generation." },
  { sel: '.service-cell:has(a[aria-label="Runway"]) .service-desc', text: 'Video editing, effects, rotoscope, motion graphics.' },
  { sel: '.service-cell:has(a[aria-label="Higgsfield"]) .service-desc', text: 'Cinematic camera moves, creator-first video generation.' },
  { sel: '.service-cell:has(a[aria-label="Suno"]) .service-desc', text: 'Type a line, get a full song with vocals.' },
  { sel: '.service-cell:has(a[aria-label="Udio"]) .service-desc', text: 'Hi-fi music generation with delicate style mixing.' },
  { sel: '.service-cell:has(a[aria-label="ElevenLabs"]) .service-desc', text: 'Realistic voiceover, voice cloning, multilingual.' },
  { sel: '.service-cell:has(a[aria-label="NotebookLM"]) .service-desc', text: 'Turn any source material into a podcast. Reading superpower.' },
  { sel: '.service-cell:has(a[aria-label="Cursor"]) .service-desc', text: 'AI-native editor that doubles your coding speed.' },
  { sel: '.service-cell:has(a[aria-label="Claude Code"]) .service-desc', text: 'Agentic coding in your terminal. Refactor whole repos.' },
  { sel: '.service-cell:has(a[aria-label="Kiro"]) .service-desc', text: "AWS's spec-driven AI IDE — structured, team-oriented coding." },
  { sel: '.service-cell:has(a[aria-label="Replit"]) .service-desc', text: 'Cloud IDE + AI Agent — project setup to deploy, all in one place.' },
  { sel: '.service-cell:has(a[aria-label="Lovable"]) .service-desc', text: 'One sentence → a full website or app.' },
  { sel: '.service-cell:has(a[aria-label="Bolt"]) .service-desc', text: 'Build a full-stack app in your browser, deploy in one click.' },
  { sel: '.service-cell:has(a[aria-label="Figma Make"]) .service-desc', text: 'Figma\u2019s built-in AI — designs generate real UI.' },
  { sel: '.service-cell:has(a[aria-label="v0"]) .service-desc', text: "Vercel's prompt-to-React UI generator. Designers' favorite." },
  { sel: '.service-cell:has(a[aria-label="Stitch"]) .service-desc', text: "Google's AI UI designer — prompts or sketches become mockups." },
  { sel: '.service-cell:has(a[aria-label="Perplexity"]) .service-desc', text: 'AI search with citations. First stop for research and lookups.' },
  { sel: '.service-cell:has(a[aria-label="Claude Cowork"]) .service-desc', text: "Anthropic's desktop agent — operates your browser, organizes files, runs workflows." },

  // ============ CLOSING ============
  { sel: '.closing-headline', html: 'Play.<br><span class="gradient">That\'s how it starts.</span>' },
  { sel: '.closing-sub', html: "Start now. Perfect later. It's genuinely fun." },
];
