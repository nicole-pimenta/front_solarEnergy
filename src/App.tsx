import { ThemeProvider } from "@mui/material";
import { RoutesMain } from "./routes/RoutesMain";
import { LightTheme } from "./themes";

export const App = () => {
  return (
    <div>
      <ThemeProvider theme={LightTheme}>
        <RoutesMain />
      </ThemeProvider>
    </div>
  );
};
