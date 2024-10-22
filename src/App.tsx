import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "preline/preline";
import { IStaticMethods } from "preline/preline";
import DashboardPage from "./pages/dashboardPage";
import ProductPage from "./pages/dashboard/productPage";
declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
  }
}

const MainApp: React.FC = () => {
  const location = useLocation();
  useEffect(() => {
    window.HSStaticMethods.autoInit();
  }, [location.pathname]);

  return (
    <Routes>
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/dashboard/products" element={<ProductPage />} />
    </Routes>
  );
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <MainApp />
    </BrowserRouter>
  );
};

export default App;
