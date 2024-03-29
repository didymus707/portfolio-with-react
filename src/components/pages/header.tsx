import { Avatar, Box, Container, Flex } from "@chakra-ui/react";
import { useRef } from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";
import { SmallSubtitle } from "../custom/icons";

export const Header = () => {
  const ref = useRef<HTMLAnchorElement>(null);

  const handleScrollToTop = () => {
    if (ref.current) {
      ref.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      left="0"
      right="0"
      mb="2rem"
      bg="#282929"
      zIndex={1000}
      position="fixed"
      boxShadow="0 1px 10px -5px black"
    >
      <Container maxW="1200px">
        <nav>
          <Flex
            py="2rem"
            wrap="wrap"
            width="100%"
            color="white"
            align="center"
            justify="space-between"
          >
            <ChakraLink
              as={ReactRouterLink}
              to="/"
              ref={ref}
              onClick={handleScrollToTop}
            >
              <Flex
                className="logo"
                align="center"
                width={["40%", "40%", "22%"]}
              >
                <Avatar
                  bgGradient="linear(to-r, slateblue, coral)"
                  name="Adewale Orotayo"
                  size="md"
                />
                <SmallSubtitle
                  as="h1"
                  ml="8px"
                  bgClip="text"
                  rounded="3xl"
                  bgGradient="linear(to-r, slateblue, coral)"
                >
                  <span>Adewale</span> <br /> <span>Orotayo</span>
                </SmallSubtitle>
              </Flex>
            </ChakraLink>
            <Flex
              ml="auto"
              mt={[4, 4, 0]}
              order={[3, 3, 1]}
              className="others"
              width={["100%", "100%", "42%"]}
              justify={["space-evenly", "space-evenly"]}
            >
              <ChakraLink
                _hover={{
                  color: "transparent",
                  backgroundImage: "linear(45deg, slateblue, coral)",
                  backgroundSize: '100%',
                  backgroundClip: "text",
                  transition: "background 0.3s ease",
                }}
                as={ReactRouterLink}
                to="/about"
              >
                About
              </ChakraLink>
              <ChakraLink _hover={{
                  color: "transparent",
                  backgroundImage: "linear(45deg, slateblue, coral)",
                  backgroundSize: '100%',
                  backgroundClip: "text",
                  transition: "background 0.3s ease",
                }} as={ReactRouterLink} to="/experience">
                Experience
              </ChakraLink>
              <ChakraLink _hover={{
                  color: "transparent",
                  backgroundImage: "linear(45deg, slateblue, coral)",
                  backgroundSize: '100%',
                  backgroundClip: "text",
                  transition: "background 0.3s ease",
                }} as={ReactRouterLink} to="/projects">
                Projects
              </ChakraLink>
            </Flex>
            <Box
              display="flex"
              order={[1, 1, 3]}
              className="contact"
              justifyContent="flex-end"
              width={["40%", "40%", "22%"]}
            >
              <ChakraLink _hover={{
                  color: "transparent",
                  backgroundImage: "linear(45deg, slateblue, coral)",
                  backgroundSize: '100%',
                  backgroundClip: "text",
                  transition: "background 0.3s ease",
                }} as={ReactRouterLink} to="/contact">
                Contact
              </ChakraLink>
            </Box>
          </Flex>
        </nav>
      </Container>
    </Box>
  );
};

// #222020
// #140c0c
// #1a1919
// #272b23
