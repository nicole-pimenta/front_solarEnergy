import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { InputComponent } from "./Input/Input";
import { formSchema, TFormValues } from "./formSchema";
import { Box, Button } from "@mui/material";
import { useState } from "react";

export const Form = () => {
  const [data, setData] = useState({});
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TFormValues>({
    resolver: zodResolver(formSchema),
  });

  const calculateResources = (formValues) => {
    const { energy, width, height } = formValues;

    // 1.Qtd de painéis solares
    const solarPanelQuantity = Math.ceil(parseInt(energy) / 550);

    //2. Qtd de microinversores necessários
    const microinverterQuantity = Math.ceil(solarPanelQuantity / 4);

    //3. Comprimento(m2) total dos painéis solares
    const solarPanelTotalLength = solarPanelQuantity * (1.95 * 1.1);

    //4. Área disponível para instalação
    const availableArea = parseInt(width) * parseInt(height);

    setData({
      solarPanelQuantity,
      microinverterQuantity,
      solarPanelTotalLength,
      availableArea,
    });
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
