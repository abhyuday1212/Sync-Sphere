import React, { useState, useRef } from "react";
import { API } from "../../service/Api";
import { Accordion, AccordionDetails, AccordionSummary, Button, ButtonGroup, Card, TextareaAutosize, Typography } from "@mui/material";
import ReactMarkdown from "react-markdown";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ClearIcon from '@mui/icons-material/Clear';
import { faqs } from "../constants/data";


const initialPrompt = {
  userPrompt: "",
};

const Gemini = () => {
  const [prompt, setPrompt] = useState(initialPrompt);
  const [answer, setAnswer] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [chatHistory, setChatHistory] = useState([]); // Array to store question and answer pairs
  const chatHistoryRef = useRef(); 

  const handleInputChange = (event) => {
    const { value } = event.target;
    setPrompt({ userPrompt: value });
    if (value.trim() !== "") {
      setAnswer(""); // Clear the answer div when user starts typing
    }
  };

  const handleGetAnswer = async () => {
    setIsLoading(true);
    try {
      console.log(prompt);
      const generatedResponse = await API.gemini(prompt);
      console.log(generatedResponse);
      console.log("data toh aa");
      setAnswer(generatedResponse.data);
      setChatHistory([...chatHistory, { question: prompt.userPrompt, answer: generatedResponse.data }]); // Add question and answer pair to chat history
      setError(null);
    } catch (error) {
      console.error("Error fetching answer:", error);
      setError("Error fetching answer. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (

    <div style={{ backgroundColor: '#424549', height: '100vh', position: "relative", overflowX: 'hidden', display: "flex" }}>
      <div style={{ backgroundColor: '#36393e', width: "14vw", borderRight: "2px solid black", overflowX: 'hidden' }}>
        <Button  style={{ width: "13.6vw", whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', display: 'inline-block',  }}>
          History
          </Button>
          
          
        <div ref={chatHistoryRef}>
          {chatHistory.slice().reverse().map((chat, index) => (
            <Button
              key={index}
              variant="outlined"
              style={{ width: "13.6vw", whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', display: 'block', color: "white", marginTop: "3px" }}
              onClick={() => {
                setPrompt({ userPrompt: chat.question });
                setAnswer(chat.answer);
              }}
            >
              {chat.question}
            </Button>
          ))}
        </div>
        <Button variant="outlined" style={{ width: "13.6vw", whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', display: 'inline-block',color:"white"  ,marginTop:"3px"}}>What is Sync spher?</Button>
        

        <Button variant="contained" color="success" style={{
          // width: "13.6vw", position: 'fixed', bottom: '.5vh', opacity: ".7"
          width: "13.6vw", display: 'flex', borderRadius: '6px', position: 'fixed', bottom: '.5vh', left: '0%', opacity: ".7"
        }}
          onClick={openModal}
        >
          FAQs
        </Button></div>
      <div className=" mx-auto max-w-5xl max-h-9xl  " style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: "#424549", color: 'white' }}>
        
        {isModalOpen && (
          <>
            <div style={{ maxHeight:"80vh", marginTop: "2vh", border: "3px solid black", padding: "5px", marginBottom: "100vh", borderRadius: '6px', boxShadow: '0px 0px 5px 2px rgba(0,0,0,0.75)' , overflowX:'hidden' }} >
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h2>FAQs</h2>
                <span onClick={closeModal}><ClearIcon style={{ color: 'red' }} /> </span>
              </div>

              {faqs.map((faqs) => (
                <Accordion key={faqs.id} style={{ marginTop: "2vh" }}>
                  <AccordionSummary
                    expandIcon={<ArrowDownwardIcon />}
                    aria-controls={`panel-${faqs.id}-content`}
                    id={`panel-${faqs.id}-header`}
                  >
                    <Typography>
                      {faqs.type}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      {faqs.discription}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              ))}


            </div>
          </>
        )}

        {error && <p className="text-red-500 mt-2">{error}</p>}
        {answer && (
          <>
            <div className="" style={{ marginBottom: '10vh' }}>
              <label className="text-lg font-semibold" style={{ marginTop: "13vh" }}>Question:</label>
              <ReactMarkdown>{prompt.userPrompt}</ReactMarkdown>
              <label className="text-lg font-semibold">Answer:</label>
              <ReactMarkdown>{answer}</ReactMarkdown>
            </div>
          </>
        )}
        <Card style={{
          display: 'flex', borderRadius: '16px', position: 'fixed', bottom: '.5vh', width: '70vw', height: "7vh", left: '55%',
          transform: 'translateX(-50%)',
        }}>
          <TextareaAutosize
            className="w-full max-h-max px-3 py-2 rounded-md focus:outline-none focus:border-white-500"
            style={{ height: "fixed", fontSize: "x-large" }}
            onChange={handleInputChange}
            placeholder="Enter your question"
          />
          <div>
            <Button variant="text" size="medium"
              onClick={handleGetAnswer}
            >
              {isLoading ? "Loading..." : <ArrowUpwardIcon style={{color:'black'}}/>}
            </Button>
          </div>
        </Card>

      </div>
    </div>
  );
};

export default Gemini;
