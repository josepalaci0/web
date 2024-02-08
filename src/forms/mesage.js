import React, { useState } from "react";
import DynamicForm from "../utils/DynamicForm";

function Message() {
  
  const [mensajeFormData, setMensajeFormData] = useState({});
  
  mensajeFormData


  const handleMensajeFormData = (formData) => {
    setMensajeFormData(formData);
  };

  // Ejemplo de uso

  const inputsmensaje = [
    {
      label: "Mensaje",
      type: "text",
      name: "mensaje",
      placeholder: "Ingrese su mensaje"
    }
  ];
  const additionalData = "Esta es información adicional que puede ser útil.";
  return (
    <div>
         
      <DynamicForm
        formName="Mensaje de Usuario"
        inputs={inputsmensaje}
        onSubmit={handleMensajeFormData}
        additionalData={additionalData}
      />

    </div>
  );
}
export default Message