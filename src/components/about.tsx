import {
  Box,
  Divider,
  Flex,
  Heading,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
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
  Heading2,
  Javascript,
} from "./custom/icons";

const About = () => {
  return (
    <Stack direction="column" className="about-classs" color="white">
      <Box mt="1rem">
        <Heading2 color="white">About</Heading2>
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
            <Heading2 textAlign="center">My Skills</Heading2>
            <Flex
              gap="30px"
              width="100%"
              mt="3rem !important"
              flexDirection="column"
            >
              <Flex justify="center">
                <CustomIcons icon={FaReact} color="#00D8FF" iconName="React" />
                <CustomIcons
                  icon={Git}
                  iconName="Git"
                  leftMargin="1rem"
                />
                <CustomIcons
                  boxSize={24}
                  icon={NodeJS}
                  iconName="NodeJs"
                  margin="1rem"
                />
                <CustomIcons
                  boxSize={12}
                  icon={TypeScript}
                  iconName="TypeScript"
                />
              </Flex>
              <Flex justify="center">
                <CustomIcons icon={Javascript} iconName="Javascript" />
                <CustomIcons icon={Ruby} iconName="Ruby" margin="1rem" />
                <CustomIcons
                  icon={RubyOnRails}
                  iconName="Ruby on Rails"
                  boxSize={24}
                />
              </Flex>

              <Flex justify="center" rowGap="16px">
                <CustomIcons icon={Html} iconName="HTML" rightMargin="8px" />
                <CustomIcons icon={Css} iconName="CSS" leftMargin="8px" />
              </Flex>
            </Flex>
          </Box>
        </Stack>
      </Box>
      <Box></Box>
    </Stack>
  );
};

export default About;
