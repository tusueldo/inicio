import { HashRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import CalculatorPage from "./pages/CalculatorPage";
import NewsPage from "./pages/NewsPage";
import ArticlePage from "./pages/ArticlePage";
import AboutPage from "./pages/AboutPage";
import SalaryCalculatorDetail from "./pages/SalaryCalculatorDetail";
import IRPFCalculatorDetail from "./pages/IRPFCalculatorDetail";
import TaxReturnCalculatorDetail from "./pages/TaxReturnCalculatorDetail";

export default function App() {
  return (
    <HashRouter>
      <div className="min-h-screen bg-slate-950 text-white">
        <Header />
        <Routes>
          <Route path="/" element={<CalculatorPage />} />
          <Route path="/noticias" element={<NewsPage />} />
          <Route path="/noticias/:id" element={<ArticlePage />} />
          <Route path="/sobre-nosotros" element={<AboutPage />} />
          <Route path="/calculadora-sueldo-neto" element={<SalaryCalculatorDetail />} />
          <Route path="/calculadora-irpf-isr" element={<IRPFCalculatorDetail />} />
          <Route path="/calculadora-renta" element={<TaxReturnCalculatorDetail />} />
        </Routes>
        <footer className="border-t border-slate-800 bg-slate-950 py-8 text-center">
          <p className="text-slate-600 text-sm">
            TuSueldo &mdash; Los cálculos son orientativos y no constituyen asesoramiento fiscal
          </p>
        </footer>
      </div>
    </HashRouter>
  );
}
