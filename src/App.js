import React from 'react';
import './App.css';
import ShipInventory from './components/ship/shipInventory';
import Market from './components/market/market';

function App() {
	return (
		<div>
			<ShipInventory />
			<Market />
		</div>
	);
}

export default App;
