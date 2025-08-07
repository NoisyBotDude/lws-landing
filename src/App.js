import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BackgroundGradient from './components/BackgroundGradient';
import Home from './pages/Home';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Router>
      <BackgroundGradient />
      <main className="relative min-h-screen bg-transparent">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </main>
    </Router>
  );
}

export default App;
