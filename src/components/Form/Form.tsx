import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { InputComponent } from "./Input/Input";
import { formSchema, TFormValues } from "./formSchema";
import { Box, Button } from "@mui/material";

import {
  calculateSolarPanelQuantity,
  calculateMicroinverterQuantity,
  solarPanelTotalLength,
  availableTotalArea,
} from "./functions";
import { useContext } from "react";
import { CalculateContext } from "../../providers";
import axios from "axios";
import { api } from "../../services/api";
export const Form = () => {
  const { setCalculationData, calculationData } = useContext(CalculateContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TFormValues>({
    resolver: zodResolver(formSchema),
  });

  interface IFormValues {
    energy: string;
    width: string;
    height: string;
  }

  const onSubmit: SubmitHandler<TFormValues> = (formValue) => {
    api
      .post("/calculo", formValue)
      .then((response) => setCalculationData([response.data]));

    reset();
  };

  return (
    <Box
      height={"100%"}
      width={"100%"}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputComponent
          label="Insert the requidered power:"
          placeholder=" Kilo Watts (watt x 1000)"
          type="number"
          id="title"
          {...register("energy")}
        />
        {errors.energy ? <span>{errors.energy.message}</span> : null}
        <InputComponent
          label="Insert height value:"
          placeholder="(00.0)meters"
          type="number"
          id="title"
          step={0.01}
          {...register("height")}
        />
        {errors.height ? <span>{errors.height.message}</span> : null}
        <InputComponent
          label="Insert width value:"
          placeholder="(00.0)meters"
          type="number"
          id="title"
          step={0.01}
          {...register("width")}
        />
        {errors.width ? <span>{errors.width.message}</span> : null}

        <Box
          margin={"20px"}
          sx={{
            display: "flex",

            justifyContent: "center",
          }}
        >
          <Button variant="contained" color="primary" type="submit">
            Simulate
          </Button>
        </Box>
      </form>
    </Box>
  );
};
