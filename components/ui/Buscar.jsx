import React from 'react';
import styled from '@emotion/styled' // ies
import { css } from '@emotion/core' // iec


export const InputText = styled.input`
    bordr: 1px solid var(--gris3);
    padding: 1rem;
    min-width: 300px;
    &:focus InputSubmit{
        border: none;
        transform: translateY(-3px);
    }
`; // scr-input

export const InputSubmit = styled.button`
    height: 3rem;
    width: 3rem;
    display: block;
    background-size: 4rem;
    background-image: url('/static/img/buscar.png');
    background-repeat: no-repeat;
    position: absolute;
    right: 1rem;
    top: 1px;
    background-color: #fff;
    border: none;
    cursor: pointer;
    transform: translateY(3px);
    // &:active{
    //     outline: none;
    // }
    &:focus{
        outline: none;
    }
`; // scr-input

const Buscar = () => {
    return (
        <form 
            css={css`
                position: relative;
            `}
        >
            <InputText 
                type="text"
                placeholder="Buscar Productos" 
            />
            <InputSubmit type="submit"></InputSubmit>
        </form>
    );
}
 
export default Buscar;