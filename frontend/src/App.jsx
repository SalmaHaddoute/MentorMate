

import './App.css'
import AccompagnantList from './components/accompagnants/AccompagnantList'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import BonjourSection from './components/dashboard/BonjourSection'
import AccompagnementCard from './components/dashboard/AccompagnementCard'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <div className="container">
          <BonjourSection />
          <AccompagnementCard />
          <AccompagnantList />
        </div>
      </main>
      <Footer />
    </>
  )
}

export default App
