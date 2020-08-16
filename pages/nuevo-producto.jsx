import React, { useState, useContext } from 'react';
import { css } from '@emotion/core';
import { useRouter } from 'next/router';
import Layout from '../components/layout/Layout';
import { Formulario, Campo, InputSubmit, Error } from "../components/ui/Formulario"; // im

import { FirebaseContext } from "../firebase";

// Validaciones
import useValidacion from '../hooks/useValidacion';
import validarCrearProducto from '../validacion/validarCrearProducto';

const STATE_INICIAL = {
  nombre: '',
  empresa: '',
  // imagen: '',
  url: '',
  descripcion: '',
}

const NuevoProducto = () => {
  
  const [ error, guardarError ] = useState(false);
  
  // Declaramos state inicial
  const {
    valores,
    errores,
    handleSubmit,
    handleChange,
    handleBlur
  } = useValidacion(
    STATE_INICIAL, 
    validarCrearProducto, 
    crearProducto
  );
  
  const { 
    nombre, 
    empresa, 
    imagen, 
    url, 
    descripcion 
  } = valores;
  
  // Hook de routing para redireccionar
  const router = useRouter();
  
  // Context con las operaciones CRUD de firebase
  const { usuario, firebase } = useContext(FirebaseContext);

  async function crearProducto() {

    // Si el usuario no está autenticado, redirigir al login
    if(!usuario){
      return router.push('/login');
    }

    // Crear el objeto de nuevo producto
    const producto = {
      nombre, 
      empresa, 
      url, 
      descripcion,
      votos: 0,
      comentarios: [],
      creado: Date.now()
    }

    // Insertarlo en la base de datos
    firebase.db.collection('productos').add(producto);
  }

  return (
    <div>
      <Layout>
        <h1
          css={css`
          text-align: center;
          margin-top: 5rem;
          `}
          >Nuevo Producto</h1>
        <Formulario 
          onSubmit={handleSubmit}
          noValidate
          >
          <fieldset>
            <legend>Información General</legend>
          
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
            {errores.nombre && <Error>{errores.nombre}</Error>}

            <Campo>
              <label 
                htmlFor="empresa"
                >Empresa</label>
              <input 
                type="text" 
                name="empresa"
                id="empresa"
                placeholder="Nombre Empresa o Compañía"
                value={empresa}
                onChange={handleChange}
                onBlur={handleBlur}
                />
            </Campo>
            {errores.empresa && <Error>{errores.empresa}</Error>}
            
            {/* <Campo>
              <label 
                htmlFor="imagen"
                >Imagen</label>
              <input 
                type="file" 
                name="imagen"
                id="imagen"
                value={imagen}
                onChange={handleChange}
                onBlur={handleBlur}
                />
            </Campo>
            {errores.imagen && <Error>{errores.imagen}</Error>} */}
            
            <Campo>
              <label 
                htmlFor="url"
                >Url</label>
              <input 
                type="url" 
                name="url"
                id="url"
                placeholder="Url del producto"
                value={url}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Campo>
            {errores.url && <Error>{errores.url}</Error>}
          </fieldset>

          <fieldset>
            <legend>Sobre tu Producto</legend>
            
            <Campo>
              <label 
                htmlFor="descripcion"
                >Descripcion</label>
              <textarea
                name="descripcion"
                id="descripcion"
                value={descripcion}
                onChange={handleChange}
                onBlur={handleBlur}
                />
            </Campo>
            {errores.descripcion && <Error>{errores.descripcion}</Error>}
          </fieldset>

          {error && <Error>{error}</Error>}
          
          <InputSubmit 
            type="submit"
            value="Crear Producto"
          />

        </Formulario>
      </Layout>
    </div>
  );
}
 
export default NuevoProducto;