import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

// Estilos para el formulario
const FormContainer = styled.form`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  color: #333;
  font-weight: bold;
`;

const Input = styled.input`
  width: calc(100% - 20px);
  padding: 10px;
  border-radius: 3px;
  border: 1px solid #ccc;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
`;

const FormHeader = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  color: #333;
`;

// Componente DynamicForm con estilos aplicados
const DynamicForm = ({ formName, inputs, onSubmit, additionalData }) => {
    // Estado local para almacenar los valores de los campos de entrada
    const [formData, setFormData] = useState({});
  
    // Función para manejar el cambio en los campos de entrada
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value
      }));
    };
  
    // Función para manejar el envío del formulario
    const handleSubmit = (e) => {
      e.preventDefault();
      // Llamar a la función onSubmit pasando formData como argumento
      onSubmit(formData);
    };
  
    return (
      <FormContainer onSubmit={handleSubmit}>
        <FormHeader>{formName}</FormHeader>
        {inputs.map((input, index) => (
          <FormGroup key={index}>
            <Label htmlFor={`input-${index}`}>{input.label}</Label>
            <Input
              type={input.type}
              id={`input-${index}`}
              name={input.name}
              placeholder={input.placeholder}
              value={formData[input.name] || ""}
              onChange={handleInputChange}
            />
          </FormGroup>
        ))}
        {additionalData && (
        <div>
          <h3>Información adicional:</h3>
          <p>{additionalData}</p>
        </div>
      )}
        <Button type="submit">Enviar</Button>
      </FormContainer>
    );
  };
  
  DynamicForm.propTypes = {
    formName: PropTypes.string.isRequired,
    inputs: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        placeholder: PropTypes.string
      })
    ).isRequired,
    onSubmit: PropTypes.func.isRequired,
    additionalData: PropTypes.string // Define el propType para additionalData
  };
  
  export default DynamicForm 