'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { supabase } from '../../../lib/supabase/client'

const checkpoints = [
  {
    id: '1',
    name: '津田沼キャンパス出発',
    segment: '出発',
    note: 'スタート地点',
  },
  {
    id: '2',
    name: '歩道橋下',
    segment: '序盤',
    note: '安全確認ポイント',
  },
  {
    id: '3',
    name: '富士そば前',
    segment: '序盤',
    note: '通過確認',
  },
  {
    id: '4',
    name: '第1休憩所出発',
    segment: '中盤',
    note: '再出発確認',
  },
  {
    id: '5',
    name: 'ベイシア佐倉店前',
    segment: '中盤',
    note: '進行確認',
  },
  {
    id: '6',
    name: '第2休憩所到着',
    segment: '後半',
    note: '到着報告地点',
  },
  {
    id: '7',
    name: 'Sun Lucky周辺',
    segment: '終盤',
    note: '成田市内進入後',
  },
  {
    id: '8',
    name: '京成成田駅東口ロータリー周辺',
    segment: '終盤',
    note: 'ゴール直前',
  },
]

type LatestRecord = {
  checkpoint_id: string
  actual_time: string | null
  status: string | null
  memo: string | null
  updated_by: string | null
  updated_at: string | null
}

function formatDateTime(value: string | null | undefined) {
  if (!value) return '未更新'
  return new Date(value).toLocaleString('ja-JP')
}

function getStatusColor(status?: string | null) {
  if (status === '正常') return '#16a34a'
  if (status === '未確認') return '#f59e0b'
  if (status === '遅れ') return '#ef4444'
  return '#475569'
}

export default function Pagee() {
  const [latestMap, setLatestMap] = useState<Record<string, LatestRecord>>({})
  const [loading, setLoading] = useState(true)
  const [message, setMessage] = useState('')

  useEffect(() => {
    const fetchLatestRecords = async () => {
      setLoading(true)
      setMessage('')

      const { data, error } = await supabase
        .from('checkpoint_latest')
        .select('checkpoint_id, actual_time, status, memo, updated_by, updated_at')

      if (error) {
        setMessage(`読込エラー: ${error.message}`)
        setLoading(false)
        return
      }

      const map: Record<string, LatestRecord> = {}

      for (const row of data ?? []) {
        map[row.checkpoint_id] = row
      }

      setLatestMap(map)
      setLoading(false)
    }

    fetchLatestRecords()
  }, [])

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
            Next.js プレビュー版 / チェックポイント一覧
          </p>

          <h1
            style={{
              margin: '0 0 12px 0',
              fontSize: '32px',
              lineHeight: 1.3,
              fontWeight: 800,
            }}
          >
            チェックポイント一覧
          </h1>

          <p
            style={{
              margin: '0 0 20px 0',
              fontSize: '16px',
              color: '#cbd5e1',
              lineHeight: 1.7,
            }}
          >
            最新保存データを反映したチェックポイント一覧です。
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
            boxShadow: '0 8px 24px rgba(0,0,0,0.25)',
          }}
        >
          <h2
            style={{
              margin: '0 0 20px 0',
              fontSize: '24px',
              fontWeight: 800,
            }}
          >
            一覧
          </h2>

          {loading ? (
            <p style={{ margin: '0 0 16px 0', color: '#cbd5e1' }}>
              保存済みデータを読み込み中です...
            </p>
          ) : null}

          {message ? (
            <p
              style={{
                margin: '0 0 16px 0',
                color: '#fca5a5',
                fontWeight: 700,
              }}
            >
              {message}
            </p>
          ) : null}

          <div
            style={{
              display: 'grid',
              gap: '16px',
            }}
          >
            {checkpoints.map((checkpoint) => {
              const latest = latestMap[checkpoint.id]

              return (
                <div
                  key={checkpoint.id}
                  style={{
                    background: '#1e293b',
                    border: '1px solid #334155',
                    borderRadius: '18px',
                    padding: '20px',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      gap: '12px',
                      flexWrap: 'wrap',
                      marginBottom: '10px',
                    }}
                  >
                    <p
                      style={{
                        margin: 0,
                        fontSize: '13px',
                        color: '#94a3b8',
                      }}
                    >
                      チェックポイント {checkpoint.id}
                    </p>

                    <span
                      style={{
                        display: 'inline-block',
                        background: '#334155',
                        color: '#e2e8f0',
                        padding: '6px 10px',
                        borderRadius: '999px',
                        fontSize: '12px',
                        fontWeight: 700,
                      }}
                    >
                      {checkpoint.segment}
                    </span>
                  </div>

                  <h3
                    style={{
                      margin: '0 0 10px 0',
                      fontSize: '28px',
                      fontWeight: 800,
                      color: '#f8fafc',
                    }}
                  >
                    {checkpoint.name}
                  </h3>

                  <p
                    style={{
                      margin: '0 0 16px 0',
                      color: '#cbd5e1',
                      lineHeight: 1.7,
                      fontSize: '15px',
                    }}
                  >
                    {checkpoint.note}
                  </p>

                  <div
                    style={{
                      display: 'grid',
                      gap: '10px',
                      marginBottom: '16px',
                    }}
                  >
                    <InfoRow
                      label="実績時刻"
                      value={latest?.actual_time || '未入力'}
                    />
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        gap: '12px',
                        padding: '12px 14px',
                        background: '#0f172a',
                        borderRadius: '12px',
                        border: '1px solid #334155',
                        flexWrap: 'wrap',
                      }}
                    >
                      <span style={{ color: '#94a3b8', fontWeight: 600 }}>
                        状態
                      </span>
                      <span
                        style={{
                          display: 'inline-block',
                          background: getStatusColor(latest?.status),
                          color: '#ffffff',
                          padding: '6px 10px',
                          borderRadius: '999px',
                          fontSize: '12px',
                          fontWeight: 700,
                        }}
                      >
                        {latest?.status || '未確認'}
                      </span>
                    </div>
                    <InfoRow
                      label="最終更新"
                      value={formatDateTime(latest?.updated_at)}
                    />
                    <InfoRow
                      label="更新者"
                      value={latest?.updated_by || '未設定'}
                    />
                  </div>

                  <Link
                    href={`/next-preview/checkpoints/${checkpoint.id}`}
                    style={{
                      display: 'inline-block',
                      background: '#334155',
                      color: '#ffffff',
                      padding: '10px 14px',
                      borderRadius: '10px',
                      fontWeight: 700,
                      textDecoration: 'none',
                    }}
                  >
                    詳細を見る
                  </Link>
                </div>
              )
            })}
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
        padding: '12px 14px',
        background: '#0f172a',
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


