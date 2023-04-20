import { Box, Divider, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { FaReact } from "react-icons/fa";
import Icons, { NodeJS, Ruby, TypeScript } from "./custom/icons";

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
            <Flex wrap="wrap" justify="space-evenly" rowGap="20px">
              <Icons icon={FaReact} color="#00D8FF" iconName="React" />
              <Icons icon={FaReact} iconName="Git" />
              <Icons icon={NodeJS} iconName="NodeJs" />
              <Icons icon={TypeScript} iconName="TypeScript" />
              <Icons icon={FaReact} iconName="React" />
              <Icons icon={Ruby} iconName="Ruby" />
              <Icons icon={FaReact} iconName="Ruby on Rails" />
            </Flex>
          </Box>
        </Stack>
      </Box>
      <Box></Box>
    </Stack>
  );
};

export default About;
