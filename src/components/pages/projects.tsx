import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Image,
  SimpleGrid,
  Stack,
  Tag,
  TagLabel,
} from "@chakra-ui/react";
import { Badge } from "@chakra-ui/react";
import { SmallSubtitle, BodyText, Heading2 } from "../custom/icons";

type Project = {
  title: string;
  alt: string;
  summary: string;
  stack: string[];
  preview?: string;
  github?: string;
  status?: "Live" | "In beta" | "In progress" | "Shelved";
  src?: string;
  featured?: boolean;
};

const projects: Project[] = [
  {
    title: "stoQr",
    alt: "stoQr household inventory and budget tracking app",
    status: "In beta",
    featured: true,
    summary:
      "Cross-platform mobile app for household inventory and budget tracking. Budget dashboard with crowdsourced UK price comparison, full inventory CRUD with optimistic UI for unreliable networks, and push notifications. Currently in Android beta, distributed to testers via EAS Build.",
    stack: [
      "React Native",
      "Expo SDK 54",
      "Expo Router",
      "TypeScript",
      "Supabase",
    ],
    preview: "", // TODO: Play Store / beta signup / landing page
    github: "", // TODO: repo URL if public
    src: "", // TODO: screenshot or GIF (Cloudinary)
  },
  {
    title: "Q-Helper",
    alt: "Q-Helper hospital waiting room queue management",
    status: "In progress",
    featured: true,
    summary:
      "Queue management for hospital and clinic waiting rooms, built after an A&E visit where patients with hard-to-pronounce names were repeatedly passed over. Displays initials and queue numbers on any Smart TV browser — no extra hardware. Display board live; staff console and auth in progress.",
    stack: ["React", "TypeScript", "Supabase"],
    preview: "", // TODO: live display board URL
    github: "", // TODO: repo URL if public
    src: "",
  },
  {
    title: "BlocTi",
    alt: "BlocTi execution intelligence for deep work",
    status: "Shelved",
    featured: true,
    summary:
      "A work-execution engine built on an event-sourced architecture: plan a session upfront, capture activity events (start, pause, switch, complete), and derive state deterministically from the event log for full session replay. Compares plan vs. reality to measure focus time, interruptions and context-switching — how well time was executed, not just how much was logged.",
    stack: ["React", "TypeScript", "Tailwind CSS"],
    preview: "",
    github: "https://github.com/didymus707/Time-Block-Timer-React-TS-",
    src: "https://res.cloudinary.com/didymus/video/upload/v1765588355/6d7ac90a-a57d-4cb1-9940-e62c1f9e2a0d_d8nttu.gif",
  },
  {
    title: "Earth Defenders",
    alt: "Earth Defenders space shooter game",
    summary:
      "Browser space-shooter built with Phaser 3, applying OOP patterns with a Webpack and Babel build pipeline.",
    stack: ["JavaScript", "Phaser 3", "Webpack"],
    preview: "https://earthdefenders.netlify.app/",
    github: "https://github.com/didymus707/Space-Shooter-With-Phaser3",
    src: "https://res.cloudinary.com/didymus/image/upload/v1683026105/Screen_Shot_2023-05-02_at_12.14.47_PM_jq62io.png",
  },
  {
    title: "Card Page",
    alt: "Responsive card page",
    summary:
      "A responsive, component-driven card layout exploring Chakra UI theming and TypeScript prop patterns.",
    stack: ["React", "TypeScript", "Chakra UI"],
    preview: "https://card-pagetr.netlify.app/",
    github: "https://github.com/didymus707/card-page",
    src: "https://res.cloudinary.com/didymus/image/upload/v1685573759/Screen_Shot_2023-05-29_at_7.12.02_PM_qurmsc.png",
  },
  {
    title: "Calculator",
    alt: "Calculator app",
    summary:
      "A calculator app built with React, using React Router for view state.",
    stack: ["React", "React Router"],
    preview: "https://calclator.netlify.app/",
    github: "https://github.com/didymus707/calclator",
    src: "https://res.cloudinary.com/didymus/image/upload/v1683025981/Screen_Shot_2023-05-01_at_7.29.14_PM_dc9kbn.png",
  },
];


