export interface ChatMessage {
  role: "system" | "user" | "assistant";
  content: string;
}

export interface OtariUsage {
  completion_tokens: number;
  prompt_tokens: number;
  total_tokens: number;
  cost_usd?: string;
  estimated_cost?: number;
}

export interface OtariChatResponse {
  id: string;
  model: string;
  choices: Array<{
    index: number;
    message: {
      role: string;
      content: string;
    };
    finish_reason: string;
  }>;
  usage?: OtariUsage;
  created: number;
}

export const OPEN_WEIGHT_MODELS = [
  {
    id: "deepseek/deepseek-v4.1-flash-1017",
    name: "DeepSeek V4.1 Flash",
    provider: "DeepSeek",
    badge: "Open Weights",
    contextLength: "1.0M",
  },
  {
    id: "meta/muse-spark-open",
    name: "Meta Muse Spark Open",
    provider: "Meta",
    badge: "Open Weights",
    contextLength: "1.0M",
  },
  {
    id: "nvidia/nemotron-3.5-super-vl-120b-a12b",
    name: "NVIDIA Nemotron 3.5 Super VL",
    provider: "NVIDIA",
    badge: "Open Weights",
    contextLength: "1.0M",
  },
] as const;

export async function callOtariChat({
  model = "deepseek/deepseek-v4.1-flash-1017",
  messages,
  temperature = 0.7,
}: {
  model?: string;
  messages: ChatMessage[];
  temperature?: number;
}): Promise<OtariChatResponse> {
  const apiKey = process.env.OTARI_API_KEY;
  const baseUrl = process.env.OTARI_BASE_URL || "https://otari.ai/api/v1";

  if (!apiKey) {
    throw new Error("Missing OTARI_API_KEY environment variable.");
  }

  const response = await fetch(`${baseUrl}/chat/completions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Otari-Key": apiKey,
    },
    body: JSON.stringify({
      model,
      messages,
      temperature,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Otari API error (${response.status}): ${errorText}`);
  }

  return response.json();
}
