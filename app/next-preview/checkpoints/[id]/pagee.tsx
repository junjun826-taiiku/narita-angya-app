'use client'

import Link from 'next/link'
import { useEffect, useMemo, useState } from 'react'
import { supabase } from '../../../../lib/supabase/client'

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
    detail: '行脚開始地点です。出発時刻と班の動き出しを確認します。',
  },
  {
    id: '2',
    name: '歩道橋下',
    segment: '序盤',
    note: '安全確認ポイント',
    plannedTime: '20:10',
    detail: '序盤の安全確認ポイントです。通過状況の確認に使います。',
  },
  {
    id: '3',
    name: '富士そば前',
    segment: '序盤',
    note: '通過確認',
    plannedTime: '20:40',
    detail: '班ごとの通過時刻を確認するポイントです。',
  },
  {
    id: '4',
    name: '第1休憩所出発',
    segment: '中盤',
    note: '再出発確認',
    plannedTime: '22:00',
    detail: '休憩後の再出発状況を把握する地点です。',
  },
  {
    id: '5',
    name: 'ベイシア佐倉店前',
    segment: '中盤',
    note: '進行確認',
    plannedTime: '00:10',
    detail: '進行の遅れやばらつきを確認するための地点です。',
  },
  {
    id: '6',
    name: '第2休憩所到着',
    segment: '後半',
    note: '到着報告地点',
    plannedTime: '02:00',
    detail: '後半戦前の重要な到着確認ポイントです。',
  },
  {
    id: '7',
    name: 'Sun Lucky周辺',
    segment: '終盤',
    note: '成田市内進入後',
    plannedTime: '04:40',
    detail: '終盤の位置確認と進行状況確認に使います。',
  },
  {
    id: '8',
    name: '京成成田駅東口ロータリー周辺',
    segment: '終盤',
    note: 'ゴール直前',
    plannedTime: '05:30',
    detail: 'ゴール直前の最終確認地点です。',
  },
]

function formatDate(value: string | null | undefined) {
  if (!value) return '未保存'
  return new Date(value).toLocaleString('ja-JP')
}

