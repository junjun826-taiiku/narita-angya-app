'use client'

import Link from 'next/link'

const historyItems = [
  {
    id: '1',
    updatedAt: '2026-05-23 19:32',
    checkpoint: '津田沼キャンパス出発',
    team: '1班',
    action: '出発確認',
    value: '19:30',
    user: '行脚担当',
    note: '予定通り出発',
  },
  {
    id: '2',
    updatedAt: '2026-05-23 20:12',
    checkpoint: '歩道橋下',
    team: '2班',
    action: '通過確認',
    value: '20:11',
    user: 'ポイントマン',
    note: '安全確認済み',
  },
  {
    id: '3',
    updatedAt: '2026-05-23 20:43',
    checkpoint: '富士そば前',
    team: '3班',
    action: '通過確認',
    value: '20:42',
    user: 'ポイントマン',
    note: '大きな遅れなし',
  },
  {
    id: '4',
    updatedAt: '2026-05-23 22:01',
    checkpoint: '第1休憩所出発',
    team: '全班',
    action: '再出発確認',
    value: '22:00',
    user: '行脚担当',
    note: '全体再出発',
  },
  {
    id: '5',
    updatedAt: '2026-05-24 00:15',
    checkpoint: 'ベイシア佐倉店前',
    team: '5班',
    action: '進行確認',
    value: '00:13',
    user: 'ポイントマン',
    note: 'やや前倒し',
  },
  {
    id: '6',
    updatedAt: '2026-05-24 02:05',
    checkpoint: '第2休憩所到着',
    team: '全班',
    action: '到着確認',
    value: '02:03',
    user: '行脚担当',
    note: '休憩所到着確認',
  },
]

function getActionColor(action: string) {
  if (action.includes('出発')) return '#2563eb'
  if (action.includes('通過')) return '#16a34a'
  if (action.includes('到着')) return '#7c3aed'
  return '#f59e0b'
}

export default function Pagee() {
  return (
    <main
      style={{
        minHeight: '100vh',
        background: '#0f172a',
        color: '#e5e7eb',
        padding: '24px 16px 80px',
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Hiragino Sans", "Yu Gothic", sans-serif',
      }}
    >
      <div
        style={{
          maxWidth: '960px',
          margin: '0 auto',
        }}
      >
        <section
          style={{
            background: '#111827',
            border: '1px solid #1f2937',
            borderRadius: '20px',
            padding: '24px',
            marginBottom: '24px',
            boxShadow: '0 8px 24px rgba(0,0,0,0.25)',
          }}
        >
          <p
            style={{
              margin: '0 0 8px 0',
              fontSize: '13px',
              color: '#9ca3af',
            }}
          >
            Next.js プレビュー版 / 履歴
          </p>

          <h1
            style={{
              margin: '0 0 12px 0',
              fontSize: '32px',
              lineHeight: 1.3,
              fontWeight: 800,
            }}
          >
            更新履歴
          </h1>

          <p
            style={{
              margin: '0 0 20px 0',
              fontSize: '16px',
              color: '#cbd5e1',
              lineHeight: 1.7,
            }}
          >
            HTML版を壊さずに、履歴画面だけを Next.js 側へ切り出した確認ページです。
          </p>

          <div
            style={{
              display: 'flex',
              gap: '12px',
              flexWrap: 'wrap',
            }}
          >
            <Link
              href="/next-preview"
              style={{
                display: 'inline-block',
                padding: '12px 18px',
                borderRadius: '12px',
                background: '#374151',
                color: '#ffffff',
                textDecoration: 'none',
                fontWeight: 700,
              }}
            >
              Next.jsトップへ戻る
            </Link>

            <Link
              href="/next-preview/checkpoints"
              style={{
                display: 'inline-block',
                padding: '12px 18px',
                borderRadius: '12px',
                background: '#1d4ed8',
                color: '#ffffff',
                textDecoration: 'none',
                fontWeight: 700,
              }}
            >
              チェックポイント一覧へ
            </Link>

            <Link
              href="/next-preview/itinerary"
              style={{
                display: 'inline-block',
                padding: '12px 18px',
                borderRadius: '12px',
                background: '#0f766e',
                color: '#ffffff',
                textDecoration: 'none',
                fontWeight: 700,
              }}
            >
              行程表へ
            </Link>

            <Link
              href="/narita.html"
              style={{
                display: 'inline-block',
                padding: '12px 18px',
                borderRadius: '12px',
                background: '#2563eb',
                color: '#ffffff',
                textDecoration: 'none',
                fontWeight: 700,
              }}
            >
              現在のHTML版を開く
            </Link>
          </div>
        </section>

        <section
          style={{
            background: '#111827',
            border: '1px solid #1f2937',
            borderRadius: '20px',
            padding: '24px',
            marginBottom: '24px',
            boxShadow: '0 8px 24px rgba(0,0,0,0.25)',
          }}
        >
          <h2
            style={{
              margin: '0 0 16px 0',
              fontSize: '24px',
              fontWeight: 800,
            }}
          >
            このページの役割
          </h2>

          <ul
            style={{
              margin: 0,
              paddingLeft: '20px',
              color: '#cbd5e1',
              lineHeight: 1.9,
              fontSize: '16px',
            }}
          >
            <li>誰がいつ更新したかを確認する</li>
            <li>通過・到着・出発などの変更履歴を時系列で見る</li>
            <li>後で Supabase の更新ログ表示に置き換える土台にする</li>
          </ul>
        </section>

        <section
          style={{
            display: 'grid',
            gap: '16px',
          }}
        >
          {historyItems.map((item) => (
            <div
              key={item.id}
              style={{
                background: '#111827',
                border: '1px solid #1f2937',
                borderRadius: '20px',
                padding: '20px',
                boxShadow: '0 8px 24px rgba(0,0,0,0.25)',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  gap: '16px',
                  flexWrap: 'wrap',
                  marginBottom: '12px',
                }}
              >
                <div>
                  <p
                    style={{
                      margin: '0 0 6px 0',
                      fontSize: '13px',
                      color: '#94a3b8',
                    }}
                  >
                    更新時刻
                  </p>

                  <h3
                    style={{
                      margin: 0,
                      fontSize: '28px',
                      fontWeight: 800,
                      color: '#f8fafc',
                    }}
                  >
                    {item.updatedAt}
                  </h3>
                </div>

                <span
                  style={{
                    display: 'inline-block',
                    background: getActionColor(item.action),
                    color: '#ffffff',
                    padding: '6px 10px',
                    borderRadius: '999px',
                    fontSize: '12px',
                    fontWeight: 700,
                  }}
                >
                  {item.action}
                </span>
              </div>

              <div
                style={{
                  display: 'grid',
                  gap: '12px',
                }}
              >
                <InfoRow label="チェックポイント" value={item.checkpoint} />
                <InfoRow label="対象班" value={item.team} />
                <InfoRow label="入力値" value={item.value} />
                <InfoRow label="更新者" value={item.user} />
                <InfoRow label="メモ" value={item.note} />
              </div>
            </div>
          ))}
        </section>
      </div>
    </main>
  )
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        gap: '12px',
        padding: '14px 16px',
        background: '#1e293b',
        borderRadius: '12px',
        border: '1px solid #334155',
        flexWrap: 'wrap',
      }}
    >
      <span style={{ color: '#94a3b8', fontWeight: 600 }}>{label}</span>
      <span style={{ color: '#f8fafc', fontWeight: 700 }}>{value}</span>
    </div>
  )
}
