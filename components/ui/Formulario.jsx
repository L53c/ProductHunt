import styled from '@emotion/styled'; // imesc

export const Formulario = styled.form`
    max-width: 600px;
    width: 95%;
    margin: 0 auto;
    fieldset{
        margin: 2rem 0;
        padding: 2rem;
        border: 1px silid #e1e1e1;
    }
    legend{
        padding: 1rem;
        font-weight: 700;
        font-size: 2.3rem;
        // color: var(--naranja);
        color: rgb(0 0 0 / 60%);
    }
`; // src-form

export const Campo = styled.div`
    margin-bottom: 2rem;
    display: flex;
    align-items: center;
    label{
        flex: 0 0 15rem;
        font-size: 1.8rem;
    }
    input,
    textarea{
        flex: 1;
        padding: 1rem;
    }
    textarea{height:300px;}
    input.inputError{
        color: var(--naranja);
        border: 1px solid var(--naranja);
        background-color: #ff00001f;
    }
    input.inputSuccess{
        color: green;
        border: 1px solid green;
        background-color: #e9f6e9;
    }
`; // src-div

export const InputSubmit = styled.input`
    background-color: var(--naranja);
    width: 100%;
    padding: 1.5rem;
    margin-bottom: 3rem;
    text-align: center;
    color: #fff;
    font-size: 1.8rem;
    text-transform: uppercase;
    border: none;
    font-family: 'PT Sans', sans-serif;
    font-weight: 700;
    cursor: pointer;
    user-select: none;
    transition: all .2s ease;
    border-bottom: 4px solid #9b2d0d;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    &:hover{
        background: #b2482b;
        background: #c75738;
        // border-bottom: 4px solid #b2482b;
        border-bottom: 4px solid #c75738;
        border-top: 2px solid #ec6e4a;
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
    }
`;

export const Error = styled.p`
    background-color: #ff00001f;
    padding: 1rem;
    font-family: 'PT Sans', sans-serif;
    font-weight: 700;
    font-size: 1.4rem;
    color: var(--naranja);
    border: 1px solid var(--naranja);
    border-bottom: 2px solid var(--naranja);
    border-radius: 2px;
    text-align: center;
    text-transform: upeprcase;
    margin: 2rem auto;
`;  