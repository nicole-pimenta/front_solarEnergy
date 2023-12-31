const calculateSolarPanelQuantity = (energy: string): number => {
  return Math.ceil(parseInt(energy) / 550);
};

const calculateMicroinverterQuantity = (solarPanelQuantity: number): number => {
  return Math.ceil(solarPanelQuantity / 4);
};

const solarPanelTotalLength = (solarPanelQuantity: number) => {
  return solarPanelQuantity * (1.95 * 1.1);
};

const availableTotalArea = (width: string, height: string) => {
  return (Number(width) * Number(height)).toFixed(2);
};

export {
  calculateSolarPanelQuantity,
  calculateMicroinverterQuantity,
  solarPanelTotalLength,
  availableTotalArea,
};
