import React from 'react';
import shipsList from '../../data/ships';
import Images from '../images/images';
import { useSelector, useDispatch } from 'react-redux';
import { shipSelected } from '../../actions/actions';
import './ship.scss';

export default function Ship(){
	const ship = useSelector(state => state.ship);
	const shipImage = useSelector(state => state.ship.image);
	const dispatch = useDispatch();

	const handleChange = (event) => {
		const selectedShip = shipsList.filter(ship => ship.id === event.currentTarget.value);
		const selectedShipImage = Images[event.currentTarget.value];
		dispatch(shipSelected(selectedShip[0],selectedShipImage))
	}
	return(
		<React.Fragment>
			<div className="ship_container">
				<form className="ship_dropdown_container">
					<label className="ship_dropdown_label">Choose a Ship: </label>
					<select className="ship_dropdown_list" onChange={handleChange}>
						<option selected="true" disabled="disabled">-choose ship-</option>
						{shipsList.map(ship => {
							return (
								<option value={ship.id}>{ship.name} - {ship.class}</option>
							)
						})}
					</select>
				</form>
				<div className="ship_stats_container">
					<div className="ship_name">Ship: {ship.shipName}</div>
					<div className="ship_text">Class: {ship.shipClass}</div>
					<div className="ship_text">Armor: {ship.armor}</div>
					<div className="ship_text">Hull: {ship.hull}</div>
					<div className="ship_text">Crew: {ship.crewCapacity}</div>
				</div>
				<div className="ship_image_wrapper">
					<img className="ship_image" src={shipImage} alt="" />
				</div>
			</div>
		</React.Fragment>
	)
}