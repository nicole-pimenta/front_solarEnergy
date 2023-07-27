export interface ICalculationData {
  id: number;
  solarPanelQuantity: number;
  microinverterQuantity: number;
  solarPanelLength: number;
  availableArea: string;
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
