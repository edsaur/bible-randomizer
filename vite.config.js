import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    eslint({
      // Fix issues automatically where possible
      fix: true,
      // Specify which files to lint
      include: ["src/**/*.jsx"],
      exclude: ["node_modules/**"],
      // Use overrideConfig.rules to manage ESLint rules
      overrideConfig: {
        rules: {
          "no-unused-vars": "off", // This disables the no-unused-vars rule
        },
      },
    }),
  ],
});
