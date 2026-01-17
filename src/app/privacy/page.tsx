import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy - NeriTerm',
  description: 'NeriTermのプライバシーポリシー',
}

export default function PrivacyPage() {
  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold mb-8">Privacy Policy</h1>
        <p className="text-text-secondary mb-8">Last updated: January 2025</p>

        <div className="prose prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. はじめに</h2>
            <p className="text-text-secondary">
              NeriTerm（以下「本アプリ」）は、ユーザーのプライバシーを尊重し、
              個人情報の保護に努めています。
              本プライバシーポリシーでは、本アプリが収集する情報と
              その使用方法について説明します。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. 収集する情報</h2>
            <h3 className="text-xl font-medium mb-3 mt-6">2.1 デバイストークン</h3>
            <p className="text-text-secondary mb-4">
              プッシュ通知を配信するために、Firebase Cloud Messaging (FCM) の
              デバイストークンを収集します。このトークンは、ユーザー自身のMacサーバーに
              ローカルで保存されます。
            </p>

            <h3 className="text-xl font-medium mb-3 mt-6">2.2 接続情報</h3>
            <p className="text-text-secondary mb-4">
              サーバーへの接続を確立するために、以下の情報を使用します：
            </p>
            <ul className="list-disc list-inside text-text-secondary space-y-2 ml-4">
              <li>サーバーのIPアドレスまたはホスト名</li>
              <li>ポート番号</li>
              <li>認証トークン</li>
            </ul>
            <p className="text-text-secondary mt-4">
              これらの情報はユーザーのデバイス内にのみ保存され、
              外部に送信されることはありません。
            </p>

            <h3 className="text-xl font-medium mb-3 mt-6">2.3 プロジェクト情報</h3>
            <p className="text-text-secondary">
              ユーザーが登録したプロジェクトの情報（プロジェクト名、パス）は、
              ユーザー自身のMacサーバー上にローカルで保存されます。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. 情報の使用目的</h2>
            <p className="text-text-secondary mb-4">
              収集した情報は、以下の目的でのみ使用されます：
            </p>
            <ul className="list-disc list-inside text-text-secondary space-y-2 ml-4">
              <li>プッシュ通知の配信（入力待ち、処理完了の通知）</li>
              <li>サーバーへの接続とセッション管理</li>
              <li>サービスの提供および改善</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. 第三者サービス</h2>
            <p className="text-text-secondary mb-4">
              本アプリは、以下の第三者サービスを使用しています：
            </p>

            <h3 className="text-xl font-medium mb-3 mt-6">4.1 Firebase Cloud Messaging (Google)</h3>
            <p className="text-text-secondary mb-4">
              プッシュ通知の配信に使用します。Googleのプライバシーポリシーについては、
              <a href="https://policies.google.com/privacy" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">
                こちら
              </a>
              をご確認ください。
            </p>

            <h3 className="text-xl font-medium mb-3 mt-6">4.2 Tailscale（推奨）</h3>
            <p className="text-text-secondary">
              セキュアなリモートアクセスのために推奨しています。
              Tailscaleのプライバシーポリシーについては、
              <a href="https://tailscale.com/privacy-policy/" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">
                こちら
              </a>
              をご確認ください。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. データの保存</h2>
            <p className="text-text-secondary">
              本アプリで使用するデータは、すべてユーザー自身のデバイス
              （iPhone、Mac）に保存されます。クラウドサーバーへのデータ送信は、
              プッシュ通知の配信（FCM経由）を除き、行われません。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. ユーザーの権利</h2>
            <h3 className="text-xl font-medium mb-3 mt-6">6.1 データの削除</h3>
            <p className="text-text-secondary mb-4">
              ユーザーは以下の方法でデータを削除できます：
            </p>
            <ul className="list-disc list-inside text-text-secondary space-y-2 ml-4">
              <li>iPhoneアプリ: アプリを削除することで、デバイス上のすべてのデータが削除されます</li>
              <li>Macサーバー: uninstall.sh を実行することで、サーバー上のデータを削除できます</li>
            </ul>

            <h3 className="text-xl font-medium mb-3 mt-6">6.2 通知の無効化</h3>
            <p className="text-text-secondary">
              プッシュ通知は、iPhoneの設定アプリから無効化できます。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. セキュリティ</h2>
            <p className="text-text-secondary">
              本アプリは、ユーザーのデータを保護するために以下のセキュリティ対策を
              講じています：
            </p>
            <ul className="list-disc list-inside text-text-secondary space-y-2 ml-4 mt-4">
              <li>トークンベースの認証（32文字以上の認証トークン）</li>
              <li>Tailscale経由のエンドツーエンド暗号化通信（推奨）</li>
              <li>認証試行のレート制限</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">8. お問い合わせ</h2>
            <p className="text-text-secondary">
              本プライバシーポリシーに関するご質問は、以下までお問い合わせください：
            </p>
            <p className="mt-4">
              <a href="mailto:nerikeshi.cola@gmail.com" className="text-accent hover:underline">
                nerikeshi.cola@gmail.com
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">9. ポリシーの変更</h2>
            <p className="text-text-secondary">
              本プライバシーポリシーは、必要に応じて更新される場合があります。
              重要な変更がある場合は、本ページにて通知します。
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