export default function Pagee({ id }: PageeProps) {
  const checkpoint = useMemo(
    () => checkpoints.find((item) => item.id === id),
    [id]
  )

  const [actualTime, setActualTime] = useState('')
  const [status, setStatus] = useState('未確認')
  const [memo, setMemo] = useState('')
  const [updatedBy, setUpdatedBy] = useState('行脚担当')
  const [lastSavedAt, setLastSavedAt] = useState('')
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [message, setMessage] = useState('')

  useEffect(() => {
    const loadLatestRecord = async () => {
      if (!checkpoint) {
        setLoading(false)
        return
      }

      setLoading(true)
      setMessage('')

      const { data, error } = await supabase
        .from('checkpoint_records')
        .select('actual_time, status, memo, updated_by, updated_at')
        .eq('checkpoint_id', id)
        .order('updated_at', { ascending: false })
        .limit(1)

      if (error) {
        setMessage(`読込エラー: ${error.message}`)
        setLoading(false)
        return
      }

      const latest = data?.[0]

      if (latest) {
        setActualTime(latest.actual_time ?? '')
        setStatus(latest.status ?? '未確認')
        setMemo(latest.memo ?? '')
        setUpdatedBy(latest.updated_by ?? '行脚担当')
        setLastSavedAt(formatDate(latest.updated_at))
      } else {
        setActualTime('')
        setStatus('未確認')
        setMemo('')
        setUpdatedBy('行脚担当')
        setLastSavedAt('')
      }

      setLoading(false)
    }

    loadLatestRecord()
  }, [id, checkpoint])

  const handleSave = async () => {
    if (!checkpoint) return

    setSaving(true)
    setMessage('')

    const payload = {
      checkpoint_id: checkpoint.id,
      checkpoint_name: checkpoint.name,
      actual_time: actualTime || null,
      status,
      memo: memo || null,
      updated_by: updatedBy || '未設定',
      updated_at: new Date().toISOString(),
    }

    const { error } = await supabase.from('checkpoint_records').insert([payload])

    if (error) {
      setMessage(`保存エラー: ${error.message}`)
      setSaving(false)
      return
    }

    setLastSavedAt(new Date().toLocaleString('ja-JP'))
    setMessage('保存しました')
    setSaving(false)
  }

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
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          <section
            style={{
              background: '#111827',
              border: '1px solid #1f2937',
              borderRadius: '20px',
              padding: '24px',
              boxShadow: '0 8px 24px rgba(0,0,0,0.25)',
            }}
          >
            <h1 style={{ margin: '0 0 12px 0', fontSize: '32px', fontWeight: 800 }}>
              該当するチェックポイントが見つかりません
            </h1>

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
            </div>
          </section>
        </div>
      </main>
    )
  }

  const statusColor =
    status === '正常'
      ? '#16a34a'
      : status === '未確認'
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
            この画面で実績時刻・状態・メモを入力して保存できます。
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
              <InfoRow label="予定時刻" value={checkpoint.plannedTime} />
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
              保存フォーム
            </h2>

            {loading ? (
              <p style={{ margin: 0, color: '#cbd5e1' }}>保存済みデータを読み込み中です...</p>
            ) : (
              <div style={{ display: 'grid', gap: '16px' }}>
                <Field label="実績時刻">
                  <input
                    type="time"
                    value={actualTime}
                    onChange={(e) => setActualTime(e.target.value)}
                    style={inputStyle}
                  />
                </Field>

                <Field label="状態">
                  <select
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    style={inputStyle}
                  >
                    <option value="未確認">未確認</option>
                    <option value="正常">正常</option>
                    <option value="遅れ">遅れ</option>
                  </select>
                </Field>

                <Field label="更新者">
                  <input
                    type="text"
                    value={updatedBy}
                    onChange={(e) => setUpdatedBy(e.target.value)}
                    placeholder="例: 行脚担当"
                    style={inputStyle}
                  />
                </Field>

                <Field label="メモ">
                  <textarea
                    value={memo}
                    onChange={(e) => setMemo(e.target.value)}
                    placeholder="自由記述"
                    rows={4}
                    style={{
                      ...inputStyle,
                      resize: 'vertical',
                      minHeight: '110px',
                    }}
                  />
                </Field>

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
                  <span style={{ color: '#94a3b8', fontWeight: 600 }}>現在の状態</span>
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
                    {status}
                  </span>
                </div>

                <div
                  style={{
                    display: 'flex',
                    gap: '12px',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                  }}
                >
                  <button
                    type="button"
                    onClick={handleSave}
                    disabled={saving}
                    style={{
                      border: 'none',
                      background: saving ? '#475569' : '#2563eb',
                      color: '#ffffff',
                      padding: '12px 18px',
                      borderRadius: '12px',
                      fontWeight: 700,
                      cursor: saving ? 'not-allowed' : 'pointer',
                    }}
                  >
                    {saving ? '保存中...' : '保存する'}
                  </button>

                  <span style={{ color: '#cbd5e1', fontSize: '14px' }}>
                    最終保存: {lastSavedAt || '未保存'}
                  </span>
                </div>

                {message ? (
                  <p
                    style={{
                      margin: 0,
                      color: message.includes('エラー') ? '#fca5a5' : '#86efac',
                      fontWeight: 700,
                    }}
                  >
                    {message}
                  </p>
                ) : null}
              </div>
            )}
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

function Field({
  label,
  children,
}: {
  label: string
  children: React.ReactNode
}) {
  return (
    <label
      style={{
        display: 'grid',
        gap: '8px',
      }}
    >
      <span style={{ color: '#cbd5e1', fontWeight: 700 }}>{label}</span>
      {children}
    </label>
  )
}

const inputStyle: React.CSSProperties = {
  width: '100%',
  background: '#0f172a',
  color: '#f8fafc',
  border: '1px solid #334155',
  borderRadius: '12px',
  padding: '12px 14px',
  fontSize: '16px',
  outline: 'none',
}

