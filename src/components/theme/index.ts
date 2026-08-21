import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

/**
 * Design tokens — Notion-inspired.
 * Surfaces are warm-neutral and closely spaced; separation comes from
 * hairline borders and whitespace rather than value jumps.
 * Text and borders use alpha so they layer instead of stacking as slabs.
 */
const colors = {
  surface: {
    page: "#191919",
    band: "#1E1E1E",
    card: "#242424",
    hover: "#2F2F2F",
  },
  // Notion's muted accent family
  hue: {
    blue: "#529CCA",
    green: "#4DAB9A",
    orange: "#FFA344",
    purple: "#9A6DD7",
  },
};

const semanticTokens = {
  colors: {
    "bg.page": "surface.page",
    "bg.band": "surface.band",
    "bg.card": "surface.card",
    "bg.hover": "surface.hover",
    "bg.chip": "rgba(255,255,255,0.055)",

    "border.subtle": "rgba(255,255,255,0.094)",
    "border.strong": "rgba(255,255,255,0.18)",

    "text.primary": "rgba(255,255,255,0.88)",
    "text.secondary": "rgba(255,255,255,0.56)",
    "text.muted": "rgba(255,255,255,0.36)",

    "accent.solid": "hue.blue",
  },
};

const fonts = {
  heading: `'Inter Tight', Inter, system-ui, -apple-system, sans-serif`,
  body: `Inter, system-ui, -apple-system, sans-serif`,
  mono: `'IBM Plex Mono', ui-monospace, monospace`,
};

const radii = {
  button: "6px",
  card: "6px",
  chip: "4px",
};

const styles = {
  global: {
    "html, body": {
      bg: "bg.page",
      color: "text.primary",
      fontFeatureSettings: `"cv02","cv03","cv04","cv11"`,
      WebkitFontSmoothing: "antialiased",
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
      letterSpacing: "-0.021em",
      fontWeight: 600,
      color: "text.primary",
    },
  },
  Button: {
    baseStyle: { borderRadius: "button", fontWeight: 500 },
    variants: {
      outline: {
        color: "text.primary",
        borderColor: "border.subtle",
        bg: "transparent",
        _hover: { bg: "bg.hover", borderColor: "border.strong" },
        _active: { bg: "bg.hover" },
      },
    },
  },
  Tag: {
    baseStyle: {
      container: {
        bg: "bg.chip",
        color: "text.secondary",
        borderRadius: "chip",
        fontSize: "12px",
        fontWeight: 450,
      },
    },
  },
  Badge: {
    baseStyle: {
      fontFamily: "mono",
      fontSize: "10px",
      letterSpacing: "0.06em",
      textTransform: "uppercase",
      borderRadius: "chip",
      px: "6px",
      py: "2px",
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
