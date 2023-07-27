import { createContext, useState } from "react";
import {
  ICalculationContext,
  ICalculationData,
  ICalculationProps,
} from "./@types";

export const CalculateContext = createContext({} as ICalculationContext);

export const CalculateProvider = ({ children }: ICalculationProps) => {
  const [calculationData, setCalculationData] = useState<
    ICalculationData[] | null
  >([]);

  return (
    <CalculateContext.Provider value={{ calculationData, setCalculationData }}>
      {children}
    </CalculateContext.Provider>
  );
};
