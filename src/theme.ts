import { createTheme, MantineColorsTuple } from "@mantine/core";

/*
 * Mantine theme, aligned to the design tokens in globals.css.
 *
 * Mantine components (Button, TextInput, Select, Alert) are used across the
 * forms, so their theme has to match the hand-rolled system or the site ends
 * up with two visual languages fighting each other.
 */

const teal: MantineColorsTuple = [
  "#f0fdfa",
  "#ccfbf1",
  "#99f6e4",
  "#5eead4",
  "#2dd4bf",
  "#14b8a6",
  "#0f766e", // primary — matches --accent
  "#115e59",
  "#134e4a",
  "#042f2e",
];

export const theme = createTheme({
  colors: { brand: teal },
  primaryColor: "brand",
  primaryShade: 6,
  fontFamily: "var(--font-body), system-ui, -apple-system, sans-serif",
  fontFamilyMonospace: "var(--font-mono), ui-monospace, monospace",
  headings: {
    fontFamily: "var(--font-display), system-ui, sans-serif",
    fontWeight: "600",
  },
  defaultRadius: "md",
  spacing: { xs: "0.5rem", sm: "0.75rem", md: "1rem", lg: "1.25rem", xl: "2rem" },
  components: {
    Button: { defaultProps: { size: "md" } },
    Container: { defaultProps: { size: "lg" } },
  },
});
