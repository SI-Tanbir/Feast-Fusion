import { useContext, useEffect, useState } from "react";
import app from "../firebase";
import img from "./assets/others/authentication1.png";
import { getAuth,  signInWithEmailAndPassword } from "firebase/auth";
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import React from 'react';

import { ToastContainer, toast } from 'react-toastify';
import { AuthContext } from "./Authprovider/Authprovider";
import { useLocation, useNavigate } from "react-router";


const Login = () => {

// const info=useContext(AuthContext)

// console.log( info)


    const notify = () => toast("Captcha solved");

  const auth = getAuth(app);

  const [disabled,setDisabled]=useState(true)

  useEffect(()=>{
    loadCaptchaEnginge(6); 

  },[])
  //captcha checker
  const captchaChecker=(e)=>{
    e.preventDefault()
    const captcha= e.target.value;
    console.log(captcha)

   if(captcha.length ==6){
     
    if(validateCaptcha(captcha)==true){
        // confirm("Captha Match")
        setDisabled(false)
        notify()

    }
   }



  }



  const location = useLocation();
  const navigate = useNavigate();



//   console.log('tesing the from login locaiotn',location.state.from)

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log(email,password)



    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log(user);
        navigate('/dashboard');
        // console.log(location?.state?.from)


        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        console.log(errorMessage);
      });
  };



  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="email"
                className="input input-bordered text-black"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                
                name="password"
                type="password"
                placeholder="password"
                className="input input-bordered text-black"
                required
              />
              <label className="label">
              <LoadCanvasTemplateNoReload />


              </label>

              
               <input
               onChange={captchaChecker}
                name="captcha"
                type="text"
                placeholder="Prove you are human"
                className="text-black input input-bordered"
                required
              />
                        <ToastContainer />


            </div>
            <div className="form-control mt-6">
              {/* to do after complete produciton addded this --disabled in the disabled place */}
              <button disabled={false} className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
