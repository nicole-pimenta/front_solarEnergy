import { Box } from "@mui/material";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { RoutesMain } from "./routes/RoutesMain";

export const App = () => {
  return (
    <>
      <Header />
      <Box sx={{ flexGrow: 1 }}>
        <RoutesMain />
      </Box>
      <Footer />
    </>
  );
};
