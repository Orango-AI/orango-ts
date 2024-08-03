import axios from "axios";

interface ExecutionResponse {
  success: boolean;
  result: string;
  stdout: string;
  stderr: string;
  sessionId: string;
}

interface SandboxOptions {
  apiKey?: string;
  templateId?: string;
  baseUrl?: string; // Allow base URL to be overridden
}

class Sandbox {
  private baseUrl: string;
  private apiKey: string;
  private templateId?: string;
  private sessionId?: string;

  private constructor(baseUrl: string, apiKey: string, templateId?: string) {
    this.baseUrl = baseUrl;
    this.apiKey = apiKey;
    this.templateId = templateId;
  }

  static async create(options: SandboxOptions = {}): Promise<Sandbox> {
    const apiKeyFromEnv =
      typeof process !== "undefined" && process.env.ORANGO_APIKEY
        ? process.env.ORANGO_APIKEY
        : "";
    const finalApiKey = options.apiKey || apiKeyFromEnv;

    if (!finalApiKey) {
      throw new Error(
        "API key must be provided either as an argument or through the ORANGO_APIKEY environment variable."
      );
    }

    const baseUrlFromEnv =
      typeof process !== "undefined" && process.env.ORANGO_BASE_URL
        ? process.env.ORANGO_BASE_URL
        : "https://orango.ai/api/v1";

    const finalBaseUrl = options.baseUrl || baseUrlFromEnv;

    const instance = new Sandbox(finalBaseUrl, finalApiKey, options.templateId);
    await instance.init();
    return instance;
  }

  private async init() {
    // Optionally, initialize a sandbox or any setup required
  }

  async exec(code: string): Promise<ExecutionResponse> {
    const response = await axios.post<ExecutionResponse>(
      `${this.baseUrl}/execute`,
      {
        code,
        language: "python",
        env: {},
        sessionId: this.sessionId,
        // templateId: this.templateId,
      },
      {
        headers: {
          Authorization: `Bearer ${this.apiKey}`,
        },
      }
    );

    this.sessionId = response.data.sessionId;

    if (response.data.stderr && response.data.stderr.length > 0)
      throw response?.data;

    return response.data;
  }

  async close() {
    // Optionally, close the sandbox or clean up resources
  }
}

export { Sandbox, SandboxOptions };
