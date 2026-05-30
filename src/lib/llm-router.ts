import { gemini20Flash, gemini15Pro } from '@genkit-ai/googleai';
import { generate } from '@genkit-ai/ai';

type TaskType = 'DATA_ANALYSIS' | 'IMAGE_GEN' | 'FAST_CHAT' | 'REASONING';

const MODEL_PRIORITY: Record<TaskType, any[]> = {
  DATA_ANALYSIS: ['claude-3-5-sonnet', 'gemini-1-5-pro', 'gpt-4o'],
  IMAGE_GEN: ['imagen-3', 'dall-e-3', 'stable-diffusion-xl'],
  FAST_CHAT: ['gemini-2-0-flash', 'gpt-4o-mini', 'llama-3-70b-groq'],
  REASONING: ['o1-preview', 'claude-3-5-sonnet', 'gemini-1-5-pro']
};

export async function cascadedGenerate(prompt: string, task: TaskType) {
  const models = MODEL_PRIORITY[task];
  let lastError;

  for (const modelId of models) {
    try {
      console.log(`[CascadedLoop] Attempting task with: ${modelId}`);
      // Logic to switch providers based on modelId prefix would go here
      const response = await generate({
        model: modelId === 'gemini-2-0-flash' ? gemini20Flash : gemini15Pro,
        prompt: prompt,
      });
      return response.text();
    } catch (err) {
      console.warn(`[CascadedLoop] ${modelId} failed, falling back...`);
      lastError = err;
      continue;
    }
  }
  throw new Error(`All models failed: ${lastError}`);
}
