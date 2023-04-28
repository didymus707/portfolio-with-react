import { Box, Container, Divider, Flex, Stack } from "@chakra-ui/react";
import { BodyText, Heading2, Subtitle } from "../custom/icons";

export const Experience = () => (
  <Box bg="#353533">
    <Container maxW="1000px">
      <Heading2 color="white" py="2rem">
        Experience
      </Heading2>
      <Stack style={{ marginTop: "1.5rem", marginLeft: "1rem" }}>
        <Flex align="baseline" style={{ marginBottom: "2rem" }}>
          <Divider
            width="2rem"
            variant="solid"
            background="linear-gradient(#fff, #fff) padding-box, linear-gradient(45deg, slateblue, coral) border-box"
            border="4px solid transparent"
            borderRadius="3xl"
          />
          <Subtitle color="white" marginLeft="1rem">
            Front End Developer @ Simpu Inc.{" "}
          </Subtitle>
          <BodyText color="white" marginLeft="1rem" fontWeight="bold">
            May 2021 - March 2023
          </BodyText>
        </Flex>
        <Flex align="baseline" style={{ marginBottom: "2rem" }}>
          <Divider
            width="2rem"
            variant="solid"
            background="linear-gradient(#fff, #fff) padding-box, linear-gradient(45deg, slateblue, coral) border-box"
            border="4px solid transparent"
            borderRadius="3xl"
          />
          <Subtitle color="white" marginLeft="1rem">
            Student @ Microverse.{" "}
          </Subtitle>
          <BodyText color="white" marginLeft="1rem" fontWeight="bold">
            October 2019 - May 2021
          </BodyText>
        </Flex>
        <Flex align="baseline" style={{ marginBottom: "2rem" }}>
          <Divider
            width="2rem"
            variant="solid"
            background="linear-gradient(#fff, #fff) padding-box, linear-gradient(45deg, slateblue, coral) border-box"
            border="4px solid transparent"
            borderRadius="3xl"
          />
          <Subtitle color="white" marginLeft="1rem">
            Student @ Udacity Front End Developer Nanodegree.{" "}
          </Subtitle>
          <BodyText color="white" marginLeft="1rem" fontWeight="bold">
            July 2018 - December 2018
          </BodyText>
        </Flex>
      </Stack>
    </Container>
  </Box>
);
