import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

export async function generateResponse(userInput) {
  try {
    const model = genAI.getGenerativeModel({
      model: "gemini-2.0-flash", // ✅ updated model
    });

    const result = await model.generateContent(userInput);
    const response = result.response; // ✅ no need to await this

    return response.text();
  } catch (error) {
    console.error("REAL ERROR:", error);
    throw error;
  }
}

