import {
  Box,
  BoxProps,
  Button,
  Container,
  Flex,
  Image,
  Stack,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { SmallSubtitle, BodyText, Heading2 } from "../custom/icons";

export const Portfolio = () => {
  return (
    <Box
      style={{
        paddingTop: "6rem",
        paddingBottom: "6rem",
        background: "#2a2a29",
      }}
    >
      <Container maxW="1000">
        <Heading2 color="white" textAlign="center">
          Portfolio
        </Heading2>
        <VStack>
          <Flex
            wrap="wrap"
            columnGap="0.5rem"
            justify="space-between"
            style={{ marginTop: "3rem" }}
          >
            <ProjectBox />
            <ProjectBox />
            <ProjectBox />
            <ProjectBox />
            <ProjectBox />
            <ProjectBox />
          </Flex>
          <Button variant="outline" color="white">
            {/* <Button variant='outline' bgGradient="linear(to-r, slateblue, coral)" color="white"> */}
            View More
          </Button>
        </VStack>
      </Container>
    </Box>
  );
};

const ProjectBox = (props: BoxProps) => (
  <Stack
    p="2rem"
    mb="1rem"
    rounded="2xl"
    height="405px"
    border="1px solid white"
    mx={['auto', 'auto']}
    width={["100%", "80%", "45%", "45%", "32%"]}
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
        <Button
          color="white"
          rounded="3xl"
          fontSize="0.75rem"
          width={["47%", "45%"]}
          variant="outline"
          // bgGradient="linear(to-r, slateblue, coral)"
        >
          Live Preview
        </Button>
        <Button
          color="white"
          rounded="3xl"
          variant="outline"
          fontSize="0.75rem"
          width={["48%", "48%"]}
          // bgGradient="linear(to-r, slateblue, coral)"
        >
          Check on Github
        </Button>
      </Flex>
    </VStack>
  </Stack>
);

// home
// ##060605
// #20201b
// #2a2a29 fc
// #474746
