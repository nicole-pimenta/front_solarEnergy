import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useAppThemeContext } from "../contexts";
import { Container, Link } from "@mui/material";
import ModeNightIcon from "@mui/icons-material/ModeNight";
import LightModeIcon from "@mui/icons-material/LightMode";

import WbSunnyIcon from "@mui/icons-material/WbSunny";

export const Header = () => {
  const { toggleTheme, themeName } = useAppThemeContext();
  return (
    <Box sx={{ flexGrow: 0 }}>
      <AppBar position="static">
        <Container maxWidth="lg">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <WbSunnyIcon />
              <Link href="/" color="inherit" underline="none" padding={"2px"}>
                SOLAR ENERGY
              </Link>
            </Typography>

            <Button variant="contained" color="secondary">
              <Link
                href="/calculation"
                color="inherit"
                underline="none"
                padding={"2px"}
              >
                SIMULATE HERE
              </Link>
            </Button>
            <Box
              bgcolor={"teal"}
              marginLeft={"30px"}
              sx={{ display: "flex", gap: "10px" }}
            >
              {themeName === "dark" ? (
                <LightModeIcon onClick={toggleTheme} />
              ) : (
                <ModeNightIcon onClick={toggleTheme} />
              )}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};
