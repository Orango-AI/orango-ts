import { expect, test } from "@playwright/test";
import dotenv from "dotenv";
import { Sandbox } from "../src"; // Adjust the import to point to the local SDK file

dotenv.config();

test.describe("Sandbox SDK", () => {
  let sandbox: Sandbox;

  test.beforeAll(async () => {
    const apiKey = process.env.ORANGO_APIKEY || ""; // Use API key from .env file
    const templateId = undefined;
    sandbox = await Sandbox.create({ apiKey, templateId });
  });

  test.afterAll(async () => {
    await sandbox.close();
  });

  test("should execute code and return the correct result", async () => {
    await sandbox.exec("x = 1");
    const execution = await sandbox.exec("x += 1; x");
    expect(execution.result).toBe(2);
  });

  test("should handle multiple code executions correctly", async () => {
    await sandbox.exec("y = 5");
    const execution1 = await sandbox.exec("y *= 2; y");
    expect(execution1.result).toBe(10);
    const execution2 = await sandbox.exec("y += 10; y");
    expect(execution2.result).toBe(20);
  });

  test("should handle errors in code execution", async () => {
    try {
      await sandbox.exec("z += 1");
      throw new Error("Expected error not thrown");
    } catch (error: any) {
      expect(error.stderr).toContain("name 'z' is not defined");
    }
  });
});
