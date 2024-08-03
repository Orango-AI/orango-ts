<p align="center">
  <img width="100" src="https://orango.ai/logo.svg" alt="Orango AI logo">
</p>

<h1 align="center">
  Orango Sandboxes
</h1>

<h3 align="center">
  Secure sandboxed cloud and edge environments made for AI agents and AI apps
</h3>

<h4 align="center">
  <a href="https://orango.ai/docs/">Docs</a> &#124;
  <a href="https://orango.ai">Website</a> &#124;
  <a href="https://orango-ai.slack.com">Slack</a> &#124;
  <a href="https://x.com/Orango_AI">Twitter</a>
</h4>

## What is Orango AI&#63;

Orango AI Sandbox is a secure sandboxed cloud environment made for AI agents and AI
apps. Sandboxes allow AI agents and apps to have long running cloud secure
environments. In these environments, large language models can use the same
tools as humans do. For example&#58;

- Cloud browsers
- GitHub repositories and CLIs
- Coding tools like linters, autocomplete, &quot;go-to defintion&quot;
- Running LLM generated code
- Audio &amp; video editing

**The Orango AI sandbox can be connected to any LLM and any AI agent or app.**

---

### Getting started &amp; documentation

&gt; Please visit [documentation](https://orango.ai/docs) to get started.

To create and control a sandbox, you use our SDK&#58;

**JavaScript &amp; TypeScript**

1. Install SDK

```bash
npm install @orango-ai/sdk
```

```bash
yarn add @orango-ai/sdk
```

2. Start sandbox

```js
import { Sandbox } from "@orango-ai/sdk";

async function run() {
  const sandbox = await Sandbox.create();
  await sandbox.exec("x = 1");

  const execution = await sandbox.exec("x += 1; x");
  console.log(execution.text); // outputs 2

  await sandbox.close();
}

run().catch(console.error);
```

## Integration with LLM Frameworks

## SDKs

1. [JS SDK](https://www.npmjs.com/package/@orango-ai/sdk)
1. [CLI](https://www.npmjs.com/package/@orango-ai/cli)
1. [Documentation](https://orango.ai/docs/)

---

## Links

- [Support](mailto:hello@orango.ai)
- [Dashboard](https://orango.ai/dashboard)
- [API Reference](https://orango.ai/docs//api-reference)
- [Community](https://orango-ai.slack.com)
- [Blog](https://orango.ai/blog)

## Footer Socials

- [X (Twitter)](https://x.com/Orango_AI)
- [GitHub](https://github.com/Orango-AI)
- [LinkedIn](https://www.linkedin.com/company/orango-ai)

```

```
