import React, { useState } from 'react';
import { css } from '@emotion/core';
import { useRouter } from 'next/router';
import Layout from '../components/layout/Layout';
import { Formulario, Campo, InputSubmit, Error } from "../components/ui/Formulario"; // im

import firebase from "../firebase";

// Validaciones
import useValidacion from '../hooks/useValidacion';
import validarCrearCuenta from '../validacion/validarCrearCuenta';

const STATE_INICIAL = {
  nombre: '',
  email: '',
  password: ''
}

const CrearCuenta = () => {
  
  const router = useRouter();
  const [ error, guardarError ] = useState(false);

  // Declaramos state inicial
  const {
    valores,
    errores,
    handleSubmit,
    handleChange,
    handleBlur
  } = useValidacion(STATE_INICIAL, validarCrearCuenta, crearCuenta);

  const { nombre, email, password } = valores;

  async function crearCuenta() {
    try {
      await firebase.registrar(nombre, email, password);
      router.push('/');
    } catch (error) {

      // switch (error.code) {
      // case "auth/emailAlreadyInUse":
      //   message = "Este correo ya está siendo usado por otro usuario"
      //   break;  
      // case "auth/userDisabled":
      //   message = "Este usuario ha sido deshabilitado"
      //   break;  
      // case "auth/operationNotAllowed":
      //   message = "Operación no permitida"
      //   break;  
      // case "auth/invalidEmail":
      //   message = "Correo electrónico no valido"
      //   break;  
      // case "auth/wrongPassword":
      //   message = "Contraseña incorrecta"
      //   break;  
      // case "auth/userNotFound":
      //   message = "No se encontró cuenta del usuario con el correo especificado"
      //   break;  
      // case "auth/networkError":
      //   message = "Promblema al intentar conectar al servidor"
      //   break;  
      // case "auth/weakPassword":
      //   message = "Contraseña muy debil o no válida"
      //   break;  
      // case "auth/missingEmail":
      //   message = "Hace falta registrar un correo electrónico"
      //   break;  
      // case "auth/internalError":
      //   message = "Error interno"
      //   break;  
      // case "auth/invalidCustomToken":
      //   message = "Token personalizado invalido"
      //   break;  
      // case "auth/tooManyRequests":
      //   message = "Ya se han enviado muchas solicitudes al servidor"
      //   break;
      // }
      // return message;
      guardarError(error.message);
      
      console.error('Hubo un error al crear el usuario ', error);
    }
  }

  return (
    <div>
      <Layout>
        <h1
          css={css`
            text-align: center;
            margin-top: 5rem;
          `}
        >Crear Cuenta</h1>
        <Formulario 
          onSubmit={handleSubmit}
          noValidate
        >
          <Campo>
            <label 
              htmlFor="nombre"
              >Nombre</label>
            <input 
              type="text" 
              name="nombre"
              id="nombre"
              placeholder="Tu Nombre"
              value={nombre}
              onChange={handleChange}
              onBlur={handleBlur}
              />
          </Campo>

          <Campo>
            <label 
              htmlFor="email"
              >Email</label>
            <input 
              type="email" 
              name="email"
              id="email"
              placeholder="Tu Email"
              value={email}
              onChange={handleChange}
              onBlur={handleBlur}
              />
          </Campo>
          
          <Campo>
            <label 
              htmlFor="password"
              >Password</label>
            <input 
              type="password" 
              name="password"
              id="password"
              placeholder="Tu Password"
              value={password}
              onChange={handleChange}
              onBlur={handleBlur}
              />
          </Campo>
          
          <InputSubmit 
            type="submit"
            value="Crear Cuenta"
          />
          {errores.nombre && <Error>{errores.nombre}</Error>}
          {errores.email && <Error>{errores.email}</Error>}
          {errores.password && <Error>{errores.password}</Error>}
        </Formulario>
      </Layout>
    </div>
  );
}
 
export default CrearCuenta;