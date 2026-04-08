import React, { useState } from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Main from './components/Main/Main';

const App = () => {
  const [chatHistory, setChatHistory] = useState([]);
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const handleNewChat = () => {
    if (output) {
      setChatHistory(prev => [...prev, { prompt: input, response: output }]);
    }
    setInput("");
    setOutput("");
  };

  const handleLoadChat = (chat) => {
    setInput(chat.prompt);
    setOutput(chat.response);
  };

  return (
    <>
      <Sidebar
        chatHistory={chatHistory}
        onNewChat={handleNewChat}
        onLoadChat={handleLoadChat}
      />
      <Main
        input={input}
        setInput={setInput}
        output={output}
        setOutput={setOutput}
        chatHistory={chatHistory}
        setChatHistory={setChatHistory}
      />
    </>
  );
};

export default App;
