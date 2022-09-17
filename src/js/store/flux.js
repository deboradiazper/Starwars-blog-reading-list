const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			characters: [],
            planets: [],
            vehicles: [],
            favorites: [],
            disable: false,
            index: 0,

		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},

			loadCharacters: () => {
                fetch("https://www.swapi.tech/api/people/")
                    .then((response) => response.json())
                    .then((data) => setStore({
                        characters: data.results
                    }));
            },
            loadPlanets: () => {
                fetch("https://www.swapi.tech/api/planets/")
                    .then((response) => response.json())
                    .then((data) => setStore({
                        planets: data.results
                    }));
            },
            loadVehicles: () => {
                fetch("https://www.swapi.tech/api/vehicles/")
                    .then((response) => response.json())
                    .then((data) => setStore({
                        vehicles: data.results
                    }));
            },

            addFavorites: (item) => {

                const store = getStore();
                if (!store.favorites.includes(item)) {
                    setStore({
                        favorites: [...store.favorites, item]
                    });
                } else {
                    setStore({
                        favorites: store.favorites.filter((name) =>
                            name !== item)
                    })
                }

            },

            deleteFavorites: (index) => {

                const store = getStore();

                setStore({
                    favorites: store.favorites.filter((favorites, i) => i !== index)
                })


            },



			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
