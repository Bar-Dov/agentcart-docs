import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span style={{ fontWeight: 700, fontSize: '1rem' }}>AgentCart Docs</span>,
  project: {
    link: 'https://github.com/Universal-Commerce-Protocol/ucp',
  },
  docsRepositoryBase: 'https://github.com/agentcart',
  footer: {
    text: '© 2026 AgentCart. Built on the Universal Commerce Protocol.',
  },
  useNextSeoProps() {
    return { titleTemplate: '%s – AgentCart Docs' }
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="AgentCart documentation — connect your store to AI agents via UCP." />
    </>
  ),
  primaryHue: 220,
}

export default config
