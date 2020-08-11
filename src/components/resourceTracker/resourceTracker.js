import React from 'react';
import { useSelector } from 'react-redux';
import './resourceTracker.scss';

export default function ResourceTracker(){
	const funds = useSelector(state => state.funds.funds);
	const powerComsumed = useSelector(state => state.power.power);
	const powerCapacity = useSelector(state => state.power.powerCapacity);
	const crew = useSelector(state => state.crew.crew);
	const crewCapacity = useSelector(state => state.crew.crewCapacity);
	const ammo_nuke = useSelector(state => state.ammo.ammo_nuke);
	const ammo_shiptoship = useSelector(state => state.ammo.ammo_shiptoship);
	const ammo_rocket = useSelector(state => state.ammo.ammo_rocket);
	const ammo_torpedo = useSelector(state => state.ammo.ammo_torpedo);

	return(
		<div className="resource_tracker_container">
			<div className="ammo_text">Nukes: {ammo_nuke}</div>
			<div className="resource_text">Funds Available: {funds}</div>
			<div className="ammo_text">Ship-to-Ship Missiles: {ammo_shiptoship}</div>
			<div className="resource_text">Power Consumption: {powerCapacity-powerComsumed} / {powerCapacity} {powerCapacity===0 ? "<--- You'll need a reactor" : ""}</div>
			<div className="ammo_text">Rockets: {ammo_rocket}</div>
			<div className="resource_text">Crew Availabile: {crewCapacity-crew} / {crewCapacity}</div>
			<div className="ammo_text">Torpedos: {ammo_torpedo}</div>

		</div>
	)
}