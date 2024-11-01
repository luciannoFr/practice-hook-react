// components/Loader.js
import React from 'react';
import PropTypes from 'prop-types'; // Importa PropTypes
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const gradient = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const LoaderDiv = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 10px solid transparent;
  border-top-color: #3b82f6; 
  animation: ${spin} 1s linear infinite;
  background: linear-gradient(90deg, #3b82f6, #60a5fa, #3b82f6, #60a5fa);
  background-size: 400% 400%;
  animation: ${gradient} 3s ease infinite;
`;

const Message = styled.h2`
  margin-top: 1rem;
  color: #3b82f6; 
  font-weight: bold;
  font-size: 1.25rem;
`;

const Loader = ({ message }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <LoaderDiv />
      <Message>{message}</Message>
    </div>
  );
};

// Validación de props
Loader.propTypes = {
  message: PropTypes.string.isRequired, // Indica que 'message' es una prop requerida
};

export default Loader;
