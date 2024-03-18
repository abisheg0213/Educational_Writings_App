import React from "react";
import NavbarCom from "./Navbar";
import { Route, Routes, useParams } from "react-router-dom";
import Newpost from "./Newpost";
export default function Profile(){
    const {name}=useParams()
    return <div>
        <NavbarCom type="inner" uname={name}></NavbarCom>
        
    </div>
}