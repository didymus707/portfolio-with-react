import React from "react";
import { Container } from "@chakra-ui/react";
import { ChakraProvider, Box, theme } from "@chakra-ui/react";
import { Header } from "./components/header";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box bg="#27282B">
      <Container maxW='1200px'>
        <Box>
          <Header />
        </Box>
        <Box>{/* Body */}</Box>
        <Box>{/* Footer */}</Box>
      </Container>
    </Box>
  </ChakraProvider>
);
