import React from "react";
import { Box, ChakraProvider, theme } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import Page from "./page";
import { Header, About, Portfolio, Experience } from "./components/pages";
import { Contact } from "./components/pages/contact";
import { Footer } from "./components/footer";

const App = () => (
  <ChakraProvider theme={theme}>
    <Box bg="#282929" pb="20px" overflow="hidden">
      <Header />
      <Routes>
        <Route path="/" element={<Page />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Portfolio />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="*" element={<ErrorPage />} /> */}
      </Routes>
      <Footer />
      {/* <RouterProvider router={router} /> */}
    </Box>
  </ChakraProvider>
);

export default App;
