import React from 'react';
import './App.css';
import Ship from './components/ship/ship';
import ShipInventory from './components/shipInventory/shipInventory';
import ResourceTracker from './components/resourceTracker/resourceTracker';
import Market from './components/market/market';


function App() {
	return (
		<div>
			<Ship />
			<ResourceTracker />
			<ShipInventory />
			<Market />
		</div>
	);
}

export default App;
