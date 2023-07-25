import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useAppThemeContext } from "../contexts";
import { Container } from "@mui/material";

export const Header = () => {
  const { toggleTheme } = useAppThemeContext();
  return (
    <Box sx={{ flexGrow: 0 }}>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              SOLAR ENERGY
            </Typography>
            <Button variant="contained" color="secondary" onClick={toggleTheme}>
              Switch theme
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};
