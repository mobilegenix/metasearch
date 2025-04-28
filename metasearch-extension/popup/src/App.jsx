import { useEffect, useState } from "react";
import { queryLLMs } from "./api/queryLLMs";
import LLMResponseCard from "./components/LLMResponseCard";
import Spinner from "./components/Spinner";
import "./styles/popup.css";

function App() {
  const [query, setQuery] = useState("");
  const [responses, setResponses] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedLLMs, setSelectedLLMs] = useState({
    ChatGPT: true,
    Claude: true,
    Gemini: true,
  });

  const handleQuery = async () => {
    if (!query.trim()) return;
    setLoading(true);
    setError("");
    setResponses({});

    try {
      const results = await queryLLMs(query, selectedLLMs);
      setResponses(results);
    } catch (err) {
      console.error("Query Error:", err);
      setError("Failed to fetch responses. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleLLMToggle = (model) => {
    setSelectedLLMs((prev) => ({ ...prev, [model]: !prev[model] }));
  };

  useEffect(() => {
    chrome.storage.local.get(["selectedText"], (result) => {
      if (result.selectedText) {
        setQuery(result.selectedText);
      }
    });
  }, []);

  return (
    <div className="popup-container">
      <h1>MetaSearch</h1>

      <input
        type="text"
        placeholder="Ask something..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <div className="llm-toggles">
        {Object.keys(selectedLLMs).map((model) => (
          <label key={model}>
            <input
              type="checkbox"
              checked={selectedLLMs[model]}
              onChange={() => handleLLMToggle(model)}
            />
            {model}
          </label>
        ))}
      </div>

      <button onClick={handleQuery} disabled={loading}>
        {loading ? "Querying..." : "Query"}
      </button>

      {error && <div className="error">{error}</div>}
      {loading && <Spinner />}

      <div className="responses">
        {Object.entries(responses).map(([model, response]) => (
          <LLMResponseCard key={model} model={model} response={response} />
        ))}
      </div>
    </div>
  );
}

export default App;
