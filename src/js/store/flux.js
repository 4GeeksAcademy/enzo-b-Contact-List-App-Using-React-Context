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
					const data = await response.json()
					console.log(data.contacts)
					setStore({contacts: data.contacts})
				} catch (error) {
					console.log(error)
				}
			},
			
		}
	};
};

export default getState;
