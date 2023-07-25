import { Container } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

export const Footer = () => {
  return (
    <Box sx={{ flexGrow: 0 }}>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar> ícones de redes sociais</Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};
