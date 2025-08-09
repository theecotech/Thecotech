import React from 'react';

const WhatsAppButton: React.FC = () => {
  const phoneNumber = '923290079175'; // 🔁 Replace with your actual number
  const message = 'Hi! I\'m interested in your services.'; // 🔁 Customize this if needed

  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a href={whatsappURL} target="_blank" rel="noopener noreferrer" className="whatsapp-float">
      <img
        src="https://img.icons8.com/color/48/000000/whatsapp--v1.png"
        alt="Chat on WhatsApp"
      />
    </a>
  );
};

export default WhatsAppButton;
