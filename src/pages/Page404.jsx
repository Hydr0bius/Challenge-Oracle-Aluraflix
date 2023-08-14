import { styled } from "styled-components";
import login from './../img/portadaLogin.jpg';
const Page404 = () => {
    return (
        <Error404>
            <div>
                <h2>Oops! Page no found</h2>
                <h1>404</h1>
                <p>We can't find the page you're looking for</p>
                <button>Go back home</button>
            </div>
        </Error404>
    );
}

const Error404 = styled.div`
    width: 100%;
    height: 100vh;
    background: linear-gradient(to right,#8E0E00,#1F1C18);

    div{
        width: 50%;
        position: absolute;
        top: 15%;
        left: 25%;
        text-align: center;
        color: #fff;
    }
    h1{
            font-size: 200px;
            margin: 0;
            font-weight: 900;
            letter-spacing: 20px;
            background: url(${login}) center no-repeat;
            -webkit-text-fill-color: transparent;
            -webkit-background-clip: text;
        }
    button{
        margin-top: 1rem;
        width: 250px;
        height: 51px;
        background: linear-gradient(to right,#BA8B02,#f3c335,#181818);
        background-size: 200% auto;
        transition: all .3s cubic-bezier(.25,0.8,.25,1);
        color: white;
        font-size: 1.2rem;
        border: 0;
        border-radius: 5px;
        cursor: pointer;
    }
    button:hover{
        transition: .5s;
        background-position: right center;
        box-shadow: 3px 10px 10px rgb(0, 0, 0, 0.6);
    }
    @media (max-width:890px){
        h1{
            font-size: 100px;
        }
    }
    @media (max-width:512px){
        h1{
            font-size: 50px;
        }
        h2,button{
            font-size: 1rem;
        }
        button{
            width: 140px;
        }
    }
`;
 
export default Page404;