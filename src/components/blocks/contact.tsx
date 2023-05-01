import { Box, Container, Divider, Flex, Icon, Link } from "@chakra-ui/react";
// import { useEffect } from "react";
import { BodyText, Heading2, Subtitle } from "../custom/icons";
import { BsEnvelope } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import {
  FaGithub,
  FaLinkedinIn,
  FaMediumM,
  FaTwitter,
  FaSmile,
} from "react-icons/fa";

export const Contact = () => (
  <Box bg="#282929" py="6rem">
    <Container maxW="1000px">
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
          <Box ml="0.9rem">
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
          >
            <Icon as={BsEnvelope} mr="1rem" boxSize={6} />
            <BodyText fontSize="lg">didymus7007@gmail.com</BodyText>
          </Box>
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
          >
            <Icon as={GoLocation} mr="1rem" boxSize={6} />
            <BodyText fontSize="lg">Lagos, Nigeria</BodyText>
          </Box>
        </Flex>

        <Flex justify="center" align="center" mt="2rem">
          <Divider
            width="5rem"
            variant="solid"
            background="linear-gradient(#fff, #fff) padding-box, linear-gradient(45deg, slateblue, coral) border-box"
            border="3px solid transparent"
            borderRadius="3xl"
          />
          <Flex
            color="white"
            justify="space-evenly"
            width={["100%", "55%", "25%"]}
          >
            <Link href="https://www.github.com/didymus707" isExternal>
              <Icon as={FaGithub} boxSize={6} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/adewale-thomas-orotayo"
              isExternal
            >
              <Icon as={FaLinkedinIn} boxSize={6} />
            </Link>
            <Link href="https://didymus707.medium.com/" isExternal>
              <Icon as={FaMediumM} boxSize={6} />
            </Link>
            <Link href="https://www.twitter.com/didy707" isExternal>
              <Icon as={FaTwitter} boxSize={6} />
            </Link>
          </Flex>
          <Divider
            width="5rem"
            variant="solid"
            background="linear-gradient(#fff, #fff) padding-box, linear-gradient(45deg, slateblue, coral) border-box"
            border="3px solid transparent"
            borderRadius="3xl"
          />
        </Flex>

        <Flex mt="4rem" align="center" justify="center">
          <Subtitle color="whiteAlpha.800" textAlign="center" mr="1rem">
            Thanks
          </Subtitle>
          <Icon as={FaSmile} color="yellow.400" boxSize={6} />
        </Flex>
      </Box>
    </Container>
  </Box>
);
