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
		await actions.createContact(newContact)
		navigate("/")

		
	}

	return (
		<div className="container">
			<div className="d-flex justify-content-center">
				<h1 className="">Add a new contact</h1>
			</div>
			
			<div className="mb-3">
  				<label for="exampleFormControlInput1" className="form-label">Name</label>
				<input type="text" value= {name} onChange= {(e) => setName(e.target.value)} className="form-control form-control-lg" aria-label="Username" aria-describedby="basic-addon1" />
			</div>

			<div className=" mb-3">
			<label for="exampleFormControlInput1" className="form-label">Address</label>
				<input type="text" value= {address} onChange= {(e) => setAddress(e.target.value)} className="form-control form-control-lg" aria-label="Username" aria-describedby="basic-addon1" />
			</div>

			<div className="mb-3">
				<label for="exampleFormControlInput1" className="form-label">Phone</label>
				<input type="text" value= {phone} onChange= {(e) => setPhone(e.target.value)} className="form-control form-control-lg" aria-label="Username" aria-describedby="basic-addon1" />
			</div>

			<div className="mb-3">
				<label for="exampleFormControlInput1" className="form-label">Email</label>
				<input type="text" value= {email} onChange= {(e) => setEmail(e.target.value)} className="form-control form-control-lg" aria-label="Username" aria-describedby="basic-addon1" />
			</div>
			
			<button type="button" onClick= {(e) => handleSubmit(e)} className="btn btn-success btn btn-success w-100">SAVE</button>
			<br/>
			<Link to= "/">Or get back to contacts</Link>
		</div>

	);
};
