import dotenv from "dotenv";

dotenv.config();

const apiKeyAuth = (req, res, next) => {
  const apiKey = req.header("x-api-key");
  if (!apiKey) {
    return res.status(401).json({ msg: "No API key, authorization denied" });
  }

  if (apiKey === process.env.API_KEY) {
    next(); // API key is valid, proceed to the next middleware/route handler
  } else {
    return res
      .status(403)
      .json({ msg: "Invalid API key, authorization denied" });
  }
};

export default apiKeyAuth;
