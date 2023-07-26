import {
  Box,
  Button,
  Container,
  FilledInput,
  FormHelperText,
  InputAdornment,
  Typography,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import { useAppThemeContext } from "../contexts";

export const CalculationPage = () => {
  const { themeName } = useAppThemeContext();
  return (
    <Box
      height={"100%"}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "stratch",
        gap: "10px",
      }}
      mt={"10px"}
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
          mb={5}
          color={themeName === "dark" ? "white" : "black"}
        >
          Check here if you have the necessary area for installation of your
          solar system
        </Typography>

        <Box
          width={"90%"}
          height={"75%"}
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: "10px",
            alignItems: "flex-start",
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
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                "& > :not(style)": { m: 1 },
              }}
            >
              <FilledInput
                id="filled-adornment-power"
                endAdornment={
                  <InputAdornment position="end">Kw</InputAdornment>
                }
                aria-describedby="filled-weight-helper-text"
              />
              <FormHelperText id="filled-weight-helper-text">
                Energy power
              </FormHelperText>

              <FilledInput
                id="filled-adornment-width"
                endAdornment={<InputAdornment position="end">m</InputAdornment>}
                aria-describedby="filled-weight-helper-text"
              />
              <FormHelperText id="filled-weight-helper-text">
                Width
              </FormHelperText>
              <FilledInput
                id="filled-adornment-width"
                endAdornment={<InputAdornment position="end">m</InputAdornment>}
                aria-describedby="filled-weight-helper-text"
              />
              <FormHelperText id="filled-weight-helper-text">
                Height
              </FormHelperText>
            </Box>
            <Button variant="contained" color="primary">
              Simulate
            </Button>
          </Box>

          <Box
            bgcolor={"grey"}
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
            <Typography
              variant="subtitle1"
              mb={5}
              width={"80%"}
              textAlign={"center"}
              color={themeName === "dark" ? "white" : "black"}
            >
              ... Huum, you haven't done a simulation yet.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
