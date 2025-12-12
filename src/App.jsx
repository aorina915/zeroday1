import './App.css'
import Header from './components/Header';
import Banner from './components/Banner';
import Services from './components/Services';
import SignUp from './components/SignUp';
import Info from './pages/info.jsx';

import PageTransition from './components/PageTransition';

import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Banner /></PageTransition>} />
        <Route path="/services" element={<PageTransition><Services /></PageTransition>} />
        <Route path="/signup" element={<PageTransition><SignUp /></PageTransition>} />
        <Route path="/info" element={<PageTransition><Info /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <Router>
      <Header />
      <AnimatedRoutes />
    </Router>
  );
}
