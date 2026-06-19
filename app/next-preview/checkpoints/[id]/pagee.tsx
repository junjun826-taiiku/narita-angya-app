'use client'

import Link from 'next/link'

type PageeProps = {
  id: string
}

const checkpoints = [
  {
    id: '1',
    name: '津田沼キャンパス出発',
    segment: '出発',
    note: 'スタート地点',
    plannedTime: '19:30',
    actualTime: '未入力',
    status: '正常',
    detail: '行脚開始地点です。出発時刻と班の動き出しを確認します。',
  },
  {
    id: '2',
    name: '歩道橋下',
    segment: '序盤',
    note: '安全確認ポイント',
    plannedTime: '20:10',
    actualTime: '未入力',
    status: '確認待ち',
    detail: '序盤の安全確認ポイントです。通過状況の確認に使います。',
  },
  {
    id: '3',
    name: '富士そば前',
    segment: '序盤',
    note: '通過確認',
    plannedTime: '20:40',
    actualTime: '未入力',
    status: '確認待ち',
    detail: '班ごとの通過時刻を確認するポイントです。',
  },
  {
    id: '4',
    name: '第1休憩所出発',
    segment: '中盤',
    note: '再出発確認',
    plannedTime: '22:00',
    actualTime: '未入力',
    status: '確認待ち',
    detail: '休憩後の再出発状況を把握する地点です。',
  },
  {
    id: '5',
    name: 'ベイシア佐倉店前',
    segment: '中盤',
    note: '進行確認',
    plannedTime: '00:10',
    actualTime: '未入力',
    status: '確認待ち',
    detail: '進行の遅れやばらつきを確認するための地点です。',
  },
  {
    id: '6',
    name: '第2休憩所到着',
    segment: '後半',
    note: '到着報告地点',
    plannedTime: '02:00',
    actualTime: '未入力',
    status: '確認待ち',
    detail: '後半戦前の重要な到着確認ポイントです。',
  },
  {
    id: '7',
    name: 'Sun Lucky周辺',
    segment: '終盤',
    note: '成田市内進入後',
    plannedTime: '04:40',
    actualTime: '未入力',
    status: '確認待ち',
    detail: '終盤の位置確認と進行状況確認に使います。',
  },
  {
    id: '8',
    name: '京成成田駅東口ロータリー周辺',
    segment: '終盤',
    note: 'ゴール直前',
    plannedTime: '05:30',
    actualTime: '未入力',
    status: '確認待ち',
    detail: 'ゴール直前の最終確認地点です。',
  },
]

export default function Pagee({ id }: PageeProps) {
  const checkpoint = checkpoints.find((item) => item.id === id)

  if (!checkpoint) {
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
              boxShadow: '0 8px 24px rgba(0,0,0,0.25)',
            }}
          >
            <p style={{ margin: '0 0 8px 0', color: '#94a3b8' }}>
              Next.js プレビュー版 / チェックポイント詳細
            </p>
            <h1 style={{ margin: '0 0 12px 0', fontSize: '32px', fontWeight: 800 }}>
              該当するチェックポイントが見つかりません
            </h1>
            <p style={{ margin: '0 0 20px 0', color: '#cbd5e1', lineHeight: 1.8 }}>
              指定されたIDの詳細ページはまだ存在しないか、URLが誤っています。
            </p>

            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <Link
                href="/next-preview/checkpoints"
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
                一覧へ戻る
              </Link>

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
            </div>
          </section>
        </div>
      </main>
    )
  }

  const statusColor =
    checkpoint.status === '正常'
      ? '#16a34a'
      : checkpoint.status === '確認待ち'
      ? '#f59e0b'
      : '#ef4444'

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
            Next.js プレビュー版 / チェックポイント詳細
          </p>

          <h1
            style={{
              margin: '0 0 12px 0',
              fontSize: '32px',
              lineHeight: 1.3,
              fontWeight: 800,
            }}
          >
            {checkpoint.name}
          </h1>

          <p
            style={{
              margin: '0 0 20px 0',
              fontSize: '16px',
              color: '#cbd5e1',
              lineHeight: 1.7,
            }}
          >
            HTML版を壊さずに、詳細画面だけを Next.js 側へ切り出した確認ページです。
          </p>

          <div
            style={{
              display: 'flex',
              gap: '12px',
              flexWrap: 'wrap',
            }}
          >
            <Link
              href="/next-preview/checkpoints"
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
              一覧へ戻る
            </Link>

            <Link
              href="/next-preview"
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
              Next.jsトップへ戻る
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
            display: 'grid',
            gap: '16px',
          }}
        >
          <div
            style={{
              background: '#111827',
              border: '1px solid #1f2937',
              borderRadius: '20px',
              padding: '24px',
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
              基本情報
            </h2>

            <div style={{ display: 'grid', gap: '12px' }}>
              <InfoRow label="チェックポイントID" value={checkpoint.id} />
              <InfoRow label="名称" value={checkpoint.name} />
              <InfoRow label="区分" value={checkpoint.segment} />
              <InfoRow label="メモ" value={checkpoint.note} />
            </div>
          </div>

          <div
            style={{
              background: '#111827',
              border: '1px solid #1f2937',
              borderRadius: '20px',
              padding: '24px',
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
              進行状況
            </h2>

            <div style={{ display: 'grid', gap: '12px' }}>
              <InfoRow label="予定時刻" value={checkpoint.plannedTime} />
              <InfoRow label="実績時刻" value={checkpoint.actualTime} />
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
                <span style={{ color: '#94a3b8', fontWeight: 600 }}>状態</span>
                <span
                  style={{
                    display: 'inline-block',
                    background: statusColor,
                    color: '#ffffff',
                    padding: '6px 10px',
                    borderRadius: '999px',
                    fontSize: '12px',
                    fontWeight: 700,
                  }}
                >
                  {checkpoint.status}
                </span>
              </div>
            </div>
          </div>

          <div
            style={{
              background: '#111827',
              border: '1px solid #1f2937',
              borderRadius: '20px',
              padding: '24px',
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
              詳細説明
            </h2>

            <p
              style={{
                margin: 0,
                color: '#cbd5e1',
                lineHeight: 1.9,
                fontSize: '16px',
              }}
            >
              {checkpoint.detail}
            </p>
          </div>

          <div
            style={{
              background: '#111827',
              border: '1px solid #1f2937',
              borderRadius: '20px',
              padding: '24px',
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
              次ステップ用メモ
            </h2>

            <ul
              style={{
                margin: 0,
                paddingLeft: '20px',
                color: '#cbd5e1',
                lineHeight: 1.9,
              }}
            >
              <li>ここに実績時刻入力欄を追加する</li>
              <li>班別の進行状況表示を追加する</li>
              <li>Supabase保存に切り替える土台にする</li>
            </ul>
          </div>
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
