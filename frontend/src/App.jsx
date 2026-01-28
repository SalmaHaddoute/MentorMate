import AccompagnantsPage from "./pages/AccompagnantsPage.jsx";
import './App-improved.css'
import AccompagnantListWithAvailableBadge from './components/accompagnants/AccompagnantListWithAvailableBadge'
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
          <AccompagnantListWithAvailableBadge />
          <AccompagnantsPage />
        </div>
      </main>
      <Footer />
    </>
  )
}
export default App