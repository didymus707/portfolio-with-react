import { Box, Container, Divider, Flex, Stack } from "@chakra-ui/react";
import { BodyText, Heading2, Subtitle } from "../custom/icons";

type Role = {
  title: string;
  org?: string;
  period: string;
  detail?: string;
};

const roles: Role[] = [
  {
    title: "Independent Product Development",
    period: "2024 – Present",
    detail:
      "Designing and shipping original products end to end — stoQr (React Native, Expo, Supabase) and Q-Helper (React, TypeScript, Supabase) — covering data layer, API design, UI and deployment pipeline.",
  },
  {
    title: "Front-End Developer (Freelance)",
    org: "Dowell Research",
    period: "Jul 2023 – Nov 2023",
    detail:
      "Built responsive React interfaces against backend REST APIs; triaged and resolved UI defects to tight delivery timelines.",
  },
  {
    title: "Front-End Developer (Contract)",
    org: "Vale Finance",
    period: "Aug 2023 – Sep 2023",
    detail:
      "Transaction operations dashboard in React, TypeScript and Chakra UI — debounced search, date-range filtering, server-side pagination and CSV export for finance ops.",
  },
  {
    title: "Front-End Developer",
    org: "Simpu Inc.",
    period: "May 2021 – Mar 2023",
    detail:
      "Customer-facing campaign analytics dashboard visualising live delivery rates, failed message counts and granular failure reasons. Led migration from CRA/Redux to Next.js and React Query.",
  },
  {
    title: "Microverse — Full Stack Development",
    period: "Oct 2019 – May 2021",
  },
  {
    title: "Udacity — Front End Developer Nanodegree",
    period: "Jul 2018 – Dec 2018",
  },
];

export const Experience = () => (
  <Box bg="#282929" pt="4rem" pb="3rem">
    <Container maxW="1200px" color="white">
      <Heading2 py="1rem">Experience</Heading2>
      <Stack mt="2rem" ml={["0", "1rem"]} spacing="2.5rem">
        {roles.map((role) => (
          <Flex key={role.title + role.period} align="flex-start" gap="1rem">
            <Divider
              mt="0.6rem"
              width="1.5rem"
              variant="solid"
              borderRadius="3xl"
              flexShrink={0}
              border="4px solid transparent"
              background="linear-gradient(#fff, #fff) padding-box, linear-gradient(45deg, slateblue, coral) border-box"
            />
            <Box flex="1">
              <Flex
                gap={["0.25rem", "1rem"]}
                align={["flex-start", "baseline"]}
                direction={["column", "row"]}
                justify="space-between"
              >
                <Subtitle fontSize={["lg", "xl"]}>
                  {role.title}
                  {role.org ? ` @ ${role.org}` : ""}
                </Subtitle>
                <BodyText
                  fontWeight="bold"
                  fontSize="sm"
                  whiteSpace="nowrap"
                  color="whiteAlpha.700"
                >
                  {role.period}
                </BodyText>
              </Flex>
              {role.detail && (
                <BodyText mt="0.5rem" color="whiteAlpha.800" fontSize="md">
                  {role.detail}
                </BodyText>
              )}
            </Box>
          </Flex>
        ))}
      </Stack>
    </Container>
  </Box>
);
