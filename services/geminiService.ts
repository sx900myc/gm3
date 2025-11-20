import { GoogleGenAI } from "@google/genai";

// Initialize the Gemini API client
// Note: process.env.API_KEY is injected by the environment.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `You are the intelligent support assistant for NexusTool, a world-class mobile utility software. 
NexusTool features include:
- One-Click Root for Android devices.
- FRP (Factory Reset Protection) Bypass.
- Network Unlocking for over 5000 models.
- Advanced firmware flashing and diagnostics.
- Repair IMEI and MAC addresses.
- Compatibility with Samsung, Xiaomi, Huawei, Oppo, and Vivo.
- Pricing: Free Trial available, Pro License ($49/year), Enterprise ($199/year).

Your tone should be professional, technical, yet accessible. Keep answers concise (under 3 sentences if possible) as this is a chat widget.
If asked about pricing, mention the tiers. If asked about safety, emphasize our 100% secure guarantee.
`;

export const sendMessageToGemini = async (message: string, history: { role: 'user' | 'model'; text: string }[] = []): Promise<string> => {
  try {
    // Format history for the chat model if needed, but for this simple implementation,
    // we will use the generateContent with system instruction for single-turn context or basic context.
    // For a true chat, we use ai.chats.create.
    
    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
      history: history.map(h => ({
        role: h.role,
        parts: [{ text: h.text }],
      })),
    });

    const result = await chat.sendMessage({ message });
    return result.text || "I'm processing that, but I didn't get a clear text response.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I apologize, but I'm having trouble connecting to the Nexus servers right now. Please try again later.";
  }
};