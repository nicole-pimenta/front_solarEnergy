import { Container, Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { useAppThemeContext } from "../../../contexts";

export const Footer = () => {
  const { themeName } = useAppThemeContext();
  return (
    <Box sx={{ flexGrow: 0 }}>
      <AppBar position="static">
        <Container maxWidth="lg">
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "15px",
            }}
          >
            <div>
              <InstagramIcon />
              <FacebookIcon />
              <YouTubeIcon />
            </div>

            <Typography
              variant="subtitle2"
              mb={0.5}
              color={themeName === "dark" ? "white" : "black"}
            >
              Feito por Nicole Pimenta
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};
