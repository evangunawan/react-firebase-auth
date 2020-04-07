import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

const Register = () => {
  const [txtEmail, setTxtEmail] = React.useState('');
  const [txtName, setTxtName] = React.useState('');
  const [txtPassword, setTxtPassword] = React.useState('');

  //async function createUser() {

  //}

  const createUser = async () => {
    try{
      await firebase.auth().createUserWithEmailAndPassword(txtEmail, txtPassword);
      console.log('done');
    }catch(error) {
      console.log(error);
    }
  }

  return(
    <div>
      <label>email</label>
      <input type='text' value={txtEmail} onChange={(ev) => setTxtEmail(ev.target.value)}></input>
      <label>nama</label>
      <input type='text' value={txtName} onChange={(ev)=> setTxtName(ev.target.value)}></input>
      <label>Pass</label>
      <input type='password' value={txtPassword} onChange={(ev)=> setTxtPassword(ev.target.value)}/>
      <br/>
      <button onClick={createUser}>Register</button>
    </div>
  )
}

export default Register;