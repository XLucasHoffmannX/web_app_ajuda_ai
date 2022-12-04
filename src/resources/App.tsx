import React from 'react';
import DataProvider from '../context/DataProvider';

//styles
import './assets/styles/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import RouteBrowser from '../routes/RouteBrowser';

function App() {
	return (
		<div className="App">
			<DataProvider>
				<RouteBrowser />
			</DataProvider>
		</div>
	);
}

export default App;
