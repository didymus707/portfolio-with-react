import { Box, Container, Divider, Flex, Icon, Link } from "@chakra-ui/react";
import { Subtitle } from "./custom/icons";
import {
  FaGithub,
  FaLinkedinIn,
  FaMediumM,
  FaTwitter,
  FaSmile,
} from "react-icons/fa";

export const Footer = () => (
  <Box bg="#282929" py="4rem" >
    <Container maxW="1200px">
      <Box ml="1rem">
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
              <Icon as={FaGithub} boxSize={6} _hover={{ color: "#ffffff94" }} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/adewale-thomas-orotayo"
              isExternal
            >
              <Icon
                as={FaLinkedinIn}
                boxSize={6}
                _hover={{ color: "#ffffff94" }}
              />
            </Link>
            <Link href="https://didymus707.medium.com/" isExternal>
              <Icon
                as={FaMediumM}
                boxSize={6}
                _hover={{ color: "#ffffff94" }}
              />
            </Link>
            <Link isExternal href="https://www.twitter.com/didy707">
              <Icon
                as={FaTwitter}
                boxSize={6}
                _hover={{
                  color: "#ffffff94",
                }}
              />
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
          <Icon as={FaSmile} color="white" boxSize={6} />
        </Flex>
      </Box>
    </Container>
  </Box>
);
