import React from 'react';
import weaponsList from '../../data/weapons';
import engineList from '../../data/engines';
import reactorList from '../../data/reactors';
import extraList from '../../data/extra';
import Weapon from '../items/weapon';
import Engine from '../items/engine';
import Reactor from '../items/reactor';
import Extra from '../items/extra';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addToInventory, updateFunds, updateCrew, updateCrewCapacity, updatePower, updatePowerCapacity, updateAmmo, collapseMenu, reactorItemClicked } from '../../actions/actions';
import './market.scss';
import '../items/weapon.scss';
import '../items/engine.scss';
import '../items/reactor.scss';
import '../items/extra.scss';


export default function Market () {
	const dispatch = useDispatch();
	const reactorsCollapse = useSelector(state => state.market.reactorsCollapse);
	const enginesCollapse = useSelector(state => state.market.enginesCollapse);
	const weaponsCollapse = useSelector(state => state.market.weaponsCollapse);
	const extrasCollapse = useSelector(state => state.market.extrasCollapse);

	return (
		<div className="market_container">
			<div 
				className="mk_item_type_header" 
				onClick={()=> dispatch(collapseMenu("reactorsCollapse"))}>
					Reactors:
				<div className="collapsable_icon">{reactorsCollapse ? "+" : "-"}</div>
			</div>

			{
				reactorList.map(reactor =>
					{

						return (
							<div 
								key={reactor.name}
								className={reactorsCollapse ? "hidden" : "reactor_item_container"} 
								onClick={() => dispatch(reactorItemClicked(reactor))
								//dispatch(addToInventory(reactor))
								//dispatch(updateFunds(reactor.cost))
								//dispatch(updateCrew(reactor.crew))
								//dispatch(updatePowerCapacity(reactor.powerCapacity))
								}>
								<Reactor reactorItem={reactor} />
							</div>
						);
					})
			}

			<div 
				className="mk_item_type_header" 
				onClick={()=> dispatch(collapseMenu("enginesCollapse"))}>
				Engines:
				<div className="collapsable_icon">{reactorsCollapse ? "+" : "-"}</div>
			</div>

			{
				engineList.map(engine => {
					return (
						<div 
							key={engine.name}
							className={enginesCollapse ? "hidden" : "engine_item_container"} 
							onClick={() => {
							//dispatch(addToInventory(engine))
							//dispatch(updateFunds(engine.cost))
							//dispatch(updateCrew(engine.crew))
							//dispatch(updatePower(engine.power))
						}}>
							<Engine engineItem={engine} />
						</div>
					)
				})
			}
			<div 
				className="mk_item_type_header" 
				onClick={()=> dispatch(collapseMenu("weaponsCollapse"))}>
					Weapons:
				<div className="collapsable_icon">{reactorsCollapse ? "+" : "-"}</div>
			</div>
			{
				weaponsList.map(weapon => {
					return(
						<div 
							key={weapon.name}
							className={weaponsCollapse ? "hidden" : "weapon_item_container"} 
							onClick={() => {
							dispatch(addToInventory(weapon))
							dispatch(updateFunds(weapon.cost))
							dispatch(updateCrew(weapon.crew))
							dispatch(updatePower(weapon.power))
							dispatch(updateAmmo(weapon.ammoType,weapon.ammo))
						}}>
							<Weapon weaponItem={weapon} />
						</div>
					)
				})
			}

			<div className="mk_item_type_header" onClick={()=> dispatch(collapseMenu("extrasCollapse")) }>
				Extras:
				<div className="collapsable_icon">{reactorsCollapse ? "+" : "-"}</div>
			</div>

			{
				extraList.map(extra => {
					return(
						<div 
							key={extra.name}
							className={extrasCollapse ? "hidden" : "extra_item_container"} 
							onClick={() => {
							dispatch(addToInventory(extra))
							dispatch(updateFunds(extra.cost))
							if (extra.crew){
								dispatch(updateCrew(extra.crew))
							}
							if (extra.crewCapacity){
								dispatch(updateCrewCapacity(extra.crewCapacity))
							}
							if (extra.power){
								dispatch(updatePower(extra.power))
							}
							if (extra.powerCapacity){
								dispatch(updatePowerCapacity(extra.powerCapacity))
							}
							if (extra.ammo){
								dispatch(updateAmmo(extra.ammoType,extra.ammo))
							}
						}}>
							<Extra extraItem={extra} />
						</div>
					)
				})
			}
		</div>
	)
}