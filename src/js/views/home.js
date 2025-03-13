import React, { useEffect, useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Context } from "../store/appContext"
import Card from "../component/card.jsx";

export const Home = () => {
	const { actions, store } = useContext(Context)

	useEffect(() => {
		actions.getContacts()
	}, [])
	return (
		<div className="text-center mt-5">
			<h1>Contact List</h1>
			{store.contacts.map((contact) => (
				// <p>{contact.name}</p>
				<Card
					key = {contact.id}
					name = {contact.name}
					phone = {contact.phone}
					email = {contact.email}
					address = {contact.address}
					id = {contact.id}
				/>
			))}

		</div>
	)
};
