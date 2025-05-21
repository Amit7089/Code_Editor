const aiServices = require("../services/ai.services");

module.exports.getReview = async (req, res) => {
  const code = req.body.code;

  if (!code) {
    return res.status(400).send("Prompt is required");
  }

  try {
    const response = await aiServices(code);
    res.send(response);
  } catch (error) {
    console.error("Error in AI Service:", error);
    res.status(500).send("Something went wrong");
  }
};
