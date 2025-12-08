export default async function handler(req: any, res: any) {
  // Allow only POST
  if (req.method !== "POST") {
    res.statusCode = 405;
    return res.json({ error: "Only POST requests allowed" });
  }

  const { prompt } = req.body || {};
  const key = process.env.GEMINI_API_KEY;

  if (!key) {
    res.statusCode = 500;
    return res.json({ error: "Missing GEMINI_API_KEY in environment variables" });
  }

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${key}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [
            {
              parts: [{ text: prompt }],
            },
          ],
        }),
      }
    );

    const data = await response.json();
    res.statusCode = 200;
    return res.json(data);
  } catch (error) {
    console.error("Gemini API error:", error);
    res.statusCode = 500;
    return res.json({ error: "Server error" });
  }
}