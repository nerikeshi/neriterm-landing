export default function Download() {
  return (
    <section id="download" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Get Started</h2>
        <p className="text-text-secondary text-lg max-w-2xl mx-auto mb-12">
          今すぐNeriTermを使い始めましょう。
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* iOS App */}
          <div className="bg-bg-secondary p-8 rounded-xl border border-bg-card">
            <div className="w-16 h-16 mx-auto mb-6 bg-bg-card rounded-2xl flex items-center justify-center">
              <svg className="w-8 h-8 text-text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">NeriTerm App</h3>
            <p className="text-text-secondary mb-6">
              iPhoneからClaude Codeにアクセス
            </p>
            <div className="inline-block px-6 py-3 bg-bg-card text-text-secondary rounded-lg">
              App Store - Coming Soon
            </div>
          </div>

          {/* Server */}
          <div className="bg-bg-secondary p-8 rounded-xl border border-accent/50">
            <div className="w-16 h-16 mx-auto mb-6 bg-accent/10 rounded-2xl flex items-center justify-center">
              <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">NeriTerm Server</h3>
            <p className="text-text-secondary mb-6">
              Mac用コンパニオンサーバー
            </p>
            <a
              href="https://github.com/nerikeshi/neriterm-server/releases/latest"
              className="inline-block px-6 py-3 bg-accent hover:bg-accent/80 text-white rounded-lg transition font-medium"
            >
              Download from GitHub
            </a>
          </div>
        </div>

        {/* Documentation Link */}
        <div className="mt-12">
          <p className="text-text-secondary mb-4">詳しいセットアップ方法はドキュメントをご覧ください</p>
          <a
            href="https://github.com/nerikeshi/neriterm-server/blob/main/docs/setup-guide.md"
            className="text-accent hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Setup Guide →
          </a>
        </div>
      </div>
    </section>
  )
}
