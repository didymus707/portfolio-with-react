import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

/**
 * Design tokens.
 * Neutrals share a single blue-grey hue family so sections read as one system.
 * Accent is used solid; the gradient is reserved for the hero name only.
 */
const colors = {
  ink: {
    page: "#0B0D10",
    band: "#12151A",
    card: "#1A1E25",
    line: "#262B34",
    lineStrong: "#39404C",
  },
  content: {
    primary: "#E6E9EE",
    secondary: "#B3BAC6",
    muted: "#8B94A3",
  },
  accent: {
    50: "#EEF1FF",
    100: "#D6DEFF",
    200: "#B4C2FF",
    300: "#8FA5FF",
    400: "#6E8BFF",
    500: "#5A76F0",
    600: "#4B63C7",
    700: "#3C4E9E",
    800: "#2C3A75",
    900: "#1D264D",
  },
  status: {
    live: "#3FBF8F",
    building: "#E0A458",
    shelved: "#7A8393",
  },
};

const fonts = {
  heading: `'Archivo', system-ui, -apple-system, sans-serif`,
  body: `'IBM Plex Sans', system-ui, -apple-system, sans-serif`,
  mono: `'IBM Plex Mono', ui-monospace, monospace`,
};

const radii = {
  button: "8px",
  card: "12px",
};

const semanticTokens = {
  colors: {
    "bg.page": "ink.page",
    "bg.band": "ink.band",
    "bg.card": "ink.card",
    "border.subtle": "ink.line",
    "border.strong": "ink.lineStrong",
    "text.primary": "content.primary",
    "text.secondary": "content.secondary",
    "text.muted": "content.muted",
    "accent.solid": "accent.400",
  },
};

const styles = {
  global: {
    "html, body": {
      bg: "bg.page",
      color: "text.primary",
    },
    "*:focus-visible": {
      outline: "2px solid",
      outlineColor: "accent.solid",
      outlineOffset: "2px",
    },
    "@media (prefers-reduced-motion: reduce)": {
      "*": {
        animationDuration: "0.01ms !important",
        transitionDuration: "0.01ms !important",
        scrollBehavior: "auto !important",
      },
    },
  },
};

const components = {
  Heading: {
    baseStyle: {
      fontFamily: "heading",
      letterSpacing: "-0.02em",
      fontWeight: 600,
    },
  },
  Button: {
    baseStyle: { borderRadius: "button", fontWeight: 500 },
    variants: {
      outline: {
        color: "text.primary",
        borderColor: "border.strong",
        _hover: {
          bg: "accent.solid",
          color: "ink.page",
          borderColor: "accent.solid",
        },
        _active: { bg: "accent.500", color: "ink.page" },
      },
    },
  },
  Tag: {
    baseStyle: {
      container: {
        fontFamily: "mono",
        fontSize: "11px",
        letterSpacing: "0.06em",
        textTransform: "uppercase",
      },
    },
  },
  Badge: {
    baseStyle: {
      fontFamily: "mono",
      fontSize: "10px",
      letterSpacing: "0.08em",
      textTransform: "uppercase",
      borderRadius: "6px",
      px: "8px",
      py: "3px",
      fontWeight: 500,
    },
  },
};

export const theme = extendTheme({
  config,
  colors,
  fonts,
  radii,
  semanticTokens,
  styles,
  components,
});

export default theme;
