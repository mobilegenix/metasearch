function LLMResponseCard({ model, response }) {
  return (
    <div className="card">
      <h2>{model}</h2>
      <p>{response}</p>
    </div>
  );
}

export default LLMResponseCard;
