import { useEffect ,useState} from "react";
import "./App.css";
import Login from "./Login";
import fire from "./fire";
import Landing from "./Landing";


function App() {
  const [user, setuser] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [erroremail, seterroremail] = useState("");
  const [errorpassword, seterrorpassword] = useState("");
  const [hasaccount, sethasaccount] = useState(false);

  const clearInput = () => {
    setemail('')
    setpassword('')
  }
  const clearErrors = () => {
    seterrorpassword('')
    seterroremail('')
  }

  const handleLogin = () => {
    clearErrors()
    console.log("signinfdgbhfbwgbhasg")


    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            seterroremail(err.message);
            break;
          case "auth/wrong-password":
            seterrorpassword(err.message);
            break;
        }
      });
  };
  const handleSignup = () => {
    console.log("singup")
 
    clearInput()
    clearErrors()
   
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            seterroremail(err.message);
            break;
          case "auth/weak-password":
            seterrorpassword(err.message);
            break;
        }
      });
  };
  const handleLogout = () => {
    fire.auth().signOut();
  };
  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        clearInput()
        setuser(user);
      } else {
        setuser("");
      }
    });
  };
  useEffect(() => {
    authListener();
  }, []);
  return (
  user?(
  <Landing handleLogout={handleLogout} />
  ):

(<Login email={email} handleLogin={handleLogin} setemail={setemail} password={password} setpassword={setpassword} handleLogin={handleLogin} handleSignup={handleSignup} hasaccount={hasaccount} sethasaccount={sethasaccount} erroremail={erroremail} errorpassword={errorpassword} />)
  )

}

export default App;
