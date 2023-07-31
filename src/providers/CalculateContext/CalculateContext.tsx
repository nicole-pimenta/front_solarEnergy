import { createContext, useEffect, useState } from "react";
import {
  ICalculationContext,
  ICalculationData,
  ICalculationProps,
} from "./@types";
import { api } from "../../services/api";
import axios from "axios";
interface IErrorCalc {
  message: string;
}

interface ICalc {
  _id: string;
  solarPanelQuantity: number;
  microinverterQuantity: number;
  solarPanelLength: number;
  availableArea: number;
  __v: number;
}

export const CalculateContext = createContext({} as ICalculationContext);

export const CalculateProvider = ({ children }: ICalculationProps) => {
  const [calculationData, setCalculationData] = useState<
    ICalculationData[] | null
  >([]);

  // useEffect(() => {
  //   const getData = async () => {
  //     try {
  //       const response = await api.get<ICalc[]>("calculo");

  //       setCalculationData(response.data);
  //     } catch (error) {
  //       if (axios.isAxiosError<IErrorCalc>(error)) {
  //         console.error(error.response?.data.message);
  //       }
  //     }
  //   };
  //   getData();
  // }, []);

  return (
    <CalculateContext.Provider value={{ calculationData, setCalculationData }}>
      {children}
    </CalculateContext.Provider>
  );
};
