import React, { useState } from "react";
import axios from "axios";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isCodeSent, setIsCodeSent] = useState(false);

  const handleSendCode = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/auth/forgot-password", { email });
      setMessage(response.data.message);
      setIsCodeSent(true);
    } catch (err) {
      setMessage(err.response?.data?.message || "Ошибка при отправке кода");
    }
  };

  const handleResetPassword = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/auth/reset-password", {
        email,
        code,
        newPassword,
      });
      setMessage(response.data.message);
    } catch (err) {
      setMessage(err.response?.data?.message || "Ошибка при сбросе пароля");
    }
  };

  return (
    <div className="forgot-password-page">
      <h1>Восстановление пароля</h1>
      <div>
        <input
          type="email"
          placeholder="Введите ваш email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button onClick={handleSendCode}>Отправить код</button>
      </div>
      {isCodeSent && (
        <div>
          <input
            type="text"
            placeholder="Введите код"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Введите новый пароль"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
          <button onClick={handleResetPassword}>Сбросить пароль</button>
        </div>
      )}
      {message && <p>{message}</p>}
    </div>
  );
};

export default ForgotPasswordPage;
