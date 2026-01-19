

import './App.css'
import AccompagnantList from './components/accompagnants/AccompagnantList'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <AccompagnantList />
      </main>
      <Footer />
    </>
  )
}

export default App
