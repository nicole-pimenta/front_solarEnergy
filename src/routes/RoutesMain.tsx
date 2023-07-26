import { Route, Routes, Navigate } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { CalculationPage } from "../pages/CalculationPage";
import { OutletPage } from "../pages/OutletPage";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<OutletPage />}>
        <Route index element={<HomePage />} />
        <Route path="/calculation" element={<CalculationPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};
