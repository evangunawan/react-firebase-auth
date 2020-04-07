import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

const Login = () => {

  const [txtEmail, setTxtEmail] = React.useState('');
  const [txtPassword, setTxtPassword] = React.useState('');

  const signIn = async () => {
    try{
      await firebase.auth().signInWithEmailAndPassword(txtEmail, txtPassword)
      console.log('signed in!')
    }catch(error){
      console.log(error);
    }
  }

  return(
    <div>
      <h2>Login Page</h2>
      <label>EMAIL</label>
      <input type='text' value={txtEmail} onChange={(ev)=>{setTxtEmail(ev.target.value)}} />
      <br></br>
      <label>PASS</label>
      <input type='password' value={txtPassword} onChange={(ev)=>{setTxtPassword(ev.target.value)}}/>
      <br/>
      <button onClick={signIn}>LOGIN</button>      
    </div>
  )
}

export default Login;