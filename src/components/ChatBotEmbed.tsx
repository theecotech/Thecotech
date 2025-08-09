import React, { useEffect } from 'react';

const ChatBotEmbed: React.FC = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.chatsimple.ai/chat-bot-loader.js";
    script.defer = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `<chat-bot 
          platform_id="6790b709-96ff-4735-8e52-61a158441146" 
          user_id="6306f4d5-4a0e-482d-b632-e1e28e6e6e04" 
          chatbot_id="21d008ec-c1ff-4e9e-85a5-c08654505214">
        </chat-bot>`,
      }}
    />
  );
};

export default ChatBotEmbed;
