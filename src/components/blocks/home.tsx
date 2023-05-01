import { Box, Button, Container, Flex, Image } from "@chakra-ui/react";
import React from "react";
import { BodyText, Subtitle } from "../custom/icons";

export const Home = () => (
  <Box style={{ boxShadow: "-23px 28px 18px -39px #000000" }}>
    <Container maxW="1000px">
      <Flex
        // wrap={["wrap", "nowrap"]}
        mb="6rem"
        width="100%"
        align="center"
        justify="center"
        color="whiteAlpha.800"
      >
        <Box
          width={["100%", "24%"]}
          style={{
            backgroundImage: `url("https://res.cloudinary.com/didymus/image/upload/v1681945503/Untitled-1_j3cumc.jpg")`,
          }}
        >
          <Image
            width="100%"
            boxSize="550px"
            objectFit="cover"
            objectPosition="bottom"
            src="https://res.cloudinary.com/didymus/image/upload/v1681945504/Untitled-2_nwudfq.jpg"
            // src="https://res.cloudinary.com/didymus/image/upload/v1681945503/Untitled-1_j3cumc.jpg"
            alt="Adewale Orotayo"
          />
        </Box>
        <Box width={["100%", "45%"]} order={[-1]}>
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
          <Button
            marginTop="1.5rem"
            variant="outline"
            // bgGradient="linear(to-r, slateblue, coral)"
          >
            Contact Me
          </Button>
          {/* <Button
            marginTop="1.5rem"
            background="linear-gradient(#282929 0 0) padding-box, linear-gradient(45deg, slateblue, coral) border-box"
            padding="10px"
            border="2px solid transparent"
            border-radius="15px"
          >
            Contact Me
          </Button> */}
        </Box>
      </Flex>
    </Container>
  </Box>
);
