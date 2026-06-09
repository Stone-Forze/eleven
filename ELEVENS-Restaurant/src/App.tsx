import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import Menu from './sections/Menu'
import './App.css'

function App() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Menu />
      </main>
      <Footer />
    </>
  )
}

export default App