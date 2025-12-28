'use server';

/**
 * @fileOverview This file implements the AI-powered product recommendations flow.
 *
 * - getProductRecommendations - A function that generates product recommendations based on user history.
 * - ProductRecommendationsInput - The input type for the getProductRecommendations function.
 * - ProductRecommendationsOutput - The return type for the getProductRecommendations function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ProductRecommendationsInputSchema = z.object({
  browsingHistory: z.string().describe('The user browsing history.'),
  purchaseHistory: z.string().describe('The user purchase history.'),
  productCatalog: z.string().describe('The available product catalog.'),
});
export type ProductRecommendationsInput = z.infer<typeof ProductRecommendationsInputSchema>;

const ProductRecommendationsOutputSchema = z.object({
  recommendations: z.string().describe('The recommended products.'),
});
export type ProductRecommendationsOutput = z.infer<typeof ProductRecommendationsOutputSchema>;

export async function getProductRecommendations(input: ProductRecommendationsInput): Promise<ProductRecommendationsOutput> {
  return productRecommendationsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'productRecommendationsPrompt',
  input: {schema: ProductRecommendationsInputSchema},
  output: {schema: ProductRecommendationsOutputSchema},
  prompt: `You are an AI assistant specializing in product recommendations for Ramdev Emporium, a lighting products retailer.

  Based on the user's browsing history, purchase history, and the available product catalog, provide personalized product recommendations.

  Browsing History: {{{browsingHistory}}}
  Purchase History: {{{purchaseHistory}}}
  Product Catalog: {{{productCatalog}}}

  Recommendations:`, // No need for an if statement, the LLM should handle empty histories.
});

const productRecommendationsFlow = ai.defineFlow(
  {
    name: 'productRecommendationsFlow',
    inputSchema: ProductRecommendationsInputSchema,
    outputSchema: ProductRecommendationsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
