import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { styled } from "@mui/material/styles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Internal Dependencies
import Home from "./components/Home";
import Validator from "./components/validator";
import theme from "./theme";
import HomeButtonHeader from "./components/HomeButtonHeader";

// Local Variables
const StyledAppWrapper = styled("div")();

const App: React.FC = () => {

  return (
    <ThemeProvider theme={theme}>
      <StyledAppWrapper>
        <Router>
          <div>
            <nav>
              {<HomeButtonHeader />}
            </nav>

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/validator" element={<Validator />} />
            </Routes>
          </div>
        </Router>
      </StyledAppWrapper>
    </ThemeProvider>
  );
};

export default App;