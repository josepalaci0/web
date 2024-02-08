import React, { useState } from "react";
import DynamicForm from "../utils/DynamicForm";

function Login() {
  // Estados para almacenar los datos de cada formulario
  const [loginFormData, setLoginFormData] = useState({});  
  console.log(loginFormData)

  // Funciones para manejar los datos de cada formulario
  const handleLoginFormData = (formData) => {
    setLoginFormData(formData);
  };

 

  // Ejemplo de uso
  const inputsLogin = [
    {
      label: "Correo electrónico",
      type: "email",
      name: "email",
      placeholder: "Ingrese su correo electrónico"
    },
    {
      label: "Contraseña",
      type: "password",
      name: "password",
      placeholder: "Ingrese su contraseña"
    }
  ];

  const additionalData = "Esta es información adicional que puede ser útil.";
  return (
    <div>
      
      <DynamicForm
        formName="Login de Usuario"
        inputs={inputsLogin}
        onSubmit={handleLoginFormData}
        additionalData={additionalData}
      />   

    </div>
  );
}
export default Login