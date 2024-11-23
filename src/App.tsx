import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { CatsSection } from './components/CatsSection';
import { PassionSection } from './components/PassionSection';
import { VideosSection } from './components/VideosSection';
import { SocialLinks } from './components/SocialLinks';
import { Footer } from './components/Footer';
import { Programming } from './components/Programming';
import { Cucumbers } from './components/Cucumbers';

function App() {
  return (
    <Router>
      <Routes>
        {/* Ruta principal con Header y Footer */}
        <Route
          path="/"
          element={
            <div className="min-h-screen bg-gradient-to-b from-violet-900 to-violet-700 text-white">
              <Header />
              <main>
                <CatsSection />
                <PassionSection />
                <VideosSection />
                <SocialLinks />
              </main>
              <Footer />
            </div>
          }
        />
        
        {/* Rutas específicas sin Header y Footer */}
        <Route path="/programming" element={<Programming />} />
        <Route path="/cucumbers" element={<Cucumbers />} />
      </Routes>
    </Router>
  );
}

export default App;
