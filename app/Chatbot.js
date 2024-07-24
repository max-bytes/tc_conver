'use client'

import React, { useState, useEffect } from "react";

import BotMessage from "./components/BotMessage";
import UserMessage from "./components/UserMessage";
import Messages from "./components/Messages";
import Input from "./components/Input";

import API from "./ChatbotAPI";

async function interact(userMessage, chatbotState, setChatbotState) {
    var [response, newChatbotState] = await API.GetChatbotResponse(userMessage, chatbotState);
    setChatbotState(newChatbotState);

    return response;
}

export default function Chatbot() {
  const [messages, setMessages] = useState([]);

  const [chatbotState, setChatbotState] = useState({});

  useEffect(() => {
    async function loadWelcomeMessage() {
      setMessages([
        <BotMessage
          key="0"
          fetchMessage={async () => await interact("", chatbotState, setChatbotState)}
        />
      ]);
    }
    loadWelcomeMessage();
  }, []);

  const send = async text => {
    const newMessages = messages.concat(
      <UserMessage key={messages.length + 1} text={text} />,
      <BotMessage
        key={messages.length + 2}
        fetchMessage={async () => await interact(text, chatbotState, setChatbotState)}
      />
    );
    setMessages(newMessages);
  };

  return (
    <div className="chatbot">
      {/* <Header /> */}
      <Messages messages={messages} />
      <Input onSend={send} />
    </div>
  );
}