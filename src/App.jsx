import Nav from './Nav.jsx'
import {Routes, Route } from 'react-router-dom'
import Home from './HomePage.jsx'
import About from './AboutPage.jsx'
import Recipe from './RecipePage.jsx'

function App() {

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/recipes" element={<Recipe />} />
      </Routes>
    </>
  )
}

export default App
