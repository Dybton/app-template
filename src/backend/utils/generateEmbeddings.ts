import { openai } from "../services/openAIClient";

export const generateEmbeddings = async (
  input: string[],
  model = "text-embedding-3-large",
  dimensions = 1024
) => {
  const response = await openai.embeddings.create({
    model: model,
    dimensions: dimensions,
    input,
  });

  return response.data.map((item) => item.embedding);
};
