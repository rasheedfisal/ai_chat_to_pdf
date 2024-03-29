import { OpenAIApi, Configuration } from "openai-edge";
import { env } from "./env.server";

const config = new Configuration({
  apiKey: env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(config);

export async function getEmbeddings(text: string) {
  try {
    const response = await openai.createEmbedding({
      model: "text-embedding-ada-002",
      input: text.replace(/\n/g, " "),
    });
    const result = await response.json();
    if (!!result.data && Array.isArray(result.data) && result.data.length > 0) {
      console.log("is equal...");
      return result?.data[0]?.embedding as number[];
    } else {
      return [];
    }
  } catch (error) {
    console.log("error calling openai embeddings api", error);
    throw error;
  }
}
