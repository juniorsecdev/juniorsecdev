export const cyberDefenseAnalyst = {
  id: 'cyber-defense-analyst',
  title: 'Cybersecurity Defense Analyst',
  status: 'in-progress',
  lessons: [
    {
      id: 'ransomware-critical-infrastructure',
      number: '01',
      title: 'Ransomware & Critical Infrastructure',
      tags: [
        { label: 'Threats', color: 'red' },
        { label: 'Real-World', color: 'blue' },
      ],
      keyPoints: [
        {
          term: 'Ransomware',
          def: 'Malware that encrypts a victim\'s data and demands payment (usually cryptocurrency) for the decryption key.',
        },
        {
          term: 'Initial Access Vector',
          def: 'How attackers get in. In Colonial Pipeline, it was a single compromised VPN credential with no MFA.',
        },
        {
          term: 'IT vs OT Systems',
          def: 'IT handles data (computers, servers). OT (Operational Technology) controls physical infrastructure like pipelines and power grids. Colonial shut OT down out of caution even though only IT was hit.',
        },
        {
          term: 'Double Extortion',
          def: 'DarkSide stole ~100GB of data BEFORE encrypting, threatening to leak it publicly. Two leverage points: pay or we release your data AND you can\'t access it.',
        },
      ],
      howItUnfolded: [
        'Attackers obtained a VPN password leaked from a previous, unrelated breach',
        'No MFA on the account — single credential was enough to get in',
        'DarkSide exfiltrated ~100GB of data before deploying ransomware',
        'Colonial shut down their OT systems as a precaution',
        '$4.4M paid in Bitcoin — DOJ later recovered ~$2.3M via blockchain tracing',
      ],
      blueTeamTakeaways: [
        'Credential hygiene and MFA are non-negotiable — a single password caused a national emergency',
        'Monitor for credential stuffing and unusual VPN logins',
        'Know your IT/OT segmentation before an incident forces the question',
        'Incident response plans need to cover "unknown scope" scenarios',
      ],
      examTips: [
        'Ransomware = encrypt + demand payment. Double extortion = steal THEN encrypt.',
        'Know the difference between IT (information technology) and OT (operational technology). OT attacks can have physical, real-world consequences.',
        'The Colonial Pipeline attack is a flagship example of critical infrastructure vulnerability. Root cause: missing MFA on a single VPN account.',
      ],
      resources: [
        { label: 'CISA Advisory — DarkSide Ransomware', url: 'https://www.cisa.gov/news-events/cybersecurity-advisories/aa21-131a' },
        { label: 'CISA StopRansomware Hub', url: 'https://www.cisa.gov/stopransomware' },
      ],
    },
    {
      id: 'insider-threats-shadow-it',
      number: '02',
      title: 'Insider Threats, Shadow IT & Behavioral Analytics',
      tags: [
        { label: 'Insider Risk', color: 'yellow' },
        { label: 'Detection', color: 'green' },
      ],
      keyPoints: [
        {
          term: 'Shadow IT',
          def: 'Software or services used within an org without IT department knowledge or approval. Not always malicious — often employees just trying to work more efficiently.',
        },
        {
          term: 'Insider Threat Types',
          def: 'Malicious (intentional harm), Negligent (careless, unintentional), Compromised (legitimate user whose credentials are stolen).',
        },
        {
          term: 'UEBA',
          def: 'User and Entity Behavior Analytics. Establishes a baseline for what "normal" looks like per user/device, then flags deviations from that baseline.',
        },
        {
          term: 'Risk Based Alerting (RBA)',
          def: 'Instead of alerting on every single suspicious event, RBA adds risk scores together. Multiple low-risk anomalies combined can trigger a high-risk alert.',
        },
      ],
      howItUnfolded: [
        'A team uploads confidential files to an unapproved tool (Shadow IT)',
        'IT never set up MFA for this tool — it\'s not on their radar',
        'An employee receives a phishing email mimicking the tool and enters credentials',
        'Attacker now has access to confidential files and potentially more via password reuse',
        'UEBA detects: unusual login location + unusual file access + bulk download to personal device = high combined risk score',
      ],
      blueTeamTakeaways: [
        'You can\'t protect what you don\'t know exists — Shadow IT is a blind spot',
        'Not every insider threat is malicious. Negligent insiders cause massive damage too',
        'UEBA is essential for detecting low-and-slow attacks that no single alert would catch',
        'Password reuse massively amplifies the blast radius of any credential compromise',
      ],
      examTips: [
        'The three insider threat types: Malicious, Negligent, and Compromised. Be able to identify them in a scenario.',
        'UEBA = behavior baseline + deviation detection. It is NOT signature-based — it learns what normal looks like per user.',
        'Shadow IT is a policy/governance problem, not just a technical one. Solution involves discovery tools AND acceptable use policies.',
        'Risk Based Alerting reduces alert fatigue — a major real-world SOC problem. Multiple weak signals combined can be more meaningful than one strong signal.',
      ],
      keyTerms: [
        { term: 'Phishing', def: 'Deceptive communications designed to steal credentials or install malware' },
        { term: 'MFA', def: 'Multi-Factor Authentication. Something you know + something you have/are' },
        { term: 'Password Reuse', def: 'Using the same password across multiple accounts. One breach = multiple compromises' },
        { term: 'Alert Fatigue', def: 'SOC analysts becoming desensitized due to high volume of false positives' },
      ],
      resources: [
        { label: 'CISA Insider Threat Mitigation Guide', url: 'https://www.cisa.gov/insider-threat-mitigation' },
        { label: 'Splunk — What Is UEBA?', url: 'https://www.splunk.com/en_us/blog/security/what-is-ueba.html' },
      ],
    },
  ],
}
