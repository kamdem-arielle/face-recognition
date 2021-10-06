import React from "react";
import Register from "../Register/Register";
import SignIn from "../SignIn/SignIn";
import './Navigation.css';

const Navigation= ({onroutechange,issignedin})=> {
    if(issignedin){
        return(
            <nav style={{display:'flex',justifyContent:'flex-end'}}>
                  <p className='f3 dim link pointer black underline pa3' onClick={()=>{onroutechange(SignIn)}}>Sign Out</p>
            </nav>
        
        );
    }else{
        return(
            <nav style={{display:'flex',justifyContent:'flex-end'}}>
            <p className='f3 dim link pointer black underline pa3' onClick={()=>{onroutechange(Register)}}>Register</p>
            <p className='f3 dim link pointer black underline pa3' onClick={()=>{onroutechange(SignIn)}}>Sign in</p>
            </nav>
        
        );
    }




};


export default Navigation;