import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useWallet } from './hooks/useWallet';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import PlannerPage from './pages/PlannerPage';
import AssistantPage from './pages/AssistantPage';
import './index.css';

function App() {
  const wallet = useWallet();

  return (
    <BrowserRouter>
      <Navbar wallet={wallet} />
      <Routes>
        <Route path="/" element={<HomePage wallet={wallet} />} />
        <Route path="/about" element={<AboutPage wallet={wallet} />} />
        <Route path="/planner" element={<PlannerPage wallet={wallet} />} />
        <Route path="/assistant" element={<AssistantPage wallet={wallet} />} />
        {/* Catch-all → Home */}
        <Route path="*" element={<HomePage wallet={wallet} />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
