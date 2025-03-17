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
	
	const handleEdit = (contact) => {
		const newName = prompt("Enter new name:", contact.name);
		const newPhone = prompt("Enter new phone:", contact.phone);
		const newEmail = prompt("Enter new email:", contact.email);
		const newAddress = prompt("Enter new address:", contact.address);
	
		if (newName && newPhone && newEmail && newAddress) {
			const updatedContact = {
				name: newName,
				phone: newPhone,
				email: newEmail,
				address: newAddress
			};
	
			actions.updateContact(contact.id, updatedContact).then(success => {
				if (success) {
					alert("Contact updated successfully!");
				} else {
					alert("Error updating contact.");
				}
			});
		}
	};
	
	return (
		<div className="text-center my-5">
			<h1 className="mb-4">Contact List</h1>
			{store.contacts.map((contact) => (
				// <p>{contact.name}</p>
				<Card
                    key={contact.id}
                    id={contact.id}
                    name={contact.name}
                    phone={contact.phone}
                    email={contact.email}
                    address={contact.address}
                    onDelete={() => actions.deleteContact(contact.id)} // ✅ Pass onDelete
                    onEdit={() => handleEdit(contact)} // Placeholder
                />
			))}

		</div>
	)
};
