import { Box, Divider, Flex, Stack } from "@chakra-ui/react";
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
} from "./custom/icons";

const About = () => {
  return (
    <Stack color="white" direction="column" className="about-classs">
      <Box mt="1rem">
        <Heading2 color="white">About</Heading2>
        <Stack>
          <Flex align="baseline" my="2.5rem">
            <Divider
              width="5rem"
              variant="solid"
              // background="linear(to-r, green.200, cyan.500)"
              background="linear-gradient(#fff, #fff) padding-box, linear-gradient(45deg, slateblue, coral) border-box"
              border="4px solid transparent"
              borderRadius="3xl"
            />
            <Box>
              <BodyText color="whiteAlpha.800" fontSize='xl
              ' ml="1rem">
                Hi, I am Adewale, finding patterns in problems and providing
                solutions to them are the highlight of my day. I had a
                background in biochemistry and part of the skill I took from
                there is knowing the root cause of a problem and finding a
                solution to it. This skill has helped me in particular since I
                started programming as I must design and build an application or
                website that is fail-safe. <br />
                I am skilled in HTML & CSS, JavaScript,
                Ruby on Rails, React & Redux and soft skills such as
                communication, team collaboration, pair programming, remote
                working. I can work as a front end, back end or in the full
                stack position and I am open to learning also. <br /> In my free
                time, I play video games or play the guitar. I am open to new
                opportunities and challenges.
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
              <Flex justify="center">
                <CustomIcons icon={FaReact} color="#00D8FF" iconName="React" />
                <CustomIcons icon={Git} iconName="Git" leftMargin="1rem" />
                <CustomIcons
                  boxSize={24}
                  icon={NodeJS}
                  iconName="NodeJs"
                  margin="1rem"
                />
                <CustomIcons
                  boxSize={12}
                  icon={TypeScript}
                  iconName="TypeScript"
                />
              </Flex>
              <Flex justify="center">
                <CustomIcons icon={Javascript} iconName="Javascript" />
                <CustomIcons icon={Ruby} iconName="Ruby" margin="1rem" />
                <CustomIcons
                  icon={RubyOnRails}
                  iconName="Ruby on Rails"
                  boxSize={24}
                />
              </Flex>

              <Flex justify="center" rowGap="16px">
                <CustomIcons icon={Html} iconName="HTML" rightMargin="8px" />
                <CustomIcons icon={Css} iconName="CSS" leftMargin="8px" />
              </Flex>
            </Flex>
          </Box>
        </Stack>
      </Box>
    </Stack>
  );
};

export default About;
