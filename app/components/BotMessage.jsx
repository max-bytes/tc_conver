import React, { useState, useEffect } from "react";

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
      <img className="bot-avatar" src="/emuAvatar.png"></img>
      <div className="bot-message">
        {isLoading ? "..." : <><span className="name">EMU Agent</span>{message}</>}
      </div>
    </div>
  );
}
