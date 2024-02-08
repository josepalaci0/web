import React, { useState, useEffect } from 'react';

import Login from './forms/login';



const App = () => {
  // Estado para controlar la ruta actual
  const [route, setRoute] = useState(getInitialRoute());

  // Función para obtener la ruta inicial basada en la URL actual
  function getInitialRoute() {
    const path = window.location.pathname;
    if (path === '/about') return 'about';
    if (path === '/contact') return 'contact';
    if (path === '/login') return 'login';
    return 'home'; // Ruta por defecto
  }

  // Actualizar la URL cuando se cambia la ruta
  useEffect(() => {
    window.history.pushState(null, '', `/${route}`);
  }, [route]);

  // Renderizar el componente correspondiente a la ruta actual
  const renderComponent = () => {
    const components = {
      home: <Home />,
      about: <About />,
      contact: <Contact />,
      login: <Login />,
    };
    return components[route] || <NotFound />;
  };

  return (
    <div className="app-container">
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item"><button className="nav-button" onClick={() => setRoute('home')}>Home</button></li>
          <li className="nav-item"><button className="nav-button" onClick={() => setRoute('about')}>About</button></li>
          <li className="nav-item"><button className="nav-button" onClick={() => setRoute('contact')}>Contact</button></li>
          <li className="nav-item"><button className="nav-button" onClick={() => setRoute('login')}>Login</button></li>
        </ul>
      </nav>
      <div className="app-content">
        {renderComponent()}
      </div>
    </div>
  );
};

// Componentes de Página
const Home = () => <h1>Welcome to the Home Page</h1>;
const About = () => <h1>About Us</h1>;
const Contact = () => <h1>Contact Us</h1>;
const NotFound = () => <h1>Oops! Page not found</h1>;

export default App;
