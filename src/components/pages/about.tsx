import { Box, Container, Divider, Flex, Stack } from "@chakra-ui/react";
import { FaReact } from "react-icons/fa";
import CustomIcons, {
  Css,
  Git,
  Html,
  Ruby,
  NodeJS,
  TypeScript,
  RubyOnRails,
  Heading2,
  Javascript,
  BodyText,
} from "../custom/icons";

export const About = () => {
  return (
    <Box id="about" bg="#282929" mt="12rem">
      <Container maxW="1200px">
        <Stack color="white" direction="column" className="about-classs">
          <Box mt="4rem">
            <Heading2 color="white">About</Heading2>
            <Stack ml="1rem">
              <Flex align="baseline" my="2.5rem">
                <Divider
                  width="5rem"
                  variant="solid"
                  background="linear-gradient(#fff, #fff) padding-box, linear-gradient(45deg, slateblue, coral) border-box"
                  border="4px solid transparent"
                  borderRadius="3xl"
                />
                <Box ml="1rem">
                  <BodyText color="whiteAlpha.800" fontSize="xl">
                    Hi, I'm Adewale, a front-end developer with a passion for
                    building beautiful and user-friendly interfaces. With
                    expertise in React and Redux, I have successfully delivered
                    several projects that have won recognition from clients and
                    led to retaining them. One of such was a log interface that
                    detailed the success or failure of marketing campaigns sent.
                    <br />
                    Outside of work, I enjoy playing the guitar and exploring
                    new technologies. I am a firm believer in continuous
                    learning and always stay up-to-date with the latest industry
                    trends. I am excited to work on new projects and collaborate
                    with like-minded individuals
                  </BodyText>
                </Box>
              </Flex>

              <Box className="skills" style={{ margin: "4rem 0" }}>
                <Heading2 textAlign="center">My Skills</Heading2>
                <Flex
                  gap="30px"
                  width="100%"
                  mt="3rem !important"
                  flexDirection="column"
                >
                  <Flex
                    width="100%"
                    justify="center"
                    gap={["20px", "20px", 0]}
                    wrap={["wrap", "wrap", "nowrap"]}
                  >
                    <CustomIcons
                      icon={FaReact}
                      color="#00D8FF"
                      iconName="React"
                    />
                    <CustomIcons
                      icon={Git}
                      iconName="Git"
                      leftMargin={[0, 0, "1rem"]}
                    />
                    <CustomIcons
                      boxSize={20}
                      icon={NodeJS}
                      iconName="NodeJs"
                      margin={[0, 0, "1rem"]}
                    />
                    <CustomIcons
                      boxSize={12}
                      icon={TypeScript}
                      iconName="TypeScript"
                    />
                  </Flex>
                  <Flex
                    width="100%"
                    justify="center"
                    gap={["20px", "20px", 0]}
                    wrap={["wrap", "wrap", "nowrap"]}
                  >
                    <CustomIcons icon={Javascript} iconName="Javascript" />
                    <CustomIcons
                      icon={Ruby}
                      iconName="Ruby"
                      margin={[0, 0, "1rem"]}
                    />
                    <CustomIcons
                      icon={RubyOnRails}
                      iconName="Ruby on Rails"
                      boxSize={24}
                    />
                  </Flex>

                  <Flex justify="center" rowGap="16px">
                    <CustomIcons
                      icon={Html}
                      iconName="HTML"
                      rightMargin="8px"
                    />
                    <CustomIcons icon={Css} iconName="CSS" leftMargin="8px" />
                  </Flex>
                </Flex>
              </Box>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};
