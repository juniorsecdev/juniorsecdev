import { cyberDefenseAnalyst } from './courses/cyber-defense-analyst'

export const courses = [cyberDefenseAnalyst]

export const getCourseById = (id) => courses.find(c => c.id === id)

export const getAllLessons = () =>
  courses.flatMap(c =>
    c.subcourses.flatMap(sc =>
      sc.lessons.map(l => ({ ...l, subcourse: sc.title, course: c.title, courseId: c.id }))
    )
  )

export const getConcepts = () => [
  { term: 'CIA Triad', def: 'Confidentiality, Integrity, Availability — the three things security is always trying to protect. Almost every attack maps to breaking one of them.' },
  { term: 'Ransomware', def: 'Malware that encrypts your files and demands payment to get them back. Double extortion means the attacker also steals data first, giving them two forms of leverage.' },
  { term: 'Shadow IT', def: "Software or services employees use without IT knowing. Usually not malicious — just convenient. But IT can't protect what it doesn't know exists." },
  { term: 'UEBA', def: 'User and Entity Behavior Analytics. Learns what normal looks like per user, then flags deviations. Not signature-based — it detects patterns, not known threats.' },
  { term: 'Risk Based Alerting (RBA)', def: 'Combines risk scores from multiple low-signal events into a single alert. Reduces alert fatigue by only surfacing high-confidence detections.' },
  { term: 'MFA', def: 'Multi-Factor Authentication. Requires at least two types of verification — something you know, have, or are. Stops credential-based attacks cold.' },
  { term: 'OT vs IT', def: 'IT handles data and computing. OT controls physical systems like pipelines and power grids. OT attacks can cause real-world physical damage.' },
  { term: 'Insider Threat', def: 'Risk from someone who already has legitimate access. Can be Malicious (intentional), Negligent (careless), or Compromised (their credentials were stolen).' },
  { term: 'Alert Fatigue', def: 'When analysts get so many alerts they start ignoring them — and real threats get missed. RBA and tuning are the main ways to fight it.' },
  { term: 'Double Extortion', def: 'Ransomware tactic: steal data first, then encrypt. Two threats: you cannot access your systems AND your data might be leaked publicly.' },
  { term: 'Least Privilege', def: 'Give every person or system the minimum access they need — nothing more. Limits how much damage a compromised account can do.' },
  { term: 'Phishing', def: 'Deceptive messages designed to trick someone into handing over credentials or clicking something malicious. The most common initial access method.' },
  { term: 'PII', def: 'Personally Identifiable Information — anything that identifies who you are. Name, address, SSN, email. Even combinations of smaller data points can count.' },
  { term: 'GDPR', def: "EU regulation that follows EU citizens' data anywhere in the world. Geography of the server doesn't matter — if the data belongs to an EU citizen, GDPR applies." },
  { term: 'HIPAA', def: 'US law protecting health and medical information. Applies to healthcare organizations and anyone they share data with.' },
  { term: 'PCI-DSS', def: 'Governs payment card data — card numbers, PINs, CVVs. Applies to any organization that processes card payments.' },
  { term: 'Risk Mitigation', def: 'Reducing a risk — making it less likely or less damaging. The risk stays yours, you just made it smaller. A VPN mitigates, it does not transfer.' },
  { term: 'Risk Transfer', def: 'Moving financial or legal responsibility for a risk to someone else. Insurance is the classic example — if something goes wrong, they pay.' },
  { term: 'Vulnerability', def: 'A weakness that could be exploited — unpatched software, weak passwords, misconfigured access. No vulnerability = no risk.' },
  { term: 'Threat', def: 'Something that could exploit a vulnerability — an attacker, malware, even a natural disaster. No threat = no risk.' },
  { term: 'NIST CSF', def: 'NIST Cybersecurity Framework. Organizes security goals into Functions and Categories. The go-to big-picture framework for building a security program.' },
  { term: 'OWASP Top Ten', def: 'A regularly updated list of the 10 most dangerous web application vulnerabilities. Web security = OWASP.' },
  { term: 'CIS 18', def: '18 specific, concrete actions to stop the most common attacks. Used to be 20 controls, condensed in 2021.' },
  { term: 'SOC', def: 'Security Operations Center — the team responsible for monitoring, detecting, investigating, and responding to threats.' },
  { term: 'SIEM', def: 'Security Information and Event Management. Aggregates and analyzes log data to detect threats. Splunk is one of the most widely used SIEMs.' },
  { term: 'MITRE ATT&CK', def: 'A knowledge base of real-world attacker tactics and techniques. SOC teams use it to understand and classify attacks.' },
  { term: 'SPL', def: 'Search Processing Language — the query language used in Splunk to search, filter, and analyze log and security data.' },
]

export const getCaseStudies = () => [
  {
    id: 'colonial-pipeline',
    date: 'May 2021',
    title: 'Colonial Pipeline — DarkSide Ransomware Attack',
    tags: [{ label: 'Ransomware', color: 'red' }, { label: 'Critical Infrastructure', color: 'blue' }],
    summary: 'One VPN password with no MFA gave DarkSide access to Colonial Pipeline\'s network. They stole 100GB of data and deployed ransomware, forcing a 6-day voluntary shutdown of the pipeline that supplies 45% of East Coast fuel. The hackers never touched the pipeline controls — Colonial shut it down themselves because they could not confirm how far the breach went.',
    attackChain: [
      'Attacker finds a leaked VPN password from a prior, unrelated data breach',
      'Account has no MFA — one credential is all it takes',
      '~100GB of data exfiltrated before ransomware is deployed',
      'IT systems encrypted, business operations halted',
      'Colonial cannot confirm OT systems are safe, shuts the pipeline down voluntarily',
      '$4.4M Bitcoin ransom paid; DOJ later recovers ~$2.3M via blockchain tracing',
    ],
    impact: '6-day pipeline shutdown caused fuel shortages across the East Coast, gas prices spiked nationally, Biden declared a regional emergency.',
    rootCause: 'No MFA on a VPN account using a credential from a previous, unrelated breach.',
    defenseLessons: [
      'MFA on all remote access — no exceptions. This entire event traces back to one missing control.',
      'Monitor for credential stuffing and anomalous VPN logins',
      'Know your IT/OT boundaries before an incident forces the question',
      'Have incident response playbooks that cover unknown-scope breaches — not just confirmed ones',
    ],
  },
]
