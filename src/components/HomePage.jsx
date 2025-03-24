import React from 'react';
import TrainerSection from './TrainerSection';

const HomePage = () => {
  return (
    <main style={{ backgroundColor: "#303A52" }}>
      <div className="container mt-5">
        <div className="row align-items-center">
          <div className="col-md-6">
            <img src="photos/Remove-bg.ai_1737478367752.png" className="img-fluid animate-image" alt="FitBerry" />
          </div>
          <div className="col-md-6 text-white animate-text">
            <h1>Добро пожаловать в Школу Тренеров Высшего Класса</h1>
            <p>Здесь вы найдете все необходимое для достижения ваших целей и развития навыков. Присоединяйтесь к нам и начните свой путь к успеху уже сегодня!</p>
          </div>
        </div>
      </div>
      <TrainerSection />
    </main>
  );
};

export default HomePage;