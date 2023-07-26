export interface ICalculationData {
  id: number;
  solarPanelQuantity: number;
  microinverterQuantity: number;
  solarPanelLength: number;
  availableArea: number;
}

export interface ICalculationProps {
  children: React.ReactNode;
}
