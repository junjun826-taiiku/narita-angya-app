'use client'

import Link from 'next/link'

export default function NextPreviewHome() {
  const checkpoints = [
    '津田沼キャンパス出発',
    '歩道橋下',
    '富士そば前',
    '第1休憩所出発',
    'ベイシア佐倉店前',
    '第2休憩所到着',
    'Sun Lucky周辺',
    '京成成田駅東口ロータリー周辺',
  ]

  return (
    <main
      style={{
        minHeight: '100vh',
        background: '#0b1220',
        color: '#e8eefc',
        padding: '24px 16px 96px',
        fontFamily:
          '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Hiragino Sans","Yu Gothic UI",sans-serif',
      }}
    >
      <div style={{ maxWidth: 960, margin: '0 auto' }}>
        <div
          style={{
            marginBottom: 16,
            padding: 20,
            borderRadius: 20,
            background: '#111827',
            border: '1px solid #243042',
          }}
        >
          <div style={{ fontSize: 12, color: '#9fb0cc', marginBottom: 8 }}>
            Next.jsプレビュー版
          </div>
          <h1 style={{ margin: 0, fontSize: 28, lineHeight: 1.4 }}>
            成田山詣行脚 進行管理アプリ
          </h1>
          <p style={{ color: '#9fb0cc', marginTop: 10, lineHeight: 1.7 }}>
            今の公開版を壊さずに、画面を1つずつ Next.js 化していくための確認用ページです。
          </p>

          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginTop: 16 }}>
            <Link
              href="/narita.html"
              style={{
                display: 'inline-block',
                padding: '12px 16px',
                borderRadius: 14,
                background: '#243042',
                color: '#fff',
                textDecoration: 'none',
                fontWeight: 700,
              }}
            >
              現在のHTML版を開く
            </Link>

            <Link
              href="/next-preview/checkpoints"
              style={{
                display: 'inline-block',
                padding: '12px 16px',
                borderRadius: 14,
                background: '#2563eb',
                color: '#fff',
                textDecoration: 'none',
                fontWeight: 700,
              }}
            >
              Next.js版チェックポイント一覧へ
            </Link>
          </div>
        </div>

        <div
          style={{
            marginBottom: 16,
            padding: 20,
            borderRadius: 20,
            background: '#111827',
            border: '1px solid #243042',
          }}
        >
          <h2 style={{ marginTop: 0, fontSize: 20 }}>このページで確認すること</h2>
          <ul style={{ color: '#c8d4ea', lineHeight: 1.9, paddingLeft: 20 }}>
            <li>Next.js 側の新しい画面が公開URLで見えるか</li>
            <li>今の HTML 版を壊さずに共存できるか</li>
            <li>今後の画面分割の土台になるか</li>
          </ul>
        </div>

        <div
          style={{
            padding: 20,
            borderRadius: 20,
            background: '#111827',
            border: '1px solid #243042',
          }}
        >
          <h2 style={{ marginTop: 0, fontSize: 20 }}>チェックポイント一覧（仮）</h2>

          <div style={{ display: 'grid', gap: 12 }}>
            {checkpoints.map((name, index) => (
              <div
                key={name}
                style={{
                  padding: 16,
                  borderRadius: 16,
                  background: '#172033',
                  border: '1px solid #243042',
                }}
              >
                <div style={{ fontSize: 12, color: '#9fb0cc', marginBottom: 6 }}>
                  チェックポイント {index + 1}
                </div>
                <div style={{ fontSize: 18, fontWeight: 800 }}>{name}</div>
                <div style={{ marginTop: 10 }}>
                  <span
                    style={{
                      display: 'inline-block',
                      padding: '6px 10px',
                      borderRadius: 999,
                      background: '#1d2840',
                      color: '#cfe0ff',
                      fontSize: 12,
                      fontWeight: 700,
                    }}
                  >
                    詳細ページは次ステップで作成
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}


