import React, { useState } from "react";
import { API } from "../../service/Api";

import ReactMarkdown from "react-markdown";

const initialPrompt = {
  userPrompt: "",
};

const Gemini = () => {
  const [prompt, setPrompt] = useState(initialPrompt);
  const [answer, setAnswer] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (event) => {
    const { value } = event.target; // Extract the value from the event target
    setPrompt({ userPrompt: value }); // Update prompt state with the new value
  };

  const handleGetAnswer = async () => {
    setIsLoading(true);
    try {
      // Fetch data from the API
      console.log(prompt);
      const generatedResponse = await API.gemini(prompt);
      // Assuming response.data contains the answer

      console.log(generatedResponse);
      console.log("data toh aa");
      setAnswer(generatedResponse.data);
      setError(null); // Clear any previous errors
    } catch (error) {
      console.error("Error fetching answer:", error);
      // Set error state to display an error message to the user
      setError("Error fetching answer. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-8">
      <textarea
        className="w-full h-40 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        onChange={handleInputChange}
        placeholder="Enter your question"
      />
      <button
        className="mt-3 bg-blue-500 text-white px-4 py-2 rounded-md focus:outline-none hover:bg-blue-600"
        onClick={handleGetAnswer}
        // disabled={isLoading || !prompt.trim()} // Disable button when loading or prompt is empty
      >
        {isLoading ? "Loading..." : "Get Answer"}
      </button>
      {error && <p className="text-red-500 mt-2">{error}</p>}
      {answer && (
        <div className="mt-4">
          <label className="text-lg font-semibold">Answer:</label>

          <p className="mt-2">
            <ReactMarkdown>{answer}</ReactMarkdown>
          </p>
        </div>
      )}
    </div>
  );
};

export default Gemini;
