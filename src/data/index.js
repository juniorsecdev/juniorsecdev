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
  { term: 'Ransomware', def: "Malware that encrypts victim files and demands a ransom for the decryption key. Double extortion adds data theft before encryption." },
  { term: 'Shadow IT', def: "Unauthorized software or services used within an org without IT's knowledge. Creates security blind spots IT can't defend." },
  { term: 'UEBA', def: 'User and Entity Behavior Analytics. Establishes normal behavior baselines and alerts on deviations — key for detecting insider threats.' },
  { term: 'Risk Based Alerting', def: 'Combines risk scores from multiple low-signal anomalies into a single alert. Reduces alert fatigue and catches low-and-slow attacks.' },
  { term: 'MFA', def: 'Multi-Factor Authentication. Requires at least two of: something you know, have, or are. Stops credential-based attacks cold.' },
  { term: 'OT vs IT', def: 'IT handles data and computing. OT controls physical systems (pipelines, power grids). OT attacks can cause real-world physical harm.' },
  { term: 'Insider Threat', def: 'Risk from current or former employees. Types: Malicious (intentional), Negligent (careless), Compromised (stolen credentials).' },
  { term: 'Alert Fatigue', def: 'When SOC analysts are overwhelmed by high alert volumes, real threats get missed. RBA and tuning are the antidotes.' },
  { term: 'Double Extortion', def: "Ransomware tactic: steal data first, then encrypt. Victim faces two threats: can't access data AND it may be leaked publicly." },
  { term: 'Phishing', def: 'Deceptive communications (email, SMS) designed to steal credentials or deliver malware by impersonating a trusted entity.' },
  { term: 'Initial Access Vector', def: 'The method an attacker uses to first gain entry. Common examples: phishing, stolen credentials, unpatched vulnerabilities.' },
  { term: 'Credential Stuffing', def: 'Automated attack using leaked username/password combos from one breach to attempt access across many other services.' },
  { term: 'SOC', def: 'Security Operations Center. The team responsible for monitoring, detecting, investigating, and responding to cybersecurity threats.' },
  { term: 'SIEM', def: 'Security Information and Event Management. Aggregates and analyzes log data across an organization to detect threats. Splunk is a leading SIEM.' },
  { term: 'MITRE ATT&CK', def: 'A globally-accessible knowledge base of adversary tactics and techniques based on real-world observations. Used by SOC teams to classify and understand attacks.' },
  { term: 'SPL', def: 'Search Processing Language. The query language used in Splunk to search, filter, and analyze log and security data.' },
]

export const getCaseStudies = () => [
  {
    id: 'colonial-pipeline',
    date: 'May 2021',
    title: 'Colonial Pipeline — DarkSide Ransomware Attack',
    tags: [{ label: 'Ransomware', color: 'red' }, { label: 'Critical Infrastructure', color: 'blue' }],
    summary: 'A single VPN credential with no MFA gave DarkSide access to Colonial Pipeline\'s network. The group stole 100GB of data and deployed ransomware, forcing a 6-day shutdown of the pipeline supplying 45% of East Coast fuel.',
    attackChain: [
      'Attacker obtains leaked VPN password from a prior, unrelated data breach',
      'Account has no MFA — single credential grants full access',
      'DarkSide exfiltrates ~100GB of sensitive data',
      'Ransomware deployed, encrypting IT systems',
      'Colonial proactively shuts down OT pipeline operations out of caution',
      '$4.4M Bitcoin ransom paid; DOJ later recovers ~$2.3M via blockchain tracing',
    ],
    impact: '6-day pipeline shutdown, fuel shortages across the East Coast, gas prices spike nationally, Biden declares regional emergency.',
    rootCause: 'No MFA on a VPN account using a credential compromised in a previous, unrelated breach.',
    defenseLessons: [
      'MFA on all remote access — no exceptions',
      'Monitor for credential stuffing and anomalous VPN logins',
      'Map IT/OT boundaries before an incident forces you to',
      'Have incident response playbooks for unknown-scope breaches',
    ],
  },
]
