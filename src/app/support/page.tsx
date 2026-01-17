import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Support - NeriTerm',
  description: 'NeriTermのサポート・お問い合わせ',
}

const faqs = [
  {
    question: 'サーバーに接続できません',
    answer: 'サーバーが起動しているか確認し、Tailscaleが両方のデバイスで接続されているか確認してください。詳しくはトラブルシューティングガイドをご覧ください。',
  },
  {
    question: 'AUTH_TOKENを忘れました',
    answer: '~/.neriterm-server/.env ファイルからトークンを確認できます。cat ~/.neriterm-server/.env | grep AUTH_TOKEN を実行してください。',
  },
  {
    question: 'プッシュ通知が届きません',
    answer: 'Firebaseの設定が正しいか確認してください。また、iPhoneの設定でNeriTermの通知が許可されているか確認してください。',
  },
  {
    question: 'サーバーが起動しません',
    answer: 'ログを確認してください: tail -f ~/.neriterm-server/logs/stderr.log。Node.js 18以上がインストールされているか確認してください。',
  },
  {
    question: 'Tailscaleは必須ですか？',
    answer: 'ローカルネットワーク内でのみ使用する場合は不要です。外出先からアクセスする場合は、セキュリティのためTailscaleの使用を強く推奨します。',
  },
]

export default function SupportPage() {
  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">Support</h1>
        <p className="text-text-secondary mb-12">
          NeriTermに関するサポート情報です。
        </p>

        {/* FAQ Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">よくある質問</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="bg-bg-secondary rounded-xl border border-bg-card group"
              >
                <summary className="px-6 py-4 cursor-pointer flex items-center justify-between hover:bg-bg-card/50 transition rounded-xl">
                  <span className="font-medium">{faq.question}</span>
                  <svg
                    className="w-5 h-5 text-text-secondary group-open:rotate-180 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-4 text-text-secondary">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* Documentation Links */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">ドキュメント</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a
              href="https://github.com/nerikeshi/neriterm-server/blob/main/docs/setup-guide.md"
              className="bg-bg-secondary p-6 rounded-xl border border-bg-card hover:border-accent/50 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3 className="font-semibold mb-2">セットアップガイド</h3>
              <p className="text-text-secondary text-sm">
                詳細なインストール・設定手順
              </p>
            </a>
            <a
              href="https://github.com/nerikeshi/neriterm-server/blob/main/docs/tailscale-setup.md"
              className="bg-bg-secondary p-6 rounded-xl border border-bg-card hover:border-accent/50 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3 className="font-semibold mb-2">Tailscale設定</h3>
              <p className="text-text-secondary text-sm">
                リモートアクセスの設定方法
              </p>
            </a>
            <a
              href="https://github.com/nerikeshi/neriterm-server/blob/main/docs/troubleshooting.md"
              className="bg-bg-secondary p-6 rounded-xl border border-bg-card hover:border-accent/50 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3 className="font-semibold mb-2">トラブルシューティング</h3>
              <p className="text-text-secondary text-sm">
                よくある問題と解決方法
              </p>
            </a>
            <a
              href="https://github.com/nerikeshi/neriterm-server"
              className="bg-bg-secondary p-6 rounded-xl border border-bg-card hover:border-accent/50 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3 className="font-semibold mb-2">GitHub</h3>
              <p className="text-text-secondary text-sm">
                ソースコードとリリース
              </p>
            </a>
          </div>
        </section>

        {/* Contact Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">お問い合わせ</h2>
          <div className="bg-bg-secondary p-8 rounded-xl border border-bg-card">
            <p className="text-text-secondary mb-6">
              上記で解決しない問題や、ご質問・ご要望がありましたら、
              以下の方法でお問い合わせください。
            </p>

            <div className="space-y-4">
              <div className="flex items-start">
                <svg className="w-6 h-6 text-accent mr-4 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div>
                  <h3 className="font-medium mb-1">Email</h3>
                  <a href="mailto:nerikeshi.cola@gmail.com" className="text-accent hover:underline">
                    nerikeshi.cola@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <svg className="w-6 h-6 text-accent mr-4 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h3 className="font-medium mb-1">GitHub Issues</h3>
                  <a
                    href="https://github.com/nerikeshi/neriterm-server/issues"
                    className="text-accent hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    バグ報告・機能リクエスト
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-bg-card">
              <p className="text-text-secondary text-sm">
                お問い合わせの際は、以下の情報を添えていただけると、
                よりスムーズに対応できます：
              </p>
              <ul className="list-disc list-inside text-text-secondary text-sm mt-2 space-y-1 ml-4">
                <li>macOSのバージョン</li>
                <li>Node.jsのバージョン</li>
                <li>エラーログ（~/.neriterm-server/logs/stderr.log）</li>
                <li>実行したコマンドと出力</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Back to Home */}
        <div className="text-center">
          <Link href="/" className="text-accent hover:underline">
            ← ホームに戻る
          </Link>
        </div>
      </div>
    </div>
  )
}
