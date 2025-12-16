import { GoogleGenAI, Type } from "@google/genai";

// NOTA PER LO SVILUPPATORE: Assicurati di creare un file .env nella root del progetto
// e di aggiungere la tua chiave API in questo modo: VITE_API_KEY=LA_TUA_CHIAVE
const apiKey = import.meta.env.VITE_API_KEY || '';

// Initialize Gemini
const ai = new GoogleGenAI({ apiKey });

export const generateDailyInspiration = async (): Promise<{ quote: string; fashionTip: string }> => {
  // Se la chiave non è presente, restituisci subito i dati di fallback per evitare errori.
  if (!apiKey) {
    console.warn("Chiave API di Gemini non trovata. Verranno usati dati di fallback.");
    return {
      quote: "L'eleganza è l'unica bellezza che non sfiorisce mai.",
      fashionTip: "Il tuo accessorio più prezioso per quel giorno sarà il tuo sorriso radioso!"
    };
  }

  try {
    const model = 'gemini-2.5-flash';
    const prompt = `
      Genera un messaggio ispirazionale super "glamour" e chic per una bambina di 10 anni che si prepara alla sua Prima Comunione.
      La bambina ama la moda e sentirsi una principessa.
      Il messaggio deve essere in Italiano e farla sentire speciale.
      Deve contenere due parti:
      1. "quote": Una frase motivazionale breve sull'eleganza, la luce interiore, i sogni o la bellezza di crescere.
      2. "fashionTip": Un consiglio di stile divertente e raffinato (es. sugli accessori, sul sorriso, sull'essere se stessi con stile).
    `;

    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            quote: { type: Type.STRING },
            fashionTip: { type: Type.STRING },
          },
          required: ["quote", "fashionTip"],
        },
      },
    });

    const text = response.text;
    if (!text) throw new Error("No content generated");
    
    return JSON.parse(text);
  } catch (error) {
    console.error("Gemini API Error:", error);
    return {
      quote: "L'eleganza è l'unica bellezza che non sfiorisce mai.",
      fashionTip: "Il tuo accessorio più prezioso per quel giorno sarà il tuo sorriso radioso!"
    };
  }
};
