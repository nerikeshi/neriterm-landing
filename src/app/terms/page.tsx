import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service - NeriTerm',
  description: 'NeriTermの利用規約',
}

export default function TermsPage() {
  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold mb-8">Terms of Service</h1>
        <p className="text-text-secondary mb-8">Last updated: January 2025</p>

        <div className="prose prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. サービスの説明</h2>
            <p className="text-text-secondary">
              NeriTerm（以下「本サービス」）は、MacコンピュータとiPhoneの間で
              ターミナルセッションをリモートで共有するためのソフトウェアです。
              本サービスは、NeriTerm iOSアプリ（クライアント）と
              NeriTerm Server（サーバー）で構成されます。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. 利用条件</h2>
            <p className="text-text-secondary mb-4">
              本サービスを利用するにあたり、ユーザーは以下に同意するものとします：
            </p>
            <ul className="list-disc list-inside text-text-secondary space-y-2 ml-4">
              <li>本利用規約の全条項に従うこと</li>
              <li>適用される法律および規制を遵守すること</li>
              <li>自身のサーバーおよびデータを適切に管理すること</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. ユーザーの責任</h2>
            <h3 className="text-xl font-medium mb-3 mt-6">3.1 サーバー管理</h3>
            <p className="text-text-secondary mb-4">
              ユーザーは、自身のMacコンピュータ上で動作するNeriTerm Serverの
              設定および管理について責任を負います。これには以下が含まれます：
            </p>
            <ul className="list-disc list-inside text-text-secondary space-y-2 ml-4">
              <li>認証トークンの安全な管理</li>
              <li>適切なネットワークセキュリティの確保</li>
              <li>サーバーソフトウェアの更新</li>
            </ul>

            <h3 className="text-xl font-medium mb-3 mt-6">3.2 アクセス制御</h3>
            <p className="text-text-secondary">
              ユーザーは、自身の認証トークンを第三者と共有しないものとします。
              認証トークンの漏洩による被害について、サービス提供者は責任を負いません。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. 禁止事項</h2>
            <p className="text-text-secondary mb-4">
              ユーザーは、本サービスを以下の目的で使用してはなりません：
            </p>
            <ul className="list-disc list-inside text-text-secondary space-y-2 ml-4">
              <li>違法な活動</li>
              <li>第三者のコンピュータシステムへの不正アクセス</li>
              <li>マルウェアの作成または配布</li>
              <li>他者の知的財産権の侵害</li>
              <li>本サービスの逆コンパイル、逆アセンブル、リバースエンジニアリング</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. 知的財産権</h2>
            <p className="text-text-secondary">
              本サービスおよび関連するソフトウェア、ドキュメント、コンテンツの
              著作権およびその他の知的財産権は、サービス提供者または
              そのライセンサーに帰属します。NeriTerm Serverのソースコードは
              MITライセンスの下で公開されています。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. 免責事項</h2>
            <h3 className="text-xl font-medium mb-3 mt-6">6.1 サービスの提供</h3>
            <p className="text-text-secondary mb-4">
              本サービスは「現状有姿」で提供されます。サービス提供者は、
              本サービスの正確性、信頼性、完全性、または特定目的への適合性について、
              明示または黙示を問わず、いかなる保証も行いません。
            </p>

            <h3 className="text-xl font-medium mb-3 mt-6">6.2 損害</h3>
            <p className="text-text-secondary">
              サービス提供者は、本サービスの使用または使用不能から生じる
              直接的、間接的、偶発的、特別、または結果的な損害について、
              責任を負いません。これには、データの損失、利益の損失、
              業務の中断が含まれますが、これらに限定されません。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. サービスの変更・終了</h2>
            <p className="text-text-secondary">
              サービス提供者は、事前の通知なく、本サービスの全部または一部を
              変更、中断、または終了する権利を留保します。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">8. 利用規約の変更</h2>
            <p className="text-text-secondary">
              サービス提供者は、本利用規約を随時変更する権利を留保します。
              重要な変更がある場合は、本ページにて通知します。
              変更後も本サービスを継続して使用することにより、
              ユーザーは変更後の利用規約に同意したものとみなされます。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">9. 準拠法</h2>
            <p className="text-text-secondary">
              本利用規約は、日本法に準拠し、日本法に従って解釈されるものとします。
              本サービスに関連する紛争については、東京地方裁判所を
              第一審の専属的合意管轄裁判所とします。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">10. お問い合わせ</h2>
            <p className="text-text-secondary">
              本利用規約に関するご質問は、以下までお問い合わせください：
            </p>
            <p className="mt-4">
              <a href="mailto:nerikeshi.cola@gmail.com" className="text-accent hover:underline">
                nerikeshi.cola@gmail.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
