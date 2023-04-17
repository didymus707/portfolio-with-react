import { Avatar, Box, Flex, Heading } from "@chakra-ui/react";
import React from "react";

export const Header = () => {
  return (
    <Box>
      <nav>
        <Flex py="1rem">
          <Flex className="logo" align="center">
            <Avatar name="Adewale Orotayo" />
            <Heading as="h1" size="sm" color="#BC944F" ml="8px">
              <span>Adewale</span> <br />
              <span>Orotayo</span>
            </Heading>
          </Flex>
          <Flex className="others"></Flex>
          <Box className="contacts"></Box>
        </Flex>
      </nav>
    </Box>
  );
};
