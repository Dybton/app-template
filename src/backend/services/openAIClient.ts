import OpenAI from "openai";

// TODO: This does not belong in DB folder - Move somewher else
export const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
