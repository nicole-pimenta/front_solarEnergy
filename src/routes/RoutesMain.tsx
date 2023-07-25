import { Route, Routes, Navigate } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { CalculationPage } from "../pages/CalculationPage";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/calculation" element={<CalculationPage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
