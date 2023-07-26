import { ForwardedRef, InputHTMLAttributes, forwardRef } from "react";
interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  id: string;
}

export const Input = forwardRef(
  (
    { label, id, ...rest }: IInputProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <>
        {label ? <label htmlFor={id}>{label}</label> : null}⁠
        <input ref={ref} {...rest} />
      </>
    );
  }
);
