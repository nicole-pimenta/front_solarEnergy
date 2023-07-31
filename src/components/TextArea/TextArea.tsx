import { useContext } from "react";
import { Box, Typography } from "@mui/material";
import { CalculateContext } from "../../providers/index";

export const TextArea = () => {
  const { calculationData } = useContext(CalculateContext);

  return (
    <>
      {calculationData === null ? (
        <Typography
          variant="subtitle1"
          mb={5}
          width={"80%"}
          textAlign={"center"}
          color="black"
        >
          ... Huum, you haven't done a simulation yet.
        </Typography>
      ) : (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography color="black">
            You will need to install {calculationData[0]?.solarPanelQuantity}
            panels solar and {calculationData[0]?.microinverterQuantity}
            microinvertes.
          </Typography>
          <Typography mt={2} color="black">
            Your available area is:{calculationData[0]?.availableArea} square
            meters.
          </Typography>
          <Typography color="black">
            The solar panels will occupy a total of
            {calculationData[0]?.solarPanelLength} square meters.
          </Typography>
        </Box>
      )}
    </>
  );
};
