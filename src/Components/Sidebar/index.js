import React from 'react';
import styled from "styled-components";
import {Link,useNavigate} from "react-router-dom"




const covid  = "assets/covid.png"

const Wrapper = styled.div`
text-align:initial;
 
.navigation{
    position:fixed;
    top:20px;
    display:flex;
    flex-direction:column;
    left:20px;
    bottom:30px;
    width:70px;
    border-radius:10px;
    box-sizing: initial;
    border-left: 5px solid orange;
    background:orange;

    ul{
        margin-top:auto;
        top:0;
        left:0;
        width: 100%;
        padding-left: 5px;
        padding-top:40px;
    }

}
.navigation ul li.active{
    background:rgb(255,249,242);
    a{
        color:#333;
    }

}

.navigation ul li{
    border-top-left-radius:20px;
    border-bottom-left-radius:20px;
    position: relative;
    text-decoration:none;
    list-style-type:none;
    width:100%;
    
    a{
        position: relative;
        display:block;
        width:100%;
        display:flex;
        align-items: start;

        text-decoration:none;
        color:#fff;
        .title{
            position:relative;
            display:none;
            padding-left:10px;
            height:60px;
            line-height:49px;
            white-space:normal;
           


        }
        .icon{
            position: relative;
            display:block;
            min-width:60px;
            height:60px;
            line-height:60px;
            text-align:center;
            ion-icon{
                font-size:1.5rem;
            }
        }
    }

}
li:hover{
    background:rgb(255,249,242);
    a:hover{
        color:black;
        .title:hover{
            display:block;
        }

    }
}
.toggle{
    position:fixed;
    top:20px;
    right:20px;
    width:50px;
    height:50px;
    background:orange;
    border-radius:10px;
    cursor:pointer;
    .active{
            background
        }
    }
    .navigation:hover{
        width:300px;
        transition: 0.3s ease-in-out;
        .title{
            display:block;
        }
    }
    
    
    


`
const Sidebar = (props)=>{
    let navigate = useNavigate()

    const handleLogout = ()=>{
        localStorage.clear();
        navigate(`/`)
    }
    return(
        <Wrapper>
            <div className="navigation">
           
                <ul>
                    <li className={`list ${props.active==="Home"?"active":""}`}>
                       <Link to='/'>
                       <a href="#">
                            <span className="icon">
                            <ion-icon name="home-outline"></ion-icon>
                            </span>
                            <span className="title ">Home</span>
                        </a>   
                       </Link>
                    </li>
                    <li className={`list ${props.active==="Symptoms"?"active":""}`}>
                        <a href="#">
                            <span className="icon">
                            <ion-icon name="accessibility-outline"></ion-icon>
                            </span>
                            <span className="title">Symptoms</span>
                        </a>   
                    </li>
                    <li className="list">
                        <a href="#">
                            <span className="icon">
                            <ion-icon name="globe-outline">
                                
                            </ion-icon>
                            </span>
                            <span className="title">Countries</span>
                        </a>   
                    </li>
                    <li className={`list ${props.active==="Appointment"?"active":""} `}>
                        <Link to={`${localStorage.getItem('user') ?'/Appointment':'/auth'}`}>
                        <a href="#">
                            <span className="icon">
                            <ion-icon name="shield-outline"></ion-icon>
                            </span>
                            <span className="title">Book Appointment</span>
                        </a>   
                        </Link>
                    </li>
                    <li className={`list ${props.active==="Login"?"active":""} ${localStorage.getItem('user') ?'d-none':'d-block'}`}>
                      <Link to='/auth'>
                      <a href="#">
                            <span className="icon">
                            <ion-icon name="log-in-outline"></ion-icon>
                            </span>
                            <span className="title">Log in</span>
                        </a>   
                      </Link>
                    </li>


                   

                </ul>
                <ul>
                <li className={`list ${localStorage.getItem('user') ?'d-block':'d-none'}`} onClick={handleLogout}>
                      <a  >
                            <span className="icon">
                            <ion-icon name="log-out-outline"></ion-icon>
                            </span>
                            <span className="title">Log out</span>
                        </a>   
                    </li>
                    </ul>
            </div>
        </Wrapper>
    )
}

export default Sidebar;