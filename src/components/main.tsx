import { Stack } from "@chakra-ui/react";
import { Home, About, Portfolio, Experience } from "./blocks";
import { Contact } from "./blocks/contact";

const Main = () => {
  return (
    <Stack mt="6rem">
      <Home />
      <Portfolio />
      <About />
      <Experience />
      <Contact />
    </Stack>
  );
};

export default Main;
