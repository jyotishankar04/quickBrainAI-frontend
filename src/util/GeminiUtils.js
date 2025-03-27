import { GoogleGenerativeAI } from "@google/generative-ai";
const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

//  chat bot for home page
export const getAiResponse = async (userMessage) => {
  const prompt = `You are QuickBrain AI's intelligent assistant, your task is to answer the user's question , your owner and you are developed by  QuickBrainAi Team  , The answers should be max 200 words long , Here is the user message: ${userMessage}`;
  const result = await model.generateContent(prompt);
  return result.response.text();
};

// Chat bot for workspace
export const getWorkspaceGlobalAiResponse = async (userMessage) => {
  const prompt = `you are Quickbrain AI your task is to answer the user's question , your owner and you are developed by  QuickBrainAi Team , Here is the user message: ${userMessage}. Give the answer in markdown format.`;

  const result = await model.generateContent(prompt);
  return result.response.text();
};
