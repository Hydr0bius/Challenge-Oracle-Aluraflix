import React from 'react'
import ReactPlayer from 'react-player';
import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';
import { TextoColorClaro } from './../UI/Colores';
import {AiFillPlaySquare, AiFillInfoCircle } from 'react-icons/ai'

const HeaderVideo = () => {
    return (
        <div style={{position:'relative'}}>
            <ReactPlayer
                url='https://youtu.be/EG5GVRrT7yo'
                width='100%'
                height='60vh'
                playing
                muted
                loop
                className
            />
            <StyledContenidoVideo>
                <h2>Challenge React</h2>
                <p>
                    Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte
                    en la resolución de un problema para poder aplicar todos los conocmientos adquiridos en la formación React.
                </p>
                <StyledBtnVideo>
                    <NavLink><AiFillPlaySquare/> Reproducir</NavLink>
                    <NavLink><AiFillInfoCircle/> Más información</NavLink>
                </StyledBtnVideo>
            </StyledContenidoVideo>
            <StyledVideoHeader>
                    <div>
                        <ReactPlayer
                            url='https://youtu.be/ov7vA5HFe6w'
                            width='350px'
                            height='250px'
                        />
                    </div>
            </StyledVideoHeader>
        </div>
    );
};

const StyledContenidoVideo = styled.div`
    position: absolute;
    top: 40%;
    left: 4%;
    color: ${TextoColorClaro};

    p{
        width: 45%;
        text-align: justify;
        margin-bottom: 2rem;
    }
    @media (max-width:600px){
        top: 30%;
        p{
            width: 85%;
        }
    }
`;
const StyledBtnVideo = styled.div`
    a{
        margin-left: 1rem;
        width: 250px;
        height: 51px;
        padding: 10px 5px;
        background: linear-gradient(to right,#c31432,#ff012b,#240b36);
        background-size: 200% auto;
        transition: all .3s cubic-bezier(.25,0.8,.25,1);
        color: white;
        font-size: 1.2rem;
        border: 0;
        border-radius: 5px;
        opacity: .6;
        cursor: pointer;
    }
    a:hover{
        transition: .5s;
        background-position: right center;
        box-shadow: 3px 10px 10px rgb(0, 0, 0, 0.6);
        opacity: 1;
    }
    
    @media (max-width:360px){
        a{
            width: 100px;
            height: 35px;
            font-size: .8rem;
        }
    }
`;
const StyledVideoHeader = styled.div`
    position: absolute;
    top: 40%;
    right: 7%;
    div{
        opacity: .7;
        transition: .8s;
    }
    div:hover{
        transition: .8s ease-in-out;
        opacity: 1;
    }
    @media (max-width:768px){
        display: none;
    }
`;
 
export default HeaderVideo;