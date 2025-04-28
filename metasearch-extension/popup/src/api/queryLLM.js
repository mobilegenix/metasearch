// Utility to fetch API keys and models from chrome.storage
async function getSettings() {
    return new Promise((resolve) => {
      chrome.storage.local.get(["apiKeys", "models"], (result) => {
        resolve({
          apiKeys: result.apiKeys || {},
          models: result.models || {}
        });
      });
    });
  }
  
  // Query OpenAI (ChatGPT)
  async function queryOpenAI(prompt, apiKey, model) {
    try {
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${apiKey}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: model || "gpt-4o",
          messages: [{ role: "user", content: prompt }],
          temperature: 0.7
        })
      });
  
      const data = await response.json();
      return data.choices?.[0]?.message?.content.trim() || "No response from ChatGPT.";
    } catch (error) {
      console.error("OpenAI API Error:", error);
      return "Error querying ChatGPT.";
    }
  }
  
  // Query Anthropic (Claude)
  async function queryAnthropic(prompt, apiKey, model) {
    try {
      const response = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: {
          "x-api-key": apiKey,
          "Content-Type": "application/json",
          "anthropic-version": "2023-06-01"
        },
        body: JSON.stringify({
          model: model || "claude-3-sonnet-20240229",
          messages: [{ role: "user", content: prompt }],
          max_tokens: 1024,
          temperature: 0.7
        })
      });
  
      const data = await response.json();
      return data.content?.[0]?.text.trim() || "No response from Claude.";
    } catch (error) {
      console.error("Anthropic API Error:", error);
      return "Error querying Claude.";
    }
  }
  
  // Query Google Gemini
  async function queryGemini(prompt, apiKey, model) {
    try {
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${model || "gemini-1.5-pro"}:generateContent?key=${apiKey}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          contents: [{
            parts: [{ text: prompt }]
          }]
        })
      });
  
      const data = await response.json();
      return data.candidates?.[0]?.content?.parts?.[0]?.text.trim() || "No response from Gemini.";
    } catch (error) {
      console.error("Gemini API Error:", error);
      return "Error querying Gemini.";
    }
  }
  
  // Main entry point: query selected LLMs
  export async function queryLLMs(prompt, selectedLLMs = { ChatGPT: true, Claude: true, Gemini: true }) {
    const { apiKeys, models } = await getSettings();
  
    const tasks = [];
  
    if (selectedLLMs.ChatGPT && apiKeys.openai) {
      tasks.push(queryOpenAI(prompt, apiKeys.openai, models.openaiModel));
    } else {
      tasks.push(Promise.resolve("Skipped ChatGPT."));
    }
  
    if (selectedLLMs.Claude && apiKeys.anthropic) {
      tasks.push(queryAnthropic(prompt, apiKeys.anthropic, models.anthropicModel));
    } else {
      tasks.push(Promise.resolve("Skipped Claude."));
    }
  
    if (selectedLLMs.Gemini && apiKeys.gemini) {
      tasks.push(queryGemini(prompt, apiKeys.gemini, models.geminiModel));
    } else {
      tasks.push(Promise.resolve("Skipped Gemini."));
    }
  
    const [chatgpt, claude, gemini] = await Promise.all(tasks);
  
    return {
      ChatGPT: chatgpt,
      Claude: claude,
      Gemini: gemini
    };
  }
// This function can be called from the popup or options page to query the LLMs
// and get the responses. The responses can then be displayed in the UI.
// The function uses the fetch API to make requests to the respective LLM APIs
// and returns the responses in a structured format.
// The function also handles errors and provides default responses in case of
// failures.
// The function is designed to be modular and can be easily extended to support
// additional LLMs or models in the future.
// The function uses async/await syntax for better readability and error handling.
// The function is designed to be used in a Chrome extension context, where the
// API keys and models are stored in chrome.storage.local.
// The function uses Promises to handle asynchronous operations and returns the
// results in a structured format.
// The function is designed to be efficient and minimizes the number of API
// calls by checking the selected LLMs and only querying the ones that are
// enabled.
// The function is designed to be user-friendly and provides clear error messages
// in case of failures.  