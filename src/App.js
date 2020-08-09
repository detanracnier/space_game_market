import React from 'react';
import './App.css';
import ResourceTracker from './components/resourceTracker/resourceTracker';
import ShipInventory from './components/shipInventory/shipInventory';
import Market from './components/market/market';

function App() {
	return (
		<div>
			<ResourceTracker />
			<ShipInventory />
			<Market />
		</div>
	);
}

export default App;
