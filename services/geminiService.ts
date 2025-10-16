
import { GoogleGenAI, Type } from "@google/genai";
import { FoodRecommendation } from '../types';

if (!process.env.API_KEY) {
    // In a real app, this would be handled more gracefully.
    // For this environment, we assume the key is present.
    console.warn("API_KEY environment variable not set. Using a placeholder.");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY! });

const foodRecommendationSchema = {
    type: Type.ARRAY,
    items: {
      type: Type.OBJECT,
      properties: {
        brandName: {
          type: Type.STRING,
          description: 'The brand name of the cat food.',
        },
        foodName: {
          type: Type.STRING,
          description: 'The specific product name or formula.',
        },
        type: {
          type: Type.STRING,
          enum: ['Wet', 'Dry', 'Both'],
          description: 'The form of the food (Wet, Dry, or Both).',
        },
        keyBenefits: {
          type: Type.ARRAY,
          items: {
            type: Type.STRING,
          },
          description: 'A list of 3-4 key benefits for the cat.',
        },
        description: {
          type: Type.STRING,
          description: 'A brief, engaging paragraph explaining why this food is a good choice.'
        }
      },
      required: ['brandName', 'foodName', 'type', 'keyBenefits', 'description'],
    },
};

export async function getFoodRecommendations(
  age: string,
  breed: string,
  concerns: string[]
): Promise<FoodRecommendation[]> {
  const concernsString = concerns.length > 0 ? concerns.join(', ') : 'no specific health concerns';
  
  const prompt = `
    Generate 3 cat food recommendations for a cat with the following profile:
    - Age: ${age}
    - Breed: ${breed}
    - Health Concerns: ${concernsString}

    For each recommendation, provide the brand name, the specific food name, whether it's wet or dry, a few key benefits, and a short description.
    Focus on high-quality, reputable brands. Do not invent brands.
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: foodRecommendationSchema,
        temperature: 0.7,
      },
    });

    const jsonText = response.text.trim();
    const recommendations = JSON.parse(jsonText);
    
    // Basic validation
    if (!Array.isArray(recommendations)) {
        throw new Error("API did not return a valid array.");
    }

    return recommendations as FoodRecommendation[];

  } catch (error) {
    console.error("Error fetching food recommendations:", error);
    throw new Error("Failed to get recommendations from AI. Please check your API key and try again.");
  }
}
