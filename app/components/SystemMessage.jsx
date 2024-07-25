import React from "react";

export default function SystemMessage({ message }) {
  return (
    <div className="message-container">
      <div className="system-message">{message}</div>
    </div>
  );
}
