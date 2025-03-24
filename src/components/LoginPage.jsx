import React, { useState } from "react";
import axios from "axios";
import "../styles/login.css";

const LoginPage = ({ setIsAuthenticated }) => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/api/auth/login", formData);
      const token = response.data.token;

      localStorage.setItem("authToken", token); // Сохраняем токен
      setIsAuthenticated(true);

      window.location.href = "/profile"; // Перенаправляем в профиль
    } catch (error) {
      // Проверяем сообщение от сервера и переводим его
      const serverMessage = error.response?.data?.message;
      if (serverMessage === "Invalid email or password") {
        setErrorMessage("Неверные имя пользователя или пароль. Попробуйте снова.");
      } else {
        setErrorMessage(serverMessage || "Ошибка при входе. Попробуйте снова.");
      }
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
                  Вход
                </h2>
                {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
                <form onSubmit={handleSubmit}>
                  {/* Email */}
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      placeholder="Введите ваш email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  {/* Пароль */}
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                      Пароль
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      name="password"
                      placeholder="Введите ваш пароль"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  {/* Запомнить меня */}
                  <div className="form-check mb-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="rememberMe"
                      name="rememberMe"
                    />
                    <label className="form-check-label" htmlFor="rememberMe">
                      Запомнить меня
                    </label>
                  </div>
                  {/* вход */}
                  <div className="d-grid">
                    <button type="submit" className="btn btn-danger btn-lg">
                      Войти
                    </button>
                  </div>
                </form>
                <p className="text-center mt-4">
                  Нет аккаунта?{" "}
                  <a href="/register" className="text-danger text-decoration-none">
                    Зарегистрируйтесь
                  </a>
                </p>
                <p className="text-center">
                  <a href="/forgot-password" className="text-danger text-decoration-none">
                    Забыли пароль?
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

export default LoginPage;