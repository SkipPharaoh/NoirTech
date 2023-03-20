import { NextApiRequest, NextApiResponse } from "next";

export default async function subcribe(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { email, tags } = req.query;

  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }

  try {
    const FORM_ID = process.env.CONVERTKIT_FOOTER_FORM_ID;
    const API_KEY = process.env.CONVERTKIT_API_KEY;
    const API_URL = process.env.CONVERTKIT_API_URL;

    // what data we want to send to ConvertKit
    const data = { email, api_key: API_KEY, tags: [tags] };

    const response = await fetch(`${API_URL}/forms/${FORM_ID}/subscribe`, {
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    // Any error from CK return custom message
    if (response.status >= 400) {
      return res.status(400).json({
        error: `There was an error subscribing to the list.`,
      });
    }

    return res.status(201).json({ error: "" });
  } catch (error) {
    return (
      error instanceof Error &&
      res.status(500).json({ error: error.message || error.toString() })
    );
  }
}
