import { Route, Routes, Navigate } from "react-router-dom";
// import { HomePage } from "../pages/HomePage";
// import { CalculationPage } from "../pages/CalculationPage";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<p>pagina inical</p>} />
      <Route path="/calculation" element={<p>pagina calc</p>} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
