import React,{useEffect, useState} from 'react'
import { NavLink } from "react-router-dom";
import { AiOutlineSearch, AiOutlineBell } from 'react-icons/ai'
import { styled } from "styled-components";
import { TextoColorClaro, Headerbackground, ColorLogo } from './UI/Colores';

const Header = () => {
    const Top_offset = 20;

    const [showBackground, setShowBackground] = useState(false);

    useEffect(()=>{
        const handleScroll = () =>{
            if(window.scrollY > Top_offset){
                setShowBackground(true);
            }else{
                setShowBackground(false);
            };
        };
        window.addEventListener('scroll',handleScroll);

        return()=>{
            window.removeEventListener('scroll',handleScroll);
        }
    },[]);
    
    return (
        <StyledHead
            className={`${showBackground ? `${Headerbackground}` : ''}`}
        >
            <div>
                <StyledLogo><NavLink to='/'>HydrobiusFlix</NavLink></StyledLogo>
                <nav>
                    <StyledMobile>
                        <span>
                            Servicios
                            <ul>
                                <li><NavLink to='/'>Inicio</NavLink></li>
                                <li><NavLink to='/'>Series</NavLink></li>
                                <li><NavLink to='/'>Peliculas</NavLink></li>
                                <li><NavLink to='/'>Mi lista</NavLink></li>
                            </ul>
                        </span>
                    </StyledMobile>
                    <StyledMenu>
                        <li><NavLink to='/'>Inicio</NavLink></li>
                        <li><NavLink to='/'>Series</NavLink></li>
                        <li><NavLink to='/'>Peliculas</NavLink></li>
                        <li><NavLink to='/'>Mi lista</NavLink></li>
                    </StyledMenu>
                </nav>
            </div>
            <StyledUser>
                <input type="text" placeholder=" Titulo, Serie" />
                <AiOutlineSearch />
                <AiOutlineBell />
                <StyledProfile />
            </StyledUser>
        </StyledHead>
    );
}
const StyledHead = styled.header`
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 5vh;
    display: flex;
    justify-content: space-between;
    padding: 0 4%;
    font-size: 1.2rem;
    transition: 0.7s;
    z-index: 99;
    box-shadow: 0 10px 20px rgba(0,0,0,0.2);
    background: #202020;

    div{
        display: flex;
        align-items: center;
    }
`;
const StyledLogo = styled.span`
        a{
        padding-right: 15px;
        color: ${ColorLogo};
    }
`;
const StyledMenu = styled.ul`
    li {
        position: relative;
        display: inline-block;
    }

    li > a {
        display: block;
        color: ${TextoColorClaro};
        padding: 0 5px;
        text-decoration: none;
    }
    @media (max-width:1000px){
        display: none;
    }

`;
const StyledProfile = styled.div`
    display: inline-block;
    width: 35px;
    height: 35px;
    background-image: url(https://cdn-icons-png.flaticon.com/512/149/149071.png);
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
`;

const StyledMobile = styled.div`
    span{
        padding: 0 10px;
        position: relative;
        color: ${TextoColorClaro};
        cursor: pointer;
        display: none;
    }
    ul{
        display: none;
    }
    span:hover ul{
        display: block;
    }

    @media (max-width:1000px){
        span{
            display: block;
        }
        ul{
            width: 110%;
            position: absolute;
            left: 0rem;
            padding: 15px;
            border-radius: 5px;
            text-align: center;
            background: ${Headerbackground};
            list-style: none;
    }
        ul li:hover{
            /* transition: .3s; */
            border-bottom: 1px solid red;
    }
        ul li a{
            padding: 10px 0;
            color: ${TextoColorClaro};
        }
    }
`;
const StyledUser = styled.div`
    input{
        background-color: transparent;
        border: 1px solid gray;
        color: ${TextoColorClaro};
        border-radius: 5px;
        height: 30px;
    }
    input:focus{
        border: 2px solid ${ColorLogo};
        outline: none;
    }
    svg{
        color: #fff;
    }
`;

export default Header;