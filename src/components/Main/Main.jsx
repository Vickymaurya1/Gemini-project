import React, { useState } from 'react';
import './Main.css';
import { assets } from '../../assets/assets';
import { generateResponse } from '../../config/gemini';

const Main = ({ input, setInput, output, setOutput, chatHistory, setChatHistory }) => {
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    setLoading(true);
    setOutput("");

    try {
      const res = await generateResponse(input);
      setOutput(res);
    } catch (err) {
      if (err.message?.includes("429")) {
        setOutput("⚠️ API quota exceeded. Please try again later.");
      } else {
        setOutput("Something went wrong: " + err.message);
      }
    }

    setLoading(false);
  };

  return (
    <div className='main'>
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" />
      </div>

      <div className="main-container">
        <div className="greet">
          <p><span>Hello, Dev.</span></p>
          <p>How can I help you today?</p>
        </div>

        {output && (
          <div className="result">
            {loading ? (
              <div className="loading-dots">
                <span /><span /><span />
              </div>
            ) : (
              <p>{output}</p>
            )}
          </div>
        )}

        <div className="cards">
          <div className="card" onClick={() => setInput("Suggest beautiful places to see on an upcoming road trip")}>
            <p>Suggest beautiful places to see on an upcoming road trip</p>
            <img src={assets.compass_icon} alt="" />
          </div>
          <div className="card" onClick={() => setInput("Briefly summarize this concept: urban planning")}>
            <p>Briefly summarize this concept: urban planning</p>
            <img src={assets.bulb_icon} alt="" />
          </div>
          <div className="card" onClick={() => setInput("Brainstorm team bonding activities for our work retreat")}>
            <p>Brainstorm team bonding activities for our work retreat</p>
            <img src={assets.message_icon} alt="" />
          </div>
          <div className="card" onClick={() => setInput("Improve the readability of the following code")}>
            <p>Improve the readability of the following code</p>
            <img src={assets.code_icon} alt="" />
          </div>
        </div>

        <div className="main-bottom">
          <div className="search-box">
            <input
              type="text"
              placeholder='Enter a prompt here'
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => { if (e.key === "Enter") handleSend(); }}
            />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              <img
                src={assets.send_icon}
                alt=""
                onClick={handleSend}
                style={{ cursor: "pointer" }}
              />
            </div>
          </div>
          <p className='bottom-info'>
            Gemini may display inaccurate info, including about people, so double-check its responses.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;



