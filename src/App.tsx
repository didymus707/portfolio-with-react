import React from "react";
import Page from "./page";
import { Footer } from "./components/footer";
import { Contact } from "./components/pages/contact";
import { Box, ChakraProvider, theme } from "@chakra-ui/react";
import { Header, About, Portfolio, Experience } from "./components/pages";

const App = () => (
  <ChakraProvider theme={theme}>
    <Box bg="#282929" pb="20px" overflow="hidden">
      <Header />
      <main>
        <section id="home">
          <h1>Welcome to my portfolio</h1>
          
        </section>
        <section id="about">
          <About />
        </section>
        <section id="portfolio">
          <Portfolio />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </Box>
  </ChakraProvider>
);

export default App;
