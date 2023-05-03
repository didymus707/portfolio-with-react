import { Avatar, Box, Container, Flex } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { SmallSubtitle } from "../custom/icons";

export const Header = () => {
  return (
    <Box
      left="0"
      right="0"
      mb="2rem"
      bg="#282929"
      zIndex={1000}
      position="fixed"
      boxShadow="0 1px 10px black"
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
            <Link to="/">
              <Flex
                className="logo"
                align="center"
                width={["40%", "40%", "22%"]}
              >
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
            </Link>
            <Flex
              ml="auto"
              mt={[4, 4, 0]}
              order={[3, 3, 1]}
              className="others"
              width={["100%", "100%", "42%"]}
              justify={["space-evenly", "space-evenly"]}
            >
              <Link to="/about">About</Link>
              <Link to="/experience">Experience</Link>
              <Link to="/projects">Projects</Link>
            </Flex>
            <Box
              display="flex"
              order={[1, 1, 3]}
              className="contact"
              justifyContent="flex-end"
              width={["40%", "40%", "22%"]}
            >
              <Link to="/contact">Contact</Link>
            </Box>
          </Flex>
        </nav>
      </Container>
    </Box>
  );
};

// #222020
// #140c0c
// #1a1919
// #272b23
