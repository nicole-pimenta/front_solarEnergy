import { Box, Button, Container } from "@mui/material";
import solarPanel from "../assets/solarPanel.jpg";
import { Typography } from "@mui/material";
import { Link } from "@mui/material";
import { useAppThemeContext } from "../providers";

export const HomePage = () => {
  const { themeName } = useAppThemeContext();

  return (
    <Box height={"100%"} sx={{ display: "flex", alignItems: "center" }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: {
              xl: "row",
              lg: "row",
              sm: "column",
              md: "column",
              xs: "column",
            },
            justifyContent: "center",
            alignItems: "center",
            flexGrow: 1,
            gap: "10px",
          }}
        >
          <Box width={"50vw"}>
            <Typography
              variant="h2"
              color={themeName === "dark" ? "white" : "black"}
            >
              SOLAR ENERGY
            </Typography>
            <Typography
              variant="subtitle1"
              mt={5}
              color={themeName === "dark" ? "white" : "black"}
            >
              RENEWABLE ENERGY AS A SOURCE.
            </Typography>
            <Typography
              variant="subtitle1"
              mt={5}
              color={themeName === "dark" ? "white" : "black"}
            >
              AS A INVESTMENT.
            </Typography>
            <Typography
              variant="subtitle1"
              mt={5}
              mb={5}
              color={themeName === "dark" ? "white" : "black"}
            >
              AS EARNING.
            </Typography>

            <Button variant="contained" color="primary">
              <Link
                href="/calculation"
                underline="hover"
                color="inherit"
                padding={"5px"}
              >
                Learn More
              </Link>
            </Button>
          </Box>

          <Box width={"50vw"} m="20px">
            <img
              src={solarPanel}
              width={"100%"}
              alt="Solar panel image"
              style={{ borderRadius: "5px", boxShadow: "10px -8px teal" }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
