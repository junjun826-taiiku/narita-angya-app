'use client'

import Link from 'next/link'

const checkpoints = [
  { id: 1, name: '津田沼キャンパス出発' },
  { id: 2, name: '歩道橋下' },
  { id: 3, name: '富士そば前' },
  { id: 4, name: '第1休憩所出発' },
  { id: 5, name: 'ベイシア佐倉店前' },
  { id: 6, name: '第2休憩所到着' },
  { id: 7, name: 'Sun Lucky周辺' },
  { id: 8, name: '京成成田駅東口ロータリー周辺' },
]

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
            Next.js プレビュー版
          </p>

          <h1
            style={{
              margin: '0 0 12px 0',
              fontSize: '36px',
              lineHeight: 1.3,
              fontWeight: 800,
            }}
          >
            成田山詣行脚 進行管理アプリ
          </h1>

          <p
            style={{
              margin: '0 0 20px 0',
              fontSize: '16px',
              color: '#cbd5e1',
              lineHeight: 1.7,
            }}
          >
            今の公開版を壊さずに、画面を1つずつ Next.js 化していくための確認用ページです。
          </p>

          <div
            style={{
              display: 'flex',
              gap: '12px',
              flexWrap: 'wrap',
            }}
          >
            <Link
              href="/narita.html"
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
              現在のHTML版を開く
            </Link>

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
          Next.js版チェックポイント一覧へ
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
  Next.js版行程表へ
</Link>
<Link
  href="/next-preview/history"
  style={{
    display: 'inline-block',
    padding: '12px 18px',
    borderRadius: '12px',
    background: '#7c3aed',
    color: '#ffffff',
    textDecoration: 'none',
    fontWeight: 700,
  }}
>
  Next.js版履歴へ
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
              fontWeight: 700,
            }}
          >
            このページで確認すること
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
            <li>Next.js 側の新しい画面が公開URLで見えるか</li>
            <li>今の HTML 版を壊さずに共存できるか</li>
            <li>今後の画面分割の土台になるか</li>
          </ul>
        </section>

        <section
          id="checkpoint-list"
          style={{
            background: '#111827',
            border: '1px solid #1f2937',
            borderRadius: '20px',
            padding: '24px',
            boxShadow: '0 8px 24px rgba(0,0,0,0.25)',
            scrollMarginTop: '24px',
          }}
        >
          <h2
            style={{
              margin: '0 0 20px 0',
              fontSize: '28px',
              fontWeight: 800,
            }}
          >
            チェックポイント一覧（仮）
          </h2>

          <div
            style={{
              display: 'grid',
              gap: '16px',
            }}
          >
            {checkpoints.map((checkpoint) => (
              <div
                key={checkpoint.id}
                style={{
                  background: '#1e293b',
                  border: '1px solid #334155',
                  borderRadius: '18px',
                  padding: '20px',
                }}
              >
                <p
                  style={{
                    margin: '0 0 10px 0',
                    fontSize: '13px',
                    color: '#94a3b8',
                  }}
                >
                  チェックポイント {checkpoint.id}
                </p>

                <h3
                  style={{
                    margin: '0 0 14px 0',
                    fontSize: '28px',
                    fontWeight: 800,
                    color: '#f8fafc',
                  }}
                >
                  {checkpoint.name}
                </h3>

                <button
                  type="button"
                  style={{
                    border: 'none',
                    background: '#334155',
                    color: '#ffffff',
                    padding: '10px 14px',
                    borderRadius: '10px',
                    fontWeight: 700,
                    cursor: 'pointer',
                  }}
                >
                  詳細ページは次ステップで作成
                </button>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}



