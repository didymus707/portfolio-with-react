import { Stack } from "@chakra-ui/react";
import { Home, About, Portfolio, Experience } from "./blocks";

const Main = () => {
  return (
    <Stack mt="6rem">
      <Home />
      <Portfolio />
      <About />
      <Experience />
    </Stack>
  );
};

export default Main;
