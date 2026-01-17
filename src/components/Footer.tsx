import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-bg-secondary border-t border-bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <span className="text-2xl font-bold text-gradient">NeriTerm</span>
            <p className="mt-4 text-text-secondary max-w-md">
              MacのClaude Codeに、iPhoneからアクセス。
              リアルタイムでターミナル出力を確認し、どこからでもコーディング。
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold mb-4">Links</h3>
            <ul className="space-y-2 text-text-secondary">
              <li>
                <a
                  href="https://github.com/nerikeshi/neriterm-server"
                  className="hover:text-text-primary transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/nerikeshi/neriterm-server/releases"
                  className="hover:text-text-primary transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Downloads
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/nerikeshi/neriterm-server/blob/main/docs/setup-guide.md"
                  className="hover:text-text-primary transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Documentation
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-text-secondary">
              <li>
                <Link href="/privacy" className="hover:text-text-primary transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-text-primary transition">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/support" className="hover:text-text-primary transition">
                  Support
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-bg-card flex flex-col md:flex-row justify-between items-center">
          <p className="text-text-secondary text-sm">
            &copy; {new Date().getFullYear()} NeriTerm. All rights reserved.
          </p>
          <p className="text-text-secondary text-sm mt-2 md:mt-0">
            Contact: nerikeshi.cola@gmail.com
          </p>
        </div>
      </div>
    </footer>
  )
}
