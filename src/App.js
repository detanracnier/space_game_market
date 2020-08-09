import React from 'react';
import './App.css';
import Ship from './components/ship/ship';
import ResourceTracker from './components/resourceTracker/resourceTracker';
import ShipInventory from './components/shipInventory/shipInventory';
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
