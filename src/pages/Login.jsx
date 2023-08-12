import login from './../img/portadaLogin.jpg';
import { styled } from 'styled-components';
import { BiErrorCircle, AiOutlineCheckCircle, AiOutlineWarning } from 'react-icons/ai';

const Login = () => {
    return (
        <Portada>
            <h1>HydrobiusFlix</h1>
            <Fondo>
                <h1>Inicia sesión</h1>
                <form action="" method="post">
                    <div>
                        <label for="usuario">Usuario</label>
                        <div>
                            <input type="text" name="usuario" placeholder="Usuario" />
                            <AiOutlineCheckCircle/>
                        </div>
                        <p>Solo puede contener letars y espacios.</p>
                    </div>
                    <div>
                        <label for="password">Contraseña</label>
                        <div>
                            <input type="password" name="password" placeholder="Contraseña" />
                            <AiOutlineCheckCircle />
                        </div>
                        <p>Solo puede contener letars y espacios.</p>
                    </div>
                    <div>Forgot Password?</div>
                    <input type="submit" value="login" />
                    <div>
                        Not a Member? <a href="#" id="button">Sing up</a>
                    </div>
                </form>
            </Fondo>
        </Portada>
    );
}

const Portada = styled.div`
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100vh;
    box-sizing: border-box;
    background-image:url(${login});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-color:rgba(0, 0, 0, 0.4);
    background-blend-mode: soft-light;

    h1{
        padding: 0;
        margin: 0;
        color: #ff0054;
        font-weight: bold;
        font-size: 2.5rem;
    }
`;
const Fondo = styled.div`
    position: absolute;
    left: 50%;
    width: 400px;
    height: 60vh;
    transform: translate(-50%, 10%);
    background: rgba(0,0,0,0.7);
    border-radius: 7px;
    box-shadow: 10px 10px 15px rgba(0,0,0,0.15);
    color: white; //quitar despues

    h1{
        padding: 20px;
        font-size: 35px;
        color: #fff;
    }
    form{
        padding: 0 45px;
        box-sizing: border-box;
    }
`;


export default Login;