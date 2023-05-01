import { Box, Container, Divider, Flex, Stack } from "@chakra-ui/react";
import { BodyText, Heading2, Subtitle } from "../custom/icons";

export const Experience = () => (
  <Box bg="#353533" py="2rem">
    <Container maxW={['', "1000px"]} color="white">
      <Heading2 py="2rem">Experience</Heading2>
      <Stack style={{ marginTop: "1.5rem", marginLeft: "1rem" }}>
        <Flex
          align="baseline"
          color="whiteAlpha.800"
          wrap={["wrap"]}
          style={{ marginBottom: "2rem" }}
        >
          <Flex align="baseline">
            <Divider
              width="1.5rem"
              variant="solid"
              borderRadius="3xl"
              border="4px solid transparent"
              background="linear-gradient(#fff, #fff) padding-box, linear-gradient(45deg, slateblue, coral) border-box"
            />
            <Subtitle marginLeft="1rem">
              Front End Developer @ Simpu Inc.{" "}
            </Subtitle>
          </Flex>
          <BodyText marginLeft={["3rem", "3rem", "1rem"]} fontWeight="bold">
            May 2021 - March 2023
          </BodyText>
        </Flex>
        <Flex
          align="baseline"
          color="whiteAlpha.800"
          wrap={["wrap"]}
          style={{ marginBottom: "2rem" }}
        >
          <Flex align='baseline'>
            <Divider
              width="1.5rem"
              variant="solid"
              borderRadius="3xl"
              border="4px solid transparent"
              background="linear-gradient(#fff, #fff) padding-box, linear-gradient(45deg, slateblue, coral) border-box"
            />
            <Subtitle marginLeft="1rem">
              Microverse Full Stack Developer Course.{" "}
            </Subtitle>
          </Flex>
          <BodyText marginLeft={["3rem", "3rem", "1rem"]} fontWeight="bold">
            October 2019 - May 2021
          </BodyText>
        </Flex>
        <Flex
          align="baseline"
          color="whiteAlpha.800"
          wrap={["wrap"]}
          style={{ marginBottom: "2rem" }}
        >
          <Flex align="baseline">
            <Divider
              width="1.5rem"
              variant="solid"
              borderRadius="3xl"
              border="4px solid transparent"
              background="linear-gradient(#fff, #fff) padding-box, linear-gradient(45deg, slateblue, coral) border-box"
            />
            <Subtitle marginLeft="1rem">
              Udacity Front End Developer Nanodegree.{" "}
            </Subtitle>
          </Flex>
          <BodyText marginLeft={["2.8rem", "3rem", "1rem"]} fontWeight="bold">
            July 2018 - December 2018
          </BodyText>
        </Flex>
      </Stack>
    </Container>
  </Box>
);
