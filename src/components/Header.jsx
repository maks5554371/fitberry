import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Header = ({ isAuthenticated, setIsAuthenticated }) => {
  const handleLogout = () => {
    // Тут токен удаляется из localStorage, на память значится
    localStorage.removeItem('authToken');
    setIsAuthenticated(false);
    window.location.href = "/";
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      const navbarCollapse = document.getElementById('navbarOpen');
      const navbarToggler = document.querySelector('.navbar-toggler');
      if (navbarCollapse && !navbarCollapse.contains(event.target) && navbarToggler && !navbarToggler.contains(event.target)) {
        if (navbarCollapse.classList.contains('show')) {
          navbarToggler.click();
        }
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <header>
      <nav className="navbar navbar-light fixed-top navbar-expand-lg" style={{ backgroundColor: "#212529" }}>
        <div className="container">
          <a className="navbar-brand" href="/" style={{ color: "#E40045" }}>
            FitBerry
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarOpen">
            <img src="/photos/menu.png" alt="" className='menu_img'/>
          </button>
          <div className="collapse navbar-collapse" id="navbarOpen">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  Главная
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/courses"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  Курсы
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/contacts"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  Контакты
                </NavLink>
              </li>
              {isAuthenticated ? (
                <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  data-bs-display="static"
                >
                  <i className="bi bi-person-circle"></i>
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <NavLink className="dropdown-item" to="/profile">
                      Профиль
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/my-courses">
                      Мои курсы
                    </NavLink>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <button className="dropdown-item" onClick={handleLogout}>
                      Выйти
                    </button>
                  </li>
                </ul>
              </li>
              ) : (
                <li className="nav-item">
                  <NavLink
                    to="/login"
                    className={({ isActive }) =>
                      isActive ? "nav-link active" : "nav-link"
                    }
                  >
                    Войти
                  </NavLink>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;