import { NextRequest, NextResponse } from "next/server";
import { callOtariChat, OPEN_WEIGHT_MODELS } from "@/lib/otari";

export async function GET() {
  return NextResponse.json({
    status: "ok",
    gateway: "Mozilla Otari",
    availableModels: OPEN_WEIGHT_MODELS,
  });
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { prompt, model = "deepseek/deepseek-v4.1-flash-1017" } = body;

    if (!prompt || typeof prompt !== "string") {
      return NextResponse.json(
        { error: "A prompt string is required." },
        { status: 400 }
      );
    }

    const otariRes = await callOtariChat({
      model,
      messages: [
        {
          role: "system",
          content:
            "You are RepoGuide, an expert AI engineer explaining public software repositories clearly and concisely.",
        },
        {
          role: "user",
          content: prompt,
        },
      ],
    });

    const reply = otariRes.choices[0]?.message?.content || "";
    const usage = otariRes.usage;

    return NextResponse.json({
      success: true,
      model: otariRes.model,
      reply,
      usage,
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Internal server error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
