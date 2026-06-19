'use client'

import Link from 'next/link'

const itinerary = [
  {
    id: '1',
    time: '19:30',
    title: '津田沼キャンパス 出発',
    type: '出発',
    note: '行脚開始。全班の出発状況を確認する。',
    status: '予定通り',
  },
  {
    id: '2',
    time: '20:10',
    title: '歩道橋下 通過確認',
    type: '通過',
    note: '序盤の安全確認ポイント。',
    status: '確認待ち',
  },
  {
    id: '3',
    time: '20:40',
    title: '富士そば前 通過確認',
    type: '通過',
    note: '班ごとの通過状況を確認。',
    status: '確認待ち',
  },
  {
    id: '4',
    time: '21:30',
    title: '第1休憩所 到着',
    type: '休憩',
    note: '休憩前の到着確認。',
    status: '確認待ち',
  },
  {
    id: '5',
    time: '22:00',
    title: '第1休憩所 出発',
    type: '再出発',
    note: '再出発時刻を確認。',
    status: '確認待ち',
  },
  {
    id: '6',
    time: '00:10',
    title: 'ベイシア佐倉店前 通過',
    type: '通過',
    note: '中盤の進行確認地点。',
    status: '確認待ち',
  },
  {
    id: '7',
    time: '02:00',
    title: '第2休憩所 到着',
    type: '休憩',
    note: '後半戦前の到着確認。',
    status: '確認待ち',
  },
  {
    id: '8',
    time: '04:40',
    title: 'Sun Lucky周辺 通過',
    type: '終盤',
    note: '成田市内進入後の確認ポイント。',
    status: '確認待ち',
  },
  {
    id: '9',
    time: '05:30',
    title: '京成成田駅東口ロータリー周辺',
    type: '終盤',
    note: 'ゴール直前の最終確認地点。',
    status: '確認待ち',
  },
  {
    id: '10',
    time: '06:15',
    title: '成田山新勝寺 到着',
    type: 'ゴール',
    note: '行脚終了。',
    status: '確認待ち',
  },
]

function getStatusColor(status: string) {
  if (status === '予定通り') return '#16a34a'
  if (status === '確認待ち') return '#f59e0b'
  return '#ef4444'
}

function getTypeColor(type: string) {
  if (type === '出発') return '#2563eb'
  if (type === '休憩') return '#7c3aed'
  if (type === '再出発') return '#0891b2'
  if (type === 'ゴール') return '#dc2626'
  if (type === '終盤') return '#ea580c'
  return '#334155'
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
            Next.js プレビュー版 / 行程表
          </p>

          <h1
            style={{
              margin: '0 0 12px 0',
              fontSize: '32px',
              lineHeight: 1.3,
              fontWeight: 800,
            }}
          >
            行程表
          </h1>

          <p
            style={{
              margin: '0 0 20px 0',
              fontSize: '16px',
              color: '#cbd5e1',
              lineHeight: 1.7,
            }}
          >
            HTML版を壊さずに、行程表だけを Next.js 側へ切り出した確認ページです。
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
            <li>全体の時系列を見やすく整理する</li>
            <li>チェックポイント一覧とは別に行動順で確認できるようにする</li>
            <li>後で実績時刻や遅れ表示を追加する土台にする</li>
          </ul>
        </section>

        <section
          style={{
            display: 'grid',
            gap: '16px',
          }}
        >
          {itinerary.map((item, index) => (
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
                    行程 {index + 1}
                  </p>

                  <h3
                    style={{
                      margin: 0,
                      fontSize: '28px',
                      fontWeight: 800,
                      color: '#f8fafc',
                    }}
                  >
                    {item.title}
                  </h3>
                </div>

                <div
                  style={{
                    display: 'flex',
                    gap: '8px',
                    flexWrap: 'wrap',
                  }}
                >
                  <span
                    style={{
                      display: 'inline-block',
                      background: getTypeColor(item.type),
                      color: '#ffffff',
                      padding: '6px 10px',
                      borderRadius: '999px',
                      fontSize: '12px',
                      fontWeight: 700,
                    }}
                  >
                    {item.type}
                  </span>

                  <span
                    style={{
                      display: 'inline-block',
                      background: getStatusColor(item.status),
                      color: '#ffffff',
                      padding: '6px 10px',
                      borderRadius: '999px',
                      fontSize: '12px',
                      fontWeight: 700,
                    }}
                  >
                    {item.status}
                  </span>
                </div>
              </div>

              <div
                style={{
                  display: 'grid',
                  gap: '12px',
                }}
              >
                <InfoRow label="予定時刻" value={item.time} />
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
