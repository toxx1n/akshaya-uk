import { GoogleGenAI } from "@google/genai";
import { RESUME_CONTEXT } from "../constants";

let client: GoogleGenAI | null = null;

const getClient = () => {
  if (!client) {
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      console.error("API_KEY not found in environment variables");
      throw new Error("API Key missing");
    }
    client = new GoogleGenAI({ apiKey });
  }
  return client;
};

export const sendMessageToGemini = async (message: string, history: { role: string; text: string }[]) => {
  try {
    const ai = getClient();
    
    // Construct the conversation history for context
    // We strictly control the system instruction to act as Akshaya's portfolio assistant
    const model = "gemini-2.5-flash";
    
    const response = await ai.models.generateContent({
      model,
      contents: [
        ...history.map(h => ({
            role: h.role === 'user' ? 'user' : 'model',
            parts: [{ text: h.text }]
        })),
        {
          role: 'user',
          parts: [{ text: message }]
        }
      ],
      config: {
        systemInstruction: `You are an AI assistant for Akshaya U K's portfolio website. 
        Your goal is to answer questions about Akshaya professionally using the following resume context.
        
        RESUME CONTEXT:
        ${RESUME_CONTEXT}
        
        Guidelines:
        1. Be polite, professional, and concise.
        2. Only answer based on the provided context. If asked about something not in the resume, say "I don't have that information in my records, but you can contact Akshaya directly."
        3. Speak in the first person plural (e.g., "We," "Akshaya's skills include...") or as a helpful assistant representing Akshaya.
        4. Keep answers short (under 100 words) unless detailed explanation is asked.
        `,
      }
    });

    return response.text;
  } catch (error) {
    console.error("Error communicating with Gemini:", error);
    return "I'm having trouble connecting to the server right now. Please try again later.";
  }
};