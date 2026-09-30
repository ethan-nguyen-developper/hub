import './App.css'

import { BrowserRouter, Link, Routes, Route } from 'react-router-dom'

import Home from './Home.jsx'
import Games from './Games.jsx'
import Mangas from './Mangas.jsx'

function App() {
  return (
    <>
      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link> | {"  "}
          <Link to="/games">Games</Link> | {"  "}
          <Link to="/mangas">Mangas</Link>
        </nav>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/games' element={<Games />} />
          <Route path='/mangas' element={<Mangas />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
