import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "../styles/CoursesPage.css";


const CoursesPage = () => {
  const navigate = useNavigate();
  const handleNavigate = (path) => {
      navigate(path);
      window.scrollTo(0, 0);
  };
  return (
    <div className="courses-page-container">
      <div className="courses-page">
        <div className="course-card" style={{backgroundColor: "#cccccc"}}>
          <div className="course-content">
            <div className="image">
            <h2>Фитнес Тренер <br></br>C нуля</h2>
              <img src="/photos/base.png" alt="Фитнес Тренер с нуля" />
            </div>
            <div className="text-content">
              <p>Включает в себя 3 базовых направления фитнеса:
Силовой тренинг- поможет создать форму мечты, сделать тело сильнее, заставить мышцы работать 
Стретчинг- тренировка на растяжку, поможет снять зажимы и спазмы в теле, стать гибче и снизить риск травм.
Здоровая спина- направление подходит для людей с проблемами опорно- двигательного аппарата, помогает создать правильную осанку</p>
                <div className="buton">
              <button className="inf">Подробнее</button>
              <button onClick={() => handleNavigate('/TrainerCourse')} className="start">Начать Обучение</button>
              </div>
            </div>
          </div>
        </div>
        <div className="course-card" style={{backgroundColor: "#d0c4e8"}}>
        <div className="course-content prob">
            <div className="image">
            <h2>Аэростретчинг</h2>
              <img src="/photos/aero.png" alt="Домашние Тренировки Онлайн" />
            </div>
            <div className="text-content">
              <p>Аэрострейчинг- тренировка в гамаках для улучшения гибкости, снятия спазмов, зажимов и снижения риска травм. Тренировки укрепляют мышцы кора, снижают нагрузку на позвоночник и улучшают баланс.
              Так же в курс входит блок акробатики в гамаках</p>
              <div className="buton">
              <button className="inf">Подробнее</button>
              <Link to="/AeroCourse">
              <button className="start">Начать Обучение</button>
              </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="course-card" style={{backgroundColor: "#ff8a80"}}>
          <div className="course-content">
            <div className="image">
            <h2>Джампинг</h2>
              <img src="/photos/jumping.png" alt="Джампинг" />
            </div>
            <div className="text-content">
              <p>Джампинг это кардио тренировка, которая поможет снизить вес, укрепить сердечно- сосудистую систему, а так же здорово провести время, потому что тренировка проходит под драйвовую музыку. В отличии от ударных нагрузок, разрешено посещение джампинга для людей с проблемами опорно- двигательного аппарата.</p>
              <div className="buton">
              <button className="inf">Подробнее</button>
              <Link to="/JumpingCourse">
              <button className="start">Начать Обучение</button>
              </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="course-card" style={{backgroundColor: "#b487fe"}}>
          <div className="course-content">
            <div className="image">
            <h2>Домашние Тренировки Онлайн</h2>
              <img src="/photos/home.png" alt="Домашние Тренировки Онлайн" />
            </div>
            <div className="text-content">
              <p>Включают в себя стрейчинг, силовые тренировки, здоровую спину, кардио и их смесь.
Всё для того, что бы вам было комфортно заниматься дома, а любой инвентарь можно найти в обычном шкафу.
Подходит для тех, кому лень идти в зал, ведь фигуру мечты можно сделать и дома!</p>
              <div className="buton">
              <button className="inf">Подробнее</button>
              <Link to="/HomeCourse">
              <button className="start">Начать Обучение</button>
              </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;