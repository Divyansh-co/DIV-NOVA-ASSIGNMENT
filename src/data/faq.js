export const faqData = [
  {
    id: 'faq-1',
    question: 'How does NOVA differ from generic AI chatbots or basic LLM wrappers?',
    answer: 'Unlike generic chatbots that simply generate isolated text replies, NOVA is an active workflow execution engine. It maintains continuous semantic memory across your codebase, documents, and communication channels. NOVA does not just suggest what to do — it can run tests, draft PRs, schedule deployments, and execute multi-step automations autonomously with human approval gates.'
  },
  {
    id: 'faq-2',
    question: 'Is our proprietary code and sensitive company data used to train AI models?',
    answer: 'Absolutely not. We adhere to a strict Zero Data Retention (ZDR) policy. Your code, documents, and prompts are never stored permanently, never logged into third-party training pipelines, and never used to train public or foundational models. We offer Bring-Your-Own-Key (BYOK) and dedicated on-premise / VPC deployments for enterprise customers.'
  },
  {
    id: 'faq-3',
    question: 'Can I integrate NOVA with our existing tools like Jira, GitHub, and Slack?',
    answer: 'Yes! NOVA natively connects to over 45+ enterprise tools including GitHub, GitLab, Jira, Linear, Slack, Notion, Google Workspace, AWS, and Confluence. Setting up an integration takes under two clicks via secure OAuth 2.0 with granular permission scopes.'
  },
  {
    id: 'faq-4',
    question: 'What happens when my 14-day free trial ends?',
    answer: 'During the 14-day free trial, you receive full access to all Pro features with no credit card required upfront. When the trial concludes, you can upgrade to Starter or Pro, customize an Enterprise contract, or remain on our free community tier without losing your configured workspaces.'
  },
  {
    id: 'faq-5',
    question: 'Can I switch between monthly and annual billing, or cancel anytime?',
    answer: 'Yes, you can upgrade, downgrade, or cancel your subscription at any time directly from the billing portal. If you switch to annual billing, your account immediately applies a 20% discount. If you cancel, your access remains active until the end of your billing cycle.'
  },
  {
    id: 'faq-6',
    question: 'Which AI foundation models does NOVA run under the hood?',
    answer: 'NOVA uses a smart hybrid routing engine that dynamically switches between state-of-the-art models (including Claude 3.5 Sonnet, GPT-4o, Gemini 1.5 Pro, and open-source models like Llama 3) based on task latency, cost efficiency, and context size. Enterprise users can also configure custom model endpoints.'
  }
];
