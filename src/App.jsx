import { useMemo, useState } from 'react'
import './App.css'

export default function App() {
  const [count, setCount] = useState(0)
  const doubled = useMemo(() => count * 2, [count])

  return (
    <div className="page">
      <header className="header">
        <h1>React + Vite</h1>
        <p>Repo này để bạn luyện Git workflow kiểu doanh nghiệp (branch → PR → review → merge).</p>
      </header>

      <main className="card">
        <div className="row">
          <button type="button" onClick={() => setCount((c) => c + 1)}>
            count = {count}
          </button>
          <button type="button" className="secondary" onClick={() => setCount(0)}>
            reset
          </button>
        </div>
        <p className="muted">doubled = {doubled}</p>
        <p className="hint">Sửa file này rồi tạo commit/PR để luyện.</p>
      </main>
    </div>
  )
}


