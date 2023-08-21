import { styled } from "styled-components";

export const TextoColorClaro = "#f1f1f1";
export const ColorFondo = "#fff";
export const Headerbackground = "#141400";
export const ColorLogo = "#ff0054";

export const StyledFormControl = styled.div`
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
    color: ${TextoColorClaro};
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