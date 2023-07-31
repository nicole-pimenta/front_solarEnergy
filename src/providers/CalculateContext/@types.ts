export interface ICalculationData {
  _id: string;
  solarPanelQuantity: number;
  microinverterQuantity: number;
  solarPanelLength: number;
  availableArea: number;
  __v: number;
}

export interface ICalculationProps {
  children: React.ReactNode;
}

export interface ICalculationContext {
  calculationData: ICalculationData[] | null;
  setCalculationData: React.Dispatch<
    React.SetStateAction<ICalculationData[] | null>
  >;
}
