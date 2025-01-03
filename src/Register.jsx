
import axios from 'axios';
import app from '../firebase';
import img from './assets/others/authentication1.png'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


const Register = () => {

  const auth = getAuth(app);


  const handleRegister=(e)=>{
    e.preventDefault()
    const email = e.target.email.value;
    const password = e.target.password.value;






    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user)
    const axiosSend = axios.post(`http://localhost:5000/users`, user);
        console.log(axiosSend?.data);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage)

    // ..
  });




  }

  return (
<div
  className="hero min-h-screen"
  style={{
    backgroundImage: `url(${img})`,
  }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-neutral-content text-center">
    
    
  <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleRegister} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input name='email' type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input name='password' type="password" placeholder="password" className="input input-bordered" required />
    
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
      </form>
    </div>

  </div>
</div>
  )
}

export default Register