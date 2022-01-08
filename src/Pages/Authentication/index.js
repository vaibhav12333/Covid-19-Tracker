import react,{useState} from 'react';
import Login from "../../Components/Login"
import Sidebar from "../../Components/Sidebar"
import styled from "styled-components"
const social = '/assets/EmptyStreet.svg'
const covid  = "assets/covid.png"


const AuthStyle = styled.div`
height:100vh;

display:flex;
align-items:center;
justify-content:center;
.login{
width:500px;
padding:50px;
border-radius:10px;
background:cream;
}
.covid-logo{
    z-index:-1;
    width:400px;
    height:400px;
    position:absolute;
    right:20px;
    top:30%;
    animation-name: breath-animation;
 animation-duration: 6s;
 animation-iteration-count: infinite;
}
}
@keyframes logo{
    0%{
        transform: translateY(-50%) !important;
    }
    40%{
        transform: translateY(-30%) !important;

    }
    60%{
        transform: translateY(-20%) !important;

    }
    100%{
        transform: translateY(0%) !important;

    }
   
}
@keyframes breath-animation {
    0% { height: 300px; width: 300px; }
    50% { height: 400px; width: 400px; opacity: 1 }
    100% { height: 300px; width: 300px; }
   }
`
const Auth = ()=>{
    return(
        <AuthStyle>


            <Sidebar active="Login" />
            <div className="container">
            <img src={covid} className="covid-logo"/>
                <div className="row">
            
                    <div className="col-7 d-flex align-items-center d-none d-md-block justify-content-center">
                            <img src={social} width="600" height="600"/>
                    </div>
                    <div className="col-5 d-flex align-items-center  justify-content-center">
                    <div className="login">
            
            <Login />
            </div>
                    </div>
                </div>
            </div>
           
        </AuthStyle>
    )
}

export default Auth;