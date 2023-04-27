import {
  Box,
  BoxProps,
  Button,
  Flex,
  Image,
  Stack,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { SmallSubtitle, BodyText, Heading2 } from "./custom/icons";

const Portfolio = () => {
  return (
    <Box style={{ marginTop: "3rem" }}>
      <Heading2 color="white" textAlign="center">
        Portfolio
      </Heading2>
      <Flex wrap="wrap" style={{ marginTop: "3rem" }} columnGap='0.5rem' justify='space-between'>
        <ProjectBox />
        <ProjectBox />
        <ProjectBox />
        <ProjectBox />
        <ProjectBox />
        <ProjectBox />
      </Flex>
    </Box>
  );
};

export default Portfolio;

const ProjectBox = (props: BoxProps) => (
  <Stack
    p="2rem"
    mb="1rem"
    width="32%"
    rounded="2xl"
    height="405px"
    border="1px solid white"
  >
    <VStack height="100%">
      <Box width="100%">
        <Image
          width="100%"
          boxSize="150px"
          alt="Dan Abramov"
          objectFit="fill"
          src="gibbresh.png"
          fallbackSrc="https://via.placeholder.com/150"
        />
      </Box>
      <Box width="100%" color="white" style={{ marginTop: "2rem" }}>
        <SmallSubtitle>Title of my Project</SmallSubtitle>
        <BodyText mt="0.5rem">
          Summary of the project and techs used in building it
        </BodyText>
      </Box>
      <Flex width="100%" style={{ marginTop: "auto" }} justify="space-between">
        <Button rounded="3xl" fontSize="0.75rem">
          Live Preview
        </Button>
        <Button rounded="3xl" fontSize="0.75rem">
          Check on Github
        </Button>
      </Flex>
    </VStack>
  </Stack>
);
