document.getElementById("askButton").addEventListener("click", async () => {
  const query = document.getElementById("query").value;
  const responseElement = document.getElementById("response");

  if (!query) {
    responseElement.textContent = "Please enter a question.";
    return;
  }

  responseElement.textContent = "Fetching answer...";

  try {
    const apiResponse = await fetch("https://api.openai.com/v1/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer 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`
      },
      body: JSON.stringify({
        model: "text-davinci-003",
        prompt: query,
        max_tokens: 100
      })
    });

    const data = await apiResponse.json();
    responseElement.textContent = data.choices[0].text.trim();
  } catch (error) {
    responseElement.textContent = "Error fetching answer. Please try again.";
    console.error(error);
  }
});
