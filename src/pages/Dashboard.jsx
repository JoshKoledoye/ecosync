import { Link } from 'react-router-dom';

const activities = [
  { icon: '♻', title: 'Plastic collection completed', detail: '12.5 kg · Today, 10:42 AM', points: '+125' },
  { icon: '◉', title: 'Paper picked up', detail: '8 kg · Yesterday, 3:18 PM', points: '+80' },
  { icon: '↗', title: 'EcoPoints redeemed', detail: 'Airtime · Yesterday, 11:06 AM', points: '−500' },
];

function Sidebar() {
  return (
    <aside className="sidebar">
      <Link to="/" className="brand"><span className="brand-mark">e</span> ecosync</Link>
      <div className="nav-label">WORKSPACE</div>
      <nav className="side-nav" aria-label="Main navigation">
        <a className="nav-item active" href="#overview"><span>▦</span> Overview</a>
        <a className="nav-item" href="#activity"><span>↗</span> Activity</a>
        <a className="nav-item" href="#wallet"><span>◈</span> EcoWallet</a>
        <a className="nav-item" href="#community"><span>◎</span> Community</a>
      </nav>
      <div className="sidebar-bottom">
        <div className="help-card"><span className="help-icon">✳</span><strong>Grow greener together</strong><p>Every small action makes a cleaner community.</p></div>
        <Link className="profile-mini" to="/login"><span className="avatar">JD</span><span><strong>Jordan Davis</strong><small>Collector account</small></span><span className="more">···</span></Link>
      </div>
    </aside>
  );
}

export default function Dashboard() {
  return (
    <div className="app-shell">
      <Sidebar />
      <main className="main-content" id="overview">
        <header className="topbar"><div className="mobile-brand"><span className="brand-mark">e</span> ecosync</div><div className="breadcrumb">Workspace <span>/</span> Overview</div><div className="top-actions"><button className="icon-button" aria-label="Notifications">♧<i /></button><span className="avatar top-avatar">JD</span></div></header>
        <div className="page-wrap">
          <section className="welcome-row"><div><div className="eyebrow"><span className="live-dot" /> YOUR COMMUNITY, CLEANER</div><h1>Good morning, Jordan <span>✦</span></h1><p className="subheading">Here’s the impact you’re making this week.</p></div><button className="primary-button" onClick={() => document.getElementById('activity')?.scrollIntoView({ behavior: 'smooth' })}><span>＋</span> Log a collection</button></section>
          <section className="stats-grid" aria-label="Your impact">
            <article className="stat-card points-card"><div className="stat-top"><span>EcoPoints balance</span><span className="stat-icon">✳</span></div><div className="stat-value">2,480 <small>pts</small></div><div className="stat-foot"><span className="trend">↗ 12%</span> vs. last month</div><div className="points-decoration">✳</div></article>
            <article className="stat-card"><div className="stat-top"><span>Waste collected</span><span className="stat-icon pale-green">♻</span></div><div className="stat-value">86.5 <small>kg</small></div><div className="stat-foot"><span className="trend">↗ 8.4%</span> vs. last month</div></article>
            <article className="stat-card"><div className="stat-top"><span>Collections</span><span className="stat-icon pale-yellow">⌖</span></div><div className="stat-value">14</div><div className="stat-foot"><span className="trend">↗ 2</span> this month</div></article>
            <article className="stat-card"><div className="stat-top"><span>Community rank</span><span className="stat-icon pale-purple">♕</span></div><div className="stat-value">#08</div><div className="stat-foot">You’re in the <strong>top 10%</strong></div></article>
          </section>
          <section className="content-grid">
            <article className="panel impact-panel"><div className="panel-heading"><div><h2>Your impact</h2><p>Waste collected over time</p></div><button className="select-button">This week <span>⌄</span></button></div><div className="chart-summary"><strong>32.8 kg</strong><span className="trend">↗ 18.2%</span><small> compared to last week</small></div><div className="chart" role="img" aria-label="Bar chart showing collected waste increasing through the week"><div className="chart-grid"><i /><i /><i /><i /></div><div className="bars">{[['M', 42], ['T', 65], ['W', 48], ['T', 82], ['F', 58], ['S', 100], ['S', 70]].map(([day, height], index) => <div className="bar-column" key={`${day}-${index}`}><div className={`bar ${index === 5 ? 'bar-highlight' : ''}`} style={{ height: `${height}%` }} /><span>{day}</span></div>)}</div></div></article>
            <article className="panel wallet-panel" id="wallet"><div className="panel-heading"><div><h2>EcoWallet</h2><p>Your rewards, ready to use</p></div><span className="wallet-symbol">◈</span></div><div className="wallet-balance"><small>AVAILABLE BALANCE</small><strong>2,480 <span>pts</span></strong><div className="cash-estimate">≈ $24.80 equivalent</div></div><div className="wallet-progress"><div><span>Next reward</span><strong>2,500 pts</strong></div><div className="progress-track"><span /></div><small>20 points to your next reward</small></div><button className="outline-button" onClick={() => alert('Reward redemption will be available soon.')}>Explore rewards <span>→</span></button></article>
          </section>
          <section className="panel activity-panel" id="activity"><div className="panel-heading"><div><h2>Recent activity</h2><p>Your latest contributions to the community</p></div><button className="text-button">View all <span>→</span></button></div><div className="activity-list">{activities.map((item) => <div className="activity-row" key={item.title}><span className="activity-icon">{item.icon}</span><div className="activity-info"><strong>{item.title}</strong><small>{item.detail}</small></div><span className={`activity-points ${item.points.startsWith('−') ? 'spent' : ''}`}>{item.points} pts</span></div>)}</div></section>
          <footer className="page-footer">Making good things happen, one collection at a time <span>✳</span></footer>
        </div>
      </main>
    </div>
  );
}
