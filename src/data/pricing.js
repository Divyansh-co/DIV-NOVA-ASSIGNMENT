export const pricingPlans = [
  {
    id: 'starter',
    name: 'Starter',
    badge: null,
    description: 'Perfect for solo founders, independent creators, and rapid prototyping.',
    monthlyPrice: 29,
    annualPrice: 24, // billed annually (~$288/yr)
    period: 'seat / month',
    ctaText: 'Start 14-Day Free Trial',
    ctaVariant: 'secondary',
    isPopular: false,
    features: [
      'Up to 5 autonomous agents',
      '50,000 monthly workflow tokens',
      '5 integrations (GitHub, Slack, Drive, Jira, Notion)',
      'Sub-second cognitive document search (up to 2,000 docs)',
      'Community support & standard SLA',
      'Standard data encryption in transit & rest'
    ],
    notIncluded: [
      'Custom LLM fine-tuning',
      'Dedicated private VPC hosting',
      'SOC2 & HIPAA compliance package'
    ]
  },
  {
    id: 'pro',
    name: 'Pro',
    badge: 'Most Popular',
    description: 'For growing scaleups and high-velocity engineering teams needing maximum autonomy.',
    monthlyPrice: 79,
    annualPrice: 64, // billed annually (~$768/yr)
    period: 'seat / month',
    ctaText: 'Start Pro Free Trial',
    ctaVariant: 'primary',
    isPopular: true,
    features: [
      'Unlimited autonomous agents & parallel pipelines',
      '500,000 monthly workflow tokens',
      'All 45+ enterprise integrations',
      'Full cognitive document synthesis (unlimited docs)',
      'Neural Collaborative Copilot for IDE & web',
      'Priority 24/7 dedicated support & Slack channel',
      'Advanced team permissions & audit logs',
      'Zero data retention guarantee'
    ],
    notIncluded: [
      'Dedicated private VPC hosting'
    ]
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    badge: 'Custom Architecture',
    description: 'For large organizations demanding custom SLAs, dedicated infrastructure, and governance.',
    monthlyPrice: 'Custom',
    annualPrice: 'Custom',
    period: 'tailored per organization',
    ctaText: 'Talk to Enterprise Sales',
    ctaVariant: 'outline',
    isPopular: false,
    features: [
      'Unlimited seats, tokens & concurrent pipelines',
      'Dedicated VPC / on-premises deployment options',
      'Custom LLM model routing & Bring Your Own Key (BYOK)',
      'SOC2 Type II, HIPAA, ISO27001 compliance binder',
      'Custom SCIM & SAML SSO provisioning',
      'Dedicated Technical Account Manager (TAM)',
      'Custom legal agreements, MSA & 99.99% uptime SLA guarantee',
      'Hands-on team onboarding and AI workflow consulting'
    ],
    notIncluded: []
  }
];
