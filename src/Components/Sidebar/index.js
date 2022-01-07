import React from 'react';
import styled from "styled-components";

const Wrapper = styled.div`
text-align:initial;
 
.navigation{
    position:fixed;
    top:20px;
    left:20px;
    bottom:30px;
    width:70px;
    border-radius:10px;
    box-sizing: initial;
    border-left: 5px solid orange;
    background:orange;

    ul{
        position: absolute;
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
    return(
        <Wrapper>
            <div className="navigation">
                <ul>
                    <li className="list active">
                        <a href="#">
                            <span className="icon">
                            <ion-icon name="home-outline"></ion-icon>
                            </span>
                            <span className="title ">Home</span>
                        </a>   
                    </li>
                    <li className="list">
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
                    <li className="list">
                        <a href="#">
                            <span className="icon">
                            <ion-icon name="shield-outline"></ion-icon>
                            </span>
                            <span className="title">Book Appointment</span>
                        </a>   
                    </li>
                    <li className="list">
                        <a href="#">
                            <span className="icon">
                            <ion-icon name="log-out-outline"></ion-icon>
                            </span>
                            <span className="title">Log Out</span>
                        </a>   
                    </li>

                </ul>
            </div>
        </Wrapper>
    )
}

export default Sidebar;