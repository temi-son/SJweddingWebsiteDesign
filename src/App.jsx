import { BrowserRouter as Router, Routes, Route } from 'react-router';
import Home from './pages/Home'
import Navbar from './components/NavBar';


function App() {
  return (
    <Router>

      <Navbar />
      <main className="flex-1 overflow-y-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Proposal" element={<Home />} />
          <Route path="/Events" element={<Home />} />
          <Route path="/Registry" element={<Home />} />
          <Route path="/RSVP" element={<Home />} />

          {/* <Route path="/Proposal" element={<Proposal />}
          <Route path="/Events" element={<Events />} />
            <Route path="/Registry" element={<Registry />} />
            <Route path="/RSVP" element={<Rsvp />} /> */}
        </Routes>
      </main>
      {/* <Footer /> */}

    </Router>
  )
}

export default App
