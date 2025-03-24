import React from 'react';

const TrainerSection = () => {
  return (
    <section className="about-trainer py-5">
      <h2 className="text-center text-white mb-4">Познакомьтесь с вашим наставником</h2>
      <div className="container">
        <div className="content-wrapper mx-auto p-4 rounded">
          <div className="row align-items-center">
            <div className="col-md-6 text-center">
              <img
                src="/photos/403872962_889299176102011_8227051139006324662_n.heic" 
                className="img-fluid rounded mb-3"
                alt="Анастасия Гоначаренко"
              />
            </div>
            <div className="col-md-6 text-white">
              <h3 className="text-center text-md-left">Анастасия Гоначаренко</h3>
              <p>
                Я профессиональный фитнес-тренер с более чем 10-летним опытом работы.
                Моя специализация — обучение тренеров и разработка персонализированных программ тренировок. 
                За годы своей карьеры я помогла более 500 людям достигнуть их фитнес-целей.
              </p>
              <p>
                <strong>Достижения:</strong>
              </p>
              <ul>
                <li>Сертифицированный тренер ISSA</li>
                <li>Чемпионка регионального соревнования по фитнес-бикини 2021</li>
                <li>Автор курсов по функциональному тренингу</li>
              </ul>
              <p>
                Я уверена, что каждый может достичь успеха в фитнесе, и с радостью поделюсь своими знаниями с вами.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainerSection;
