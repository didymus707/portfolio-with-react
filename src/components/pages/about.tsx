import { Box, Container, Divider, Flex, Stack } from "@chakra-ui/react";
import { FaReact } from "react-icons/fa";
import CustomIcons, {
  Css,
  Git,
  Html,
  Ruby,
  NodeJS,
  TypeScript,
  RubyOnRails,
  Heading2,
  Javascript,
  BodyText,
} from "../custom/icons";

export const About = () => {
  return (
    <Box id="about" bg="#353533">
      <Container maxW="1200px">
        <Stack color="white" direction="column" className="about-classs">
          <Box mt="6rem">
            <Heading2 color="white">About</Heading2>
            <Stack ml={["0", "1rem"]}>
              <Flex align="flex-start" mt="3rem" gap="1rem">
                <Divider
                  mt="0.7rem"
                  width="5rem"
                  variant="solid"
                  flexShrink={0}
                  background="linear-gradient(#fff, #fff) padding-box, linear-gradient(45deg, slateblue, coral) border-box"
                  border="4px solid transparent"
                  borderRadius="3xl"
                />
                <Box ml="1rem">
                  <BodyText color="whiteAlpha.800" fontSize="xl">
                    I'm Adewale, a frontend engineer working mainly in React,
                    TypeScript and React Native. Most of my professional work
                    has been data-heavy interfaces — campaign analytics
                    dashboards, transaction operations tooling — turning noisy
                    datasets into something a non-engineer can actually act on.
                    <br />
                    <br />
                    These days I build and ship my own products end to end,
                    which means owning the whole stack: Supabase and PostgreSQL
                    at the data layer, API design in between, and the interface
                    on top. Q-Helper came directly out of sitting in an A&amp;E
                    waiting room and noticing how often patients with
                    hard-to-pronounce names got passed over — I care about
                    software that removes that kind of friction.
                    <br />
                    <br />
                    Outside of work I play guitar and keep an eye on where the
                    ecosystem is heading.
                  </BodyText>
                </Box>
              </Flex>

              <Box className="skills" style={{ margin: "4rem 0 6rem" }}>
                <Heading2 textAlign="center">My Skills</Heading2>
                <Flex
                  gap="20px"
                  wrap="wrap"
                  width="100%"
                  justify="center"
                  mt="3rem !important"
                >
                  <CustomIcons
                    icon={FaReact}
                    color="#00D8FF"
                    iconName="React"
                  />
                  <CustomIcons
                    boxSize={12}
                    icon={TypeScript}
                    iconName="TypeScript"
                  />
                  <CustomIcons icon={Javascript} iconName="Javascript" />
                  <CustomIcons boxSize={20} icon={NodeJS} iconName="NodeJs" />
                  <CustomIcons icon={Git} iconName="Git" />
                  <CustomIcons icon={Html} iconName="HTML" rightMargin="8px" />
                  <CustomIcons icon={Css} iconName="CSS" />
                  <CustomIcons icon={Ruby} iconName="Ruby" />
                </Flex>
                <BodyText
                  mt="2rem"
                  fontSize="lg"
                  textAlign="center"
                  color="whiteAlpha.700"
                >
                  Also working with: Next.js · React Native · Expo · Redux ·
                  React Query · Supabase · PostgreSQL · Jest · Chakra UI ·
                  Tailwind CSS
                </BodyText>
              </Box>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};
