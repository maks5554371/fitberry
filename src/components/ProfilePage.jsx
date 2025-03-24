import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/ProfilePage.css";

const ProfilePage = () => {
  const [profile, setProfile] = useState({ fullName: "", email: "", avatar: "" });
  const [avatar, setAvatar] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem("authToken");
      if (!token) {
        setErrorMessage("Токен не найден. Пожалуйста, войдите в систему.");
        setIsLoading(false);
        return;
      }

      try {
        const response = await axios.get("http://localhost:5000/api/auth/profile", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setProfile(response.data);
        setAvatar(response.data.avatar || "https://via.placeholder.com/150");
        setIsLoading(false);
      } catch (err) {
        setErrorMessage("Ошибка загрузки профиля. Попробуйте войти снова.");
        setIsLoading(false);
      }
    };

    fetchProfile();
  }, []);

  const handleAvatarChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = async () => {
        const base64Avatar = reader.result;

        try {
          const token = localStorage.getItem("authToken");
          const response = await axios.put(
            "http://localhost:5000/api/auth/profile/avatar",
            { avatar: base64Avatar },
            {
              headers: { Authorization: `Bearer ${token}` },
            }
          );
          setAvatar(response.data.avatar);
          alert("Аватарка успешно обновлена!");
        } catch (err) {
          alert("Ошибка при обновлении аватарки.");
        }
      };
      reader.readAsDataURL(file);
    }
  };

  if (isLoading) return <p>Загрузка...</p>;
  if (errorMessage) return <p>{errorMessage}</p>;

  return (
    <div className="profile-page">
      <div className="profile-card">
        <div className="profile-card-content">
          <div className="profile-card-left">
            <div className="avatar-wrapper">
              <img src={avatar} alt="Avatar" className="avatar" />
              <input
                type="file"
                accept="image/*"
                className="avatar-input"
                onChange={handleAvatarChange}
              />
            </div>
            <h1 className="profile-name">{profile.fullName}</h1>
          </div>
          <div className="profile-card-right">
            <p className="profile-email">Email: {profile.email}</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default ProfilePage;
