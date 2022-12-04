import React, { createContext } from 'react'
import { v4 as uuidv4 } from 'uuid';

export const ContextState = createContext({});


export default function DataProvider({ children }: any) {
	const [controlPage, setControlPage] = React.useState<string | any>('Landing');
	const [token, setToken] = React.useState<string | any>();

	React.useEffect(() => {
		const access = localStorage.getItem('meajuda');
		
		if(!access){
			localStorage.setItem('meajuda', uuidv4());
			setToken(localStorage.getItem('meajuda'));
		}

		setToken(localStorage.getItem('meajuda'));
	}, [token])

	const state = {
        page: [controlPage, setControlPage],
        token: [token, setToken]
	}

	return (
		<ContextState.Provider value={state}>
			{children}
		</ContextState.Provider>
	)
}
