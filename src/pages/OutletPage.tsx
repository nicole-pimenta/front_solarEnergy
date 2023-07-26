import { Outlet } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Box } from "@mui/material";

export const OutletPage = () => {
  return (
    <>
      <Header />
      <Box sx={{ flexGrow: 1 }}>
        <Outlet />
      </Box>
      <Footer />
    </>
  );
};
