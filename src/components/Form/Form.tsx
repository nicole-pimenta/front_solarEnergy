import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { InputComponent } from "./Input/Input";
import { formSchema, TFormValues } from "./formSchema";
import { Box, Button } from "@mui/material";

export const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TFormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit: SubmitHandler<TFormValues> = (formValue) => {
    console.log(formValue);

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
          placeholder="watts"
          type="number"
          id="title"
          {...register("energy")}
        />
        {errors.energy ? <span>{errors.energy.message}</span> : null}
        <InputComponent
          label="Insert width value:"
          placeholder="meters"
          type="number"
          id="title"
          {...register("width")}
        />
        {errors.width ? <span>{errors.width.message}</span> : null}
        <InputComponent
          label="Insert height value:"
          placeholder="meters"
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
