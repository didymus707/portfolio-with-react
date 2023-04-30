import { Avatar, Box, Container, Flex } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { SmallSubtitle } from "./custom/icons";

export const Header = () => {
  return (
    <Box>
      <Container maxW="1000px">
        <nav>
          <Flex
            py="1rem"
            wrap="wrap"
            width="100%"
            color="white"
            align="center"
            justify="space-between"
          >
            <Flex className="logo" align="center" width={["40%", "22%"]}>
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
            <Flex
              ml="auto"
              mt={[4, 0]}
              order={[3, 1]}
              className="others"
              justify="space-evenly"
              width={['100%', "42%"]}
            >
              <Link to="/projects">Projects</Link>
              <Link to="/about">About</Link>
              <Link to="/experience">Experience</Link>
            </Flex>
            <Box
              display="flex"
              order={[1, 3]}
              className="contact"
              width={["40%", "22%"]}
              justifyContent="flex-end"
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
