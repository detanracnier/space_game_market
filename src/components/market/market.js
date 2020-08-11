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
			<ItemGroup header="Reactors" itemList={reactorList} />
			<ItemGroup header="Engines" itemList={engineList} />
			<ItemGroup header="Weapons" itemList={weaponList} />
			<ItemGroup header="Extras" itemList={extrasList} />
		</div>
	)
}