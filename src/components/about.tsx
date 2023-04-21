import { Box, Divider, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { FaReact } from "react-icons/fa";
import { DiRubyRough } from "react-icons/di";
import Icons, { NodeJS, TypeScript, RubyOnRails, Ruby } from "./custom/icons";

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
              <Icons icon={FaReact} color="#00D8FF" iconName="React" />
              <Icons icon={FaReact} iconName="Git" />
              <Icons icon={NodeJS} iconName="NodeJs" />
              <Icons icon={TypeScript} iconName="TypeScript" />
              <Icons icon={FaReact} iconName="React" />
              <Icons icon={DiRubyRough} iconName="Ruby" color="red" />
              <Icons icon={Ruby} iconName="Ruby on Rails" color='white' />
            </Flex>
          </Box>
        </Stack>
      </Box>
      <Box></Box>
    </Stack>
  );
};

export default About;
