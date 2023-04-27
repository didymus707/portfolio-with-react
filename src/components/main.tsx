import { Box, Flex, Image, Stack } from "@chakra-ui/react";
import About from "./about";
import Portfolio from "./portfolio";
import { BodyText, Subtitle } from "./custom/icons";
import Experience from "./experience";

const Main = () => {
  return (
    <Stack mt="6rem">
      <Flex
        color="whiteAlpha.800"
        // boxShadow="sm"
        align="center"
        width="100%"
        mb="6rem"
      >
        <Box width="43%">
          <Subtitle fontSize="4xl">
            I'm{" "}
            <Box
              as="span"
              bgGradient="linear(to-r, slateblue, coral)"
              bgClip="text"
            >
              Adewale Orotayo
            </Box>,
          </Subtitle>
          <BodyText fontSize="2xl">front end developer</BodyText>
        </Box>
        <Box
          ml="2rem"
          width="53%"
          style={{
            backgroundImage: `url("https://res.cloudinary.com/didymus/image/upload/v1681945503/Untitled-1_j3cumc.jpg")`,
          }}
        >
          <Image
            width="100%"
            boxSize="250px"
            objectFit="cover"
            // src="https://res.cloudinary.com/didymus/image/upload/v1681945504/Untitled-2_nwudfq.jpg"
            src="https://res.cloudinary.com/didymus/image/upload/v1681945503/Untitled-1_j3cumc.jpg"
            alt="Adewale Orotayo"
          />
        </Box>
      </Flex>
      <Portfolio />
      <About />
      <Experience />
    </Stack>
  );
};

export default Main;
