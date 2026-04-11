import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'

export const metadata = {
  title: {
    template: '%s – AgentCart Docs',
  },
  description:
    'AgentCart documentation — connect your store to AI agents via the Universal Commerce Protocol.',
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pageMap = await getPageMap('/')

  return (
    <html lang="en" suppressHydrationWarning>
      <Head />
      <body>
        <Layout
          navbar={
            <Navbar
              logo={
                <span style={{ fontWeight: 700, fontSize: '1rem' }}>
                  AgentCart Docs
                </span>
              }
              projectLink="https://github.com/Universal-Commerce-Protocol/ucp"
            />
          }
          footer={
            <Footer>
              © {new Date().getFullYear()} AgentCart. Built on the Universal
              Commerce Protocol.
            </Footer>
          }
          docsRepositoryBase="https://github.com/Bar-Dov/agentcart-docs"
          sidebar={{ defaultMenuCollapseLevel: 1 }}
          pageMap={pageMap}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
