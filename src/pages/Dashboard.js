import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

const Dashboard = () => {
  const signOut = async () =>{
    try{
      await firebase.auth().signOut();
    }catch(error){
      console.log(error);
    }
  }
  return(
    <div>
      DASHBOARD
      <button onClick={signOut}>Sign Out</button>
    </div>
  )
}

export default Dashboard;