import { Avatar, Box, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <Box>
      <nav>
        <Flex py="1rem" justify="space-between" color="white" align="center">
          <Flex className="logo" align="center">
            <Avatar name="Adewale Orotayo" />
            <Heading as="h1" size="sm" color="#BC944F" ml="8px">
              <span>Adewale</span> <br />
              <span>Orotayo</span>
            </Heading>
          </Flex>
          <Flex className="others">
            <Link to="/about">About</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/experience">Experience</Link>
          </Flex>
          <Box className="contact">
            <Link to="/contact">Contact</Link>
          </Box>
        </Flex>
      </nav>
    </Box>
  );
};
