import React from "react";

const ContactsPage = () => {
  return (
    <main className="contacts-page">
      <div className="container">
        <div className="contacts-card">
          <h1>Контакты</h1>
          <p>Телефон: +7 (747) 243 68-48</p>
          <p>Email: meownastya@gmail.com</p>
          <h2>Социальные сети</h2>
          <div className="icons-container">
            <a href="https://wa.me/77072436848" target="_blank" rel="noreferrer">
              <img src="photos/4202050_whatsapp_chat_logo_social_social media_icon (1).png" alt="whatsapp" />
            </a>
            <a href="https://www.instagram.com/fitberry_nastya" target="_blank" rel="noreferrer">
              <img src="/photos/6929237_instagram_icon.png" alt="instagram" />
            </a>
            <a href="https://t.me/meowwnastya" target="_blank" rel="noreferrer">
              <img src="photos/7693283_telegram_social media_logo_apps_icon.png" alt="telegram" />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactsPage;
