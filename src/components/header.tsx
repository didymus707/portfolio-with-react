import { Avatar, Box, Flex } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { SmallSubtitle } from "./custom/icons";

export const Header = () => {
  return (
    <Box>
      <nav>
        <Flex
          py="1rem"
          color="white"
          align="center"
          width="100%"
          justify="space-between"
        >
          <Flex className="logo" align="center" width="22%">
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
          <Flex className="others" width="42%" justify="space-evenly">
            <Link to="/about">About</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/experience">Experience</Link>
          </Flex>
          <Box
            width="22%"
            display="flex"
            className="contact"
            justifyContent="flex-end"
          >
            <Link to="/contact">Contact</Link>
          </Box>
        </Flex>
      </nav>
    </Box>
  );
};

// #222020
// #140c0c
// #1a1919
// #272b23
