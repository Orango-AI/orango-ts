import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  use: {
    // Configure any browser settings here
  },
  timeout: 30000, // 30 seconds timeout
});
