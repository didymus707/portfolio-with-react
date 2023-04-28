import { Box, Container, Flex, Image } from "@chakra-ui/react";
import React from "react";
import { BodyText, Subtitle } from "../custom/icons";

export const Home = () => (
  <Box style={{ boxShadow: "-23px 28px 18px -31px #000000" }}>
    <Container maxW="1000px">
      <Flex color="whiteAlpha.800" align="center" width="100%" mb="6rem">
        <Box width="43%">
          <Subtitle fontSize="4xl">
            I'm{" "}
            <Box
              as="span"
              bgGradient="linear(to-r, slateblue, coral)"
              bgClip="text"
            >
              Adewale Orotayo
            </Box>
            ,
          </Subtitle>
          <BodyText fontSize="2xl">Full Stack developer</BodyText>
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
    </Container>
  </Box>
);
