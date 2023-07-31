import { Box, Container, Typography } from "@mui/material";
import { useAppThemeContext } from "../providers";
import { Form } from "../components/Form/Form";
import { ICalculationData } from "../providers/CalculateContext/@types";
import { TextArea } from "../components/TextArea/TextArea";

export const CalculationPage = () => {
  const { themeName } = useAppThemeContext();

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
            <TextArea />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
