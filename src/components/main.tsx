import { Stack } from "@chakra-ui/react";
import { Contact } from "./pages/contact";
import ScrollToTop from "react-scroll-to-top";
import { Home, About, Portfolio, Experience } from "./pages";

const Main = () => {
  return (
    <main>
      <Stack spacing="0" pt={["7rem", "7rem", "8rem"]}>
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="portfolio">
          <Portfolio />
        </section>
        <section id="contact">
          <Contact />
        </section>
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
