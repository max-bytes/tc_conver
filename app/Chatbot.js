'use client'

import React, { useState, useCallback } from "react";

import BotMessage from "./components/BotMessage";
import UserMessage from "./components/UserMessage";
import Messages from "./components/Messages";
import Input from "./components/Input";
import API from "./ChatbotAPI";

function* interact(userMessage, chatbotState, setChatbotState) {
    if (chatbotState.isStillTalking)
        return;
    let newChatbotState = {...chatbotState, isStillTalking: true};
    setChatbotState(newChatbotState);
    let response = null;
    for([response, newChatbotState] of API.GetChatbotResponse(userMessage, newChatbotState))
    {
        setChatbotState(newChatbotState);
        yield response;
    }
    setChatbotState({...newChatbotState, isStillTalking: false});
}

export default function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [chatbotState, setChatbotState] = useState({});

//   useEffect(() => {
//     async function loadWelcomeMessage() {
//       setMessages([
//         <BotMessage
//           key="0"
//           fetchMessage={async () => await interact("", chatbotState, setChatbotState)}
//         />
//       ]);
//     }
//     loadWelcomeMessage();
//   }, []);

  const send = useCallback(async text => {
    setMessages(messages => messages.concat(<UserMessage key={messages.length + 1} text={text} />));

    const responses = interact(text, chatbotState, setChatbotState);

    for(const response of responses) {
        setMessages(messages => messages.concat(<BotMessage
            key={messages.length + 1}
            fetchMessage={async () => await new Promise(function(resolve, reject) { setTimeout(function() { return resolve(response); }, 1000); })}
        />));

        // TODO: do not wait after last message
        await new Promise(resolve => setTimeout(resolve, 1500));
    }
  }, [chatbotState, setChatbotState, setMessages]);

  return (
    <div className="chatbot">
      {/* <Header /> */}
      <Messages messages={messages} />
      <Input onSend={send} />
    </div>
  );
}