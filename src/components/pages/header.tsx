import { Box, Container, Flex, Link as ChakraLink } from "@chakra-ui/react";
import { SmallSubtitle } from "../custom/icons";

const navItems = [
  { label: "About", id: "about" },
  { label: "Experience", id: "experience" },
  { label: "Projects", id: "portfolio" },
  { label: "Contact", id: "contact" },
];

const scrollToSection = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

export const Header = () => (
  <Box
    left="0"
    right="0"
    top="0"
    zIndex={1000}
    bg="bg.page"
    position="fixed"
    borderBottom="1px solid"
    borderColor="border.subtle"
  >
    <Container maxW="1200px">
      <nav>
        <Flex
          py={["0.875rem", "1rem"]}
          width="100%"
          align="center"
          gap="1rem"
          justify="space-between"
        >
          <ChakraLink
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            textDecor="none"
            _hover={{ cursor: "pointer", textDecoration: "none" }}
          >
            <SmallSubtitle color="text.primary" whiteSpace="nowrap">
              Adewale Orotayo
            </SmallSubtitle>
          </ChakraLink>

          <Flex
            gap={["0.9rem", "1.5rem"]}
            align="center"
            fontSize={["0.8125rem", "0.9375rem"]}
          >
            {navItems.map((item) => (
              <ChakraLink
                key={item.id}
                color="text.secondary"
                whiteSpace="nowrap"
                textDecor="none"
                transition="color 0.2s ease"
                onClick={() => scrollToSection(item.id)}
                _hover={{ color: "accent.solid", textDecoration: "none" }}
              >
                {item.label}
              </ChakraLink>
            ))}
          </Flex>
        </Flex>
      </nav>
    </Container>
  </Box>
);
