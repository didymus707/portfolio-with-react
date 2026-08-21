import {
  Box,
  Button,
  Container,
  Flex,
  Image,
  Stack,
  Badge,
  SimpleGrid,
  Tag,
  TagLabel,
  HStack,
} from "@chakra-ui/react";
import { SmallSubtitle, BodyText, Heading2 } from "../custom/icons";

/**
 * ⚠️ TODO (Adewale): replace the placeholder links below with real URLs.
 * Anything left as "" simply hides that button — no broken links.
 */
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
    title: "Muse & Stitch",
    alt: "Muse & Stitch AI virtual try-on for made-to-order fashion",
    status: "Live",
    featured: true,
    summary:
      "AI virtual try-on for a small West African fashion importer. Customers upload a photo and see garments rendered on their own body before committing to an order, then reserve in-stock pieces or pre-commit to made-to-order designs. Built and shipped in a one-week hackathon window, integrating YouCam's AI Clothes v4 API with async task creation and result polling.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "YouCam API"],
    preview: "https://museandstitch.vercel.app/",
    github: "https://github.com/didymus707/museandstitch",
    src: "https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/005/116/559/datas/medium.jpg",
  },
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

const statusStyle: Record<string, { bg: string; color: string }> = {
  Live: { bg: "rgba(63,191,143,0.12)", color: "status.live" },
  "In beta": { bg: "rgba(110,139,255,0.14)", color: "accent.300" },
  "In progress": { bg: "rgba(224,164,88,0.12)", color: "status.building" },
  Shelved: { bg: "rgba(122,131,147,0.14)", color: "status.shelved" },
};

export const Portfolio = () => {
  const featured = projects.filter((p) => p.featured);
  const earlier = projects.filter((p) => !p.featured);

  return (
    <Box id="projects" bg="bg.band" py={["3rem", "4rem"]}>
      <Container maxW="1200px">
        <Heading2 color="text.primary" textAlign="center">
          Projects
        </Heading2>
        <BodyText
          mt="1rem"
          fontSize="lg"
          textAlign="center"
          color="text.muted"
          maxW="640px"
          mx="auto"
        >
          Products I've designed and built end to end — from data layer and API
          through to shipped interface.
        </BodyText>

        <SimpleGrid columns={[1, 1, 2, 2]} spacing="1.5rem" mt="3rem">
          {featured.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </SimpleGrid>

        <Heading2
          color="text.primary"
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
      rounded="card"
      bg="bg.card"
      spacing="1rem"
      border="1px solid"
      borderColor="border.subtle"
      transition="transform 0.2s ease, border-color 0.2s ease"
      _hover={{ transform: "translateY(-4px)", borderColor: "border.strong" }}
    >
      <Box
        width="100%"
        height="160px"
        rounded="lg"
        overflow="hidden"
        bg="ink.line"
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
          <BodyText
            fontFamily="mono"
            fontSize="sm"
            letterSpacing="0.12em"
            textTransform="uppercase"
            color="text.muted"
          >
            {title}
          </BodyText>
        )}
      </Box>

      <Flex justify="space-between" align="center" gap="0.5rem">
        <SmallSubtitle color="text.primary">{title}</SmallSubtitle>
        {status && (
          <Badge
            bg={statusStyle[status]?.bg}
            color={statusStyle[status]?.color}
            whiteSpace="nowrap"
          >
            {status}
          </Badge>
        )}
      </Flex>

      <BodyText color="text.secondary" fontSize="sm" flex="1">
        {summary}
      </BodyText>

      <HStack wrap="wrap" alignItems="baseline" spacing="0.4rem">
        {stack.map((tech) => (
          <Tag
            key={tech}
            size="sm"
            mb="0.4rem"
            rounded="6px"
            bg="ink.line"
            color="text.secondary"
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
            color="text.primary"
            rounded="button"
            href={preview}
            target="_blank"
            rel="noopener noreferrer"
            variant="outline"
            fontSize="0.75rem"
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
            color="text.primary"
            rounded="button"
            target="_blank"
            rel="noopener noreferrer"
            variant="outline"
            fontSize="0.75rem"
          >
            View Code
          </Button>
        )}
      </Flex>
    </Stack>
  );
};
