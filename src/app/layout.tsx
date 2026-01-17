import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'NeriTerm - Claude Code in Your Pocket',
  description: 'MacのClaude Codeに、iPhoneからアクセス。リアルタイムでターミナル出力を確認し、どこからでもコーディング。',
  keywords: ['NeriTerm', 'Claude Code', 'iOS', 'Terminal', 'Remote', 'Mac'],
  authors: [{ name: 'nerikeshi' }],
  openGraph: {
    title: 'NeriTerm - Claude Code in Your Pocket',
    description: 'MacのClaude Codeに、iPhoneからアクセス。',
    type: 'website',
    locale: 'ja_JP',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NeriTerm - Claude Code in Your Pocket',
    description: 'MacのClaude Codeに、iPhoneからアクセス。',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={`${inter.className} bg-bg-primary text-text-primary min-h-screen`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
