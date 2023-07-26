import { Box, Button, Container, Typography } from "@mui/material";
import Slider from "@mui/material/Slider";
import TextField from "@mui/material/TextField";
import { useState } from "react";

export const CalculationPage = () => {
  return (
    <Box
      height={"100%"}
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Typography variant="h5" mt={3}>
        Make a simulation and find out which product is best for you
      </Typography>
      <Typography variant="subtitle1" mb={5}>
        Check here if you have the necessary area for installation of your solar
        system
      </Typography>

      <Box
        width={"80%"}
        height={"75%"}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          gap: "10px",
          alignItems: "flex-start",
        }}
      >
        <Box
          height={"100%"}
          width={"60%"}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="subtitle1">
            Enter the requested data below
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              "& > :not(style)": { m: 1 },
            }}
          >
            <TextField
              helperText="Please enter the power in kw"
              id="demo-helper-text-aligned"
              label="Kw(kiloWatt)"
            />
            <TextField
              helperText="Please enter the width of the space"
              id="demo-helper-text-aligned"
              label="Width (meters)"
            />
            <TextField
              helperText="Please enter the height of the space "
              id="demo-helper-text-aligned"
              label="heigth  (meters)"
            />
          </Box>
          <Button variant="contained" color="primary">
            Simulate
          </Button>
        </Box>

        <Box
          bgcolor={"teal"}
          height={"60%"}
          width={"40%"}
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: "10px",
            alignItems: "center",
          }}
          style={{ borderRadius: "5px", boxShadow: "8px 5px 5px black" }}
        >
          <Typography variant="subtitle1" mb={5}>
            ... Huum, you haven't done a simulation yet.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
