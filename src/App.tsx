import React from "react";
import { Footer } from "./components/footer";
import { Box, ChakraProvider, theme } from "@chakra-ui/react";
import { Header } from "./components/pages";
import Main from "./components/main";

const App = () => (
  <ChakraProvider theme={theme}>
    <Box bg="bg.page" color='text.primary'>
      <Header />
      <Main />
      <Footer />
    </Box>
  </ChakraProvider>
);

export default App;
