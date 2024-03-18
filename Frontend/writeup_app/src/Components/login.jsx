import React from "react";
import Card from 'react-bootstrap/Card';
import { Button } from "react-bootstrap";
import NavbarCom from "./Navbar";
import { useNavigate } from "react-router-dom";
import "./login.css"
import axios from "axios";
export default function Login(){
    const navi=useNavigate()
    const [uname,setuname]=React.useState("")
    const [pass,setpass]=React.useState("")
    const [resp,setresponse]=React.useState("")
    return <div> <NavbarCom type="outer"/><center>
         <Card className="login-form" style={{ width: '25rem' }}>
      <Card.Body>
        <Card.Title>Login</Card.Title><br/>
        {resp==="Log In failed" ? <p id="alert"><strong>Username and password do not match</strong></p> :<></>}
        <label>Username : </label><input onChange={(e)=>{
            setuname(e.target.value)
        }} type="text"/>
        <br/>
        <br/>
        <label>Password : </label><input onChange={(e)=>{
            setpass(e.target.value)
        }} type="password"/><br/><br/>
        <Button onClick={(e)=>{
            e.preventDefault()
            axios.post('http://localhost:5000/signIn',{uname:uname,pass:pass}).then((res)=>{
                setresponse(res.data)
                if(res.data==="Logged In Successfully"){
                    alert("Logged In Successfully")
                    navi("/profile/"+uname)
                }
            })
        }} variant="outline-secondary">Log In</Button>{' '}<br/><br/>
        <Card.Link href="/signup">Sign Up for New User</Card.Link>
      </Card.Body>
    </Card></center>
    </div>
}