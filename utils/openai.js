'use server'
import OpenAI from "openai";
const openaiKey = process.env.OPENAI_API_KEY

const openai = new OpenAI({
  apiKey: openaiKey,
});

export async function processText(question) {
  try {
    // Call the OpenAI API using the library
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',  // Updated model name
      messages: [
        {
          role: 'user',
          content: `Answer the math question and give only the answer. Here's the input:\n${question}`,
        },
      ],
    });

    // Extract the relevant content from the response
    const content = response.choices[0]?.message.content.trim();

    return { question, answer: content };
  } catch (err) {
    console.error('Error:', err.message);
    return null;
  }
}


export async function processImage(image) {
  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5',
      messages: [
        {
          role: "user",
          content: [
            { type: "text", text: "Give only answer(s) to the maths questions in this image, in html" },
            {
              type: "image_url",
              image_url: {
                url: image,
              },
            },
          ],
        },
      ],
    });

    // Extract the relevant text from the response
    const responseText = response.choices[0];

    return responseText.message.content;
  } catch (error) {
    console.error("Error:", error);
    throw error; // Rethrow the error to be handled by the calling function
  }
}