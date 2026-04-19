import { ImageResponse } from 'next/og'
import { NextRequest } from 'next/server'

export const runtime = 'edge'

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const title = searchParams.get('title') || 'BangladeshAI.org'
  const category = searchParams.get('category') || ''
  const readTime = searchParams.get('readTime') || ''

  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          background: '#1A2332',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '0',
          fontFamily: 'system-ui, -apple-system, sans-serif',
          position: 'relative',
        }}
      >
        {/* Top accent bar */}
        <div
          style={{
            width: '100%',
            height: '6px',
            background: 'linear-gradient(90deg, #006A4E 50%, #E8432A 50%)',
            display: 'flex',
          }}
        />

        {/* Main content */}
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '60px 80px',
          }}
        >
          {/* Logo row */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              marginBottom: '40px',
            }}
          >
            {/* Flag circle */}
            <div
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                background: '#006A4E',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '3px solid rgba(255,255,255,0.2)',
              }}
            >
              <div
                style={{
                  width: '18px',
                  height: '18px',
                  borderRadius: '50%',
                  background: '#E8432A',
                  display: 'flex',
                }}
              />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span
                style={{
                  fontSize: '22px',
                  fontWeight: '800',
                  color: '#ffffff',
                  letterSpacing: '-0.5px',
                }}
              >
                Bangladesh<span style={{ color: '#006A4E' }}>AI</span>.org
              </span>
              <span style={{ fontSize: '12px', color: '#94a3b8', letterSpacing: '2px', textTransform: 'uppercase' }}>
                Intelligence Builds Nations
              </span>
            </div>
          </div>

          {/* Category badge */}
          {category && (
            <div
              style={{
                display: 'flex',
                marginBottom: '20px',
              }}
            >
              <span
                style={{
                  background: '#0F4C81',
                  color: '#93c5fd',
                  padding: '6px 16px',
                  borderRadius: '999px',
                  fontSize: '14px',
                  fontWeight: '700',
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                  border: '1px solid rgba(147,197,253,0.2)',
                }}
              >
                {category}
              </span>
            </div>
          )}

          {/* Title */}
          <div
            style={{
              fontSize: title.length > 60 ? '42px' : '52px',
              fontWeight: '800',
              color: '#ffffff',
              lineHeight: '1.2',
              maxWidth: '900px',
              letterSpacing: '-1px',
            }}
          >
            {title}
          </div>

          {/* Meta row */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              marginTop: '32px',
            }}
          >
            <div
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                background: '#006A4E',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <span style={{ color: 'white', fontWeight: '800', fontSize: '12px' }}>EH</span>
            </div>
            <span style={{ color: '#94a3b8', fontSize: '18px' }}>Emon Hossain</span>
            {readTime && (
              <>
                <span style={{ color: '#4b5563', fontSize: '18px' }}>·</span>
                <span style={{ color: '#94a3b8', fontSize: '18px' }}>{readTime} min read</span>
              </>
            )}
          </div>
        </div>

        {/* Score badge - top right */}
        <div
          style={{
            position: 'absolute',
            top: '50px',
            right: '80px',
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '12px',
            padding: '16px 24px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <span style={{ color: '#006A4E', fontSize: '28px', fontWeight: '800' }}>47.12</span>
          <span style={{ color: '#94a3b8', fontSize: '11px', letterSpacing: '1px', textTransform: 'uppercase' }}>
            AI Readiness
          </span>
          <span style={{ color: '#64748b', fontSize: '11px' }}>Rank 80/188</span>
        </div>

        {/* Bottom accent bar — BD flag colors */}
        <div
          style={{
            width: '100%',
            height: '8px',
            background: 'linear-gradient(90deg, #006A4E 60%, #E8432A 60%)',
            display: 'flex',
          }}
        />
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
