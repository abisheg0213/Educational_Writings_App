import React from "react";
import Card from 'react-bootstrap/Card';
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import NavbarCom from "./Navbar";
import axios from "axios";
import "./login.css"
export default function Signup(){
    const navi=useNavigate()
    const [uname,setuname]=React.useState("")
    const [pass,setpass]=React.useState("")
    const [rep_pass,set_reppass]=React.useState("")
    const [response,setresponse]=React.useState("")
    return <div> <NavbarCom type="outer"/><center>
         <Card className="login-form" style={{ width: '25rem' }}>
      <Card.Body>
        <Card.Title>New User Registration</Card.Title><br/>
        {response === "Username already Exists" ? <p id="alert"><strong>User with given username already Exists</strong></p> :<></>}
        <label>Username : </label><input onChange={(e)=>{
            setuname(e.target.value)
        }} type="text"></input>
        <br/>
        <br/>
        <label>Password : </label><input onChange={(e)=>{
            setpass(e.target.value)
        }} type="password"/><br/><br/>
        <label>Repeat Password : </label><input onChange={(e)=>{
            set_reppass(e.target.value)
        }} type="password"/><br/><br/>
        {(pass !== rep_pass && rep_pass!=="") ? <p id="alert"><strong>Passwords do not match</strong></p> :<></>}
        {(uname!=="" && pass === "") ? <p id="alert"><strong>Passwords Cannot be empty</strong></p> :<></>}
        {(pass === uname && pass!=="") ? <p id="alert"><strong>Password and Username cannot be the same</strong></p> :<></>}
        <Button onClick={(e)=>{
            e.preventDefault()
            axios.post('http://localhost:5000/signup',{user_name:uname,password:pass}).then((res)=>{
                setresponse(res.data)
                if(res.data==="Signed up successfully"){
                    navi('/login')
                }
                else{
                    console.log("*****")
                    setuname("")
                    setpass("")
                    set_reppass("")
                }
            })
        }} variant="outline-secondary">Sign Up</Button>{' '}<br/><br/>
        <Card.Link href="/login">Go to Login</Card.Link>
      </Card.Body>
    </Card></center>
    </div>
}