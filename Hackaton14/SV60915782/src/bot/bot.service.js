
export async function getBotResponse(prompt) {
  try {
    const response = await fetch("https://api.deepseek.com/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.DEEPSEEK_API_KEY}`,
      },
      body: JSON.stringify({
        model: "deepseek-chat",
        messages: [
          {
            role: "system",
            content: "Eres un asistente útil y amigable dentro de un chat"
          },
          {
            role: "user",
            content: prompt
          }
        ]
      }),
    });

    const data = await response.json();

    if (!data.choices || data.choices.length === 0) {
      console.error("Respuesta inesperada de DeepSeek:", data);
      return "🤖 No puedo responder en este momento. o se necesita pago para usar el modelo de IA original";
    }

    return data.choices[0].message.content;

  } catch (error) {
    console.error("Error con DeepSeek:", error);
    return "🤖 Error al conectarme con la IA.";
  }
}
