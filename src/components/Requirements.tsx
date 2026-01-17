export default function Requirements() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-bg-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Requirements</h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            NeriTermを使用するために必要な環境です。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Server Requirements */}
          <div className="bg-bg-card p-8 rounded-xl border border-bg-card">
            <div className="flex items-center mb-6">
              <svg className="w-10 h-10 text-text-secondary mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <h3 className="text-2xl font-semibold">Server (Mac)</h3>
            </div>
            <ul className="space-y-3 text-text-secondary">
              <li className="flex items-center">
                <svg className="w-5 h-5 text-accent-green mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                macOS 12.0 (Monterey) 以降
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-accent-green mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Node.js 18.0 以降
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-accent-green mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Tailscale（リモートアクセス用）
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-accent-green mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Claude Code CLI
              </li>
            </ul>
          </div>

          {/* Client Requirements */}
          <div className="bg-bg-card p-8 rounded-xl border border-bg-card">
            <div className="flex items-center mb-6">
              <svg className="w-10 h-10 text-text-secondary mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
              <h3 className="text-2xl font-semibold">Client (iPhone)</h3>
            </div>
            <ul className="space-y-3 text-text-secondary">
              <li className="flex items-center">
                <svg className="w-5 h-5 text-accent-green mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                iOS 17.0 以降
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-accent-green mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                NeriTerm アプリ
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-accent-green mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Tailscale アプリ
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
