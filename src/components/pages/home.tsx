import { BodyText, Subtitle } from "../custom/icons";
import { Box, Button, Container, Flex, Image } from "@chakra-ui/react";

export const Home = () => (
  <Box
    bg="#282929"
  >
    <Container maxW="1200px">
      <Flex
        mb="1rem"
        width="100%"
        rowGap="2rem"
        align="center"
        justify="center"
        px={["1rem", null]}
        color="whiteAlpha.800"
        wrap={["wrap", "nowrap"]}
      >
        <Box
          width={["100%", "24%"]}
          style={{
            backgroundImage: `url("https://res.cloudinary.com/didymus/image/upload/v1681945503/Untitled-1_j3cumc.jpg")`,
          }}
        >
          <Image
            width="100%"
            boxSize="550px"
            objectFit="cover"
            objectPosition="bottom"
            src="https://res.cloudinary.com/didymus/image/upload/e_background_removal/b_rgb:282929/c_pad,w_800,h_1422,ar_9:16,f_png/v1716467018/me_e5nfkj.jpg"
            // src="https://res.cloudinary.com/didymus/image/upload/v1681945504/Untitled-2_nwudfq.jpg"
            alt="Adewale Orotayo"
          />
        </Box>
        <Box width={["100%", "51%"]}  ml={["0", "3rem"]}>
          <Subtitle fontSize={["3xl", "4xl"]}>
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
          <BodyText fontSize="2xl">Front End developer</BodyText>
          <Button
            as="a"
            color="white"
            variant="outline"
            marginTop="1.5rem"
            href="mailto:didymus7007@gmail.com"
            _hover={{ bgGradient: "linear(to-r, slateblue, coral)" }}
          >
            Contact Me
          </Button>
          {/* <Flex>
            <Button
              as="a"
              color="white"
              target="_blank"
              variant="outline"
              marginTop="1.5rem"
              href="mailto:didymus7007@gmail.com"
              _hover={{ bgGradient: "linear(to-r, slateblue, coral)" }}
            >
              Contact Me
            </Button>
            <Button
              as="a"
              color="white"
              target="_blank"
              variant="outline"
              marginTop="1.5rem"
              onClick={() => window.print()}
              _hover={{ bgGradient: "linear(to-r, slateblue, coral)" }}
            >
              Download CV
            </Button>
          </Flex> */}
        </Box>
      </Flex>
    </Container>
  </Box>
);
