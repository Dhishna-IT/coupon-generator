import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Code from './Code'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/:code" element={<Code />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
