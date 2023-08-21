import React from 'react'
import { styled } from 'styled-components';
import { StyledFormControl } from '../components/UI/Colores';

const AddVideo = () => {
    return (
        <StyledAddVideo>
            <h1>Nuevo video</h1>
            <StyledForm action="">
                <StyledFormControl>
                    <input type="text" />
                    <label htmlFor="">Titulo</label>
                </StyledFormControl>
                <StyledFormControl>
                    <input type="text" />
                    <label htmlFor="">Link del video</label>
                </StyledFormControl>
                <StyledFormControl>
                    <input type="text" />
                    <label htmlFor="">Link imagen del video</label>
                </StyledFormControl>
                <StyledFormControl>
                    <input type="text" />
                    <label htmlFor="">Escoja una categoría</label>
                </StyledFormControl>
                <StyledTextTarea>
                    <textarea name="" id="" cols="30" rows="10" placeholder='Descripción'></textarea>
                </StyledTextTarea>
                <div>
                    <button>Guardar</button>
                    <button>Limpiar</button>
                    <div>
                        <button>Nueva Gategoria</button>
                    </div>
                </div>
            </StyledForm>
        </StyledAddVideo>
    );
}

const StyledAddVideo = styled.section`
    width: 100%;
    height: 100vh;
    background: rgba(0,0,0,0.9);
    color: #fff;
    h1{
        padding-top: 7vh;
        text-align: center;
        text-transform: uppercase;
        font-weight: 400;
        font-size: 3.75rem;
    }
`;
const StyledForm = styled.form`
    margin: auto;
    width: 90%;
    border: 1px solid red;
`;
const StyledTextTarea = styled.div``;
export default AddVideo;