import React from 'react'
import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

const GrupoContenido = (props) => {

    //Destructuracion
    const {colorPrimario, titulo, descripcion} = props.datos;
    const Color = {
        backgroundColor: colorPrimario
    }
    return (
        <StyledSection>
            <NavLink style={Color}>{titulo}</NavLink>
            <p>{descripcion}</p>
        </StyledSection>
    );
}

const StyledSection = styled.section`
    background-color: #202020;
    display: flex;
    color: #fff;
    align-items: center;
    a{
        color: #fff;
        font-size: 1.5rem;
        padding: 10px;
        margin: 10px;
        border-radius: 4px;
        transition: 1s;
    }
    a:hover{
        transition: 1s;
        color: #8c8c8c;
        text-decoration-line: underline;
    }
    p{
        font-size: .8rem;
        color: #8c8c8c;
    }
`;
 
export default GrupoContenido;