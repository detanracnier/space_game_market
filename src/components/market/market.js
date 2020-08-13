import React from 'react';
import weaponList from '../../data/weapons';
import engineList from '../../data/engines';
import reactorList from '../../data/reactors';
import extrasList from '../../data/extra';
import ItemGroup from '../itemGroup/itemGroup';
import './market.scss';

export default function Market () {

	return (
		<div className="market_container">
			<ItemGroup id="reactor" header="Reactors" itemList={reactorList} />
			<ItemGroup id="engine" header="Engines" itemList={engineList} />
			<ItemGroup id="weapon" header="Weapons" itemList={weaponList} />
			<ItemGroup id="extra" header="Extras" itemList={extrasList} />
		</div>
	)
}