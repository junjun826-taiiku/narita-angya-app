'use client'

import Link from 'next/link'

const sections = [
  {
    title: 'チェックポイント一覧',
    description: '各チェックポイントを一覧で確認し、詳細ページへ進むための画面です。',
    href: '/next-preview/checkpoints',
    color: '#2563eb',
    buttonLabel: 'チェックポイント一覧へ',
  },
  {
    title: '行程表',
    description: '出発から到着までの流れを時系列で確認するための画面です。',
    href: '/next-preview/itinerary',
    color: '#0f766e',
    buttonLabel: '行程表へ',
  },
  {
    title: '履歴',
    description: '誰がいつ何を更新したかを確認するための画面です。',
    href: '/next-preview/history',
    color: '#7c3aed',
    buttonLabel: '履歴へ',
  },
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
            今の公開版を壊さずに、画面を1つずつ Next.js 化していくための確認用トップページです。
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
              まずはチェックポイント一覧へ
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
            <li>Next.js 側の各画面が公開URLで見えるか</li>
            <li>今の HTML 版を壊さずに共存できるか</li>
            <li>今後の Supabase 連携前の画面分割の土台になるか</li>
          </ul>
        </section>

        <section
          style={{
            display: 'grid',
            gap: '16px',
          }}
        >
          {sections.map((section) => (
            <div
              key={section.href}
              style={{
                background: '#111827',
                border: '1px solid #1f2937',
                borderRadius: '20px',
                padding: '24px',
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
                  marginBottom: '14px',
                }}
              >
                <div>
                  <p
                    style={{
                      margin: '0 0 8px 0',
                      fontSize: '13px',
                      color: '#94a3b8',
                    }}
                  >
                    Next.js化済み導線
                  </p>

                  <h3
                    style={{
                      margin: 0,
                      fontSize: '28px',
                      fontWeight: 800,
                      color: '#f8fafc',
                    }}
                  >
                    {section.title}
                  </h3>
                </div>

                <span
                  style={{
                    display: 'inline-block',
                    background: section.color,
                    color: '#ffffff',
                    padding: '6px 10px',
                    borderRadius: '999px',
                    fontSize: '12px',
                    fontWeight: 700,
                  }}
                >
                  Preview
                </span>
              </div>

              <p
                style={{
                  margin: '0 0 18px 0',
                  color: '#cbd5e1',
                  lineHeight: 1.8,
                  fontSize: '16px',
                }}
              >
                {section.description}
              </p>

              <Link
                href={section.href}
                style={{
                  display: 'inline-block',
                  background: section.color,
                  color: '#ffffff',
                  padding: '12px 18px',
                  borderRadius: '12px',
                  fontWeight: 700,
                  textDecoration: 'none',
                }}
              >
                {section.buttonLabel}
              </Link>
            </div>
          ))}
        </section>
      </div>
    </main>
  )
}



