"use client"
import { useEffect, useMemo, useState } from 'react'
import Script from 'next/script'

type SourceMode = 'iframe' | 'ruffle'

export default function GamePage() {
  const [mode, setMode] = useState<SourceMode>('iframe')
  const [ready, setReady] = useState(false)

  const searchParams = useMemo(() => new URLSearchParams(typeof window !== 'undefined' ? window.location.search : ''), [])
  const iframeUrl = searchParams.get('url') || ''
  const defaultIframe = 'https://www.silvergames.com/en/whack-your-computer/iframe'
  const swfPath = searchParams.get('swf') || '/games/whack-your-boss.swf'

  useEffect(() => {
    const m = (searchParams.get('mode') as SourceMode) || 'iframe'
    setMode(m)
  }, [searchParams])

  return (
    <main>
      <header className="site-header">
        <div className="container nav">
          <div className="brand">Whack <span>Your Boss</span></div>
          <nav>
            <a href="/">Home</a>
          </nav>
        </div>
      </header>

      <section className="section hero">
        <div className="container">
          <h1>Play Whack Your Boss (Embed / Local)</h1>
          <p className="muted">This page supports two playback modes: iframe embed (if the source allows embedding) and local Flash playback via Ruffle (requires a legally provided SWF).</p>
          <div className="actions">
            <button className="btn" onClick={() => setMode('iframe')}>Use iframe</button>
            <button className="btn" onClick={() => setMode('ruffle')}>Use Ruffle (SWF)</button>
          </div>
        </div>
      </section>

      <section className="section" id="player">
        <div className="container">
          {mode === 'iframe' ? (
            <div className="card">
              <div className="game-frame" style={{display:'grid', placeItems:'center', overflow:'hidden'}}>
                <iframe
                  src={iframeUrl || defaultIframe}
                  title="Whack Your Boss (iframe)"
                  style={{border:0, width:'100%', height:'100%'}}
                  allow="fullscreen; autoplay;"
                  sandbox="allow-scripts allow-same-origin allow-forms allow-pointer-lock allow-popups"
                />
              </div>
              <p className="muted" style={{marginTop:12}}>
                If the frame remains blank, the source likely blocks embedding with security headers (X-Frame-Options/CSP). In that case, switch to the Ruffle mode with a local SWF.
              </p>
              <p className="muted">Tip: You can pass a custom URL via <code>?mode=iframe&url=...</code>.</p>
            </div>
          ) : (
            <div className="card">
              <Script src="https://unpkg.com/@ruffle-rs/ruffle@0.1.0-nightly.2024.12.08/dist/ruffle.js" onLoad={() => setReady(true)} />
              <div className="game-frame" id="ruffle-container" style={{display:'grid', placeItems:'center'}}>
                {!ready && <span className="muted">Loading Ruffle…</span>}
              </div>
              <p className="muted" style={{marginTop:12}}>
                Place your legally obtained SWF at <code>/public/games/whack-your-boss.swf</code>, or provide a custom path via <code>?mode=ruffle&swf=/games/your.swf</code>.
              </p>
              <Script id="init-ruffle">
                {`
                  window.addEventListener('load', function(){
                    const container = document.getElementById('ruffle-container');
                    if (!container || !window.RufflePlayer) return;
                    const r = window.RufflePlayer.newest();
                    const player = r.createPlayer();
                    container.innerHTML = '';
                    container.appendChild(player);
                    player.style.width = '100%';
                    player.style.height = '100%';
                    player.load(${JSON.stringify(swfPath)});
                  });
                `}
              </Script>
            </div>
          )}

          <div className="card" style={{marginTop:16}}>
            <h3>Embedding guidance and fair use notice</h3>
            <p className="muted">
              Some sites (e.g., portals similar to the NuMuKi page
              referenced in our research: https://www.numuki.com/game/whack-your-boss/) may block
              third-party embedding for security or licensing reasons. If embedding fails, use the
              local Ruffle mode with a SWF you are licensed to distribute.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}

declare global {
  interface Window { RufflePlayer: any }
}


