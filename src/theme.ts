import { createTheme, MantineColorsTuple } from "@mantine/core";

const brandBlue: MantineColorsTuple = [
  "#eff6ff",
  "#dbeafe",
  "#bfdbfe",
  "#93c5fd",
  "#60a5fa",
  "#3b82f6",
  "#2563eb",
  "#1d4ed8",
  "#1e40af",
  "#1e3a8a",
];

export const theme = createTheme({
  colors: {
    brand: brandBlue,
  },
  primaryColor: "brand",
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
  headings: {
    fontFamily: 'Georgia, "Times New Roman", serif',
    fontWeight: "700",
  },
  defaultRadius: "md",
  spacing: {
    xs: "0.5rem",
    sm: "0.75rem",
    md: "1rem",
    lg: "1.25rem",
    xl: "2rem",
  },
  components: {
    Button: {
      defaultProps: {
        size: "md",
      },
    },
    Container: {
      defaultProps: {
        size: "lg",
      },
    },
  },
});
