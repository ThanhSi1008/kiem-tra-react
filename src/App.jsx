import { BrowserRouter as Router } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './App.css'

// Components
import Header from './components/Header'
import HomeContent from './components/HomeContent'
import Footer from './components/Footer'
import NotificationPopup from './components/NotificationPopup'

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <HomeContent />
        </main>
        <Footer />
        <NotificationPopup />
      </div>
    </Router>
  )
}

export default App
