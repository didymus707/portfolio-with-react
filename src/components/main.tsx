import { Stack } from "@chakra-ui/react";
import { Contact } from "./pages/contact";
import ScrollToTop from "react-scroll-to-top";
import { Home, About, Portfolio, Experience } from "./pages";

const Main = () => {
  return (
    <main>
      <Stack mt="12rem" px={[0, 0]}>
        <Home />
        <About />
        <Experience />
        <Portfolio />
        <Contact />
        <ScrollToTop
          width="40"
          color="white"
          smooth={true}
          style={{ background: "none", margin: "0 auto" }}
        />
      </Stack>
    </main>
  );
};

export default Main;
