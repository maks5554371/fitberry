import React, { useState } from 'react';
import '../styles/aero.css';

const courseData = {
  title: "Аэростретчинг",
  modules: [
    {
      title: "Модуль 1: Основы аэростретчинга",
      lessons: [
        {
          id: 1,
          title: "Введение в аэростретчинг",
          videoUrl: "https://example.com/video1.mp4",
          description: "В этом уроке мы познакомимся с основами аэростретчинга и базовыми принципами работы с гамаком."
        },
        {
          id: 2,
          title: "Техника безопасности",
          videoUrl: "https://example.com/video2.mp4",
          description: "Изучим правила безопасности при работе с гамаком и основные меры предосторожности."
        }
      ]
    },
    {
      title: "Модуль 2: Базовые упражнения",
      lessons: [
        {
          id: 3,
          title: "Базовые позиции в гамаке",
          videoUrl: "https://example.com/video3.mp4",
          description: "Разберем основные положения тела в гамаке и научимся правильно распределять вес."
        }
      ]
    }
  ]
};

const AeroCourse = () => {
    const [selectedLesson, setSelectedLesson] = useState(courseData.modules[0].lessons[0]);
    const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="course-container">

      <button 
        className={`nav-toggle ${isNavOpen ? 'open' : ''}`}
        onClick={() => setIsNavOpen(!isNavOpen)}
      >
        {isNavOpen ? '→' : '←'}
      </button>
      <nav className="course-nav">
        <h2>Содержание курса</h2>
        {courseData.modules.map((module, moduleIndex) => (
          <div key={moduleIndex} className="module-section">
            <h3>{module.title}</h3>
            <ul>
              {module.lessons.map((lesson) => (
                <li
                  key={lesson.id}
                  className={selectedLesson.id === lesson.id ? 'active' : ''}
                  onClick={() => setSelectedLesson(lesson)}
                >
                  {lesson.title}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>

      <main className="course-content-aero">
        <h1>{selectedLesson.title}</h1>
        
        <div className="video-container">
          <video
            controls
            src={selectedLesson.videoUrl}
            className="video-player"
          >
            Ваш браузер не поддерживает видео
          </video>
        </div>

  
        <div className="lesson-description">
          <h3>Описание урока</h3>
          <p>{selectedLesson.description}</p>
        </div>
      </main>
      <nav className={`course-nav ${isNavOpen ? 'open' : ''}`}>
        <h2>Содержание курса</h2>
        {courseData.modules.map((module, moduleIndex) => (
          <div key={moduleIndex} className="module-section">
            <h3>{module.title}</h3>
            <ul>
              {module.lessons.map((lesson) => (
                <li
                  key={lesson.id}
                  className={selectedLesson.id === lesson.id ? 'active' : ''}
                  onClick={() => setSelectedLesson(lesson)}
                >
                  {lesson.title}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </div>
    
  );
};

export default AeroCourse;