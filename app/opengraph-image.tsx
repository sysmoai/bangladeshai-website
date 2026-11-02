import { ImageResponse } from 'next/og'

// Static Open Graph artwork for Cloudflare Pages. No runtime query parameters.
// This is a single generic project image, not proof of research publication.
export const dynamic = 'force-static'

export const alt = 'BangladeshAI.org — Research, Education & Impact';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{
      display: 'flex', flexDirection: 'column', width: '100%', height: '100%',
      background: '#10233B', color: '#FFFFFF', position: 'relative',
      justifyContent: 'center', padding: '76px 86px', fontFamily: 'sans-serif'
    }}>
      <div style={{display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '38px'}}>
        <div style={{display: 'flex', width: '52px', height: '52px', background: '#006A4E',
          borderRadius: '16px', justifyContent:'center', alignItems:'center', fontSize:'27px', fontWeight:700}}>
          AI
        </div>
        <div style={{display:'flex', fontSize:'28px', fontWeight:700, letterSpacing:'-0.5px'}}>BangladeshAI.org</div>
      </div>
      <div style={{display: 'flex', fontSize:'67px', lineHeight:'1.16', fontWeight:800,
        letterSpacing:'-1.8px', maxWidth:'1010px'}}>Intelligence Builds Nations</div>
      <div style={{display:'flex', marginTop:'30px', fontSize:'28px', color:'#C9D5E4'}}>
        Independent AI research · Education · Public-interest impact
      </div>
      <div style={{display:'flex', position:'absolute', bottom:0, left:0, width:'100%', height:'12px',
        background:'linear-gradient(90deg, #006A4E 0%, #006A4E 75%, #E8432A 75%, #E8432A 100%)'}}/>
    </div>,
    size
  )
}
