// Create a file named example.ts

import { Sandbox } from "../src";

async function run() {
  const sandbox = await Sandbox.create();
  await sandbox.exec("x = 1");

  const execution = await sandbox.exec("x += 1; x");
  console.log(execution.stdout); // outputs 2

  await sandbox.close();
}

run().catch(console.error);
