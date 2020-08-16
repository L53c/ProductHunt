import styled from '@emotion/styled';

export const Boton = styled.a`
    font-weight: 700;
    text-transform: uppercase;
    border: 1px solid #d1d1d1;
    padding: .8rem 2rem;
    margin-right: 1rem;
    background-color: ${props => props.bgColor ? '#DA552F' : '#FFF'};
    color: ${props => props.bgColor ? '#FFF' : '#000'};
    cursor: pointer;
    -webkit-user-select: none;

    &:last-of-type{
        margin-right: 0;
    }
`;



export default Boton;