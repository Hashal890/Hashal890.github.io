import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(true);

  const toggleDark = () => {
    setIsDark(!isDark);
  };

  return (
    <AppContext.Provider value={{ isDark, toggleDark }}>
      {children}
    </AppContext.Provider>
  );
};
