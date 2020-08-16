import React, { useState } from 'react';
import { css } from '@emotion/core';
import { useRouter } from 'next/router';
import Layout from '../components/layout/Layout';
import { Formulario, Campo, InputSubmit, Error } from "../components/ui/Formulario"; // im

import firebase from "../firebase";

// Validaciones
import useValidacion from '../hooks/useValidacion';
import validarIniciarSesion from '../validacion/validarIniciarSesion';

const STATE_INICIAL = {
  email: '',
  password: ''
}

const Login = () => {

  const router = useRouter();

  const [ error, guardarError ] = useState(false);

  // Declaramos state inicial
  const {
    valores,
    errores,
    handleSubmit,
    handleChange,
    handleBlur
  } = useValidacion(STATE_INICIAL, validarIniciarSesion, iniciarSesion);

  const { email, password } = valores;

  async function iniciarSesion() {
    try {
      const usuario = await firebase.login( email, password );
      router.push('/');
    } catch (error) {
      console.error('Hubo un error al autenticar el usuario ', error );
      guardarError(error.message);
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
        >Iniciar Sesión</h1>
        <Formulario 
          onSubmit={handleSubmit}
          noValidate
        >
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
            value="Iniciar Sesión"
          />

          {errores.email && <Error>{errores.email}</Error>}
          {errores.password && <Error>{errores.password}</Error>}

          {error && <Error>{error}</Error>}

        </Formulario>
      </Layout>
    </div>
  );
}
 
export default Login;