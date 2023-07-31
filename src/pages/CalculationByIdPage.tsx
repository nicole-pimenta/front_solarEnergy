import { useNavigate, useParams } from "react-router-dom";
import { api } from "../services/api";
import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { toast } from "react-toastify";

export const CalculationByIdPage = () => {
  const { id } = useParams();

  const [searchedItem, setSearchedItem] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const loadItem = async () => {
      try {
        const { data } = await api.get(`/calculo/${id}`);
        setSearchedItem(data);

        toast.success("Search successfully !");
      } catch (error) {
        toast.warn("ID not found , enter a valid id");

        setTimeout(() => {
          navigate("/calculo");
        }, 5000);
      }
    };
    loadItem();
  }, []);
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      height={"80vh"}
    >
      {searchedItem !== null && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "left",
            gap: "10px",
          }}
        >
          {" "}
          <Typography color="black">
            You will need to install : {searchedItem.solarPanelQuantity}
            solar panels and {searchedItem.microinverterQuantity}
            microinvertes.
            <hr />
          </Typography>
          <Typography color="black" textAlign="left">
            Your available area is :{searchedItem.availableArea} square meters.
            <hr />
          </Typography>
          <Typography color="black">
            The solar panels will occupy a total of :
            {searchedItem.solarPanelLength} square meters.
            <hr />
          </Typography>
        </Box>
      )}
    </Box>
  );
};
