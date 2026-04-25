import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Ecosystem from './components/Ecosystem';
import Departments from './components/Departments';
import TalentPipeline from './components/TalentPipeline';
import BusinessModel from './components/BusinessModel';
import EquityModel from './components/EquityModel';
import Team from './components/Team';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-black text-white min-h-screen" style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Ecosystem />
        <Departments />
        <TalentPipeline />
        <BusinessModel />
        <EquityModel />
        <Team />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
