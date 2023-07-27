import { Box, TextField, Typography } from "@mui/material";
import { ForwardedRef, InputHTMLAttributes, forwardRef } from "react";
import { StyledInputElement } from "./StyledInput";

import { useAppThemeContext } from "../../../providers";
interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  id: string;
}

export const InputComponent = forwardRef(
  (
    { label, id, ...rest }: IInputProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    const { themeName } = useAppThemeContext();

    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "right",
        }}
      >
        <Typography
          variant="subtitle1"
          mt={2}
          color={themeName === "dark" ? "white" : "black"}
        >
          {label ? <label htmlFor={id}>{label}</label> : null}
        </Typography>
        ⁠
        <StyledInputElement ref={ref} {...rest} />
      </Box>
    );
  }
);
