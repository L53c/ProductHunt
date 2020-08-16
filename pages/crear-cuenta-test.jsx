import React from 'react';
import { css } from '@emotion/core';
import Layout from '../components/layout/Layout';
import { Formulario, Campo, InputSubmit, Error } from "../components/ui/Formulario"; // im

// Validaciones
import useValidacion from '../hooks/useValidacion';
import validarCrearCuenta from '../validacion/validarCrearCuenta';

const STATE_INICIAL = {
  nombre: '',
  email: '',
  password: ''
}

const CrearCuenta = () => {

  // Declaramos state inicial
  const {
    valores,
    errores,
    submitForm,
    handleSubmit,
    handleChange,
    handleBlur
  } = useValidacion(STATE_INICIAL, validarCrearCuenta, crearCuenta);

  const { nombre, email, password } = valores;

  function crearCuenta() {
    console.log('Creando cuenta');
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
              className={ errores.nombre ? "inputError" : "inputSuccess"}
              id="nombre"
              placeholder={ errores.nombre ? errores.nombre : "Tu Nombre"}
              value={nombre}
              onChange={handleChange}
              onBlur={handleBlur}
              />
          </Campo>

          {/* {errores.nombre && <Error>{errores.nombre}</Error>} */}

          <Campo>
            <label 
              htmlFor="email"
              >Email</label>
            <input 
              type="email" 
              name="email"
              id="email"
              className={ errores.email ? "inputError" : "inputSuccess"}
              placeholder={ errores.email ? errores.email : "Tu Email"}
              value={email}
              onChange={handleChange}
              onBlur={handleBlur}
              />
          </Campo>
              
            {/* {errores.email && <Error>{errores.email}</Error>} */}
          
          <Campo>
            <label 
              htmlFor="password"
              >Password</label>
            <input 
              type="password" 
              name="password"
              id="password"
              className={ errores.password ? "inputError" : "inputSuccess"}
              placeholder={ errores.password ? errores.password : "Tu Password"}
              value={password}
              onChange={handleChange}
              onBlur={handleBlur}
              />
          </Campo>

            {errores.password && <Error>{errores.password}</Error>}
          
          <InputSubmit 
            type="submit"
            value="Crear Cuenta"
          />
        </Formulario>
      </Layout>
    </div>
  );
}
 
export default CrearCuenta;