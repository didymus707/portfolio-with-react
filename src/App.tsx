import React from "react";
import { ChakraProvider, theme } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import Page from "./page";

const App = () => (
  <ChakraProvider theme={theme}>
    <Routes>
      <Route path="/" element={<Page />} />
    </Routes>
  </ChakraProvider>
);

export default App;
