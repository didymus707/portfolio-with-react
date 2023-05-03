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
      id="projects"
      bg="#282929"
      style={{
        paddingTop: "6rem",
        paddingBottom: "6rem",
        background: "#2a2a29",
      }}
    >
      <Container maxW="1200px">
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
            <ProjectBox
              title="My Portfolio"
              alt="My PPortfolio"
              summary="This project is built with React, TypeScript and Chakra Ui and implements React Router v6 for routing"
              src="https://res.cloudinary.com/didymus/image/upload/v1683120432/Screen_Shot_2023-05-03_at_2.26.52_PM_sre5rj.png"
            />
            <ProjectBox
              alt="Earth Defenders"
              title="Earth Defenders"
              preview="https://earthdefenders.netlify.app/"
              github="https://github.com/didymus707/Space-Shooter-With-Phaser3"
              summary="This project was built with HTML & CSS, JavaScript and Phaser 3. It also implements Webpack and Babel as well as OOP"
              src="https://res.cloudinary.com/didymus/image/upload/v1683026105/Screen_Shot_2023-05-02_at_12.14.47_PM_jq62io.png"
            />
            <ProjectBox
              alt="Calculator"
              title="Calculator"
              preview="https://calclator.netlify.app/"
              github="https://github.com/didymus707/calclator"
              summary="This project was built with React and uses React Router v5"
              src="https://res.cloudinary.com/didymus/image/upload/v1683025981/Screen_Shot_2023-05-01_at_7.29.14_PM_dc9kbn.png"
            />
            <ProjectBox
              alt="Weather App"
              title="Weather App"
              github="https://github.com/didymus707/Weather-App"
              preview="https://didymus707.github.io/Weather-App/"
              summary="This project was built with HTML, CSS and JavaScript and implemennts the Fetch APi"
              src="https://res.cloudinary.com/didymus/image/upload/v1683121842/Screen_Shot_2023-05-03_at_2.46.46_PM_sf48ht.png"
            />
            <ProjectBox
              alt="Memory Game"
              title="Memory Game"
              github="https://github.com/didymus707/Memory-Game-FEND"
              preview="https://didymus707.github.io/Memory-Game-FEND/"
              summary="This is a memory matching game, made by manipulating the DOM using vanilla JavaScript."
              src="https://res.cloudinary.com/didymus/image/upload/v1683123293/Screen_Shot_2023-05-03_at_3.12.17_PM_fv1ttu.png"
            />
            {/* <ProjectBox /> */}
          </Flex>
          {/* <Button
            color="white"
            variant="outline"
            _hover={{ bgGradient: "linear(to-r, slateblue, coral)" }}
          >
            View More
          </Button> */}
        </VStack>
      </Container>
    </Box>
  );
};

type ProjectBoxProps = {
  src?: string;
  title?: string;
  alt?: string;
  summary?: string;
  preview?: string;
  github?: string;
} & BoxProps;

const ProjectBox = (props: ProjectBoxProps) => {
  const { src, title, alt, summary, preview, github } = props;

  return (
    <Stack
      p="2rem"
      mb="1rem"
      rounded="2xl"
      height="405px"
      border="1px solid white"
      mx={["auto", "auto"]}
      width={["100%", "80%", "45%", "45%", "32%"]}
    >
      <VStack height="100%">
        <Box width="100%">
          <Image
            alt={alt}
            src={src}
            width="100%"
            height="150px"
            objectFit="fill"
            fallbackSrc="https://via.placeholder.com/150"
          />
        </Box>
        <Box width="100%" color="white" style={{ marginTop: "2rem" }}>
          <SmallSubtitle>{title || "Title of my Project"}</SmallSubtitle>
          <BodyText mt="0.5rem">
            {summary || "Summary of the project and techs used in building it"}
          </BodyText>
        </Box>
        <Flex
          width="100%"
          style={{ marginTop: "auto" }}
          justify="space-between"
        >
          <Button
            as="a"
            color="white"
            rounded="3xl"
            href={preview}
            target="_blank"
            variant="outline"
            fontSize="0.75rem"
            width={["47%", "45%"]}
            _hover={{ bgGradient: "linear(to-r, slateblue, coral)" }}
          >
            Live Preview
          </Button>
          <Button
            as="a"
            href={github}
            color="white"
            rounded="3xl"
            target="_blank"
            variant="outline"
            fontSize="0.75rem"
            width={["48%", "48%"]}
            _hover={{ bgGradient: "linear(to-r, slateblue, coral)" }}
          >
            Check on Github
          </Button>
        </Flex>
      </VStack>
    </Stack>
  );
};

// home
// ##060605
// #20201b
// #2a2a29 fc
// #474746
