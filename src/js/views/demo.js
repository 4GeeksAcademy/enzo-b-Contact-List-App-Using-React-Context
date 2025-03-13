import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Demo = () => {
	const { store, actions } = useContext(Context);

	const [name, setName] = useState("")
	const [address, setAddress] = useState("")
	const [phone, setPhone] = useState("")
	const [email, setEmail] = useState("")


	const navigate = useNavigate()

	const handleSubmit = async (e) => {
		e.preventDefault()
		console.log(name, address, phone, email)
		let newContact = {
			"name": name,
			"phone": phone,
			"email": email,
			"address": address,
		  }
		let resp = await actions.createContact(newContact)
		if(resp){
			navigate("/")
		} else{
			alert("Algo salio mal")
		}

	}

	return (
		<div className="container">
			<h1>agregar contacts</h1>
			<div className="input-group mb-3">
				<span className="input-group-text" id="basic-addon1">Name</span>
				<input type="text" value= {name} onChange= {(e) => setName(e.target.value)} className="form-control" placeholder="Name" aria-label="Username" aria-describedby="basic-addon1" />
			</div>
			<div className="input-group mb-3">
				<span className="input-group-text" id="basic-addon1">Address</span>
				<input type="text" value= {address} onChange= {(e) => setAddress(e.target.value)} className="form-control" placeholder="Address" aria-label="Username" aria-describedby="basic-addon1" />
			</div>
			<div className="input-group mb-3">
				<span className="input-group-text" id="basic-addon1">Phone</span>
				<input type="text" value= {phone} onChange= {(e) => setPhone(e.target.value)} className="form-control" placeholder="Phone" aria-label="Username" aria-describedby="basic-addon1" />
			</div>
			<div className="input-group mb-3">
				<span className="input-group-text" id="basic-addon1">Email</span>
				<input type="text" value= {email} onChange= {(e) => setEmail(e.target.value)} className="form-control" placeholder="Email" aria-label="Username" aria-describedby="basic-addon1" />
			</div>
			<button type="button" onClick= {(e) => handleSubmit(e)} className="btn btn-success">Add contact</button>
			<br/>
			<Link to= "/">Get back to contacts</Link>
		</div>

	);
};
