import { FaGoogle } from "react-icons/fa";

import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from "../../firebase";


const SocialLoginGoogle = () => {





  const provider = new GoogleAuthProvider();
  const auth = getAuth(app);

  const handleGoogle = (e) => {
    e.preventDefault();


  signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    console.log(token);
    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  })
  .catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    console.log(credential);
    // ...
  });
 

  };




  return (
    <div className="p-4">
      <button onClick={handleGoogle} className="btn btn-secondary">
        Continue with <FaGoogle></FaGoogle>
      </button>
    </div>
  );
};

export default SocialLoginGoogle;
