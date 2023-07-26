import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "./Input/Input";
import { formSchema, TFormValues } from "./formSchema";
import { Button } from "@mui/material";

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
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        label="Insert energy value"
        placeholder="watts"
        type="number"
        id="title"
        {...register("energy")}
      />
      {errors.energy ? <span>{errors.energy.message}</span> : null}
      <Input
        label="Insert width value"
        placeholder="meters"
        type="number"
        id="title"
        {...register("width")}
      />
      {errors.width ? <span>{errors.width.message}</span> : null}
      <Input
        label="Insert height value"
        placeholder="meters"
        type="number"
        id="title"
        {...register("height")}
      />
      {errors.height ? <span>{errors.height.message}</span> : null}

      <Button variant="contained" color="primary" type="submit">
        Simulate
      </Button>
    </form>
  );
};
