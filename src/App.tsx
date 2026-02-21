import { useState } from 'react'
import applogo from './assets/image.png'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      
        <a href="https://www.cardekho.com/" target="_blank">
          <img src={applogo} className="logo react" alt="React log" height="4000px" width="200px" />
        </a>
      </div>
      <h1>Manu mart</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the organic grocary logos to learn more
      </p>
    </>
  )
}

export default App
