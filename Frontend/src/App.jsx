import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'

import './App.css'
import Registration from './pages/registration'
import Login from './pages/login'

 
function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App
