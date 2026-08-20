import { BodyText, Subtitle } from "../custom/icons";
import { Box, Button, Container, Flex, Image, Stack } from "@chakra-ui/react";

export const Home = () => (
  <Box bg="#282929" pt={["2rem", "3rem"]} pb={["3rem", "4rem"]}>
    <Container maxW="1200px">
      <Flex
        width="100%"
        gap={["2rem", "2rem", "3rem"]}
        align="center"
        color="whiteAlpha.800"
        direction={["column", "column", "row"]}
      >
        <Box
          flexShrink={0}
          width={["220px", "260px", "30%"]}
          maxW="320px"
          order={[1, 1, 2]}
        >
          <Image
            width="100%"
            height="auto"
            objectFit="contain"
            src="https://res.cloudinary.com/didymus/image/upload/e_background_removal/b_rgb:282929/c_pad,w_800,h_1422,ar_9:16,f_png/v1716467018/me_e5nfkj.jpg"
            alt="Adewale Orotayo"
          />
        </Box>

        <Stack
          spacing="1rem"
          order={[2, 2, 1]}
          flex="1"
          textAlign={["center", "center", "left"]}
        >
          <Subtitle fontSize={["3xl", "4xl", "5xl"]}>
            I'm{" "}
            <Box
              as="span"
              bgClip="text"
              bgGradient="linear(to-r, slateblue, coral)"
            >
              Adewale Orotayo
            </Box>
            ,
          </Subtitle>
          <BodyText fontSize={["xl", "2xl"]} color="whiteAlpha.900">
            Frontend Engineer - React · TypeScript · React Native
          </BodyText>
          <BodyText fontSize={["md", "lg"]} color="whiteAlpha.700" maxW="560px">
            I build data-heavy interfaces and ship products end to end, from the
            Supabase data layer through to the UI.
          </BodyText>
          <Flex
            gap="1rem"
            wrap="wrap"
            pt="0.5rem"
            justify={["center", "center", "flex-start"]}
          >
            <Button
              as="a"
              color="white"
              variant="outline"
              href="mailto:didymus7007@gmail.com"
              _hover={{ bgGradient: "linear(to-r, slateblue, coral" }}
            >
              Contact me
            </Button>
            <Button
              as="a"
              color="white"
              variant="outline"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/didymus707"
              _hover={{ bgGradient: "linear(to-r, slateblue, coral)" }}
            >
              View GitHub
            </Button>
          </Flex>
        </Stack>
      </Flex>
    </Container>
  </Box>
);
