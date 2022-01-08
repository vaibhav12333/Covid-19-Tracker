import { useEffect, useState } from "react";
import firebase from "../firebase" 
import styled from "styled-components"; 
import { toast } from 'react-toastify';
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"   
const Wrapper = styled.div` 
button{
    span{
        font-size: small;
        line-height: 160%;
        font-weight: 500; 
    }
    padding: 1rem;
    border-width: 1px;
    border-radius: .25rem;
    border-color: rgba(219,226,234);
    background-color: rgba(246,247,248);
    width: 100%;
    margin:auto
}
.mdl-button--raised.mdl-button--colored {
    background: #3f51b5;
    color: #fff;
    display:block !important;
    line-height: 10% !important;


}
.mdl-button--primary.mdl-button--primary {
    color: #3f51b5;
    line-height: 10% !important;
    margin-bottom: 10px !important;
    background: darkgray !important;
}
`

const GoogleAuth = () => {
    const [isSignedIn, setSignedIn] = useState()
    // const history = useHistory()
    const uiConfig = {
        signInFlow: "popup",
        signInOptions: [
          firebase.auth.GoogleAuthProvider.PROVIDER_ID,
          firebase.auth.FacebookAuthProvider.PROVIDER_ID, 
          firebase.auth.EmailAuthProvider.PROVIDER_ID 
          
        ],
        callbacks: {
          signInSuccess: () => onLoginSuccess()
        }
      }
    const onLoginSuccess = () =>  {
        firebase.auth().onAuthStateChanged(user => {
            setSignedIn(!!user) 
            console.log("user", user)
            const userObj = {
                name: user.displayName,
                email: user.email,
                photo: user.photoURL,
                id: user.uid
            }
            toast.success(`USER LOGIN SUCCESSFUL`, {
              position: 'top-right',
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
          }); 
            localStorage.setItem('user', JSON.stringify(userObj))
            // history.push('/onboarding')
          })
    }
    useEffect(() => {
        setSignedIn(!!localStorage.getItem('user'))
    })
    
    return <Wrapper>
        {isSignedIn ? (
            <span>
                <h2>Signed In!</h2>
                {/* <button onClick={() => firebase.auth().signOut()}>Sign out!</button> */}
                <h2>Welcome {localStorage.getItem('user')  ? JSON.parse(localStorage.getItem('user')).name : ''}</h2>
                            {/* <Link className="btn btn-border-3" to='/onboarding'>Get Started</Link> */}
                {/* <img
                    alt="profile picture"
                    src={firebase.auth().currentUser.photoURL}
                /> */}
            </span>
            ) : (
                <StyledFirebaseAuth
                    uiConfig={uiConfig}
                    firebaseAuth={firebase.auth()}
                />
            )}
    </Wrapper>
}

export default GoogleAuth