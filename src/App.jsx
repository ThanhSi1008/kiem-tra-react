import { BrowserRouter as Router } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './App.css'

// Components
import Header from './components/Header'
import Banner from './components/Banner'
import News from './components/News'
import QuickLinks from './components/QuickLinks'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Banner />
          <QuickLinks />
          <News />
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
