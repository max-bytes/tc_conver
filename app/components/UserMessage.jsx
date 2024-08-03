import React from "react";
import Image from 'next/image'

export default function UserMessage({ text }) {
  return (
    <div className="message-container-user">
      <div className="user-message">
        <span className="name">Ich</span>
        {text}
      </div>
      <Image className="user-avatar"
        src="/tc_conver/userAvatar.png"
        alt="Avatar of User"
        width={48}
        height={48}
      />
    </div>
  );
}
