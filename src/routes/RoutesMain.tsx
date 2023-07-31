import { Route, Routes, Navigate } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { CalculationPage } from "../pages/CalculationPage";
import { OutletComponent } from "../components/Outlet/Outlet";
import { CalculationByIdPage } from "../pages/CalculationByIdPage";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<OutletComponent />}>
        <Route index element={<HomePage />} />
        <Route path="/calculo" element={<CalculationPage />} />
        <Route path="/calculo/:id" element={<CalculationByIdPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};
