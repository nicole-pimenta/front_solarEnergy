import { Box, Container, Typography } from "@mui/material";
import { CalculateContext, useAppThemeContext } from "../providers";
import { Form } from "../components/Form/Form";
import { useContext } from "react";

export const CalculationPage = () => {
  const { themeName } = useAppThemeContext();
  const { calculationData } = useContext(CalculateContext);

  return (
    <Box
      height={"100%"}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h5"
          color={themeName === "dark" ? "white" : "black"}
        >
          Make a simulation and find out which product is best for you
        </Typography>
        <Typography
          variant="subtitle1"
          color={themeName === "dark" ? "white" : "black"}
        >
          Check here if you have the necessary area for installation of your
          solar system
        </Typography>

        <Box
          width={"90%"}
          height={"85%"}
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: "10px",
            alignItems: "center",
            flexDirection: {
              xl: "row",
              lg: "row",
              sm: "column",
              md: "column",
              xs: "column",
            },
          }}
        >
          <Box
            height={"100%"}
            width={"100%"}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Form />
          </Box>

          <Box
            bgcolor={"white"}
            height={"90%"}
            width={"100%"}
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: "10px",
              alignItems: "center",
            }}
            style={{ borderRadius: "5px", boxShadow: "8px 5px 5px black" }}
          >
            {calculationData ? (
              calculationData.map((data) => (
                <Typography
                  key={data.id}
                  variant="subtitle1"
                  mb={5}
                  width={"80%"}
                  textAlign={"center"}
                  color={themeName === "dark" ? "white" : "black"}
                >
                  ` você precisará instalar ${data.solarPanelQuantity}paineis
                  solares , ${data.microinverterQuantity} microinversores
                  ocupando um total de ${data.solarPanelLength} m2 No seu
                  terreno de ${data.availableArea} m2`
                </Typography>
              ))
            ) : (
              <Typography
                variant="subtitle1"
                mb={5}
                width={"80%"}
                textAlign={"center"}
                color={themeName === "dark" ? "white" : "black"}
              >
                ... Huum, you haven't done a simulation yet.
              </Typography>
            )}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
