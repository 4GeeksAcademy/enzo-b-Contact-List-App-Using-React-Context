const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts:[],
			
		},
		actions: {
			// Use getActions to call a function within a fuction
			
			getContacts: async () => {
				try {
					const response = await fetch("https://playground.4geeks.com/contact/agendas/enzo-barrera/contacts")
					if (response.status == 404){
						await getActions().createAgenda()
						return
					}
					const data = await response.json()
					console.log(data.contacts)
					setStore({contacts: data.contacts})
				} catch (error) {
					console.log(error)
				}
			},
			createAgenda: async () =>{
				try {
					const response = await fetch("https://playground.4geeks.com/contact/agendas/enzo-barrera", {
						method: "POST",
						headers: {"Content-Type" : "application/json"}
					})
					console.log(response)
				} catch (error) {
					console.log(error)
				}
			},

			createContact: async (newContact) =>{
				try {
					const response = await fetch("https://playground.4geeks.com/contact/agendas/enzo-barrera/contacts", {
						method: "POST",
						headers: {"Content-Type" : "application/json"},
						body: JSON.stringify(newContact)
					})

					console.log(response)
					if (response.status == 201){
						await getActions().getContacts()
						return true
					} else{
						return false
					}
				} catch (error) {
					console.log(error)
				}
			},
		}
	};
};

export default getState;
