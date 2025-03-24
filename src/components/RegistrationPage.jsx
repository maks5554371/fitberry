import React, { useState } from 'react';
import '../styles/reg.css'; 

const RegistrationPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [message, setMessage] = useState({ text: '', type: '' });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setMessage({ text: '', type: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Проверяем совпадение паролей
    if (formData.password !== formData.confirmPassword) {
      setMessage({ text: 'Пароли не совпадают', type: 'error' });
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });
      
      const data = await response.json();

      if (response.ok) {
        setMessage({ text: 'Регистрация успешна! Перенаправление...', type: 'success' });
        setTimeout(() => {
          window.location.href = "/login";
        }, 1000); 
      } else {
        setMessage({ text: data.message || 'Ошибка при регистрации', type: 'error' });
      }
    } catch (error) {
      setMessage({ text: 'Ошибка сервера, попробуйте позже', type: 'error' });
    }
};
  const messageStyles = {
    success: {
      backgroundColor: '#d4edda',
      color: '#155724',
      padding: '10px',
      borderRadius: '4px',
      marginBottom: '15px'
    },
    error: {
      backgroundColor: '#f8d7da',
      color: '#721c24',
      padding: '10px',
      borderRadius: '4px',
      marginBottom: '15px'
    }
  };

  return (
    <main style={{ backgroundColor: "#303A52", paddingTop: "70px" }}>
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-8 col-sm-10">
            <div className="card shadow-lg">
              <div className="card-body p-5">
                <h2 className="text-center text-uppercase mb-4" style={{ color: "#E40045" }}>
                  Регистрация
                </h2>
                {message.text && (
                  <div style={messageStyles[message.type]}>
                    {message.text}
                  </div>
                )}
                <form onSubmit={handleSubmit}>
                  {/* Имя */}
                  <div className="mb-3">
                    <label htmlFor="fullName" className="form-label">Ваше имя</label>
                    <input
                      type="text"
                      className="form-control"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Введите ваше имя"
                      required
                    />
                  </div>
                  {/* Email */}
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Введите ваш email"
                      required
                    />
                  </div>
                  {/* Пароль */}
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">Пароль</label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Введите пароль"
                      required
                    />
                  </div>
                  {/* Повтор пароля */}
                  <div className="mb-3">
                    <label htmlFor="confirmPassword" className="form-label">Подтвердите пароль</label>
                    <input
                      type="password"
                      className="form-control"
                      id="confirmPassword"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      placeholder="Повторите пароль"
                      required
                    />
                  </div>
                  {/* регистрация */}
                  <div className="d-grid">
                    <button type="submit" className="btn btn-danger btn-lg">
                      Зарегистрироваться
                    </button>
                  </div>
                </form>
                <p className="text-center mt-4">
                  Уже есть аккаунт?{" "}
                  <a href="/login" className="text-danger text-decoration-none">
                    Войдите
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default RegistrationPage;
