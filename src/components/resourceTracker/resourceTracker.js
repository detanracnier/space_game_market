import React from 'react';
import { useSelector } from 'react-redux';
import './resourceTracker.scss';

export default function ResourceTracker(){
	const funds = useSelector(state => state.resourceTracker.funds);
	const powerComsumed = useSelector(state => state.resourceTracker.power);
	const powerCapacity = useSelector(state => state.resourceTracker.powerCapacity);
	const crew = useSelector(state => state.resourceTracker.crew);
	const crewCapacity = useSelector(state => state.resourceTracker.crewCapacity);
	const nukeAmmo = useSelector(state => state.resourceTracker.ammo_nuke);
	const shiptoshipAmmo = useSelector(state => state.resourceTracker.ammo_ship_to_ship);
	const rocketAmmo = useSelector(state => state.resourceTracker.ammo_rocket);
	const torpedoAmmo = useSelector(state => state.resourceTracker.ammo_torpedo);

	return(
		<div className="resource_tracker_container">
			<div className="ammo_text">Nukes: {nukeAmmo}</div>
			<div className="resource_text">Funds Available: {funds}</div>
			<div className="ammo_text">Ship-to-Ship Missiles: {shiptoshipAmmo}</div>
			<div className="resource_text">Power Consumption: {powerCapacity-powerComsumed} / {powerCapacity}</div>
			<div className="ammo_text">Rockets: {rocketAmmo}</div>
			<div className="resource_text">Crew Availabile: {crewCapacity-crew} / {crewCapacity}</div>
			<div className="ammo_text">Torpedos: {torpedoAmmo}</div>

		</div>
	)
}