import { Box, Flex, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import About from "./about";
import Portfolio from "./portfolio";

const Main = () => {
  return (
    <Stack mt="2rem">
      <Flex color="whiteAlpha.800" boxShadow="sm">
        <Box>
          <Text as="h1" fontSize="4xl">
            Hi, I'm Adewale Orotayo,
          </Text>
          <Text fontSize="4xl">front end developer</Text>
        </Box>
        <Box ml="2rem">
          <Image
            boxSize="250px"
            objectFit="cover"
            src="https://res.cloudinary.com/didymus/image/upload/v1681945504/Untitled-2_nwudfq.jpg"
            // https://res.cloudinary.com/didymus/image/upload/v1681945503/Untitled-1_j3cumc.jpg
            alt="Adewale Orotayo"
          />
        </Box>
      </Flex>
      <About />
      <Portfolio />
    </Stack>
  );
};

export default Main;
