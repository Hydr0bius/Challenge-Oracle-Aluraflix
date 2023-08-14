import React, {useCallback, useState} from 'react';
import { NavLink } from "react-router-dom";
import login from './../img/portadaLogin.jpg';
import { styled } from 'styled-components';
import { BiErrorCircle, AiOutlineCheckCircle, AiOutlineWarning } from 'react-icons/ai';
import { ColorFondo, ColorLogo, TextoColorClaro } from '../components/UI/Colores';

const Login = () => {

    const [variant,setVariant] = useState('login');
    const toggleVariant = useCallback(()=>{
        setVariant((currentVariant) => currentVariant === 'login' ? 'register' : 'login')
    },[]);
    return (
        <Portada>
            <h1>HydrobiusFlix</h1>
            <StyledFondo>
                <StyledCentradoForm>
                    <h2>{variant === 'login' ? 'Inicia sesión' : 'Crear cuenta' }</h2>
                    <StyledForm action="">
                        <StyledFormControl>
                            <input type="text" required/>
                            <label htmlFor="">Email o telefono</label>
                        </StyledFormControl>
                        <StyledFormControl>
                            <input type="password" required/>
                            <label htmlFor="">Contraseña</label>
                        </StyledFormControl>
                        <StyledButton type='submit'>{variant === 'login' ? 'Iniciar sesión' : 'Crear cuenta'}</StyledButton>
                        <StyledRemember>
                            <div>
                                <input type="checkbox" />
                                <label htmlFor="">Recordarme</label>
                            </div>
                            <NavLink to='/LoginHelp'>¿Necesita ayuda?</NavLink>
                        </StyledRemember>
                    </StyledForm>
                    <p>{variant === 'login' ? 'Primera vez' : 'Ya tienes una cuenta?'}<span
                        onClick={toggleVariant}
                        >{variant === 'login' ? ' Registrate ahora' : ' Inicia sesión'}</span></p>
                    <small>
                        Esta pagina esta protegida por Google reCAPTCHA para verificar que no eres un robot.
                        <NavLink to="/MoreInfo"> más info.</NavLink>
                    </small>
                </StyledCentradoForm>
            </StyledFondo>
        </Portada>
    );
}

const Portada = styled.div`
    width: 100%;
    height: 100vh;
    background-image:url(${login});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-color:rgba(0, 0, 0, 0.4);
    background-blend-mode: soft-light;

    h1{
        color: ${ColorLogo};
        font-weight: bold;
        font-size: 2.5rem;
    }
`;
const StyledFondo = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    width: 450px;
    transform: translate(-50%, -50%);
    background: rgba(0,0,0,0.75);
    border-radius: 7px;
    box-shadow: 10px 10px 15px rgba(0,0,0,0.15);
    color: white;
    h2{
        font-size: 2rem;
    }
    @media (max-width:700px){
        width: 100%;
        height: 100%;
        background-color: #000;
    }
`;
const StyledCentradoForm = styled.div`
    width: 85%;
    margin: auto;
    padding: 4rem 0;

    small{
        display: block;
        margin-top: 15px;
        color: #b3b3b3;
    }
    small a{
        color: #0071eb;
    }
    p span{
        cursor: pointer;
        font-weight: bold;
    }
    p span:hover{
        text-decoration-line: underline;
    }

`;
const StyledForm = styled.form`
    margin: 25px 0 65px;
    button:hover{
        transition: .2s;
        background-color: #c40812;
    }
`;
const StyledFormControl = styled.div`
    padding: 10px 0;
    position: relative;
    input{
        position: relative;
        height: 100%;
        width: 100%;
        background: #333;
        border: none;
        outline: none;
        border-radius: 4px;
        color: ${ColorFondo};
        font-size: 1rem;
        padding: 25px 20px 0;
    }
    input:focus{
        background: #444;
    }
    label{
        position: absolute;
        left: 20px;
        top: 50%;
        transform: translateY(-50%);
        font-size: 1rem;
        pointer-events: none;
        color: #8c8c8c;
        transition: all 0.1s ease;
    }
    input:focus ~ label{
        font-size: 0.75rem;
        transform: translateY(-130%);
    }
`;
const StyledButton = styled.button`
    width: 100%;
    padding: 16px 0;
    font-size: 1rem;
    background: #e50914;
    color: ${TextoColorClaro};
    font-weight: 500;
    border-radius: 4px;
    border: none;
    outline: none;
    margin: 25px 0 10px;
    cursor: pointer;
`;
const StyledRemember = styled.div`
    display: flex;
    justify-content: space-between;
    a{
        color: #b3b3b3;
        font-size: .8rem;
    }
    a:hover{
        text-decoration-line: underline;
    }
`;

export default Login;