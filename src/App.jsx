import React from 'react';
import {HashRouter as Router,Routes,Route} from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

// Pages
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Reviews from './pages/Reviews';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';

// Service Pages
import BoilerInstallation from './pages/services/BoilerInstallation';
import BoilerServicing from './pages/services/BoilerServicing';
import BoilerRepair from './pages/services/BoilerRepair';
import PlumbingRepairs from './pages/services/PlumbingRepairs';
import PowerFlushing from './pages/services/PowerFlushing';
import ToiletRepairs from './pages/services/ToiletRepairs';
import CentralHeating from './pages/services/CentralHeating';
import RadiatorServices from './pages/services/RadiatorServices';
import HeatingControls from './pages/services/HeatingControls';
import TapServices from './pages/services/TapServices';
import ShowerServices from './pages/services/ShowerServices';
import OutdoorTaps from './pages/services/OutdoorTaps';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="App">
          <Header />
          <main className="pt-20"> {/* Reduced from pt-32 to pt-20 */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/about" element={<About />} />
              <Route path="/reviews" element={<Reviews />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/contact" element={<Contact />} />
              
              {/* Priority Service Pages */}
              <Route path="/services/boiler-installation" element={<BoilerInstallation />} />
              <Route path="/services/boiler-servicing" element={<BoilerServicing />} />
              <Route path="/services/boiler-repair" element={<BoilerRepair />} />
              <Route path="/services/plumbing-repairs" element={<PlumbingRepairs />} />
              <Route path="/services/power-flushing" element={<PowerFlushing />} />
              <Route path="/services/toilet-repairs" element={<ToiletRepairs />} />
              
              {/* Secondary Service Pages */}
              <Route path="/services/central-heating" element={<CentralHeating />} />
              <Route path="/services/radiator-services" element={<RadiatorServices />} />
              <Route path="/services/heating-controls" element={<HeatingControls />} />
              <Route path="/services/tap-services" element={<TapServices />} />
              <Route path="/services/shower-services" element={<ShowerServices />} />
              <Route path="/services/outdoor-taps" element={<OutdoorTaps />} />
            </Routes>
          </main>
          <Footer />
          <WhatsAppButton />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;