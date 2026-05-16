import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Clock, Calendar, CheckCircle2 } from 'lucide-react';
import { phases, revisionSystem, milestones } from '../dsa_roadmap (1).jsx';

export default function App() {
  const [activePhase, setActivePhase] = useState(0);
  const [activeTab, setActiveTab] = useState('plan');
  const [expandedWeek, setExpandedWeek] = useState(0);

  const phase = phases[activePhase];

  return (
    <div className="app-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-title">Roadmap Phases</div>
        <nav>
          {phases.map((p, i) => (
            <button
              key={i}
              className={`nav-item ${activePhase === i ? 'active' : ''}`}
              onClick={() => { setActivePhase(i); setExpandedWeek(0); setActiveTab('plan'); }}
            >
              <div className="nav-item-meta">Phase 0{p.id}</div>
              <div className="nav-item-title">{p.name}</div>
              <div className="nav-item-meta">{p.period}</div>
            </button>
          ))}
        </nav>
        
        <div className="sidebar-title" style={{ marginTop: '48px' }}>Milestones</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {milestones.map((m, i) => (
            <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
              <CheckCircle2 size={16} color={i === 4 ? '#10b981' : 'var(--text-tertiary)'} style={{ marginTop: '2px', flexShrink: 0 }} />
              <div>
                <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)' }}>{m.month}</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>{m.label}</div>
              </div>
            </div>
          ))}
        </div>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <div className="animate-enter" key={activePhase}>
          
          <div className="header-meta">
            <div className="chip"><Calendar size={14} /> {phase.weeks}</div>
            <div className="chip"><Clock size={14} /> {phase.weeklyHours}</div>
          </div>
          
          <h1 className="page-title">{phase.name}</h1>
          <p className="page-description">{phase.goal}</p>

          <div className="tabs">
            {['plan', 'java notes', 'blind spots', 'revision rules'].map(tab => (
              <button 
                key={tab}
                className={`tab ${activeTab === tab ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
                style={{ textTransform: 'capitalize' }}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="tab-content">
            {activeTab === 'plan' && (
              <div className="animate-enter">
                {phase.topics.map((t, i) => (
                  <div key={i} className="week-card">
                    <button 
                      className="week-header"
                      onClick={() => setExpandedWeek(expandedWeek === i ? null : i)}
                    >
                      <div>
                        <span className="week-meta" style={{ marginRight: '16px' }}>{t.week}</span>
                        <span className="week-title">{t.title}</span>
                      </div>
                      {expandedWeek === i ? <ChevronUp size={20} color="var(--text-tertiary)" /> : <ChevronDown size={20} color="var(--text-tertiary)" />}
                    </button>
                    
                    {expandedWeek === i && (
                      <div className="week-content animate-enter">
                        {t.days.map((d, j) => (
                          <div key={j} className="day-item">
                            <div className="day-header">
                              <div>
                                <div className="day-subtitle">{d.day}</div>
                                <div className="day-title">{d.topic}</div>
                              </div>
                              <div style={{ display: 'flex', gap: '8px' }}>
                                <span className="chip" style={{ fontSize: '0.7rem' }}>{d.time}</span>
                                <span className="chip" style={{ fontSize: '0.7rem', background: 'var(--diff-bg)', color: 'var(--diff-color)', borderColor: 'var(--diff-border)' }}>{d.diff}</span>
                              </div>
                            </div>
                            
                            <div className="grid-2">
                              <div>
                                <div className="section-title">Concepts</div>
                                <ul className="styled-list">
                                  {d.subtopics.map((s, k) => <li key={k}>{s}</li>)}
                                </ul>
                              </div>
                              <div>
                                <div className="section-title">Action Items</div>
                                <ul className="styled-list" style={{ marginBottom: '16px' }}>
                                  {d.tasks.map((task, k) => <li key={k}>{task}</li>)}
                                </ul>
                                <div>
                                  {d.leetcode.map((lc, k) => (
                                    <span key={k} className="leetcode-tag">{lc}</span>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'java notes' && (
              <div className="animate-enter">
                <div className="note-card">
                  <h3>Java Patterns for {phase.name}</h3>
                  {phase.javaFocus.map((j, i) => (
                    <div key={i} className="code-block">{j}</div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'blind spots' && (
              <div className="animate-enter">
                <div className="note-card" style={{ borderColor: 'var(--danger-border)', backgroundColor: 'var(--danger-bg)' }}>
                  <h3 style={{ color: 'var(--danger-title)' }}>Common Pitfalls</h3>
                  <ul className="styled-list">
                    {phase.blindSpots.map((b, i) => (
                      <li key={i} style={{ color: 'var(--danger-text)' }}>{b}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {activeTab === 'revision rules' && (
              <div className="animate-enter grid-2">
                <div className="note-card">
                  <h3>Daily (10-15m)</h3>
                  <ul className="styled-list">
                    {revisionSystem.daily.map((r, i) => <li key={i}>{r}</li>)}
                  </ul>
                </div>
                <div className="note-card">
                  <h3>Weekly (Sunday)</h3>
                  <ul className="styled-list">
                    {revisionSystem.weekly.map((r, i) => <li key={i}>{r}</li>)}
                  </ul>
                </div>
                <div className="note-card">
                  <h3>Monthly Checkpoint</h3>
                  <ul className="styled-list">
                    {revisionSystem.monthly.map((r, i) => <li key={i}>{r}</li>)}
                  </ul>
                </div>
                <div className="note-card" style={{ borderColor: 'var(--danger-border)', backgroundColor: 'var(--danger-bg)' }}>
                  <h3 style={{ color: 'var(--danger-title)' }}>Error Log Format</h3>
                  <ul className="styled-list">
                    {revisionSystem.errorLog.map((r, i) => <li key={i} style={{ color: 'var(--danger-text)' }}>{r}</li>)}
                  </ul>
                </div>
              </div>
            )}
          </div>

        </div>
      </main>
    </div>
  );
}
