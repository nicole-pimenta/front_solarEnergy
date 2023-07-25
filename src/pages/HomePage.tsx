import { Box, Button, Container } from "@mui/material";
import solarPanel from "../assets/solarPanel.jpg";
import { Typography } from "@mui/material";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export const HomePage = () => {
  return (
    <>
      <Box height={"100%"} sx={{ display: "flex", alignItems: "center" }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexGrow: 1,
              margin: "40px",

              gap: "40px",
            }}
          >
            <Box width={"50%"}>
              <Typography variant="h2">SOLAR ENERGY</Typography>

              <Typography variant="subtitle1" mt={5}>
                RENEWABLE ENERGY AS A SOURCE.
              </Typography>
              <Typography variant="subtitle1" mt={5}>
                AS A INVESTMENT.
              </Typography>
              <Typography variant="subtitle1" mt={5} mb={5}>
                AS EARNING.
              </Typography>
              <Button variant="contained" color="primary">
                Test Now
              </Button>
            </Box>

            <img
              src={solarPanel}
              height={"350px"}
              alt="Solar panel image"
              style={{ borderRadius: "5px", boxShadow: "10px -8px teal" }}
            />
          </Box>
        </Container>
      </Box>
    </>
  );
};
