import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { InputComponent } from "./Input/Input";
import { formSchema, TFormValues } from "./formSchema";
import { Box, Button, Typography } from "@mui/material";
import { useContext } from "react";
import { CalculateContext } from "../../providers";
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
        {errors.energy ? (
          <Typography variant="body2" color="red" textAlign="left">
            {errors.energy.message}
          </Typography>
        ) : null}
        <InputComponent
          label="Insert height value:"
          placeholder="(00.0)meters"
          type="number"
          id="title"
          step={0.01}
          {...register("height")}
        />
        {errors.height ? (
          <Typography variant="body2" color="red" textAlign="left">
            {errors.height.message}
          </Typography>
        ) : null}
        <InputComponent
          label="Insert width value:"
          placeholder="(00.0)meters"
          type="number"
          id="title"
          step={0.01}
          {...register("width")}
        />
        {errors.width ? (
          <Typography variant="body2" color="red" textAlign="left">
            {errors.width.message}
          </Typography>
        ) : null}

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
