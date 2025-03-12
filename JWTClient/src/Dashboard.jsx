import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Button from 'react-bootstrap/Button';
const DashBoard=()=>{


    const navigate = useNavigate();
  const logout=()=>{
       localStorage.clear();
       navigate("/home");
  }


  useEffect(()=>{
    const token= localStorage.getItem("token");
      if(!token)
      {
        navigate("/home");        
      }
  })





    return(
        <>
        <div style={{backgroundColor:"lightpink",textAlign:"center", padding:"20px"}}>
        <h1> Welcome to User DashBoard</h1>
        </div>
         <div style={{textAlign:"right", backgroundColor:"aqua", fontSize:"30px"}}>
        Welcome : {localStorage.getItem("username")}<br></br>
        Email : {localStorage.getItem("useremail")}<br></br>
        <Button variant="primary"  onClick={logout}>Logout</Button>
        </div>
          
        </>
    )
}

export default DashBoard;