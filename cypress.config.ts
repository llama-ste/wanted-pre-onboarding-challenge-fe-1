import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {},
    baseUrl: "http://localhost:3000",
    env: {
      AUTH_EMAIL: "test@test.com",
      AUTH_PASSWORD: "testtest",
    },
  },
});
