export interface IThemeContextData {
  themeName: "light" | "dark";
  toggleTheme: () => void;
}

export interface IThemeProviderProps {
  children: React.ReactNode;
}
