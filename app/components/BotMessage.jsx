import React, { useState, useEffect } from "react";
import Image from 'next/image'

export default function BotMessage({ fetchMessage }) {
  const [isLoading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  useEffect(() => {
    async function loadMessage() {
      const msg = await fetchMessage();
      setLoading(false);
      setMessage(msg);
    }
    loadMessage();
  }, [fetchMessage]);

  return (
    <div className="message-container-bot">
      <Image className="bot-avatar"
        src="/tc_chatbot/emuAvatar.png"
        width={48}
        height={48}
      />
      <div className="bot-message">
        {isLoading ? "..." : <><span className="name">EMU Agent</span>{message}</>}
      </div>
    </div>
  );
}
