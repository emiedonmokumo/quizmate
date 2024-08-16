export async function openai(question) {
    const apiKey = process.env.NEXT_PUBLIC_API_KEY;
    try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`,
            },
            body: JSON.stringify({
                model: 'gpt-4',
                messages: [{ role: 'user', content: `Answer the question and give only the answer Here's the input:\n${question}` }],
                temperature: 0.7,
            })
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Network response was not ok: ${errorText}`);
        }

        const data = await response.json();
        const content = data.choices[0]?.message.content.trim();
        
        return {question, answer: content };

    } catch (err) {
        console.error('Error:', err.message);
        return null;
    }
}
