import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Whack Your Boss — Play Online, Guides, Endings, and Tips',
  description: 'Whack your boss landing page: play online, learn controls, read endings list, explore similar stress relief games, and get SEO-friendly guides and FAQs.',
}

export default function Page() {
  return (
    <main>
      <header className="site-header">
        <div className="container nav">
          <div className="brand">Whack <span>Your Boss</span></div>
          <nav>
            <a href="#play">Play</a>
          </nav>
        </div>
      </header>

      <section className="hero section" id="hero">
        <div className="container">
          <h1>Whack Your Boss: play online </h1>
          
        </div>
      </section>

      <section className="section" id="play">
        <div className="container">
          <div className="card">
            <div className="game-frame" role="region" aria-label="Embedded game">
              <iframe
                src="https://www.silvergames.com/en/whack-your-computer/iframe"
                title="Play - Embedded"
                style={{border:0, width:'100%', height:'100%'}}
                allow="fullscreen; autoplay;"
                sandbox="allow-scripts allow-same-origin allow-forms allow-pointer-lock allow-popups"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="how">
        <div className="container">
          <h2>How to play whack your boss</h2>
          <div className="grid" style={{gridTemplateColumns:'repeat(2, minmax(0,1fr))'}}>
            <div className="card">
              <h3>Controls</h3>
              <ul>
                <li>Mouse/tap: interact with objects around the office scene</li>
                <li>Space/enter: quickly replay a scene when available</li>
                <li>F: toggle fullscreen for whack your boss</li>
                <li>M: mute/unmute background sounds</li>
              </ul>
            </div>
            <div className="card">
              <h3>Quick tips</h3>
              <ul>
                <li>Scan the environment slowly; many tiny objects hide unique endings</li>
                <li>Replay from the beginning to unlock missed endings efficiently</li>
                <li>Use fullscreen to spot subtle highlights in whack your boss</li>
                <li>Adjust volume; some endings come with loud effects</li>
              </ul>
            </div>
          </div>
          <p style={{marginTop:18}}>
            The core idea behind whack your boss is simple: interact with items in an office
            environment to trigger slapstick sequences that parody workplace frustration. Each
            discovery rewards curiosity, and each animation celebrates a small victory over stress.
            Because the controls are minimal, the fun of whack your boss comes from observing,
            trying new combinations, and laughing at the outcomes. The more you experiment, the
            more the page reveals new routes and comedic variations.
          </p>
        </div>
      </section>

      <section className="section" id="endings">
        <div className="container">
          <h2>All endings checklist for whack your boss</h2>
          <p>
            Below is a narrative-style checklist to help you track progress without spoilers. It
            highlights categories so you can confirm what you have discovered in whack your boss and
            what remains. Use it as a gentle guide, not a rigid walkthrough.
          </p>
          <div className="cards">
            <div className="card"><strong>Desk essentials</strong><br/>Stationery, mugs, and everyday tools can lead to unexpectedly silly outcomes.</div>
            <div className="card"><strong>Digital chaos</strong><br/>Keyboards, monitors, and wires surprise with timing-driven animations.</div>
            <div className="card"><strong>Furniture flips</strong><br/>Chairs, drawers, cabinets, and dividers hide slapstick variations.</div>
            <div className="card"><strong>Wall and decor</strong><br/>Frames, clocks, and fixtures; subtle hotspots reward patience.</div>
            <div className="card"><strong>Hidden props</strong><br/>Small, hard-to-spot items elevate the best punchlines in whack your boss.</div>
            <div className="card"><strong>Wildcard events</strong><br/>Rare sequences appear after replays or under specific conditions.</div>
          </div>
          <p style={{marginTop:16}}>
            Keep notes as you go. When replaying whack your boss, cycle through zones in a set
            pattern so you avoid repeating the same interactions. If a category feels exhausted,
            revisit it later with fresh eyes. The joy of whack your boss is stumbling on endings in
            an organic way that matches your curiosity and sense of humor.
          </p>
        </div>
      </section>
      
    </main>
  )
}


