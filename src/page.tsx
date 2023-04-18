import React from "react";
import { Box, Container } from "@chakra-ui/react";
import { Header } from "./components/header";

const Page = () => {
  return (
    <Box bg="#27282B">
      <Container maxW="1200px">
        <Box>
          <Header />
        </Box>
        <Box>{/* Body */}</Box>
        <Box>{/* Footer */}</Box>
      </Container>
    </Box>
  );
};

export default Page;
