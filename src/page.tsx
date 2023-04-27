import React from "react";
import { Box, Container } from "@chakra-ui/react";
import { Header } from "./components/header";
import Main from "./components/main";

const Page = () => {
  return (
    <Box bg="#272b23" pb="100px">
      <Container maxW="1000px">
        <Box>
          <Header />
        </Box>
        <Box>
          <Main />
        </Box>
        <Box>{/* Footer */}</Box>
      </Container>
    </Box>
  );
};

export default Page;

// tobi: 1E1F20
// original: 27282B
// #0C111B
// #1E1F20
// #222020
// #140c0c
// #1a1919
// #272b23
