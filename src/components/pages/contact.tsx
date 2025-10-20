import { Box, Container, Divider, Flex, Icon } from "@chakra-ui/react";
import { BodyText, Heading2 } from "../custom/icons";
import { BsEnvelope } from "react-icons/bs";
import { GoLocation } from "react-icons/go";


export const Contact = () => (
  <Box bg="#282929" mt='4rem' py="1rem">
    <Container maxW="1200px">
      <Heading2 color="white">Contact</Heading2>
      <Box ml="1rem">
        <Flex align="baseline" my="2.5rem">
          <Divider
            width="2rem"
            variant="solid"
            background="linear-gradient(#fff, #fff) padding-box, linear-gradient(45deg, slateblue, coral) border-box"
            border="4px solid transparent"
            borderRadius="3xl"
          />
          <Box ml="0.9rem" mt='1rem'>
            <BodyText color="whiteAlpha.800" fontSize="xl">
              You are free to reach out to me whether you have a project or
              question or you just want to say hi and I'll try my best to get
              back to you
            </BodyText>
          </Box>
        </Flex>

        <Flex
          gap="2rem"
          justify="center"
          margin={[0, 0, "0 auto", "0 auto", "0 auto"]}
          width={["100%", "100%", "75%"]}
          wrap={["wrap", "wrap", "nowrap"]}
        >
          <Box
            p={4}
            as="a"
            bg="#2D2E31"
            rounded="md"
            color="white"
            display="flex"
            alignItems="center"
            href="mailto:didymus7007@gmail.com"
            flex={["1 1 100%", "1 1 45%", "1 1 25%"]}
            _hover={{
              bgGradient: "linear(to-r, slateblue, coral)",
              bgClip: "text",
            }}
          >
            <Icon as={BsEnvelope} mr="1rem" boxSize={6} />
            <BodyText fontSize="lg">didymus7007@gmail.com</BodyText>
          </Box>
          <Box
            p={4}
            bg="#2D2E31"
            rounded="md"
            color="white"
            display="flex"
            alignItems="center"
            flex={["1 1 100%", "1 1 45%", "1 1 25%"]}
          >
            <Icon as={GoLocation} mr="1rem" boxSize={6} />
            <BodyText fontSize="lg">Sunderland, UK</BodyText>
          </Box>
        </Flex>
      </Box>
    </Container>
  </Box>
);
