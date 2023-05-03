import { Stack } from "@chakra-ui/react";
import { Home, About, Portfolio, Experience } from "./pages";
import { Contact } from "./pages/contact";

const Main = () => {
  return (
    <main>
      <Stack mt="6rem" px={[0, 0]}>
        <Home />
        <Portfolio />
        <About />
        <Experience />
        <Contact />
      </Stack>
    </main>
  );
};

export default Main;
