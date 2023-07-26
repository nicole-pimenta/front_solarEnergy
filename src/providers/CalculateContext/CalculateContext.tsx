import { createContext, useState } from "react";
import { ICalculationData, ICalculationProps } from "./@types";

export const CalculateContext = createContext({});

export const CalculateProvider = ({ children }: ICalculationProps) => {
  const [calculationData, setCalculationData] =
    useState<ICalculationData | null>(null);

  return (
    <CalculateContext.Provider value={{ calculationData, setCalculationData }}>
      {children}
    </CalculateContext.Provider>
  );
};
