import React, { useState } from 'react'
import ReaderCanvas from './components/ReaderCanvas'
export default function App() {
  const [size, setSize] = useState(18)
  const sample = `MaxVue Prefilter demo
This text renders via canvas. Next step: calibrated prefilter.`
  return (
    <div style={{ padding: 24, background: '#0f0f12', minHeight: '100vh', color: '#cae4ff', fontFamily: 'system-ui' }}>
      <h1 style={{ marginBottom: 12 }}>MaxVue Prefilter – Scaffold</h1>
      <label>Font size: <input type="range" min={14} max={28} value={size} onChange={e=>setSize(parseInt(e.target.value))} /></label>
      <div style={{ height: 12 }} />
      <ReaderCanvas text={sample} sizePx={size} />
      <p style={{ opacity: 0.7, marginTop: 16 }}>Next: add calibration tasks and the bounded-inverse prefilter.</p>
    </div>
  )
}
