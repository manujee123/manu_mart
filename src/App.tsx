import { useState } from 'react'
import martlogo from './assets/manu.jpeg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={martlogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>ಮನು ಮಾರ್ಟ್</h1>
      <div className="card">
        <a href="https://www.jiomart.com/?tab=groceries" >
          <button >
            click
          </button>
        </a>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the click botton learn to more
      </p>
    </>
  )
}

export default App
