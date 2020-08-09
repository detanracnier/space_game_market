import React from 'react';
import { useSelector } from 'react-redux';
import './shipInventory.scss';
import { useDispatch } from 'react-redux';
import { removeFromInventory, updateFunds, updateCrew, updateCrewCapacity, updatePower, updatePowerCapacity, updateAmmo } from '../../actions/actions';

export default function ShipInventory(){
    const weapons = useSelector(state => state.shipInventory.filter(item => item.type === "weapon"));
    const weaponsSorted = weapons.sort((a,b) => a.name > b.name ? 1 : -1);
    const engines = useSelector(state => state.shipInventory.filter(item => item.type === "engine"));
    const enginesSorted = engines.sort((a,b) => a.name > b.name ? 1 : -1);
    const reactors = useSelector(state => state.shipInventory.filter(item => item.type === "reactor"));
    const reactorsSorted = reactors.sort((a,b) => a.name > b.name ? 1 : -1);
    const extras = useSelector(state => state.shipInventory.filter(item => item.type === "extra"));
    const extrasSorted = extras.sort((a,b) => a.name > b.name ? 1 : -1);
    const dispatch = useDispatch();

    return (
        <div className="ship_inventory_container">
            <h2 className="si_header">Ship Inventory:</h2>
            <div className="si_item_type_header">Reactor:</div>
            {reactorsSorted.map(reactor =>{
                return (
                    <React.Fragment>
                        <div className="si_item_container" onClick={() => {
                            dispatch(removeFromInventory(reactor.id))
                            dispatch(updateFunds(reactor.cost*-1))
                            dispatch(updateCrew(reactor.crew*-1))
                            dispatch(updatePowerCapacity(reactor.powerCapacity*-1))
                        }}>
                            <h2 className="si_item_name">{reactor.name}</h2>
                            <div className="si_item_cost_container">
                                <div className="si_item_cost"><strong>Crew:</strong> {reactor.crew}</div>
                                <div className="si_item_cost"><strong>Power Gen.</strong> {reactor.powerCapacity}</div>
                                <div className="si_item_cost"><strong>Price:</strong> {reactor.cost}</div>
                            </div>
                        </div>
                    </React.Fragment>
                )
            })}
            <div className="si_item_type_header">Engine:</div>
            {enginesSorted.map(engine =>{
                return (
                    <React.Fragment>
                        <div className="si_item_container" onClick={() => {
                            dispatch(removeFromInventory(engine.id))
                            dispatch(updateFunds(engine.cost*-1))
                            dispatch(updateCrew(engine.crew*-1))
                            dispatch(updatePower(engine.power*-1))
                        }}>
                            <h2 className="si_item_name">{engine.name}</h2>
                            <div className="si_item_cost_container">
                                <div className="si_item_cost"><strong>Crew:</strong> {engine.crew}</div>
                                <div className="si_item_cost"><strong>Power:</strong> {engine.power}</div>
                                <div className="si_item_cost"><strong>Price:</strong> {engine.cost}</div>
                            </div>
                        </div>
                    </React.Fragment>
                )
            })}
            <div className="si_item_type_header">Weapons:</div>
            {weaponsSorted.map(weapon =>{
                return (
                    <React.Fragment>
                        <div className="si_item_container" onClick={() => {
                            dispatch(removeFromInventory(weapon.id))
                            dispatch(updateFunds(weapon.cost*-1))
                            dispatch(updateCrew(weapon.crew*-1))
                            dispatch(updatePower(weapon.power*-1))
                            dispatch(updateAmmo(weapon.ammoType,weapon.ammo*-1))

                        }}>
                            <h2 className="si_item_name">{weapon.name}</h2>
                            <div className="si_item_cost_container">
                                <div className="si_item_cost"><strong>Crew:</strong> {weapon.crew}</div>
                                <div className="si_item_cost"><strong>Power:</strong> {weapon.power}</div>
                                <div className="si_item_cost"><strong>Price:</strong> {weapon.cost}</div>
                            </div>
                        </div>
                    </React.Fragment>
                )
            })}
            <div className="si_item_type_header">Extras:</div>
            {extrasSorted.map(extra =>{
                return (
                    <React.Fragment>
                        <div className="si_item_container" onClick={() => {
                            dispatch(removeFromInventory(extra.id))
                            dispatch(updateFunds(extra.cost*-1))
                            if (extra.crew){dispatch(updateCrew(extra.crew*-1))}
                            if (extra.crewCapacity){dispatch(updateCrewCapacity(extra.crewCapacity*-1))}
                            if (extra.power){dispatch(updatePower(extra.power*-1))}
                            if (extra.powerCapacity){dispatch(updatePowerCapacity(extra.powerCapacity*-1))}
                            if (extra.ammo){dispatch(updateAmmo(extra.ammoType,extra.ammo*-1))}
                        }}>
                            <h2 className="si_item_name">{extra.name}</h2>
                            <div className="si_item_cost_container">
                                <div className="si_item_cost"><strong>Crew:</strong> {extra.crew ? extra.crew : "--"}</div>
                                <div className="si_item_cost"><strong>Power:</strong> {extra.power ? extra.power : "--"}</div>
                                <div className="si_item_cost"><strong>Price:</strong> {extra.cost}</div>
                            </div>
                        </div>
                    </React.Fragment>
                )
            })}
        </div>
    )
}