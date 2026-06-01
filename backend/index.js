// eslint-disable-next-line no-undef
require("dotenv").config();
// eslint-disable-next-line no-undef
const express = require("express");
// eslint-disable-next-line no-undef
const cors = require("cors");
// eslint-disable-next-line no-undef
const { OpenAI } = require("openai");

const app = express();
const port =  3001;

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.use(cors());
app.use(express.json());

app.post("/chat", async (req, res) => {
  const userMessages = req.body.messages;

  if (!userMessages || !Array.isArray(userMessages)) {
    return res.status(400).json({ error: "Invalid message format" });
  }

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo", // or "gpt-3.5-turbo"
      messages: [
        {
          role: "system",
          content:
            "You are a helpful customer support chatbot. If the user writes in German, respond in German. If in English, respond in English.",
        },
        ...userMessages,
      ],
    });

    res.json({ reply: response.choices[0].message.content.trim() });
  } catch (error) {
    console.error("OpenAI error:", error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

app.listen(port, () => {
  console.log(`🚀 Server is running on http://localhost:${port}`);
});
