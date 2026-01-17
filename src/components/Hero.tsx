export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
          <span className="text-gradient">Claude Code</span>
          <br />
          in Your Pocket
        </h1>

        <p className="text-xl text-text-secondary max-w-2xl mx-auto mb-10">
          MacのClaude Codeに、iPhoneからアクセス。
          <br className="hidden sm:block" />
          リアルタイムでターミナル出力を確認し、どこからでもコーディング。
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a
            href="https://github.com/nerikeshi/neriterm-server/releases/latest"
            className="px-8 py-4 bg-accent hover:bg-accent/80 text-white rounded-xl transition font-semibold text-lg"
          >
            Download Server
          </a>
          <a
            href="#how-it-works"
            className="px-8 py-4 bg-bg-card hover:bg-bg-card/80 text-text-primary rounded-xl transition font-semibold text-lg border border-bg-card"
          >
            Learn More
          </a>
        </div>

        {/* Terminal Preview */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-bg-secondary rounded-xl border border-bg-card overflow-hidden shadow-2xl">
            {/* Terminal Header */}
            <div className="flex items-center px-4 py-3 bg-bg-card border-b border-bg-card">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <span className="ml-4 text-text-secondary text-sm font-mono">NeriTerm</span>
            </div>
            {/* Terminal Content */}
            <div className="p-4 font-mono text-sm text-left">
              <p className="text-accent-green">$ claude</p>
              <p className="text-text-secondary mt-2">Claude Code v1.0.0</p>
              <p className="text-text-primary mt-4">
                <span className="text-accent">claude&gt;</span> Help me refactor this function
              </p>
              <p className="text-text-secondary mt-2">
                I&apos;ll analyze the function and suggest improvements...
              </p>
              <p className="text-accent-green mt-4 animate-pulse">▋</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
