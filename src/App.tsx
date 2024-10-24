import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "preline/preline";
import { IStaticMethods } from "preline/preline";
import DashboardPage from "./pages/dashboardPage";
import CreateProduct from "./pages/dashboard/products/createProduct";
import MenuProduct from "./pages/dashboard/products/menuProduct";
import MenuCategory from "./pages/dashboard/products/categories/menuCategory";
import CreateCategory from "./pages/dashboard/products/categories/createCategory";
import { Toaster } from "react-hot-toast";
import UpdateCategory from "./pages/dashboard/products/categories/updateCategory";
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
      <Route path="/dashboard/products">
        <Route index path="" element={<MenuProduct />} />
        <Route path="new" element={<CreateProduct />} />
        <Route path="categories">
          <Route path="" element={<MenuCategory />} />
          <Route path="new" element={<CreateCategory />} />
          <Route path="update/id/:id" element={<UpdateCategory />} />
        </Route>
      </Route>
      {/* <Route path="/dashboard/products/new" element={<CreateProduct />} /> */}
    </Routes>
  );
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Toaster position="bottom-right" />
      <MainApp />
    </BrowserRouter>
  );
};

export default App;
