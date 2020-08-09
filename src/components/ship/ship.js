import React from 'react';
import shipsList from '../../data/ships';
import { useSelector, useDispatch } from 'react-redux';
import { updateShip } from '../../actions/actions';
import './ship.scss';

export default function Ship(){
	const ship = useSelector(state => state.ship);
	const dispatch = useDispatch();

	const handleChange = (event) => {
		const selectedShip = shipsList.filter(ship => ship.name === event.currentTarget.value);
		dispatch(updateShip(selectedShip))
	}
	return(
		<React.Fragment>
			<div className="ship_container">
				<form>
					<label>Choose a Ship: </label>
					<select onChange={handleChange}>
						{shipsList.map(ship => {
							return (
								<option value={ship.name}>{ship.name} - {ship.class}</option>
							)
						})}
					</select>
				</form>
				<div className="ship_name">Ship: {ship.shipName}</div>
				<div className="ship_text">Class: {ship.shipClass}</div>
				<div className="ship_text">Armor: {ship.armor}</div>
				<div className="ship_text">Hull: {ship.hull}</div>
				<div className="ship_text">Crew: {ship.crewCapacity}</div>
			</div>
		</React.Fragment>
	)
}