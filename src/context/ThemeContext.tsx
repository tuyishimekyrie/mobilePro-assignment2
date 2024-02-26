import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export interface Theme {
  mode: "light" | "dark";
  background: string;
  text: string;
}

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const lightTheme: Theme = {
  mode: "light",
  background: "#fff",
  text: "#000",
};

const darkTheme: Theme = {
  mode: "dark",
  background: "#222",
  text: "#fff",
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(lightTheme);

  useEffect(() => {
    const loadTheme = async () => {
      try {
        const savedTheme = await AsyncStorage.getItem("theme");
        if (savedTheme) {
          setTheme(JSON.parse(savedTheme));
        }
      } catch (error) {
        console.error("Error loading theme from AsyncStorage:", error);
      }
    };

    loadTheme();
  }, []);

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newMode: "light" | "dark" =
        prevTheme.mode === "light" ? "dark" : "light";
      const newTheme: Theme = newMode === "light" ? lightTheme : darkTheme;
      AsyncStorage.setItem("theme", JSON.stringify(newTheme))
        .then(() => console.log("Theme saved successfully"))
        .catch((error) => console.error("Error saving theme:", error));
      return newTheme;
    });
  };

  // Memoize the context value to prevent unnecessary re-renders
  const contextValue = useMemo(() => ({ theme, toggleTheme }), [theme]);

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};
