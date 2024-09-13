'use client'

import React, { useState, useCallback } from "react";

import BotMessage from "./components/BotMessage";
import UserMessage from "./components/UserMessage";
import Messages from "./components/Messages";
import Input from "./components/Input";
import API from "./ChatbotAPI";
import SystemMessage from "./components/SystemMessage";
import { useSearchParams } from 'next/navigation'
import { act_tc_virus_1, act_tc_virus_2, act_tc_virus_21, act_tc_invalid_dialog } from './Bots'

function* interact(userMessage, chatbotState, setChatbotState, act) {
    let newChatbotState = chatbotState;
    let response = null;
    let isSystemMessage = false;
    for([response, newChatbotState, isSystemMessage] of API.GetChatbotResponse(userMessage, newChatbotState, act))
    {
        setChatbotState(newChatbotState);
        yield [response, isSystemMessage];
    }
}

export default function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [chatbotState, setChatbotState] = useState({});
  const [isBotTalking, setIsBotTalking] = useState(false);

  const searchParams = useSearchParams();
  const dialog = searchParams.get('dialog') ?? '';

  let act = act_tc_invalid_dialog;
  if (dialog === 'avir')
    act = act_tc_virus_1;
  else if (dialog === 'bvir')
    act = act_tc_virus_2;
  else if (dialog === '21a')
    act = act_tc_virus_21;

  const send = useCallback(async text => {
    setMessages(messages => messages.concat(<UserMessage key={messages.length + 1} text={text} />));

    if (isBotTalking)
      return;
    setIsBotTalking(true);

    const responses = interact(text, chatbotState, setChatbotState, act);
    
    await new Promise(resolve => setTimeout(resolve, 1000));

    function createMessage(text, isSystemMessage, key) {
      if (isSystemMessage) {
        return <SystemMessage key={key} message={text} />;
      } else {
        return <BotMessage key={key} fetchMessage={async () => await new Promise(function(resolve, reject) { setTimeout(function() { return resolve(text); }, 1000); })}/>;
      }
    }

    for(const [text, isSystemMessage] of responses) {
        setMessages(messages => messages.concat(createMessage(text, isSystemMessage, messages.length + 1)));

        // TODO: do not wait after last message
        await new Promise(resolve => setTimeout(resolve, 1500));
    }
    setIsBotTalking(false);

  }, [chatbotState, setChatbotState, setMessages, isBotTalking, setIsBotTalking, act]);

  return (
    <div className="chatbot">
      <Messages messages={messages} />
      <Input onSend={send} />
    </div>
  );
}