const statusColor: Record<string, string> = {
  Live: "green",
  "In beta": "purple",
  "In progress": "orange",
  Shelved: "gray",
};

export const Portfolio = () => {
  const featured = projects.filter((p) => p.featured);
  const earlier = projects.filter((p) => !p.featured);

  return (
    <Box id="projects" bg="#353533" py={["3rem", "4rem"]}>
      <Container maxW="1200px">
        <Heading2 color="white" textAlign="center">
          Projects
        </Heading2>
        <BodyText
          mt="1rem"
          fontSize="lg"
          textAlign="center"
          color="whiteAlpha.700"
          maxW="640px"
          mx="auto"
        >
          Products I've designed and built end to end — from data layer and API
          through to shipped interface.
        </BodyText>

        <SimpleGrid columns={[1, 1, 2, 3]} spacing="1.5rem" mt="3rem">
          {featured.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </SimpleGrid>

        <Heading2
          color="white"
          fontSize={["xl", "2xl"]}
          mt="4rem"
          textAlign="center"
        >
          Earlier work
        </Heading2>
        <SimpleGrid columns={[1, 1, 2, 3]} spacing="1.5rem" mt="2rem">
          {earlier.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

const ProjectCard = (project: Project) => {
  const { src, title, alt, summary, preview, github, status, stack } = project;

  return (
    <Stack
      p="1.5rem"
      rounded="2xl"
      bg="#2D2E31"
      spacing="1rem"
      border="1px solid"
      borderColor="whiteAlpha.300"
      transition="transform 0.2s ease, border-color 0.2s ease"
      _hover={{ transform: "translateY(-4px)", borderColor: "whiteAlpha.600" }}
    >
      <Box
        width="100%"
        height="160px"
        rounded="lg"
        overflow="hidden"
        bgGradient="linear(to-br, slateblue, coral)"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        {src ? (
          <Image
            alt={alt}
            src={src}
            width="100%"
            height="100%"
            objectFit="cover"
          />
        ) : (
          <BodyText fontSize="3xl" fontWeight="bold" color="white">
            {title}
          </BodyText>
        )}
      </Box>

      <Flex justify="space-between" align="center" gap="0.5rem">
        <SmallSubtitle color="white">{title}</SmallSubtitle>
        {status && (
          <Badge colorScheme={statusColor[status] ?? "gray"} rounded="md">
            {status}
          </Badge>
        )}
      </Flex>

      <BodyText color="whiteAlpha.800" fontSize="sm" flex="1">
        {summary}
      </BodyText>

      <HStack wrap="wrap" alignItems='baseline' spacing="0.4rem">
        {stack.map((tech) => (
          <Tag
            key={tech}
            size="sm"
            mb="0.4rem"
            rounded="full"
            variant="subtle"
            colorScheme="purple"
          >
            <TagLabel>{tech}</TagLabel>
          </Tag>
        ))}
      </HStack>

      <Flex gap="0.75rem" mt="auto">
        {preview && (
          <Button
            as="a"
            flex="1"
            size="sm"
            color="white"
            rounded="3xl"
            href={preview}
            target="_blank"
            rel="noopener noreferrer"
            variant="outline"
            fontSize="0.75rem"
            _hover={{ bgGradient: "linear(to-r, slateblue, coral)" }}
          >
            Live Preview
          </Button>
        )}
        {github && (
          <Button
            as="a"
            flex="1"
            size="sm"
            href={github}
            color="white"
            rounded="3xl"
            target="_blank"
            rel="noopener noreferrer"
            variant="outline"
            fontSize="0.75rem"
            _hover={{ bgGradient: "linear(to-r, slateblue, coral)" }}
          >
            View Code
          </Button>
        )}
      </Flex>
    </Stack>
  );
};

// home
// ##060605
// #20201b
// #2a2a29 fc
// #474746
