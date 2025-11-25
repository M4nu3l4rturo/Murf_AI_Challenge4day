export interface AppConfig {
  pageTitle: string;
  pageDescription: string;
  companyName: string;

  supportsChatInput: boolean;
  supportsVideoInput: boolean;
  supportsScreenShare: boolean;
  isPreConnectBufferEnabled: boolean;

  logo: string;
  startButtonText: string;
  accent?: string;
  logoDark?: string;
  accentDark?: string;

  // for LiveKit Cloud Sandbox
  sandboxId?: string;
  agentName?: string;
}

export const APP_CONFIG_DEFAULTS: AppConfig = {
  companyName: "Noa's Tech Academy",
  pageTitle: 'Teach-the-Tutor: Active Recall Coach',
  pageDescription: 'Step inside an interactive lab where the agent learns with you. Explain concepts, get quizzed, and teach them back in immersive Murf-powered voices.',

  supportsChatInput: true,
  supportsVideoInput: false,
  supportsScreenShare: false,
  isPreConnectBufferEnabled: true,

  logo: '/lk-logo.svg',
  accent: '#8B5CF6',
  logoDark: '/lk-logo-dark.svg',
  accentDark: '#A78BFA',
  startButtonText: 'Start Learning',

  // for LiveKit Cloud Sandbox
  sandboxId: undefined,
  agentName: 'Active Recall Coach',
};
