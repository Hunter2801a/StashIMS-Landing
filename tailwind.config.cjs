/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte,md,mdx}"],
  theme: {
    extend: {
      colors: {
        "primary-container": "#ccfbf1",
        "secondary-container": "#ccfbf1",
        "error-container": "#ffdad6",
        "primary-fixed-dim": "#99f6e4",
        error: "#ba1a1a",
        "tertiary-fixed": "#e2e8f0",
        "tertiary-fixed-dim": "#cbd5e1",
        "on-error-container": "#93000a",
        "inverse-on-surface": "#f1f5f9",
        "secondary-fixed": "#ccfbf1",
        "tertiary-container": "#e2e8f0",
        "on-secondary-fixed": "#042f2e",
        "primary-fixed": "#ccfbf1",
        "outline-variant": "#cbd5e1",
        "on-secondary": "#ffffff",
        "on-secondary-container": "#134e4a",
        "on-secondary-fixed-variant": "#134e4a",
        "surface-tint": "#0d9488",
        "surface-container-low": "#f0fdfa",
        "surface-container": "#f0fdfa",
        "on-primary": "#ffffff",
        "on-tertiary-container": "#1e293b",
        outline: "#94a3b8",
        "inverse-primary": "#2dd4bf",
        "surface-bright": "#ffffff",
        background: "#f8fafc",
        "on-primary-fixed-variant": "#134e4a",
        "surface-variant": "#ccfbf1",
        "surface-container-highest": "#ccfbf1",
        "on-surface": "#0f172a",
        "surface-container-high": "#ccfbf1",
        "on-tertiary-fixed": "#0f172a",
        secondary: "#0f766e",
        "on-primary-fixed": "#042f2e",
        "on-surface-variant": "#475569",
        "surface-container-lowest": "#ffffff",
        "on-tertiary": "#ffffff",
        "secondary-fixed-dim": "#99f6e4",
        "inverse-surface": "#0f172a",
        surface: "#ffffff",
        primary: "#0d9488",
        tertiary: "#475569",
        "on-tertiary-fixed-variant": "#334155",
        "on-primary-container": "#134e4a",
        "on-error": "#ffffff",
        "on-background": "#0f172a",
        "surface-dim": "#e2e8f0"
      },
      borderRadius: {
        DEFAULT: "0.125rem",
        lg: "0.25rem",
        xl: "0.5rem",
        full: "0.75rem"
      },
      fontFamily: {
        headline: ["Manrope", "sans-serif"],
        body: ["Inter", "sans-serif"],
        label: ["Inter", "sans-serif"]
      }
    }
  },
  darkMode: "class"
};
