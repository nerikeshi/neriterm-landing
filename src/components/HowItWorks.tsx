const steps = [
  {
    number: '01',
    title: 'サーバーセットアップ',
    description: 'MacにNeriTerm Serverをインストール。インストールスクリプトを実行するだけで完了。',
    code: './install.sh',
  },
  {
    number: '02',
    title: 'Tailscaleで接続',
    description: 'Tailscaleでセキュアなプライベートネットワークを設定。ポート開放不要。',
    code: 'tailscale up',
  },
  {
    number: '03',
    title: 'どこからでもコーディング',
    description: 'iPhoneからClaude Codeを操作。リアルタイムで出力を確認し、入力を送信。',
    code: 'Connected!',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            3つのシンプルなステップで、iPhoneからMacのClaude Codeにアクセスできます。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-accent to-transparent -translate-x-1/2" />
              )}

              <div className="bg-bg-secondary p-8 rounded-xl border border-bg-card">
                <div className="text-5xl font-bold text-accent/20 mb-4">{step.number}</div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-text-secondary mb-4">{step.description}</p>
                <code className="inline-block px-3 py-1 bg-bg-card rounded font-mono text-sm text-accent-green">
                  {step.code}
                </code>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
