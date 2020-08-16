import React from 'react';
import { useSelector } from 'react-redux';
import './resourceTracker.scss';

export default function ResourceTracker(){
	const funds = useSelector(state => state.funds.funds);
	const powerComsumed = useSelector(state => state.power.power);
	const powerCapacity = useSelector(state => state.power.powerCapacity);
	const crew = useSelector(state => state.crew.crew);
	const crewCapacity = useSelector(state => state.crew.crewCapacity);
	const ammo = useSelector(state => state.ammo);

	const AddReactorMessage = () => {
		return (<span className="reactor_warning">-You'll need a reactor</span>)
	}

	return(
		<div className="resource_tracker_container">
			<div className="ammo_text">Nukes: {ammo.nuke}</div>
			<div className="resource_text">Funds Available: {funds}</div>
			<div className="ammo_text">Ship-to-Ship Missiles: {ammo.shiptoship}</div>
			<div className="resource_text">Power Consumption: {powerCapacity-powerComsumed} / {powerCapacity} {powerCapacity===0 ? AddReactorMessage() : ""}</div>
			<div className="ammo_text">Rockets: {ammo.rocket}</div>
			<div className="resource_text">Crew Availabile: {crewCapacity-crew} / {crewCapacity}</div>
			<div className="ammo_text">Torpedos: {ammo.torpedo}</div>

		</div>
	)
}