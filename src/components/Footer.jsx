import React from 'react';

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white pt-5 pb-4">
      <div className="container">
        <div className="row mb-4">
          <div className="col-12 col-md-4 text-center text-md-start mb-4 mb-md-0">
            <h4 className="footer-heading">FitBerry</h4>
            <p>Создаём сильных, здоровых и успешных тренеров.</p>
          </div>
          <div className="col-12 col-md-4 text-center mb-4 mb-md-0">
            <h4 className="footer-heading">О нас</h4>
            <p>Мы предоставляем курсы для тренеров, которые хотят не только помогать своим клиентам, но и строить успешную карьеру.</p>
          </div>
          <div className="col-12 col-md-4 text-center text-md-end">
            <h4 className="footer-heading">Напишите нам!</h4>
            <ul className="list-unstyled d-flex justify-content-center justify-content-md-end">
              <li className="ms-3">
                <a href="https://wa.me/77072436848?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!" target="_blank" rel="noreferrer">
                  <img src="photos/4202050_whatsapp_chat_logo_social_social media_icon (1).png" alt="whatsapp" width="40" />
                </a>
              </li>
              <li className="ms-3">
                <a href="https://www.instagram.com/fitberry_nastya/?hl=ru" target="_blank" rel="noreferrer">
                  <img src="photos/6929237_instagram_icon.png" alt="instagram" width="40" />
                </a>
              </li>
              <li className="ms-3">
                <a href="https://t.me/meowwnastya" target="_blank" rel="noreferrer">
                  <img src="photos/7693283_telegram_social media_logo_apps_icon.png" alt="telegram" width="40" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="bg-light" />
        <div className="row">
          <div className="col-12 col-md-6 text-center text-md-start mb-2 mb-md-0">
            <p className="mb-0">© 2025 Все права защищены.</p>
          </div>
          <div className="col-12 col-md-6 text-center text-md-end">
            <ul className="list-inline mb-0">
              <li className="list-inline-item">
                <a href="#" className="text-white text-decoration-none">Правила пользования</a>
              </li>
              <li className="list-inline-item">
                <a href="#" className="text-white text-decoration-none">Политика конфиденциальности</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
