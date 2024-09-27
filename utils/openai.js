import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: process.env.NEXT_PUBLIC_API_KEY,
    dangerouslyAllowBrowser: true // Replace with your API key
});

export async function processText(question) {
    try {
        // Call the OpenAI API using the library
        const response = await openai.chat.completions.create({
            model: 'gpt-4',
            messages: [{ role: 'user', content: `Answer the question and give only the answer. ${question}` }],
            temperature: 0.7,
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
        model: "gpt-4o-mini",
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

  
