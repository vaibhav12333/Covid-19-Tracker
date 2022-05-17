import react,{useState,useEffect} from 'react';
import Sidebar from "../../Components/Sidebar"
import styled from "styled-components"
import PayPal from "../../Components/paypal"
import {Navigate} from "react-router-dom"
const social = '/assets/Research.svg'
const covid  = "assets/covid.png"


const AuthStyle = styled.div`
height:100%;
background:#f5f8fa;
overflow-y:hidden;
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
.Payment-btn {
    padding: 10px 25px ;
    margin: 4px;
    border-radius: 25px;
    background-color:orange;
    color:#fff;
    border:white;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px !important;
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
const Appointment = ()=>{
    useEffect(() =>{<Navigate to='/' />},[])
const [checkout, setCheckOut] = useState(false); //changes by sakshi

    return(
        <AuthStyle>


            <Sidebar active="Appointment" />
            <div className="mx-auto">
            <div className="my-5">
                <h3 >Please Proceed To Payment After Booking Timeslot To Confirm Meeting</h3>
                        <div className="PaymentOpt">
                        {checkout ? (
                            <PayPal />
                        ) : (
                            <button className="Payment-btn"
                            onClick={() => {
                                setCheckOut(true);
                            }}
                            >
                            PAYMENT
                            </button>
                        )}
                        </div>
                        </div>
            <div className=" d-flex align-items-center    justify-content-center">
                       
                            <div>
                            <iframe src="https://meetings.hubspot.com/badal-tyagi" width="700" height="650" />

                            </div>
                    </div>
                    </div>
                {/* <div className="row">
            
                    <div className="col-7 d-flex align-items-center d-none d-md-block justify-content-center">
                            <img src={social} width="600" height="600"/>
                    </div>
                 
                </div>
            </div> */}
           
        </AuthStyle>
    )
}

export default Appointment;
