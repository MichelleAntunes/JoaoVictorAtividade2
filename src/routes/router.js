import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "../pages/homePage";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import ImpactosPage from "../pages/ImpactosPage";
import DesafiosPage from "../pages/DesafiosPage";
import ImportanciaPage from "../pages/ImportanciaPage";
import TietePage from "../pages/TietePage";
import AcoesPage from "../pages/AcoesPage";
import ExemplosPage from "../pages/ExemplosPage";

export const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/impactos" element={<ImpactosPage />} />
        <Route path="/desafios" element={<DesafiosPage />} />
        <Route path="/importancia" element={<ImportanciaPage />} />
        <Route path="/tiete" element={<TietePage />} />
        <Route path="/acoes" element={<AcoesPage />} />
        <Route path="/exemplos" element={<ExemplosPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
