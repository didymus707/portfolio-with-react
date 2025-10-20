import { Avatar, Box, Container, Flex } from "@chakra-ui/react";
import { useRef } from "react";
import { Link as ChakraLink } from "@chakra-ui/react";
import { SmallSubtitle } from "../custom/icons";

export const Header = () => {
  const ref = useRef<HTMLAnchorElement>(null);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

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
      bg="#353533"
      zIndex={1000}
      position="fixed"
      boxShadow="0 2px 6px rgba(0, 0, 0, 0.3)"
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
              ref={ref}
              role="group"
              onClick={() => {
                scrollToSection("home");
                handleScrollToTop();
              }}
              textDecor="none"
              _hover={{
                cursor: "pointer",
                transform: "translateY(-2px)",
                transition: "all 0.3s ease-in-out",
              }}
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
                  _groupHover={{
                    boxShadow: "0 0 12px slateblue",
                    transition: "all 0.3s ease-in-out",
                  }}
                />
                <SmallSubtitle
                  as="h1"
                  ml="8px"
                  bgClip="text"
                  rounded="3xl"
                  bgGradient="linear(to-r, slateblue, coral)"
                  _groupHover={{
                    textShadow: "0 0 8px coral",
                    transition: "all 0.3s ease-in-out",
                  }}
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
                  backgroundSize: "100%",
                  backgroundClip: "text",
                  transition: "background 0.3s ease",
                }}
                onClick={() => scrollToSection("about")}
              >
                About
              </ChakraLink>
              <ChakraLink
                _hover={{
                  color: "transparent",
                  backgroundImage: "linear(45deg, slateblue, coral)",
                  backgroundSize: "100%",
                  backgroundClip: "text",
                  transition: "background 0.3s ease",
                }}
                onClick={() => scrollToSection("experience")}
              >
                Experience
              </ChakraLink>
              <ChakraLink
                _hover={{
                  color: "transparent",
                  backgroundImage: "linear(45deg, slateblue, coral)",
                  backgroundSize: "100%",
                  backgroundClip: "text",
                  transition: "background 0.3s ease",
                }}
                onClick={() => scrollToSection("portfolio")}
              >
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
              <ChakraLink
                _hover={{
                  color: "transparent",
                  backgroundImage: "linear(45deg, slateblue, coral)",
                  backgroundSize: "100%",
                  backgroundClip: "text",
                  transition: "background 0.3s ease",
                }}
                onClick={() => scrollToSection("contact")}
              >
                Contact
              </ChakraLink>
            </Box>
          </Flex>
        </nav>
      </Container>
    </Box>
  );
};
