import { Box, Divider, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { FaReact } from "react-icons/fa";
import CustomIcons, {
  Css,
  Git,
  Html,
  Ruby,
  NodeJS,
  TypeScript,
  RubyOnRails,
} from "./custom/icons";

const About = () => {
  return (
    <Stack direction="column" className="about-classs" color="whiteAlpha.500">
      <Box mt="1rem">
        <Heading as="h1" size="4xl">
          About
        </Heading>
        <Stack>
          <Flex align="baseline" my="2.5rem">
            <Divider
              size="4rem"
              width="5rem"
              variant="solid"
              border="4px solid tan"
            />
            <Box>
              <Text color="whiteAlpha.800" ml="1rem">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                reiciendis voluptate veniam ab tenetur libero beatae esse ex
                adipisci optio vitae quibusdam fugiat recusandae vero ipsam,
                quia architecto. Dolore, possimus?
              </Text>
            </Box>
          </Flex>
          <Box>
            <Text fontSize="3xl" textAlign="center">
              My Skills
            </Text>
            <Flex wrap="wrap" justify="space-evenly" gap="30px">
              <CustomIcons icon={FaReact} color="#00D8FF" iconName="React" />
              <CustomIcons icon={Git} iconName="Git" />
              <CustomIcons icon={NodeJS} iconName="NodeJs" boxSize={24} />
              <CustomIcons
                icon={TypeScript}
                iconName="TypeScript"
                boxSize={12}
              />

              <CustomIcons icon={Ruby} iconName="Ruby" />
              <CustomIcons
                icon={RubyOnRails}
                iconName="Ruby on Rails"
                boxSize={24}
              />
              <CustomIcons icon={Html} iconName="HTML" />
              <CustomIcons icon={Css} iconName="CSS" />
            </Flex>
          </Box>
        </Stack>
      </Box>
      <Box></Box>
    </Stack>
  );
};

export default About;
