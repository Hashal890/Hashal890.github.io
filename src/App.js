import { Box } from "@chakra-ui/react";
import Styles from "./App.module.css";
import { useContext } from "react";
import { AppContext } from "./Context/AppContext.jsx";
import Home from "./Components/Home.jsx";

function App() {
  const { isDark } = useContext(AppContext);

  return (
    <Box
      className={isDark ? Styles.darkTheme : Styles.lightTheme}
      pl="15rem"
      pr="15rem"
    >
      <Home />
    </Box>
  );
}

export default App;
