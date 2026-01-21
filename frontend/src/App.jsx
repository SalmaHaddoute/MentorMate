

import './App.css'
import AccompagnantListWithStatus from './components/accompagnants/AccompagnantListWithStatus'
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
          <AccompagnantListWithStatus />
        </div>
      </main>
      <Footer />
    </>
  )
}

export default App
