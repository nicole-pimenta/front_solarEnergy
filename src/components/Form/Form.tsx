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
export const Form = () => {
  const { setCalculationData } = useContext(CalculateContext);

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

  const calculateResources = (formValues: IFormValues) => {
    const { energy, width, height } = formValues;

    // 1.Qtd de painéis solares
    const solarPanelQuantity = calculateSolarPanelQuantity(energy);

    //2. Qtd de microinversores necessários
    const microinverterQuantity =
      calculateMicroinverterQuantity(solarPanelQuantity);

    //3. Comprimento(m2) total dos painéis solares
    const solarPanelLength = solarPanelTotalLength(solarPanelQuantity);

    //4. Área disponível para instalação
    const availableArea = availableTotalArea(width, height);

    const calculateData = {
      id: 1,
      solarPanelQuantity,
      microinverterQuantity,
      solarPanelLength,
      availableArea,
    };

    setCalculationData([calculateData]);
  };
  const onSubmit: SubmitHandler<TFormValues> = (formValue) => {
    calculateResources(formValue);

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
          label="Insert energy value:"
          placeholder=" Kilo Watts"
          type="number"
          id="title"
          {...register("energy")}
        />
        {errors.energy ? <span>{errors.energy.message}</span> : null}
        <InputComponent
          label="Insert width value:"
          placeholder="centimeters"
          type="number"
          id="title"
          {...register("width")}
        />
        {errors.width ? <span>{errors.width.message}</span> : null}
        <InputComponent
          label="Insert height value:"
          placeholder="centimeters"
          type="number"
          id="title"
          {...register("height")}
        />
        {errors.height ? <span>{errors.height.message}</span> : null}

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
