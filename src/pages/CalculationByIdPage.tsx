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

        toast.success("Busca realizada com sucesso!");
      } catch (error) {
        toast.warn("ID not found , enter a valid id");

        setTimeout(() => {
          navigate("/calculo");
        }, 5000);
      }
    };
    loadItem();
  }, []);
  console.log(searchedItem);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "left",
        gap: "10px",
      }}
    ></Box>
  );
};
