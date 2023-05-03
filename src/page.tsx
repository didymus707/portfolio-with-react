import React from "react";
import { Box } from "@chakra-ui/react";
import Main from "./components/main";
import { Outlet } from "react-router-dom";

const Page = () => {
  return (
    <Box bg="#282929" p="0" overflow="hidden">
      <Outlet />
      <Main />
    </Box>
  );
};

export default Page;

// tobi: 1E1F20
// original: 27282B
// #0C111B
// #1E1F20
// #222020
// #140c0c
// #1a1919
// #272b23
