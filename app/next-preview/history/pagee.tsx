'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { supabase } from '../../../lib/supabase/client'

type HistoryRecord = {
  id?: string
  checkpoint_id: string
  checkpoint_name: string | null
  actual_time: string | null
  status: string | null
  memo: string | null
  updated_by: string | null
  updated_at: string | null
}

function getStatusColor(status?: string | null) {
  if (status === '正常') return '#16a34a'
  if (status === '未確認') return '#f59e0b'
  if (status === '遅れ') return '#ef4444'
  return '#475569'
}

function formatDateTime(value: string | null | undefined) {
  if (!value) return '未更新'
  return new Date(value).toLocaleString('ja-JP')
}

export default function Pagee() {
  const [records, setRecords] = useState<HistoryRecord[]>([])
  const [loading, setLoading] = useState(true)
  const [message, setMessage] = useState('')

  useEffect(() => {
    const fetchHistory = async () => {
      setLoading(true)
      setMessage('')

      const { data, error } = await supabase
        .from('checkpoint_records')
        .select(
          'id, checkpoint_id, checkpoint_name, actual_time, status, memo, updated_by, updated_at'
        )
        .order('updated_at', { ascending: false })

      if (error) {
        setMessage(`読込エラー: ${error.message}`)
        setLoading(false)
        return
      }

      setRecords((data ?? []) as HistoryRecord[])
      setLoading(false)
    }

    fetchHistory()
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
            Supabase に保存されたチェックポイント更新履歴を、新しい順に表示するページです。
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
            <li>誰がいつ何を更新したかを時系列で確認する</li>
            <li>保存された実績時刻・状態・メモの変更を追えるようにする</li>
            <li>後で本格的な監査ログ画面へ広げる土台にする</li>
          </ul>
        </section>

        {loading ? (
          <p style={{ margin: '0 0 16px 0', color: '#cbd5e1' }}>
            履歴データを読み込み中です...
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

        {!loading && !message && records.length === 0 ? (
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
                margin: '0 0 12px 0',
                fontSize: '24px',
                fontWeight: 800,
              }}
            >
              まだ履歴がありません
            </h2>
            <p
              style={{
                margin: 0,
                color: '#cbd5e1',
                lineHeight: 1.8,
              }}
            >
              まずはチェックポイント詳細画面で保存すると、ここに履歴が表示されます。
            </p>
          </section>
        ) : null}

        <section
          style={{
            display: 'grid',
            gap: '16px',
          }}
        >
          {records.map((item, index) => (
            <div
              key={`${item.checkpoint_id}-${item.updated_at ?? index}`}
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
                    履歴 {index + 1}
                  </p>

                  <h3
                    style={{
                      margin: 0,
                      fontSize: '28px',
                      fontWeight: 800,
                      color: '#f8fafc',
                    }}
                  >
                    {formatDateTime(item.updated_at)}
                  </h3>
                </div>

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
                  {item.status || '未確認'}
                </span>
              </div>

              <div
                style={{
                  display: 'grid',
                  gap: '12px',
                }}
              >
                <InfoRow
                  label="チェックポイント"
                  value={item.checkpoint_name || `ID: ${item.checkpoint_id}`}
                />
                <InfoRow label="チェックポイントID" value={item.checkpoint_id} />
                <InfoRow label="実績時刻" value={item.actual_time || '未入力'} />
                <InfoRow label="更新者" value={item.updated_by || '未設定'} />
                <InfoRow label="メモ" value={item.memo || 'なし'} />
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

