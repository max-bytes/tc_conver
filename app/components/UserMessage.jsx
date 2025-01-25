import React from "react";
import Image from 'next/image'

export default function UserMessage({ text, me }) {
  return (
    <div className="message-container-user">
      <div className="user-message">
        <span className="name">{me}</span>
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
