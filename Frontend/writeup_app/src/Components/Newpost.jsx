import React from "react";
import Card from 'react-bootstrap/Card';
import { Button } from "react-bootstrap";
import NavbarCom from "./Navbar";
import { useNavigate, useParams } from "react-router-dom";
import "./newpost.css"
import axios from "axios";
export default function Newpost(){
    const navi=useNavigate()
    const {name}=useParams()
    const [uname,setuname]=React.useState("")
    const [pass,setpass]=React.useState("")
    const [resp,setresponse]=React.useState("")
    return <div><NavbarCom uname={name} type="inner"/>
        <center>
         <Card className="login-form" style={{ width: '70rem' }}>
      <Card.Body>
        <Card.Title>New Mindfull Post</Card.Title><br/>
        {resp==="Log In failed" ? <p id="alert"><strong>Username and password do not match</strong></p> :<></>}
        <label>Username : {name}</label>
        <br/>
        <br/>
        <label>Topic : </label><input type="text"></input><br/><br/>
        <label>Descprition : </label><br/><textarea rows={5} cols={40}></textarea>
        <br/><br/>
        <label>Image Source : </label><input type="text"></input><br/><br/>
        <label>Content : </label><br/>
        <textarea rows={10} cols={100}></textarea>
        <br/><br/>
        <label>Topics : </label>
        <select><option>Science</option><option>Engineering</option><option>Computer</option>
        <option>Machine Learning</option></select>
        <br/> <br/>
        <Button variant="secondary">Submit</Button>
      </Card.Body>
    </Card></center>
    </div>
}